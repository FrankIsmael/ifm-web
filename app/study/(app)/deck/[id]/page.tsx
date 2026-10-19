import { notFound } from 'next/navigation';
import { getDeck, listCards } from '@/lib/study/data';
import { requireAuth } from '@/lib/study/auth';
import { DeckManager } from '@/components/study/deck-manager';

export const dynamic = 'force-dynamic';

export default async function DeckPage({ params }: { params: { id: string } }) {
  requireAuth();
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) notFound();
  const [deck, cards] = await Promise.all([getDeck(id), listCards(id)]);
  if (!deck) notFound();
  return <DeckManager deck={deck} initialCards={cards} />;
}
