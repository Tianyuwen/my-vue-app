import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',//打包路径
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  server:{
    port:4000,
    open:true,
    proxy:{
      '/api':'http://192.169.1.7'
    },
    cors:true
  }

})
