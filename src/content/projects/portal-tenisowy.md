---
title: Portal tenisowy
summary: Portal klubu tenisowego — Django na backendzie, Astro na froncie, wdrożony w Dockerze na VPS.
stack: [Django, Astro, Docker]
role: [full-stack, devops]
url: https://portal.raketon.pl
screenshot: portal-tenisowy
screenshotAlt: Portal klubu tenisowego — kalendarz i wyniki
tile: wide
featured: true
order: 1
---

## Problem

Klub prowadził rezerwacje i turnieje w arkuszu i przez telefon.

## Rozwiązanie

Django jako panel i API — obsługuje rezerwacje kortów, drabinki turniejowe
i ranking klubowy. Astro po stronie frontu, żeby strony ładowały się
błyskawicznie tam, gdzie nie trzeba pełnej interaktywności. Całość stoi
w Dockerze na własnym VPS-ie, z automatycznymi backupami bazy i wdrożeniem
jednym poleceniem przez GitHub Actions — bez ręcznego wchodzenia na
serwer przy każdej zmianie.

## Efekt

Klub sam dodaje turnieje i wyniki. Utrzymanie po mojej stronie.
