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
  role: "Fondazione e guida di Aleph Innovation · Ingegneria dell'IA applicata e formazione · Gozo, Malta",
  short:
    "Ho una laurea in fisica e mi occupo di ingegneria dell'IA applicata, con oltre 30 anni di esperienza nello sviluppo software e nella realizzazione di progetti tecnologici per aziende come IBM, Credit Suisse e Bloomberg. Progetto e sviluppo agenti IA, sistemi di retrieval e integrazioni con strumenti aziendali, e ho formato i team dei clienti a gestire ed estendere le soluzioni IA che ho realizzato. Ho fondato Aleph Innovation a Gozo e insegno ciò che costruisco e verifico in prima persona.",
  intro:
    "Ho una laurea in fisica e da oltre 30 anni sviluppo software e guido programmi tecnologici in Europa e in Asia, nei settori finanza, telecomunicazioni, manifattura, automotive e logistica. Dal 2024 il mio lavoro è dedicato all'IA applicata: agenti basati su modelli linguistici, retrieval-augmented generation e i connettori che permettono all'IA di lavorare con i sistemi aziendali reali. Ho fondato Aleph Innovation a Gozo per progettare sistemi di IA in cui la decisione finale spetta sempre a una persona identificata.",
  builds: [
    {
      title: "Un copilota IA per l'assistenza tecnica, in produzione",
      text: "per un produttore industriale: un'architettura di retrieval su misura che risponde alle domande dei tecnici a partire dalla documentazione di prodotto e dalle FAQ tecniche, validata su larga scala su oltre 700 documenti e 350 modelli di prodotto insieme al team di ingegneria del fornitore della piattaforma.",
    },
    {
      title: "Sistemi backend basati sull'IA",
      text: "come consulente indipendente: ricerca semantica e retrieval, un server che collega gli agenti IA agli strumenti aziendali, streaming in tempo reale e una dashboard web costruita sopra.",
    },
    {
      title: "Un sistema agentico di monitoraggio ambientale per Gozo",
      text: "pubblicato da Aleph Innovation: un registro di 14 rischi ambientali classificati, un'architettura di validazione dalla rilevazione alla decisione umana e la Mappa interattiva dei rischi di Gozo.",
    },
    {
      title: "Agentic Portfolio",
      text: "un progetto di ricerca aperto sull'analisi degli investimenti assistita dall'IA, documentato pubblicamente nella Wiki tecnica.",
    },
  ],
  teaching:
    "La mia attività di formazione è nata sul campo, non in aula. Nei miei progetti di IA ho formato i team dei clienti perché potessero gestire ed estendere i sistemi in autonomia. Ho condotto workshop di adozione per i rollout di field service, ho accompagnato gli utenti di business nell'uso di nuove piattaforme e ho introdotto i metodi Agile in team di sviluppo in Italia e nelle Filippine. I miei corsi seguono la stessa regola: ogni sessione si chiude con qualcosa che funziona sul computer di chi partecipa.",
  career: [
    ["2026 – oggi", "Fondazione e guida", "Aleph Innovation, Gozo"],
    ["2026 – oggi", "Consulente freelance IA e backend", "Clienti a Malta e nell'UE"],
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

// Maltese version of the profile, shown under /mt/. Same rule: first person,
// no gendered wording about the trainer.
export const trainerMt: typeof trainer = {
  ...trainer,
  role: "Fundazzjoni u tmexxija ta' Aleph Innovation · Inġinerija tal-AI applikata u taħriġ · Għawdex, Malta",
  short:
    "Għandi lawrja fil-fiżika u naħdem fl-inġinerija tal-AI applikata, b'aktar minn 30 sena esperjenza fis-softwer u fit-twassil ta' proġetti teknoloġiċi għal kumpaniji bħal IBM, Credit Suisse u Bloomberg. Infassal u nibni aġenti tal-AI, sistemi ta' retrieval u integrazzjonijiet ma' għodod tan-negozju, u ħarriġt timijiet tal-klijenti biex iħaddmu u jestendu s-soluzzjonijiet tal-AI li wassalt. Waqqaft Aleph Innovation f'Għawdex, u ngħallem dak li nibni u nittestja jien stess.",
  intro:
    "Għandi lawrja fil-fiżika, u għal aktar minn 30 sena bnejt softwer u mexxejt programmi teknoloġiċi madwar l-Ewropa u l-Asja, fil-finanzi, fit-telekomunikazzjoni, fil-manifattura, fl-industrija tal-karozzi u fil-loġistika. Mill-2024 ix-xogħol tiegħi huwa ffukat fuq l-AI applikata: aġenti bbażati fuq mudelli tal-lingwa, retrieval-augmented generation u l-connectors li jħallu l-AI taħdem mas-sistemi reali tan-negozju. Waqqaft Aleph Innovation f'Għawdex biex nfassal sistemi tal-AI fejn id-deċiżjoni finali dejjem tittieħed minn persuna identifikata.",
  builds: [
    {
      title: "Copilot tal-AI għas-servizz tekniku, fil-produzzjoni",
      text: "għal manifattur industrijali: arkitettura ta' retrieval imfassla apposta li twieġeb il-mistoqsijiet tat-tekniċi mid-dokumentazzjoni tal-prodotti u mill-FAQs tekniċi, ivvalidata fuq skala kbira fuq aktar minn 700 dokument u 350 mudell ta' prodott flimkien mat-tim tal-inġinerija tal-fornitur tal-pjattaforma.",
    },
    {
      title: "Sistemi backend imħaddma bl-AI",
      text: "f'konsulenza indipendenti: tfittxija semantika u retrieval, server li jgħaqqad l-aġenti tal-AI mal-għodod tan-negozju, streaming f'ħin reali u dashboard tal-web mibnija fuqhom.",
    },
    {
      title: "Sistema aġentika ta' monitoraġġ ambjentali għal Għawdex",
      text: "ippubblikata minn Aleph Innovation: reġistru ta' 14-il riskju ambjentali kklassifikat, arkitettura ta' validazzjoni mill-kejl sad-deċiżjoni umana, u l-Mappa interattiva tar-Riskji ta' Għawdex.",
    },
    {
      title: "Agentic Portfolio",
      text: "proġett ta' riċerka miftuħ dwar l-analiżi tal-investimenti assistita mill-AI, iddokumentat pubblikament fil-Wiki teknika.",
    },
  ],
  teaching:
    "It-taħriġ tiegħi twieled mix-xogħol fuq il-proġetti, mhux fi klassi. Fil-proġetti tiegħi tal-AI ħarriġt it-timijiet tal-klijenti biex ikunu jistgħu jżommu u jestendu s-sistemi waħedhom. Mexxejt workshops ta' adozzjoni għall-introduzzjoni ta' sistemi tal-field service, akkumpanjajt utenti tan-negozju fl-użu ta' pjattaformi ġodda, u introduċejt il-metodi Agile f'timijiet ta' żvilupp fl-Italja u fil-Filippini. Il-korsijiet tiegħi jsegwu l-istess regola: kull sessjoni tispiċċa b'xi ħaġa li taħdem fuq il-magna ta' min qed jipparteċipa.",
  career: [
    ["2026 – illum", "Fundazzjoni u tmexxija", "Aleph Innovation, Għawdex"],
    ["2026 – illum", "Konsulenza freelance fl-AI u fil-backend", "Klijenti f'Malta u fl-UE"],
    ["2019 – 2026", "Senior consultant, lead developer u solution architect", "Altea Federation, programmi ta' madwar €1M kull wieħed"],
    ["2018", "CRM business analyst", "Tata Consultancy Services għal FCA"],
    ["2016 – 2018", "Senior project manager, mudelli tar-riskju", "Credit Suisse, il-Polonja"],
    ["2014 – 2016", "Programme manager", "IBM, għall-Kummissjoni Ewropea (DG TAXUD)"],
    ["2000 – 2014", "Ġestjoni tal-prodott, tal-programmi u tat-teknoloġija", "Bloomberg, AGE Software (telemetrija għat-tlielaq tal-Ferrari), proġett ta' Toyota Motor Europe, Asian Logic u oħrajn"],
    ["1986 – 2000", "Software developer u team leader", "Marconi Italiana, il-Port ta' Ġenova"],
  ],
  education: [
    "MSc fil-Fiżika, Università ta' Ġenova (1986)",
    "PRINCE2 Practitioner (2009)",
    "Salesforce Certified Administrator (2019), Service Cloud Consultant (2020), Field Service Consultant (2023)",
  ],
  languages:
    "Taljan (lingwa materna), Ingliż (C2); għarfien tax-xogħol tal-Ġermaniż, tal-Ispanjol u tal-Franċiż. Il-korsijiet huma disponibbli bl-Ingliż u bit-Taljan.",
};

export const getTrainer = (lang: "en" | "it" | "mt") =>
  ({ en: trainer, it: trainerIt, mt: trainerMt })[lang];
