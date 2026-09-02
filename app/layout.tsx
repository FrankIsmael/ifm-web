import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { getContent } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

const c = getContent();

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})


const siteTitle = 'Ismael Francisco | AI Agents & Full Stack Engineering';
const siteDescription =
  'I build AI agents that run in production — deployed, observable, and safe to put to work. Full stack engineer with 6+ years in React, Node.js and AWS.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: '/' },
  authors: [{ name: c.name, url: SITE_URL }],
  creator: c.name,
  keywords: [
    'AI agents',
    'agentic systems',
    'workflow automation',
    'human in the loop',
    'full stack engineer',
    'Next.js',
    'Node.js',
    'AWS',
  ],
  icons: {
    icon: '/icon.png?v=3',
    shortcut: '/favicon.ico?v=3',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: 'Ismael Francisco Moreno',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/opengraph-image'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: c.name,
      url: SITE_URL,
      jobTitle: c.tagline,
      email: `mailto:${c.email}`,
      telephone: c.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mexico City',
        addressCountry: 'MX',
      },
      knowsLanguage: ['es', 'en'],
      knowsAbout: c.skills,
      sameAs: [c.linkedin, c.github],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: `${c.name} — AI Agents & Automation`,
      description: c.headline,
      url: SITE_URL,
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: 'Worldwide',
      availableLanguage: ['es', 'en'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: c.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EKCVNEVZSE"
      />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EKCVNEVZSE');`,
        }}
      />
      <body className="font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
