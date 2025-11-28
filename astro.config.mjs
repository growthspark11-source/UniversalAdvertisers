import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://www.universalad.in',
  base: '/', // this ensures all asset paths include the repo path
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
});