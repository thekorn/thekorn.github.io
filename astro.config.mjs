// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thekorn.dev',
  integrations: [
    solidJs(),
    sitemap({
      filter: (page) => !URL.parse(page)?.pathname.startsWith('/challenges/'),
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
