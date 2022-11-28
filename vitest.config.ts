/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./__test__/vitest.setup.ts'],
    coverage: {
      all: true,
      exclude: [
        '.next/*',
        '**/*.d.ts',
        '**/__test__/*',
        '*.config.{js,ts}',
        'mocks/*',
        'pages/_app.tsx',
        'public/*',
        'types/*',
      ],
      statements: 80,
      branches: 80,
      // FIXME: 関数の数が十分に増えたタイミングで80にする
      functions: 70,
      lines: 90,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
