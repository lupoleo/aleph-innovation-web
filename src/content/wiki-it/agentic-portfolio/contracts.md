---
title: "Contratti e tipi di dati"
description: "I contratti espliciti e versionati dello Stage 4.0 di Agentic Portfolio: identità, stato del portafoglio, evidenze, ricerca, scoring direzionale, selezione dell'operatore, simulazione, decisione ed esecuzione."
project: "agentic-portfolio"
section: "contracts"
status: "published"
updated: "2026-10-02"
order: 30
---

# Contratti e tipi di dati

Lo Stage 4.0 di Agentic Portfolio è tenuto insieme da **contratti espliciti e versionati**, non da passaggi impliciti tra moduli.

I contratti definiscono cosa può consumare e produrre ogni fase del ciclo di vita, a quale identità si riferisce, quale versione di policy ha governato il risultato e come il risultato può essere ricondotto alle sue evidenze e allo stato del portafoglio.

Questa pagina descrive il modello pubblico dei contratti a livello architetturale. I tipi Python eseguibili, i documenti di checkpoint accettati e i test restano l'autorità per l'implementazione.

## Perché i contratti contano

Agentic Portfolio unisce finanza deterministica, fornitori di dati esterni, IA probabilistica e decisioni umane.

Senza confini espliciti, un componente a valle potrebbe reinterpretare silenziosamente un risultato a monte, perdere la provenienza, confondere uno stato proposto con uno reale o trattare un'evidenza mancante come una certezza.

Lo Stage 4.0 tratta quindi un contratto come qualcosa di più di una struttura dati. Un record durevole deve conservare abbastanza contesto da rispondere a queste domande:

- **Che** oggetto o decisione è?
- **A quale soggetto** si riferisce?
- **Quale snapshot del portafoglio** era quello corrente?
- **Quali evidenze** lo supportavano?
- **Quali versioni di policy e contratto** lo governavano?
- **Quando** è stato prodotto?
- **Quale record a monte** lo ha originato?
- **Il risultato può essere riprodotto o verificato?**

## 1. Domini di identità

Lo Stage 4.0 separa deliberatamente diversi tipi di identità.

| Dominio di identità | Rappresentazione canonica | Scopo |
| --- | --- | --- |
| Titolo del fornitore | `(exchange, provider_symbol)` | Identità esatta di acquisizione e di mercato |
| Riferimento del titolo | ISIN quando disponibile | Dati di riferimento e analisi delle quotazioni multiple |
| Strumento per i dati di mercato | Simbolo specifico del fornitore, attualmente Yahoo | Recupero di prezzi e storico |
| Fattore di rischio economico | Sottostante canonico o fattore associato | Aggregazione delle esposizioni e rischio di portafoglio |

Queste identità sono collegate, ma non intercambiabili.

Un simbolo Yahoo non sostituisce mai l'identità del titolo di origine. Due mercati che condividono un ISIN non sono automaticamente equivalenti per valuta, liquidità, calendario di negoziazione o comportamento dei dati di mercato. Un fattore di rischio comune può consentire di aggregare l'esposizione, mentre la posizione originale e i record del titolo restano separati.

L'identità esatta del titolo di origine viene quindi preservata lungo tutto il flusso.

## 2. PortfolioSnapshot

`PortfolioSnapshot` rappresenta il portafoglio autorevole, visibile al broker, in un momento specifico.

Concettualmente collega:

```text
PortfolioSnapshot
├── snapshot_id
├── as_of
├── account state
├── cash state
├── positions[]
├── source / provenance
└── integrity identity
```

Fineco resta la fonte autorevole per le posizioni reali e lo stato del conto.

Un `PortfolioSnapshot` non viene modificato da un'operazione proposta. La simulazione crea uno stato separato.

Ne deriva l'invariante:

`REAL ≠ SIMULATED ≠ PROPOSED`

## 3. PortfolioRiskState

`PortfolioRiskState` è l'interpretazione analitica deterministica di uno snapshot del portafoglio.

Può contenere il contesto quantitativo a livello di portafoglio, come esposizione, concentrazione, misure tecniche e di rischio e lo stato canonico richiesto dai controlli di portafoglio a valle.

La relazione contrattuale importante è:

`PortfolioSnapshot → PortfolioRiskState`

Lo stato analitico deve restare legato allo snapshot da cui è stato calcolato.

## 4. Record di titoli e ammissibilità dello Scanner

Lo Scanner parte da un titolo esatto del fornitore e vi aggiunge progressivamente decisioni esplicite.

La catena architetturale è:

```text
Provider Listing
    ↓
Canonical Taxonomy Decision
    ↓
Eligibility Decision
    ↓
Market-Data Mapping
    ↓
Identity / Availability Verification
    ↓
History-Quality Result
    ↓
Candidate Admission
```

Ogni fase conserva la propria diagnostica invece di ridurre l'intero Scanner a un unico valore booleano.

### Stati di ammissibilità

Un titolo riceve un risultato di ammissibilità esplicito, come:

- `ELIGIBLE`
- `INELIGIBLE`
- `REVIEW_REQUIRED`

### Percorsi dello storico

La valutazione dello storico produce un percorso esplicito, come:

- `STANDARD`
- `RECENT_LISTING`
- `BLOCKED`

Una quotazione recente non viene dedotta solo perché lo storico disponibile è breve. Il suo percorso distinto richiede evidenze verificate sulla data di inizio della quotazione.

## 5. Scanner Candidate Set

Lo **Scanner Candidate Set** contiene i titoli ammissibili alla ricerca di nuove opportunità.

Un candidato conserva le decisioni che hanno portato alla sua ammissione, tra cui identità del titolo, campi del fornitore, tassonomia, ammissibilità, associazione ai dati di mercato, verifica, percorso dello storico, risultato di liquidità, versioni delle policy, timestamp delle fonti e diagnostica di degrado e revisione.

Questo rende l'ammissione dei candidati riproducibile e verificabile.

## 6. Portfolio Watch Set

Il **Portfolio Watch Set** rappresenta le posizioni reali attuali che richiedono monitoraggio o ricerca.

È volutamente diverso dallo Scanner Candidate Set.

Una posizione esistente resta nel Watch Set anche quando:

- la sua classe di strumento non è ammissibile per una nuova ammissione nello Scanner;
- il suo mercato non è supportato per i nuovi candidati;
- richiede un resolver dei dati di mercato specifico per il portafoglio;
- l'azione appropriata è monitorare, ridurre, uscire o coprire invece di una nuova entrata.

Il contratto impedisce così che la policy per le nuove entrate renda invisibile un'esposizione esistente.

## 7. Research Watch Universe

Il Research Watch Universe è l'unione verificabile:

`Scanner Candidate Set ∪ Portfolio Watch Set`

Ogni elemento conserva la provenienza, che indica se è:

- `NEW_CANDIDATE`
- `CURRENT_POSITION`
- entrambi

L'unione preserva anche la distinzione tra uguaglianza esatta del titolo, equivalenza del titolo, identità condivisa dei dati di mercato e fattore di rischio economico condiviso.

Il Research Watch Universe è il confine di input canonico verso la fase di ricerca.

## 8. Record di evidenza

La fase di ricerca consuma evidenze strutturate, non testo non tracciabile.

Un record di evidenza conserva concettualmente:

```text
Evidence
├── evidence_id
├── subject identity
├── source identity / URL when applicable
├── provider
├── evidence kind
├── event / publication time
├── retrieval time
├── content or normalized facts
├── quality / relevance
├── semantic tags
└── degradation diagnostics
```

Lo Stage 4.0 può esporre tipi di evidenza come:

`MARKET · TECHNICAL · NEWS · FUNDAMENTAL · ANALYST`

Evidenze e interpretazione dell'IA restano oggetti separati.

Un'evidenza mancante è rappresentata come mancante o degradata; non viene mai sintetizzata in un fatto con fonte.

## 9. Research

Research trasforma le evidenze validate in un'interpretazione analitica normalizzata.

Concettualmente:

```text
Research
├── research_id
├── subject
├── evidence references[]
├── research status
├── thesis / interpretation
├── unknowns[]
├── forward_uncertainties[]
├── context gaps[]
├── research confidence
├── contract version
├── prompt / policy version
└── model metadata
```

Lo schema eseguibile esatto è governato dal contratto AI-8C.2 accettato.

### Unknowns e forward uncertainties

Lo Stage 4 distingue:

`unknowns`

da:

`forward_uncertainties`

Un unknown è un fatto esistente alla data di riferimento ma non disponibile nelle evidenze fornite.

Una forward uncertainty è un esito futuro che le evidenze attuali non possono stabilire.

La distinzione è importante a livello di contratto, perché un evento futuro non conoscibile non deve rendere automaticamente incompleta una ricerca altrimenti completa.

## 10. Valutazione condivisa della società

Lo Stage 4.0 introduce una **valutazione della società condivisa e senza direzione** per le componenti relative al quadro della società.

È costruita dalle evidenze fondamentali e degli analisti ed è condivisa tra le ipotesi LONG e SHORT dello stesso titolo.

Concettualmente:

```text
CompanyAssessment
├── listing identity
├── source evidence IDs
├── fundamental assessment
├── expectations assessment
├── policy version
└── content-addressed identity / cache key
```

Questo contratto evita che i percorsi LONG e SHORT producano in modo indipendente descrizioni contraddittorie degli stessi fondamentali della società.

La trasformazione direzionale viene applicata più avanti dalla policy di scoring, dove necessario.

## 11. Punteggio direzionale dell'opportunità

L'Opportunity Scoring valuta una specifica ipotesi direzionale.

La direzione dell'ipotesi è esplicita:

`LONG | SHORT`

Il punteggio resta legato alla propria direzione e alla ricerca, agli input tecnici e alla valutazione condivisa della società da cui è stato calcolato.

Concettualmente:

```text
OpportunityScore
├── score_id
├── subject identity
├── direction
├── research reference
├── company-assessment reference
├── canonical technical input
├── component scores
├── raw score
├── score confidence
├── confidence-adjusted score
├── diagnostics
├── scoring policy version
└── model / prompt metadata
```

Un punteggio calcolato per una direzione non può materializzare silenziosamente un'opportunità per la direzione opposta.

## 12. Esito dell'ipotesi con punteggio

Un'ipotesi direzionale ha un esito esplicito anche quando non viene creata alcuna opportunità.

Alcuni esempi: scoring riuscito, ricerca incompleta, evidenze non disponibili, errore di elaborazione o rifiuto da parte della policy di materializzazione.

La distinzione è importante:

`Ipotesi con punteggio ≠ TradeOpportunity`

Un'esecuzione con zero opportunità è un esito valido del sistema.

## 13. TradeOpportunity

`TradeOpportunity` è la rappresentazione salvata e indipendente dal broker di un'ipotesi di investimento direzionale che ha superato i controlli di materializzazione.

È:

- LONG o SHORT;
- legata a un soggetto esatto e a un'identità dei dati di mercato;
- legata allo snapshot del portafoglio pertinente;
- supportata da evidenze strutturate;
- esplicita su confidenza e incertezza;
- esplicita su orizzonte e condizioni di invalidazione;
- riproducibile dagli input salvati e dalle versioni delle policy;
- salvata prima della selezione a valle.

**Non** sceglie lo strumento finale sul broker, la dimensione della posizione o l'allocazione di portafoglio.

## 14. Record dello Shadow Ledger

Lo Shadow Ledger riceve le ipotesi direzionali con punteggio indipendentemente dalla materializzazione di una `TradeOpportunity`.

I suoi record supportano la misurazione degli esiti, come il rendimento direzionale e relativo all'indice dopo orizzonti di osservazione definiti.

Concettualmente:

```text
ShadowHypothesis
├── source hypothesis / score
├── direction
├── reference observation
├── score bucket
├── 5-session outcome
├── 10-session outcome
└── 20-session outcome
```

Lo Shadow Ledger è osservativo.

Non ha alcuna autorità su materializzazione delle opportunità correnti, filtro di portafoglio, dimensionamento, decisioni del CIO o esecuzione.

## 15. Selezione dell'operatore

La costruzione a valle richiede un record di selezione esplicito.

La selezione collega:

```text
OperatorSelection
├── selected opportunity ID
├── selection timestamp
├── operator identity when available
├── source scoring run
├── source portfolio snapshot
├── optional operator note
└── disposition of non-selected opportunities
```

Il ciclo di vita a valle accetta esattamente un'opportunità selezionata per ogni esecuzione di valutazione.

Classificare non significa selezionare.

## 16. Risultato del Portfolio Filter

Il Portfolio Filter congelato valuta l'opportunità selezionata nel contesto del portafoglio reale.

Il suo risultato lega l'opportunità e lo snapshot del portafoglio a vincoli e motivazioni espliciti legati al portafoglio.

Il filtro può considerare esposizione, concentrazione, rischio marginale, correlazione e diversificazione, requisiti di liquidità e storico e compatibilità long/short.

Il confine semantico importante è:

`TradeOpportunity → Portfolio Filter Result`

e non:

`punteggio più alto → allocazione automatica`

## 17. Selezione dello strumento

L'Instrument Selection stabilisce come l'opportunità economica selezionata verrebbe effettivamente rappresentata come strumento negoziabile.

Il risultato resta esplicito su identità e implementazione dello strumento.

Lo Stage 4 supporta azioni dirette e rappresentazioni tramite derivati approvati solo attraverso contratti espliciti. I prodotti a leva specifici del broker richiedono la relativa semantica di rischio e di esecuzione.

L'Instrument Selection precede il Position Sizing.

## 18. Dimensionamento della posizione

Il Position Sizing è deterministico.

Usa l'opportunità selezionata, la rappresentazione approvata dello strumento, lo stato del portafoglio e i vincoli di rischio applicabili e produce la dimensione proposta.

L'LLM non calcola la quantità finale.

Questo confine mantiene riproducibili l'aritmetica di portafoglio e i vincoli sul capitale.

## 19. TradeProposal

`TradeProposal` è la rappresentazione strutturata dell'esatta operazione proposta.

Registra informazioni come:

```text
TradeProposal
├── opportunity reference
├── instrument
├── side
├── quantity
├── reference price
├── notional
├── costs
├── rationale
└── constraints
```

La proposta non è ancora una modifica del portafoglio reale.

È l'oggetto esatto valutato da Portfolio Simulator V2.

## 20. Simulazione

Portfolio Simulator V2 applica la `TradeProposal` a una copia dello snapshot autorevole del portafoglio.

La simulazione registra la relazione prima/dopo:

```text
REAL PortfolioSnapshot
        +
TradeProposal
        ↓
SIMULATED Portfolio State
        ↓
Pre-trade / Post-trade Metrics
```

Lo snapshot reale originale resta invariato.

Una simulazione fallita non può produrre un'approvazione del CIO né un piano di esecuzione.

## 21. CIO Decision

La CIO Decision lega il ragionamento qualitativo alle evidenze deterministiche sul portafoglio.

Concettualmente collega:

```text
TradeProposal
+ Simulation
+ Evidence / Research
+ Deterministic constraints
+ Unresolved risks
        ↓
CIO Decision
```

Gli stati della decisione sono governati dal contratto canonico di implementazione e possono comprendere esiti come:

- `APPROVE`
- `REJECT`
- `REVIEW_REQUIRED`
- `BLOCKED`

Il CIO non può scavalcare silenziosamente gli esiti negativi deterministici.

## 22. ExecutionPlan

Una decisione del CIO approvata può produrre un `ExecutionPlan`.

Il piano rappresenta l'ultimo confine di istruzioni controllato dal software.

Non è un ordine al broker.

L'architettura preserva esplicitamente:

`CIO Decision → ExecutionPlan → HUMAN AUTHORITY`

Nessuna fase software può dedurre che il piano sia stato eseguito.

## 23. Esito dell'esecuzione

Dopo l'esecuzione manuale, un successivo snapshot autorevole di Fineco fornisce lo stato reale osservato.

L'esito dell'esecuzione può ricollegare il risultato effettivo visibile al broker al piano.

Il sistema deve preservare la distinzione tra:

- eseguito;
- eseguito parzialmente;
- eseguito in modo diverso dal piano;
- non eseguito;
- non ancora riconciliato.

Apprendimento e reportistica usano gli esiti osservati, non esecuzioni presunte.

## 24. Catena di persistenza canonica

La persistenza dello Stage 4.0 collega i record principali attraverso una tracciabilità esplicita:

```text
PortfolioSnapshot
      │
      ├──→ PortfolioRiskState
      │
Production Listing
      ↓
Scanner Decisions
      ↓
Scanner Candidate Set ─────┐
                           ├──→ Research Watch Universe
Portfolio Watch Set ───────┘
                           ↓
                        Evidence
                           ↓
                        Research
                           ↓
                Shared Company Assessment
                           +
                Directional Opportunity Score
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
       TradeOpportunity           Shadow Ledger
              ↓
       Operator Selection
              ↓
     Portfolio Filter Result
              ↓
      Instrument Selection
              ↓
        Position Sizing
              ↓
         TradeProposal
              ↓
          Simulation
              ↓
        CIO Decision
              ↓
        ExecutionPlan
              ↓
        HUMAN EXECUTION
              ↓
New Authoritative PortfolioSnapshot
              ↓
       Execution Outcome
```

La tracciabilità consente di ricondurre una decisione a valle all'esatto stato del portafoglio, al titolo, alle evidenze, alle policy e ai calcoli che l'hanno prodotta.

## 25. Versionamento e governance

Gli output salvati riportano le versioni di contratto e policy dove necessario.

I contratti congelati non cambiano silenziosamente.

Quando un contratto congelato deve essere riaperto, la governance dello Stage 4 richiede una motivazione esplicita, un'analisi d'impatto, una strategia di migrazione, test aggiornati, evidenze di accettazione e un cambio di versione visibile negli output salvati.

Questo è particolarmente importante per i contratti rivolti all'IA, perché una modifica al prompt o all'interpretazione semantica può alterare il comportamento del sistema anche quando la firma della funzione Python resta invariata.

## 26. Principi di progettazione dei contratti

Il sistema di contratti dello Stage 4 segue poche regole durevoli:

1. **L'identità è esplicita.**
2. **Stato reale e stato proposto non si confondono mai.**
3. **Evidenze e interpretazione sono separate.**
4. **Ciò che è sconosciuto è rappresentato come sconosciuto.**
5. **La direzione delle ipotesi di investimento è esplicita.**
6. **L'output dell'IA è validato rispetto allo schema.**
7. **La finanza deterministica resta deterministica.**
8. **Ogni transizione importante preserva la provenienza.**
9. **Le versioni di policy e contratto viaggiano con gli output salvati.**
10. **Il replay non deve dipendere da una memoria nascosta del processo.**
11. **La selezione umana è un evento salvato.**
12. **Un piano di esecuzione non è un'esecuzione.**

Sono questi contratti a permettere ad Agentic Portfolio di usare il ragionamento probabilistico senza che il sistema nel suo complesso diventi definito in modo probabilistico.
