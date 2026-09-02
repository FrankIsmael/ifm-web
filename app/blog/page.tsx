import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/site-footer';
import { getAllPosts, formatPostDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Ismael Francisco',
  description:
    'Notes on building agentic systems, automation, and production web engineering.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px max-w-8 flex-1 bg-highlight" />
            <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Blog
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
            Learning in public
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Notes on building agentic systems — what actually works, what breaks,
            and what I&rsquo;d do differently. Plus the occasional deep dive on
            production web engineering.
          </p>

          {posts.length === 0 ? (
            <p className="mt-16 font-mono text-sm text-muted-foreground">
              No posts yet — first one lands soon.
            </p>
          ) : (
            <div className="mt-12 flex flex-col divide-y divide-border border-y border-border">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface-hover"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <time
                      dateTime={post.date}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {formatPostDate(post.date)}
                    </time>
                    {post.draft ? (
                      <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        Draft
                      </span>
                    ) : null}
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-highlight-faint px-2 py-0.5 font-mono text-[10px] tracking-widest text-highlight uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-highlight">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
