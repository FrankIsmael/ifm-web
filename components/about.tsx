import { cvData } from '@/lib/cv-data';
import { Arrow, SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <div>
          <SectionHeading
            number="01"
            label="A little about me"
            title="Curiosity is the common thread."
          />
          <a className="text-link about-desk" href="/3d-view">
            Step into my 3D desk <Arrow diagonal />
          </a>
        </div>
        <div className="about-copy">
          <p className="lead-copy">{cvData.summary}</p>
          <p>{cvData.aboutExtra}</p>
          <p>{cvData.currentFocus}</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="stats">
          {cvData.trustSignals.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="toolkit">
          <p className="eyebrow">My everyday toolkit</p>
          <p>{cvData.skills.join(' / ')}</p>
        </div>
      </div>
    </section>
  );
}
