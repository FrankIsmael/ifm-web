import { NextResponse } from 'next/server';
import { checkPassword, createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from '@/lib/study/auth';

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get('password') ?? '');

  if (!checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 600)); // slow down guessing
    return NextResponse.redirect(new URL('/study/login?error=1', req.url), 303);
  }

  const res = NextResponse.redirect(new URL('/study', req.url), 303);
  res.cookies.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/study',
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
