import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, * as áth from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
  plugins: [react()],
})
