export const LANGUAGES = ['es', 'en'] as const;
export type TLanguage = (typeof LANGUAGES)[number];
