import { bffRouter } from '@/business/backend-for-frontend/backend-for-frontend.router';

import { router } from './trpc-server';

export const appRouter = router({
  bff: bffRouter,
});

export type AppRouter = typeof appRouter;
