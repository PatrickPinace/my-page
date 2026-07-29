---
title: medykalni
summary: Szkolenia i projekty dla położnych oraz placówek medycznych.
stack: [Astro 5, Tailwind 4]
role: [full-stack]
url: https://medykalni.pages.dev
hosting: Cloudflare Pages
screenshot: medykalni
screenshotAlt: medykalni — strona szkoleń dla położnych i placówek medycznych
tile: normal
order: 5
---

## Problem

Firma szkoleniowa potrzebowała strony, którą sama mogłaby aktualizować —
zmiana ceny czy terminu kursu nie powinna wymagać dotykania kodu.

## Rozwiązanie

Astro 5 i Tailwind 4, w pełni statycznie. Ceny, terminy i moduły kursów
trzymane jako dane w YAML z walidacją schematu, oddzielone od wyglądu.
Flagowy kurs ma sześć modułów w trzech pakietach cenowych, obok osobna
ścieżka dla placówek. Redesign celowo poszedł w ciepłą paletę zamiast
korporacyjnego wyglądu.

## Efekt

Firma sama edytuje ceny i terminy, bez pomocy programisty.
