import postgres from 'postgres';
import { sampleDeck } from './sample-deck';

declare global {
  // eslint-disable-next-line no-var
  var __studySql: postgres.Sql | undefined;
  // eslint-disable-next-line no-var
  var __studyReady: Promise<void> | undefined;
}

function client() {
  if (!globalThis.__studySql) {
    const url = process.env.POSTGRES_URL;
    if (!url) throw new Error('POSTGRES_URL is not set');
    globalThis.__studySql = postgres(url, {
      max: 3,
      idle_timeout: 20,
      prepare: false,
      transform: postgres.camel,
      onnotice: () => {},
    });
  }
  return globalThis.__studySql;
}

async function migrate(sql: postgres.Sql) {
  await sql`
    create table if not exists study_decks (
      id serial primary key,
      name text not null,
      description text not null default '',
      new_per_day int not null default 20,
      created_at timestamptz not null default now()
    )`;
  await sql`
    create table if not exists study_cards (
      id serial primary key,
      deck_id int not null references study_decks(id) on delete cascade,
      front text not null,
      back text not null,
      state text not null default 'new'
        check (state in ('new', 'learning', 'review', 'relearning')),
      step int not null default 0,
      ease real not null default 2.5,
      interval_days real not null default 0,
      reps int not null default 0,
      lapses int not null default 0,
      due timestamptz not null default now(),
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )`;
  await sql`create index if not exists study_cards_deck_due on study_cards (deck_id, state, due)`;
  await sql`
    create table if not exists study_reviews (
      id serial primary key,
      card_id int not null references study_cards(id) on delete cascade,
      deck_id int not null,
      rating smallint not null,
      prev_state text not null,
      interval_days real not null,
      reviewed_at timestamptz not null default now()
    )`;
  await sql`create index if not exists study_reviews_deck_time on study_reviews (deck_id, reviewed_at)`;
  await sql`create table if not exists study_meta (key text primary key, value text not null)`;

  // Seed the sample deck exactly once, so deleting it doesn't bring it back.
  await sql.begin(async (tx) => {
    const [claimed] = await tx`
      insert into study_meta (key, value) values ('seeded', 'true')
      on conflict (key) do nothing
      returning key`;
    if (!claimed) return;
    const [deck] = await tx`
      insert into study_decks (name, description)
      values (${sampleDeck.name}, ${sampleDeck.description})
      returning id`;
    const rows = sampleDeck.cards.map((c) => ({ deck_id: deck.id, front: c.front, back: c.back }));
    await tx`insert into study_cards ${tx(rows)}`;
  });
}

/** Returns the SQL client after making sure the schema exists. */
export async function db() {
  const sql = client();
  globalThis.__studyReady ??= migrate(sql).catch((err) => {
    globalThis.__studyReady = undefined;
    throw err;
  });
  await globalThis.__studyReady;
  return sql;
}

/** IANA timezone used to decide where "today" starts. */
export const STUDY_TZ = process.env.STUDY_TZ || 'America/Mexico_City';
