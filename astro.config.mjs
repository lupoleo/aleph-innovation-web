// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alephinnovation.com",
  integrations: [
    mdx(),
    sitemap({
      // Tell search engines when each page was last rebuilt.
      lastmod: new Date(),
    }),
  ],
});