import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import {VitePluginRadar} from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react(), VitePluginRadar({
    analytics: {
      id: 'G-WTN5QW9FYK',
      config: {
        cookie_domain: 'auto',
        cookie_expires: 63072000,
        cookie_prefix: 'none',
        send_page_view: true,
        allow_google_signals: true
      },
      consentDefaults: {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        wait_for_update: 500
      }
    },
  })],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
