import { authMiddleware } from '../auth/auth.middleware';
import { i18nMiddleware } from '../i18n/i18n.middleware';
import { procedure } from './trpc-server';

export const publicProcedure = procedure.use(i18nMiddleware);
export const protectedProcedure = publicProcedure.use(authMiddleware);
