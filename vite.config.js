import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      // Remove @splinetool/react-spline from 'external' if you want to bundle it
      // external: ['@splinetool/react-spline'], 
    },
  },
});
