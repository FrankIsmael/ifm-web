import Link from 'next/link';
import { business } from '@/lib/business';
import { BusinessFooter } from './business-footer';

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="nav-inner page-width" aria-label="Main navigation">
          <Link className="wordmark" href="/">
            Ismael Francisco
          </Link>
          <Link className="legal-back" href="/">
            Back to site
          </Link>
        </nav>
      </header>
      <main id="main" className="legal page-width">
        <p className="section-label">Last updated {business.legalUpdated}</p>
        <h1>{title}</h1>
        {intro && <p className="legal-intro">{intro}</p>}
        <div className="legal-body">{children}</div>
      </main>
      <BusinessFooter />
    </div>
  );
}
