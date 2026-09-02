'use client';

import { getContent } from '@/lib/content';
import { useState, useEffect } from 'react';

const c = getContent();

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-mono text-xs font-semibold tracking-widest text-foreground uppercase"
        >
          {c.name.split(' ')[0]}
          <span className="text-highlight">.</span>
        </a>

        {/* Desktop links */}
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

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center rounded text-foreground transition-colors hover:bg-surface-hover md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-6 pb-6 pt-2 md:hidden"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm font-medium tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={`https://wa.me/${c.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center rounded bg-highlight px-4 py-3 text-xs font-semibold tracking-widest text-background uppercase transition-opacity hover:opacity-90"
          >
            Message me on WhatsApp
          </a>
        </div>
      ) : null}
    </nav>
  );
}
