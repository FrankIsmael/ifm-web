// Values that are identical in every language.
export const shared = {
  name: 'Ismael Francisco Moreno',
  displayName: 'Ismael Francisco',
  email: 'ismaelfcom93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ismaelfcom/',
  github: 'https://github.com/FrankIsmael',
  cvUrl: '/CV-IsmaelFranciscoMoreno2026.pdf',
  // Override locally with NEXT_PUBLIC_AGENT_URL to point the chat widget at a dev server.
  agentUrl:
    process.env.NEXT_PUBLIC_AGENT_URL ??
    'https://acp-agent.ismaelfrancisco.tech/',
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
};
