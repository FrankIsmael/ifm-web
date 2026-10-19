import { redirect } from 'next/navigation';
import { isAuthed } from '@/lib/study/auth';
import { Button, Input, Label, Panel } from '@/components/study/ui';

export const dynamic = 'force-dynamic';

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  if (isAuthed()) redirect('/study');

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Panel className="w-full max-w-sm p-8">
        <p className="eyebrow text-highlight">Study</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Enter your password to open your decks.</p>

        <form action="/study/api/login" method="post" className="mt-8 space-y-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" autoComplete="current-password" autoFocus required />
          </div>
          {searchParams.error && <p className="text-sm text-red-400">Wrong password. Try again.</p>}
          <Button type="submit" variant="primary" className="w-full">
            Sign in
          </Button>
        </form>
      </Panel>
    </main>
  );
}
