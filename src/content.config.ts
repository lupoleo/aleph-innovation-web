import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const wiki = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/wiki",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    project: z.string(),
    section: z.string(),
    status: z.enum(["draft", "published", "archived"]),
    updated: z.coerce.date(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { wiki };
