import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  base: "./",
  build: {
    outDir: "../../pnk2u.github.io/docs",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "[name][extname]"
      }
    }
  }
})
