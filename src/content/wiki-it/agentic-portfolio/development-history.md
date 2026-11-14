---
title: "Storia dello sviluppo"
description: "L'evoluzione di Agentic Portfolio dalle fondamenta analitiche deterministiche dello Stage 2.5, attraverso il livello CIO dello Stage 3, fino al flusso agentico end-to-end verificabile dello Stage 4.0."
project: "agentic-portfolio"
section: "development-history"
status: "published"
updated: "2026-10-02"
order: 60
---

# Storia dello sviluppo

Agentic Portfolio non è nato come agente autonomo.

Si è evoluto per gradi da un motore deterministico di analisi del portafoglio a un flusso governato di supporto decisionale, in cui software quantitativo, ragionamento dell'AI basato su evidenze, controlli di portafoglio, persistenza e autorità umana sono collegati da contratti espliciti.

La storia di ingegneria conta perché molte scelte progettuali dello Stage 4.0 sono il risultato di problemi scoperti e risolti nelle fasi precedenti.

```text
STAGE 2.5
Deterministic Portfolio Analysis
        ↓
STAGE 3.0
CIO / Research / Scoring / Portfolio Filter
        ↓
STAGE 4.0
True Agentic Portfolio E2E
        ↓
LIVE VALIDATION + SHADOW LEDGER
        ↓
FIRST COMPLETE E2E ACCEPTANCE
```

## Stage 2.5: fondamenta analitiche deterministiche

Lo Stage 2.5 ha costruito il nucleo quantitativo.

La scelta di progettazione centrale è stata che lo stato del portafoglio e i calcoli finanziari dovessero restare deterministici e riproducibili.

Il sistema acquisisce il portafoglio Fineco, risolve le identità dei dati di mercato, ottiene i dati storici e calcola analisi di portafoglio e delle posizioni come indicatori tecnici, volatilità, volume relativo, momentum, allineamento e misure di rischio.

Il livello di reportistica dello Stage 2.5 si è evoluto in una cartella di lavoro analitica a più fogli, con panoramica del portafoglio, posizioni, covarianza e rischio, benchmark, analisi multifattoriale, rischio di coda e legende bilingui.

Il principio architetturale stabilito qui è rimasto invariato:

> Python governa la finanza deterministica.

Lo Stage 2.5 è ora `CLOSED / FROZEN` e costituisce le fondamenta quantitative di tutte le fasi successive.

## Stage 3.0: dall'analisi al flusso del CIO

Lo Stage 3.0 ha introdotto l'idea di un livello CIO sopra il motore analitico deterministico.

Il progetto è passato da:

```text
Portfolio → Analytics → Report
```

a:

```text
Portfolio
→ Market / Event Intelligence
→ Research
→ Opportunity Scoring
→ Portfolio Controls
→ Proposal
→ Simulation
→ CIO Decision
```

Questa fase ha stabilito diversi elementi architetturali che restano centrali ancora oggi:

- contratti di dominio tipizzati;
- stato persistente;
- snapshot espliciti del portafoglio;
- contratti di Research e di evidenza;
- Opportunity Scoring;
- astrazione del fornitore di modelli;
- esecuzione di modelli in locale;
- Portfolio Filter;
- selezione dello strumento;
- dimensionamento deterministico della posizione;
- TradeProposal;
- simulazione del portafoglio;
- CIO Decision;
- ExecutionPlan;
- autorità di esecuzione manuale.

Lo Stage 3.0 ha quindi creato i principali servizi di dominio poi collegati dallo Stage 4.0.

## AI locale e instradamento dei modelli

L'architettura dello Stage 3 trattava l'LLM come un componente di ragionamento con perimetro definito, non come l'applicazione.

Un confine sul fornitore ha permesso al progetto di sperimentare modelli locali ed esterni senza cambiare i contratti di dominio.

L'esecuzione locale è diventata un percorso di sviluppo importante, in particolare per Research e la validazione semantica.

Ne è derivato un altro principio duraturo:

```text
MODEL PROVIDER ≠ DOMAIN CONTRACT
```

Il modello può cambiare. Il significato di Research, Opportunity Scoring o CIO Decision deve restare governato da contratti espliciti.

## Research e Opportunity Scoring

Il livello di Research si è evoluto in un servizio strutturato di elaborazione delle evidenze.

Invece di chiedere direttamente a un LLM se un titolo vada comprato o venduto, il sistema separa:

```text
Evidence
→ Research
→ Structured interpretation
→ Opportunity Scoring
```

I contratti AI-8C.2 di Research e AI-8C.3 di Opportunity Scoring sono stati progressivamente irrobustiti su fondatezza delle evidenze, validazione degli schemi, riparazione limitata, semantica dei dati mancanti e riproducibilità.

Entrambi sono poi diventati contratti congelati dello Stage 3, riaperti in seguito solo attraverso revisioni esplicite dello Stage 4 quando le evidenze LIVE hanno dimostrato un problema semantico reale.

## Portfolio Filter: da PF-1A a PF-1H

Il Portfolio Filter ha introdotto la distinzione esplicita tra un'opportunità attraente e un'opportunità adatta al portafoglio.

Il suo sviluppo è passato da PF-1A a PF-1H e si è chiuso come sottosistema deterministico congelato.

Il filtro governa i vincoli legati al portafoglio, come esposizione, concentrazione, correlazione e diversificazione, compatibilità di liquidità e rischio marginale.

Con PF-1H, il Portfolio Filter è stato accettato come confine stabile a valle.

Il suo ruolo resta invariato nello Stage 4:

`Qualità dell'opportunità ≠ Adeguatezza al portafoglio`

Lo Stage 4 integra il filtro congelato invece di permettere al livello di orchestrazione o al CIO di reinterpretarlo.

## Verso una vera integrazione end-to-end

Una volta che i principali componenti del CIO esistevano in modo indipendente, il progetto si è trovato davanti a un nuovo problema di ingegneria.

I singoli servizi potevano essere validati, ma il sistema completo richiedeva ancora un percorso di qualità produttiva da un universo di mercato esterno e dal portafoglio reale, attraverso Research e Scoring, fino al ciclo di vita congelato a valle.

È diventato il passaggio dallo Stage 3.0 allo Stage 4.0.

## Stage 4.0: Agentic Portfolio end-to-end

Lo Stage 4.0 è stato adottato come architettura end-to-end corrente il **23 settembre 2026**.

Il suo scopo è collegare i componenti già validati di analisi, Scanner, Research, scoring, Portfolio Filter, dimensionamento, simulazione e CIO in un unico flusso verificabile.

L'architettura dello Stage 4 ha reso espliciti diversi confini:

```text
REAL PORTFOLIO                         PRODUCTION UNIVERSE
      ↓                                       ↓
Portfolio Watch Set                  Scanner Candidate Set
      └───────────────┬───────────────────────┘
                      ↓
             Research Watch Universe
                      ↓
              Research & Scoring
                      ↓
               TradeOpportunity
                      ↓
             OPERATOR SELECTS ONE
                      ↓
        deterministic downstream chain
                      ↓
               ExecutionPlan
                      ↓
              HUMAN AUTHORITY
```

Lo Stage 4.0 quindi non significa semplicemente "più AI". È soprattutto una fase di integrazione, governance, persistenza e validazione.

## Universo di produzione dei titoli quotati

Un filone di lavoro importante dello Stage 4 ha sostituito insiemi di candidati piccoli o ipotizzati con l'acquisizione di un universo di produzione di titoli quotati.

La serie E2E-S2.1 ha stabilito la policy dei fornitori e la gestione dell'universo di borsa.

Un traguardo visibile è stato il fornitore Borsa Italiana per il FTSE MIB, dove il parsing dal vivo e la validazione dei titoli sono passati da zero riferimenti letti, attraverso risultati parziali, a un universo completo di 40 titoli, dopo che il fornitore ha gestito correttamente sia i titoli di Euronext Milan sia quelli di Euronext STAR Milan.

Questo lavoro ha rafforzato la regola secondo cui l'acquisizione specifica di un fornitore va validata prima di applicare la semantica finanziaria a valle.

## E2E-S2.2A: tassonomia degli strumenti

Il livello successivo ha normalizzato le descrizioni degli strumenti specifiche dei fornitori in una tassonomia canonica.

Il sistema ha smesso di considerare sufficienti le etichette dei fornitori per stabilire l'ammissibilità.

Le forme di titolo sconosciute o contraddittorie sono diventate stati espliciti di revisione o di blocco, invece di classificazioni tirate a indovinare.

## E2E-S2.2B: ammissibilità degli strumenti

L'ammissibilità è diventata una decisione di policy esplicita, separata dalla tassonomia.

Si è creato così un confine stabile tra:

```text
Che strumento è?
```

e:

```text
Questo strumento è ammissibile come nuovo candidato?
```

Le posizioni di portafoglio esistenti volutamente non sono state sottoposte alla stessa regola di visibilità, perché un'esposizione esistente deve restare osservabile anche se non sarebbe ammessa come nuova entrata.

## E2E-S2.2C: associazione e verifica dei dati di mercato

Lo Stage 4 ha formalizzato la distinzione tra l'identità del titolo di origine e l'identità del fornitore di dati di mercato.

Un simbolo Yahoo è diventato un'associazione, non l'identità canonica del titolo.

L'associazione deve essere verificata prima che il suo storico possa essere usato per il titolo di origine.

Questo lavoro ha stabilito il modello di identità a più livelli oggi usato in tutto lo Stage 4.

## E2E-S2.2D: qualità dello storico e liquidità

L'accettazione dello storico è diventata basata sulle sessioni e guidata dalla policy.

Il sistema distingue storici maturi `STANDARD`, percorsi `RECENT_LISTING` verificati e casi `BLOCKED`.

Uno storico breve, da solo, non implica una IPO recente.

La liquidità viene valutata solo dopo che le condizioni richieste su identità e storico sono soddisfatte.

## E2E-S2.2E: Candidate Set + Portfolio Watch Set

Questo checkpoint ha creato una delle strutture che caratterizzano lo Stage 4: il Research Watch Universe.

L'audit accettato in sola cache ha elaborato:

```text
31,808 eligibility decisions
2 fresh STANDARD candidates
33 non-flat Fineco positions
35 READY Research Watch Universe members
```

I due nuovi candidati erano `BIT:A2A` e `XETRA:SAP`.

L'unione preserva la provenienza:

```text
Scanner Candidate Set ∪ Portfolio Watch Set
```

Le posizioni esistenti restano quindi visibili anche quando non superano la policy per le nuove entrate.

## E2E-S2.2F: integrazione dallo Scanner alla ricerca

Il checkpoint successivo ha collegato il Research Watch Universe immutabile a Research e Opportunity Scoring.

L'universo accettato ha generato **37 ipotesi**:

- ipotesi LONG e SHORT per i due nuovi candidati;
- 33 ipotesi di monitoraggio del portafoglio.

L'integrazione ha salvato Market Scan, candidati, evidenze, Research, punteggi ed esiti per ogni ipotesi.

Il suo pilota LIVE controllato non ha prodotto alcuna `TradeOpportunity`.

Questo è stato accettato come comportamento corretto, perché le ipotesi LONG e SHORT su A2A si sono fermate in sicurezza con una Research incompleta.

Il checkpoint ha stabilito un'importante regola di ingegneria:

> Zero opportunità è un risultato valido.

## E2E-S2.2G: prova a secco completa dell'opportunità selezionata

Lo Stage 4 ha poi validato il ciclo di vita a valle indipendentemente dall'attuale problema di materializzazione delle opportunità LIVE.

Partendo al massimo da un'opportunità salvata e selezionata esplicitamente, la prova a secco attraversa:

```text
Portfolio Filter
→ Instrument Selection
→ Position Sizing
→ TradeProposal
→ Portfolio Simulator V2
→ CIO Decision
→ ExecutionPlan
```

I parametri di esecuzione forniti dall'operatore sono espliciti, salvati e dotati di fingerprint, non dedotti.

Gli invarianti di sicurezza restano:

```text
broker_orders_submitted = 0
portfolio_mutations = 0
automatic_executions = 0
```

Questo ha dimostrato che la catena a valle può essere esercitata senza concedere al software l'autorità di esecuzione.

## E2E-S2.2H: copertura degli strumenti in portafoglio

Il checkpoint correttivo successivo ha rafforzato il confine analitico del portafoglio reale.

Le evidenze di chiusura hanno coperto tutte le **41 identità di posizione Fineco**, con **37 storici diretti** e **quattro proxy a leva verificati**.

La Portfolio Analysis aggiornata ha preservato l'esposizione lorda contabile di Fineco e ha salvato un nuovo `PortfolioSnapshot` autorevole.

La regressione completa a quel checkpoint ha raggiunto **1.532 test e 162 subtest**.

Questo ha riportato il primo obiettivo E2E completo dello Stage 4 al centro come prossimo grande traguardo.

## E2E-S4.0A: primo obiettivo E2E completo

E2E-S4.0A è il checkpoint attivo di integrazione e accettazione dello Stage 4.

Ha introdotto un livello di orchestrazione in `app/e2e`.

L'orchestratore aggiunge:

- manifest di esecuzione e di fase;
- fingerprint deterministici;
- persistenza SQLite;
- tracciabilità;
- possibilità di ripresa;
- immutabilità degli stati terminali;
- validazione esplicita dei passaggi;
- stati di attesa dell'operatore;
- evidenze di accettazione.

Non duplica le decisioni di dominio.

Portfolio Analysis, Scanner, Research, Portfolio Filter e i servizi a valle esistenti restano autorevoli per i propri contratti.

## Percorso controllato e percorso su dati reali correnti

L'obiettivo E2E dello Stage 4 usa volutamente due percorsi di validazione.

Il **percorso controllato** dimostra che l'intera catena può essere attraversata usando i servizi di business reali, con fixture solo ai confini con i fornitori esterni.

Il **percorso su dati reali correnti** valida il comportamento in produzione e può legittimamente bloccarsi, restare parziale o creare zero opportunità.

Entrambi devono garantire zero ordini al broker, zero modifiche al portafoglio e zero esecuzioni automatiche.

## E2E-S4.0A.1: rifornimento controllato di candidati

Le prime validazioni direzionali reali su A2A e SAP si sono fermate in sicurezza perché le evidenze di Research disponibili erano incomplete.

Invece di abbassare gli standard sulle evidenze, lo Stage 4 ha introdotto un rifornimento controllato di candidati.

Il sistema può avanzare lungo la frontiera canonica dei titoli dello Scanner non ancora tentati quando tutte le ipotesi correnti sono terminali e non esiste alcuna opportunità selezionabile.

Il budget LIVE è limitato:

```text
≤ 2 listings per wave
LONG / SHORT symmetry
≤ 5 waves
1 transient retry
append-only wave evidence
```

La prima opportunità selezionabile ferma il rifornimento e restituisce il controllo all'operatore.

L'obiettivo è una copertura più ampia delle evidenze, non ripetere i tentativi finché compare un'operazione.

## Difetti di integrazione LIVE

Il primo tentativo di rifornimento LIVE ha fatto emergere un difetto dell'adapter: il planner leggeva `resolved_symbol`, mentre l'audit congelato delle associazioni pubblica `yahoo_symbol`.

La correzione è stata fatta al confine dell'adapter, senza modificare i contratti congelati dello Scanner.

È diventato un tratto caratteristico dello sviluppo dello Stage 4:

```text
LIVE evidence
→ locate exact contract boundary
→ fix implementation
→ preserve frozen semantics
→ focused tests
→ full regression
→ new LIVE validation
```

## Research Evidence Completion Bridge

Le evidenze LIVE dello Stage 4 hanno mostrato che Research raggiungeva raramente lo stato `COMPLETE`.

Una delle cause individuate era strutturale: lo Stage 2 calcolava già in modo deterministico la volatilità annualizzata a 20 sessioni, ma il contratto tecnico canonico non la portava fino a Research.

Questo ha portato alla riapertura esplicita di un contratto congelato, invece di un rimedio informale.

Il contratto AI-8C.3-R1 che ne è risultato ha aggiunto la volatilità tecnica canonica senza modificare le soglie di scoring.

Il lavoro LIVE successivo ha mostrato che molti degli "unknowns" rimasti non erano affatto fatti attuali mancanti, ma incertezze future.

Ne sono derivate le revisioni di Research:

```text
AI-8C.2-R1
AI-8C.2-R2
AI-8C.2-R3
```

Le revisioni hanno separato i fatti mancanti alla data di riferimento dalle incertezze future, affinato la semantica di lacune di contesto e confidenza e allineato l'aggiornamento dei fondamentali ai cicli di reporting.

## Opportunity Scoring direzionale

La validazione LIVE ha fatto emergere anche un problema di scoring più profondo: lo scoring non era abbastanza direzionale.

AI-8C.3-R2 ha riaperto il contratto di scoring perché il punteggio misurasse esplicitamente il supporto alla direzione dell'ipotesi.

LONG e SHORT sono diventate identità di scoring a pieno titolo.

Un controllo sulla direzione di tipo fail-closed impedisce che un punteggio calcolato per una direzione materializzi un'opportunità per l'altra.

L'esecuzione LIVE accettata ha prodotto la prima Research `COMPLETE` e la prima ipotesi dello Stage 4 completamente `SCORED`: `BAMI.MI NEW_SHORT`, con punteggio corretto per la confidenza pari a **56,6**, sotto la soglia di materializzazione invariata.

## Scoring del quadro della società

Lo scoring direzionale ha rivelato un altro problema semantico.

FUNDAMENTAL ed EXPECTATIONS descrivono la società prima di descrivere una direzione. Chiamate indipendenti al modello per LONG e SHORT potevano quindi creare valutazioni della società incoerenti.

AI-8C.3-R2.1 ha introdotto per prima un rispecchiamento deterministico delle componenti del quadro della società.

AI-8C.3-R2.2 ha poi stabilito l'architettura più solida usata oggi:

```text
Fundamental + Analyst evidence
        ↓
Shared direction-free Company Assessment
        ├──→ LONG scoring
        └──→ SHORT scoring
```

L'accettazione LIVE ha confermato che le coppie LONG/SHORT condividevano un'unica valutazione della società e che le trasformazioni direzionali richieste erano coerenti.

La materializzazione SHORT è stata riattivata per decisione dell'operatore il **30 settembre 2026**.

## Robustezza LIVE: 1° ottobre 2026

La prima esecuzione LIVE dopo la riattivazione dello SHORT ha fatto emergere diversi difetti nell'output del modello:

- componente del quadro della società nulla dopo la riparazione;
- confidenza espressa in scala percentuale;
- motivazione tecnica mancante con citazioni non valide.

Questi difetti sono stati gestiti in modo deterministico senza modificare il punteggio di investimento.

La successiva validazione LIVE del **1° ottobre 2026** ha raggiunto:

```text
processing failures = 0
wave retries = 0
Research COMPLETE = 4 / 8
```

Sia LONG sia SHORT sono passati attraverso gli stessi controlli accettati.

Le ipotesi complete sono comunque rimaste sotto la soglia di materializzazione.

## E2E-S4.0B: Shadow Ledger

A questo punto la domanda di ingegneria è cambiata.

La catena di produzione funzionava, ma i punteggi corretti per la confidenza osservati erano in genere sotto il controllo:

```text
observed range ≈ 49–59
materialization gate = 60
confidence gate = 0.40
```

Invece di abbassare la soglia per forzare una `TradeOpportunity`, lo Stage 4 ha introdotto lo **Shadow Ledger**.

Ogni ipotesi direzionale con un punteggio corretto per la confidenza viene salvata separatamente in:

```text
data/state/shadow_ledger.db
```

Il ledger misura gli esiti direzionali e relativi all'indice dopo:

```text
5 sessions
10 sessions
20 sessions
```

Non ha alcuna autorità decisionale.

Il suo scopo è accumulare evidenze empiriche prima di prendere in considerazione qualsiasi modifica delle soglie.

## Harness di validazione e baseline di regressione attuale

La validazione LIVE e offline dello Stage 4 è ora organizzata tramite:

```text
scripts/Invoke-Stage4Validation.ps1
```

con il supporto della CI attraverso `offline-regression`.

L'architettura attuale registra la baseline canonica di regressione come:

```text
Linux:   1767 tests + 162 subtests
Windows: 1766 passed + 1 POSIX-only skip
```

Questa baseline comprende le revisioni dei contratti e il lavoro di irrobustimento LIVE completato fino al 1° ottobre 2026.

## Stato attuale: 2 ottobre 2026

L'architettura dello Stage 4 è attiva.

La mappa dei checkpoint è attualmente la seguente:

```text
Stage 2.5 quantitative foundation        CLOSED / FROZEN
AI-8C.2 Research contracts               CLOSED / FROZEN · revised & accepted LIVE
AI-8C.3 Opportunity Scoring              CLOSED / FROZEN · revised & accepted LIVE
PF-1A → PF-1H Portfolio Filter           CLOSED / FROZEN

E2E-S2.1 exchange/provider policy        CLOSED
E2E-S2.2A instrument taxonomy            CLOSED
E2E-S2.2B instrument eligibility         CLOSED
E2E-S2.2C mapping & verification         CLOSED
E2E-S2.2D history & liquidity            CLOSED
E2E-S2.2E Candidate / Watch assembly     CLOSED
E2E-S2.2F Scanner → Research             CLOSED
E2E-S2.2G selected-opportunity dry run   CLOSED
E2E-S2.2H portfolio coverage             CLOSED

E2E-S4.0A.3 evidence completion bridge   CLOSED
Stage 4 validation harness               IN USE
E2E-S4.0B Shadow Ledger                  IMPLEMENTED · COLLECTING EVIDENCE
E2E-S4.0A First Complete E2E Target      IN PROGRESS
```

La catena dal vivo raggiunge ora Research e l'Opportunity Scoring direzionale senza errori di elaborazione.

Nessuna `TradeOpportunity` LIVE dello Stage 4 ha ancora superato il controllo di materializzazione accettato. È lo stato empirico delle evidenze attuali, non un motivo per fabbricare un risultato positivo.

## Il prossimo traguardo

La sequenza di ingegneria immediata è:

```text
LIVE hypotheses
        ↓
Shadow Ledger persistence
        ↓
5 / 10 / 20-session outcome evidence
        ↓
evidence-based policy assessment
        ↓
first legitimate TradeOpportunity
        ↓
explicit operator selection
        ↓
complete Stage 4 E2E acceptance
```

L'obiettivo E2E finale deve dimostrare uno snapshot autorevole del portafoglio, un universo di produzione dello Scanner accettato, un Research Watch Universe salvato, più ipotesi analizzate, opportunità salvate dove supportate, una selezione esplicita dell'operatore, Portfolio Filter, strumento e dimensionamento, TradeProposal, simulazione prima/dopo, CIO Decision, ExecutionPlan o rifiuto esplicito, nessuna modifica sul broker e una catena di audit completa e riproducibile.

Anche un rifiuto finale resta un risultato E2E valido, se è corretto, esplicito e riproducibile.

## Cosa è cambiato da una fase all'altra

L'evoluzione si può riassumere così:

```text
STAGE 2.5
"Il portafoglio può essere misurato in modo deterministico?"

STAGE 3.0
"Il ragionamento dell'AI basato su evidenze può essere integrato con
controlli di portafoglio deterministici?"

STAGE 4.0
"L'intero flusso può funzionare su input reali con contratti espliciti,
persistenza, replay, validazione LIVE e autorità umana?"
```

Il progetto è quindi passato dall'analisi, all'intelligenza con perimetro definito, all'orchestrazione verificabile.

Il principio di ingegneria centrale è rimasto stabile per tutto il percorso:

> Aumentare la capacità agentica senza rendere impliciti stato, evidenze, policy o autorità.
