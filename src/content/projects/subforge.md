---
title: SubForge
summary: Desktopowa aplikacja do napisów — wyszukuje je w sześciu serwisach, dopasowuje czas i FPS do pliku wideo, sprawdza czytelność.
stack: [Tauri v2, React, Python]
role: [autor całości]
repo: https://github.com/PatrickPinace/SubtitlesDownverter
hosting: aplikacja desktopowa
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

Aplikacja desktopowa: Tauri v2 + React jako interfejs, Rust jako cienka
powłoka, cała logika domenowa w Pythonie (FastAPI, ponad 60 tras REST) —
świadomy podział, żeby UI dało się przebudować bez ruszania rdzenia.
Przeszukuje sześć serwisów po kolei, z dwoma niezależnymi hashami pliku
wideo do dopasowania po sekundzie, nie po zgadywaniu tytułu. Wykrywa
rozjazd FPS między napisami a wideo i sam liczy korektę; jeśli automatyka
nie trafi, można zaznaczyć dwa punkty w podglądzie, a program rozwiąże
równanie na przesunięcie i tempo. Serwisy nieodpowiadające (limit,
blokada) wypadają z kolejki tylko na czas bieżącego przebiegu, bez
zapisywania tego na stałe. Napisy przed zapisem sprawdzane są pod kątem
czytelności (znaki na sekundę, jak w Netfliksowym standardzie) i w razie
potrzeby wydłużane.

## Efekt

Konwersja i dopasowanie napisów w jednym kliknięciu, pokryte 530 testami
rdzenia w Pythonie. Projekt w budowie, ~95% ukończony.
