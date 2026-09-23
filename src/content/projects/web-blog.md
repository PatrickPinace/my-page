---
title: Blog autorski
summary: Blog o projektowaniu i programowaniu z własnym panelem admina - CMS napisany od zera, nie WordPress.
stack: [Flask, SQLAlchemy, PostgreSQL]
role: [full-stack]
repo: https://github.com/PatrickPinace/web-blog
hosting: brak (projekt w budowie)
screenshotAlt: Blog autorski - widok wpisu z podświetlonymi pojęciami
shots:
  - base: web-blog-dark
    kind: dark
  - base: web-blog-dark-2
    kind: dark
  - base: web-blog-dark-3
    kind: dark
  - base: web-blog-dark-4
    kind: dark
  - base: web-blog-dark-5
    kind: dark
  - base: web-blog-light
    kind: light
tile: tall
inProgress: true
inProgressLabel: rozwijany na bieżąco
order: 5
---

## Problem

Gotowe CMS-y niosą ze sobą cudzy kod, cudze decyzje&nbsp;i cudze ograniczenia -
a przy tym nie pokazują, jak myślę o&nbsp;architekturze, kiedy nikt tego
ode mnie nie wymaga.

## Rozwiązanie

Flask&nbsp;i SQLAlchemy zamiast gotowego CMS-a - panel admina, edytor&nbsp;i cała
logika napisane od zera. Treść przechodzi przez sanityzację przed zapisem
i&nbsp;dopiero przy renderze dokładane są wzbogacenia: spis treści, znaczniki
czasu czytania, popover z&nbsp;definicjami pojęć. Każda zmiana treści zostaje
jako wersja do&nbsp;przywrócenia, log zmian pokazuje historię edycji. Panel ma
kosz zamiast trwałego kasowania, harmonogram publikacji&nbsp;i podgląd mobilny
przed wysłaniem wpisu na&nbsp;żywo.

## Efekt

Blog, na&nbsp;którym samo prowadzenie treści jest tak&nbsp;samo dopracowane
jak&nbsp;to, co&nbsp;czyta odwiedzający. Rozwijany na&nbsp;bieżąco, pokryty ponad
370&nbsp;testami.
