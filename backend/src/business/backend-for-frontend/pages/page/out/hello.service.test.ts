import { describe, expect, it } from 'vitest';

import { trpc } from '@/core/trpc/trcp-client';

describe('hello.service', () => {
  it('Should say hello', async () => {
    // When
    const output = await trpc.bff.pages.page.hello.query({ name: 'Test' });

    // Then
    expect(output).toBe('Hello, Test!');
  });
});
