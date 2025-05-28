import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    port: 5173,
    proxy: {
      '/analyze': 'http://localhost:3000',
      '/teaRank': 'http://localhost:3000',
      '/vulnerabilities': 'http://localhost:3000'
    }
  }
});