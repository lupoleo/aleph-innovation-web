---
title: "Test e validazione"
description: "La validazione dello Stage 4.0: regressione, test dal vivo controllati, evidenze salvate, misurazione con lo Shadow Ledger e accettazione end-to-end finale che produce una TradeOpportunity."
project: "agentic-portfolio"
section: "testing"
status: "published"
updated: "2026-10-02"
order: 50
---

# Test e validazione

Nello Stage 4.0 di Agentic Portfolio i test devono dimostrare sia la **correttezza del software** sia la **correttezza semantica su dati reali**.

La sequenza di validazione è volutamente stratificata:

```text
UNIT / CONTRACT TESTS
        ↓
CHECKPOINT REGRESSION
        ↓
FULL OFFLINE REGRESSION
        ↓
CONTROLLED E2E VALIDATION
        ↓
BOUNDED LIVE VALIDATION
        ↓
PERSISTED LIVE EVIDENCE
        ↓
SHADOW LEDGER MEASUREMENT
        ↓
FINAL COMPLETE E2E ACCEPTANCE
```

L'obiettivo non è fabbricare un'operazione. È dimostrare che la catena di produzione può creare oggetti `TradeOpportunity` validi **quando le evidenze reali soddisfano i controlli accettati**, e poi portare un'opportunità selezionata esplicitamente attraverso l'intero ciclo di vita a valle, senza esecuzione automatica sul broker.

## 1. Filosofia di validazione

Per i componenti deterministici, la correttezza si verifica con output esatti, invarianti e riproducibilità.

Per i componenti rivolti all'IA, un JSON valido non basta. L'output deve soddisfare il contratto semantico: fondatezza sulle evidenze, direzione, completezza, confidenza, citazioni, coerenza del quadro della società e vincoli di policy.

Per l'integrazione dal vivo (LIVE), anche un'esecuzione che produce zero opportunità può essere corretta.

> Testa il contratto che deve valere, non l'esito che vorremmo vedere.

## 2. Test deterministici e di contratto

Il livello deterministico copre parsing, normalizzazione, tassonomia degli strumenti, ammissibilità, associazioni, identità dei titoli, sessioni di borsa, qualità dello storico, liquidità, analisi di portafoglio, regole del Portfolio Filter, selezione dello strumento, dimensionamento, simulazione, persistenza, fingerprint, tracciabilità, immutabilità degli stati terminali, replay e idempotenza.

Questi test sono riproducibili senza dipendere dal comportamento dei fornitori dal vivo.

## 3. Checkpoint e regressione completa

Ogni checkpoint dello Stage 4 ha test di accettazione mirati e deve preservare i contratti congelati che lo circondano.

L'attuale baseline canonica di regressione completa è:

```text
Linux:   1767 tests + 162 subtests
Windows: 1766 passed + 1 POSIX-only skip
```

Il progetto usa la raccolta canonica di `tests/` tramite `pytest.ini`. Il precedente conteggio di 1620 includeva 18 raccolte duplicate.

Un nuovo blocco dello Stage 4 non viene quindi accettato solo perché i suoi test mirati passano.

## 4. Validazione dello Scanner

Lo Scanner di produzione viene testato controllo per controllo:

```text
Provider acquisition
→ Taxonomy
→ Eligibility
→ Mapping
→ Identity verification
→ History quality
→ Liquidity
→ Candidate admission
```

La validazione dimostra, tra gli altri invarianti, che l'identità esatta del titolo sopravvive all'associazione, che i tipi di strumento sconosciuti non diventano silenziosamente ammissibili, che le associazioni ai dati di mercato non verificate non possono fornire uno storico accettato, che le quotazioni recenti richiedono evidenze verificate sulla data di inizio, che si usa un aggiornamento basato sulle sessioni e che i titoli bloccati non possono diventare nuovi candidati.

## 5. Accettazione di Candidate Set e Watch Universe

Il checkpoint chiuso di Candidate Set Assembly ha elaborato **31.808 decisioni di ammissibilità**, ha ammesso due nuovi candidati `STANDARD` (`BIT:A2A` e `XETRA:SAP`), ha mantenuto tutte le **33 posizioni Fineco non nulle** e ha composto **35 elementi READY del Research Watch Universe**.

Il replay accettato in sola cache non ha effettuato alcuna chiamata di rete e ha riprodotto in modo deterministico la composizione salvata.

Questo dimostra che le posizioni attuali restano osservabili indipendentemente dall'ammissibilità come nuove entrate nello Scanner.

## 6. Accettazione dallo Scanner alla ricerca

Il Watch Universe accettato ha generato **37 ipotesi**: ipotesi LONG e SHORT indipendenti per i due nuovi candidati più 33 ipotesi di monitoraggio del portafoglio.

Un pilota in sola cache non ha effettuato chiamate a fornitori o LLM e ha preservato gli stati `CACHE_ONLY_MISS` ripetibili.

Il pilota LIVE controllato ha elaborato tre ipotesi:

- `2BTC.DE` si è completata come `PORTFOLIO_MONITOR`;
- `A2A.MI` LONG si è fermata in sicurezza con `RESEARCH_NOT_COMPLETE`;
- `A2A.MI` SHORT si è fermata in sicurezza con `RESEARCH_NOT_COMPLETE`.

Non ha creato alcun record `TradeOpportunity`. È stato un risultato di integrazione valido, non un test fallito.

## 7. Validazione di ripresa e stati terminali

La possibilità di riprendere un'esecuzione viene testata esplicitamente.

Le ipotesi completate non devono essere recuperate o dedotte di nuovo. Un test di ripresa accettato ha fornito di proposito un nome di modello non valido dopo che il flusso era già terminale; il modello non è mai stato chiamato e i payload terminali salvati e i relativi timestamp sono rimasti invariati.

Lo stato terminale è quindi un confine persistente e immutabile.

## 8. Prova a secco a valle dell'opportunità selezionata

Il checkpoint chiuso della prova a secco sull'opportunità selezionata valida la catena a valle indipendentemente dall'attuale materializzazione LIVE:

```text
TradeOpportunity
→ explicit operator input
→ Portfolio Filter
→ Instrument Selection
→ Position Sizing
→ TradeProposal
→ Portfolio Simulator V2
→ CIO Decision
→ ExecutionPlan
```

Ogni fase registra identità, fingerprint, codici di motivazione e diagnostica. Un blocco deterministico di policy impedisce l'esecuzione delle fasi successive.

L'accettazione richiede:

```text
broker_orders_submitted = 0
portfolio_mutations = 0
automatic_executions = 0
```

## 9. Validazione dell'orchestrazione dello Stage 4.0

Il checkpoint attivo E2E-S4.0A valida il vero livello di orchestrazione dello Stage 4.

Testa manifest immutabili di esecuzione e di fase, fingerprint deterministici, persistenza SQLite, identità della modalità cache, immutabilità degli stati terminali, tracciabilità sicura in caso di riavvio, possibilità di ripresa, ID espliciti di passaggio, stati di attesa dell'operatore e controlli di compatibilità fail-closed.

L'orchestratore governa flusso di controllo, tracciabilità e validazione di sicurezza. Non duplica le decisioni di dominio.

## 10. Due percorsi di accettazione

E2E-S4.0A usa due percorsi complementari.

### Percorso su dati reali correnti

Usa gli input di produzione correnti e può legittimamente restare in attesa, bloccarsi, restare parziale o produrre zero opportunità.

### Percorso deterministico controllato

Attraversa l'intero ciclo di vita usando i servizi di business reali, con fixture controllate solo ai confini con i fornitori esterni.

Entrambi i percorsi devono dimostrare zero ordini al broker, zero modifiche al portafoglio e zero esecuzioni automatiche.

## 11. Rifornimento controllato di candidati LIVE

Lo Stage 4 ha aggiunto un rifornimento controllato dopo che la validazione direzionale reale di A2A e SAP si era fermata in sicurezza per evidenze incomplete.

Quando tutte le ipotesi direzionali correnti sono terminali e non esiste alcuna opportunità selezionabile, il sistema avanza lungo la frontiera canonica dei titoli dello Scanner non ancora tentati.

Il budget LIVE è limitato:

- massimo due titoli per ondata;
- ipotesi LONG e SHORT simmetriche;
- massimo cinque ondate;
- un solo nuovo tentativo per errori transitori;
- evidenze delle ondate salvate in sola aggiunta.

Le esclusioni terminali per qualità dell'investimento fanno avanzare la frontiera. La prima `TradeOpportunity` selezionabile ferma il rifornimento e restituisce il controllo alla selezione esplicita dell'operatore.

Lo scopo è una validazione di produzione più ampia, non ripetere i tentativi finché un'operazione compare per caso.

## 12. I difetti LIVE come evidenze di accettazione

Le esecuzioni LIVE fanno emergere difetti di integrazione che i test basati solo su fixture possono non vedere.

Per esempio, il primo tentativo di rifornimento LIVE si è fermato prima della creazione dell'ondata perché il planner leggeva `resolved_symbol`, mentre l'audit congelato delle associazioni pubblica `yahoo_symbol`.

Il confine dell'adapter è stato corretto senza modificare i contratti congelati dello Scanner.

Lo schema di validazione è:

```text
LIVE defect
→ identify contract boundary
→ correct implementation / adapter
→ preserve frozen semantics
→ focused validation
→ full regression
```

## 13. Revisioni del contratto di ricerca validate LIVE

I test LIVE dello Stage 4 hanno portato a revisioni esplicite e versionate di Research:

```text
AI-8C.2-R1
AI-8C.2-R2
AI-8C.2-R3
```

Queste revisioni hanno affinato il completamento delle evidenze e la distinzione tra fatti mancanti alla data di riferimento e incertezza futura.

Sono state modifiche di contratto governate, con nuove evidenze di accettazione, non ritocchi silenziosi del prompt.

## 14. Revisioni dell'Opportunity Scoring validate LIVE

Anche l'Opportunity Scoring è passato attraverso:

```text
AI-8C.3-R1
AI-8C.3-R2
AI-8C.3-R2.1
AI-8C.3-R2.2
```

Il percorso di scoring accettato è direzionale e supporta LONG e SHORT con la stessa policy di materializzazione.

La R2.2 ha introdotto la valutazione condivisa della società. L'accettazione LIVE ha confermato che le coppie LONG/SHORT usavano la stessa valutazione della società e che i valori direzionali richiesti per il quadro della società erano esattamente speculari.

## 15. Validazione LIVE delle posizioni SHORT

La materializzazione SHORT è stata riattivata per decisione dell'operatore il 30 settembre 2026.

Una `NEW_SHORT` può materializzarsi solo con:

- una Research `COMPLETE`;
- un punteggio direzionale calcolato per SHORT;
- componenti del quadro della società provenienti dalla valutazione condivisa;
- i controlli di materializzazione invariati.

Un interruttore a livello di codice può sospendere di nuovo la materializzazione SHORT.

SHORT è quindi un percorso di policy esplicito e testato, non un'inversione dedotta del LONG.

## 16. Analisi degli errori di elaborazione

La prima esecuzione LIVE dopo la riattivazione dello SHORT ha fatto emergere difetti nell'output del modello, tra cui una componente del quadro della società nulla dopo la riparazione, una confidenza espressa in scala percentuale e una motivazione tecnica mancante con citazioni non valide.

L'implementazione è stata irrobustita per gestire questi casi in modo deterministico **senza modificare alcun punteggio**.

La successiva validazione LIVE del 1° ottobre 2026 ha riportato:

```text
processing failures = 0
wave retries = 0
Research COMPLETE = 4 / 8
```

Tutte le ipotesi complete sono rimaste sotto la soglia di materializzazione.

È una distinzione importante: la robustezza dell'elaborazione è stata migliorata senza manipolare i punteggi di investimento.

## 17. Evidenze attuali sullo scoring LIVE

Alla baseline attuale dello Stage 4, la catena LIVE funziona end-to-end senza errori di elaborazione.

Circa metà delle ipotesi direzionali analizzate raggiunge una Research `COMPLETE` con qualità delle evidenze HIGH e un punteggio completo, sia per LONG sia per SHORT.

I punteggi corretti per la confidenza osservati restano sotto il controllo di materializzazione accettato, nell'intervallo documentato di circa **49–59**.

I controlli restano:

```text
confidence-adjusted score ≥ 60
score confidence ≥ 0.40
```

La catena di produzione non ha quindi ancora creato alcuna `TradeOpportunity` LIVE dello Stage 4.

Questo non è considerato un errore del software.

## 18. Perché la soglia non si cambia solo per ottenere un'opportunità

L'assenza di un'opportunità materializzata pone una questione di policy, non una giustificazione automatica per abbassare la soglia.

Lo Stage 4 non ritocca i controlli 60 / 0,40 solo perché i punteggi LIVE recenti sono rimasti al di sotto.

Prima accumula evidenze empiriche sugli esiti.

È questo il ruolo dello Shadow Ledger.

## 19. Shadow Ledger

E2E-S4.0B ha introdotto lo Shadow Ledger separato e persistente il 1° ottobre 2026.

Ogni ipotesi direzionale con un punteggio corretto per la confidenza viene registrata in:

```text
data/state/shadow_ledger.db
```

Il database è escluso da git e separato dalla persistenza di portafoglio, opportunità ed esecuzioni.

I record possono essere aggiunti automaticamente dopo ogni livello `Live` dell'harness di validazione oppure tramite gli strumenti dello Shadow Ledger.

Il ledger legge i database sorgente in sola lettura e **non ha alcun effetto sulle decisioni di portafoglio correnti**.

## 20. Misurazione persistente degli esiti

Lo Shadow Ledger misura gli esiti direzionali e relativi all'indice dopo:

```text
5 sessions
10 sessions
20 sessions
```

Il riferimento è l'ultima chiusura prima del giorno di valutazione.

I report possono raggruppare i risultati per punteggio corretto per la confidenza.

Questo permette di valutare la policy delle soglie in modo empirico, invece di cambiarla perché un piccolo numero di esecuzioni LIVE non ha superato il controllo.

## 21. Lo Shadow Ledger non ha autorità decisionale

Il ledger non può creare una `TradeOpportunity`, abbassare una soglia, selezionare un'opportunità, alterare i risultati del Portfolio Filter, cambiare il dimensionamento, influenzare la decisione corrente del CIO, creare un ExecutionPlan o modificare il portafoglio.

Qualsiasi futura modifica della soglia resta una decisione di policy esplicita e versionata, che richiede i propri test e le proprie evidenze di accettazione.

## 22. Harness di validazione

L'harness di validazione dello Stage 4 è:

```text
scripts/Invoke-Stage4Validation.ps1
```

e il percorso di CI comprende:

```text
offline-regression
```

La validazione LIVE fa quindi parte di un flusso di validazione ripetibile, non di un esperimento manuale informale.

I suoi risultati salvati alimentano anche lo Shadow Ledger, dove applicabile.

## 23. Evidenze prima del test E2E finale

La sequenza dello Stage 4 colloca volutamente le evidenze LIVE e la misurazione con lo Shadow Ledger prima di qualsiasi decisione sulle soglie basata sulle evidenze e prima di dichiarare l'accettazione E2E finale.

La progressione prevista è:

```text
LIVE Research + Directional Scoring
        ↓
Persist scored hypotheses
        ↓
Shadow Ledger
        ↓
Measure 5 / 10 / 20-session outcomes
        ↓
Analyse score buckets and directional quality
        ↓
Keep policy OR approve a versioned policy revision
        ↓
Legitimate TradeOpportunity materializes
        ↓
Explicit operator selection
        ↓
FINAL COMPLETE E2E TEST
```

Lo Shadow Ledger non è quindi una reportistica accessoria. È il livello di validazione empirica usato prima di decidere se la stessa policy di scoring e materializzazione debba essere rivista.

## 24. Primo obiettivo E2E completo dello Stage 4.0

L'obiettivo di accettazione E2E finale deve dimostrare:

1. uno snapshot Fineco autorevole;
2. un universo di produzione dello Scanner accettato;
3. un Research Watch Universe salvato;
4. ricerca e scoring per più elementi;
5. oggetti `TradeOpportunity` salvati dove le evidenze li supportano;
6. una selezione esplicita dell'operatore;
7. un risultato del Portfolio Filter congelato;
8. una decisione deterministica su strumento e dimensionamento;
9. una `TradeProposal`;
10. una simulazione del portafoglio prima/dopo;
11. una decisione del CIO;
12. un `ExecutionPlan` o un rifiuto esplicito;
13. nessuna modifica sul broker;
14. una catena di audit completa e riproducibile.

Anche un rifiuto finale è un risultato E2E valido, se è corretto, esplicito e riproducibile.

Il traguardo di produzione che manca oggi si colloca prima: la prima ipotesi direzionale LIVE che supera legittimamente il controllo di materializzazione della `TradeOpportunity`.

## 25. Stato attuale della validazione

```text
Quantitative foundation                 CLOSED / FROZEN
Research & evidence contracts           CLOSED / FROZEN · revised & accepted LIVE
Opportunity Scoring contracts           CLOSED / FROZEN · revised & accepted LIVE
Portfolio Filter                        CLOSED / FROZEN
Production Scanner checkpoints          CLOSED
Candidate / Watch Set assembly          CLOSED
Scanner → Research integration          CLOSED
Selected-opportunity dry run            CLOSED
Instrument coverage / risk adapters     CLOSED
Research evidence completion bridge     CLOSED
Validation harness                      IN USE
Shadow Ledger                           IMPLEMENTED · COLLECTING EVIDENCE
First Complete Stage 4.0 E2E Target     IN PROGRESS
```

La catena di produzione è in grado di funzionare dal vivo attraverso Research e Opportunity Scoring, sia per LONG sia per SHORT.

Il prossimo traguardo empirico è accumulare evidenze LIVE salvate sugli esiti e ottenere una `TradeOpportunity` materializzata legittimamente, dopo di che si potrà esercitare l'intera catena E2E dell'opportunità selezionata secondo i contratti accettati.

## Principio di test

Agentic Portfolio considera le evidenze di validazione parte del prodotto.

Il progetto non si chiede soltanto:

> Il codice è stato eseguito?

Si chiede:

> Ogni risultato importante può essere riprodotto, ricondotto alle sue evidenze, valutato rispetto alla policy che lo governava e distinto da un esito che il sistema si limitava a sperare di ottenere?

È questo lo standard richiesto prima di considerare completo lo Stage 4.0.
