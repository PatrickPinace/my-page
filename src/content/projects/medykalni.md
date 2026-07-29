---
title: medykalni
summary: Szkolenia i projekty dla położnych oraz placówek medycznych.
stack: [Astro 5, Tailwind 4]
role: [full-stack]
url: https://medykalni.pages.dev
hosting: Cloudflare Pages
screenshot: medykalni
screenshotAlt: medykalni - strona szkoleń dla położnych i placówek medycznych
tile: normal
order: 5
---

## Problem

Firma szkoleniowa potrzebowała strony, którą sama mogłaby aktualizować -
zmiana ceny czy&nbsp;terminu kursu nie&nbsp;powinna wymagać dotykania kodu.

## Rozwiązanie

Astro 5&nbsp;i Tailwind 4, w&nbsp;pełni statycznie. Ceny, terminy&nbsp;i moduły kursów
trzymane jako dane w&nbsp;YAML z&nbsp;walidacją schematu, oddzielone od&nbsp;wyglądu.
Flagowy kurs ma sześć modułów w&nbsp;trzech pakietach cenowych, obok osobna
ścieżka dla&nbsp;placówek. Redesign celowo poszedł w&nbsp;ciepłą paletę zamiast
korporacyjnego wyglądu.

## Efekt

Firma sama edytuje ceny&nbsp;i terminy, bez&nbsp;pomocy programisty.
