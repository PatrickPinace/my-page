---
title: NOIR Performance
summary: Koncepcyjna strona studia automotive — mocna scena hero, interaktywny konfigurator i case study Porsche 911.
stack: [Astro 5, TypeScript, GSAP]
role: [design, full-stack]
url: https://noir.ronim.com.pl
hosting: własny VPS
screenshotAlt: NOIR Performance — ciemna strona studia automotive z Porsche 911 w sekcji hero
shots:
  - base: noir-performance-dark
    kind: dark
tile: wide
featured: true
inProgress: true
inProgressLabel: w budowie
order: 3
---

## Założenie

Projekt portfolio dla studia automotive, które miało wyglądać bardziej jak
editorial i katalog projektowy niż klasyczna strona warsztatu. Priorytetem był
klimat nocnego studia, rytm typografii i fotografie, które prowadzą całą
opowieść.

## Rozwiązanie

Astro z lekkim JavaScriptem tam, gdzie wnosi wartość: przejście między motywami
NOIR i IVORY, porównanie przed/po, sceny usług oraz mini konfigurator z
preloadem renderów. Osobny case study Porsche 911 ma własną galerię i poprawne
metadane. Strona jest serwowana statycznie przez Nginx za Caddy na własnym VPS.

## Status

Projekt jest publicznie dostępny, ale nadal rozwijany — dopracowuję kolejne
detale interakcji i materiałów portfolio.
