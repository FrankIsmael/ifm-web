import { NextResponse } from 'next/server';
import { idParam, notFound, route } from '@/lib/study/api';
import { resetCard } from '@/lib/study/data';

export const POST = route<{ id: string }>(async (_req, { params }) => {
  const card = await resetCard(idParam.parse(params.id));
  return card ? NextResponse.json({ card }) : notFound();
});
