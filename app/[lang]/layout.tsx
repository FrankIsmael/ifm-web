import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChatWidget } from '@/components/chat-widget';
import { SiteScripts } from '@/components/site-scripts';
import { getCvData } from '@/lib/content';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { fontVariables } from '../fonts';

type Props = { params: { lang: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.lang)) return {};
  const content = getCvData(params.lang);
  const title = `${content.displayName} | ${content.meta.title}`;
  const description = content.meta.description;
  const path = localePath(params.lang);

  return {
    metadataBase: new URL('https://ismaelfrancisco.tech'),
    title,
    description,
    icons: {
      icon: '/icon.png?v=3',
    },
    alternates: {
      canonical: path,
      languages: {
        en: localePath('en'),
        es: localePath('es'),
        'x-default': localePath('en'),
      },
    },
    // The image comes from the opengraph-image file next to this layout.
    openGraph: {
      title,
      description,
      url: path,
      siteName: content.displayName,
      locale: content.meta.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  if (!isLocale(params.lang)) notFound();
  const { ui, agentUrl } = getCvData(params.lang);

  return (
    <html lang={params.lang} className={fontVariables}>
      <body className="font-sans bg-background text-foreground">
        {children}
        <ChatWidget labels={ui.chat} agentUrl={agentUrl} />
        <SiteScripts />
      </body>
    </html>
  );
}
