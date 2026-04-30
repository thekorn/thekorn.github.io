// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeShiki from '@shikijs/rehype';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thekorn.dev',
  integrations: [
    sitemap({
      filter: (page) => !URL.parse(page)?.pathname.startsWith('/challenges/'),
    }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          inline: 'tailing-curly-colon',
          theme: 'one-dark-pro',
        },
      ],
    ],
    shikiConfig: {
      theme: 'gruvbox-dark-hard',
    },
  },
});
