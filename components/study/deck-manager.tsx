'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { CardDTO, DeckSummary } from '@/lib/study/data';
import { formatDelay } from '@/lib/study/srs';
import { cn } from '@/lib/utils';
import { api } from './client-api';
import { CardEditor } from './card-editor';
import { Markdown } from './markdown';
import { Button, Counts, Input, Label, Panel, Textarea } from './ui';

type Tab = 'cards' | 'add' | 'import' | 'settings';

export function DeckManager({ deck, initialCards }: { deck: DeckSummary; initialCards: CardDTO[] }) {
  const router = useRouter();
  const [cards, setCards] = useState(initialCards);
  const [tab, setTab] = useState<Tab>(initialCards.length ? 'cards' : 'add');
  const pending = deck.newCount + deck.learningCount + deck.reviewCount;

  const changed = (next: CardDTO[]) => {
    setCards(next);
    router.refresh(); // keep the due counts in the header current
  };

  const tabs: [Tab, string][] = [
    ['cards', `Cards · ${cards.length}`],
    ['add', 'Add card'],
    ['import', 'Import'],
    ['settings', 'Settings'],
  ];

  return (
    <div>
      <Link href="/study" className="text-sm text-muted-foreground hover:text-foreground">
        ← All decks
      </Link>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight">{deck.name}</h1>
          {deck.description && <p className="mt-1 text-muted-foreground">{deck.description}</p>}
        </div>
        <div className="flex items-center gap-5">
          <Counts newCount={deck.newCount} learningCount={deck.learningCount} reviewCount={deck.reviewCount} />
          {pending > 0 ? (
            <Link
              href={`/study/deck/${deck.id}/review`}
              className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Study now
            </Link>
          ) : (
            <span className="text-sm text-dim">Nothing due</span>
          )}
        </div>
      </div>

      <nav className="mt-8 flex gap-1 overflow-x-auto border-b border-border">
        {tabs.map(([value, label]) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className={cn(
              '-mb-px whitespace-nowrap border-b-2 px-3 pb-2.5 text-sm transition-colors',
              tab === value
                ? 'border-highlight text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-6">
        {tab === 'cards' && <CardList cards={cards} onChange={changed} onAdd={() => setTab('add')} />}
        {tab === 'add' && (
          <AddCard
            deckId={deck.id}
            onAdded={(card) => changed([card, ...cards])}
          />
        )}
        {tab === 'import' && (
          <ImportCards
            deckId={deck.id}
            onImported={(created) => {
              changed([...created.reverse(), ...cards]);
              setTab('cards');
            }}
          />
        )}
        {tab === 'settings' && <DeckSettings deck={deck} />}
      </div>
    </div>
  );
}

function AddCard({ deckId, onAdded }: { deckId: number; onAdded: (card: CardDTO) => void }) {
  const [added, setAdded] = useState(0);
  return (
    <div>
      <CardEditor
        submitLabel="Add card"
        clearOnSubmit
        onSubmit={async (draft) => {
          const { cards } = await api<{ cards: CardDTO[] }>(`/decks/${deckId}/cards`, { body: { cards: [draft] } });
          onAdded(cards[0]);
          setAdded((n) => n + 1);
        }}
      />
      {added > 0 && (
        <p className="mt-4 text-sm text-highlight">
          {added} {added === 1 ? 'card' : 'cards'} added this session.
        </p>
      )}
    </div>
  );
}

function stateLabel(card: CardDTO) {
  if (card.state === 'new') return { text: 'New', className: 'text-sky-400' };
  if (card.state !== 'review') return { text: 'Learning', className: 'text-amber-400' };
  const ms = new Date(card.due).getTime() - Date.now();
  return ms <= 0
    ? { text: 'Due', className: 'text-highlight' }
    : { text: `In ${formatDelay(ms)}`, className: 'text-muted-foreground' };
}

function CardList({
  cards,
  onChange,
  onAdd,
}: {
  cards: CardDTO[];
  onChange: (cards: CardDTO[]) => void;
  onAdd: () => void;
}) {
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? cards.filter((c) => `${c.front}\n${c.back}`.toLowerCase().includes(q)) : cards;
  }, [cards, query]);

  const replace = (card: CardDTO) => onChange(cards.map((c) => (c.id === card.id ? card : c)));

  if (!cards.length) {
    return (
      <Panel className="px-6 py-14 text-center">
        <p className="text-muted-foreground">This deck has no cards yet.</p>
        <Button variant="primary" className="mt-4" onClick={onAdd}>
          Add your first card
        </Button>
      </Panel>
    );
  }

  return (
    <div className="space-y-4">
      <Input placeholder="Search cards…" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Panel className="divide-y divide-border">
        {filtered.length === 0 && <p className="px-5 py-8 text-center text-sm text-muted-foreground">No matches.</p>}
        {filtered.map((card) => {
          if (editing === card.id) {
            return (
              <div key={card.id} className="p-5">
                <CardEditor
                  initial={{ front: card.front, back: card.back }}
                  submitLabel="Save changes"
                  onCancel={() => setEditing(null)}
                  onSubmit={async (draft) => {
                    const res = await api<{ card: CardDTO }>(`/cards/${card.id}`, { method: 'PATCH', body: draft });
                    replace(res.card);
                    setEditing(null);
                  }}
                />
              </div>
            );
          }
          const label = stateLabel(card);
          return (
            <div key={card.id} className="group grid gap-x-6 gap-y-2 px-5 py-4 sm:grid-cols-[1fr_1fr_auto]">
              <Markdown source={card.front} className="study-md-compact line-clamp-4" />
              <Markdown source={card.back} className="study-md-compact line-clamp-4 text-muted-foreground" />
              <div className="flex items-start gap-1 sm:flex-col sm:items-end">
                <span className={cn('font-mono text-xs', label.className)}>{label.text}</span>
                <div className="ml-auto flex gap-1 sm:ml-0 sm:mt-1 sm:opacity-0 sm:transition-opacity sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
                  <Button size="sm" variant="ghost" onClick={() => setEditing(card.id)}>
                    Edit
                  </Button>
                  {card.state !== 'new' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      title="Forget progress and make this card new again"
                      onClick={async () => replace((await api<{ card: CardDTO }>(`/cards/${card.id}/reset`, { method: 'POST' })).card)}
                    >
                      Reset
                    </Button>
                  )}
                  {confirmDelete === card.id ? (
                    <Button
                      size="sm"
                      variant="danger"
                      onBlur={() => setConfirmDelete(null)}
                      onClick={async () => {
                        await api(`/cards/${card.id}`, { method: 'DELETE' });
                        onChange(cards.filter((c) => c.id !== card.id));
                      }}
                    >
                      Confirm
                    </Button>
                  ) : (
                    <Button size="sm" variant="ghost" onClick={() => setConfirmDelete(card.id)}>
                      Delete
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Panel>
    </div>
  );
}

/** One card per line: front and back separated by a tab or " :: ". "\n" becomes a line break. */
function parseImport(text: string) {
  const unescape = (s: string) => s.replace(/\\n/g, '\n').trim();
  return text
    .split(/\r?\n/)
    .map((line) => {
      const sep = line.includes('\t') ? '\t' : ' :: ';
      const at = line.indexOf(sep);
      if (at < 0) return null;
      return { front: unescape(line.slice(0, at)), back: unescape(line.slice(at + sep.length)) };
    })
    .filter((c): c is { front: string; back: string } => !!c && !!c.front && !!c.back);
}

function ImportCards({ deckId, onImported }: { deckId: number; onImported: (cards: CardDTO[]) => void }) {
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const parsed = useMemo(() => parseImport(text), [text]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="import">Paste cards</Label>
        <Textarea
          id="import"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[240px]"
          placeholder={'What is a closure? :: A function that remembers its outer scope\nBig-O of binary search :: O(log n)\nPaste from a spreadsheet\tTab-separated works too'}
        />
        <p className="mt-2 text-xs text-dim">
          One card per line. Separate front and back with <code className="font-mono">::</code> or a tab (Anki / spreadsheet
          export). Use <code className="font-mono">\n</code> for a line break inside a card.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="primary"
          disabled={!parsed.length || busy}
          onClick={async () => {
            setBusy(true);
            setError('');
            try {
              const { cards } = await api<{ cards: CardDTO[] }>(`/decks/${deckId}/cards`, { body: { cards: parsed } });
              onImported(cards);
            } catch (err) {
              setError((err as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          Import {parsed.length || ''} {parsed.length === 1 ? 'card' : 'cards'}
        </Button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

function DeckSettings({ deck }: { deck: DeckSummary }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: deck.name, description: deck.description, newPerDay: deck.newPerDay });
  const [status, setStatus] = useState('');
  const [confirm, setConfirm] = useState(false);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setStatus('');
    try {
      await api(`/decks/${deck.id}`, { method: 'PATCH', body: form });
      setStatus('Saved');
      router.refresh();
    } catch (err) {
      setStatus((err as Error).message);
    }
  }

  return (
    <div className="max-w-xl space-y-10">
      <form onSubmit={save} className="space-y-5">
        <div>
          <Label htmlFor="deck-name">Name</Label>
          <Input id="deck-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="deck-desc">Description</Label>
          <Input id="deck-desc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="deck-new">New cards per day</Label>
          <Input
            id="deck-new"
            type="number"
            min={0}
            max={9999}
            className="w-32"
            value={form.newPerDay}
            onChange={(e) => setForm({ ...form, newPerDay: Math.max(0, Number(e.target.value) || 0) })}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" variant="primary">
            Save
          </Button>
          {status && <span className={cn('text-sm', status === 'Saved' ? 'text-highlight' : 'text-red-400')}>{status}</span>}
        </div>
      </form>

      <div className="rounded-lg border border-red-500/20 p-5">
        <h3 className="font-medium">Delete deck</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Permanently removes this deck, its {deck.total} cards and their review history.
        </p>
        <Button
          variant="danger"
          className="mt-4"
          onBlur={() => setConfirm(false)}
          onClick={async () => {
            if (!confirm) return setConfirm(true);
            await api(`/decks/${deck.id}`, { method: 'DELETE' });
            router.push('/study');
            router.refresh();
          }}
        >
          {confirm ? 'Click again to confirm' : 'Delete deck'}
        </Button>
      </div>
    </div>
  );
}
