import Link from 'next/link';
import { AUTH_ENABLED, requireAuth } from '@/lib/study/auth';

export const dynamic = 'force-dynamic';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  requireAuth();

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border bg-[oklch(0.06_0_0/0.8)] backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/study" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-highlight text-[13px] font-bold text-background">
              S
            </span>
            Study
          </Link>
          {AUTH_ENABLED && (
            <form action="/study/api/logout" method="post">
              <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sign out</button>
            </form>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">{children}</main>
    </>
  );
}
