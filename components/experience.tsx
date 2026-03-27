'use client';

import { cvData } from '@/lib/cv-data';

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <span
            className="h-px flex-1 max-w-8"
            style={{ backgroundColor: 'oklch(0.72 0.18 162)' }}
          />
          <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Experience
          </span>
        </div>

        <div className="flex flex-col divide-y divide-border border border-border">
          {cvData.experience.map((job, i) => (
            <div
              key={job.company}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-[var(--surface-hover)] md:flex-row md:gap-8"
            >
              {/* Period */}
              <div className="flex-shrink-0 md:w-36">
                <span className="font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p
                      className="mt-0.5 text-sm font-medium"
                      style={{ color: 'oklch(0.72 0.18 162)' }}
                    >
                      {job.company}
                    </p>
                  </div>
                  <span className="ml-4 font-mono text-[10px] text-muted-foreground">
                    {job.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-1">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="h-px flex-1 max-w-8"
              style={{ backgroundColor: 'oklch(0.72 0.18 162 / 0.4)' }}
            />
            <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Education
            </span>
          </div>
          <div className="flex flex-col divide-y divide-border border border-border">
            {cvData.education.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col gap-1 bg-card px-8 py-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{edu.school}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
