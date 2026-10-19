import { NextResponse } from 'next/server';
import { z } from 'zod';
import { route } from '@/lib/study/api';
import { createDeck } from '@/lib/study/data';

const body = z.object({
  name: z.string().trim().min(1, 'Deck name is required').max(120),
  description: z.string().trim().max(500).default(''),
});

export const POST = route(async (req) => {
  const id = await createDeck(body.parse(await req.json()));
  return NextResponse.json({ id }, { status: 201 });
});
