// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thekorn.dev",
  integrations: [solidJs(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
