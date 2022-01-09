import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      // autoImportComponentCase: 'pascal',
      sassVariables: false
    }),
    eslint({
      cache: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/styles/base/color';

          @use 'src/styles/utils/breakpoint';
        `
      }
    }
  }
});
