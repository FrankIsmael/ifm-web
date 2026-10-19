import { NextResponse } from 'next/server';
import { z } from 'zod';
import { idParam, notFound, route } from '@/lib/study/api';
import { deleteDeck, updateDeck } from '@/lib/study/data';

const body = z.object({
  name: z.string().trim().min(1, 'Deck name is required').max(120).optional(),
  description: z.string().trim().max(500).optional(),
  newPerDay: z.number().int().min(0).max(9999).optional(),
});

export const PATCH = route<{ id: string }>(async (req, { params }) => {
  const ok = await updateDeck(idParam.parse(params.id), body.parse(await req.json()));
  return ok ? NextResponse.json({ ok }) : notFound();
});

export const DELETE = route<{ id: string }>(async (_req, { params }) => {
  const ok = await deleteDeck(idParam.parse(params.id));
  return ok ? NextResponse.json({ ok }) : notFound();
});
