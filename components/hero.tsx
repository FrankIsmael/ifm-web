'use client';

import Image from 'next/image';
import { getContent } from '@/lib/content';

const c = getContent();

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      {/* Emerald glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'var(--highlight-glow)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-8">
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              background: 'var(--highlight-faint)',
              filter: 'blur(8px)',
            }}
          />
          <Image
            src="/ifm.png"
            alt={c.name}
            width={96}
            height={96}
            priority
            className="relative rounded-full border border-border object-cover"
          />
        </div>

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
          <span className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {c.availability}
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
          {c.headline}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          {c.subheadline}
        </p>

        {/* Skills row */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {c.skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded bg-highlight px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Work with me
          </a>
          <a
            href="#work"
            className="rounded border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
          >
            See my work
          </a>
        </div>

        {/* 3D View link */}
        <a
          href="/3d-view"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          or explore the 3D desk
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
