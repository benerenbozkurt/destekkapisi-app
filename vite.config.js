import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        article1: 'kumar-bagimliligindan-kurtulmanin-5-adimi.html',
        privacy: 'privacy-policy.html'
      }
    }
  }
})
