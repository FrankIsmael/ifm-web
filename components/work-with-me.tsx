import { cvData } from '@/lib/cv-data';
import { Reveal } from './reveal';
import { SectionHeading } from './ui';

export function WorkWithMe() {
  const { workWithMe } = cvData;

  return (
    <section id="work-with-me" className="section page-width">
      <Reveal>
        <div className="section-topline">
          <SectionHeading label={workWithMe.label} title={workWithMe.title} />
          <p className="section-aside">{workWithMe.aside}</p>
        </div>
      </Reveal>
      <div className="services-grid">
        {cvData.services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06}>
            <article className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="engagement-cards">
        {cvData.engagements.map((engagement, index) => (
          <Reveal key={engagement.title} delay={0.08 + index * 0.06}>
            <article className="engagement-card">
              <h3>{engagement.title}</h3>
              <ul className="impact-list">
                {engagement.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="process-steps">
        {cvData.processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <article className="process-step">
              <p className="eyebrow">{String(index + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
