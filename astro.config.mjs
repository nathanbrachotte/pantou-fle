import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://pantou-fle.fr",
  output: "hybrid",
  adapter: cloudflare(),
  image: {
    domains: ["images.ctfassets.net"],
  },
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
