import { cvData } from '@/lib/cv-data';

export function Footer() {
  const { business } = cvData;

  return (
    <footer className="site-footer">
      <div className="page-width">
        <span>
          © {new Date().getFullYear()} {business.legalName} ·{' '}
          {business.shortLocation}
        </span>
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <nav className="footer-links" aria-label="Footer">
          <a href="/robbie">Robbie</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/llms.txt">For AI agents</a>
        </nav>
      </div>
    </footer>
  );
}
