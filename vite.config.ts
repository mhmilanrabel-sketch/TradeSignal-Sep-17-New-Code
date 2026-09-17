import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
    proxy: {
      '/binance-api': {
        target: 'https://demo.binance.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-api/, ''),
        secure: false,
      }
    }
  }
});
