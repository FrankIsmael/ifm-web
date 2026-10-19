import { NextResponse } from 'next/server';
import { cardInput, idParam, notFound, route } from '@/lib/study/api';
import { deleteCard, updateCard } from '@/lib/study/data';

export const PATCH = route<{ id: string }>(async (req, { params }) => {
  const card = await updateCard(idParam.parse(params.id), cardInput.parse(await req.json()));
  return card ? NextResponse.json({ card }) : notFound();
});

export const DELETE = route<{ id: string }>(async (_req, { params }) => {
  const ok = await deleteCard(idParam.parse(params.id));
  return ok ? NextResponse.json({ ok }) : notFound();
});
