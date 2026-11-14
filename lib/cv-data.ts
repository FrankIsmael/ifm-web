import { shared } from './cv-shared';

// English content. The Spanish copy lives in cv-data.es.ts and must keep the
// same shape (it is typed as CvData), so update both files together.
export const cvData = {
  ...shared,
  tagline: 'Full stack engineer · Contract & full-time',
  location: 'Mexico',
  meta: {
    title: 'Full Stack Engineer · Contract & Full-time',
    description:
      'Full stack engineer in Mexico, open to contract projects and full-time roles. React, Next.js, NestJS, PostgreSQL, and AWS.',
    ogLocale: 'en_US',
    ogFooter: 'Contract & full-time · Next.js · AWS',
  },
  ui: {
    skipLink: 'Skip to content',
    technologies: 'Technologies',
    nav: {
      about: 'About',
      workWithMe: 'Work with me',
      experience: 'Experience',
      work: 'Work',
      robbie: 'Robbie',
      contact: 'Let’s talk',
      menu: 'Menu',
      close: 'Close',
      openNav: 'Open navigation',
      closeNav: 'Close navigation',
      mainNav: 'Main navigation',
      home: 'Ismael Francisco, home',
      switchLabel: 'Español',
      switchAria: 'Ver este sitio en español',
    },
    hero: {
      cta: 'See the work',
      portraitAlt: 'Ismael smiling at his laptop',
    },
    about: {
      label: 'A little about me',
      title: 'I like figuring out how things work.',
      toolkit: 'My everyday toolkit',
      languages: 'Languages',
    },
    experience: {
      label: 'Experience',
      title: 'Where I’ve worked.',
      readCv: 'Read my CV',
      glance: 'Experience at a glance',
      current: 'Currently here',
      education: 'Education',
      certifications: 'Certifications',
      issued: 'issued',
    },
    projects: {
      label: 'Selected work',
      title: 'Projects I’ve worked on.',
      contribution: 'My contribution',
      visit: 'Visit project',
      privateNote: 'Private client product',
      metrics: 'Measured improvements',
    },
    contact: {
      label: 'What’s next?',
      projectInquiry: 'Project inquiry',
      roleInquiry: 'Role inquiry',
      downloadCv: 'Download CV',
    },
    footer: {
      robbie: 'Robbie',
      privacy: 'Privacy',
      terms: 'Terms',
      agents: 'Information for AI agents',
      top: 'Back to top',
    },
    chat: {
      title: 'Ask my agent',
      dialog: 'Chat with my agent',
      openFull: 'Open full app',
      close: 'Close chat',
    },
  },
  headline: 'I ship web products.',
  headlineAccent: 'From the API to AWS.',
  availability: 'Open to contract and full-time',
  subheadline:
    'I build production web applications, APIs, and AWS infrastructure from Mexico — for contract projects and full-time teams.',
  summary:
    'I take React, Next.js, and NestJS products to production on AWS: search, payments, maps, and the infrastructure that keeps them running. Recent work includes cutting a marketplace search from 382 database queries to 12.',
  aboutExtra:
    'My path started in mechatronics at IPN. That curiosity about how things work still shapes how I build: understand the whole system, pay attention to the details, and make something useful.',
  currentFocus:
    'Lately, I’m exploring AI agents and bringing AI-assisted workflows into my everyday development with Claude Code and Cursor.',
  ctaHeadline: 'Interested in',
  ctaAccent: 'working together?',
  ctaSubtext:
    'I’m open to contract projects and full-time roles. Tell me about a product you need shipped, or a role you’re hiring for.',
  experienceAside: 'Open to contract projects and full-time roles.',
  workAside:
    'Contract delivery across marketplaces, payments, and AWS, plus selected side projects.',
  workWithMe: {
    label: 'Work with me',
    title: 'Product work, end to end.',
    aside: 'The same stack I use on client products today.',
  },
  services: [
    {
      title: 'Full-stack product delivery',
      description:
        'Public, provider, and admin experiences in Next.js and React — forms, dashboards, maps, and media uploads.',
    },
    {
      title: 'APIs and data',
      description:
        'NestJS APIs with Prisma, authentication, scheduled jobs, and PostgreSQL modeling and migrations.',
    },
    {
      title: 'AWS setup and operations',
      description:
        'Amplify, Elastic Beanstalk, RDS, and S3 for frontends, APIs, and files — setup and ongoing management.',
    },
    {
      title: 'AI agents and WhatsApp automation',
      description:
        'AI agents that work through WhatsApp on the official WhatsApp Business Platform: customer replies, catalog updates, and questions about your data.',
      href: '/robbie',
    },
    {
      title: 'Payments',
      description:
        'Stripe purchases and arrangement flows wired into Next.js apps with PostgreSQL persistence.',
    },
  ],
  engagements: [
    {
      title: 'Contract / freelance',
      points: [
        'Scoped product work across Next.js, NestJS, and PostgreSQL.',
        'AWS setup and infrastructure for apps that need to ship.',
        'Performance work on search, maps, and checkout flows.',
      ],
    },
    {
      title: 'Full-time roles',
      points: [
        'Full stack, frontend, or backend roles with distributed teams.',
        'Hands-on delivery from the first endpoint through deployment.',
        'Remote from Mexico, in English and Spanish.',
      ],
    },
  ],
  processSteps: [
    {
      title: 'Discover',
      description:
        'We talk through the product, the users, and what done looks like.',
    },
    {
      title: 'Scope',
      description:
        'I propose a clear slice of work, the stack, and how we’ll know it shipped.',
    },
    {
      title: 'Build',
      description:
        'I implement across the app, API, and infrastructure, with progress you can follow.',
    },
    {
      title: 'Ship',
      description:
        'We deploy, measure, and leave the system in a state your team can keep running.',
    },
  ],
  trustSignals: [
    { value: '6+', label: 'years in software' },
    { value: '3', label: 'companies' },
    { value: '2', label: 'AWS certifications' },
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
        'Led AWS setup and ongoing infrastructure management for Repose and Scene Hunters while contributing across the full stack.',
        'Reduced Repose search queries from 382 to 12 and response payload by about 55% in benchmarks.',
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
      id: 'repose',
      name: 'Repose',
      tag: 'Full stack / Marketplace',
      status: 'Client work',
      description: 'A marketplace for funeral services.',
      detail:
        'A funeral-services marketplace with three Next.js apps for families, providers, and administrators, backed by a shared NestJS API and PostgreSQL database.',
      role: 'Full stack engineer · Led AWS setup and management',
      team: '5 engineers: 2 backend, 2 frontend, and me across the full stack.',
      impact: [
        { value: '~55% smaller', label: 'Search response payload' },
        { value: '382 → 12', label: 'Database queries per search' },
        { value: '58 → 4', label: 'React commits per ~2-second map drag' },
      ],
      solution: [
        'Worked across the three Next.js apps and NestJS API on provider search, arrangement flows, and Stripe payments.',
        'Led AWS setup and management: Amplify for the frontends, Elastic Beanstalk for the API, RDS for PostgreSQL, and S3 for files.',
        'Removed unused review and geocoding data from search responses and fixed N+1 database queries.',
        'Reduced map-driven React updates and stabilized card props so surviving provider cards skipped re-renders during the measured drag.',
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
      role: 'Full stack engineer · Led AWS setup and management',
      team: '2 engineers: me across the full stack and 1 frontend engineer.',
      solution: [
        'Developed the Next.js application across game logic, scoring, the top-20 leaderboard, and admin content management.',
        'Integrated Stripe purchases, PostgreSQL persistence, and transactional email.',
        'Led AWS setup and ongoing infrastructure management alongside full stack development.',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
      url: 'https://scenehunters.com',
      note: '',
    },
    {
      id: 'acp-agent',
      name: 'ACP Agent',
      tag: 'AI / Side project',
      status: 'In development',
      description: 'An AI agent with a workspace of its own.',
      detail:
        'A web interface for an agent running in a remote microVM. Follow its work as it happens, pick up conversations, and preview or edit its generated artifacts in your browser.',
      solution: [
        'Streaming conversations with visible tool activity and model selection.',
        'WhatsApp integration: link your account and interact with the agent in selected groups, sharing conversation context with the web chat.',
        'An artifacts workspace to edit and download code, documents, and HTML apps, with document and HTML previews and edits saved locally in your browser.',
        'English and Spanish interfaces, plus a public demo with guest usage limits.',
      ],
      tech: ['React Router', 'TypeScript', 'Node.js', 'ACP', 'WebSocket / SSE'],
      url: 'https://acp-agent.ismaelfrancisco.tech/',
      note: 'An ongoing project built on the Sistemas Agénticos workshop foundation, with goose as the AI agent.',
    },
  ],
  pages: {
    learnMore: 'Learn more',
    robbie: {
      metaTitle: 'Robbie · WhatsApp AI agent for stores',
      metaDescription:
        'Robbie is a WhatsApp AI agent for small stores: it answers customers, keeps the product catalog up to date, and answers questions about sales data, on the official WhatsApp Business Platform.',
      label: 'Product',
      title: 'Robbie, a WhatsApp AI agent for stores.',
      intro:
        'Robbie works where your customers already are. It runs on the official WhatsApp Business Platform (Cloud API) and is built and operated by {legalName}, a software engineer in Mexico.',
      capabilitiesTitle: 'What Robbie does',
      capabilities: [
        {
          title: 'Answers your customers',
          description:
            'Replies to product, price, and availability questions on your WhatsApp number, using your catalog as the source of truth, and hands the conversation to you when a person is needed.',
        },
        {
          title: 'Manages your catalog from a chat',
          description:
            'Add or update products by sending a message and a photo. The changes show up on your store or catalog site.',
        },
        {
          title: 'Answers questions about your sales',
          description:
            'Ask in plain language — what sold best this month, which products are running low — and get an answer from your own data.',
        },
      ],
      stepsTitle: 'How onboarding works',
      steps: [
        {
          title: 'Connect',
          description:
            'You connect your WhatsApp Business account through Meta’s Embedded Signup. You keep ownership of your number, your account, and your data.',
        },
        {
          title: 'Configure',
          description:
            'We load your catalog, business hours, and tone, and agree on what Robbie answers and when it hands off to you.',
        },
        {
          title: 'Go live',
          description:
            'Robbie starts replying on your number. Message templates and conversation charges are managed in your own WhatsApp Business account.',
        },
      ],
      builtTitle: 'How it’s built',
      built:
        'Robbie is a custom agent built on the open-source goose agent runtime, running in an isolated cloud sandbox. I built the web interface, the real-time streaming layer, and the WhatsApp gateway around it. Try the web version:',
      dataNote: 'How customer data and WhatsApp messages are handled:',
      ctaTitle: 'Want Robbie for your business?',
      ctaText: 'Tell me about your store and how your customers reach you today.',
      ctaSubject: 'Robbie for my business',
    },
    privacy: {
      metaTitle: 'Privacy Policy',
      metaDescription:
        'How Ismael Francisco Moreno collects, uses, and protects personal data on this website and in WhatsApp services such as Robbie.',
      label: 'Legal',
      title: 'Privacy Policy',
      updatedLabel: 'Last updated',
      updated: 'November 13, 2026',
      intro:
        'This policy explains how personal data is handled on ismaelfrancisco.tech and in the software services I provide, including Robbie, a WhatsApp AI agent for businesses. It is issued under Mexico’s Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).',
      sections: [
        {
          heading: '1. Who is responsible',
          blocks: [
            {
              p: '{legalName}, an individual providing software consulting services in Mexico, with address at {address}. Contact: {email}.',
            },
          ],
        },
        {
          heading: '2. Two roles',
          blocks: [
            {
              list: [
                'Website visitors and prospective clients: I am the party responsible for the data described in section 3.',
                'WhatsApp services for client businesses: when a business uses Robbie, that business is responsible for its customers’ data, and I process it only on its behalf and according to its instructions, as described in section 4.',
              ],
            },
          ],
        },
        {
          heading: '3. Website and direct contact',
          blocks: [
            { p: 'Data collected:' },
            {
              list: [
                'Information you send me by email: your name, email address, company, and the content of your message.',
                'Usage data collected by Vercel Analytics and Google Analytics: pages visited, approximate location derived from your IP address, device and browser type.',
                'Messages you send to the chat assistant on this website, used to answer you.',
              ],
            },
            {
              p: 'Purposes: replying to inquiries, preparing proposals and contracts, and understanding how the website is used. I do not sell personal data or use it for advertising.',
            },
          ],
        },
        {
          heading: '4. WhatsApp data processed for client businesses',
          blocks: [
            {
              p: 'When a business connects its WhatsApp Business account to Robbie through the WhatsApp Business Platform, the following data may be processed:',
            },
            {
              list: [
                'Phone numbers and WhatsApp profile names of the business’s customers.',
                'Message content, including text, images, audio, and documents.',
                'Message metadata such as timestamps and delivery status.',
                'The business’s WhatsApp Business account identifiers, message templates, and catalog or product data.',
              ],
            },
            {
              p: 'This data is used only to provide the service the business requested: receiving and answering messages, managing catalog information, and producing reports for that business. It is not used to train AI models, sold, or shared with other clients.',
            },
            {
              p: 'The business is responsible for obtaining its customers’ consent (opt-in) to receive WhatsApp messages and for informing them about this processing.',
            },
          ],
        },
        {
          heading: '5. Service providers',
          blocks: [
            { p: 'Data is processed with these providers, only as needed to run the services:' },
            {
              list: [
                'Meta Platforms (WhatsApp Business Platform): sending and receiving WhatsApp messages.',
                'Anthropic (Claude Haiku, Sonnet, and Opus models): generating the agent’s replies for client WhatsApp conversations. Under Anthropic’s commercial terms, this data is not used to train its models.',
                'InstaBox (instabox.sh): isolated cloud virtual machines (microVMs) where the agent runs.',
                'EasyBits (easybits.cloud, Mexico): file storage and sandbox environments used by the agent.',
                'Vercel and Google: website hosting and analytics.',
                'DeepSeek (Hangzhou DeepSeek Artificial Intelligence Co., Ltd., China): may be used only for the public demo assistant on this website. Client WhatsApp data is never sent to DeepSeek.',
              ],
            },
            {
              p: 'Some of these providers are located outside Mexico. Transfers are made only to the extent necessary to provide the services.',
            },
          ],
        },
        {
          heading: '6. Retention and security',
          blocks: [
            {
              p: 'Inquiry emails are kept as long as needed to handle the conversation and any resulting contract. WhatsApp data is kept while the business uses the service and is deleted from active systems within 30 days after the business disconnects or requests deletion, unless the law requires otherwise. Backup copies held by infrastructure providers may persist for up to 90 days before they are overwritten. Access is restricted, credentials are stored securely, and data travels over encrypted connections.',
            },
          ],
        },
        {
          id: 'data-deletion',
          heading: '7. Your rights and data deletion',
          blocks: [
            {
              p: 'You can request access to, rectification, cancellation of, or opposition to the processing of your personal data (ARCO rights), or revoke your consent, by emailing {email} with your name, the phone number or email involved, and your request. I will reply within 20 business days.',
            },
            {
              p: 'If you are a customer of a business that uses Robbie, you can also contact that business directly. To delete WhatsApp conversation data, send the request to {email}; it will be deleted from active systems within 30 days (provider backups within 90 days) and you will receive a confirmation.',
            },
          ],
        },
        {
          heading: '8. Changes',
          blocks: [
            { p: 'Changes to this policy are published on this page with a new “Last updated” date.' },
          ],
        },
      ],
    },
    terms: {
      metaTitle: 'Terms of Service',
      metaDescription:
        'Terms for software services and WhatsApp AI agent services (Robbie) provided by Ismael Francisco Moreno.',
      label: 'Legal',
      title: 'Terms of Service',
      updatedLabel: 'Last updated',
      updated: 'November 13, 2026',
      intro:
        'These terms apply to the software services provided by {legalName} (“I”, “me”) to businesses (“you”), including Robbie, a WhatsApp AI agent. A signed proposal or contract for a specific project takes precedence where it differs.',
      sections: [
        {
          heading: '1. Services',
          blocks: [
            {
              p: 'I provide software development, consulting, and AI agent services. Robbie connects to your WhatsApp Business account through the official WhatsApp Business Platform to answer your customers, manage catalog information, and report on your data, as agreed for your account.',
            },
          ],
        },
        {
          heading: '2. Your WhatsApp account',
          blocks: [
            {
              list: [
                'You connect your own WhatsApp Business account and phone number and keep ownership of them. You can disconnect Robbie at any time.',
                'You must comply with the WhatsApp Business Terms of Service and the WhatsApp Business and Commerce Policies, including obtaining your customers’ opt-in before messaging them.',
                'WhatsApp conversation and template charges are billed by Meta to the payment method on your WhatsApp Business account, separately from my fees.',
              ],
            },
          ],
        },
        {
          heading: '3. Acceptable use',
          blocks: [
            {
              p: 'You may not use the services to send spam, unlawful content, or messages to people who have not agreed to receive them, or to sell products prohibited by WhatsApp’s policies. I may suspend the service if it is used in breach of these terms or of Meta’s policies.',
            },
          ],
        },
        {
          heading: '4. AI-generated replies',
          blocks: [
            {
              p: 'Robbie generates replies automatically from your information and can make mistakes. You are responsible for the business information you provide and for reviewing how the agent represents your business; sensitive topics should be handed off to a person.',
            },
          ],
        },
        {
          heading: '5. Fees',
          blocks: [
            {
              p: 'Fees, scope, and payment terms are set out in the proposal or contract for each engagement. Invoices (CFDI) are issued according to Mexican tax rules.',
            },
          ],
        },
        {
          heading: '6. Data',
          blocks: [
            {
              p: 'Personal data is handled as described in the Privacy Policy. You own your data; on request or when the service ends, it is returned or deleted.',
            },
          ],
        },
        {
          heading: '7. Liability',
          blocks: [
            {
              p: 'The services are provided with reasonable care but without a guarantee of uninterrupted operation, including outages of WhatsApp or other third-party platforms. To the extent the law allows, my total liability is limited to the fees you paid in the three months before the claim.',
            },
          ],
        },
        {
          heading: '8. Law and contact',
          blocks: [
            { p: 'These terms are governed by the laws of Mexico. Questions: {email}, {address}.' },
          ],
        },
      ],
    },
  },
};

export type CvData = typeof cvData;
