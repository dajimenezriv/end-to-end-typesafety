import { z } from 'zod';

export class ComplexInputService {
  execute(input: ComplexInputService.TInput): ComplexInputService.TOutput {
    return input;
  }
}

export namespace ComplexInputService {
  export const input = z.object({
    string: z.string(),
    number: z.coerce.number(),
    date: z.coerce.date(),
    options: z.union([z.literal('a'), z.literal('b')]),
    list_of_values: z.array(z.string()),
  });
  export const output = input;
  export type TInput = z.infer<typeof input>;
  export type TOutput = z.infer<typeof output>;
}
