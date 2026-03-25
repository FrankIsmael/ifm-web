import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})


const siteTitle = 'Ismael Francisco | Full Stack Software Engineer';
const siteDescription =
  'Full stack engineer with 6+ years shipping production platforms. React, Node.js, AWS.';

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
