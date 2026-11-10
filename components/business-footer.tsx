import Link from 'next/link';
import { business } from '@/lib/business';

export function BusinessFooter({ homeAnchors = false }: { homeAnchors?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-identity">
          <span>
            © {new Date().getFullYear()} {business.legalName}
            {business.tradeName && ` · ${business.tradeName}`}
          </span>
          {business.address && <span>{business.address}</span>}
          <span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            {business.phone && (
              <>
                {' · '}
                <a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a>
              </>
            )}
          </span>
        </div>
        <nav className="footer-links" aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/data-deletion">Data deletion</Link>
          <a href="/llms.txt">Information for AI agents</a>
          {homeAnchors && <a href="#hero">Back to top</a>}
        </nav>
      </div>
    </footer>
  );
}
