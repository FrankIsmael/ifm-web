import Image from 'next/image';
import type { CvData } from '@/lib/cv-data';

export function Hero({ content: cvData }: { content: CvData }) {
  const { ui } = cvData;

  return (
    <section id="hero" className="hero page-width">
      <div className="hero-copy">
        <h1>{cvData.headline}</h1>
        <p className="hero-description">
          {cvData.headlineAccent} {cvData.subheadline}
        </p>
        <div className="hero-actions">
          <a className="button" href="#work">
            {ui.hero.cta}
          </a>
        </div>
        <p className="hero-meta">
          {cvData.location}
          <span className="hero-meta-line">{cvData.availability}</span>
        </p>
      </div>
      <figure className="portrait">
        <Image
          src="/ifm.png"
          alt={ui.hero.portraitAlt}
          width={750}
          height={938}
          priority
          sizes="(max-width: 760px) 320px, 340px"
        />
      </figure>
    </section>
  );
}
