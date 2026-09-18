import Image from 'next/image';
import { cvData } from '@/lib/cv-data';
import { Arrow, CodeMark } from './ui';

export function Hero() {
  return (
    <section id="hero" className="hero page-width">
      <div className="hero-copy">
        <p className="eyebrow hero-intro">
          <span className="status-dot" /> Hello, I’m {cvData.displayName}
        </p>
        <h1>{cvData.headline}</h1>
        <p className="hero-description">{cvData.subheadline}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <Arrow />
          </a>
          <a
            className="text-link"
            href={cvData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my CV <Arrow diagonal />
          </a>
        </div>
        <p className="hero-location">
          <span aria-hidden="true">⌖</span> {cvData.location}{' '}
          <span className="location-divider">/</span> Working worldwide
        </p>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-mark">
          <CodeMark />
        </div>
        <figure className="portrait-card">
          <div className="portrait-image">
            <Image
              src="/ifm.png"
              alt="Ismael smiling at his laptop"
              width={750}
              height={750}
              priority
              sizes="(max-width: 700px) 280px, 340px"
            />
          </div>
          <figcaption>
            <span>Engineer. Builder. Curious human.</span>
            <span aria-hidden="true">↗</span>
          </figcaption>
        </figure>
        <div className="portrait-note">
          <span className="status-dot" /> Open to new opportunities
        </div>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">From a good idea to a shipped product</span>
        <a href="#about" aria-label="Scroll to about me">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
