import { z } from 'zod';

export class ProtectedService {
  execute(token: string): ProtectedService.TOutput {
    return token;
  }
}

export namespace ProtectedService {
  export const output = z.string();
  export type TOutput = z.infer<typeof output>;
}
