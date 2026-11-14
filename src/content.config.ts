import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const wikiSchema = z.object({
  title: z.string(),
  description: z.string(),
  project: z.string(),
  section: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  updated: z.coerce.date(),
  order: z.number().int().nonnegative(),
});

// English wiki (default language).
const wiki = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/wiki",
  }),
  schema: wikiSchema,
});

// Italian translation of the wiki, same file names, served under /it/wiki/.
const wikiIt = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/wiki-it",
  }),
  schema: wikiSchema,
});

export const collections = { wiki, wikiIt };
