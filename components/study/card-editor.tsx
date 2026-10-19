'use client';

import { useRef, useState } from 'react';
import { Markdown } from './markdown';
import { Button, Kbd, Label, Textarea } from './ui';

export interface CardDraft {
  front: string;
  back: string;
}

/** Front/back editor with a live preview. Cmd/Ctrl+Enter submits. */
export function CardEditor({
  initial = { front: '', back: '' },
  submitLabel,
  onSubmit,
  onCancel,
  clearOnSubmit = false,
}: {
  initial?: CardDraft;
  submitLabel: string;
  onSubmit: (draft: CardDraft) => Promise<void>;
  onCancel?: () => void;
  clearOnSubmit?: boolean;
}) {
  const [draft, setDraft] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const frontRef = useRef<HTMLTextAreaElement>(null);
  const valid = draft.front.trim() && draft.back.trim();

  async function submit() {
    if (!valid || busy) return;
    setBusy(true);
    setError('');
    try {
      await onSubmit({ front: draft.front.trim(), back: draft.back.trim() });
      if (clearOnSubmit) {
        setDraft({ front: '', back: '' });
        frontRef.current?.focus();
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4" onKeyDown={onKeyDown}>
        <div>
          <Label htmlFor="card-front">Front</Label>
          <Textarea
            id="card-front"
            ref={frontRef}
            value={draft.front}
            onChange={(e) => setDraft({ ...draft, front: e.target.value })}
            placeholder="Question — Markdown and ```code``` supported"
            autoFocus
          />
        </div>
        <div>
          <Label htmlFor="card-back">Back</Label>
          <Textarea
            id="card-back"
            value={draft.back}
            onChange={(e) => setDraft({ ...draft, back: e.target.value })}
            placeholder="Answer"
            className="min-h-[160px]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="primary" onClick={submit} disabled={!valid || busy}>
            {busy ? 'Saving…' : submitLabel}
          </Button>
          {onCancel && (
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <span className="ml-auto hidden items-center gap-1 text-xs text-dim sm:inline-flex">
            <Kbd>⌘</Kbd>
            <Kbd>Enter</Kbd> to save
          </span>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

      <div>
        <Label>Preview</Label>
        <div className="rounded-lg border border-border bg-background p-6">
          {draft.front.trim() ? <Markdown source={draft.front} /> : <p className="text-sm text-dim">Front of the card</p>}
          <hr className="my-5 border-border" />
          {draft.back.trim() ? (
            <Markdown source={draft.back} className="text-muted-foreground" />
          ) : (
            <p className="text-sm text-dim">Back of the card</p>
          )}
        </div>
      </div>
    </div>
  );
}
