import { cvData } from '@/lib/cv-data';
import { SectionHeading, Tags } from './ui';

export function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="page-width">
        <div className="section-topline">
          <div>
            <SectionHeading label="Experience" title="Where I’ve worked." />
            <p className="section-aside experience-aside">
              {cvData.experienceAside}
            </p>
          </div>
          <a
            className="text-link"
            href={cvData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my CV
          </a>
        </div>
        <ul className="trust-row" aria-label="Experience at a glance">
          {cvData.trustSignals.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <div className="experience-list">
          {cvData.experience.map((job) => (
            <article className="experience-row" key={job.company}>
              <div className="job-meta">
                <p>{job.period}</p>
                <p>{job.location}</p>
                {job.current && <p className="current-role">Currently here</p>}
              </div>
              <div className="job-content">
                <div className="job-heading">
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <h4>{job.summary}</h4>
                <ul className="copy-list">
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
            <p className="section-label">Education</p>
            {cvData.education.map((item) => (
              <div key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span className="credential-date">{item.period}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="section-label">Certifications</p>
            {cvData.certifications.map((item) => (
              <div className="certification" key={item.title}>
                <h3>{item.title}</h3>
                <p>
                  {item.issuer}, issued {item.issued}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
