// @ts-check
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thekorn.dev',
  integrations: [solidJs(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
