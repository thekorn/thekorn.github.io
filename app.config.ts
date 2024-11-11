import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
  },
  ssr: true,
  server: {
    baseURL: process.env.BASE_PATH,
    preset: "static",
  },
});
