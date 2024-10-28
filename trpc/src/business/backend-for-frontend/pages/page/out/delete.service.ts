import { z } from 'zod';

export class DeleteService {
  execute(): DeleteService.TOutput {
    return 'Hello';
  }
}

export namespace DeleteService {
  export const input = z.void();
  export const output = z.string();
  export type TInput = z.infer<typeof input>;
  export type TOutput = z.infer<typeof output>;
}
