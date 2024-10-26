import { TRPCError } from '@trpc/server';

import { middleware } from '../trpc/trpc-server';

export const authMiddleware = middleware(({ ctx, next }) => {
  if (ctx.token !== 'valid_token') {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({ ctx: { token: ctx.token } });
});
