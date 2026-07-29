---
title: medi3
summary: Poradnia okołoporodowa - położne, szkoła rodzenia, wizyty patronażowe. Projekt, wykonanie i wdrożenie.
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

Kilka gabinetów, kilka form płatności&nbsp;i kilka formularzy zapisów rozrzuconych
bez&nbsp;wspólnego miejsca - pacjentka musiała sama wiedzieć, gdzie czego szukać.

## Rozwiązanie

Astro, w&nbsp;pełni statycznie, bez&nbsp;CMS-a. Cennik, zespół&nbsp;i adresy trzymane jako
dane w&nbsp;repo, więc aktualizacja to&nbsp;zmiana pliku, nie&nbsp;grzebanie w&nbsp;kodzie.
Jedna strona zapisów kieruje do&nbsp;właściwego formularza, osobna zbiera numery
kont z&nbsp;kopiowaniem jednym kliknięciem. Projekt, wykonanie&nbsp;i wdrożenie na&nbsp;VPS.

## Efekt

Jedno miejsce zamiast rozrzuconych formularzy&nbsp;i numerów kont. Po&nbsp;drodze
zdjęcia z&nbsp;10–14 MB zeszły do&nbsp;60–130 KB - realna różnica na&nbsp;słabszym łączu.
