'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from './client-api';
import { Button, Input } from './ui';

export function NewDeckForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  if (!open) {
    return (
      <Button className="mt-4" onClick={() => setOpen(true)}>
        <span aria-hidden>+</span> New deck
      </Button>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { id } = await api<{ id: number }>('/decks', { body: { name, description } });
      router.push(`/study/deck/${id}`);
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row">
      <Input placeholder="Deck name" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
      <Input placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="flex shrink-0 gap-2">
        <Button type="submit" variant="primary" disabled={busy || !name.trim()}>
          Create
        </Button>
        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
      {error && <p className="text-sm text-red-400 sm:self-center">{error}</p>}
    </form>
  );
}
