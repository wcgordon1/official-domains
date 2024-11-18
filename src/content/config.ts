// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Official Domains'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const reportsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domainName: z.string(),
    domainValue: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    reportType: z.string(),
    status: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'reports': reportsCollection,
};