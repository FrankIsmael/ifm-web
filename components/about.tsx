import { cvData } from '@/lib/cv-data';
import { SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <div>
          <SectionHeading
            label="A little about me"
            title="Curiosity is the common thread."
          />
        </div>
        <div className="about-copy">
          <p className="lead-copy">{cvData.summary}</p>
          <p>{cvData.aboutExtra}</p>
          <p>{cvData.currentFocus}</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="toolkit">
          <p className="eyebrow">My everyday toolkit</p>
          <p>{cvData.skills.join(' / ')}</p>
        </div>
      </div>
    </section>
  );
}
