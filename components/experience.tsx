import { cvData } from '@/lib/cv-data';
import { Arrow, SectionHeading, Tags } from './ui';

export function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="page-width">
        <div className="section-topline">
          <SectionHeading
            label="Experience"
            title="Where I’ve worked."
          />
          <a
            className="text-link"
            href={cvData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my CV <Arrow diagonal />
          </a>
        </div>
        <div className="experience-list">
          {cvData.experience.map((job) => (
            <article key={job.company} className="experience-row">
              <div className="job-meta">
                <p className="eyebrow">{job.period}</p>
                <p>{job.location}</p>
                {job.current && (
                  <span className="current-badge">
                    <span className="status-dot" /> Currently here
                  </span>
                )}
              </div>
              <div className="job-content">
                <div className="job-heading">
                  <span
                    className={`company-mark company-${job.initials === 'Z' ? 'zircon' : job.initials === 'iv' ? 'ivoy' : 'accenture'}`}
                    aria-hidden="true"
                  >
                    {job.initials}
                  </span>
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                </div>
                <h4>{job.summary}</h4>
                <ul className="impact-list">
                  {job.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Tags items={job.tech} />
              </div>
            </article>
          ))}
        </div>
        <div className="credentials">
          <div>
            <p className="eyebrow">Education</p>
            {cvData.education.map((item) => (
              <div key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span className="credential-date">{item.period}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Certifications</p>
            {cvData.certifications.map((item) => (
              <div className="certification" key={item.title}>
                <span className="aws-mark" aria-hidden="true">
                  aws
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.issuer} · Issued {item.issued}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
