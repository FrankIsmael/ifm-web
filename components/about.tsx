import { cvData } from '@/lib/cv-data';
import { SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <SectionHeading
          label="A little about me"
          title="I like figuring out how things work."
        />
        <div className="about-copy">
          <p className="lead-copy">{cvData.summary}</p>
          <p>{cvData.aboutExtra}</p>
          <p>{cvData.currentFocus}</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="toolkit">
          <p className="section-label">My everyday toolkit</p>
          <ul className="skill-line">
            {cvData.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <p className="languages-line">
          <span className="section-label">Languages</span>
          {cvData.languages.join(', ')}
        </p>
        <a className="text-link certs-line" href="#experience">
          AWS {cvData.certifications.map((item) => item.title).join(', ')}
        </a>
      </div>
    </section>
  );
}
