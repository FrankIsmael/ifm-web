import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

/** Google Analytics + Vercel Analytics, shared by every root layout. */
export function SiteScripts() {
  return (
    <>
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
      <Analytics />
    </>
  );
}
