import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ismael Francisco Moreno | Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer with 6+ years of experience. React, TypeScript, Node.js, AWS. Based in Mexico City.',
  icons: {
    icon: '/icon.png?v=3',
    shortcut: '/favicon.ico?v=3',
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
