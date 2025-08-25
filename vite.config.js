import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // <-- correct for Vercel root
  plugins: [react()],
})
