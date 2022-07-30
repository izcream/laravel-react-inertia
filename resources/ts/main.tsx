import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import Layout from '@components/Layout'

const appName = document.title || ''

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    //@ts-ignore it's not found glob function
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <StrictMode>
        <Layout>
          <App {...props} />
        </Layout>
      </StrictMode>
    )
  }
})
