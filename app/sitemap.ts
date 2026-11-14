import type { MetadataRoute } from 'next';
import { localeHref, locales } from '@/lib/i18n';
import { websiteUrl } from '@/lib/website-info';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/privacy', '/terms'];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${websiteUrl}${localeHref(locale, path)}`,
      lastModified: new Date(),
    })),
  );
}
