import { router } from '@/core/trpc/trpc-server';

import { pagesRouter } from './pages/pages.router';

export const backendForFrontendRouter = router({
  pages: pagesRouter,
});
