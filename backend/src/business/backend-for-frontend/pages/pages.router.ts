import { router } from '@/core/trpc/trpc-server';

import { featureRouter } from './feature/out/feature.router';

export const pagesRouter = router({
  feature: featureRouter,
});
