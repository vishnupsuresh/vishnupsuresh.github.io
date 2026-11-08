// Content collection for projects.
// Each Markdown file in src/content/projects/ becomes one project page.
// The schema validates frontmatter at build time, so a typo like a missing
// title fails the build instead of shipping a blank page.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),            // one line, shown on the home page card
    date: z.string().optional(),    // free text ("Fall 2025") since dates are approximate
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    order: z.number().default(99),  // lower = shown first; avoids sorting by fuzzy dates
  }),
});

export const collections = { projects };
