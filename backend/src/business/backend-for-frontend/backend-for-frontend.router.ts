import { router } from '@/core/trpc/trpc-server';

import { pagesRouter } from './pages/pages.router';

export const bffRouter = router({
  pages: pagesRouter,
});
