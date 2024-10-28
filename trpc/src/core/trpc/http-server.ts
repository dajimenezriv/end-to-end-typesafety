import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './router';
import { createContext } from './trpc-server';

export const { listen, server } = createHTTPServer({
  router: appRouter,
  createContext,
});
