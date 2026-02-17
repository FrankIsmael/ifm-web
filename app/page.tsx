import Image from 'next/image';
import { cvData } from '@/lib/cv-data';

export default function Home() {
  const quickStats = [
    { label: 'Experience', value: '6+ years' },
    { label: 'Roles', value: `${cvData.experience.length}` },
    { label: 'Core Skills', value: `${cvData.skills.length}+` },
    { label: 'Languages', value: `${cvData.languages.length}` },
  ];

  const highlights = [
    'Builds end-to-end features across frontend, backend, and cloud infrastructure.',
    'Focuses on production reliability, maintainability, and clear engineering standards.',
    'Collaborates effectively with distributed teams through planning and code reviews.',
    'Currently learning Python, Java, and AI, with a primary focus on Retrieval-Augmented Generation (RAG).',
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-8 lg:px-24 lg:py-16">
      <header className="z-10 w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 lg:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-300">
              Open to Full Stack Engineering opportunities
            </span>
          </div>

          <div className="mt-6 flex flex-col items-center text-center">
            <Image
              className="rounded-full ring-4 ring-white dark:ring-neutral-900"
              src="/ifm.png"
              alt="Ismael Francisco Moreno"
              width={120}
              height={120}
              priority
            />
            <h1 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
              {cvData.name}
            </h1>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              {cvData.tagline}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {cvData.location}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={cvData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href={`mailto:${cvData.email}`}
              className="rounded-md border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
            >
              {cvData.email}
            </a>
            <a
              href={`tel:${cvData.phone.replace(/\s/g, '')}`}
              className="rounded-md border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
            >
              {cvData.phone}
            </a>
            <a
              href="/CV-IsmaelFranciscoMoreno2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-gray-900 px-3 py-2 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Download CV (PDF)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
              >
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav className="mt-8 w-full max-w-5xl">
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <a
            href="#about"
            className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <h2 className="mb-2 text-xl font-semibold">
              About
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Professional summary</p>
          </a>
          <a
            href="#experience"
            className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Experience
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Work history</p>
          </a>
          <a
            href="#education"
            className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Education
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Academic background</p>
          </a>
          <a
            href="#achievements"
            className="group rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Achievements
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Professional impact</p>
          </a>
        </div>
      </nav>

      <div className="mt-12 w-full max-w-5xl space-y-8">
        <section
          id="about"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:p-8"
        >
          <h2 className="mb-4 text-xl font-semibold">About</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {cvData.summary}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Professional Highlights
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Languages Spoken
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {cvData.languages.join(', ')}
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:p-8"
        >
          <h2 className="mb-6 text-xl font-semibold">Experience</h2>
          <div className="space-y-8">
            {cvData.experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative pl-6">
                <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-gray-300 dark:bg-neutral-600" />
                <span className="absolute left-[5px] top-4 h-[calc(100%-12px)] w-px bg-gray-200 dark:bg-neutral-700" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">
                    {job.company} - {job.role}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {job.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:p-8"
        >
          <h2 className="mb-6 text-xl font-semibold">Education</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cvData.education.map((edu) => (
              <article
                key={`${edu.school}-${edu.period}`}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {edu.degree}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {edu.location} / {edu.period}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="achievements"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:p-8"
        >
          <h2 className="mb-2 text-xl font-semibold">Key Achievements</h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Highlights of delivery, ownership, and engineering outcomes across my recent work.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {cvData.achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <h3 className="text-base font-semibold">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {achievement.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {achievement.stack.map((item) => (
                    <span
                      key={`${achievement.title}-${item}`}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-12 w-full max-w-5xl border-t border-gray-200 py-8 dark:border-neutral-800">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${cvData.email}`}>Email</a>
          <a href={cvData.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          Ismael Francisco Moreno
        </p>
      </footer>
    </main>
  );
}
