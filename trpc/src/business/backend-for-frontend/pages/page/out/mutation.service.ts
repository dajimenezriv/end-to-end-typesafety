import { z } from 'zod';

export class MutationService {
  execute(input: MutationService.TInput): MutationService.TOutput {
    return input;
  }
}

export namespace MutationService {
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
