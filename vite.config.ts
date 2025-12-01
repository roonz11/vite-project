import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from '@nabla/vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  build: {
    rollupOptions: {
      output: {
        // Customize entry point filenames
        entryFileNames: `[name].[hash].js`,
        // Customize chunk filenames (for code-split modules)
        chunkFileNames: `[name].[hash].js`,
        // Customize asset filenames (images, CSS, fonts, etc.)
        assetFileNames: `assets/[name].[hash][extname]`,
      },
    },
  },
});
