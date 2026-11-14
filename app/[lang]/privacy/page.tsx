import { notFound } from 'next/navigation';
import { DocPage, DocSections } from '@/components/doc-page';
import { getCvData } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/page-metadata';

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props) {
  return pageMetadata(params.lang, '/privacy', (c) => c.pages.privacy);
}

export default function PrivacyPage({ params }: Props) {
  if (!isLocale(params.lang)) notFound();
  const content = getCvData(params.lang);
  const page = content.pages.privacy;

  return (
    <DocPage
      lang={params.lang}
      path="/privacy"
      content={content}
      label={page.label}
      title={page.title}
      intro={page.intro}
      updated={`${page.updatedLabel}: ${page.updated}`}
    >
      <DocSections sections={page.sections} content={content} />
    </DocPage>
  );
}
