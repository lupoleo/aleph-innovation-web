---
title: "Panoramica del sistema"
description: "Confini del sistema, ciclo di vita, responsabilità e principi di ingegneria di Agentic Portfolio."
project: "agentic-portfolio"
section: "system-overview"
status: "published"
updated: "2026-09-09"
order: 10
---

# Panoramica del sistema

Agentic Portfolio è un sistema sperimentale di analisi del portafoglio e di supporto alle decisioni, progettato per studiare come software finanziario deterministico e IA probabilistica possano convivere all'interno di un ciclo di vita di ingegneria esplicito e verificabile.

Il sistema **non** tratta un LLM come l'applicazione. Analisi numerica, stato del portafoglio, vincoli, contratti e validazione restano responsabilità esplicite del software. L'IA viene introdotta solo dove interpretazione, sintesi o ragionamento contestuale possono aggiungere valore.

L'obiettivo non è il trading autonomo. Il sistema produce un supporto decisionale strutturato, mentre l'autorità sull'esecuzione resta umana.

## Confine del sistema

Agentic Portfolio copre il processo che va dall'analisi del portafoglio e del mercato fino a un piano di esecuzione pronto per il broker.

All'interno del confine del sistema si trovano:

- acquisizione e normalizzazione del portafoglio;
- analisi quantitativa e tecnica deterministica;
- acquisizione di ricerca ed evidenze;
- scoring delle opportunità;
- filtro delle opportunità in funzione del portafoglio;
- selezione dello strumento e dimensionamento della posizione;
- valutazione del rischio marginale di portafoglio;
- simulazione del portafoglio;
- supporto decisionale al CIO;
- costruzione del piano di esecuzione;
- persistenza, provenienza e monitoraggio degli esiti.

Fuori dal confine di autorità automatizzata c'è l'azione finale sul broker.

Il sistema può costruire un'istruzione di esecuzione, ma non esegue un'operazione in autonomia. L'operatore esamina la decisione ed esegue manualmente la transazione sul broker.

## Ciclo di vita canonico

L'attuale ciclo di vita è:

`SCAN → RESEARCH → OPPORTUNITY SCORING → PORTFOLIO FILTER → INSTRUMENT SELECTION → POSITION SIZING → TRADE PROPOSAL → PORTFOLIO RISK SIMULATION → CIO DECISION → EXECUTION PLAN → MANUAL EXECUTION → OUTCOME`

Questa sequenza è voluta. Ogni fase risponde a una domanda diversa e ha una responsabilità diversa.

### Scan

Individua opportunità di mercato o eventi candidati che meritano un approfondimento.

Un candidato non è ancora una raccomandazione operativa.

### Research

Raccoglie e struttura le evidenze rilevanti per il candidato: contesto di mercato, informazioni sulla società, catalizzatori, aspettative e altri input di ricerca.

Le evidenze di ricerca restano distinguibili dall'interpretazione generata dal modello.

### Opportunity Scoring

Valuta l'opportunità soprattutto sulle sue **caratteristiche di investimento intrinseche**.

Le dimensioni tipiche comprendono qualità della tesi, forza dei catalizzatori, fondamentali, condizioni tecniche e aspettative.

La domanda centrale è:

> Presa da sola, è un'opportunità abbastanza solida?

Una risposta positiva non implica che l'opportunità sia adatta al portafoglio attuale.

### Portfolio Filter

Valuta il candidato rispetto allo **stato attuale del portafoglio**.

Considera direzionalità, esposizione, concentrazione, liquidità e i vincoli di portafoglio applicabili.

La domanda centrale diventa:

> Questa opportunità è desiderabile per questo portafoglio, adesso?

Questa distinzione evita di confondere l'attrattività intrinseca con l'adeguatezza al portafoglio.

### Instrument Selection

Associa l'opportunità sottostante approvata a uno strumento negoziabile concreto, supportato dal broker e dalla strategia.

Le proprietà dello strumento sono input espliciti, non ipotesi nascoste nel livello di IA.

### Position Sizing

Determina una quantità candidata nel rispetto dei vincoli di liquidità del conto, esposizione e rischio.

Il dimensionamento è una responsabilità di controllo deterministica ovunque le regole numeriche possano esprimere il vincolo.

### Trade Proposal

Consolida opportunità, strumento selezionato, direzione, quantità e parametri previsti dell'operazione in una proposta strutturata.

La proposta diventa l'oggetto valutato dalla simulazione di portafoglio e dalla logica decisionale del CIO a valle.

### Portfolio Risk Simulation

Valuta l'esatta operazione proposta rispetto al portafoglio.

La simulazione misura l'effetto marginale dell'aggiunta della posizione proposta, invece di rivalutare solo l'opportunità sottostante.

È il punto in cui il sistema si chiede:

> Cosa succede al portafoglio se si introduce esattamente questa operazione?

### CIO Decision

Combina le evidenze disponibili su opportunità, portafoglio e simulazione in un risultato di supporto decisionale governato.

Il livello CIO non può scavalcare silenziosamente i vincoli deterministici né inventare evidenze mancanti.

### Execution Plan

Trasforma una decisione approvata in un'istruzione manuale pronta per il broker.

Il piano risolve lo strumento selezionato e consolida informazioni come:

- broker;
- sottostante;
- identificativo e descrizione esatti dello strumento;
- mercato e valuta;
- lato;
- quantità;
- tipo di ordine;
- prezzo di ingresso o limite;
- stop;
- obiettivi;
- orizzonte di detenzione previsto;
- riferimenti all'opportunità, alla proposta e alla decisione di origine.

### Manual Execution

L'operatore resta l'autorità finale.

Attualmente Agentic Portfolio non invia ordini al broker in autonomia.

Questo confine è architetturale, non una semplice scelta di interfaccia.

### Outcome

Le decisioni eseguite possono essere associate agli esiti successivi, così che il sistema conservi lo storico di proposte, decisioni, esecuzioni e risultati osservati.

Il monitoraggio degli esiti crea la base per successive valutazioni e apprendimento, senza riscrivere il contesto storico delle decisioni.

## Due livelli di ingegneria

Agentic Portfolio separa deliberatamente due tipi di calcolo.

### Software deterministico

I servizi deterministici si usano dove gli stessi input validi devono produrre risultati riproducibili.

Alcuni esempi:

- acquisizione del portafoglio;
- normalizzazione delle posizioni;
- indicatori numerici;
- calcoli di covarianza e di rischio di portafoglio;
- analisi rispetto al benchmark;
- analisi multifattoriali;
- analisi del rischio di coda;
- vincoli di portafoglio;
- controlli di liquidità;
- calcolo delle esposizioni;
- dimensionamento delle posizioni;
- transizioni di stato tipizzate;
- punti di validazione.

Queste responsabilità restano ispezionabili e verificabili come software convenzionale.

### IA probabilistica

I modelli probabilistici si usano dove l'interpretazione semantica o la sintesi sono utili.

Alcuni esempi:

- interpretare le evidenze di ricerca;
- estrarre fattori semantici;
- valutare il contesto di tesi e catalizzatori;
- confrontare interpretazioni alternative;
- generare valutazioni strutturate a partire dalle evidenze;
- supportare il ragionamento a livello di CIO.

L'output dell'IA è trattato come **evidenza o valutazione probabilistica**, non come verità verificata.

Quando un fattore non è supportato da un input canonico, l'architettura può richiedere che resti senza punteggio invece di incoraggiare il modello a dedurne un valore.

## Fondamenta analitiche dello Stage 2.x

Le fondamenta analitiche deterministiche nascono dal motore di analisi del portafoglio dello Stage 2.x.

Il motore acquisisce i dati del portafoglio e produce un contesto quantitativo che comprende informazioni tecniche e di rischio.

Il livello analitico include funzionalità come:

- normalizzazione dei dati storici di mercato;
- medie mobili;
- RSI;
- volatilità;
- volume medio e volume relativo;
- classificazione del trend;
- valutazione del momentum;
- valutazione del rischio tecnico;
- allineamento delle posizioni;
- analisi di covarianza e rischio di portafoglio;
- analisi rispetto al benchmark;
- analisi multifattoriali;
- analisi del rischio di coda.

Questo livello fornisce il contesto numerico all'architettura CIO di livello superiore.

L'intento è evitare di chiedere a un LLM di ricostruire calcoli che il software deterministico può eseguire in modo più affidabile.

## Il livello CIO dello Stage 3

Lo Stage 3 estende il motore analitico in un'architettura di supporto decisionale guidata dagli eventi.

Le sue responsabilità comprendono:

1. rilevare o ricevere opportunità candidate;
2. raccogliere evidenze di ricerca;
3. produrre valutazioni strutturate delle opportunità;
4. valutare l'adeguatezza al portafoglio;
5. costruire un'esatta proposta di operazione;
6. simularne l'impatto sul portafoglio;
7. supportare una decisione del CIO governata;
8. generare un piano di esecuzione manuale;
9. registrare gli esiti.

L'architettura dello Stage 3 opera quindi su oggetti di dominio espliciti, non su una catena conversazionale non strutturata.

## Contratti tra le fasi

Le fasi del ciclo di vita comunicano attraverso contratti strutturati.

È una scelta di progettazione centrale.

Un servizio a valle non deve dover dedurre cosa un modello a monte "probabilmente intendeva". Campi obbligatori, provenienza, stato e stato di validazione sono rappresentati in modo esplicito.

I contratti definiscono i confini per:

- ammissibilità degli input;
- informazioni obbligatorie e facoltative;
- valori nulli ammessi;
- provenienza;
- vincoli deterministici;
- validazione;
- persistenza;
- responsabilità a valle.

Questo permette di testare il sistema ai confini dei servizi, invece di affidarsi solo al comportamento end-to-end del modello.

## Evidenze e provenienza

La provenienza delle evidenze fa parte dello stato del sistema.

L'architettura distingue tra:

- evidenze recuperate dall'esterno;
- input analitici deterministici canonici;
- contesto di ricerca normalizzato;
- interpretazione generata dal modello;
- stato deterministico del portafoglio;
- risultati di validazione e di decisione.

Questa separazione è importante perché un'affermazione generata dall'IA non deve diventare silenziosamente equivalente a un'evidenza recuperata o a una verità numerica deterministica.

## Blocco in sicurezza (fail-closed)

Quando le informazioni necessarie mancano, non sono valide o non hanno un supporto semantico, il comportamento preferito è fermarsi, declassare il risultato o contrassegnarlo esplicitamente come incompleto.

Il sistema non deve rimediare all'incertezza inventando certezze.

Esempi di progettazione fail-closed:

- rifiutare output del modello strutturalmente incompleti;
- mantenere i valori nulli obbligatori per i fattori non supportati;
- impedire che evidenze mancanti diventino evidenze inventate;
- applicare i vincoli deterministici di portafoglio indipendentemente dalle preferenze dell'IA;
- bloccare l'avanzamento a valle quando un contratto obbligatorio non è valido.

## Filosofia di validazione

Agentic Portfolio usa più di una categoria di test.

### Test software convenzionali

Il codice deterministico e i confini dei servizi sono protetti da test unitari, di integrazione e di regressione.

Questi test validano contratti, trasformazioni, logica numerica e comportamento del ciclo di vita.

### Validazione semantica

I componenti probabilistici richiedono criteri di accettazione aggiuntivi.

Una risposta può essere un JSON sintatticamente valido e comunque semanticamente scadente.

La validazione semantica valuta quindi proprietà come:

- copertura delle evidenze;
- possibilità di assegnare un punteggio;
- completezza dei fattori;
- etichettatura delle evidenze;
- presenza della ricerca;
- calibrazione;
- riproducibilità su esecuzioni ripetute;
- comportamento quando il contesto canonico non supporta un punteggio.

L'obiettivo non è rendere deterministico l'output probabilistico, ma rendere misurabili i suoi confini operativi.

## Esecuzione dell'IA in locale e instradata

L'architettura supporta un'astrazione del provider invece di legare il sistema a un unico fornitore di modelli.

L'inferenza locale è utile per attività ad alto volume o sensibili per la riservatezza, mentre i modelli esterni possono essere usati selettivamente quando le loro capacità giustificano la dipendenza o il costo aggiuntivo.

Il confine del provider è quindi un'astrazione di ingegneria, non un'architettura legata a un modello specifico.

La scelta del modello può evolvere senza cambiare la responsabilità dei calcoli deterministici, dei vincoli di portafoglio o dell'autorità umana sull'esecuzione.

## Autorità umana

L'autorità umana è deliberatamente preservata al confine dell'esecuzione.

Il sistema può:

- analizzare;
- fare ricerca;
- assegnare punteggi;
- filtrare;
- simulare;
- raccomandare;
- costruire un piano di esecuzione.

Attualmente il sistema non ha l'autorità di inviare l'ordine finale al broker.

Questa scelta mantiene esplicita la distinzione tra **supporto decisionale** ed **esecuzione finanziaria autonoma**.

## Invarianti di sistema

Alcuni invarianti riassumono l'architettura:

1. I calcoli deterministici restano deterministici.
2. L'output probabilistico non viene mai promosso silenziosamente a verità verificata.
3. La qualità intrinseca di un'opportunità e l'adeguatezza al portafoglio sono decisioni separate.
4. La simulazione dell'operazione esatta avviene dopo la selezione dello strumento e il dimensionamento.
5. I vincoli di portafoglio non possono essere scavalcati solo perché una valutazione dell'IA è positiva.
6. La provenienza delle evidenze deve restare ispezionabile.
7. Le informazioni obbligatorie mancanti non devono essere inventate.
8. L'autorità sull'esecuzione resta umana.
9. Il contesto storico delle decisioni deve restare riproducibile e verificabile.
10. Architettura e implementazione sono destinate a evolvere, ma i cambiamenti devono restare visibili.

## Maturità attuale

Agentic Portfolio è un sistema di R&S attivo.

La sua architettura viene documentata intenzionalmente mentre l'implementazione procede. Alcune aree del ciclo di vita sono mature e coperte da test di regressione; altre sono ancora in fase di sviluppo.

Per questo motivo il Wiki va letto come un registro di ingegneria versionato, non come l'affermazione che il sistema sia un prodotto di investimento finito.

Il repository eseguibile resta la fonte di verità per il comportamento implementato.
