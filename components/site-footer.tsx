import { getContent } from '@/lib/content';

const c = getContent();

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          {c.name} &mdash; {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {c.location}
        </span>
      </div>
    </footer>
  );
}
