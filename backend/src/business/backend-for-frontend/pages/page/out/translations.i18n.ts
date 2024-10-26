import { getLanguage } from '@/core/i18n/i18n.context';

const translations = {
  en: {
    number_must_be_a_number: 'number must be a number',
  },
  es: {
    number_must_be_a_number: 'number debe ser un número',
  },
} as const;

export const i18n = () => {
  const language = getLanguage();
  return translations[language];
};
