---
title: SubForge
summary: Desktopowa aplikacja do napisów - wyszukuje je w sześciu serwisach, dopasowuje czas i FPS do pliku wideo, sprawdza czytelność.
stack: [Tauri v2, React, Python]
role: [autor całości]
repo: https://github.com/PatrickPinace/SubtitlesDownverter
hosting: aplikacja desktopowa
screenshot: subforge
screenshotAlt: SubForge - formularz i log na żywo
tile: wide
featured: true
inProgress: true
order: 4
---

## Problem

Szukanie napisów po kilku serwisach i ręczne dopasowywanie offsetu i FPS
zajmuje więcej czasu niż samo oglądanie.

## Rozwiązanie

Tauri v2 i React na interfejs, cała logika w Pythonie - UI da się
przebudować bez ruszania rdzenia. Dopasowanie po hashu pliku, nie po
zgadywaniu tytułu. Program sam wykrywa rozjazd FPS i liczy korektę; gdy
nie trafi, wystarczy wskazać dwa punkty w podglądzie. Przed zapisem
sprawdza czytelność napisów i w razie potrzeby wydłuża wyświetlanie.

## Efekt

Napisy znalezione i zsynchronizowane w jednym kliknięciu. Rdzeń pokryty
530 testami. Projekt w budowie, ~95% ukończony.
