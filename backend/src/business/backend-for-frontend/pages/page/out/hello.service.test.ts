import { describe, expect, it } from 'vitest';

import { trpc } from '@/core/trpc/trcp-client';

describe('hello.service', () => {
  it('Should say hello', async () => {
    // When
    const { output } = await trpc.bff.pages.page.hello.query({ name: 'Test' });

    // Then
    expect(output).toBe('Hello, Test!');
  });

  it('Using fetch', async () => {
    // When
    const input = encodeURIComponent(JSON.stringify({ name: 'Test' }));
    const response = await fetch(`http://localhost:2022/bff.pages.page.hello?input=${input}`);
    const output = await response.json();

    // Then
    expect(output).toStrictEqual({
      result: {
        data: {
          output: 'Hello, Test!',
        },
      },
    });
  });
});
