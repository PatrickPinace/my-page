---
title: Portal tenisowy
summary: Portal klubu tenisowego - Django na backendzie, Astro na froncie, wdrożony w Dockerze na VPS.
stack: [Django, Astro, Docker]
role: [full-stack, devops]
url: https://portal.raketon.pl
hosting: własny VPS
screenshotAlt: Portal klubu tenisowego - kalendarz i wyniki
shots:
  - base: portal-tenisowy-dark
    kind: dark
  - base: portal-tenisowy-dark-2
    kind: dark
  - base: portal-tenisowy-dark-3
    kind: dark
  - base: portal-tenisowy-dark-4
    kind: dark
  - base: portal-tenisowy-light
    kind: light
tile: wide
featured: true
order: 1
---

## Problem

Klub prowadził rezerwacje&nbsp;i turnieje w&nbsp;arkuszu i&nbsp;przez telefon.

## Rozwiązanie

Django jako API, Astro jako osobny front. Pięć formatów turniejowych -&nbsp;od
drabinki po&nbsp;system szwajcarski -&nbsp;i ranking na&nbsp;własnym silniku Elo, pokrytym
testami. Działa jak PWA, z&nbsp;powiadomieniami push na&nbsp;telefon. Docker na&nbsp;VPS,
wdrożenia przez GitHub Actions ze&nbsp;skryptem rollbacku.

## Efekt

Klub sam prowadzi turnieje&nbsp;i wyniki, ranking przelicza się po&nbsp;każdym meczu.
