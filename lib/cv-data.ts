export const cvData = {
  name: 'Ismael Francisco Moreno',
  tagline: 'Full Stack Software Engineer (6+ years)',
  location: 'Mexico City, Mexico',
  email: 'ismaelfcom93@gmail.com',
  phone: '+52 233 129 3536',
  linkedin: 'https://www.linkedin.com/in/ismaelfcom/',
  github: 'https://github.com/FrankIsmael',

  headline:
    'I help startups build and scale web apps with secure payments and cloud infrastructure.',
  subheadline:
    'Full stack engineer with 6+ years shipping production platforms \u2014 from React frontends to AWS-deployed APIs.',

  summary:
    'I build end-to-end web applications \u2014 from React and TypeScript interfaces to Node.js APIs and cloud infrastructure. I enjoy owning features across the full stack, collaborating with distributed teams, and shipping fast.',

  ctaHeadline: 'Have a project in mind? Let\u2019s talk.',
  ctaSubtext:
    'I\u2019m available for freelance projects and startup collaborations. Let\u2019s discuss how I can help.',

  services: [
    {
      title: 'Production-Ready APIs',
      description:
        'Scalable backend services with Node.js and NestJS \u2014 authentication, background jobs, and third-party integrations built for real traffic.',
      icon: '\u2699\uFE0F',
    },
    {
      title: 'Payment & Marketplace Systems',
      description:
        'End-to-end payment flows, subscriptions, refunds, and webhook integrations that handle real money reliably.',
      icon: '\uD83D\uDCB3',
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description:
        'AWS deployments (ECS, EC2, RDS, S3) with CI/CD pipelines and multi-environment setups \u2014 from staging to production.',
      icon: '\u2601\uFE0F',
    },
  ],

  trustSignals: [
    { value: '6+', label: 'Years of Experience' },
    { value: '3', label: 'Companies' },
    { value: 'IPN', label: 'Engineering Degree' },
    { value: 'Ironhack', label: 'Certified' },
  ],

  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'AWS',
    'Next.js',
    'NestJS',
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
      name: 'Repose Funeral Home Marketplace',
      tag: 'Marketplace',
      icon: '\u26B0\uFE0F',
      description:
        'A free resource for making arrangements with nearby funeral homes.',
      problem:
        'Repose needed a marketplace connecting families with funeral homes \u2014 reliable, sensitive, and scalable.',
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
    {
      name: 'Scene Hunters',
      tag: 'Entertainment',
      icon: '\uD83C\uDFAC',
      description:
        'A movie guessing game where players identify two films from a single AI-generated scene.',
      problem:
        'Needed a game platform with scoring, rankings, payments, and an admin panel for managing scenes and players.',
      solution: [
        'Built full-stack app with Next.js (including server-side API routes) and admin panel',
        'Integrated Stripe for one-time purchases and implemented scoring algorithm with top-20 leaderboard',
        'Set up AWS infrastructure, custom domain, PostgreSQL database, and mail service',
      ],
      result:
        'Live game platform with paying users, ranked leaderboard, and admin tools for content management.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'AWS'],
      url: 'https://scenehunters.com',
    },
  ],
};
