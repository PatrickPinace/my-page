---
title: medi3
summary: Poradnia okołoporodowa — położne, szkoła rodzenia, wizyty patronażowe. Projekt, wykonanie i wdrożenie.
stack: [Astro, Tailwind]
role: [full-stack]
url: https://medi3.pl
hosting: własny VPS
screenshot: medi3
screenshotAlt: medi3 — strona poradni okołoporodowej
tile: tall
order: 2
---

## Problem

Fundacja prowadziła kilka gabinetów, kilka form płatności i kilka
formularzy zapisów rozrzuconych bez wspólnego miejsca — pacjentka musiała
sama wiedzieć, gdzie czego szukać.

## Rozwiązanie

Astro w pełni statyczny, bez CMS-a — treści (cennik, zespół, adresy)
trzymane jako dane w repo, walidowane schematem, więc aktualizacja usługi
to zmiana pliku, nie grzebanie w komponentach. Strona `/zapisy` działa jak
centralny hub rejestracyjny, kierujący do właściwego formularza zależnie
od usługi. Osobna strona `/dane-do-przelewu` z trzema kontami bankowymi
fundacji i przyciskiem kopiowania numeru jednym kliknięciem.
Zaprojektowana, wykonana i wdrożona od podstaw, z dwoma równoległymi
pipeline'ami CI/CD — jeden na GitHub Pages, drugi rsyncem po SSH na własny
VPS, na który finalnie przeniosła się produkcja.

## Efekt

Jedna strona zamiast rozrzuconych formularzy i numerów kont. Krytyczna
poprawka wydajności po drodze: zdjęcia karuzeli skompresowane z 10–14MB do
60–130KB, co realnie poprawiło czas ładowania na słabszym łączu.
