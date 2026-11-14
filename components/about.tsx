import type { CvData } from '@/lib/cv-data';
import { SectionHeading } from './ui';

export function About({ content: cvData }: { content: CvData }) {
  const { ui } = cvData;

  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <SectionHeading
          label={ui.about.label}
          title={ui.about.title}
        />
        <div className="about-copy">
          <p className="lead-copy">{cvData.summary}</p>
          <p>{cvData.aboutExtra}</p>
          <p>{cvData.currentFocus}</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="toolkit">
          <p className="section-label">{ui.about.toolkit}</p>
          <ul className="skill-line">
            {cvData.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <p className="languages-line">
          <span className="section-label">{ui.about.languages}</span>
          {cvData.languages.join(', ')}
        </p>
        <a className="text-link certs-line" href="#experience">
          AWS {cvData.certifications.map((item) => item.title).join(', ')}
        </a>
      </div>
    </section>
  );
}
