import cls from 'cls-hooked';

import { TLanguage } from './i18n.types';

export const namespace = cls.createNamespace('language');

export const setLanguage = (language: TLanguage) => {
  namespace.set('language', language);
};

export const getLanguage = (): TLanguage => {
  return namespace.get('language') || 'es';
};
