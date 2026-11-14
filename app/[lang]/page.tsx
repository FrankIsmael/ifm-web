import { notFound } from 'next/navigation';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { WorkWithMe } from '@/components/work-with-me';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { getCvData } from '@/lib/content';
import { isLocale } from '@/lib/i18n';

export default function Home({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const content = getCvData(params.lang);
  const { ui } = content;

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        {ui.skipLink}
      </a>
      <Nav
        lang={params.lang}
        displayName={content.displayName}
        labels={ui.nav}
      />
      <main id="main">
        <Hero content={content} />
        <About content={content} />
        <WorkWithMe content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} lang={params.lang} />
    </div>
  );
}
