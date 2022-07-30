import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    hmr: {
      host: 'localhost'
    }
  },
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/ts/main.tsx'],
      refresh: true,
      ssr: 'resources/ts/ssr.tsx'
    }),
    react()
  ],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./resources/ts/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./resources/ts/pages', import.meta.url)),
      '@': fileURLToPath(new URL('./resources/ts', import.meta.url))
    }
  },
  ssr: {
    noExternal: ['@inertiajs/server']
  }
})
