// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alephinnovation.com",
  // English is the default language and keeps the current URLs.
  // Italian pages live under /it/ (for example /it/services/).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // Tell search engines when each page was last rebuilt.
      lastmod: new Date(),
      // Link each English page to its Italian version (hreflang alternates).
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          it: "it",
        },
      },
    }),
  ],
});
