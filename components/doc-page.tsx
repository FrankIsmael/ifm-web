import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export function DocPage({
  label,
  title,
  intro,
  updated,
  children,
}: {
  label: string;
  title: string;
  intro?: React.ReactNode;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="doc-page page-width">
        <header className="doc-header">
          <p className="section-label">{label}</p>
          <h1>{title}</h1>
          {intro ? <div className="doc-intro">{intro}</div> : null}
          {updated ? <p className="doc-updated">Last updated: {updated}</p> : null}
        </header>
        <div className="doc-body">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
