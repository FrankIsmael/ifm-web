import { NextResponse } from 'next/server';
import { z } from 'zod';
import { idParam, notFound, route } from '@/lib/study/api';
import { getSession, reviewCard } from '@/lib/study/data';

const body = z.object({ rating: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]) });

/** Records a rating and returns the deck's next card. */
export const POST = route<{ id: string }>(async (req, { params }) => {
  const { rating } = body.parse(await req.json());
  const deckId = await reviewCard(idParam.parse(params.id), rating);
  if (!deckId) return notFound();
  return NextResponse.json(await getSession(deckId));
});
