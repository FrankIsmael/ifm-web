import type { Metadata } from 'next';
import './study.css';

export const metadata: Metadata = {
  title: 'Study',
  robots: { index: false, follow: false },
};

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return <div className="study min-h-screen bg-background text-foreground">{children}</div>;
}
