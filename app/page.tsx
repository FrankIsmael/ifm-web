'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cvData } from '@/lib/cv-data';

const inView = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Sticky Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200/60 bg-stone-50/80 backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">{cvData.name.split(' ')[0]}</span>
          <div className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#about" className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
              About
            </a>
            <a href="#projects" className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-24 text-center"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
            >
              <Image
                src="/ifm.png"
                alt="Ismael Francisco Moreno"
                width={148}
                height={148}
                priority
                className="rounded-full ring-4 ring-stone-200 dark:ring-neutral-800"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
              className="mt-6 text-5xl font-bold tracking-tight lg:text-7xl"
            >
              {cvData.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
              className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400"
            >
              Hi &mdash; I&apos;m a Full Stack Software Engineer based in Mexico City. I design and
              build end-to-end web products with React, TypeScript, Node.js, and AWS. Currently
              exploring AI &amp; Retrieval-Augmented Generation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.36 }}
              className="mt-8 flex flex-wrap justify-center gap-3 text-sm"
            >
              <a
                href="#projects"
                className="rounded-full bg-neutral-900 px-5 py-2.5 font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="text-neutral-300 dark:text-neutral-700"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 4v12M4 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={inView}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                About
              </span>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                <p>{cvData.summary}</p>
                <p>{cvData.summaryExtra}</p>
              </div>

              <div className="mt-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={inView}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Projects
              </span>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cvData.projects.map((project, i) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.1 },
                    },
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  {/* Placeholder image */}
                  <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-800">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm font-medium text-neutral-400 dark:text-neutral-600">
                        {project.name}
                        <div className='block mt-10 justify-center text-center scale-[300%]'>
                          {project.icon}
                        </div>
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <span className="mt-1 text-neutral-400 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={inView}
              className="rounded-2xl border border-neutral-200 bg-white p-10 text-center dark:border-neutral-800 dark:bg-neutral-900 lg:p-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Contact
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
                Let&apos;s work together.
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-base text-neutral-500 dark:text-neutral-400">
                Open to new opportunities, collaborations, or just a chat.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <motion.a
                  href={cvData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </motion.a>

                <motion.a
                  href={cvData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </motion.a>

                <motion.a
                  href={`mailto:${cvData.email}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Email
                </motion.a>

                <motion.a
                  href="/CV-IsmaelFranciscoMoreno2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl text-center text-xs text-neutral-400 dark:text-neutral-600">
          {cvData.name} &mdash; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
