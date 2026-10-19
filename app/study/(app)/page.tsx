import Link from 'next/link';
import { getStats, listDecks } from '@/lib/study/data';
import { requireAuth } from '@/lib/study/auth';
import { NewDeckForm } from '@/components/study/new-deck-form';
import { Counts, Panel } from '@/components/study/ui';

export const dynamic = 'force-dynamic';

export default async function StudyHome() {
  requireAuth();
  const [decks, stats] = await Promise.all([listDecks(), getStats()]);
  const due = decks.reduce((n, d) => n + d.newCount + d.learningCount + d.reviewCount, 0);
  const total = decks.reduce((n, d) => n + d.total, 0);

  return (
    <div className="space-y-10">
      <section>
        <p className="eyebrow text-highlight">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your decks</h1>
        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {[
            ['Due today', due],
            ['Reviewed today', stats.reviewedToday],
            ['Day streak', stats.streak],
            ['Total cards', total],
          ].map(([label, value]) => (
            <div key={label} className="bg-card px-5 py-4">
              <dt className="eyebrow text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-sm font-medium text-muted-foreground">
            {decks.length} {decks.length === 1 ? 'deck' : 'decks'}
          </h2>
          <span className="hidden items-center gap-3 font-mono text-[11px] text-dim sm:inline-flex">
            <span className="text-sky-400">new</span>
            <span className="text-amber-400">learning</span>
            <span className="text-highlight">review</span>
          </span>
        </div>

        <Panel className="divide-y divide-border">
          {decks.length === 0 && (
            <p className="px-5 py-10 text-center text-sm text-muted-foreground">No decks yet. Create your first one below.</p>
          )}
          {decks.map((deck) => {
            const pending = deck.newCount + deck.learningCount + deck.reviewCount;
            return (
              <div key={deck.id} className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
                <div className="min-w-0 flex-1">
                  <Link href={`/study/deck/${deck.id}`} className="font-medium hover:text-highlight">
                    {deck.name}
                  </Link>
                  <p className="truncate text-sm text-muted-foreground">
                    {deck.description || `${deck.total} ${deck.total === 1 ? 'card' : 'cards'}`}
                  </p>
                </div>
                <Counts newCount={deck.newCount} learningCount={deck.learningCount} reviewCount={deck.reviewCount} />
                <div className="flex gap-2">
                  <Link
                    href={`/study/deck/${deck.id}`}
                    className="inline-flex h-9 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
                  >
                    Manage
                  </Link>
                  <Link
                    href={`/study/deck/${deck.id}/review`}
                    aria-disabled={!pending}
                    className={
                      pending
                        ? 'inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90'
                        : 'pointer-events-none inline-flex h-9 items-center rounded-md border border-border px-4 text-sm text-dim'
                    }
                  >
                    {pending ? 'Study' : 'Done'}
                  </Link>
                </div>
              </div>
            );
          })}
        </Panel>

        <NewDeckForm />
      </section>
    </div>
  );
}
