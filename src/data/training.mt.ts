// Maltese version of the AI training offers, shown under /mt/services/training/.
// Same public copy rule as the English file: never name the tools, platforms
// or models used in the labs. Prices and VAT treatment must match training.ts.
// Courses are taught in English or Italian: the Maltese pages only describe them.

import type { TrainingOffer } from "./training";

const VIRTUAL_ENV =
  "ambjent virtwali biex jitħaddmu l-mudelli, ipprovdut minn Aleph Innovation u inkluż fil-prezz";

export const trainingOffersMt: TrainingOffer[] = [
  {
    slug: "companies",
    published: true,
    eyebrow: "Taħriġ fl-AI għall-kumpaniji",
    cardTitle: "Kumpaniji u ditti professjonali",
    cardText:
      "Minn introduzzjoni ta' nofs jum għat-tim kollu sa laboratorju ta' jumejn fejn l-istaff tekniku jħarreġ mudell fuq id-data tal-kumpanija.",
    cardPrice: "Minn €1,500 għal kull grupp",
    title: "AI prattika għat-tim tiegħek, b'mod sigur u bil-kundizzjonijiet tiegħek.",
    lead:
      "Taħriġ prattiku fl-AI għal timijiet li jridu jużaw l-AI b'mod sigur u produttiv, fuq id-data tagħhom u taħt il-kontroll tagħhom. Kull sessjoni tispiċċa b'xi ħaġa li taħdem, mhux biss bi slides.",
    why:
      "Minn Frar 2025, l-Att tal-UE dwar l-AI jitlob lill-organizzazzjonijiet li jużaw l-AI jiżguraw li l-istaff tagħhom ikollu litteriżmu biżżejjed fl-AI. Kull pakkett ikopri dan l-obbligu għall-użi diskussi u jintemm b'rekord bil-miktub tat-taħriġ.",
    priceIntro:
      "Ħames pakketti. Il-prezzijiet huma għal grupp privat, imwassal fil-post tagħkom, mingħajr VAT.",
    priceColumns: ["Pakkett", "Tul", "Grupp", "Għal min hu", "Prezz (mingħajr VAT)"],
    packages: [
      { name: "AI Essentials", duration: "Nofs jum (3.5 sigħat)", group: "sa 15", audience: "Kulħadd fl-organizzazzjoni", price: "€1,500" },
      { name: "Applied AI on Your Documents", duration: "Jum (7 sigħat)", group: "sa 15", audience: "Maniġers, analisti, professjonisti", price: "€2,600" },
      { name: "Private AI Stack", duration: "3 ijiem, jew 6 sessjonijiet ta' 3 sigħat", group: "sa 10", audience: "Żviluppaturi, staff tal-IT u tad-data", price: "€7,500" },
      { name: "Custom Model Lab (avvanzat)", duration: "Jumejn", group: "sa 10", audience: "Staff tekniku li temm Private AI Stack jew ekwivalenti", price: "€5,800" },
      { name: "AI Adoption Assessment", duration: "Ġimgħa sa ġimagħtejn", group: "maniġment + staff ewlieni", audience: "Min jieħu d-deċiżjonijiet", price: "minn €3,500" },
    ],
    priceNotes: [
      "Postijiet individwali: kumpaniji li jibagħtu minn persuna sa 3 persuni jistgħu jibbukkjaw postijiet f'edizzjoni miftuħa skedata, bi €250 għal kull persuna kuljum.",
      "Żidiet: parteċipant żejjed €90 (nofs jum) jew €150 kuljum; klinika ta' segwitu ta' sagħtejn fi żmien 60 jum €400; 15% skont fuq kull workshop ibbukkjat flimkien ma' assessment.",
    ],
    curriculum: [
      {
        title: "AI Essentials (nofs jum)",
        modules: [
          "Kif jaħdmu l-mudelli tal-lingwa, fi kliem sempliċi: x'jagħmlu tajjeb, fejn jonqsu, għaliex jivvintaw l-affarijiet.",
          "Prompts li jaħdmu: struzzjonijiet, eżempji, raġunament pass pass, verifika tat-tweġiba.",
          "Użu sigur fuq ix-xogħol: data kunfidenzjali, drittijiet tal-awtur, liema kompiti għandhom jibqgħu f'idejn il-bniedem.",
          "L-Att tal-UE dwar l-AI għar-rwoli tagħkom: l-obbligu tal-litteriżmu fl-AI, il-kategoriji tar-riskju, it-trasparenza.",
        ],
        outcome: "Abbozz ta' politika ta' paġna waħda dwar l-użu tal-AI għall-organizzazzjoni u rekord iffirmat tal-litteriżmu fl-AI.",
      },
      {
        title: "Applied AI on Your Documents (jum)",
        modules: [
          "Dak kollu li hemm f'AI Essentials, fil-qosor.",
          "Klassifikazzjoni u estrazzjoni ta' informazzjoni minn emails, fatturi, kuntratti jew rapporti.",
          "Mistoqsijiet lid-dokumenti tagħkom stess, bi tweġibiet li jsemmu s-sors tagħhom.",
          "Assistent privat tal-AI, muri jaħdem fuq kompjuter wieħed mingħajr ma toħroġ data mill-bini.",
          "Għażla ta' 3 sa 5 kompiti reali u tfassil mill-ġdid tagħhom bl-AI.",
        ],
        outcome: "Il-kompiti mfassla mill-ġdid, imkejla kontra kemm jieħdu żmien illum, u pjan ta' adozzjoni ta' 90 jum.",
      },
      {
        title: "Private AI Stack (3 ijiem)",
        modules: [
          "L-ewwel jum, il-mudell: kif mudell jaqra t-test, id-daqs u l-kompressjoni tal-mudelli, l-għażla ta' mudell miftuħ li jaqbel mal-hardware u mal-ħtiġijiet tal-liċenzja tagħkom, u t-tħaddim tiegħu lokalment.",
          "L-ewwel jum, prompting u raġunament: mudelli moderni tar-raġunament, outputs strutturati li s-softwer tagħkom jista' jaqra.",
          "It-tieni jum, retrieval: sistema privata ta' tfittxija u ta' tweġibiet fuq id-dokumenti tal-kumpanija, bil-kwalità mkejla fuq sett ta' testijiet.",
          "It-tieni jum, aġenti: assistent tal-AI li juża l-għodod, u connectors standard għal fajls, databases u applikazzjonijiet tan-negozju.",
          `It-tielet jum, adattament: mudell jiġi adattat għall-eżempji tal-kumpanija f'${VIRTUAL_ENV}, imbagħad jinġieb lura biex jaħdem lokalment.`,
          "It-tielet jum, proġett finali: kull tim jgħaqqad il-mudell adattat, ir-retrieval u żewġ connectors f'assistent wieħed li jaħdem.",
        ],
        outcome: "Assistent privat tal-AI li jaħdem fuq il-magni tagħhom, u l-għarfien biex iħaddmuh mingħajr ma tintbagħat data barra mill-kumpanija.",
      },
      {
        title: "Custom Model Lab (jumejn, avvanzat)",
        modules: [
          "Meta jaqbel tadatta mudell u meta biżżejjed prompting jew retrieval.",
          "Il-bini ta' dataset tat-taħriġ minn eżempji tal-kumpanija, b'kontrolli tal-kwalità.",
          "Supervised fine-tuning ta' mudell miftuħ fuq dak id-dataset.",
          "Preference tuning u reinforcement learning b'rewards verifikabbli, il-metodi wara l-mudelli tar-raġunament tal-lum.",
          "Evalwazzjoni tar-riżultat: settijiet ta' testijiet, mudell bħala ġudikant, reviżjoni umana.",
          "Fl-użu: kompressjoni tal-mudell u t-tħaddim tiegħu fuq il-hardware tal-kumpanija.",
        ],
        outcome: "Mudell imħarreġ fuq id-data tagħhom, rapport ta' evalwazzjoni li jqabblu mal-mudell bażi, u proċess li jista' jiġi ripetut.",
      },
      {
        title: "AI Adoption Assessment (ġimgħa sa ġimagħtejn)",
        modules: [
          "Intervisti u reviżjoni tal-proċessi ewlenin.",
          "Rapport bil-miktub: fejn tidħol l-AI, l-iffrankar mistenni, ir-riskji u l-klassifikazzjoni skont l-Att tal-UE dwar l-AI għal kull użu.",
          "Pjan bl-ispejjeż u l-ambitu tekniku għall-applikazzjonijiet għall-kofinanzjament Malti.",
        ],
        outcome: "Pjan lest għad-deċiżjoni, bl-ispejjeż, ir-riskji u l-prijoritajiet.",
      },
    ],
    terms: [
      { label: "Fejn", text: "Fil-post tagħkom kullimkien f'Malta u f'Għawdex (l-ivvjaġġar inkluż), jew live online. Barra minn Malta, l-ivvjaġġar jitħallas bl-ispiża." },
      { label: "Lingwa", text: "Il-korsijiet jingħataw bl-Ingliż jew bit-Taljan." },
      { label: "Tagħmir", text: `Il-parteċipanti jġibu l-laptops tagħhom (16 GB RAM rakkomandati għall-pakketti tekniċi). Il-passi li jeħtieġu ħafna qawwa tal-ipproċessar jitħaddmu f'${VIRTUAL_ENV}, għalhekk ma hemmx bżonn ta' hardware speċjali.` },
      { label: "Inkluż", text: "Telefonata ta' preparazzjoni, il-materjal kollu, aċċess għall-ambjent virtwali matul il-kors, dokument ta' sommarju, ċertifikati ta' attendenza, u 30 jum ta' segwitu bl-email." },
      { label: "Data", text: "Id-data tagħkom tibqa' fl-UE, u fil-pakketti tal-private stack qatt ma toħroġ mill-magni tagħkom." },
      { label: "Kif tibbukkja", text: "Telefonata b'xejn ta' 30 minuta, imbagħad proposta bil-miktub bi prezz fiss fi żmien 3 ijiem tax-xogħol. Tista' tibdel id-data b'xejn sa 10 ijiem tax-xogħol qabel." },
      { label: "Fatturazzjoni", text: "Il-fatturi jinħarġu fuq in-numru tal-VAT tal-kumpanija. Il-klijenti Maltin iħallsu l-VAT Malti; għall-klijenti tan-negozju f'pajjiżi oħra tal-UE, il-VAT isegwi r-regoli tal-UE (normalment reverse charge għat-taħriġ online)." },
      { label: "Kofinanzjament", text: "Inħejju l-ambitu tekniku għall-applikazzjonijiet għall-kofinanzjament Malti. L-eliġibbiltà tiġi vverifikata każ b'każ mal-entità li tiffinanzja; l-approvazzjoni mhix garantita." },
    ],
    mailSubject: "Taħriġ fl-AI għall-kumpaniji",
  },
  {
    slug: "universities",
    published: true,
    eyebrow: "Taħriġ fl-AI għall-universitajiet u r-riċerka",
    cardTitle: "Universitajiet u riċerka",
    cardText:
      "L-istess programm prattiku, adattat għat-tagħlim u għar-riċerka, b'30% inqas mir-rati tal-kumpaniji.",
    cardPrice: "Minn €1,050 għal kull grupp",
    title: "Itgħallem kif taħdem l-AI moderna billi tibniha.",
    lead:
      "L-istess programm prattiku ta' livell professjonali li nwasslu lill-kumpaniji, adattat għat-tagħlim u għar-riċerka u offrut b'30% inqas mir-rati tal-kumpaniji. Studenti u riċerkaturi jitgħallmu kif taħdem l-AI moderna billi jibnuha, fuq infrastruttura li jikkontrollaw huma.",
    why:
      "L-istudenti jitilqu bi proġett li jaħdem, lest għall-portafoll tagħhom. Il-gruppi tar-riċerka jiksbu sistema privata tal-AI fejn id-data sensittiva jew mhux ippubblikata qatt ma toħroġ mill-magni tagħhom, u dan jiffaċilita l-approvazzjonijiet dwar il-protezzjoni tad-data u l-etika.",
    priceIntro:
      "Il-prezzijiet akkademiċi huma 30% inqas mir-rati tal-kumpaniji, għal universitajiet, kulleġġi, istituti tar-riċerka u proġetti ta' riċerka ffinanzjati. Il-prezzijiet huma għal kull grupp, mingħajr VAT.",
    priceColumns: ["Pakkett", "Tul", "Grupp", "Għal min hu", "Prezz akkademiku (mingħajr VAT)"],
    extraColumns: ["Rata tal-kumpaniji"],
    packages: [
      { name: "AI Literacy for Study and Research", duration: "Nofs jum (3.5 sigħat)", group: "sa 30", audience: "Studenti, riċerkaturi, staff akkademiku", price: "€1,050", extra: { a: "€1,500" } },
      { name: "Applied AI on Research Data", duration: "Jum (7 sigħat)", group: "sa 20", audience: "Riċerkaturi u studenti postgradwati fi kwalunkwe qasam", price: "€1,820", extra: { a: "€2,600" } },
      { name: "Private AI Stack Bootcamp", duration: "3 ijiem, jew 6 sessjonijiet ta' 3 sigħat matul semestru", group: "sa 16 (b'assistent tat-tagħlim)", audience: "Studenti tax-xjenza tal-kompjuter, tal-inġinerija u tax-xjenza tad-data", price: "€5,250", extra: { a: "€7,500" } },
      { name: "Custom Model Lab (avvanzat)", duration: "Jumejn", group: "sa 12", audience: "Studenti tal-Master's u tal-PhD, inġiniera tar-riċerka", price: "€4,060", extra: { a: "€5,800" } },
      { name: "Research Programme Partner", duration: "6 xhur", group: "grupp tar-riċerka wieħed", audience: "Gruppi li jeħtieġu sistema privata tal-AI u appoġġ kontinwu", price: "minn €2,450", extra: { a: "minn €3,500" } },
    ],
    priceNotes: [
      "Postijiet individwali f'edizzjoni miftuħa skedata: €175 għal kull persuna kuljum għall-istaff tal-istituzzjonijiet akkademiċi.",
      "Edizzjonijiet ripetuti: l-istess pakkett imwassal mill-ġdid fl-istess sena akkademika jieħu 15% skont.",
    ],
    curriculum: [
      {
        title: "AI Literacy for Study and Research (nofs jum)",
        modules: [
          "Kif jaħdmu l-mudelli tal-lingwa u għaliex jagħmlu żbalji b'tant kunfidenza.",
          "L-użu responsabbli tal-AI fl-istudju u fir-riċerka: ċitazzjonijiet, dikjarazzjoni, plaġjariżmu, riproduċibbiltà.",
          "Il-protezzjoni tad-data u l-etika tar-riċerka: x'jista' u x'ma jistax jitpoġġa f'servizz tal-AI online.",
          "L-Att tal-UE dwar l-AI u l-politiki tal-universitajiet dwar l-użu tal-AI.",
        ],
        outcome: "Mudell ta' dikjarazzjoni dwar l-użu tal-AI għal teżijiet u papers, u checklist għall-applikazzjonijiet tal-etika.",
      },
      {
        title: "Applied AI on Research Data (jum)",
        modules: [
          "Klassifikazzjoni u raggruppament ta' kollezzjonijiet kbar ta' test: stħarriġ, intervisti, letteratura.",
          "Skoperta tat-temi f'mijiet ta' papers fi qasam.",
          "Tweġibiet fuq librerija privata ta' papers, bi tweġibiet li jsemmu s-sorsi tagħhom.",
          "Stampi u dokumenti: estrazzjoni ta' test u data minn scans, figuri u tabelli.",
          "Kejl tal-kwalità tal-analiżi assistita mill-AI, biex tiflaħ għall-peer review.",
        ],
        outcome: "Analiżi li taħdem ta' dataset mill-qasam tagħhom u taqsima tal-metodu li jistgħu jadattaw.",
      },
      {
        title: "Private AI Stack Bootcamp (3 ijiem jew 6 sessjonijiet)",
        modules: [
          "Ġewwa l-mudell: tokens, embeddings, attention, id-daqs u l-kompressjoni tal-mudelli.",
          "Tħaddim lokali ta' mudelli miftuħa: l-għażla ta' mudell skont il-hardware u l-liċenzja, kejl tal-veloċità u tal-kwalità.",
          "Prompting u mudelli tar-raġunament: outputs strutturati, modi ta' raġunament, evalwazzjoni.",
          "Retrieval: sistema privata ta' tfittxija u ta' tweġibiet, bil-preċiżjoni mkejla.",
          "Aġenti u connectors: assistent li juża l-għodod permezz ta' connectors standard, inkluż wieħed miktub mill-istudenti.",
          `Adattament: fine-tuning ta' mudell fuq dataset li jibnu l-istudenti, f'${VIRTUAL_ENV}, imbagħad it-tħaddim tiegħu lokalment.`,
        ],
        outcome: "Proġett għall-portafoll, ċertifikat, u s-sistema kollha taħdem fuq il-laptop tagħhom. Għall-korsijiet li jagħtu krediti, il-valutazzjoni tista' titfassal flimkien mal-kap tal-kors.",
      },
      {
        title: "Custom Model Lab (jumejn, avvanzat)",
        modules: [
          "Il-metodi tat-taħriġ wara l-mudelli tal-lum: supervised fine-tuning, preference tuning, reinforcement learning b'rewards verifikabbli.",
          "Il-bini u d-dokumentazzjoni ta' dataset tat-taħriġ skont l-istandards tar-riċerka.",
          "Taħriġ, imbagħad evalwazzjoni kontra benchmarks, mudell bħala ġudikant u reviżjoni umana.",
          "Taħriġ ta' mudelli ta' embedding u ta' klassifikazzjoni apposta għal qasam tar-riċerka.",
          "Riproduċibbiltà: logging, model cards, liċenzji, il-qsim tar-riżultati.",
        ],
        outcome: "Mudell imħarreġ, rapport ta' evalwazzjoni u model card lesta għall-appendiċi ta' paper.",
      },
      {
        title: "Research Programme Partner (6 xhur)",
        modules: [
          "Workshop tal-bidu għall-grupp.",
          "Sistema privata tal-AI għad-data sensittiva jew mhux ippubblikata tal-grupp.",
          "Erba' sessjonijiet ta' sagħtejn ta' taħriġ imfassal apposta u office hours.",
        ],
        outcome: "Rapport bil-miktub li jista' jintuża bħala deliverable tal-proġett.",
      },
    ],
    terms: [
      { label: "Fejn", text: "Fil-kampus kullimkien f'Malta u f'Għawdex (l-ivvjaġġar inkluż) jew live online. L-istituzzjoni tipprovdi l-kamra u l-projector." },
      { label: "Lingwa", text: "Il-korsijiet jingħataw bl-Ingliż jew bit-Taljan." },
      { label: "Formati għas-semestru", text: "Il-Bootcamp u l-Custom Model Lab jistgħu jinqasmu f'sessjonijiet ta' kull ġimgħa ta' 3 sigħat, biex jaqblu mal-orarju tat-tagħlim." },
      { label: "Tagħmir", text: `Il-parteċipanti jġibu l-laptops tagħhom (16 GB RAM rakkomandati). Il-passi li jeħtieġu ħafna qawwa tal-ipproċessar jitħaddmu f'${VIRTUAL_ENV}.` },
      { label: "Proġetti ta' riċerka ffinanzjati", text: "Kwalunkwe pakkett jista' jinkiteb fi proposta ta' grant bħala kompitu ta' taħriġ jew ta' bini tal-kapaċità. Nipprovdu deskrizzjoni, linja tal-baġit u prezz li jibqa' fiss għat-tul kollu tal-proġett." },
      { label: "Data", text: "Id-data tar-riċerka tibqa' fl-UE, u fl-eżerċizzji tal-private stack qatt ma toħroġ mill-magni tal-parteċipanti, u dan jiffaċilita l-approvazzjonijiet dwar il-protezzjoni tad-data u l-etika." },
      { label: "Inkluż", text: "Telefonata ta' preparazzjoni mal-kap tal-kors, il-materjal kollu, aċċess għall-ambjent virtwali, ċertifikati, u 30 jum ta' segwitu bl-email." },
      { label: "Kif tibbukkja", text: "Telefonata b'xejn ta' 30 minuta, imbagħad proposta bil-miktub bi prezz fiss fi żmien 3 ijiem tax-xogħol. Il-fatturi jinħarġu lill-istituzzjoni, bil-VAT applikat skont l-istatus u l-pajjiż tagħha." },
    ],
    mailSubject: "Taħriġ fl-AI għall-universitajiet u r-riċerka",
  },
  {
    slug: "individuals",
    published: true,
    eyebrow: "Korsijiet tal-AI għall-individwi",
    cardTitle: "Studenti, riċerkaturi u dilettanti",
    cardText:
      "Korsijiet qosra u prattiċi għal min iħallas minn butu, b'60% inqas mir-rati tal-kumpaniji. Għażla privata 1-to-1 għal ħtiġijiet urġenti.",
    cardPrice: "Minn €100 għal kull persuna",
    title: "Ibni l-AI privata tiegħek, pass pass.",
    lead:
      "Korsijiet qosra u prattiċi għal studenti, riċerkaturi indipendenti, freelancers u dilettanti li jħallsu minn buthom. L-istess approċċ tat-tagħlim tal-programmi għall-kumpaniji, sillabu eħfef, u prezzijiet 60% inqas mir-rati tal-kumpaniji.",
    why:
      "Kull sessjoni tispiċċa b'xi ħaġa li taħdem fuq il-kompjuter tiegħek: mudell tal-AI lokali, assistent privat li jaf id-dokumenti tiegħek, u fl-aħħar mudell li adattajt int stess.",
    priceIntro:
      "Tliet korsijiet li tista' tieħu wieħed wieħed jew bħala mixja sħiħa. Il-prezzijiet huma għal kull persuna, 60% inqas mir-rata tal-kumpaniji ta' €250 għal kull persuna kuljum.",
    priceColumns: ["Kors", "Tul", "Format", "Rekwiżiti", "Edizzjoni tal-grupp (mingħajr VAT)"],
    extraColumns: [
      "Edizzjoni tal-grupp (inkluż 18% VAT)",
      "Privat 1-to-1, +50% (mingħajr VAT)",
      "Privat 1-to-1, +50% (inkluż 18% VAT)",
    ],
    packages: [
      { name: "AI Starter", duration: "2 serati ta' 3 sigħat", group: "Live online", audience: "Xejn", price: "€100", extra: { a: "€118", b: "€150", c: "€177" } },
      { name: "Build Your Private Assistant", duration: "Jumejn (weekend)", group: "Live online jew f'Għawdex", audience: "AI Starter jew familjarità bażika mal-kompjuter", price: "€200", extra: { a: "€236", b: "€300", c: "€354" } },
      { name: "Fine-Tune Your First Model", duration: "Jum", group: "Live online jew f'Għawdex", audience: "Build Your Private Assistant, Python bażiku", price: "€100", extra: { a: "€118", b: "€150", c: "€177" } },
      { name: "Il-mixja sħiħa (it-tlieta)", duration: "5 sessjonijiet", group: "Kif imsemmi hawn fuq", audience: "Xejn", price: "€360", extra: { a: "€425", b: "€540", c: "€637" } },
    ],
    priceNotes: [
      "L-edizzjonijiet isiru b'minimu ta' 8 u massimu ta' 14-il parteċipant. Jekk edizzjoni ma tilħaqx it-8, tingħata rimborż sħiħ jew post fl-edizzjoni ta' wara.",
      "Għandek bżonnu qabel? Jekk it-taħriġ tiegħek huwa urġenti u ma tistax tistenna l-edizzjoni tal-grupp ta' wara, tista' tibbukkja kwalunkwe kors bħala kors privat u personalizzat 1-to-1 fid-dati li jaqblu miegħek, b'żieda ta' 50% fuq il-prezz elenkat (ara l-prezzijiet privati fit-tabella). Il-kors privat isegwi l-istess sillabu, adattat għall-għanijiet u għall-materjal tiegħek.",
    ],
    curriculum: [
      {
        title: "AI Starter (2 serati)",
        modules: [
          "X'inhu mudell tal-lingwa u kif jipproduċi t-test, mingħajr matematika.",
          "Kitba ta' prompts li jagħtu riżultati affidabbli, u kif tagħraf meta t-tweġiba hija żbaljata.",
          "It-tħaddim tal-ewwel mudell miftuħ tal-AI fuq il-laptop tiegħek, mingħajr kont u mingħajr ma tintbagħat data x'imkien.",
        ],
        outcome: "Mudell tal-AI li jaħdem lokalment u sett personali ta' prompts.",
      },
      {
        title: "Build Your Private Assistant (weekend)",
        modules: [
          "L-għażla tal-mudell miftuħ it-tajjeb għall-kompjuter tiegħek.",
          "Interface taċ-chat faċli għall-mudell lokali tiegħek.",
          "Mistoqsijiet lin-noti, lill-PDFs u lill-papers tiegħek, bi tweġibiet li jsemmu s-sors.",
          "Għodod għall-assistent: qari ta' fajls, tfittxija, connectors standard għal applikazzjonijiet oħra.",
        ],
        outcome: "Assistent privat li jaf id-dokumenti tiegħek u jaħdem kollu kemm hu fuq il-magna tiegħek.",
      },
      {
        title: "Fine-Tune Your First Model (jum)",
        modules: [
          "Meta t-tagħlim ta' mudell b'eżempji jirbaħ fuq prompt aħjar.",
          "Il-bini ta' dataset żgħir ta' 100 sa 300 eżempju fuq suġġett li jinteressak.",
          `It-taħriġ tal-mudell f'${VIRTUAL_ENV}.`,
          "Iġġib il-mudell imħarreġ tiegħek id-dar u tħaddmu lokalment.",
        ],
        outcome: "Il-mudell adattat tiegħek u ċertifikat tat-tlestija.",
      },
    ],
    terms: [
      { label: "Lingwa", text: "Il-korsijiet jingħataw bl-Ingliż jew bit-Taljan." },
      { label: "Studenti", text: "Ġib karta tal-istudent valida għall-ewwel sessjoni; ma japplika l-ebda skont żejjed, għax ir-rata għall-istudenti diġà hija inkluża fil-prezz." },
      { label: "Bukkjar", text: "Irriserva post bl-email u ħallas bi trasferiment bankarju fi żmien 7 ijiem. Tista' tikkanċella sa 10 ijiem qabel il-bidu u tieħu rimborż sħiħ; wara dan, il-post tiegħek jista' jgħaddi għall-edizzjoni ta' wara." },
    ],
    termsTable: {
      caption: "Kif tħallas: bħala persuna privata jew permezz tan-negozju tiegħek jekk taħdem għal rasek.",
      head: ["Int", "X'neħtieġu għall-fattura", "VAT fuq il-fattura"],
      rows: [
        ["Persuna privata residenti f'Malta", "Isem sħiħ, indirizz, numru tal-karta tal-identità Maltija (in-numru ta' identifikazzjoni tat-taxxa tiegħek)", "VAT Malti miżjud mal-prezz"],
        ["Persuna privata residenti x'imkien ieħor", "Isem sħiħ, indirizz, numru tal-passaport jew tal-karta tal-identità nazzjonali", "VAT skont kif jitlob il-pajjiż ta' residenza tiegħek"],
        ["Taħdem għal rasek jew freelancer f'Malta", "Isem tan-negozju, indirizz, numru tal-VAT Malti (MT segwit minn 8 ċifri)", "VAT Malti miżjud; jekk int reġistrat taħt l-Artikolu 10 tista' tirkuprah"],
        ["Taħdem għal rasek f'pajjiż ieħor tal-UE", "Isem tan-negozju, indirizz, numru tal-VAT tal-UE (ivverifikat fuq VIES)", "Normalment reverse charge għall-edizzjonijiet online; VAT Malti għall-edizzjonijiet li jsiru f'Malta"],
      ],
    },
    mailSubject: "Kors tal-AI għall-individwi",
  },
];

export const publishedOffersMt = trainingOffersMt.filter((o) => o.published);
