// Italian version of the AI training offers, shown under /it/services/training/.
// Same public copy rule as the English file: never name the tools, platforms
// or models used in the labs. Prices and VAT treatment must match training.ts.

import type { TrainingOffer } from "./training";

const VIRTUAL_ENV =
  "un ambiente virtuale per l'esecuzione dei modelli, messo a disposizione da Aleph Innovation e incluso nel prezzo";

export const trainingOffersIt: TrainingOffer[] = [
  {
    slug: "companies",
    published: true,
    eyebrow: "Formazione IA per le aziende",
    cardTitle: "Aziende e studi professionali",
    cardText:
      "Da una mezza giornata introduttiva per tutto il team a un laboratorio di due giorni in cui il personale tecnico addestra un modello sui dati aziendali.",
    cardPrice: "Da 1.500 € a gruppo",
    title: "IA concreta per il vostro team, in sicurezza e alle vostre condizioni.",
    lead:
      "Formazione pratica sull'IA per i team che vogliono usarla in modo sicuro e produttivo, sui propri dati e sotto il proprio controllo. Ogni sessione si chiude con qualcosa che funziona, non solo con delle slide.",
    why:
      "Da febbraio 2025 l'AI Act europeo impone alle organizzazioni che usano l'IA di garantire al proprio personale un livello sufficiente di alfabetizzazione in materia. Ogni pacchetto copre questo obbligo per i casi d'uso trattati e si conclude con un attestato scritto della formazione svolta.",
    priceIntro:
      "Cinque pacchetti. I prezzi si intendono per un gruppo riservato, in sede presso il cliente, IVA esclusa.",
    priceColumns: ["Pacchetto", "Durata", "Gruppo", "A chi è rivolto", "Prezzo (IVA esclusa)"],
    packages: [
      { name: "Fondamenti di IA", duration: "Mezza giornata (3,5 h)", group: "fino a 15", audience: "Tutto il personale", price: "1.500 €" },
      { name: "IA applicata ai vostri documenti", duration: "1 giorno (7 h)", group: "fino a 15", audience: "Manager, analisti, professionisti", price: "2.600 €" },
      { name: "Stack IA privato", duration: "3 giorni, oppure 6 sessioni da 3 h", group: "fino a 10", audience: "Sviluppatori, personale IT e data", price: "7.500 €" },
      { name: "Laboratorio modelli personalizzati (avanzato)", duration: "2 giorni", group: "fino a 10", audience: "Personale tecnico che ha completato Stack IA privato o equivalente", price: "5.800 €" },
      { name: "Valutazione per l'adozione dell'IA", duration: "Da 1 a 2 settimane", group: "direzione + persone chiave", audience: "Chi prende le decisioni", price: "da 3.500 €" },
    ],
    priceNotes: [
      "Posti singoli: le aziende che iscrivono da 1 a 3 persone possono prenotare posti in un'edizione aperta a calendario, a 250 € a persona al giorno.",
      "Servizi aggiuntivi: partecipante extra 90 € (mezza giornata) o 150 € al giorno; clinic di follow-up di 2 ore entro 60 giorni 400 €; sconto del 15% su qualsiasi workshop prenotato insieme a un assessment.",
    ],
    curriculum: [
      {
        title: "Fondamenti di IA (mezza giornata)",
        modules: [
          "Come funzionano i modelli linguistici, in parole semplici: cosa fanno bene, dove sbagliano, perché inventano.",
          "Prompt che funzionano: istruzioni, esempi, ragionamento passo per passo, verifica della risposta.",
          "Uso sicuro al lavoro: dati riservati, diritto d'autore, quali attività lasciare alle persone.",
          "L'AI Act europeo per i vostri ruoli: obbligo di alfabetizzazione, categorie di rischio, trasparenza.",
        ],
        outcome: "Una bozza di policy di una pagina sull'uso dell'IA in azienda e un attestato firmato di alfabetizzazione IA.",
      },
      {
        title: "IA applicata ai vostri documenti (1 giorno)",
        modules: [
          "I contenuti del corso Fondamenti di IA, in forma condensata.",
          "Classificare ed estrarre informazioni da email, fatture, contratti o report.",
          "Interrogare i propri documenti con risposte che citano la fonte.",
          "Un assistente IA privato, mostrato in funzione su un singolo computer senza che alcun dato esca dall'azienda.",
          "Scegliere da 3 a 5 attività reali e riprogettarle con l'IA.",
        ],
        outcome: "Le attività riprogettate, misurate rispetto ai tempi attuali, e un piano di adozione a 90 giorni.",
      },
      {
        title: "Stack IA privato (3 giorni)",
        modules: [
          "Giorno 1, il modello: come un modello legge il testo, dimensioni e compressione dei modelli, scelta di un modello aperto adatto al vostro hardware e alle vostre esigenze di licenza, esecuzione in locale.",
          "Giorno 1, prompt e ragionamento: i moderni modelli di ragionamento, output strutturati leggibili dal vostro software.",
          "Giorno 2, retrieval: un sistema privato di ricerca e domande e risposte sui documenti aziendali, con qualità misurata su un set di test.",
          "Giorno 2, agenti: un assistente IA che usa strumenti, e connettori standard verso file, database e applicazioni aziendali.",
          `Giorno 3, personalizzazione: adattare un modello agli esempi aziendali in ${VIRTUAL_ENV}, per poi riportarlo in esecuzione in locale.`,
          "Giorno 3, progetto finale: ogni team collega il proprio modello personalizzato, il retrieval e due connettori in un unico assistente funzionante.",
        ],
        outcome: "Un assistente IA privato funzionante sui propri computer, e le competenze per gestirlo senza che i dati escano dall'azienda.",
      },
      {
        title: "Laboratorio modelli personalizzati (2 giorni, avanzato)",
        modules: [
          "Quando conviene personalizzare un modello e quando bastano prompt o retrieval.",
          "Costruire un dataset di addestramento a partire da esempi aziendali, con controlli di qualità.",
          "Fine-tuning supervisionato di un modello aperto su quel dataset.",
          "Preference tuning e reinforcement learning con ricompense verificabili, i metodi alla base degli attuali modelli di ragionamento.",
          "Valutare il risultato: set di test, modello come giudice, revisione umana.",
          "Metterlo in produzione: comprimere il modello ed eseguirlo sull'hardware aziendale.",
        ],
        outcome: "Un modello addestrato sui propri dati, un report di valutazione che lo confronta con il modello di partenza e un processo ripetibile.",
      },
      {
        title: "Valutazione per l'adozione dell'IA (da 1 a 2 settimane)",
        modules: [
          "Interviste e analisi dei processi chiave.",
          "Un report scritto: dove si inserisce l'IA, risparmi attesi, rischi e classificazione secondo l'AI Act per ogni caso d'uso.",
          "Un piano con i costi e il perimetro tecnico per le domande di cofinanziamento maltesi.",
        ],
        outcome: "Un piano pronto per decidere, con costi, rischi e priorità.",
      },
    ],
    terms: [
      { label: "Dove", text: "In sede presso di voi ovunque a Malta e Gozo (trasferta inclusa), oppure live online. Fuori da Malta, trasferta al costo." },
      { label: "Dotazione", text: `I partecipanti portano il proprio portatile (consigliati 16 GB di RAM per i pacchetti tecnici). Le fasi più pesanti dal punto di vista del calcolo si svolgono in ${VIRTUAL_ENV}, quindi non serve hardware particolare.` },
      { label: "Incluso", text: "Una call di preparazione, tutti i materiali, l'accesso all'ambiente virtuale durante il corso, un documento di riepilogo, gli attestati di partecipazione e 30 giorni di supporto via email." },
      { label: "Dati", text: "I vostri dati restano nell'UE e, nei pacchetti private stack, non lasciano mai i vostri computer." },
      { label: "Come prenotare", text: "Una call gratuita di 30 minuti, poi una proposta scritta a prezzo fisso entro 3 giorni lavorativi. Lo spostamento della data è gratuito fino a 10 giorni lavorativi prima." },
      { label: "Fatturazione", text: "Le fatture sono intestate alla partita IVA dell'azienda. Ai clienti maltesi si applica l'IVA maltese; per i clienti business di altri paesi UE il trattamento IVA segue le regole europee (di norma inversione contabile per l'erogazione online)." },
      { label: "Cofinanziamento", text: "Prepariamo il perimetro tecnico per le domande di cofinanziamento maltesi. L'ammissibilità si verifica caso per caso con l'ente finanziatore; l'approvazione non è garantita." },
    ],
    mailSubject: "Formazione IA per aziende",
  },
  {
    slug: "universities",
    published: true,
    eyebrow: "Formazione IA per università e ricerca",
    cardTitle: "Università e ricerca",
    cardText:
      "Lo stesso programma pratico, adattato alla didattica e alla ricerca, a tariffe inferiori del 30% rispetto a quelle aziendali.",
    cardPrice: "Da 1.050 € a gruppo",
    title: "Capire come funziona l'IA moderna costruendola.",
    lead:
      "Lo stesso programma pratico, di livello enterprise, che offriamo alle aziende, adattato alla didattica e alla ricerca e proposto a tariffe inferiori del 30% rispetto a quelle aziendali. Studenti e ricercatori imparano come funziona l'IA moderna costruendola, su un'infrastruttura che controllano.",
    why:
      "Gli studenti escono con un progetto funzionante, pronto per il portfolio. I gruppi di ricerca ottengono un ambiente IA privato in cui i dati sensibili o non ancora pubblicati non lasciano mai i loro computer, il che semplifica le approvazioni in materia di protezione dei dati ed etica.",
    priceIntro:
      "I prezzi accademici sono inferiori del 30% alle tariffe aziendali e valgono per università, college, istituti di ricerca e progetti di ricerca finanziati. I prezzi si intendono per gruppo, IVA esclusa.",
    priceColumns: ["Pacchetto", "Durata", "Gruppo", "A chi è rivolto", "Prezzo accademico (IVA esclusa)"],
    extraColumns: ["Tariffa aziendale"],
    packages: [
      { name: "Alfabetizzazione IA per lo studio e la ricerca", duration: "Mezza giornata (3,5 h)", group: "fino a 30", audience: "Studenti, ricercatori, personale accademico", price: "1.050 €", extra: { a: "1.500 €" } },
      { name: "IA applicata ai dati di ricerca", duration: "1 giorno (7 h)", group: "fino a 20", audience: "Ricercatori e studenti post-laurea di qualsiasi disciplina", price: "1.820 €", extra: { a: "2.600 €" } },
      { name: "Bootcamp Stack IA privato", duration: "3 giorni, oppure 6 sessioni da 3 h nell'arco di un semestre", group: "fino a 16 (con un tutor)", audience: "Studenti di informatica, ingegneria e data science", price: "5.250 €", extra: { a: "7.500 €" } },
      { name: "Laboratorio modelli personalizzati (avanzato)", duration: "2 giorni", group: "fino a 12", audience: "Studenti di laurea magistrale e dottorato, ingegneri della ricerca", price: "4.060 €", extra: { a: "5.800 €" } },
      { name: "Partner per programmi di ricerca", duration: "6 mesi", group: "un gruppo di ricerca", audience: "Gruppi che necessitano di un ambiente IA privato e di supporto continuativo", price: "da 2.450 €", extra: { a: "da 3.500 €" } },
    ],
    priceNotes: [
      "Posti singoli in un'edizione aperta a calendario: 175 € a persona al giorno per il personale di istituzioni accademiche.",
      "Edizioni ripetute: lo stesso pacchetto erogato di nuovo nello stesso anno accademico è scontato del 15%.",
    ],
    curriculum: [
      {
        title: "Alfabetizzazione IA per lo studio e la ricerca (mezza giornata)",
        modules: [
          "Come funzionano i modelli linguistici e perché commettono errori con grande sicurezza.",
          "Usare l'IA nello studio e nella ricerca in modo responsabile: citazione, dichiarazione d'uso, plagio, riproducibilità.",
          "Protezione dei dati ed etica della ricerca: cosa si può e cosa non si può incollare in un servizio di IA online.",
          "L'AI Act europeo e le policy universitarie sull'uso dell'IA.",
        ],
        outcome: "Un modello di dichiarazione sull'uso dell'IA per tesi e articoli, e una checklist per le domande ai comitati etici.",
      },
      {
        title: "IA applicata ai dati di ricerca (1 giorno)",
        modules: [
          "Classificare e raggruppare grandi raccolte di testi: questionari, interviste, letteratura.",
          "Individuare i temi ricorrenti in centinaia di articoli di un settore.",
          "Domande e risposte su una biblioteca privata di articoli, con risposte che citano le fonti.",
          "Immagini e documenti: estrarre testo e dati da scansioni, figure e tabelle.",
          "Misurare la qualità di un'analisi assistita dall'IA perché regga la peer review.",
        ],
        outcome: "Un'analisi funzionante di un dataset del proprio ambito e una sezione metodologica da adattare.",
      },
      {
        title: "Bootcamp Stack IA privato (3 giorni o 6 sessioni)",
        modules: [
          "Dentro il modello: token, embedding, attention, dimensioni e compressione dei modelli.",
          "Eseguire modelli aperti in locale: scegliere un modello in base a hardware e licenza, misurarne velocità e qualità.",
          "Prompt e modelli di ragionamento: output strutturati, modalità di ragionamento, valutazione.",
          "Retrieval: un sistema privato di ricerca e domande e risposte, con precisione misurata.",
          "Agenti e connettori: un assistente che usa strumenti tramite connettori standard, incluso uno scritto dagli studenti.",
          `Personalizzazione: fine-tuning di un modello su un dataset costruito dagli studenti, in ${VIRTUAL_ENV}, per poi eseguirlo in locale.`,
        ],
        outcome: "Un progetto da portfolio, un attestato e l'intero stack in funzione sul proprio portatile. Per i corsi che danno crediti, la valutazione può essere definita con il docente responsabile.",
      },
      {
        title: "Laboratorio modelli personalizzati (2 giorni, avanzato)",
        modules: [
          "I metodi di addestramento alla base dei modelli attuali: fine-tuning supervisionato, preference tuning, reinforcement learning con ricompense verificabili.",
          "Costruire e documentare un dataset di addestramento secondo gli standard della ricerca.",
          "Addestrare, poi valutare con benchmark, modello come giudice e revisione umana.",
          "Addestrare modelli di embedding e di classificazione su misura per un ambito di ricerca.",
          "Riproducibilità: logging, model card, licenze, condivisione dei risultati.",
        ],
        outcome: "Un modello addestrato, un report di valutazione e una model card pronta per l'appendice di un articolo.",
      },
      {
        title: "Partner per programmi di ricerca (6 mesi)",
        modules: [
          "Un workshop di avvio per il gruppo.",
          "Un ambiente IA privato per i dati sensibili o non pubblicati del gruppo.",
          "Quattro sessioni di 2 ore di formazione su misura e ricevimento.",
        ],
        outcome: "Un report scritto utilizzabile come deliverable di progetto.",
      },
    ],
    terms: [
      { label: "Dove", text: "In università ovunque a Malta e Gozo (trasferta inclusa) oppure live online. L'istituzione mette a disposizione aula e proiettore." },
      { label: "Formati semestrali", text: "Il Bootcamp e il Laboratorio modelli personalizzati possono essere suddivisi in sessioni settimanali di 3 ore per adattarsi all'orario delle lezioni." },
      { label: "Dotazione", text: `I partecipanti portano il proprio portatile (consigliati 16 GB di RAM). Le fasi più pesanti dal punto di vista del calcolo si svolgono in ${VIRTUAL_ENV}.` },
      { label: "Progetti di ricerca finanziati", text: "Qualsiasi pacchetto può essere inserito in una proposta di finanziamento come attività di formazione o di capacity building. Forniamo una descrizione, una voce di budget e un prezzo che resta fisso per tutta la durata del progetto." },
      { label: "Dati", text: "I dati di ricerca restano nell'UE e, negli esercizi private stack, non lasciano mai i computer dei partecipanti, il che semplifica le approvazioni in materia di protezione dei dati ed etica." },
      { label: "Incluso", text: "Una call di preparazione con il docente responsabile, tutti i materiali, l'accesso all'ambiente virtuale, gli attestati e 30 giorni di supporto via email." },
      { label: "Come prenotare", text: "Una call gratuita di 30 minuti, poi una proposta scritta a prezzo fisso entro 3 giorni lavorativi. Le fatture sono intestate all'istituzione, con l'IVA applicata secondo il suo status e il paese." },
    ],
    mailSubject: "Formazione IA per università e ricerca",
  },
  {
    slug: "individuals",
    published: true,
    eyebrow: "Corsi di IA per privati",
    cardTitle: "Studenti, ricercatori e appassionati",
    cardText:
      "Corsi brevi e pratici per chi si iscrive a titolo personale, a tariffe inferiori del 60% rispetto a quelle aziendali. Opzione privata 1-to-1 per le esigenze urgenti.",
    cardPrice: "Da 100 € a persona",
    title: "Costruisci la tua IA privata, passo dopo passo.",
    lead:
      "Corsi brevi e pratici per studenti, ricercatori indipendenti, freelance e appassionati che si iscrivono a titolo personale. Lo stesso approccio didattico dei nostri programmi aziendali, un programma più leggero e prezzi inferiori del 60% rispetto alle tariffe aziendali.",
    why:
      "Ogni sessione si chiude con qualcosa che funziona sul tuo computer: un modello IA in locale, un assistente privato che conosce i tuoi documenti e, infine, un modello che hai personalizzato tu.",
    priceIntro:
      "Tre corsi che si possono seguire singolarmente o come percorso. I prezzi sono a persona, inferiori del 60% alla tariffa aziendale di 250 € a persona al giorno.",
    priceColumns: ["Corso", "Durata", "Formato", "Prerequisiti", "Edizione di gruppo (IVA esclusa)"],
    extraColumns: [
      "Edizione di gruppo (IVA 18% inclusa)",
      "Privato 1-to-1, +50% (IVA esclusa)",
      "Privato 1-to-1, +50% (IVA 18% inclusa)",
    ],
    packages: [
      { name: "Primi passi con l'IA", duration: "2 serate da 3 h", group: "Live online", audience: "Nessuno", price: "100 €", extra: { a: "118 €", b: "150 €", c: "177 €" } },
      { name: "Costruisci il tuo assistente privato", duration: "2 giorni (weekend)", group: "Live online o a Gozo", audience: "Primi passi con l'IA o dimestichezza di base con il computer", price: "200 €", extra: { a: "236 €", b: "300 €", c: "354 €" } },
      { name: "Il tuo primo fine-tuning", duration: "1 giorno", group: "Live online o a Gozo", audience: "Costruisci il tuo assistente privato, Python di base", price: "100 €", extra: { a: "118 €", b: "150 €", c: "177 €" } },
      { name: "Percorso completo (tutti e tre)", duration: "5 sessioni", group: "Come sopra", audience: "Nessuno", price: "360 €", extra: { a: "425 €", b: "540 €", c: "637 €" } },
    ],
    priceNotes: [
      "Le edizioni si svolgono con un minimo di 8 e un massimo di 14 partecipanti. Se un'edizione non raggiunge gli 8 iscritti, ricevi il rimborso completo o un posto nell'edizione successiva.",
      "Ti serve prima? Se la tua formazione è urgente e non puoi aspettare la prossima edizione di gruppo, puoi prenotare qualsiasi corso in forma privata e personalizzata 1-to-1, nelle date che preferisci, con una maggiorazione del 50% sul prezzo di listino (vedi i prezzi privati in tabella). Il corso privato segue lo stesso programma, adattato ai tuoi obiettivi e al tuo materiale.",
    ],
    curriculum: [
      {
        title: "Primi passi con l'IA (2 serate)",
        modules: [
          "Che cos'è un modello linguistico e come produce il testo, senza matematica.",
          "Scrivere prompt che danno risultati affidabili, e accorgersi quando la risposta è sbagliata.",
          "Eseguire il tuo primo modello IA aperto sul tuo portatile, senza account e senza inviare dati a nessuno.",
        ],
        outcome: "Un modello IA in funzione in locale e un kit personale di prompt.",
      },
      {
        title: "Costruisci il tuo assistente privato (weekend)",
        modules: [
          "Scegliere il modello aperto giusto per il tuo computer.",
          "Un'interfaccia di chat semplice da usare per il tuo modello locale.",
          "Interrogare i tuoi appunti, PDF e articoli, con risposte che citano la fonte.",
          "Dare strumenti all'assistente: leggere file, fare ricerche, usare connettori standard verso altre applicazioni.",
        ],
        outcome: "Un assistente privato che conosce i tuoi documenti e funziona interamente sul tuo computer.",
      },
      {
        title: "Il tuo primo fine-tuning (1 giorno)",
        modules: [
          "Quando insegnare a un modello con degli esempi funziona meglio di un prompt migliore.",
          "Costruire un piccolo dataset da 100 a 300 esempi su un argomento che ti interessa.",
          `Addestrare il modello in ${VIRTUAL_ENV}.`,
          "Portare a casa il modello addestrato ed eseguirlo in locale.",
        ],
        outcome: "Il tuo modello personalizzato e un attestato di completamento.",
      },
    ],
    terms: [
      { label: "Studenti", text: "Porta un tesserino universitario valido alla prima sessione; non si applicano ulteriori sconti, perché la tariffa per studenti è già compresa nel prezzo." },
      { label: "Prenotazione", text: "Prenota il tuo posto via email e paga con bonifico entro 7 giorni. Puoi cancellare fino a 10 giorni prima dell'inizio con rimborso completo; dopo, il tuo posto può essere spostato all'edizione successiva." },
    ],
    termsTable: {
      caption: "Come pagare: come privato oppure tramite la tua attività, se lavori in proprio.",
      head: ["Sei", "Cosa ci serve per la fattura", "IVA in fattura"],
      rows: [
        ["Un privato residente a Malta", "Nome e cognome, indirizzo, numero della carta d'identità maltese (il tuo codice di identificazione fiscale)", "IVA maltese aggiunta al prezzo"],
        ["Un privato residente altrove", "Nome e cognome, indirizzo, numero di passaporto o di carta d'identità", "IVA secondo le regole del tuo paese di residenza"],
        ["Lavoratore autonomo o freelance a Malta", "Ragione sociale, indirizzo, partita IVA maltese (MT seguito da 8 cifre)", "IVA maltese aggiunta; se sei registrato ai sensi dell'Articolo 10 puoi detrarla"],
        ["Lavoratore autonomo in un altro paese UE", "Ragione sociale, indirizzo, partita IVA UE (verificata su VIES)", "Di norma inversione contabile per le edizioni online; IVA maltese per le edizioni che si tengono a Malta"],
      ],
    },
    mailSubject: "Corso di IA per privati",
  },
];

export const publishedOffersIt = trainingOffersIt.filter((o) => o.published);
