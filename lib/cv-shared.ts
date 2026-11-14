// Values that are identical in every language.
export const shared = {
  name: 'Ismael Francisco Moreno',
  displayName: 'Ismael Francisco',
  email: 'hello@ismaelfrancisco.tech',
  // Legal/business identity: must match the SAT CSF exactly (Meta business verification).
  business: {
    legalName: 'Ismael Francisco Moreno',
    shortLocation: 'Zoquiapan, Puebla, México',
    address:
      'Andador Carretera a Nauzontla No. Ext. 0, entre calles Francisco I. Madero, Zoquiapan, Puebla, C.P. 73540, México',
  },
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
