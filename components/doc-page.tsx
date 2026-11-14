import { Fragment } from 'react';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import type { CvData } from '@/lib/cv-data';
import type { Locale } from '@/lib/i18n';

type Block = { p: string } | { list: string[] };
export type DocSection = { id?: string; heading: string; blocks: Block[] };

/** Fills {legalName} and {address}, and turns {email} into a mailto link. */
export function RichText({ text, content }: { text: string; content: CvData }) {
  const filled = text
    .split('{legalName}')
    .join(content.business.legalName)
    .split('{address}')
    .join(content.business.address);
  const parts = filled.split('{email}');
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? (
            <a className="text-link" href={`mailto:${content.email}`}>
              {content.email}
            </a>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

export function DocSections({
  sections,
  content,
}: {
  sections: DocSection[];
  content: CvData;
}) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} id={section.id}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, i) =>
            'p' in block ? (
              <p key={i}>
                <RichText text={block.p} content={content} />
              </p>
            ) : (
              <ul key={i} className="copy-list">
                {block.list.map((item) => (
                  <li key={item}>
                    <RichText text={item} content={content} />
                  </li>
                ))}
              </ul>
            ),
          )}
        </section>
      ))}
    </>
  );
}

export function DocPage({
  lang,
  path,
  content,
  label,
  title,
  intro,
  updated,
  children,
}: {
  lang: Locale;
  path: string;
  content: CvData;
  label: string;
  title: string;
  intro?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  const { ui } = content;

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        {ui.skipLink}
      </a>
      <Nav
        lang={lang}
        path={path}
        displayName={content.displayName}
        labels={ui.nav}
      />
      <main id="main" className="doc-page page-width">
        <header className="doc-header">
          <p className="section-label">{label}</p>
          <h1>{title}</h1>
          {intro ? (
            <p className="doc-intro">
              <RichText text={intro} content={content} />
            </p>
          ) : null}
          {updated ? <p className="doc-updated">{updated}</p> : null}
        </header>
        <div className="doc-body">{children}</div>
      </main>
      <Footer content={content} lang={lang} />
    </div>
  );
}
