---
title: "Agentic Portfolio"
description: "Panoramica di ingegneria e documentazione tecnica del primo progetto di R&S attivo di Aleph Innovation."
project: "agentic-portfolio"
section: "project-home"
status: "published"
updated: "2026-09-09"
order: 0
---

# Agentic Portfolio

Agentic Portfolio è il primo progetto di R&S attivo di Aleph Innovation.

Studia come analisi deterministica del portafoglio, controlli quantitativi del
rischio, ricerca strutturata, IA probabilistica e supporto decisionale agentico
possano operare all'interno di un unico ciclo di vita progettato.

Il progetto non parte dal presupposto che un LLM sia l'applicazione. L'IA
probabilistica opera invece all'interno di contratti software espliciti,
vincoli di portafoglio, punti di validazione e autorità umana sull'esecuzione.

## Cosa esplora il progetto

Agentic Portfolio unisce diversi ambiti di ingegneria:

- analisi deterministica del portafoglio e delle posizioni;
- analisi di mercato tecnica e quantitativa;
- valutazione del rischio e della concentrazione del portafoglio;
- ricerca basata sulle evidenze;
- scoring strutturato delle opportunità;
- filtri consapevoli del portafoglio;
- simulazione del rischio di portafoglio;
- supporto decisionale al CIO assistito dall'IA;
- pianificazione esplicita dell'esecuzione;
- esecuzione manuale e monitoraggio degli esiti.

## Ciclo di vita canonico

L'attuale ciclo di vita concettuale è:

`SCAN → RESEARCH → OPPORTUNITY SCORING → PORTFOLIO FILTER → INSTRUMENT SELECTION → POSITION SIZING → TRADE PROPOSAL → PORTFOLIO RISK SIMULATION → CIO DECISION → EXECUTION PLAN → MANUAL EXECUTION → OUTCOME`

Ogni fase ha una responsabilità distinta.

I servizi deterministici gestiscono calcolo numerico, stato, vincoli e
validazione ovunque siano possibili regole riproducibili.

L'IA probabilistica contribuisce con interpretazione semantica, sintesi della
ricerca, ragionamento contestuale e valutazioni dei candidati dove la sola
logica deterministica non basta.

## Principi di ingegneria

Il progetto segue alcuni principi fondamentali:

1. **Deterministico dove la certezza è possibile.**
2. **Probabilistico dove l'interpretazione crea valore.**
3. **Contratti tipizzati tra le fasi del ciclo di vita.**
4. **Provenienza e perimetri di evidenza espliciti.**
5. **Blocco in sicurezza (fail-closed) quando le informazioni necessarie mancano o non sono valide.**
6. **L'autorità umana resta fuori dall'esecuzione automatizzata.**
7. **I test comprendono sia la regressione convenzionale sia la validazione semantica.**
8. **Architettura, errori e lezioni apprese vengono documentati man mano che il sistema evolve.**

## Mappa della documentazione

Il Wiki tecnico di Agentic Portfolio è destinato a crescere nelle seguenti aree:

- Panoramica del sistema
- Architettura
- Contratti e tipi di dati
- Implementazione in Python
- Test e validazione
- Storia dello sviluppo

Questa pagina è il punto di ingresso del progetto. Le sezioni di dettaglio
verranno aggiunte progressivamente con l'evoluzione di WEB-1C.

## Repository sorgente

L'implementazione eseguibile fa fede nel repository software di Agentic
Portfolio:

`https://github.com/lupoleo/agentic_portfolio_stage4_0`

Il sito pubblico e il Wiki tecnico sono mantenuti separatamente in:

`https://github.com/lupoleo/aleph-innovation-web`

Il Wiki spiega il sistema di ingegneria; il repository software resta la fonte
di verità per il codice eseguibile.
