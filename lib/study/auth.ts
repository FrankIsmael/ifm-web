import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

// Auth is switched off for now: the study app is open to everyone. Set to true to require the password again.
export const AUTH_ENABLED = false;

export const SESSION_COOKIE = 'study_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secrets() {
  const password = process.env.STUDY_PASSWORD;
  const secret = process.env.STUDY_SECRET;
  if (!password || !secret) throw new Error('STUDY_PASSWORD and STUDY_SECRET must be set');
  return { password, secret };
}

// Keyed on the password too, so changing it signs every device out.
function sign(value: string) {
  const { password, secret } = secrets();
  return createHmac('sha256', `${secret}:${password}`).update(value).digest('hex');
}

function safeEqual(a: string, b: string) {
  const ha = createHash('sha256').update(a).digest();
  const hb = createHash('sha256').update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function checkPassword(input: string) {
  return safeEqual(input, secrets().password);
}

export function createSessionToken() {
  const expires = String(Date.now() + SESSION_MAX_AGE * 1000);
  return `${expires}.${sign(expires)}`;
}

export function isAuthed() {
  if (!AUTH_ENABLED) return true;
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature || Number(expires) < Date.now()) return false;
  return safeEqual(signature, sign(expires));
}

export function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

/** For server pages: redirects to the login page without a valid session.
 * Called in each page, not just the layout, because layouts and pages render in parallel. */
export function requireAuth() {
  if (!isAuthed()) redirect('/study/login');
}
