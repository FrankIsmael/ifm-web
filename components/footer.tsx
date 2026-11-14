import type { CvData } from '@/lib/cv-data';
import { localeHref, type Locale } from '@/lib/i18n';

export function Footer({ content, lang }: { content: CvData; lang: Locale }) {
  const { business, email, ui } = content;

  return (
    <footer className="site-footer">
      <div className="page-width">
        <span>
          © {new Date().getFullYear()} {business.legalName} ·{' '}
          {business.shortLocation}
        </span>
        <a href={`mailto:${email}`}>{email}</a>
        <nav className="footer-links" aria-label="Footer">
          <a href={localeHref(lang, '/robbie')}>{ui.footer.robbie}</a>
          <a href={localeHref(lang, '/privacy')}>{ui.footer.privacy}</a>
          <a href={localeHref(lang, '/terms')}>{ui.footer.terms}</a>
          <a href="/llms.txt">{ui.footer.agents}</a>
        </nav>
      </div>
    </footer>
  );
}
