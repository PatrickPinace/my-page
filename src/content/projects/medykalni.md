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

Astro 5 i Tailwind 4, w pełni statyczna. Ceny, terminy i moduły kursu
trzymane jako dane w YAML z walidacją schematu, nie hardkodowane w
komponentach — świadome przejście od wersji, w której treść i wygląd były
zlepione. Flagowy kurs „Prowadzenie ciąży przez położną" ma sześć modułów
(stacjonarne i online) w trzech pakietach cenowych, plus osobna ścieżka
rekrutacyjna dla placówek medycznych. Redesign przeszedł przez etap
projektowy z kilkoma kierunkami wizualnymi rozważanymi przed wdrożeniem,
finalnie ciepła paleta serif + sans zamiast korporacyjnego wyglądu.

## Efekt

Firma sama edytuje ceny i terminy bez pomocy programisty. Strona przeszła
też migrację hostingu — z GitHub Pages na Cloudflare Pages.
