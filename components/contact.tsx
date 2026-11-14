import type { CvData } from '@/lib/cv-data';

export function Contact({ content: cvData }: { content: CvData }) {
  const { ui } = cvData;

  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-grid">
        <div>
          <p className="section-label">{ui.contact.label}</p>
          <h2>
            {cvData.ctaHeadline} {cvData.ctaAccent}
          </h2>
          <p className="contact-description">{cvData.ctaSubtext}</p>
          <div className="contact-intents">
            <a
              href={`mailto:${cvData.email}?subject=${encodeURIComponent(ui.contact.projectInquiry)}`}
            >
              {ui.contact.projectInquiry}
            </a>
            <a
              href={`mailto:${cvData.email}?subject=${encodeURIComponent(ui.contact.roleInquiry)}`}
            >
              {ui.contact.roleInquiry}
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
              {ui.contact.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
