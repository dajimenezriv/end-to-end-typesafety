import { describe, expect, it } from 'vitest';

import { englishTrpc, trpc } from '@/core/trpc/trcp-client';

describe('translations.service', () => {
  it('Error in spanish', async () => {
    // When
    const promise = trpc.backendForFrontend.pages.feature.translations.query({ number: 'string' as unknown as number });

    // Then
    await expect(promise).rejects.toThrow('number debe ser un número');
  });

  it('Error in english', async () => {
    // When
    const promise = englishTrpc.backendForFrontend.pages.feature.translations.query({ number: 'string' as unknown as number });

    // Then
    await expect(promise).rejects.toThrow('number must be a number');
  });
});
