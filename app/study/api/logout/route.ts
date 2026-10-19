import { NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/lib/study/auth';

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL('/study/login', req.url), 303);
  res.cookies.set(SESSION_COOKIE, '', { path: '/study', maxAge: 0 });
  return res;
}
