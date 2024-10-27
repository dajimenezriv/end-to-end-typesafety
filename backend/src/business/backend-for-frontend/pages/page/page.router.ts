import { protectedProcedure, publicProcedure } from '@/core/trpc/procedures';
import { router } from '@/core/trpc/trpc-server';

import { ComplexInputService } from './out/complex-input.service';
import { DeleteService } from './out/delete.service';
import { HelloService } from './out/hello.service';
import { MutationService } from './out/mutation.service';
import { ProtectedService } from './out/protected-service';
import { TranslationsService } from './out/translations.service';

export const pageRouter = router({
  hello: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/hello' } })
    .input(HelloService.input)
    .input(HelloService.input)
    .output(HelloService.output)
    .query(({ input }) => {
      const service = new HelloService();
      return service.execute(input);
    }),
  protected: protectedProcedure
    .meta({ openapi: { method: 'GET', path: '/protected' } })
    .input(ProtectedService.input)
    .output(ProtectedService.output)
    .query(({ ctx }) => {
      const service = new ProtectedService();
      return service.execute(ctx.token);
    }),
  complexInput: publicProcedure
    // Array not working in query
    .input(ComplexInputService.input)
    .output(ComplexInputService.output)
    .query(({ input }) => {
      const service = new ComplexInputService();
      return service.execute(input);
    }),
  translations: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/translations' } })
    .input(TranslationsService.input)
    .output(TranslationsService.output)
    .query(({ input }) => {
      const service = new TranslationsService();
      return service.execute(input);
    }),
  mutation: publicProcedure
    .meta({ openapi: { method: 'POST', path: '/mutation' } })
    .input(MutationService.input)
    .output(MutationService.output)
    .mutation(({ input }) => {
      const service = new MutationService();
      return service.execute(input);
    }),
  delete: publicProcedure
    // We cannot use another method that is not GET or POST
    .meta({ openapi: { method: 'POST', path: '/delete' } })
    .input(DeleteService.input)
    .output(DeleteService.output)
    .mutation(() => {
      const service = new DeleteService();
      return service.execute();
    }),
});
