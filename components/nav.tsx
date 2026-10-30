'use client';

import { useEffect, useRef, useState } from 'react';
import { cvData } from '@/lib/cv-data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work with me', href: '#work-with-me' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-15% 0px -55% 0px' },
    );
    ['hero', 'about', 'work-with-me', 'experience', 'work', 'contact'].forEach(
      (id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      },
    );
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-inner page-width" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#hero"
          onClick={() => setOpen(false)}
          aria-label="Ismael Francisco, home"
        >
          {cvData.displayName}
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <div id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            aria-current={active === '#contact' ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
