import { cvData } from '@/lib/cv-data';
import { Reveal } from './reveal';
import { Arrow, CodeMark, SectionHeading, Tags } from './ui';

function AgentIllustration() {
  return (
    <div
      className="agent-illustration"
      role="img"
      aria-label="ACP Agent connects your browser to an agent in its own cloud workspace, with chat, tools, and artifacts."
    >
      <div className="diagram-topline">
        <span>REMOTE AGENT WORKSPACE</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="agent-orbit orbit-one" />
      <div className="agent-orbit orbit-two" />
      <div className="agent-window">
        <div className="window-toolbar">
          <span />
          <span />
          <span />
          <p>acp / workspace</p>
        </div>
        <div className="agent-symbol" aria-hidden="true">
          <CodeMark />
        </div>
        <p>
          Run tools.
          <br />
          Edit files.
        </p>
        <div className="agent-capabilities">
          <span>Chat</span>
          <span>Tools</span>
          <span>Artifacts</span>
        </div>
      </div>
      <div className="diagram-connection">
        <span className="connection-line" />
        <span className="connection-label">ACP</span>
        <span className="connection-line" />
      </div>
      <div className="browser-node">
        <span aria-hidden="true">⌘</span> Your browser
      </div>
      <span className="diagram-caption">
        Your ideas. An agent with its own workspace.
      </span>
    </div>
  );
}

function ProjectArt({ id }: { id: string }) {
  if (id === 'repose') {
    return (
      <>
        <div className="repose-mark">
          <CodeMark />
        </div>
        <span className="repose-name">
          repose<span>Care, when it matters most.</span>
        </span>
      </>
    );
  }

  if (id === 'scene-hunters') {
    return (
      <>
        <div className="film-perforations" />
        <span className="scene-name">
          SCENE
          <br />
          <span>HUNTERS</span>
        </span>
        <span className="scene-caption">FOR THE LOVE OF MOVIES.</span>
      </>
    );
  }

  return (
    <div className="acp-card-art">
      <span className="agent-symbol">
        <CodeMark />
      </span>
      <p>Side project · AI</p>
    </div>
  );
}

export function Projects() {
  const [featured, ...projects] = cvData.projects;
  const featuredImpact = 'impact' in featured ? featured.impact : undefined;

  return (
    <section id="work" className="section page-width">
      <Reveal>
        <div className="section-topline">
          <SectionHeading
            label="Selected work"
            title="Projects I’ve worked on."
          />
          <p className="section-aside">{cvData.workAside}</p>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
      <article className="featured-project">
        <div className="featured-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {featured.tag}
          </p>
          <h3>
            {featured.name}
            <span className="serif-accent">{featured.description}</span>
          </h3>
          <p>{featured.detail}</p>
          {'role' in featured && featured.role && (
            <div className="project-ownership">
              <p>{featured.role}</p>
              <p>{featured.team}</p>
            </div>
          )}
          <ul className="impact-list">
            {featured.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Tags items={featured.tech} />
          {featured.url ? (
            <a
              className="button button-dark"
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project <Arrow diagonal />
            </a>
          ) : (
            <p className="project-note">
              {featured.note || 'Private client product'}
            </p>
          )}
        </div>
        {featured.id === 'acp-agent' ? (
          <AgentIllustration />
        ) : featuredImpact ? (
          <div className="featured-metrics">
            <p className="eyebrow">Measured improvements</p>
            <ul>
              {featuredImpact.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <AgentIllustration />
        )}
      </article>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
          <article className={`project-card project-${project.id}`}>
            <div className="project-art" aria-hidden="true">
              <ProjectArt id={project.id} />
            </div>
            <div className="project-card-body">
              <p className="eyebrow">{project.tag}</p>
              <h3>{project.name}</h3>
              <p className="project-subtitle">{project.description}</p>
              <p>{project.detail}</p>
              {'role' in project && (
                <div className="project-ownership">
                  <p>{project.role}</p>
                  <p>{project.team}</p>
                </div>
              )}
              {'impact' in project && project.impact && (
                <div className="project-results">
                  <h4 className="eyebrow">Measured improvements</h4>
                  <ul className="project-metrics">
                    {project.impact.map((metric) => (
                      <li key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Tags items={project.tech} />
              <details className="project-details">
                <summary>
                  My contribution <span aria-hidden="true">+</span>
                </summary>
                <ul className="impact-list">
                  {project.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
              {project.url ? (
                <a
                  className="text-link project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit project <Arrow diagonal />
                </a>
              ) : (
                <span className="private-project">
                  {project.note || project.status}
                </span>
              )}
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
