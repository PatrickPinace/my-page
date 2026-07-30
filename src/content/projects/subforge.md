---
title: SubForge
summary: Desktopowa aplikacja do napisów - wyszukuje je w sześciu serwisach, dopasowuje czas i FPS do pliku wideo, sprawdza czytelność.
stack: [Tauri v2, React, Python]
role: [autor całości]
repo: https://github.com/PatrickPinace/SubtitlesDownverter
hosting: aplikacja desktopowa
screenshotAlt: SubForge - formularz i log na żywo
shots:
  - base: subforge-dark
    kind: dark
  - base: subforge-dark-2
    kind: dark
  - base: subforge-dark-3
    kind: dark
  - base: subforge-light
    kind: light
  - base: subforge-light-2
    kind: light
tile: wide
featured: true
inProgress: true
order: 4
---

## Problem

Szukanie napisów po&nbsp;kilku serwisach i&nbsp;ręczne dopasowywanie offsetu&nbsp;i FPS
zajmuje więcej czasu niż&nbsp;samo oglądanie.

## Rozwiązanie

Tauri v2&nbsp;i React na&nbsp;interfejs, cała logika w&nbsp;Pythonie - UI da&nbsp;się
przebudować bez&nbsp;ruszania rdzenia. Dopasowanie po&nbsp;hashu pliku, nie&nbsp;po
zgadywaniu tytułu. Program sam wykrywa rozjazd FPS&nbsp;i liczy korektę; gdy&nbsp;nie
trafi, wystarczy wskazać dwa punkty w&nbsp;podglądzie. Przed zapisem
sprawdza czytelność napisów&nbsp;i w&nbsp;razie potrzeby wydłuża wyświetlanie.

## Efekt

Napisy znalezione&nbsp;i zsynchronizowane w&nbsp;jednym kliknięciu. Rdzeń pokryty
530 testami. Projekt w&nbsp;budowie, ~95% ukończony.
