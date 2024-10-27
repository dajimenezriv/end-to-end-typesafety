import { z } from 'zod';

export class ProtectedService {
  execute(token: string): ProtectedService.TOutput {
    return token;
  }
}

export namespace ProtectedService {
  export const input = z.void();
  export const output = z.string();
  export type TInput = z.infer<typeof input>;
  export type TOutput = z.infer<typeof output>;
}
