import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Custom domain (voltara.myoctogone.com) serves from root, so base stays '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
