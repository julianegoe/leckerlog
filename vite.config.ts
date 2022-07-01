import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), svgLoader(), VitePWA({ 
    registerType: 'autoUpdate', 
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'LeckerLog',
      short_name: 'LCKR',
      description: 'Logge leggeres',
      theme_color: '#ffffff',
      icons: [
        {
          src: './assets/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './assets/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './assets/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  })]
})
