import Image from 'next/image';
import { cvData } from '@/lib/cv-data';
import { Arrow, CodeMark } from './ui';

export function Hero() {
  return (
    <section id="hero" className="hero page-width">
      <div className="hero-copy">
        <div className="hero-intro">
          <p className="eyebrow">Hello, I’m {cvData.displayName}</p>
          <a className="availability-badge" href="#contact">
            <span className="status-dot" aria-hidden="true" />
            {cvData.availability}
          </a>
        </div>
        <h1>{cvData.headline}</h1>
        <p className="hero-description">{cvData.subheadline}</p>
        <ul className="stats hero-stats" aria-label="Experience at a glance">
          {cvData.trustSignals.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
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
        </figure>
        <a className="portrait-note agent-link" href="/llms.txt">
          <CodeMark /> Agent-readable · MCP <Arrow diagonal />
        </a>
      </div>
      <div className="hero-bottom">
        <a href="#about" aria-label="Scroll to about me">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
