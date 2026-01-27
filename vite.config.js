import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <-- make asset paths relative so the site works when served from a subpath (e.g. GitHub Pages)
  plugins: [react()],
})
