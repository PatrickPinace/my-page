---
title: medi3
summary: Poradnia okołoporodowa - położne, szkoła rodzenia, wizyty patronażowe. Projekt, wykonanie i wdrożenie.
stack: [Astro, Tailwind]
role: [full-stack]
url: https://medi3.pl
hosting: własny VPS
screenshot: medi3
screenshotAlt: medi3 - strona poradni okołoporodowej
tile: tall
order: 2
---

## Problem

Kilka gabinetów, kilka form płatności i kilka formularzy zapisów rozrzuconych
bez wspólnego miejsca - pacjentka musiała sama wiedzieć, gdzie czego szukać.

## Rozwiązanie

Astro, w pełni statycznie, bez CMS-a. Cennik, zespół i adresy trzymane jako
dane w repo, więc aktualizacja to zmiana pliku, nie grzebanie w kodzie.
Jedna strona zapisów kieruje do właściwego formularza, osobna zbiera numery
kont z kopiowaniem jednym kliknięciem. Projekt, wykonanie i wdrożenie na VPS.

## Efekt

Jedno miejsce zamiast rozrzuconych formularzy i numerów kont. Po drodze
zdjęcia z 10–14 MB zeszły do 60–130 KB - realna różnica na słabszym łączu.
