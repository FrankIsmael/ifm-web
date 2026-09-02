export type Locale = 'en' | 'es';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TrustSignal {
  value: string;
  label: string;
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
}

export interface Achievement {
  title: string;
  impact: string;
  stack: string[];
}

export interface Project {
  name: string;
  tag: string;
  icon: string;
  description: string;
  problem: string;
  solution: string[];
  result: string;
  tech: string[];
  url: string;
}

export interface Content {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  /** E.164 digits only, no '+' — used to build the wa.me link. */
  whatsapp: string;
  linkedin: string;
  github: string;

  headline: string;
  subheadline: string;
  availability: string;
  summary: string;

  ctaHeadline: string;
  ctaSubtext: string;
  ctaRecruiterNote: string;

  services: Service[];
  trustSignals: TrustSignal[];
  skills: string[];
  languages: string[];
  experience: Job[];
  education: Education[];
  achievements: Achievement[];
  projects: Project[];
}
