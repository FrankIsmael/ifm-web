import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

const siteTitle = 'Ismael Francisco Moreno | Full Stack Software Engineer';
const siteDescription =
  'Full Stack Software Engineer with 6+ years of experience. React, TypeScript, Node.js, AWS. Based in Mexico City.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: '/icon.png?v=3',
    shortcut: '/favicon.ico?v=3',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://ifm-web.vercel.app',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
