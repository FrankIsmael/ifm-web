import type { Metadata } from 'next';
import '../globals.css';
import './study.css';
import { SiteScripts } from '@/components/site-scripts';
import { fontVariables } from '../fonts';

export const metadata: Metadata = {
  title: 'Study',
  robots: { index: false, follow: false },
};

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans bg-background text-foreground">
        <div className="study min-h-screen bg-background text-foreground">{children}</div>
        <SiteScripts />
      </body>
    </html>
  );
}
