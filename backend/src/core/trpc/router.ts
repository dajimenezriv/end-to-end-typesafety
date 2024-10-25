import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { backendForFrontendRouter } from '@/business/backend-for-frontend/backend-for-frontend.router';

import { createContext, router } from './trpc-server';

const appRouter = router({
  backendForFrontend: backendForFrontendRouter,
});

export type AppRouter = typeof appRouter;

export const { listen, server } = createHTTPServer({
  router: appRouter,
  createContext,
});
