export interface UseCase {
  slug: string;
  category: string;
  cardTitle: string;
  cardDescription: string;
  cardLoss: string;
  cardConsequence: string;
  heroTitle: string;
  heroHighlight: string;
  savingsLine1: string;
  savingsLine2: string;
  execSummaryTitle: string;
  execSummarySubtitle: string;
  paragraphs: string[];
}

export interface Deliverable {
  number: number;
  title: string;
  description: string;
  detailBox?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  date: string;
  photo?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  background: string[];
  testimonial: Testimonial;
  linkedIn: string;
  photo: string;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  cui: string;
  processes: string;
  gdprConsent: boolean;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'spots-full';
