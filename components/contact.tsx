import { cvData } from '@/lib/cv-data';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-grid">
        <div>
          <p className="section-label">What’s next?</p>
          <h2>
            {cvData.ctaHeadline} {cvData.ctaAccent}
          </h2>
          <p className="contact-description">{cvData.ctaSubtext}</p>
          <div className="contact-intents">
            <a
              href={`mailto:${cvData.email}?subject=${encodeURIComponent('Project inquiry')}`}
            >
              Project inquiry
            </a>
            <a
              href={`mailto:${cvData.email}?subject=${encodeURIComponent('Role inquiry')}`}
            >
              Role inquiry
            </a>
          </div>
          <a className="contact-email" href={`mailto:${cvData.email}`}>
            {cvData.email}
          </a>
        </div>
        <div className="contact-side">
          <p>{cvData.availability}</p>
          <div className="contact-socials">
            <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={cvData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={cvData.cvUrl} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
