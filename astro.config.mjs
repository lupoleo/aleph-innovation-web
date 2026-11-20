// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alephinnovation.com",
  // English is the default language and keeps the current URLs.
  // Italian pages live under /it/ and Maltese pages under /mt/
  // (for example /it/services/, /mt/services/).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "mt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // The wiki is not translated into Maltese: /mt/wiki/ pages show the
      // English text and declare the English page as canonical.
      filter: (page) => !page.includes("/mt/wiki"),
      // Tell search engines when each page was last rebuilt.
      lastmod: new Date(),
      // Link each English page to its Italian and Maltese versions (hreflang alternates).
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          it: "it",
          mt: "mt",
        },
      },
    }),
  ],
});
