import { en } from './en';
import { es } from './es';
import type { Content, Locale } from './types';

export type { Content, Locale } from './types';

export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Partial<Content>> = { en, es };

/**
 * Returns the site copy for a locale, falling back field-by-field to English.
 * All user-facing strings live here — never inline them in components.
 */
export function getContent(locale: Locale = DEFAULT_LOCALE): Content {
  return { ...en, ...dictionaries[locale] };
}
