// Trainer profile shown on /about/paolo-leoncini/ and on every training page.
// Written in the first person on purpose: keep it that way when editing.

export const trainer = {
  name: "Paolo Leoncini",
  slug: "paolo-leoncini",
  photo: "/images/trainer.jpg",
  role: "Founder of Aleph Innovation · Applied AI engineer and trainer · Gozo, Malta",
  short:
    "I'm a physicist and applied AI engineer with more than 30 years in software and technology delivery for companies such as IBM, Credit Suisse and Bloomberg. I design and build AI agents, retrieval systems and tool integrations, and I have trained client teams to run and extend the AI solutions I delivered. I founded Aleph Innovation in Gozo, and I teach what I build and test myself.",
  intro:
    "I'm a physicist, and I have spent more than 30 years building software and leading technology programmes across Europe and Asia, in finance, telecommunications, manufacturing, automotive and logistics. Since 2024 my work has centred on applied AI: language-model agents, retrieval-augmented generation and the connectors that let AI work with real business systems. I founded Aleph Innovation in Gozo to engineer AI systems where a named person always makes the final decision.",
  builds: [
    {
      title: "An AI service copilot in production",
      text: "for an industrial manufacturer: a custom retrieval architecture that answers technicians' questions from product documentation and technical FAQs, validated at scale on more than 700 documents and 350 product models together with the platform vendor's engineering team.",
    },
    {
      title: "AI-powered backend systems",
      text: "as an independent consultant: semantic search and retrieval, a server that connects AI agents to business tools, real-time streaming and a web dashboard on top of them.",
    },
    {
      title: "An agentic environmental monitoring system for Gozo",
      text: "published at Aleph Innovation: a register of 14 ranked environmental risks, a validation architecture from sensing to human decision, and the interactive Gozo Risk Map.",
    },
    {
      title: "Agentic Portfolio",
      text: "an open research project on AI-assisted investment analysis, documented in public on the engineering wiki.",
    },
  ],
  teaching:
    "My training grew out of delivery, not from a classroom. On my AI projects I trained client teams so they could maintain and extend the systems on their own. I ran adoption workshops for field-service rollouts, coached business users through new platforms, and introduced Agile methods to development teams in Italy and the Philippines. My courses follow the same rule: every session ends with something that works on the participant's own machine.",
  career: [
    ["2026 – present", "Founder", "Aleph Innovation, Gozo"],
    ["2026 – present", "Freelance AI and backend consultant", "Clients in Malta and the EU"],
    ["2019 – 2026", "Senior consultant, lead developer and solution architect", "Altea Federation, programmes of about €1M each"],
    ["2018", "CRM business analyst", "Tata Consultancy Services for FCA"],
    ["2016 – 2018", "Senior project manager, risk models", "Credit Suisse, Poland"],
    ["2014 – 2016", "Programme manager", "IBM, for the European Commission (DG TAXUD)"],
    ["2000 – 2014", "Product, programme and technology management", "Bloomberg, AGE Software (Ferrari racing telemetry), Toyota Motor Europe project, Asian Logic and others"],
    ["1986 – 2000", "Software developer and team leader", "Marconi Italiana, Port of Genoa"],
  ],
  education: [
    "MSc in Physics, University of Genoa (1986)",
    "PRINCE2 Practitioner (2009)",
    "Salesforce Certified Administrator (2019), Service Cloud Consultant (2020), Field Service Consultant (2023)",
  ],
  languages:
    "Italian (native), English (C2); working knowledge of German, Spanish and French. Courses are available in English and Italian.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paololeoncini" },
    { label: "GitHub", href: "https://github.com/lupoleo" },
  ],
};

// Italian version of the profile, shown under /it/. Same rule: first person,
// no gendered wording about the trainer.
export const trainerIt: typeof trainer = {
  ...trainer,
  role: "Fondazione e guida di Aleph Innovation · Ingegneria dell'AI applicata e formazione · Gozo, Malta",
  short:
    "Ho una laurea in fisica e mi occupo di ingegneria dell'AI applicata, con oltre 30 anni di esperienza nello sviluppo software e nella realizzazione di progetti tecnologici per aziende come IBM, Credit Suisse e Bloomberg. Progetto e sviluppo agenti AI, sistemi di retrieval e integrazioni con strumenti aziendali, e ho formato i team dei clienti a gestire ed estendere le soluzioni AI che ho realizzato. Ho fondato Aleph Innovation a Gozo e insegno ciò che costruisco e verifico in prima persona.",
  intro:
    "Ho una laurea in fisica e da oltre 30 anni sviluppo software e guido programmi tecnologici in Europa e in Asia, nei settori finanza, telecomunicazioni, manifattura, automotive e logistica. Dal 2024 il mio lavoro è dedicato all'AI applicata: agenti basati su modelli linguistici, retrieval-augmented generation e i connettori che permettono all'AI di lavorare con i sistemi aziendali reali. Ho fondato Aleph Innovation a Gozo per progettare sistemi di AI in cui la decisione finale spetta sempre a una persona identificata.",
  builds: [
    {
      title: "Un copilota AI per l'assistenza tecnica, in produzione",
      text: "per un produttore industriale: un'architettura di retrieval su misura che risponde alle domande dei tecnici a partire dalla documentazione di prodotto e dalle FAQ tecniche, validata su larga scala su oltre 700 documenti e 350 modelli di prodotto insieme al team di ingegneria del fornitore della piattaforma.",
    },
    {
      title: "Sistemi backend basati sull'AI",
      text: "come consulente indipendente: ricerca semantica e retrieval, un server che collega gli agenti AI agli strumenti aziendali, streaming in tempo reale e una dashboard web costruita sopra.",
    },
    {
      title: "Un sistema agentico di monitoraggio ambientale per Gozo",
      text: "pubblicato da Aleph Innovation: un registro di 14 rischi ambientali classificati, un'architettura di validazione dalla rilevazione alla decisione umana e la Mappa interattiva dei rischi di Gozo.",
    },
    {
      title: "Agentic Portfolio",
      text: "un progetto di ricerca aperto sull'analisi degli investimenti assistita dall'AI, documentato pubblicamente nel wiki tecnico.",
    },
  ],
  teaching:
    "La mia attività di formazione è nata sul campo, non in aula. Nei miei progetti di AI ho formato i team dei clienti perché potessero gestire ed estendere i sistemi in autonomia. Ho condotto workshop di adozione per i rollout di field service, ho accompagnato gli utenti di business nell'uso di nuove piattaforme e ho introdotto i metodi Agile in team di sviluppo in Italia e nelle Filippine. I miei corsi seguono la stessa regola: ogni sessione si chiude con qualcosa che funziona sul computer di chi partecipa.",
  career: [
    ["2026 – oggi", "Fondazione e guida", "Aleph Innovation, Gozo"],
    ["2026 – oggi", "Consulente freelance AI e backend", "Clienti a Malta e nell'UE"],
    ["2019 – 2026", "Senior consultant, lead developer e solution architect", "Altea Federation, programmi da circa 1 milione di euro ciascuno"],
    ["2018", "CRM business analyst", "Tata Consultancy Services per FCA"],
    ["2016 – 2018", "Senior project manager, modelli di rischio", "Credit Suisse, Polonia"],
    ["2014 – 2016", "Programme manager", "IBM, per la Commissione europea (DG TAXUD)"],
    ["2000 – 2014", "Gestione di prodotto, programmi e tecnologia", "Bloomberg, AGE Software (telemetria per le corse Ferrari), progetto Toyota Motor Europe, Asian Logic e altri"],
    ["1986 – 2000", "Software developer e team leader", "Marconi Italiana, Porto di Genova"],
  ],
  education: [
    "Laurea in Fisica, Università di Genova (1986)",
    "PRINCE2 Practitioner (2009)",
    "Salesforce Certified Administrator (2019), Service Cloud Consultant (2020), Field Service Consultant (2023)",
  ],
  languages:
    "Italiano (madrelingua), inglese (C2); conoscenza operativa di tedesco, spagnolo e francese. I corsi sono disponibili in inglese e in italiano.",
};

export const getTrainer = (lang: "en" | "it") => (lang === "it" ? trainerIt : trainer);
