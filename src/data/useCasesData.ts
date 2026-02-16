export interface UseCaseData {
  slug: string;
  category: string;
  heroTitle: string;
  heroHighlight: string;
  savingsLine1: string;
  savingsLine2?: string;
  execSummary: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  htmlFile: string;
}

export const useCases: UseCaseData[] = [
  {
    slug: 'vanzari-marketing',
    category: 'Vânzări & Marketing',
    heroTitle: 'O firmă de servicii IT B2B (8 mil. \u20AC)',
    heroHighlight: 'care face follow-up manual\nși pierde oportunități în vânzări',
    savingsLine1: 'Poate economisi 49.800 \u20AC/an',
    savingsLine2: 'prin această automatizare\nidentificată în câteva minute',
    execSummary: {
      title: 'Firmă de servicii IT B2B',
      subtitle: '8 mil. \u20AC cifră de afaceri, 25 de angajați',
      paragraphs: [
        'Trimit lunar 15-20 de oferte comerciale personalizate către lead-uri generate din website, LinkedIn și recomandări.',
        'Fiecare ofertă este creată manual: se copiază un template, se preiau datele clientului din CRM, prețurile sunt calculate în spreadsheet-uri, documentul este completat, exportat PDF și trimis pe email.',
        'Procesul durează 45-60 de minute per ofertă, apar erori de preț sau date, iar în perioadele aglomerate trimiterea întârzie cu zile, ceea ce duce la pierderea unor oportunități comerciale.',
        'Astfel, echipa de vânzări petrece mai mult timp pregătind documente decât discutând cu clienții. Rezultă costul direct al procesului manual ineficient și oportunități pierdute semnificative.',
      ],
    },
    htmlFile: '/html/card-automatizare-lead-intake-follow-up-inteligent-ec067beb-0daf-4e4e-89c6-35129952c396.html',
  },
  {
    slug: 'customer-support',
    category: 'Customer Support',
    heroTitle: 'Un magazin online\nde echipamente sportive (3.5 mil. \u20AC)',
    heroHighlight: 'răspunde manual la întrebări repetitive\nși pierde lunar 128 de ore',
    savingsLine1: 'Ar economisi 92.160 \u20AC/an și',
    savingsLine2: 'ar evita peste 100 de recenzii negative\ncu această automatizare',
    execSummary: {
      title: 'Magazin online e-commerce',
      subtitle: '3,5 mil. \u20AC cifră de afaceri, 12 angajați',
      paragraphs: [
        'Gestionează zilnic 30-40 de mesaje de la clienți prin email, WhatsApp și Instagram, majoritatea fiind întrebări repetitive despre status comenzi, retururi sau disponibilitate produse.',
        'Pentru fiecare solicitare, echipa verifică manual comanda în Shopify, caută statusul livrării la curier și redactează răspunsul în Freshdesk, chiar dacă întrebările sunt aceleași.',
        'Ca rezultat, timpul de răspuns crește, primesc peste 10 recenzii negative/lună, iar solicitările sensibile (reclamații, rambursări, ANPC etc) ajung să fie gestionate cu întârziere.',
        'Astfel, echipa de suport rămâne blocată în activități repetitive, iar experiența clienților și percepția asupra brandului sunt impactate negativ. Plus costul direct al unui proces ineficient.',
      ],
    },
    htmlFile: '/html/card-automatizare-r-spunsuri-suport-client-5fa20395-9913-4b3b-8e41-9509f3a98058.html',
  },
  {
    slug: 'operational-delivery',
    category: 'Operational-Delivery',
    heroTitle: 'O companie de distribuție B2B (6 mil. \u20AC)',
    heroHighlight: 'care a pierdut un client de 50.000 \u20AC/an\npentru că urmărește livrările manual',
    savingsLine1: 'Ar putea să economisească',
    savingsLine2: '127 de ore/lună și 91.440 \u20AC/an\ncu această automatizare',
    execSummary: {
      title: 'Companie de distribuție B2B',
      subtitle: '6 mil. \u20AC cifră de afaceri, 28 de angajați',
      paragraphs: [
        'Livrează lunar materiale de birou către +200 de clienți corporate. Folosesc ERP-ul intern, Excel pentru tracking și verifică statusul comenzilor pe site-urile a 2 curieri.',
        'Pentru fiecare dintre cele 40-60 de livrări/zi echipa verifică manual AWB-urile, copiază statusul în Excel și notifică clienții doar când apar probleme sau aceștia întreabă.',
        'Se pierd ore întregi pe verificări repetitive, iar clienții sună echipa de vânzări să întrebe \'unde e coletul meu?\' Au pierdut și un contract de 50.000 \u20AC/an pentru că 3 livrări consecutive au fost întârziate și nimeni nu i-a comunicat proactiv clientului. A aflat singur și a schimbat furnizorul.',
        'Firma pierde timp zi de zi, pierde încrederea clienților existenți și ratează contracte importante - doar acel contract pierdut înseamnă aproape 1% din cifra de afaceri anuală.',
      ],
    },
    htmlFile: '/html/card-tracking-automat-awb-uri-i-notific-ri-clien-i-b8b1a5d8-89e7-47fa-a3d1-5cb749af7edf.html',
  },
  {
    slug: 'hr-administrativ',
    category: 'HR & Administrativ',
    heroTitle: 'O agenție de digital marketing (5 mil. \u20AC)',
    heroHighlight: 'care programează manual concediile\npentru 45 de angajați',
    savingsLine1: 'Poate reduce timpul de aprobare',
    savingsLine2: 'de la 1-2 zile la câteva minute/cerere,\nfără erori de suprapunere',
    execSummary: {
      title: 'Agenție de digital marketing',
      subtitle: '5 mil. \u20AC cifră de afaceri, 45 de angajați',
      paragraphs: [
        'Cererile de concediu vin pe email, Slack sau chiar verbal. HR-ul centralizează manual solicitările și verifică zilele disponibile în Excel + suprapunerile din Google Calendar înainte de aprobare.',
        'Pentru fiecare cerere se calculează manual zilele rămase, se verifică dacă mai sunt colegi absenți în aceeași perioadă și se așteaptă aprobarea team lead-ului. Actualizarea se face apoi în mai multe locuri separate, iar procesul poate dura 1-2 zile.',
        'Periodic apar erori de calcul, concedii suprapuse și situații în care echipele rămân temporar fără oameni cheie în momente aglomerate. Asta afectează livrarea proiectelor și relația cu clienții.',
        'Se pierde timp pe coordonare administrativă, aprobările întârziate creează frustrare în echipă, iar lipsa unui proces clar începe să erodeze moralul și predictibilitatea internă.',
      ],
    },
    htmlFile: '/html/card-automatizare-cereri-de-concediu-23d16d7f-4270-4581-a572-1b0435e647f6.html',
  },
  {
    slug: 'management-decision',
    category: 'Management & Decision Intelligence',
    heroTitle: 'Un furnizor de echipamente\nindustriale (10 mil. \u20AC)',
    heroHighlight: 'care descoperă diferențe de 200.000 \u20AC\nfață de target abia la final de trimestru',
    savingsLine1: 'Un dashboard cu date în timp real',
    savingsLine2: 'pentru directorul de vânzări\nar rezolva problema',
    execSummary: {
      title: 'Furnizor de echipamente industriale',
      subtitle: '10 mil. \u20AC cifră de afaceri, 80 de angajați',
      paragraphs: [
        'Performanța vânzărilor este urmărită prin rapoarte generate manual din CRM, exportate în Excel și analizate săptămânal. Dar informația de vineri seara devine irelevantă până luni dimineața.',
        'Durează câteva ore pentru ca datele să fie exportate, consolidate și comparate manual cu targeturile. Între timp, deal-urile avansează sau se blochează fără să fie vizibile imediat.',
        'Astfel, directorul de vânzări află prea târziu când scade performanța sau pipeline-ul devine insuficient. Iar impactul financiar este deja produs înainte să poată interveni.',
        'Scade predictibilitatea veniturilor, iar controlul asupra performanței comerciale devine limitat în mod semnificativ. Costul de oportunitate poate ajunge la procente întregi din cifra de afaceri.',
      ],
    },
    htmlFile: '/html/card-dashboard-raportare-automat-v-nz-ri-d301f903-b322-482f-bb70-d462c6219a8a.html',
  },
  {
    slug: 'financiar-contabilitate',
    category: 'Financiar & Contabilitate',
    heroTitle: 'Un producător de mobilă (7 mil. \u20AC)',
    heroHighlight: 'care pierde 40.000 \u20AC/an\ndin reconciliere bancară manuală',
    savingsLine1: 'Poate reduce considerabil riscul',
    savingsLine2: 'de pierderi cauzate de erori umane\n- și de 4 ori timpul de verificare',
    execSummary: {
      title: 'Producător de mobilă',
      subtitle: '7 mil. \u20AC cifră de afaceri, 65 de angajați',
      paragraphs: [
        'Compania are aproximativ 200 de clienți și emite în jur de 400 de facturi pe lună. Reconcilierea bancară se face manual, prin descărcarea extraselor și compararea lor cu facturile din Saga.',
        'Pentru fiecare încasare sunt verificate rând cu rând sumele, plătitorii și detaliile tranzacției. Cazurile fără referință clară necesită investigații prin email sau telefon, iar tot procesul consumă zilnic câteva ore. Riscul de erori umane devine structural.',
        'Drept urmare, unele facturi pot fi marcate greșit ca încasate sau restanțele sunt identificate târziu, ceea ce duce la întârzieri în încasări și pierderi financiare de mii de euro/lună.',
        'Astfel, un proces critic cu impact economic și fiscal direct ajunge să depindă de 2 persoane, care, în loc să trateze doar cazurile dificile, pierd timp pe situații repetitive ce pot fi automatizate.',
      ],
    },
    htmlFile: '/html/card-reconciliere-bancar-automat-multi-banc-7a4216a2-531c-4c35-86f1-b42185f12ed8.html',
  },
];
