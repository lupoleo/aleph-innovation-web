---
title: "Architettura e punti di validazione"
description: "Come una misura di un sensore diventa un avviso pubblico: quattro controlli e cinque agenti con perimetro definito."
project: "environmental-monitoring"
section: "architecture"
status: "published"
updated: "2026-10-27"
order: 10
---

# Architettura e punti di validazione

Nulla arriva al pubblico senza superare quattro controlli. Il risultato di ogni
controllo viene salvato, così il sistema può pubblicare i propri tassi di falsi
allarmi e di eventi mancati.

| Controllo | Ruolo | Cosa verifica | Tipo |
| --- | --- | --- | --- |
| G1 Dati | Contratti e qualità | Schema, unità di misura, intervalli, calibrazione, deriva | Deterministico |
| G2 Segnale | Riferimenti e soglie | Riferimenti stagionali, limiti di legge UE, test di anomalia | Deterministico e statistico |
| G3 Evidenze | Corroborazione | Ogni affermazione cita due o più registrazioni indipendenti | Agentico, con perimetro definito |
| G4 Decisione | Approvazione umana | Un operatore identificato approva, modifica o respinge | Umano |

## Livello di rilevamento

Boe per le acque costiere, nodi di livello nelle fognature, pluviometri, radar
di livello nelle valli, nodi per la qualità dell'aria e contapersone sulle
spiagge, collegati in LoRaWAN. Indicatori a basso costo come torbidità e
ammonio rilevano in pochi minuti una probabile presenza di liquami; i campioni
analizzati da laboratori accreditati confermano o smentiscono.

## Livello dei dati

PostgreSQL con PostGIS per i luoghi e TimescaleDB per le serie temporali. Ogni
misura conserva il valore grezzo, i flag di qualità e i risultati dei controlli.

## Agenti

Cinque agenti, ciascuno con un contratto ristretto e nessuna autorità di
pubblicazione:

1. **Sentinel** osserva i segnali che hanno superato G2 e apre gli eventi.
2. **Evidence** compone un dossier da sensori, meteo, satellite e registri pubblici.
3. **Planning watch** collega gli eventi a domande di costruzione e permessi.
4. **Bulletin** redige gli avvisi in inglese e in maltese per la revisione umana.
5. **Citizen reports** smista foto e segnalazioni di residenti e visitatori.

## Esempio: una notte di tempesta

Uno scenario illustrativo, non basato su dati reali:

1. Un pluviometro misura più di 25 mm/h e una regola deterministica apre un evento.
2. Il livello all'ingresso della fognatura sale ben oltre il riferimento stagionale (G1, G2).
3. Una boa costiera vicino allo scarico registra un picco di torbidità (G2).
4. L'agente Evidence compone un dossier che cita tre registrazioni indipendenti (G3).
5. Un operatore approva un avviso di balneazione per la baia interessata (G4).
6. I campioni accreditati della mattina seguente confermano o revocano l'avviso.

## Mappa

Una mappa interattiva di Gozo, basata su dati OpenStreetMap e Overture con
immagini Copernicus Sentinel-2, mostra rischi, sensori, misure in tempo reale e
un indicatore giornaliero del rischio di balneazione per ogni spiaggia.

[Apri il prototipo della Mappa dei rischi di Gozo →](/gozo-risk-map/index.html)
