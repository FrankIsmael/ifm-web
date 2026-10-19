import { NextResponse } from 'next/server';
import { idParam, notFound, route } from '@/lib/study/api';
import { getSession } from '@/lib/study/data';

export const dynamic = 'force-dynamic';

export const GET = route<{ id: string }>(async (_req, { params }) => {
  const session = await getSession(idParam.parse(params.id));
  return session ? NextResponse.json(session) : notFound();
});
