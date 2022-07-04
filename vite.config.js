import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import { viteMockServe } from 'vite-plugin-mock';
import {
  createStyleImportPlugin,
  VxeTableResolve
} from 'vite-plugin-style-import';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteCompression({ deleteOriginFile: true }),
    viteMockServe({
      mockPath: './src/mock'
    }),
    createStyleImportPlugin({
      resolves: [VxeTableResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `
      }
    }
  }
});
