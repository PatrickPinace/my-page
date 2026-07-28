/**
 * Ścieżki wewnętrzne muszą uwzględniać `base` z konfiguracji Astro —
 * na GitHub Pages strona stoi w podkatalogu (/my-page/), a na własnej
 * domenie w korzeniu. Bez tego linki i obrazki urywają się na Pages.
 */
const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  // BASE_URL kończy się slashem tylko czasem — normalizujemy oba końce,
  // żeby nie wyszło "//screens" ani "my-pagescreens"
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rest}` || '/';
}
