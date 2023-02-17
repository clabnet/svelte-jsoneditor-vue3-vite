import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // this line place index.html in the dist folder
    assetsDir: 'assets', // this line place your assets in the dist/assets sub-folder
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: [
      'vue'
    ]
  },
})
