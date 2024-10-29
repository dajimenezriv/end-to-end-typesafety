import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globalSetup: './src/core/tests/global-setup.ts',
    // setupFiles: './src/core/tests/setup-files.ts',
    root: './',
    include: ['src/**/*.test.ts'],
    reporters: ['basic'],
    disableConsoleIntercept: true,
    coverage: {
      provider: "v8"
    },
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
