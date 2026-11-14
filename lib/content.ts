import { cvData, type CvData } from './cv-data';
import { cvDataEs } from './cv-data.es';
import type { Locale } from './i18n';

const content: Record<Locale, CvData> = { en: cvData, es: cvDataEs };

export function getCvData(locale: Locale): CvData {
  return content[locale];
}
