import { protectedProcedure, publicProcedure } from '@/core/trpc/procedures';
import { router } from '@/core/trpc/trpc-server';

import { ComplexInputService } from './complex-input.service';
import { HelloService } from './hello.service';
import { ProtectedService } from './protected-service';
import { TranslationsService } from './translations.service';

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
  translations: publicProcedure
    .input(TranslationsService.input)
    .output(TranslationsService.output)
    .query(({ input }) => {
      const service = new TranslationsService();
      return service.execute(input);
    }),
});
