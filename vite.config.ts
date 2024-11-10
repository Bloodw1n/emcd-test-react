import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@styles': path.resolve(__dirname, './src/shared/styles'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
  },
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  define: {
    __USER_API_URL__: JSON.stringify('https://randomuser.me/api'),
  },
});
