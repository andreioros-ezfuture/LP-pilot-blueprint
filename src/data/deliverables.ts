import type { Deliverable } from '../types';

export const deliverables: Deliverable[] = [
  {
    number: 1,
    title: 'Carduri de Automatizare',
    description:
      'Descriere AS IS / TO BE, integrări necesare, calcul ROI, preț fix și asumat prin contract pentru BUILD (dacă implementezi cu noi), timeline și garanții incluse.',
    detailBox: [
      'Cardurile de Automatizare EZ Future AI nu sunt niște "cartonașe" cu design frumos, care-ți spun în cuvinte elocvente "că apa e udă".',
      'Sunt documente de lucru care includ minim 5 automatizări personalizate, mapate riguros la nivel de proces.',
      'Pe baza lor pot fi construite soluții tehnice eficiente și sigure în etapa de implementare.',
      'Și pot fi folosite atât de oamenii tehnici, cât și de stakeholderi (owners, board members sau executivi care trebuie să ia deciziile de business chiar dacă nu sunt neapărat oameni tehnici).',
    ],
  },
  {
    number: 2,
    title: 'Plan de Implementare',
    description:
      'Ordinea recomandată, dependențe, timeline pe 90 de zile și 12 luni, ROI agregat pe etape.',
  },
  {
    number: 3,
    title: 'Process Map AS IS',
    description:
      'Diagrame vizuale ale proceselor actuale: pași, decizii, excepții și bottleneck-uri.',
  },
  {
    number: 4,
    title: 'Process Map TO BE',
    description:
      'Procesele automatizate: ce face automatizarea și unde rămâne intervenția umană.',
  },
  {
    number: 5,
    title: 'Documentație Procese AS IS',
    description:
      'Descriere detaliată: pași, responsabili, frecvență, volume, inputuri, outputuri, excepții.',
  },
  {
    number: 6,
    title: 'Decision Log',
    description:
      'Registru al deciziilor: ce am ales, de ce, ce alternative am exclus și pe ce bază.',
  },
  {
    number: 7,
    title: 'Matrice RACI',
    description:
      'Cine e Responsible, Accountable, Consulted și Informed pentru fiecare automatizare.',
  },
  {
    number: 8,
    title: 'Evaluare Impact Schimbare',
    description:
      'Analiza impactului: ce se schimbă, cine e afectat, training necesar, riscuri de rezistență.',
  },
  {
    number: 9,
    title: 'Plan de Adopție',
    description:
      'Strategie de implementare: comunicare, training, timeline de tranziție, indicatori de succes.',
  },
  {
    number: 10,
    title: 'Ghid de Excepții',
    description:
      'Scenarii de excepție documentate: ce se întâmplă când ceva nu merge și cum tratează automatizarea fiecare caz.',
  },
];
