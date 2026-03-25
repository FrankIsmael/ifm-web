'use client';

import { cvData } from '@/lib/cv-data';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-mono text-xs font-semibold tracking-widest text-foreground uppercase">
          {cvData.name.split(' ')[0]}
          <span className="text-[var(--highlight)]">.</span>
        </span>
        <div className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${cvData.email}`}
          className="rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-background uppercase shadow-[0_8px_24px_oklch(0.72_0.18_162_/_0.28)] transition-all hover:opacity-90 active:scale-[0.98] md:hidden"
          style={{ backgroundColor: 'var(--highlight)' }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
