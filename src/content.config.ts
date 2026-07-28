import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    role: z.array(z.string()),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    /** Wyświetlane w karcie "Hosting" na podstronie, np. "własny VPS",
     *  "GitHub Pages", "aplikacja desktopowa". */
    hosting: z.string(),
    /** Bazowa nazwa screena bez wariantu, np. "medi3".
     *  Warianty żyją w /screens/{screenshot}-dark.webp i -light.webp. */
    screenshot: z.string(),
    screenshotAlt: z.string(),
    /** Dodatkowe zdjęcia do karuzeli na podstronie, poza dark/light.
     *  Pełne ścieżki (z /screens/...), pokazywane po obu wariantach. */
    extraShots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    tile: z.enum(['wide', 'tall', 'normal']),
    featured: z.boolean().default(false),
    inProgress: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects };
