import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/first_deployment/',
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'image'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
})