---
title: "Implementazione"
description: "Come l'architettura dello Stage 4.0 di Agentic Portfolio è implementata con servizi Python deterministici, fasi di IA con perimetro definito, orchestrazione, persistenza ed esecuzione manuale."
project: "agentic-portfolio"
section: "implementation"
status: "published"
updated: "2026-10-02"
order: 40
---

# Implementazione

Lo Stage 4.0 di Agentic Portfolio implementa l'architettura come una sequenza di **servizi con perimetro definito e contratti espliciti**, non come un unico agente autonomo.

L'implementazione separa deliberatamente:

- calcolo finanziario deterministico;
- acquisizione di dati esterni;
- interpretazione probabilistica dell'IA;
- orchestrazione e persistenza;
- selezione controllata dall'operatore;
- esecuzione umana.

Questa pagina descrive il modello di implementazione esposto dall'architettura dello Stage 4.0. Moduli Python, firme delle funzioni e schemi eseguibili esatti restano governati dal repository, dai documenti di checkpoint accettati e dai test.

## 1. Topologia dell'implementazione

L'implementazione end-to-end può essere letta come cinque livelli che cooperano:

```text
DATA & PORTFOLIO STATE
        ↓
SCANNER & WATCH UNIVERSE
        ↓
RESEARCH & OPPORTUNITY INTELLIGENCE
        ↓
PORTFOLIO CONSTRUCTION & CIO
        ↓
EXECUTION PLAN / HUMAN BOUNDARY
```

Attraverso questi livelli, l'orchestrazione governa il flusso di controllo e la tracciabilità, mentre i servizi di dominio mantengono la responsabilità delle proprie decisioni.

L'orchestratore non sostituisce la policy dello Scanner, la policy del Portfolio Filter, la logica di dimensionamento o la semantica del CIO.

## 2. Nucleo Python deterministico

Python governa le parti del sistema che devono restare riproducibili e autorevoli dal punto di vista numerico.

Queste responsabilità comprendono:

- parsing e normalizzazione dei dati del broker;
- tassonomia degli strumenti;
- identità dei titoli e degli strumenti;
- associazione ai dati di mercato;
- calendari di borsa e logica delle sessioni;
- conversione valutaria;
- validazione dello storico dei prezzi;
- indicatori tecnici;
- misure di liquidità;
- analisi di portafoglio;
- esposizione e concentrazione;
- calcoli del rischio marginale;
- controlli del Portfolio Filter;
- selezione dello strumento;
- dimensionamento della posizione;
- simulazione del portafoglio;
- validazione della persistenza;
- controlli di tracciabilità e integrità.

La regola di progettazione è semplice:

> Se un software convenzionale può calcolare, validare o riprodurre un fatto finanziario, l'LLM non deve diventarne la fonte di verità.

## 3. Acquisizione del portafoglio e stato analitico

Il percorso del portafoglio reale parte da uno snapshot Fineco.

L'implementazione trasforma lo stato del conto e delle posizioni visibile al broker in record di portafoglio canonici, quindi esegue la Portfolio Analysis per ricavare lo stato analitico deterministico richiesto a valle.

Concettualmente:

```text
Fineco export / snapshot
        ↓
Parsing & normalization
        ↓
PortfolioSnapshot
        ↓
Portfolio Analysis
        ↓
PortfolioRiskState
        ↓
Portfolio Watch Set
```

Lo snapshot resta immutabile come riferimento dello stato reale per l'esecuzione.

Qualsiasi stato proposto o simulato è rappresentato separatamente.

## 4. Scanner di produzione

Lo Stage 4.0 sostituisce un elenco di candidati dimostrativo con una pipeline di Scanner di produzione.

L'implementazione dello Scanner funziona come una serie di controlli espliciti:

```text
Provider Listing
      ↓
Canonical Taxonomy
      ↓
Instrument Eligibility
      ↓
Market-Data Mapping
      ↓
Identity / Availability Verification
      ↓
History Quality
      ↓
Liquidity
      ↓
Scanner Candidate
```

Ogni controllo emette una diagnostica strutturata.

Superare un controllo non implica superare il successivo. Gli stati non supportati o ambigui bloccano il percorso o diventano stati espliciti di revisione, secondo la policy.

### Adapter dei fornitori

L'acquisizione dai mercati è isolata dietro adapter dei fornitori.

Un fornitore è responsabile di ottenere le informazioni sui titoli e di preservare l'identità della fonte. Il comportamento di acquisizione specifico del fornitore non deve propagarsi nella semantica di portafoglio a valle.

### Tassonomia canonica

Le etichette del fornitore vengono normalizzate in una tassonomia canonica degli strumenti prima delle decisioni di ammissibilità.

I tipi sconosciuti o ambigui non vengono attribuiti per tentativi a una classe supportata.

### Associazione ai dati di mercato

Un titolo di origine può essere associato a un simbolo di un fornitore di dati di mercato, ma quel simbolo resta un'associazione e non l'identità canonica del titolo.

All'associazione segue una validazione prima che lo storico recuperato venga accettato per quel titolo.

## 5. Validazione dello storico basata sulle sessioni

La qualità dello storico viene valutata con la semantica delle sessioni di borsa, non con ipotesi sui giorni di calendario.

L'implementazione distingue almeno:

- `STANDARD`
- `RECENT_LISTING`
- `BLOCKED`

Il percorso `RECENT_LISTING` richiede evidenze verificate sulla data di inizio della quotazione. Uno storico breve, da solo, non basta.

Questo evita che il sistema interpreti uno storico mancante come una giovane età di quotazione legittima senza evidenze.

## 6. Portfolio Watch Set e Research Watch Universe

Le posizioni attuali vengono elaborate separatamente dai nuovi candidati dello Scanner.

L'implementazione crea:

```text
Scanner Candidate Set
          \
           → Research Watch Universe
          /
Portfolio Watch Set
```

L'unione preserva provenienza e identità esatta.

Questo significa che una posizione esistente può restare sotto osservazione anche quando non supererebbe la policy di ammissione come nuovo candidato operativo.

## 7. Acquisizione delle evidenze

La fase di ricerca opera su evidenze strutturate acquisite per ogni elemento del Research Watch Universe.

I canali di evidenza possono comprendere:

```text
MARKET
TECHNICAL
NEWS
FUNDAMENTAL
ANALYST
```

Acquisizione e interpretazione sono responsabilità di implementazione separate.

Gli errori dei fornitori vengono registrati esplicitamente. Una fonte non disponibile non rimuove silenziosamente il soggetto dall'universo di ricerca.

I record di evidenza conservano abbastanza informazioni su fonte e timestamp per l'audit e il replay a valle.

## 8. Servizio di ricerca

Il servizio Research è una delle fasi di IA con perimetro definito.

Il suo compito è interpretare le evidenze fornite e restituire un risultato strutturato e normalizzato secondo un contratto validato.

Lo schema di implementazione è:

```text
Canonical subject context
        +
Validated evidence
        +
Research contract / policy
        ↓
LLM
        ↓
Structured output
        ↓
Deterministic validation
        ↓
Accepted / repaired / partial / failed result
```

Il modello non riceve alcuna autorità sullo stato del portafoglio o sulla finanza deterministica.

### Riparazione e blocco in sicurezza

Un output dell'IA malformato o incompleto non viene accettato silenziosamente.

L'implementazione di Research può usare percorsi di riparazione limitati, dove il contratto lo consente. Se le informazioni richieste non possono essere fondate su evidenze o riparate, il risultato resta parziale o viene bloccato.

Si preserva così la distinzione tra fluidità del modello e validità rispetto al contratto.

## 9. Completezza della ricerca

L'implementazione distingue le informazioni mancanti alla data di riferimento dall'incertezza futura.

`unknowns` contiene fatti che esistevano alla data dell'evidenza ma non erano disponibili nelle evidenze fornite.

`forward_uncertainties` contiene esiti futuri che non è ancora possibile conoscere.

La logica di completezza valuta quindi le evidenze mancanti senza trattare ogni incertezza futura come un fallimento della ricerca.

## 10. Valutazione condivisa della società

Lo Stage 4.0 implementa FUNDAMENTAL ed EXPECTATIONS come una valutazione condivisa del quadro della società.

Per ogni titolo la valutazione della società viene prodotta una sola volta e può essere riutilizzata da entrambe le ipotesi direzionali.

Concettualmente:

```text
Fundamental evidence
        +
Analyst / expectations evidence
        ↓
Shared Company Assessment
        ├──→ LONG scoring
        └──→ SHORT scoring
```

La valutazione in sé è senza direzione.

Dove il modello di scoring richiede una trasformazione direzionale, la trasformazione è deterministica.

Si evita così che chiamate LLM indipendenti per LONG e SHORT generino descrizioni incompatibili degli stessi fondamentali della società.

## 11. Scoring direzionale delle opportunità

L'Opportunity Scoring è esplicitamente direzionale.

Per ogni ipotesi ammissibile:

```text
Research
+ Technical context
+ Shared Company Assessment
+ Direction: LONG or SHORT
        ↓
Opportunity Scoring
        ↓
Raw score
+ score confidence
+ confidence-adjusted score
+ diagnostics
```

L'implementazione preserva la direzione nell'identità del punteggio salvato.

Un punteggio LONG non può diventare silenziosamente un'opportunità SHORT, e viceversa.

## 12. Materializzazione

Scoring e creazione delle opportunità sono operazioni separate.

Un'ipotesi direzionale con punteggio deve soddisfare la policy di materializzazione attiva prima che venga salvata una `TradeOpportunity`.

Quindi:

```text
Scored hypothesis
      ↓
Materialization gate
      ├── PASS → TradeOpportunity
      └── NO PASS → explicit non-materialization
```

Zero opportunità materializzate è un esito valido di un'esecuzione.

Il sistema non deve abbassare le soglie solo per forzare l'esistenza di un'opportunità.

## 13. Shadow Ledger

Lo Shadow Ledger funziona accanto al percorso di materializzazione delle opportunità.

Un'ipotesi direzionale con un punteggio corretto per la confidenza può essere registrata anche se non diventa una `TradeOpportunity`.

L'implementazione misura poi gli esiti dopo orizzonti di osservazione definiti.

```text
Directional score
      ↓
Shadow Ledger
      ↓
5 / 10 / 20 session observations
      ↓
Outcome evidence
```

Il ledger non ha alcuna autorità decisionale.

Esiste per accumulare evidenze empiriche prima di modificare le soglie di scoring o la relativa policy.

## 14. Salvare prima di selezionare

Lo Stage 4.0 salva le opportunità prima della selezione dell'operatore.

Questo crea un confine di implementazione importante:

```text
Opportunity Scoring
      ↓
0..N persisted TradeOpportunity
      ↓
Operator Selection
      ↓
ONE selected opportunity
```

L'orchestratore non può considerare implicitamente selezionata l'opportunità con il punteggio più alto.

La selezione è un evento separato e verificabile.

## 15. Integrazione del Portfolio Filter congelato

L'opportunità selezionata viene passata al Portfolio Filter già validato.

L'orchestratore dello Stage 4 integra il filtro invece di reimplementarne la policy.

Il filtro governa le decisioni legate al portafoglio che riguardano esposizione, concentrazione, correlazione, diversificazione, compatibilità di liquidità e storico, rischio marginale e motivazioni esplicite di rifiuto.

Un esito negativo del filtro deterministico non può essere scavalcato dal ragionamento dell'IA a valle.

## 16. Selezione dello strumento

Solo dopo che l'opportunità ha superato il Portfolio Filter l'implementazione individua l'esatto strumento negoziabile.

Questa separazione è importante perché un'opportunità economica e la sua implementazione sul broker sono oggetti diversi.

L'Instrument Selection deve preservare:

- l'opportunità che si sta implementando;
- l'identità dello strumento scelto;
- il percorso di implementazione;
- i vincoli rilevanti;
- la compatibilità con dimensionamento e simulazione a valle.

## 17. Dimensionamento della posizione

Il Position Sizing resta deterministico.

Il motore di dimensionamento usa l'opportunità selezionata, lo strumento esatto, lo stato reale del portafoglio e i vincoli applicabili.

Restituisce una quantità proposta invece di modificare il portafoglio.

L'LLM può spiegare il risultato, ma l'aritmetica non è di sua competenza.

## 18. Costruzione della TradeProposal

Il sistema costruisce quindi l'esatta `TradeProposal`.

La proposta combina:

```text
Selected TradeOpportunity
+ Portfolio Filter result
+ Instrument
+ Position Size
+ Reference price
+ Costs / constraints
        ↓
TradeProposal
```

La proposta viene salvata come azione proposta.

Non è né un ordine eseguito né una posizione reale.

## 19. Portfolio Simulator V2

Portfolio Simulator V2 applica l'esatta proposta a una copia dello snapshot autorevole del portafoglio.

Semantica di implementazione:

```text
REAL snapshot
      │
      ├────────────── remains unchanged
      │
      + TradeProposal
      ↓
SIMULATED post-trade state
      ↓
Pre / Post comparison
```

Il simulatore valuta l'effetto marginale dell'operazione proposta sul portafoglio.

Questo permette alla fase CIO di ragionare sull'operazione esatta invece che sull'opportunità presa isolatamente.

## 20. CIO Decision Engine

La fase CIO è un componente di ragionamento con perimetro definito.

La sua implementazione riceve input canonici e validati, tra cui la proposta, la simulazione, le evidenze di ricerca, i vincoli deterministici e i rischi non risolti.

Il modello può ragionare su qualità della tesi, catalizzatori, controtesi e compromessi qualitativi.

Non può:

- scavalcare controlli deterministici falliti;
- inventare dati mancanti;
- modificare la dimensione della posizione;
- modificare il portafoglio reale;
- dedurre un'esecuzione sul broker.

Il risultato strutturato del CIO viene validato prima di poter proseguire.

## 21. ExecutionPlan

Un risultato del CIO approvato può essere trasformato in un `ExecutionPlan`.

Il piano contiene le informazioni necessarie per l'esecuzione manuale sul broker, ma l'implementazione si ferma prima dell'invio dell'ordine.

```text
APPROVED CIO Decision
        ↓
ExecutionPlan
        ↓
END OF SOFTWARE AUTHORITY
```

Nel modello di autorità dello Stage 4.0 non esiste alcuna API per inviare ordini al broker.

## 22. Esecuzione manuale e riconciliazione

L'operatore può eseguire, modificare o ignorare il piano.

Il sistema non deduce il risultato dalla propria proposta.

Un successivo snapshot Fineco fornisce il nuovo stato reale autorevole.

La riconciliazione può quindi distinguere tra:

- eseguito come previsto;
- eseguito parzialmente;
- eseguito in modo diverso;
- non eseguito;
- non risolto.

Sono gli esiti osservati, non le esecuzioni presunte, a costituire la base per reportistica e apprendimento successivi.

## 23. Orchestrazione

Lo Stage 4.0 introduce un livello di orchestrazione che collega i componenti di dominio congelati e validati.

L'orchestratore governa:

- la sequenza delle fasi;
- i passaggi espliciti di input e output;
- l'identità dell'esecuzione;
- i checkpoint di persistenza;
- la tracciabilità;
- la propagazione degli errori;
- il coordinamento di ripresa e replay;
- i confini della selezione dell'operatore;
- il rispetto dei confini di autorità.

L'orchestratore **non** governa:

- la policy di ammissibilità dello Scanner;
- la policy del Portfolio Filter;
- la finanza del dimensionamento delle posizioni;
- la matematica della simulazione di portafoglio;
- la policy semantica del CIO.

Queste restano responsabilità di dominio.

## 24. Modello di persistenza

La persistenza durevole è parte dell'implementazione, non un ripensamento successivo.

Il ciclo di vita può salvare record lungo la catena:

```text
listing
→ evidence
→ research
→ score
→ opportunity
→ selection
→ filter
→ instrument
→ size
→ proposal
→ simulation
→ CIO decision
→ execution plan
→ observed outcome
```

I record salvati riportano identificativi stabili e informazioni di versione sufficienti a supportare tracciabilità e replay.

## 25. Replay e idempotenza

Un'esecuzione salvata dello Stage 4 deve essere riproducibile dagli input canonici, senza dipendenze nascoste dalla memoria del processo.

Il replay usa lo stato salvato, le versioni delle policy e gli input immutabili, dove disponibili.

L'implementazione deve distinguere il replay da una nuova esecuzione dal vivo. Un replay non deve, per errore:

- riacquisire evidenze come se fossero evidenze storiche;
- creare opportunità duplicate;
- duplicare le selezioni dell'operatore;
- modificare lo stato reale;
- creare un secondo esito di esecuzione per lo stesso evento osservato.

L'idempotenza fa quindi parte della sicurezza dell'orchestrazione.

## 26. Confini di fornitori e modelli

Fornitori esterni e LLM si trovano dietro interfacce esplicite.

Gli errori specifici di un fornitore devono diventare diagnostica esplicita, non eccezioni incontrollate che si propagano in tutta la pipeline.

Allo stesso modo, la scelta del modello è separata dai contratti di dominio.

Un modello locale o instradato può cambiare mentre il contratto di Research o del CIO resta stabile.

Questo consente la sperimentazione senza che il fornitore del modello diventi l'architettura.

## 27. Esecuzione dell'IA in locale

Lo Stage 4.0 può eseguire le fasi di IA con perimetro definito attraverso il percorso del fornitore di modelli locale.

L'esecuzione locale è utile per:

- riservatezza e controllo;
- sviluppo ripetibile;
- indipendenza dai fornitori;
- contenimento dei costi;
- esperimenti di instradamento tra modelli.

L'esecuzione locale però non allenta la validazione.

Un modello locale è soggetto alle stesse regole di schema, fondatezza, completezza e blocco in sicurezza di qualsiasi fornitore esterno.

## 28. Semantica degli errori nell'implementazione

Gli errori sono rappresentati come stati tipizzati ovunque l'architettura richieda che la policy a valle ne tenga conto.

Esempi:

```text
Provider unavailable
→ degraded acquisition state

Unknown instrument type
→ REVIEW_REQUIRED / fail closed

Unverified market-data identity
→ history rejected

Insufficient history
→ BLOCKED

Research output invalid
→ repair / partial / failed

No materialization
→ valid zero-opportunity result

Portfolio Filter rejection
→ downstream construction stops

Simulation failure
→ no CIO approval path

Execution not observed
→ no inferred portfolio mutation
```

L'implementazione preferisce una verità parziale ed esplicita a una completezza inventata.

## 29. I test come parte dell'implementazione

Il modello di implementazione presuppone una validazione su più livelli:

- test unitari per le funzioni deterministiche;
- test di contratti e schemi;
- test di fornitori e parser;
- test di regressione;
- validazione semantica per le fasi rivolte all'IA;
- validazione del percorso dal vivo;
- test di orchestrazione end-to-end;
- test di replay e persistenza.

Per i componenti probabilistici, un parsing JSON riuscito non basta. Anche il contenuto deve soddisfare il contratto semantico.

## 30. Autorità sull'implementazione

La Wiki tecnica spiega pubblicamente l'architettura e il modello di implementazione.

Non è la specifica eseguibile.

In caso di discrepanza, l'autorità sull'implementazione resta a:

1. l'attuale architettura dello Stage 4.0 e i documenti di checkpoint accettati;
2. i contratti congelati e le definizioni delle policy;
3. il codice Python eseguibile;
4. le evidenze di accettazione automatiche e dal vivo.

La Wiki deve evolvere insieme a questi artefatti, ma non deve inventare silenziosamente dettagli di implementazione che il repository non supporta.

## Direzione attuale dell'implementazione

Lo Stage 4.0 è una fase di integrazione.

Le principali capacità di analisi, Scanner, Research, scoring e Portfolio Filter vengono collegate nel vero ciclo di vita end-to-end, preservando i confini che hanno reso testabili i singoli componenti.

L'obiettivo di ingegneria non è la massima autonomia.

È un'**autonomia controllata, con stato, evidenze, policy, tracciabilità e autorità umana espliciti**.
