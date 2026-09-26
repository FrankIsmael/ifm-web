import { cvData } from '@/lib/cv-data';
import { Arrow, CodeMark } from './ui';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-grid">
        <div>
          <p className="eyebrow">What’s next?</p>
          <h2>
            Let’s build something
            <br />
            <span className="serif-accent">that matters.</span>
          </h2>
          <p className="contact-description">{cvData.ctaSubtext}</p>
          <a className="contact-email" href={`mailto:${cvData.email}`}>
            {cvData.email}
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-side">
          <span className="contact-mark" aria-hidden="true">
            <CodeMark />
          </span>
          <p>
            <span className="status-dot" /> Open to opportunities
          </p>
          <div className="contact-socials">
            <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <Arrow diagonal />
            </a>
            <a href={cvData.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a href={cvData.cvUrl} target="_blank" rel="noopener noreferrer">
              Download CV <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
