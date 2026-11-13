import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared flags.
//   draft:       hidden from the production build (still visible in `npm run dev`)
//   featured:    eligible for the homepage
//   placeholder: sample/unverified content — shown with a visible notice and
//                kept out of search engines until replaced with real content
const flags = {
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  placeholder: z.boolean().default(false),
};

const md = (dir: string) => glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${dir}` });

const research = defineCollection({
  loader: md('research'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    status: z.enum(['in-progress', 'completed', 'planned']).default('in-progress'),
    methods: z.array(z.string()).default([]),
    ...flags,
  }),
});

const publications = defineCollection({
  loader: md('publications'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['conference', 'journal', 'thesis', 'presentation', 'poster', 'other']),
    status: z.enum(['published', 'accepted', 'under-review', 'in-preparation', 'to-confirm']),
    doi: z.string().optional(),
    url: z.url().optional(),
    ...flags,
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['in-progress', 'completed', 'planned']).default('in-progress'),
    tools: z.array(z.string()).default([]),
    order: z.number().default(99),
    ...flags,
  }),
});

const history = defineCollection({
  loader: md('history'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      summary: z.string(),
      published: z.coerce.date(),
      updated: z.coerce.date(),
      author: z.string().default('Aung Khant'),
      period: z.string(),
      topics: z.array(z.string()).default([]),
      language: z.string().default('en'),
      sourceBasis: z.enum(['primary', 'secondary', 'primary-and-secondary']),
      // What is contested, uncertain, or interpretive in this article.
      uncertainty: z.string(),
      // Cover image is optional; if present, alt text, source and rights are required.
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string(),
          source: z.string(),
          rights: z.string(),
          // Must be true for AI-generated or reconstructed images.
          reconstruction: z.boolean().default(false),
        })
        .optional(),
      bibliography: z
        .object({
          primary: z.array(z.string()).default([]),
          secondary: z.array(z.string()).default([]),
        })
        .default({ primary: [], secondary: [] }),
      ...flags,
    }),
});

export const collections = { research, publications, projects, history };
