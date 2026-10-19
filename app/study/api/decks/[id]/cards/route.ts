import { NextResponse } from 'next/server';
import { z } from 'zod';
import { cardInput, idParam, notFound, route } from '@/lib/study/api';
import { createCards, getDeck } from '@/lib/study/data';

const body = z.object({ cards: z.array(cardInput).min(1).max(2000) });

export const POST = route<{ id: string }>(async (req, { params }) => {
  const deckId = idParam.parse(params.id);
  if (!(await getDeck(deckId))) return notFound();
  const cards = await createCards(deckId, body.parse(await req.json()).cards);
  return NextResponse.json({ cards }, { status: 201 });
});
