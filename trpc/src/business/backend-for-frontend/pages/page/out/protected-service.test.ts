import { describe, expect, it } from 'vitest';

import { publicTrpc, trpc } from '@/core/trpc/trcp-client';

describe('protected.service', () => {
  it('Valid token', async () => {
    // When
    const output = await trpc.bff.pages.page.protected.query();

    // Then
    expect(output).toBe('valid_token');
  });

  it('No token', async () => {
    // When
    const promise = publicTrpc.bff.pages.page.protected.query();

    // Then
    expect(promise).rejects.toThrow('UNAUTHORIZED');
  });
});
