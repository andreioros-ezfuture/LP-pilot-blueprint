import type { Deliverable } from '../types';

export const deliverables: Deliverable[] = [
  {
    number: 1,
    title: 'Carduri de Automatizare',
    description:
      'Descriere AS IS / TO BE, integrari necesare, calcul ROI, pret fix si asumat prin contract pentru BUILD (daca implementezi cu noi), timeline si garantii incluse.',
    detailBox: [
      'Cardurile de Automatizare EZ Future AI nu sunt niste "cartonase" cu design frumos, care-ti spun in cuvinte elocvente "ca apa e uda".',
      'Sunt documente de lucru care includ minim 5 automatizari personalizate, mapate riguros la nivel de proces.',
      'Pe baza lor pot fi construite solutii tehnice eficiente si sigure in etapa de implementare.',
      'Si pot fi folosite atat de oamenii tehnici, cat si de stakeholderi (owners, board members sau executivi care trebuie sa ia deciziile de business chiar daca nu sunt neaparat oameni tehnici).',
    ],
  },
  {
    number: 2,
    title: 'Plan de Implementare',
    description:
      'Ordinea recomandata, dependinte, timeline pe 90 de zile si 12 luni, ROI agregat pe etape.',
  },
  {
    number: 3,
    title: 'Process Map AS IS',
    description:
      'Diagrame vizuale ale proceselor actuale: pasi, decizii, exceptii si bottleneck-uri.',
  },
  {
    number: 4,
    title: 'Process Map TO BE',
    description:
      'Procesele automatizate: ce face automatizarea si unde ramane interventia umana.',
  },
  {
    number: 5,
    title: 'Documentatie Procese AS IS',
    description:
      'Descriere detaliata: pasi, responsabili, frecventa, volume, inputuri, outputuri, exceptii.',
  },
  {
    number: 6,
    title: 'Decision Log',
    description:
      'Registru al deciziilor: ce am ales, de ce, ce alternative am exclus si pe ce baza.',
  },
  {
    number: 7,
    title: 'Matrice RACI',
    description:
      'Cine e Responsible, Accountable, Consulted si Informed pentru fiecare automatizare.',
  },
  {
    number: 8,
    title: 'Evaluare Impact Schimbare',
    description:
      'Analiza impactului: ce se schimba, cine e afectat, training necesar, riscuri de rezistenta.',
  },
  {
    number: 9,
    title: 'Plan de Adoptie',
    description:
      'Strategie de implementare: comunicare, training, timeline de tranzitie, indicatori de succes.',
  },
  {
    number: 10,
    title: 'Ghid de Exceptii',
    description:
      'Scenarii de exceptie documentate: ce se intampla cand ceva nu merge si cum trateaza automatizarea fiecare caz.',
  },
];
