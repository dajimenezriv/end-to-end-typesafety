import { z } from 'zod';

export class HelloService {
  execute({ name }: HelloService.TInput): HelloService.TOutput {
    return `Hello, ${name}!`;
  }
}

export namespace HelloService {
  export const input = z.object({ name: z.string() });
  export const output = z.string();
  export type TInput = z.infer<typeof input>;
  export type TOutput = z.infer<typeof output>;
}
