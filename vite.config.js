import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* Local dev and preview serve from "/". GitHub Pages serves the site from the
   repository sub-path, so the deploy workflow builds with VITE_BASE=/lakshan-l/.
   See src/lib/base.js for how public-asset URLs pick this up. */
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
