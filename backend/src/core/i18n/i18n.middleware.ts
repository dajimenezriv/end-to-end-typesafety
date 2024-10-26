import { middleware } from '../trpc/trpc-server';
import { namespace, setLanguage } from './i18n.context';
import { LANGUAGES, TLanguage } from './i18n.types';

export const i18nMiddleware = middleware(({ ctx, next }) => {
  const rawLanguage = ctx.language as TLanguage;
  let language: TLanguage = 'es';
  if (rawLanguage && LANGUAGES.includes(rawLanguage)) language = rawLanguage;

  return namespace.runAndReturn(() => {
    setLanguage(language);
    return next();
  });
});
