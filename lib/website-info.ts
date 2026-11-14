import { cvData } from './cv-data';

export const websiteUrl = 'https://ismaelfrancisco.tech';

// Explicit public fields: do not expose environment configuration or spread cvData.
export const websiteInfo = {
  url: websiteUrl,
  title: `${cvData.displayName} | ${cvData.tagline}`,
  profile: {
    name: cvData.name,
    role: cvData.tagline,
    location: cvData.location,
    introduction: cvData.subheadline,
    summary: cvData.summary,
    background: cvData.aboutExtra,
    currentFocus: cvData.currentFocus,
    skills: cvData.skills,
    languages: cvData.languages,
    availability: cvData.availability,
  },
  services: cvData.services,
  engagements: cvData.engagements,
  experience: cvData.experience,
  projects: cvData.projects,
  education: cvData.education,
  certifications: cvData.certifications,
  contact: {
    email: cvData.email,
    linkedin: cvData.linkedin,
    github: cvData.github,
    availability: cvData.availability,
    note: cvData.ctaSubtext,
    cv: new URL(cvData.cvUrl, websiteUrl).href,
  },
  pages: [
    { url: `${websiteUrl}/`, description: 'Portfolio, biography, experience, projects, and contact information.' },
    { url: `${websiteUrl}/robbie`, description: 'Robbie, a WhatsApp AI agent for stores on the official WhatsApp Business Platform.' },
    { url: `${websiteUrl}/privacy`, description: 'Privacy Policy, including WhatsApp data handling and data deletion requests.' },
    { url: `${websiteUrl}/terms`, description: 'Terms of Service for software and WhatsApp AI agent services.' },
  ],
};
