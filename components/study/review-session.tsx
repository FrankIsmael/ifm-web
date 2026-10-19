'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import type { CardDTO, DeckSummary } from '@/lib/study/data';
import { formatDelay, previewDelays, RATINGS, type Rating } from '@/lib/study/srs';
import { cn } from '@/lib/utils';
import { api } from './client-api';
import { Markdown } from './markdown';
import { Button, Counts, Kbd, Panel } from './ui';

interface Session {
  deck: DeckSummary;
  card: CardDTO | null;
  nextDue: string | null;
}

const ratingStyle: Record<Rating, string> = {
  1: 'text-red-400',
  2: 'text-amber-400',
  3: 'text-highlight',
  4: 'text-sky-400',
};

export function ReviewSession({ initial }: { initial: Session }) {
  const router = useRouter();
  const [session, setSession] = useState(initial);
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(0);

  const { deck, card } = session;
  const remaining = deck.newCount + deck.learningCount + deck.reviewCount;
  const progress = done + remaining ? done / (done + remaining) : 1;
  const active = !card ? undefined : card.state === 'new' ? 'new' : card.state === 'review' ? 'review' : 'learning';

  const rate = useCallback(
    async (rating: Rating) => {
      if (!card || !revealed || busy) return;
      setBusy(true);
      setError('');
      try {
        const next = await api<Session>(`/cards/${card.id}/review`, { body: { rating } });
        setSession(next);
        setRevealed(false);
        setDone((n) => n + 1);
        window.scrollTo({ top: 0 });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setBusy(false);
      }
    },
    [card, revealed, busy],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      if (e.target instanceof Element && e.target.closest('input, textarea, [contenteditable]')) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (revealed) rate(3);
        else setRevealed(true);
      } else if (revealed && ['1', '2', '3', '4'].includes(e.key)) {
        rate(Number(e.key) as Rating);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [revealed, rate]);

  // Refresh server data (dashboard counts) when leaving the session.
  useEffect(() => () => router.refresh(), [router]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between gap-4">
        <Link href={`/study/deck/${deck.id}`} className="min-w-0 truncate text-sm text-muted-foreground hover:text-foreground">
          ← {deck.name}
        </Link>
        <Counts
          newCount={deck.newCount}
          learningCount={deck.learningCount}
          reviewCount={deck.reviewCount}
          active={active}
        />
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-highlight transition-[width] duration-500" style={{ width: `${progress * 100}%` }} />
      </div>

      {card ? (
        <>
          <Panel className="mt-8 min-h-[340px] px-6 py-10 sm:px-12">
            <Markdown key={`front-${card.id}`} source={card.front} className="text-[1.15rem]" />
            <AnimatePresence initial={false}>
              {revealed && (
                <motion.div
                  key={`back-${card.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <hr className="my-8 border-border" />
                  <Markdown source={card.back} />
                </motion.div>
              )}
            </AnimatePresence>
          </Panel>

          <div className="sticky bottom-0 -mx-4 mt-6 bg-background px-4 pb-6 pt-2 sm:static sm:mx-0 sm:p-0">
            {revealed ? (
              <RatingButtons card={card} busy={busy} onRate={rate} />
            ) : (
              <Button variant="primary" className="h-12 w-full text-base" onClick={() => setRevealed(true)}>
                Show answer
                <Kbd>Space</Kbd>
              </Button>
            )}
            {error && <p className="mt-3 text-center text-sm text-red-400">{error}</p>}
          </div>
        </>
      ) : (
        <Finished session={session} done={done} />
      )}
    </div>
  );
}

function RatingButtons({ card, busy, onRate }: { card: CardDTO; busy: boolean; onRate: (r: Rating) => void }) {
  const delays = previewDelays(card);
  return (
    <div className="grid grid-cols-4 gap-2">
      {RATINGS.map(({ value, label, key }) => (
        <button
          key={value}
          disabled={busy}
          onClick={() => onRate(value)}
          className={cn(
            'flex flex-col items-center gap-1 rounded-md border border-border bg-card py-3 transition-colors',
            'hover:bg-surface-hover disabled:opacity-50',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
          )}
        >
          <span className="font-mono text-[11px] text-dim">{delays[value]}</span>
          <span className={cn('text-sm font-medium', ratingStyle[value])}>{label}</span>
          <span className="hidden sm:block">
            <Kbd>{key}</Kbd>
          </span>
        </button>
      ))}
    </div>
  );
}

function Finished({ session, done }: { session: Session; done: number }) {
  const wait = session.nextDue ? new Date(session.nextDue).getTime() - Date.now() : null;
  return (
    <Panel className="mt-8 px-6 py-16 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-border text-highlight">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m5 12 5 5L20 7" />
        </svg>
      </div>
      <h1 className="mt-5 text-2xl font-semibold tracking-tight">All caught up</h1>
      <p className="mt-2 text-muted-foreground">
        {done > 0 ? `You reviewed ${done} ${done === 1 ? 'card' : 'cards'} this session.` : 'Nothing is due in this deck right now.'}
        {wait !== null && wait > 0 && <> Next card is due in {formatDelay(wait)}.</>}
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <Link
          href="/study"
          className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to decks
        </Link>
        <Link
          href={`/study/deck/${session.deck.id}`}
          className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm transition-colors hover:bg-surface-hover"
        >
          Manage deck
        </Link>
      </div>
    </Panel>
  );
}
