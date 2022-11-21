/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./mocks/'],
    coverage: {
      all: true,
      exclude: [
        '.next/*',
        '**/*.d.ts',
        '**/__test__/*',
        '*.config.{js,ts}',
        'mocks/*',
        'pages/_app.tsx',
        'public/',
      ],
      statements: 80,
      branches: 80,
      functions: 100,
      lines: 80,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
