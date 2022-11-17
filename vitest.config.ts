/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage:{
      all: true,
      exclude: ['.next/*', '**/*.d.ts', '*.config.{js,ts}', '**/__test__/*'],
      statements: 80,
      branches: 80,
      functions: 100,
      lines: 80,
    }
  },
});
