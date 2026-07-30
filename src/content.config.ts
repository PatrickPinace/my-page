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
    screenshotAlt: z.string(),
    /** Klatki galerii (kafelek + karuzela na podstronie), w kolejności wyświetlania.
     *  kind: 'dark' -> jeden plik /screens/{base}.webp, wspólny dla obu motywów strony
     *  (prawdziwy zrzut ciemnego UI aplikacji).
     *  kind: 'light' -> dwa pliki /screens/{base}-nocturne.webp i {base}-ruda.webp,
     *  ten sam jasny zrzut przyciemniony pod aktywny motyw strony (data-theme). */
    shots: z.array(
      z.object({
        base: z.string(),
        kind: z.enum(['dark', 'light']),
      })
    ),
    tile: z.enum(['wide', 'tall', 'normal']),
    featured: z.boolean().default(false),
    inProgress: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects };
