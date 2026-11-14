import { notFound } from 'next/navigation';
import { DocPage, RichText } from '@/components/doc-page';
import { getCvData } from '@/lib/content';
import { isLocale, localeHref } from '@/lib/i18n';
import { pageMetadata } from '@/lib/page-metadata';

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props) {
  return pageMetadata(params.lang, '/robbie', (c) => c.pages.robbie);
}

export default function RobbiePage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang;
  const content = getCvData(lang);
  const page = content.pages.robbie;
  const { ui } = content;

  return (
    <DocPage
      lang={lang}
      path="/robbie"
      content={content}
      label={page.label}
      title={page.title}
      intro={page.intro}
    >
      <section aria-labelledby="robbie-does">
        <h2 id="robbie-does">{page.capabilitiesTitle}</h2>
        <ul className="rule-list">
          {page.capabilities.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="robbie-onboarding">
        <h2 id="robbie-onboarding">{page.stepsTitle}</h2>
        <ol className="process-line process-line--three">
          {page.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="robbie-built">
        <h2 id="robbie-built">{page.builtTitle}</h2>
        <p>
          {page.built}{' '}
          <a className="text-link" href={content.agentUrl}>
            acp-agent.ismaelfrancisco.tech
          </a>
        </p>
        <p>
          {page.dataNote}{' '}
          <a className="text-link" href={localeHref(lang, '/privacy')}>
            {ui.footer.privacy}
          </a>{' '}
          ·{' '}
          <a className="text-link" href={localeHref(lang, '/terms')}>
            {ui.footer.terms}
          </a>
        </p>
      </section>

      <section aria-labelledby="robbie-contact" className="doc-cta">
        <h2 id="robbie-contact">{page.ctaTitle}</h2>
        <p>
          <RichText text={page.ctaText} content={content} />
        </p>
        <a
          className="button"
          href={`mailto:${content.email}?subject=${encodeURIComponent(page.ctaSubject)}`}
        >
          {content.email}
        </a>
      </section>
    </DocPage>
  );
}
