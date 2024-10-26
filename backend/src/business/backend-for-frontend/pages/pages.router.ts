import { router } from '@/core/trpc/trpc-server';

import { pageRouter } from './page/out/page.router';

export const pagesRouter = router({
  page: pageRouter,
});
