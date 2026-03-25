'use client';

import { cvData } from '@/lib/cv-data';

export function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <span
            className="h-px flex-1 max-w-8"
            style={{ backgroundColor: 'oklch(0.72 0.18 162)' }}
          />
          <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Selected Work
          </span>
        </div>

        <div className="flex flex-col gap-px border border-border bg-border">
          {cvData.projects.map((project) => (
            <div
              key={project.name}
              className="group bg-card p-8 transition-colors hover:bg-[var(--surface-hover)] md:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                {/* Left: meta */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase"
                      style={{
                        borderColor: 'oklch(0.72 0.18 162 / 0.3)',
                        color: 'oklch(0.72 0.18 162)',
                      }}
                    >
                      {project.tag}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {project.url.replace('https://', '')}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 8L8 2M8 2H4M8 2v4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Problem / Solution / Result */}
              <div className="mt-8 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
                <div>
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    Problem
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    What I Did
                  </p>
                  <ul className="space-y-1.5">
                    {project.solution.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: 'oklch(0.72 0.18 162)' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    Result
                  </p>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: 'oklch(0.72 0.18 162)' }}
                  >
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
