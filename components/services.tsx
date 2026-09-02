'use client';

import { getContent } from '@/lib/content';

const c = getContent();

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px max-w-8 flex-1 bg-highlight" />
          <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            What I Do
          </span>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((service, i) => (
            <div
              key={service.title}
              className="group flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="font-mono text-xs font-bold tracking-widest">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Fills the trailing grid cell and gives the section an exit. */}
          <a
            href="#contact"
            className="group flex flex-col justify-between gap-6 bg-card p-8 transition-colors hover:bg-surface-hover"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
              06
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Something else?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If it involves shipping software to real users, tell me about it
                &mdash; I&rsquo;ll say honestly whether I&rsquo;m the right fit.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-highlight">
                Get in touch
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </div>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          {c.trustSignals.map((signal) => (
            <div key={signal.label} className="flex flex-col gap-1">
              <p className="text-3xl font-bold tracking-tight text-highlight">
                {signal.value}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
