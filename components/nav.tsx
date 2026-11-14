'use client';

import { useEffect, useRef, useState } from 'react';
import type { CvData } from '@/lib/cv-data';
import { LOCALE_COOKIE, localeHref, localePath, type Locale } from '@/lib/i18n';

export function Nav({
  lang,
  displayName,
  labels,
  path = '/',
}: {
  lang: Locale;
  displayName: string;
  labels: CvData['ui']['nav'];
  /** Current page path without the locale prefix, e.g. '/robbie'. '/' is the portfolio. */
  path?: string;
}) {
  const isHome = path === '/';
  // Section anchors point back to the portfolio when rendered on another page.
  const home = isHome ? '' : localePath(lang);
  const links = [
    { label: labels.about, href: `${home}#about` },
    { label: labels.workWithMe, href: `${home}#work-with-me` },
    { label: labels.experience, href: `${home}#experience` },
    { label: labels.work, href: `${home}#work` },
    { label: labels.robbie, href: localeHref(lang, '/robbie') },
  ];
  const otherLang: Locale = lang === 'en' ? 'es' : 'en';
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`${home}#${entry.target.id}`);
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
    if (!isHome) setActive(localeHref(lang, path));
    return () => observer.disconnect();
  }, [home, isHome, lang, path]);

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
      <nav className="nav-inner page-width" aria-label={labels.mainNav}>
        <a
          className="wordmark"
          href={`${home}#hero`}
          onClick={() => setOpen(false)}
          aria-label={labels.home}
        >
          {displayName}
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? labels.closeNav : labels.openNav}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? labels.close : labels.menu}</span>
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
            href={`${home}#contact`}
            aria-current={active === `${home}#contact` ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {labels.contact}
          </a>
          <a
            className="lang-switch"
            href={localeHref(otherLang, path)}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={labels.switchAria}
            onClick={(event) => {
              // Remember the choice so the middleware stops auto-redirecting.
              document.cookie = `${LOCALE_COOKIE}=${otherLang}; path=/; max-age=31536000; samesite=lax`;
              // Keep the visitor on the section they were reading.
              if (isHome) event.currentTarget.hash = window.location.hash;
            }}
          >
            {labels.switchLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
