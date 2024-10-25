import { protectedProcedure } from '@/core/trpc/auth.middleware';
import { publicProcedure, router } from '@/core/trpc/trpc-server';

import { ComplexInputService } from './complex-input.service';
import { HelloService } from './hello.service';
import { ProtectedService } from './protected-service';

export const featureRouter = router({
  hello: publicProcedure
    .input(HelloService.input)
    .input(HelloService.input)
    .output(HelloService.output)
    .query(({ input }) => {
      const service = new HelloService();
      return service.execute(input);
    }),
  protected: protectedProcedure.output(ProtectedService.output).query(({ ctx }) => {
    const service = new ProtectedService();
    return service.execute(ctx.token);
  }),
  complexInput: publicProcedure
    .input(ComplexInputService.input)
    .output(ComplexInputService.output)
    .query(({ input }) => {
      const service = new ComplexInputService();
      return service.execute(input);
    }),
});
