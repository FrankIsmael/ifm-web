import type { Content } from './types';

export const en: Content = {
  name: 'Ismael Francisco Moreno',
  tagline: 'Full Stack Engineer — AI Agents & Automation',
  location: 'Mexico City, Mexico',
  email: 'ismaelfcom93@gmail.com',
  phone: '+52 233 129 3536',
  whatsapp: '522331293536',
  linkedin: 'https://www.linkedin.com/in/ismaelfcom/',
  github: 'https://github.com/FrankIsmael',

  headline:
    'I build AI agents that do real work — deployed, observable, and safe to put in production.',
  subheadline:
    'Full stack engineer with 6+ years shipping production platforms in React, Node.js and AWS. I’m now applying that to agentic systems: agents that run in sandboxed environments, keep their state, and check in with a human before they act.',
  availability: 'Available for agent & automation projects',

  summary:
    'I build end-to-end web applications — from React and TypeScript interfaces to Node.js APIs and cloud infrastructure — and I’m currently training in agentic systems design so I can ship agents with the same production discipline: deployment, state, observability, and a human in the loop.',

  ctaHeadline: 'Have a workflow that eats hours every week? Let’s see if an agent can take it.',
  ctaSubtext:
    'I take on freelance projects — from a single scoped automation to a full agent system with its own UI and human approval built in. Tell me the workflow and I’ll tell you honestly whether an agent is the right tool.',
  ctaRecruiterNote:
    'Also open to full-time engineering roles — my CV is linked below.',

  services: [
    {
      title: 'AI Agents in Production',
      description:
        'Agents that survive contact with reality — deployed to sandboxed remote environments, with state persistence and checkpointing so long-running tasks resume instead of starting over.',
      icon: '🤖',
    },
    {
      title: 'Human-in-the-Loop Automation',
      description:
        'Automation you can actually trust: approval steps over WhatsApp or chat, real-time streaming UIs that show every tool call as it happens, plus evals and monitoring so you know what the agent did.',
      icon: '🔁',
    },
    {
      title: 'Production-Ready APIs',
      description:
        'Scalable backend services with Node.js and NestJS — authentication, background jobs, and third-party integrations built for real traffic.',
      icon: '⚙️',
    },
    {
      title: 'Payment & Marketplace Systems',
      description:
        'End-to-end payment flows, subscriptions, refunds, and webhook integrations that handle real money reliably.',
      icon: '💳',
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description:
        'AWS deployments (ECS, EC2, RDS, S3) with CI/CD pipelines and multi-environment setups — from staging to production.',
      icon: '☁️',
    },
  ],

  trustSignals: [
    { value: '6+', label: 'Years shipping production software' },
    { value: '2', label: 'Live platforms with paying users' },
    { value: 'IPN', label: 'Engineering degree' },
    { value: '2026', label: 'Training in agentic systems design' },
  ],

  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Next.js',
    'AI Agents',
    'WebSockets',
    'AWS',
    'Stripe',
    'PostgreSQL',
    'MongoDB',
  ],

  languages: ['Spanish (native)', 'English (professional working)'],

  experience: [
    {
      company: 'ZirconTech (Remote)',
      role: 'Full Stack Developer',
      location: 'Montevideo, Uruguay',
      period: '2021 – Present',
      description: [
        'Delivered end-to-end features using Next.js, React, NestJS, and TypeScript across multiple client projects.',
        'Designed and deployed scalable backend services on AWS (ECS, EC2, RDS, S3), including CI/CD pipelines and environment configuration.',
        'Built and maintained REST APIs with authentication, background job processing, and third-party integrations.',
        'Modeled and optimized relational and non-relational databases (PostgreSQL, MongoDB).',
        'Contributed to infrastructure setup and production monitoring for multi-environment deployments (UAT / Production).',
        'Participated in technical discussions, peer code reviews, and feature planning with distributed teams.',
      ],
    },
    {
      company: 'iVoy',
      role: 'Frontend Developer',
      location: 'Mexico City, Mexico',
      period: '2019 – 2021',
      description: [
        'Developed production web interfaces using React and TypeScript.',
        'Integrated frontend applications with backend APIs and optimized UI performance.',
        'Collaborated in agile teams delivering continuous product improvements.',
      ],
    },
    {
      company: 'Accenture México',
      role: 'Backend Developer',
      location: 'Mexico City, Mexico',
      period: '2018',
      description: [
        'Developed backend services using Java and Spring Framework.',
        'Participated in enterprise-level system integrations and service development.',
      ],
    },
  ],

  education: [
    {
      school: 'Instituto Politécnico Nacional (IPN)',
      degree: "Bachelor's Degree in Mechatronics Engineering",
      location: 'Mexico City, Mexico',
      period: '2011 – 2017',
    },
    {
      school: 'Fixtergeek',
      degree: 'Diseño de Sistemas Agénticos — agent deployment, memory, human-in-the-loop, evals',
      location: 'Remote',
      period: '2026',
    },
    {
      school: 'Ironhack',
      degree: 'Full Stack Web Development Program',
      location: 'Mexico City, Mexico',
      period: '2019',
    },
  ],

  achievements: [
    {
      title: 'Delivered end-to-end features in distributed teams',
      impact:
        'Owned frontend, backend, and cloud deployment work across multiple projects using Next.js, NestJS, and AWS.',
      stack: ['Next.js', 'TypeScript', 'NestJS', 'AWS'],
    },
    {
      title: 'Built scalable backend services and integrations',
      impact:
        'Implemented authenticated REST APIs, background jobs, and third-party integrations with reliable production behavior.',
      stack: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Strengthened delivery quality and maintainability',
      impact:
        'Contributed to peer reviews, release readiness, and cross-team planning to keep quality high across environments.',
      stack: ['CI/CD', 'Code Reviews', 'System Design'],
    },
  ],

  projects: [
    {
      name: 'Scene Hunters',
      tag: 'AI-Powered',
      icon: '🎬',
      description:
        'A movie guessing game where players identify two films from a single AI-generated scene.',
      problem:
        'Needed a game platform built around AI-generated content, with scoring, rankings, payments, and an admin panel for managing scenes and players.',
      solution: [
        'Built full-stack app with Next.js (including server-side API routes) and admin panel',
        'Wired AI-generated scene content into the game loop and content management flow',
        'Integrated Stripe for one-time purchases and implemented scoring algorithm with top-20 leaderboard',
        'Set up AWS infrastructure, custom domain, PostgreSQL database, and mail service',
      ],
      result:
        'Live game platform with paying users, ranked leaderboard, and admin tools for content management.',
      tech: ['Next.js', 'TypeScript', 'AI Generation', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'AWS'],
      url: 'https://scenehunters.com',
    },
    {
      name: 'Repose Funeral Home Marketplace',
      tag: 'Marketplace',
      icon: '⚰️',
      description:
        'A free resource for making arrangements with nearby funeral homes.',
      problem:
        'Repose needed a marketplace connecting families with funeral homes — reliable, sensitive, and scalable.',
      solution: [
        'Built full-stack platform with Next.js frontend and NestJS API',
        'Integrated Stripe for payment processing, search, and arrangement flows',
        'Deployed on AWS with CI/CD and multi-environment setup',
      ],
      result:
        'Live platform serving real users, handling sensitive transactions reliably.',
      tech: ['Next.js', 'TypeScript', 'Nest(Node.js)', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'AWS'],
      url: '',
    },
  ],
};
