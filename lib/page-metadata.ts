import type { Metadata } from 'next';
import { getCvData } from './content';
import { isLocale, localeHref } from './i18n';

/** Localized metadata with hreflang alternates for a page under app/[lang]. */
export function pageMetadata(
  lang: string,
  path: string,
  pick: (content: ReturnType<typeof getCvData>) => { metaTitle: string; metaDescription: string },
): Metadata {
  if (!isLocale(lang)) return {};
  const content = getCvData(lang);
  const { metaTitle, metaDescription } = pick(content);
  const title = `${metaTitle} | ${content.displayName}`;
  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: localeHref(lang, path),
      languages: {
        en: localeHref('en', path),
        es: localeHref('es', path),
        'x-default': localeHref('en', path),
      },
    },
    openGraph: { title, description: metaDescription, url: localeHref(lang, path) },
    twitter: { title, description: metaDescription },
  };
}
