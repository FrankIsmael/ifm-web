import type { MetadataRoute } from 'next';
import { websiteUrl } from '@/lib/website-info';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/robbie', '/privacy', '/terms'].map((path) => ({
    url: `${websiteUrl}${path}`,
    lastModified: new Date(),
  }));
}
