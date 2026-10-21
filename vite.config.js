import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Any request to /api/* is forwarded to the PHP backend.
      // This runs only during `vite dev` — no CORS headers needed in dev.
      '/api': {
        target: 'http://localhost/SevenCore/backend',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
