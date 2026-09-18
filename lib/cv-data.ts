export const cvData = {
  name: 'Ismael Francisco Moreno',
  displayName: 'Ismael Francisco',
  tagline: 'Full Stack Software Engineer',
  location: 'Mexico City, Mexico',
  email: 'ismaelfcom93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ismaelfcom/',
  github: 'https://github.com/FrankIsmael',
  cvUrl: '/CV-IsmaelFranciscoMoreno2026.pdf',
  headline: 'Full stack engineer.',
  subheadline:
    'I turn ideas into working products — from the interface you interact with to the APIs and cloud infrastructure behind it.',
  summary:
    'I’m a full stack engineer at ZirconTech, working remotely with distributed teams. I build web applications with React, Next.js, NestJS, and PostgreSQL, and take them to production on AWS.',
  aboutExtra:
    'My path started in mechatronics at IPN. That curiosity about how things work still shapes how I build: understand the whole system, pay attention to the details, and make something useful.',
  currentFocus:
    'Lately, I’m exploring AI agents and bringing AI-assisted workflows into my everyday development with Claude Code and Cursor.',
  ctaHeadline: 'Let’s build something that matters.',
  ctaSubtext:
    'I’m open to full stack, frontend, and backend roles, as well as interesting projects. If you’re building something useful, I’d love to hear about it.',
  trustSignals: [
    { value: '7+', label: 'years in software' },
    { value: '3', label: 'companies along the way' },
    { value: '2', label: 'AWS certifications' },
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'AWS',
    'Prisma',
    'Docker',
  ],
  languages: ['Spanish (native)', 'English (professional working)'],
  experience: [
    {
      company: 'ZirconTech',
      initials: 'Z',
      role: 'Full Stack Developer',
      location: 'Uruguay · Remote',
      period: 'Nov 2021 — Present',
      current: true,
      summary: 'From the first API endpoint to the production deployment.',
      description: [
        'Build features across public, provider, and admin experiences with Next.js, React, and TypeScript — including forms, dashboards, maps, and media uploads.',
        'Develop NestJS APIs with Prisma, authentication, scheduled jobs, and PostgreSQL database modeling and migrations.',
        'Led the AWS setup for my latest project, covering the database, API deployment configuration, and frontend hosting with Amplify.',
      ],
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'iVoy',
      initials: 'iv',
      role: 'Frontend Developer',
      location: 'Mexico City',
      period: 'Sep 2019 — Aug 2021',
      current: false,
      summary: 'Helping people follow their delivery, every step of the way.',
      description: [
        'Built React experiences for package tracking, identity confirmation, help, and address updates.',
        'Connected GraphQL queries and subscriptions with Apollo for near real-time delivery status and location updates.',
        'Developed interactive maps and address flows with Leaflet, plus reusable components and typed GraphQL operations.',
      ],
      tech: ['React', 'TypeScript', 'GraphQL', 'Leaflet'],
    },
    {
      company: 'Accenture México',
      initials: '>',
      role: 'Backend Developer',
      location: 'Mexico City',
      period: 'Jun 2018 — Jan 2019',
      current: false,
      summary: 'A foundation in backend engineering and enterprise systems.',
      description: [
        'Developed backend services with Java and Spring Framework, contributing to enterprise system integrations and service development.',
      ],
      tech: ['Java', 'Spring', 'SQL'],
    },
  ],
  education: [
    {
      school: 'Instituto Politécnico Nacional',
      degree: 'B.Eng. in Mechatronics · UPIITA',
      period: '2011 — 2018',
    },
  ],
  certifications: [
    {
      title: 'Solutions Architect — Associate',
      issuer: 'AWS',
      issued: 'Mar 2025',
    },
    { title: 'Cloud Practitioner', issuer: 'AWS', issued: 'Jan 2025' },
  ],
  projects: [
    {
      id: 'acp-agent',
      name: 'ACP Agent',
      tag: 'AI / Personal project',
      status: 'In development',
      description: 'An AI agent with a workspace of its own.',
      detail:
        'A web interface for an agent running in a remote microVM. Follow its work as it happens, pick up conversations, and preview or edit the things it creates.',
      solution: [
        'Streaming conversations with visible tool activity and model selection.',
        'WhatsApp integration: link your account and interact with the agent in selected groups, sharing conversation context with the web chat.',
        'An artifacts workspace to preview, edit, and download code, documents, and HTML apps.',
        'English and Spanish interfaces, plus a public demo with guest usage limits.',
      ],
      tech: ['React Router', 'TypeScript', 'Node.js', 'ACP', 'WebSocket / SSE'],
      url: 'https://acp-agent.ismaelfrancisco.tech/',
      note: 'An ongoing project built on the Sistemas Agénticos workshop foundation, with goose as the AI agent.',
    },
    {
      id: 'repose',
      name: 'Repose',
      tag: 'Full stack / Marketplace',
      status: 'Client work',
      description: 'Making a difficult moment a little easier.',
      detail:
        'A marketplace that helps families find nearby funeral homes and make arrangements. Built across the frontend, backend, payments, and cloud deployment.',
      solution: [
        'Next.js interfaces and a NestJS API for search and arrangement flows.',
        'Stripe payment integration and AWS deployment across environments.',
      ],
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'AWS'],
      url: '',
      note: '',
    },
    {
      id: 'scene-hunters',
      name: 'Scene Hunters',
      tag: 'Full stack / Entertainment',
      status: 'Client work',
      description: 'One scene. Two movies. Can you name them?',
      detail:
        'A movie guessing game built around AI-generated scenes, with a scoring system, top-20 leaderboard, payments, and an admin workspace.',
      solution: [
        'Full stack Next.js application with game logic and content management.',
        'Stripe purchases, PostgreSQL, email integration, and AWS infrastructure.',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
      url: 'https://scenehunters.com',
      note: '',
    },
  ],
};
