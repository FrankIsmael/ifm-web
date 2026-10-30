import { cvData } from '@/lib/cv-data';
import { Reveal } from './reveal';
import { Arrow, SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <Reveal>
          <SectionHeading
            label="A little about me"
            title="I like figuring out how things work."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="about-copy">
            <p className="lead-copy">{cvData.summary}</p>
            <p>{cvData.aboutExtra}</p>
            <p>{cvData.currentFocus}</p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.12}>
        <div className="about-bottom">
          <div className="toolkit">
            <p className="eyebrow">My everyday toolkit</p>
            <p>{cvData.skills.join(' / ')}</p>
          </div>
          <p className="languages-line">
            <span className="eyebrow">Languages</span>
            {cvData.languages.join(' · ')}
          </p>
          <a className="text-link certs-line" href="#experience">
            AWS{' '}
            {cvData.certifications.map((item) => item.title).join(' · ')}{' '}
            <Arrow />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
