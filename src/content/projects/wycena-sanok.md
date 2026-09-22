---
title: Wycena Sanok
summary: Redesign strony rzeczoznawcy majątkowego - zachowuje pozycje w Google ze starej wersji, dodaje osobne podstrony pod konkretne usługi.
stack: [Astro, Tailwind]
role: [full-stack]
url: https://patrickpinace.github.io/wycena-sanok/
repo: https://github.com/PatrickPinace/wycena-sanok
hosting: GitHub Pages
screenshotAlt: Wycena Sanok - strona rzeczoznawcy majątkowego
shots:
  - base: wycena-sanok-light
    kind: light
  - base: wycena-sanok-light-2
    kind: light
tile: normal
order: 8
---

## Problem

Stara strona rzeczoznawcy majątkowego miała już wypracowaną pozycję
w&nbsp;Google, ale trzymała to całe SEO na&nbsp;jednym haśle typu "wycena
Sanok". Zwykły redesign ryzykowałby utratę tego dorobku - zmiana adresów
albo zniknięcie starych podstron potrafi wyzerować pozycję z&nbsp;dnia na
dzień.

## Rozwiązanie

Astro, prawie bez&nbsp;JavaScriptu. Każdy stary adres URL ma stałe
przekierowanie na&nbsp;odpowiadające miejsce w&nbsp;nowej witrynie, żeby
zarówno Google, jak i&nbsp;użytkownicy z&nbsp;zapisanym starym linkiem trafiali
tam, gdzie powinni. Osobno doszły podstrony pod konkretne usługi - wycena
mieszkania, domu, działki i&nbsp;lokalu użytkowego - żeby nie&nbsp;opierać
pozycjonowania tylko na&nbsp;jednej frazie. Każda strona ma własny tytuł,
opis, canonical, sitemapę i&nbsp;dane strukturalne; treści rozszerzone o&nbsp;FAQ
i&nbsp;dokładny opis procesu wyceny.

## Efekt

Wyniki Lighthouse 99-100, pełne zachowanie starego SEO equity przy
znacznie lżejszym kodzie i&nbsp;szerszej bazie fraz do&nbsp;dalszego
pozycjonowania.
