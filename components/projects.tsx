import Image from 'next/image';
import type { CvData } from '@/lib/cv-data';
import { SectionHeading, Tags } from './ui';

export function Projects({ content: cvData }: { content: CvData }) {
  const { ui } = cvData;

  return (
    <section id="work" className="section page-width">
      <div className="section-topline">
        <SectionHeading
          label={ui.projects.label}
          title={ui.projects.title}
        />
        <p className="section-aside">{cvData.workAside}</p>
      </div>
      <div className="project-list">
        {cvData.projects.map((project) => {
          const impact = 'impact' in project ? project.impact : undefined;

          return (
            <article
              key={project.id}
              className={impact ? 'project-row has-metrics' : 'project-row'}
            >
              <div className="project-copy">
                <p className="section-label">{project.tag}</p>
                <h3>
                  {project.id === 'acp-agent' && (
                    <Image
                      src="/acp-agent-mark.png"
                      alt=""
                      width={44}
                      height={44}
                      className="project-mark"
                    />
                  )}
                  {project.name}
                </h3>
                <p className="project-subtitle">{project.description}</p>
                <p>{project.detail}</p>
                {'role' in project && project.role && (
                  <div className="project-ownership">
                    <p>{project.role}</p>
                    <p>{project.team}</p>
                  </div>
                )}
                {impact ? (
                  <ul className="copy-list">
                    {project.solution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <details className="project-details">
                    <summary>
                      {ui.projects.contribution} <span aria-hidden="true">+</span>
                    </summary>
                    <ul className="copy-list">
                      {project.solution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <Tags items={project.tech} label={ui.technologies} />
                {project.url ? (
                  <a
                    className="text-link project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.projects.visit}
                  </a>
                ) : (
                  <p className="project-note">
                    {project.note || ui.projects.privateNote}
                  </p>
                )}
              </div>
              {impact && (
                <ul className="project-metrics" aria-label={ui.projects.metrics}>
                  {impact.map((metric) => (
                    <li key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
