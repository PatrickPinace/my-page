---
title: SubForge
summary: Desktopowa aplikacja do napisów — wyszukuje je w sześciu serwisach, dopasowuje czas i FPS do pliku wideo, sprawdza czytelność.
stack: [Tauri v2, React, Python]
role: [autor całości]
repo: https://github.com/PatrickPinace/SubtitlesDownverter
screenshot: subforge
screenshotAlt: SubForge — formularz i log na żywo
tile: wide
featured: true
inProgress: true
order: 4
---

## Problem

Ręczne szukanie napisów po kilku serwisach i ręczne dopasowywanie offsetu
i FPS do pliku wideo zajmuje więcej czasu niż samo oglądanie.

## Rozwiązanie

Aplikacja desktopowa (Tauri v2 + React, rdzeń w Pythonie), która przeszukuje
sześć źródeł po kolei, sama wykrywa FPS z pliku wideo, koryguje offset
i sprawdza czytelność napisów (CPS) przed zapisem.

## Efekt

Konwersja i dopasowanie napisów w jednym kliknięciu. Projekt w budowie,
~95% ukończony.
