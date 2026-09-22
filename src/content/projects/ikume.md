---
title: IKUME
summary: Strona artysty muzycznego - występy na żywo, wizualizacje audio-reaktywne generowane w czasie rzeczywistym.
stack: [Astro, Three.js, TypeScript]
role: [full-stack, wizualizacje]
repo: https://github.com/PatrickPinace/ikume-page
hosting: brak (projekt w budowie)
screenshotAlt: IKUME - strona główna z animowanym hero
shots:
  - base: ikume-dark
    kind: dark
  - base: ikume-dark-2
    kind: dark
  - base: ikume-dark-3
    kind: dark
  - base: ikume-dark-4
    kind: dark
tile: wide
featured: true
inProgress: true
inProgressLabel: system w budowie
order: 9
---

## Problem

Muzyk improwizujący na&nbsp;żywo z&nbsp;elektroniką potrzebował miejsca, które
pokazuje więcej niż&nbsp;playlistę i&nbsp;termin koncertu - miejsca, które oddaje
charakter występu: dźwięk reagujący z&nbsp;obrazem w&nbsp;czasie rzeczywistym.

## Rozwiązanie

Astro jako szkielet strony, Three.js jako silnik wizualizacji - kilka
niezależnych stylów (od&nbsp;pól przepływu po&nbsp;bryły 3D), które reagują
na&nbsp;analizę sygnału audio na&nbsp;żywo, nie&nbsp;na&nbsp;gotową animację. Galeria nagrań
grupuje materiał po&nbsp;kierunkach projektu (muzyka, technologia, współpraca),
strona działa w&nbsp;dwóch językach.

## Efekt

Strona, która sama jest częścią występu, nie&nbsp;tylko jego zapowiedzią.
System wizualizacji wciąż rozbudowywany o&nbsp;nowe style i&nbsp;bryły.
