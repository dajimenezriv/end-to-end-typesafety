import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globalSetup: './src/core/tests/global-setup.ts',
    root: './',
    include: ['src/**/*.test.ts'],
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
