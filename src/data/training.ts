// AI training offers shown under /services/training/.
// Public copy rule: never name the tools, platforms or models used in the labs.
// The compute environment is always described as
// "a virtual environment to run models, provided by Aleph Innovation".

export interface TrainingPackage {
  name: string;
  duration: string;
  group: string;
  audience: string;
  price: string;
  /** Optional extra price columns, keyed by the column label. */
  extra?: Record<string, string>;
}

export interface CurriculumBlock {
  title: string;
  modules: string[];
  outcome: string;
}

export interface TrainingOffer {
  slug: string;
  published: boolean;
  eyebrow: string;
  cardTitle: string;
  cardText: string;
  cardPrice: string;
  title: string;
  lead: string;
  why: string;
  priceIntro: string;
  priceColumns: string[];
  extraColumns?: string[];
  packages: TrainingPackage[];
  priceNotes: string[];
  curriculum: CurriculumBlock[];
  terms: { label: string; text: string }[];
  termsTable?: { caption: string; head: string[]; rows: string[][] };
  mailSubject: string;
}

const VIRTUAL_ENV =
  "a virtual environment to run models, provided by Aleph Innovation and included in the price";

export const trainingOffers: TrainingOffer[] = [
  {
    slug: "companies",
    published: true,
    eyebrow: "AI training for companies",
    cardTitle: "Companies and professional firms",
    cardText:
      "From a half-day introduction for the whole team to a two-day lab where technical staff train a model on company data.",
    cardPrice: "From €1,500 per group",
    title: "Practical AI for your team, safely and on your own terms.",
    lead:
      "Hands-on AI training for teams that want to use AI safely and productively, on their own data and under their control. Every session ends with something working, not just slides.",
    why:
      "Since February 2025 the EU AI Act requires organisations that use AI to ensure their staff have sufficient AI literacy. Every package covers that duty for the use cases discussed and ends with a written training record.",
    priceIntro:
      "Five packages. Prices are for a private group, delivered in-house, excluding VAT.",
    priceColumns: ["Package", "Duration", "Group", "Who it is for", "Price (excl. VAT)"],
    packages: [
      { name: "AI Essentials", duration: "Half day (3.5 h)", group: "up to 15", audience: "Everyone in the organisation", price: "€1,500" },
      { name: "Applied AI on Your Documents", duration: "1 day (7 h)", group: "up to 15", audience: "Managers, analysts, professionals", price: "€2,600" },
      { name: "Private AI Stack", duration: "3 days, or 6 sessions of 3 h", group: "up to 10", audience: "Developers, IT and data staff", price: "€7,500" },
      { name: "Custom Model Lab (advanced)", duration: "2 days", group: "up to 10", audience: "Technical staff who completed Private AI Stack or equivalent", price: "€5,800" },
      { name: "AI Adoption Assessment", duration: "1 to 2 weeks", group: "management + key staff", audience: "Decision makers", price: "from €3,500" },
    ],
    priceNotes: [
      "Individual seats: companies sending 1 to 3 people can book seats in a scheduled open edition at €250 per person per day.",
      "Add-ons: extra participant €90 (half day) or €150 per day; 2-hour follow-up clinic within 60 days €400; 15% off any workshop booked with an assessment.",
    ],
    curriculum: [
      {
        title: "AI Essentials (half day)",
        modules: [
          "How language models work, in plain terms: what they do well, where they fail, why they invent things.",
          "Prompting that works: instructions, examples, step-by-step reasoning, checking the answer.",
          "Safe use at work: confidential data, copyright, which tasks to keep human.",
          "The EU AI Act for your roles: AI literacy duty, risk categories, transparency.",
        ],
        outcome: "A one-page AI use policy draft for the organisation and a signed AI literacy record.",
      },
      {
        title: "Applied AI on Your Documents (1 day)",
        modules: [
          "Everything in AI Essentials, condensed.",
          "Classifying and extracting information from emails, invoices, contracts or reports.",
          "Asking questions of your own documents with answers that cite their source.",
          "A private AI assistant, demonstrated running on a single computer with no data leaving the building.",
          "Choosing 3 to 5 real tasks and redesigning them with AI.",
        ],
        outcome: "The redesigned tasks, measured against how long they take today, and a 90-day adoption plan.",
      },
      {
        title: "Private AI Stack (3 days)",
        modules: [
          "Day 1, the model: how a model reads text, model sizes and compression, choosing an open model that fits your hardware and licence needs, running it locally.",
          "Day 1, prompting and reasoning: modern reasoning models, structured outputs your software can read.",
          "Day 2, retrieval: a private search and question-answering system over company documents, with quality measured on a test set.",
          "Day 2, agents: an AI assistant that uses tools, and standard connectors to files, databases and business applications.",
          `Day 3, customisation: adapting a model to company examples in ${VIRTUAL_ENV}, then bringing it back to run locally.`,
          "Day 3, capstone: each team connects its customised model, retrieval and two connectors into one working assistant.",
        ],
        outcome: "A working private AI assistant on their own machines, and the know-how to run it without sending data outside the company.",
      },
      {
        title: "Custom Model Lab (2 days, advanced)",
        modules: [
          "When to customise a model and when prompting or retrieval is enough.",
          "Building a training dataset from company examples, with quality checks.",
          "Supervised fine-tuning of an open model on that dataset.",
          "Preference tuning and reinforcement learning with verifiable rewards, the methods behind current reasoning models.",
          "Evaluating the result: test sets, model-as-judge, human review.",
          "Shipping it: compressing the model and serving it on company hardware.",
        ],
        outcome: "A model trained on their own data, an evaluation report comparing it with the base model, and a repeatable process.",
      },
      {
        title: "AI Adoption Assessment (1 to 2 weeks)",
        modules: [
          "Interviews and a review of key processes.",
          "A written report: where AI fits, expected savings, risks and EU AI Act classification for each use case.",
          "A costed plan and the technical scope for Maltese co-funding applications.",
        ],
        outcome: "A decision-ready plan with costs, risks and priorities.",
      },
    ],
    terms: [
      { label: "Where", text: "On site at your premises anywhere in Malta and Gozo (travel included), or live online. Outside Malta, travel at cost." },
      { label: "Equipment", text: `Participants bring laptops (16 GB RAM recommended for the technical packages). Compute-heavy steps run in ${VIRTUAL_ENV}, so no special hardware is needed.` },
      { label: "Included", text: "A preparation call, all materials, access to the virtual environment during the course, a recap document, certificates of attendance, and 30 days of email follow-up." },
      { label: "Data", text: "Your data stays in the EU, and in the private-stack packages it never leaves your machines." },
      { label: "How to book", text: "A free 30-minute call, then a written, fixed-price proposal within 3 working days. Rescheduling is free up to 10 working days before the date." },
      { label: "Invoicing", text: "Invoices go to the company's VAT number. Maltese clients are charged Maltese VAT; for business clients in other EU countries, VAT treatment follows EU rules (usually reverse charge for online delivery)." },
      { label: "Co-funding", text: "We prepare the technical scope for Maltese co-funding applications. Eligibility is checked case by case with the funding body; approval is not guaranteed." },
    ],
    mailSubject: "AI training for companies",
  },
  {
    slug: "universities",
    published: true,
    eyebrow: "AI training for universities and research",
    cardTitle: "Universities and research",
    cardText:
      "The same hands-on programme, adapted to teaching and research, at 30% below company rates.",
    cardPrice: "From €1,050 per group",
    title: "Learn how modern AI works by building it.",
    lead:
      "The same enterprise-grade, hands-on programme we deliver to companies, adapted to teaching and research and offered at 30% below company rates. Students and researchers learn how modern AI works by building it, on infrastructure they control.",
    why:
      "Students leave with a working, portfolio-ready project. Research groups get a private AI setup where sensitive or unpublished data never leaves their machines, which simplifies data-protection and ethics approvals.",
    priceIntro:
      "Academic prices are 30% below company rates, for universities, colleges, research institutes and funded research projects. Prices are per group, excluding VAT.",
    priceColumns: ["Package", "Duration", "Group", "Who it is for", "Academic price (excl. VAT)"],
    extraColumns: ["Company rate"],
    packages: [
      { name: "AI Literacy for Study and Research", duration: "Half day (3.5 h)", group: "up to 30", audience: "Students, researchers, academic staff", price: "€1,050", extra: { a: "€1,500" } },
      { name: "Applied AI on Research Data", duration: "1 day (7 h)", group: "up to 20", audience: "Researchers and postgraduate students in any field", price: "€1,820", extra: { a: "€2,600" } },
      { name: "Private AI Stack Bootcamp", duration: "3 days, or 6 sessions of 3 h across a semester", group: "up to 16 (with a teaching assistant)", audience: "Computer science, engineering and data science students", price: "€5,250", extra: { a: "€7,500" } },
      { name: "Custom Model Lab (advanced)", duration: "2 days", group: "up to 12", audience: "Master's and PhD students, research engineers", price: "€4,060", extra: { a: "€5,800" } },
      { name: "Research Programme Partner", duration: "6 months", group: "one research group", audience: "Groups needing a private AI setup and ongoing support", price: "from €2,450", extra: { a: "from €3,500" } },
    ],
    priceNotes: [
      "Individual seats in a scheduled open edition: €175 per person per day for staff of academic institutions.",
      "Repeat editions: the same package delivered again in the same academic year is 15% off.",
    ],
    curriculum: [
      {
        title: "AI Literacy for Study and Research (half day)",
        modules: [
          "How language models work and why they produce confident errors.",
          "Using AI in study and research responsibly: citation, disclosure, plagiarism, reproducibility.",
          "Data protection and research ethics: what can and cannot be pasted into an online AI service.",
          "The EU AI Act and university policies on AI use.",
        ],
        outcome: "A template AI-use statement for theses and papers, and a checklist for ethics applications.",
      },
      {
        title: "Applied AI on Research Data (1 day)",
        modules: [
          "Classifying and clustering large text collections: surveys, interviews, literature.",
          "Topic discovery across hundreds of papers in a field.",
          "Question answering over a private library of papers, with answers that cite their sources.",
          "Images and documents: extracting text and data from scans, figures and tables.",
          "Measuring the quality of AI-assisted analysis so it holds up in peer review.",
        ],
        outcome: "A working analysis of a dataset from their own field and a method section they can adapt.",
      },
      {
        title: "Private AI Stack Bootcamp (3 days or 6 sessions)",
        modules: [
          "Inside the model: tokens, embeddings, attention, model sizes and compression.",
          "Running open models locally: choosing a model by hardware and licence, measuring speed and quality.",
          "Prompting and reasoning models: structured outputs, reasoning modes, evaluation.",
          "Retrieval: a private search and question-answering system, with measured precision.",
          "Agents and connectors: an assistant that uses tools through standard connectors, including one the students write.",
          `Customisation: fine-tuning a model on a dataset the students build, in ${VIRTUAL_ENV}, then running it locally.`,
        ],
        outcome: "A portfolio project, a certificate, and the full stack running on their own laptop. Assessment can be designed with the course lead for credit-bearing courses.",
      },
      {
        title: "Custom Model Lab (2 days, advanced)",
        modules: [
          "Training methods behind current models: supervised fine-tuning, preference tuning, reinforcement learning with verifiable rewards.",
          "Building and documenting a training dataset to research standards.",
          "Training, then evaluating against benchmarks, model-as-judge and human review.",
          "Training custom embedding and classification models for a research domain.",
          "Reproducibility: logging, model cards, licences, sharing the results.",
        ],
        outcome: "A trained model, an evaluation report and a model card ready for a paper's appendix.",
      },
      {
        title: "Research Programme Partner (6 months)",
        modules: [
          "A kick-off workshop for the group.",
          "A private AI setup for the group's sensitive or unpublished data.",
          "Four 2-hour sessions of tailored training and office hours.",
        ],
        outcome: "A written report usable as a project deliverable.",
      },
    ],
    terms: [
      { label: "Where", text: "On campus anywhere in Malta and Gozo (travel included) or live online. The institution provides the room and projector." },
      { label: "Semester formats", text: "The Bootcamp and the Custom Model Lab can be split into weekly 3-hour sessions to fit a teaching timetable." },
      { label: "Equipment", text: `Participants bring laptops (16 GB RAM recommended). Compute-heavy steps run in ${VIRTUAL_ENV}.` },
      { label: "Funded research projects", text: "Any package can be written into a grant proposal as a training or capacity-building task. We provide a description, a budget line and a price that stays fixed for the project's duration." },
      { label: "Data", text: "Research data stays in the EU, and in private-stack exercises it never leaves the participants' machines, which simplifies data-protection and ethics approvals." },
      { label: "Included", text: "A preparation call with the course lead, all materials, access to the virtual environment, certificates, and 30 days of email follow-up." },
      { label: "How to book", text: "A free 30-minute call, then a written, fixed-price proposal within 3 working days. Invoices go to the institution, with VAT applied as required for its status and country." },
    ],
    mailSubject: "AI training for universities and research",
  },
  {
    slug: "individuals",
    published: true,
    eyebrow: "AI courses for individuals",
    cardTitle: "Students, researchers and enthusiasts",
    cardText:
      "Short practical courses for people who pay for themselves, at 60% below company rates. Private 1-to-1 option for urgent needs.",
    cardPrice: "From €100 per person",
    title: "Build your own private AI, step by step.",
    lead:
      "Short, practical courses for students, independent researchers, freelancers and enthusiasts who pay for themselves. Same teaching approach as our company programmes, a lighter syllabus, and prices 60% below company rates.",
    why:
      "Every session ends with something that works on your own computer: a local AI model, a private assistant that knows your documents, and finally a model you customised yourself.",
    priceIntro:
      "Three courses that can be taken one at a time or as a path. Prices are per person, 60% below the company rate of €250 per person per day.",
    priceColumns: ["Course", "Duration", "Format", "Prerequisites", "Group edition (excl. VAT)"],
    extraColumns: [
      "Group edition (incl. 18% VAT)",
      "Private 1-to-1, +50% (excl. VAT)",
      "Private 1-to-1, +50% (incl. 18% VAT)",
    ],
    packages: [
      { name: "AI Starter", duration: "2 evenings of 3 h", group: "Live online", audience: "None", price: "€100", extra: { a: "€118", b: "€150", c: "€177" } },
      { name: "Build Your Private Assistant", duration: "2 days (weekend)", group: "Live online or in Gozo", audience: "AI Starter or basic computer confidence", price: "€200", extra: { a: "€236", b: "€300", c: "€354" } },
      { name: "Fine-Tune Your First Model", duration: "1 day", group: "Live online or in Gozo", audience: "Build Your Private Assistant, basic Python", price: "€100", extra: { a: "€118", b: "€150", c: "€177" } },
      { name: "Full path (all three)", duration: "5 sessions", group: "As above", audience: "None", price: "€360", extra: { a: "€425", b: "€540", c: "€637" } },
    ],
    priceNotes: [
      "Editions run with a minimum of 8 and a maximum of 14 participants. If an edition doesn't reach 8, you get a full refund or a seat in the next one.",
      "Need it sooner? If your training is urgent and you can't wait for the next group edition, you can book any course as a private, personalised 1-to-1 course at your own dates, with a 50% surcharge on the listed price (see the private prices in the table). The private course follows the same syllabus, adapted to your goals and your own material.",
    ],
    curriculum: [
      {
        title: "AI Starter (2 evenings)",
        modules: [
          "What a language model is and how it produces text, without maths.",
          "Writing prompts that get reliable results, and spotting when the answer is wrong.",
          "Running your first open AI model on your own laptop, with no account and no data sent anywhere.",
        ],
        outcome: "An AI model running locally and a personal prompt toolkit.",
      },
      {
        title: "Build Your Private Assistant (weekend)",
        modules: [
          "Choosing the right open model for your computer.",
          "A friendly chat interface for your local model.",
          "Asking questions of your own notes, PDFs and papers, with answers that cite the source.",
          "Giving the assistant tools: reading files, searching, using standard connectors to other apps.",
        ],
        outcome: "A private assistant that knows your documents and runs entirely on your machine.",
      },
      {
        title: "Fine-Tune Your First Model (1 day)",
        modules: [
          "When teaching a model with examples beats a better prompt.",
          "Building a small dataset of 100 to 300 examples on a topic you care about.",
          `Training the model in ${VIRTUAL_ENV}.`,
          "Bringing your trained model home and running it locally.",
        ],
        outcome: "Your own customised model and a certificate of completion.",
      },
    ],
    terms: [
      { label: "Students", text: "Bring a valid student card to the first session; no extra discount applies, as the student rate is already built into the price." },
      { label: "Booking", text: "Reserve a seat by email, pay by bank transfer within 7 days. Cancel up to 10 days before the start for a full refund; after that, your seat can move to the next edition." },
    ],
    termsTable: {
      caption: "How to pay: as a private person or through your own business if you are self-employed.",
      head: ["You are", "What we need for the invoice", "VAT on the invoice"],
      rows: [
        ["A private individual resident in Malta", "Full name, address, Maltese ID card number (your tax identification number)", "Maltese VAT added to the price"],
        ["A private individual resident elsewhere", "Full name, address, passport or national ID number", "VAT as required for your country of residence"],
        ["Self-employed or freelancer in Malta", "Business name, address, Maltese VAT number (MT followed by 8 digits)", "Maltese VAT added; if you are registered under Article 10 you can recover it"],
        ["Self-employed in another EU country", "Business name, address, EU VAT number (checked on VIES)", "Usually reverse charge for online editions; Maltese VAT for editions held in Malta"],
      ],
    },
    mailSubject: "AI course for individuals",
  },
];

export const publishedOffers = trainingOffers.filter((o) => o.published);

import { publishedOffersIt } from "./training.it";

/** Published offers in the requested language (same slugs in both). */
export const getPublishedOffers = (lang: "en" | "it") =>
  lang === "it" ? publishedOffersIt : publishedOffers;
