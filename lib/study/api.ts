import { NextResponse } from 'next/server';
import { z } from 'zod';
import { isAuthed, unauthorized } from './auth';

export const idParam = z.coerce.number().int().positive();

type Handler<P> = (req: Request, ctx: { params: P }) => Promise<Response>;

/** Wraps a route handler with the session check and uniform error responses. */
export function route<P = Record<string, string>>(handler: Handler<P>): Handler<P> {
  return async (req, ctx) => {
    if (!isAuthed()) return unauthorized();
    try {
      return await handler(req, ctx);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return NextResponse.json({ error: err.issues[0]?.message ?? 'Invalid input' }, { status: 400 });
      }
      console.error('[study]', err);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  };
}

export const notFound = () => NextResponse.json({ error: 'Not found' }, { status: 404 });

export const cardInput = z.object({
  front: z.string().trim().min(1, 'Front is required').max(20_000),
  back: z.string().trim().min(1, 'Back is required').max(20_000),
});
