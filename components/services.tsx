'use client';

import { cvData } from '@/lib/cv-data';

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className="h-px flex-1 max-w-8"
            style={{ backgroundColor: 'oklch(0.72 0.18 162)' }}
          />
          <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            What I Do
          </span>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {cvData.services.map((service, i) => (
            <div
              key={service.title}
              className="group flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-[var(--surface-hover)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <span
                  className="font-mono text-xs font-bold tracking-widest"
                  style={{ color: 'oklch(0.72 0.18 162)' }}
                >
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
        </div>

        {/* Trust signals */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          {cvData.trustSignals.map((signal) => (
            <div key={signal.label} className="flex flex-col gap-1">
              <p
                className="text-3xl font-bold tracking-tight"
                style={{ color: 'oklch(0.72 0.18 162)' }}
              >
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
