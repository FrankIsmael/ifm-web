import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, defaultLocale, isLocale, locales, type Locale } from '@/lib/i18n';

/** First supported language in the Accept-Language header, by q-value. */
function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      const weight = q ? Number(q.trim().slice(2)) : 1;
      return { lang: tag.toLowerCase().split('-')[0], weight: Number.isNaN(weight) ? 0 : weight };
    })
    .sort((a, b) => b.weight - a.weight);
  const match = ranked.find((entry) => entry.weight > 0 && isLocale(entry.lang));
  return match && isLocale(match.lang) ? match.lang : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/')[1];

  // /en/... is the same content as the unprefixed URL: keep one canonical address.
  // The generated Open Graph image is exempt so crawlers get it without a redirect.
  if (first === defaultLocale && !pathname.endsWith('/opengraph-image')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/';
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(first)) return NextResponse.next();

  // First visit to the home page: follow the browser language unless the
  // visitor already picked one with the switcher.
  if (pathname === '/' && !request.cookies.has(LOCALE_COOKIE)) {
    const locale = preferredLocale(request.headers.get('accept-language'));
    if (locale !== defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      return NextResponse.redirect(url, 307);
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  // The pre-i18n image URL may still be cached by social sites; the edge image
  // route cannot be reached through a rewrite, so redirect to it instead.
  if (pathname === '/opengraph-image') return NextResponse.redirect(url, 308);
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, the study app, agent endpoints, the scratch page and
  // anything with a file extension (images, the CV PDF).
  matcher: ['/((?!_next|api|study|mcp|llms.txt|test|.*\\..*).*)'],
};
