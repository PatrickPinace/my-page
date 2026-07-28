# my-page

Strona-wizytówka Michała Minora. Astro 5 + Tailwind v4, statyczny build,
zero plików JS na wyjściu.

## Lokalnie

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # → dist/
```

## Treść

Projekty siedzą w `src/content/projects/*.md`. Każdy ma frontmatter
(tytuł, opis, stack, rola, link, kafel) i ciało w markdownie renderowane
na podstronie case study. Pole `screenshot` to sama nazwa bazowa, np.
`medi3` — pliki to `public/screens/medi3-dark.webp` i `-light.webp`.

Kafle układają się w siatce 6-kolumnowej: `wide` zajmuje 4 kolumny,
`normal` 3, `tall` 2.

## Motywy

Dwa: **Nocturne** (fiolet, domyślny) i **Ruda** (miedź). Przełącznik jest
w nagłówku, wybór ląduje w `localStorage`. Cała różnica to tokeny CSS
w `src/styles/global.css` — komponenty nie wiedzą, który motyw jest
aktywny, więc trzeci dodaje się przez dopisanie bloku `[data-theme="..."]`.

Screeny projektów przenikają między wersją ciemną a jasną własnym rytmem
(2–4 s na kadr), niezależnie od wybranego motywu. Ruch zatrzymuje się poza
ekranem, pod kursorem i przy `prefers-reduced-motion`.

## Deploy

`.github/workflows/deploy.yml` — push na `main` buduje stronę w CI
i wysyła `dist/` na VPS przez rsync.

Do ustawienia w **Settings → Secrets and variables → Actions**:

| Sekret | Znaczenie | Przykład |
|---|---|---|
| `VPS_HOST` | adres serwera | `123.45.67.89` |
| `VPS_USER` | użytkownik SSH | `deploy` |
| `VPS_PATH` | katalog docelowy | `/var/www/my-page` |
| `VPS_SSH_KEY` | klucz prywatny (cała treść, z nagłówkiem `-----BEGIN...`) | |
| `VPS_PORT` | port SSH — pomiń, jeśli 22 | `2222` |

Zmienna (zakładka **Variables**, nie Secrets):

| Zmienna | Znaczenie |
|---|---|
| `SITE_URL` | pełny adres strony, np. `https://minor.pl` — trafia do sitemapy, tagów kanonicznych i Open Graph |

**Uwaga:** rsync działa z `--delete`, więc `VPS_PATH` musi wskazywać
katalog należący wyłącznie do tej strony. Wszystko, co się w nim znajdzie
poza buildem, zostanie skasowane.

Klucz SSH generuje się tak (bez hasła — CI go nie poda):

```bash
ssh-keygen -t ed25519 -C "github-actions-my-page" -f ~/.ssh/my-page-deploy
ssh-copy-id -i ~/.ssh/my-page-deploy.pub uzytkownik@serwer
```

Do sekretu `VPS_SSH_KEY` wklejasz **klucz prywatny** (`my-page-deploy`,
bez `.pub`).

Serwer WWW ma serwować `VPS_PATH` jako katalog statyczny. Build używa
`trailingSlash: 'never'`, więc `/projekty/medi3` ma trafiać na
`/projekty/medi3/index.html` — w nginx załatwia to `try_files`:

```nginx
location / {
    try_files $uri $uri/index.html $uri/ =404;
}
```
