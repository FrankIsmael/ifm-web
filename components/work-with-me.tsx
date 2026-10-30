import { cvData } from '@/lib/cv-data';
import { SectionHeading } from './ui';

export function WorkWithMe() {
  const { workWithMe } = cvData;

  return (
    <section id="work-with-me" className="section page-width">
      <div className="section-topline">
        <SectionHeading label={workWithMe.label} title={workWithMe.title} />
        <p className="section-aside">{workWithMe.aside}</p>
      </div>
      <ul className="rule-list">
        {cvData.services.map((service) => (
          <li key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <div className="engagement-list">
        {cvData.engagements.map((engagement) => (
          <article key={engagement.title}>
            <h3>{engagement.title}</h3>
            <ul className="copy-list">
              {engagement.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <ol className="process-line">
        {cvData.processSteps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
