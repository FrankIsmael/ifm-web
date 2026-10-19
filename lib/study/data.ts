import { db, STUDY_TZ } from './db';
import { schedule, type CardState, type Rating, type Schedule } from './srs';

export interface Deck {
  id: number;
  name: string;
  description: string;
  newPerDay: number;
}

export interface DeckSummary extends Deck {
  total: number;
  newCount: number; // new cards still available today (after the daily limit)
  learningCount: number;
  reviewCount: number;
}

/** JSON-safe card, used by API responses and client components. */
export interface CardDTO extends Schedule {
  id: number;
  deckId: number;
  front: string;
  back: string;
  due: string;
}

interface CardRow extends Schedule {
  id: number;
  deckId: number;
  front: string;
  back: string;
  state: CardState;
  due: Date;
}

const toDTO = (row: CardRow): CardDTO => ({
  id: row.id,
  deckId: row.deckId,
  front: row.front,
  back: row.back,
  state: row.state,
  step: row.step,
  ease: row.ease,
  intervalDays: row.intervalDays,
  reps: row.reps,
  lapses: row.lapses,
  due: row.due.toISOString(),
});

const LEARN_AHEAD_MINUTES = 20;

async function summaries(deckId?: number): Promise<DeckSummary[]> {
  const sql = await db();
  const rows = await sql<(Deck & { total: number; newTotal: number; newToday: number; learningCount: number; reviewCount: number })[]>`
    with bounds as (
      select (date_trunc('day', now() at time zone ${STUDY_TZ}) at time zone ${STUDY_TZ}) as start_today
    )
    select
      d.id, d.name, d.description, d.new_per_day,
      count(c.id)::int as total,
      count(c.id) filter (where c.state = 'new')::int as new_total,
      count(c.id) filter (where c.state in ('learning', 'relearning') and c.due < b.start_today + interval '1 day')::int as learning_count,
      count(c.id) filter (where c.state = 'review' and c.due < b.start_today + interval '1 day')::int as review_count,
      (select count(*) from study_reviews r
        where r.deck_id = d.id and r.prev_state = 'new' and r.reviewed_at >= b.start_today)::int as new_today
    from study_decks d
    cross join bounds b
    left join study_cards c on c.deck_id = d.id
    where ${deckId ?? null}::int is null or d.id = ${deckId ?? null}::int
    group by d.id, b.start_today
    order by d.id`;
  return rows.map(({ newTotal, newToday, ...deck }) => ({
    ...deck,
    newCount: Math.min(newTotal, Math.max(0, deck.newPerDay - newToday)),
  }));
}

export const listDecks = () => summaries();

export async function getDeck(id: number) {
  const [deck] = await summaries(id);
  return deck ?? null;
}

export async function getStats() {
  const sql = await db();
  const days = await sql<{ day: string; count: number }[]>`
    select to_char(reviewed_at at time zone ${STUDY_TZ}, 'YYYY-MM-DD') as day, count(*)::int as count
    from study_reviews
    where reviewed_at > now() - interval '400 days'
    group by 1
    order by 1 desc`;
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: STUDY_TZ }).format(new Date());
  const reviewedToday = days.find((d) => d.day === today)?.count ?? 0;

  // Streak counts back from today, or from yesterday if today has no reviews yet.
  const reviewed = new Set(days.map((d) => d.day));
  const cursor = new Date(`${today}T12:00:00Z`);
  if (!reviewed.has(today)) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let streak = 0;
  while (reviewed.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return { reviewedToday, streak };
}

export async function createDeck(input: { name: string; description: string }) {
  const sql = await db();
  const [row] = await sql<{ id: number }[]>`
    insert into study_decks (name, description) values (${input.name}, ${input.description}) returning id`;
  return row.id;
}

export async function updateDeck(id: number, input: Partial<Pick<Deck, 'name' | 'description' | 'newPerDay'>>) {
  const sql = await db();
  const [current] = await sql<Deck[]>`select * from study_decks where id = ${id}`;
  if (!current) return false;
  const next = { ...current, ...input };
  await sql`
    update study_decks
    set name = ${next.name}, description = ${next.description}, new_per_day = ${next.newPerDay}
    where id = ${id}`;
  return true;
}

export async function deleteDeck(id: number) {
  const sql = await db();
  await sql`delete from study_reviews where deck_id = ${id}`;
  const result = await sql`delete from study_decks where id = ${id}`;
  return result.count > 0;
}

export async function listCards(deckId: number) {
  const sql = await db();
  const rows = await sql<CardRow[]>`select * from study_cards where deck_id = ${deckId} order by id desc`;
  return rows.map(toDTO);
}

export async function createCards(deckId: number, cards: { front: string; back: string }[]) {
  const sql = await db();
  const rows = cards.map((c) => ({ deck_id: deckId, front: c.front, back: c.back }));
  const created = await sql<CardRow[]>`
    insert into study_cards ${sql(rows)} returning *`;
  return created.map(toDTO);
}

export async function updateCard(id: number, input: { front: string; back: string }) {
  const sql = await db();
  const [row] = await sql<CardRow[]>`
    update study_cards set front = ${input.front}, back = ${input.back}, updated_at = now()
    where id = ${id} returning *`;
  return row ? toDTO(row) : null;
}

export async function resetCard(id: number) {
  const sql = await db();
  const [row] = await sql<CardRow[]>`
    update study_cards
    set state = 'new', step = 0, ease = 2.5, interval_days = 0, reps = 0, lapses = 0, due = now(), updated_at = now()
    where id = ${id} returning *`;
  return row ? toDTO(row) : null;
}

export async function deleteCard(id: number) {
  const sql = await db();
  const result = await sql`delete from study_cards where id = ${id}`;
  return result.count > 0;
}

/** The next card to study in a deck, plus fresh counts for the session header. */
export async function getSession(deckId: number) {
  const sql = await db();
  const deck = await getDeck(deckId);
  if (!deck) return null;

  const learningNow = sql<CardRow[]>`
    select * from study_cards
    where deck_id = ${deckId} and state in ('learning', 'relearning') and due <= now()
    order by due limit 1`;
  const reviewToday = sql<CardRow[]>`
    select * from study_cards
    where deck_id = ${deckId} and state = 'review'
      and due < (date_trunc('day', now() at time zone ${STUDY_TZ}) at time zone ${STUDY_TZ}) + interval '1 day'
    order by due limit 1`;
  const fresh = sql<CardRow[]>`
    select * from study_cards where deck_id = ${deckId} and state = 'new' order by id limit 1`;
  const learnAhead = sql<CardRow[]>`
    select * from study_cards
    where deck_id = ${deckId} and state in ('learning', 'relearning')
      and due <= now() + make_interval(mins => ${LEARN_AHEAD_MINUTES})
    order by due limit 1`;

  let [card] = await learningNow;
  if (!card) [card] = await reviewToday;
  if (!card && deck.newCount > 0) [card] = await fresh;
  if (!card) [card] = await learnAhead;

  let nextDue: string | null = null;
  if (!card) {
    const [row] = await sql<{ due: Date }[]>`
      select min(due) as due from study_cards where deck_id = ${deckId} and state <> 'new'`;
    nextDue = row?.due ? row.due.toISOString() : null;
  }

  return { deck, card: card ? toDTO(card) : null, nextDue };
}

export async function reviewCard(id: number, rating: Rating) {
  const sql = await db();
  return sql.begin(async (tx) => {
    const [card] = await tx<CardRow[]>`select * from study_cards where id = ${id} for update`;
    if (!card) return null;
    const next = schedule(card, rating);
    await tx`
      update study_cards
      set state = ${next.state}, step = ${next.step}, ease = ${next.ease},
          interval_days = ${next.intervalDays}, reps = ${next.reps}, lapses = ${next.lapses},
          due = ${next.due}, updated_at = now()
      where id = ${id}`;
    await tx`
      insert into study_reviews (card_id, deck_id, rating, prev_state, interval_days)
      values (${id}, ${card.deckId}, ${rating}, ${card.state}, ${next.intervalDays})`;
    return card.deckId;
  });
}
