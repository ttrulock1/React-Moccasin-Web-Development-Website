import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Moccasin-Web-Development-Website/',
  plugins: [react()],
  server: {
    historyApiFallback: true, // SPA fallback
  },
  build: {
    outDir: 'dist', // Default is 'dist', but make sure it's consistent
  },
});