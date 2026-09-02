import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/site-footer';
import { getAllPosts, getPostBySlug, formatPostDate } from '@/lib/blog';
import { getContent } from '@/lib/content';

const c = getContent();

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Ismael Francisco`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    author: { '@type': 'Person', name: c.name, url: 'https://ismaelfrancisco.tech' },
    mainEntityOfPage: `https://ismaelfrancisco.tech/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-2xl">
          <a
            href="/blog"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; all posts
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
              {formatPostDate(post.date)}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-highlight-faint px-2 py-0.5 font-mono text-[10px] tracking-widest text-highlight uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {post.description}
          </p>

          <div
            className="prose prose-invert mt-12 max-w-none
                       prose-headings:tracking-tight prose-headings:text-foreground
                       prose-p:text-muted-foreground prose-li:text-muted-foreground
                       prose-strong:text-foreground
                       prose-a:text-highlight prose-a:no-underline hover:prose-a:underline
                       prose-code:rounded prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5
                       prose-code:font-normal prose-code:text-foreground prose-code:before:content-none
                       prose-code:after:content-none
                       prose-pre:border prose-pre:border-border prose-pre:bg-card
                       prose-blockquote:border-l-highlight prose-blockquote:text-muted-foreground"
          >
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              Building something in this space?{' '}
              <a
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-highlight hover:underline"
              >
                Message me on WhatsApp
              </a>{' '}
              or{' '}
              <a href="/#contact" className="font-medium text-highlight hover:underline">
                see what I do
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
