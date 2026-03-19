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
        article2: 'kumar-bagimliligi-tedavisi.html',
        article3: 'esim-kumar-oynuyor-ne-yapmaliyim.html',
        article4: 'kumar-borcundan-kurtulma-yollari.html',
        test: 'kumar-bagimliligi-testi.html',
        simulator: 'borc-odeme-simulatoru.html',
        privacy: 'privacy-policy.html'
      }
    }
  }
})
