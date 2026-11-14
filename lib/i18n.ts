// Locale config only: imported by the middleware and client components, so keep
// content out of this file.
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Public path of a locale's home page: English is unprefixed, Spanish is /es. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

/** Locale-aware URL for an internal page, e.g. localeHref('es', '/robbie') → '/es/robbie'. */
export function localeHref(locale: Locale, path = '/'): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}
