import { cvData } from '@/lib/cv-data';

/**
 * Business identity shown in the footer and the legal pages.
 *
 * Meta Business Verification compares these against the official document
 * (Constancia de Situación Fiscal) and the Business Portfolio. Copy each value
 * EXACTLY as it appears on the Constancia: same spelling, accents, word order.
 * Empty values are not rendered.
 */
export const business = {
  /** Legal name as registered with SAT (persona física). */
  legalName: cvData.name,
  /** Optional trade name, only if it is also used in the Meta Business Portfolio. */
  tradeName: '',
  /** RFC. Optional to publish; Meta does not require it on the site. */
  rfc: '',
  /** Fiscal address, one line, exactly as on the Constancia. */
  address: '',
  /** Business phone in international format, e.g. '+52 442 000 0000'. */
  phone: '',
  email: cvData.email,
  website: 'https://ismaelfrancisco.tech',
  country: 'Mexico',
  /** Date the current legal texts took effect. Update when they change. */
  legalUpdated: 'November 10, 2026',
};
