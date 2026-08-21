import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* The site is published as a GitHub user site, so it is served from the root of
   lakshanlavan.github.io and needs no sub-path base. VITE_BASE stays available
   as an override in case the site is ever hosted under a sub-path again. */
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
