import { TRPCError } from '@trpc/server';

import { publicProcedure } from './trpc-server';

export const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
  if (ctx.token !== 'valid_token') {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({ ctx: { token: ctx.token } });
});
