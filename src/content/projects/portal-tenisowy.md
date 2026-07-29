---
title: Portal tenisowy
summary: Portal klubu tenisowego - Django na backendzie, Astro na froncie, wdrożony w Dockerze na VPS.
stack: [Django, Astro, Docker]
role: [full-stack, devops]
url: https://portal.raketon.pl
hosting: własny VPS
screenshot: portal-tenisowy
screenshotAlt: Portal klubu tenisowego - kalendarz i wyniki
tile: wide
featured: true
order: 1
---

## Problem

Klub prowadził rezerwacje i turnieje w arkuszu i przez telefon.

## Rozwiązanie

Django jako API, Astro jako osobny front. Pięć formatów turniejowych - od
drabinki po system szwajcarski - i ranking na własnym silniku Elo, pokrytym
testami. Działa jak PWA, z powiadomieniami push na telefon. Docker na VPS,
wdrożenia przez GitHub Actions ze skryptem rollbacku.

## Efekt

Klub sam prowadzi turnieje i wyniki, ranking przelicza się po każdym meczu.
