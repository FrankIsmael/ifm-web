/**
 * Anki-style scheduler (SM-2 with learning steps). Pure functions, shared by
 * the API (which persists the result) and the review UI (button previews).
 */

export type Rating = 1 | 2 | 3 | 4; // Again, Hard, Good, Easy
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface Schedule {
  state: CardState;
  step: number;
  ease: number;
  intervalDays: number;
  reps: number;
  lapses: number;
}

export interface Scheduled extends Schedule {
  due: Date;
}

const LEARN_STEPS = [1, 10]; // minutes
const RELEARN_STEPS = [10]; // minutes
const GRADUATING_INTERVAL = 1; // days
const EASY_INTERVAL = 4; // days
const MIN_EASE = 1.3;
const MAX_INTERVAL = 36500;

const MINUTE = 60_000;
const DAY = 86_400_000;

export const RATINGS: { value: Rating; label: string; key: string }[] = [
  { value: 1, label: 'Again', key: '1' },
  { value: 2, label: 'Hard', key: '2' },
  { value: 3, label: 'Good', key: '3' },
  { value: 4, label: 'Easy', key: '4' },
];

const clampInterval = (days: number) => Math.min(MAX_INTERVAL, Math.max(1, Math.round(days)));

export function schedule(card: Schedule, rating: Rating, now = new Date()): Scheduled {
  const next: Schedule = { ...card, reps: card.reps + 1 };
  const inMinutes = (m: number) => new Date(now.getTime() + m * MINUTE);
  const inDays = (d: number) => new Date(now.getTime() + d * DAY);

  if (card.state === 'review') {
    const ivl = Math.max(1, card.intervalDays);
    if (rating === 1) {
      next.state = 'relearning';
      next.step = 0;
      next.lapses = card.lapses + 1;
      next.ease = Math.max(MIN_EASE, card.ease - 0.2);
      next.intervalDays = 1;
      return { ...next, due: inMinutes(RELEARN_STEPS[0]) };
    }
    const hard = clampInterval(Math.max(ivl + 1, ivl * 1.2));
    const good = clampInterval(Math.max(hard + 1, ivl * card.ease));
    const easy = clampInterval(Math.max(good + 1, ivl * card.ease * 1.3));
    if (rating === 2) {
      next.ease = Math.max(MIN_EASE, card.ease - 0.15);
      next.intervalDays = hard;
    } else if (rating === 3) {
      next.intervalDays = good;
    } else {
      next.ease = card.ease + 0.15;
      next.intervalDays = easy;
    }
    return { ...next, due: inDays(next.intervalDays) };
  }

  // new, learning and relearning all walk through minute-based steps
  const relearning = card.state === 'relearning';
  const steps = relearning ? RELEARN_STEPS : LEARN_STEPS;
  const step = Math.min(card.step, steps.length - 1);
  const graduate = (days: number): Scheduled => {
    next.state = 'review';
    next.step = 0;
    next.intervalDays = days;
    return { ...next, due: inDays(days) };
  };

  if (rating === 1) {
    next.state = relearning ? 'relearning' : 'learning';
    next.step = 0;
    return { ...next, due: inMinutes(steps[0]) };
  }
  if (rating === 2) {
    next.state = relearning ? 'relearning' : 'learning';
    next.step = step;
    const delay = step === 0 && steps.length > 1 ? (steps[0] + steps[1]) / 2 : steps[step];
    return { ...next, due: inMinutes(delay) };
  }
  if (rating === 3) {
    if (step + 1 < steps.length) {
      next.state = relearning ? 'relearning' : 'learning';
      next.step = step + 1;
      return { ...next, due: inMinutes(steps[step + 1]) };
    }
    return graduate(relearning ? Math.max(1, card.intervalDays) : GRADUATING_INTERVAL);
  }
  return graduate(relearning ? Math.max(1, card.intervalDays) + 1 : EASY_INTERVAL);
}

/** Human-readable delay, e.g. "<1m", "10m", "3d", "1.5mo", "2.1y". */
export function formatDelay(ms: number): string {
  const minutes = ms / MINUTE;
  if (minutes < 1) return '<1m';
  if (minutes < 60) return `${Math.round(minutes)}m`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)}h`;
  const days = hours / 24;
  if (days < 30) return `${Math.round(days)}d`;
  if (days < 365) return `${(days / 30).toFixed(1).replace(/\.0$/, '')}mo`;
  return `${(days / 365).toFixed(1).replace(/\.0$/, '')}y`;
}

export function previewDelays(card: Schedule, now = new Date()): Record<Rating, string> {
  const out = {} as Record<Rating, string>;
  for (const { value } of RATINGS) {
    out[value] = formatDelay(schedule(card, value, now).due.getTime() - now.getTime());
  }
  return out;
}
