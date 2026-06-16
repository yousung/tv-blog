import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    description: z.string().min(1),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.enum(['food', 'local', 'health', 'life']),
    program: z.string().min(1),
    episode: z.string().optional(),
    broadcastDate: z.coerce.date().optional(),
    region: z.string().optional(),
    placeName: z.string().optional(),
    address: z.string().optional(),
    tags: z.array(z.string()).default([]),
    source: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('lovizu')
  })
});

export const collections = { posts };
