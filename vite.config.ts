import { resolve } from 'path'; // Import 'resolve' from 'path'
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Alias for 'src' directory
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude 'lucide-react' from dependency pre-bundling
  },
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
});
