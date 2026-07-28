---
title: Portal tenisowy
summary: Portal klubu tenisowego — Django na backendzie, Astro na froncie, wdrożony w Dockerze na VPS.
stack: [Django, Astro, Docker]
role: [full-stack, devops]
url: https://portal.raketon.pl
hosting: własny VPS
screenshot: portal-tenisowy
screenshotAlt: Portal klubu tenisowego — kalendarz i wyniki
tile: wide
featured: true
order: 1
---

## Problem

Klub prowadził rezerwacje i turnieje w arkuszu i przez telefon.

## Rozwiązanie

Django jako panel i API, Astro jako front — nie SSR w Django, tylko osobny
frontend konsumujący REST. System turniejów obsługuje pięć formatów
rozgrywek (drabinka, Round Robin, Americano, system szwajcarski, pojedyncza
i podwójna eliminacja), każdy z własną logiką generowania meczów. Ranking
klubowy liczony jest własnym silnikiem Elo — z karą za nieaktywność,
remisami przy meczach bez zwycięzcy i walkowerem, który nie wpływa na punkty
— pokrytym testami jednostkowymi weryfikującymi dokładność wyliczeń.
Aplikacja działa jak PWA: instalowalna na telefonie, z prawdziwymi
powiadomieniami push (Web Push API, klucze VAPID), nie tylko odznaczeniami
w appce. Całość stoi w Dockerze na własnym VPS-ie, wdrażana przez GitHub
Actions po SSH, z osobnym skryptem rollbacku na wypadek nieudanego wdrożenia.

## Efekt

Klub sam dodaje turnieje i wyniki, ranking liczy się automatycznie po
każdym meczu. Utrzymanie po mojej stronie.
