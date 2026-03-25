'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { cvData } from '@/lib/cv-data';
import type { SectionId } from './types';

interface Props {
  activeSection: SectionId;
  onBack: () => void;
}

function AboutContent() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">About Me</h2>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
        <p>{cvData.summary}</p>
      </div>
      <div className="mt-8">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {cvData.skills.map((s) => (
            <span
              key={s}
              className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectsContent() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">Projects</h2>
      <div className="mt-4 flex flex-col gap-px border border-border bg-border">
        {cvData.projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card p-5 transition-colors hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="rounded border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase"
                style={{
                  borderColor: 'oklch(0.72 0.18 162 / 0.3)',
                  color: 'oklch(0.72 0.18 162)',
                }}
              >
                {p.tag}
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                {p.url.replace('https://', '')}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 8L8 2M8 2H4M8 2v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <h3 className="mt-2 text-sm font-bold text-foreground">{p.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

function ContactContent() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {cvData.ctaHeadline}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {cvData.ctaSubtext}
      </p>

      <a
        href={`mailto:${cvData.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        style={{ backgroundColor: 'oklch(0.72 0.18 162)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Send a message
      </a>

      <div className="mt-8 grid divide-y divide-border border-t border-border">
        <a
          href={`mailto:${cvData.email}`}
          className="group flex items-center justify-between py-3 transition-colors hover:text-foreground"
        >
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            Email
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">{cvData.email}</span>
        </a>
        <a
          href={cvData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-3 transition-colors hover:text-foreground"
        >
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            LinkedIn
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] text-muted-foreground">ismaelfcom</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M2 8L8 2M8 2H4M8 2v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </a>
        <a
          href={cvData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-3 transition-colors hover:text-foreground"
        >
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            GitHub
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] text-muted-foreground">FrankIsmael</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M2 8L8 2M8 2H4M8 2v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </a>
        <a
          href="/CV-IsmaelFranciscoMoreno2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-3 transition-colors hover:text-foreground"
        >
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            CV
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">Download PDF</span>
        </a>
      </div>
    </>
  );
}

export default function SceneOverlay({ activeSection, onBack }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence>
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pointer-events-auto relative max-h-[72vh] w-full max-w-lg overflow-y-auto
                         rounded border border-border bg-card backdrop-blur-md
                         p-8 text-foreground shadow-2xl mx-4"
            >
              <button
                onClick={onBack}
                className="absolute top-4 right-4 font-mono text-[10px] font-medium tracking-widest text-muted-foreground uppercase
                           transition-colors hover:text-foreground flex items-center gap-1"
              >
                &larr; back
              </button>

              {activeSection === 'about' && <AboutContent />}
              {activeSection === 'projects' && <ProjectsContent />}
              {activeSection === 'contact' && <ContactContent />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
