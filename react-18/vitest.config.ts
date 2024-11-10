import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: './',
    setupFiles: './src/core/tests/setup-files.ts',
    include: ['src/**/*.test.tsx'],
    reporters: ['basic'],
    environment: 'jsdom',
    disableConsoleIntercept: true,
    coverage: {
      provider: 'v8',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
