import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{
          hack:`true; @import (reference) "${fileURLToPath(new URL('./src/assets/css/root.less', import.meta.url))}";`
        },
        javascriptEnabled:true
      }
    }
  }
})
