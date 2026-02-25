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
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
        <p>{cvData.summary}</p>
        <p className="text-neutral-400">{cvData.summaryExtra}</p>
      </div>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {cvData.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
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
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {cvData.projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-2 mb-1">
              <span>{p.icon}</span>
              <span className="font-semibold text-white">{p.name}</span>
            </div>
            <p className="text-sm text-neutral-400 mt-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-neutral-500"
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
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="text-neutral-400 text-sm mb-6">Open to new opportunities and collaborations.</p>
      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${cvData.email}`}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white transition"
        >
          <span className="text-neutral-500">✉</span>
          {cvData.email}
        </a>
        <a
          href={cvData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-blue-400 transition"
        >
          <span className="text-neutral-500">in</span>
          LinkedIn
        </a>
        <a
          href={cvData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white transition"
        >
          <span className="text-neutral-500">gh</span>
          GitHub
        </a>
        <a
          href="/CV-IsmaelFranciscoMoreno2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm font-medium text-white hover:bg-white/20 transition"
        >
          ↓ Download CV
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
                         rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md
                         p-8 text-neutral-100 shadow-2xl mx-4"
            >
              <button
                onClick={onBack}
                className="absolute top-4 right-4 text-xs text-neutral-500 hover:text-neutral-200
                           transition tracking-widest flex items-center gap-1"
              >
                ← back
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
