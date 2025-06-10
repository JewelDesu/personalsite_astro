import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const mdLoader = (collection: string) =>
  glob({ pattern: '**/[^_]*.{md,mdx}', base: `./src/content/${collection}` });

const articlesCollection = defineCollection({
  loader: mdLoader('projects'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const noteCollection = defineCollection({
  loader: mdLoader('notes'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
const fishCollection = defineCollection({
  loader: mdLoader('notes'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
export const collections = {
  articles: articlesCollection,
  notes: noteCollection,
  fish: fishCollection,
};