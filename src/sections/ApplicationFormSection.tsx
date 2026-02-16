import { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Clock, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ApplicationFormSectionProps {
  spotsAvailable: boolean;
  onSubmitSuccess: () => void;
  id?: string;
}

interface FormData {
  contact_name: string;
  email: string;
  phone: string;
  company_name: string;
  pain_points: string;
  gdpr_consent: boolean;
}

const initialFormData: FormData = {
  contact_name: '',
  email: '',
  phone: '',
  company_name: '',
  pain_points: '',
  gdpr_consent: false,
};

const steps = [
  { number: '1', text: 'Completează formularul' },
  { number: '2', text: 'Răspuns în 48 de ore' },
  { number: '3', text: 'Apel scurt (15 min)' },
  { number: '4', text: 'Începem colaborarea' },
];

const successTimeline = [
  { label: 'Analiză', time: '24-48h' },
  { label: 'Apel', time: '15 min' },
  { label: 'Start Blueprint', time: 'Săptămâna 1' },
];

export function ApplicationFormSection({ spotsAvailable, onSubmitSuccess, id = 'aplica' }: ApplicationFormSectionProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from('pilot_applications')
        .insert({
          contact_name: formData.contact_name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company_name,
          pain_points: formData.pain_points,
          gdpr_consent: formData.gdpr_consent,
        });

      if (insertError) throw insertError;

      // Fire-and-forget email notification — don't block UX if it fails
      supabase.functions.invoke('notify-pilot-application', {
        body: {
          contact_name: formData.contact_name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company_name,
          pain_points: formData.pain_points,
        },
      }).catch(err => console.error('Email notification failed:', err));

      setSubmitted(true);
      onSubmitSuccess();
    } catch (err) {
      setError('A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi la contact@ezfuture.ai');
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section-label">APLICĂ ACUM</span>
          <h2 className="section-title">Înscrie-te în Programul Pilot</h2>
          <p className="section-desc">
            Durează sub 2 minute să te înscrii. <span className="underline text-primary font-semibold">Fără angajament</span>. Primești un răspuns în 48 de ore.
          </p>
        </div>

        {/* 4-step progress bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              <span className="text-sm font-medium text-gray-700">{step.text}</span>
            </div>
          ))}
        </div>

        {/* Spots full state */}
        {!spotsAvailable && !submitted ? (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-10 text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Toate locurile au fost ocupate</h3>
            <p className="text-gray-600">
              Programul pilot a fost completat. Contactează-ne la{' '}
              <a href="mailto:contact@ezfuture.ai" className="text-primary font-semibold hover:underline">
                contact@ezfuture.ai
              </a>{' '}
              pentru următoarele oportunități.
            </p>
          </div>

        ) : submitted ? (
          /* Success state */
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-10 text-center">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Locul tău e rezervat!</h3>

            {/* 3-step timeline */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 mb-8">
              {successTimeline.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && (
                    <ArrowRight className="hidden sm:block w-5 h-5 text-gray-300" />
                  )}
                  <div className="text-center min-w-[100px]">
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">({item.time})</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              Dacă nu primești răspuns, scrie-ne la{' '}
              <a href="mailto:contact@ezfuture.ai" className="text-primary font-semibold hover:underline">
                contact@ezfuture.ai
              </a>
            </p>
          </div>

        ) : (
          /* Form card */
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-soft">
            {/* Form title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
              Vreau planul meu de automatizare
            </h3>

            {/* Red notice */}
            <p className="text-sm text-red-600 italic text-center mb-8">
              Doar 10 locuri în Programul Pilot cu 50% reducere. Aplicările sunt procesate în ordinea primirii.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Row 1: Name + Email */}
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume și prenume *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Mihai Popescu"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email profesional *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="mihai@companie.ro"
                  />
                </div>
              </div>

              {/* Row 2: Phone + CUI */}
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Număr de telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="07xx xxx xxx"
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-2">
                    CUI companie *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="RO12345678"
                  />
                </div>
              </div>

              {/* Full width textarea */}
              <div className="mb-5">
                <label htmlFor="pain_points" className="block text-sm font-medium text-gray-700 mb-2">
                  Descrie în câteva propoziții: Ce procese vă consumă cel mai mult timp? *
                </label>
                <textarea
                  id="pain_points"
                  name="pain_points"
                  required
                  rows={4}
                  value={formData.pain_points}
                  onChange={handleChange}
                  className="textarea-field"
                  placeholder="Descrie pe scurt ce procese repetitive consumă cele mai multe resurse în compania pe care o conduci."
                />
              </div>

              {/* GDPR consent */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr_consent"
                    checked={formData.gdpr_consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded-lg border-2 border-gray-300 text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-gray-600">
                    Sunt de acord cu prelucrarea datelor personale conform{' '}
                    <a href="/legal/confidentialitate.html" target="_blank" className="text-primary hover:underline">
                      Politicii de Confidențialitate
                    </a>
                    . *
                  </span>
                </label>
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting}
                className={`btn-primary w-full text-lg py-4 justify-center ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Se trimite...
                  </>
                ) : (
                  <>
                    Vreau Planul Meu de Automatizare
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-5 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Date securizate
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Fără spam
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Răspuns în 48h
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
