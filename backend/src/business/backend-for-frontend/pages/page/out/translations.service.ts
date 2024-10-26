import { z } from 'zod';

import { i18n } from './translations.i18n';

export class TranslationsService {
  execute(input: TranslationsService.TInput): TranslationsService.TOutput {
    return input;
  }
}

export namespace TranslationsService {
  export const input = z.object({
    number: z.coerce.number({ errorMap: () => ({ message: i18n().number_must_be_a_number }) }),
  });
  export const output = input;
  export type TInput = z.infer<typeof input>;
  export type TOutput = z.infer<typeof output>;
}
