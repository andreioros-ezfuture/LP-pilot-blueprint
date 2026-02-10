import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, FileText, Phone, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ApplicationFormSectionProps {
  spotsAvailable: boolean;
  onSubmitSuccess: () => void;
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

export function ApplicationFormSection({ spotsAvailable, onSubmitSuccess }: ApplicationFormSectionProps) {
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
      setError('A aparut o eroare. Te rugam sa incerci din nou sau sa ne contactezi la contact@ezfuture.ai');
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="aplica" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Aplica Acum</span>
          <h2 className="section-title">Inscrie-te in programul pilot</h2>
          <p className="section-desc">Dureaza sub 2 minute. Primesti un raspuns in 48 de ore.</p>
        </div>

        {/* How to apply steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { step: '1', icon: FileText, text: 'Completeaza formularul' },
            { step: '2', icon: Clock, text: 'Raspuns in 48 de ore' },
            { step: '3', icon: Phone, text: 'Call scurt (15 min)' },
            { step: '4', icon: ArrowRight, text: 'Pornim Kick-off-ul' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                {item.step}
              </div>
              <item.icon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
              <span className="text-xs font-medium text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {!spotsAvailable && !submitted ? (
            <div className="bg-gray-100 border-2 border-gray-200 rounded-3xl p-10 text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Toate locurile au fost ocupate</h3>
              <p className="text-gray-600">
                Programul pilot a fost completat. Contacteaza-ne la{' '}
                <a href="mailto:contact@ezfuture.ai" className="text-primary font-semibold hover:underline">
                  contact@ezfuture.ai
                </a>{' '}
                pentru urmatoarele oportunitati.
              </p>
            </div>
          ) : submitted ? (
            <div className="bg-success/5 border-2 border-success/20 rounded-3xl p-10 text-center">
              <CheckCircle className="w-14 h-14 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Locul tau a fost rezervat!</h3>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Multumim pentru interes. Analizam cererea ta si revenim cu un raspuns in maximum 48 de ore.
              </p>
              <p className="text-sm text-gray-500">
                Daca ai intrebari, scrie-ne la{' '}
                <a href="mailto:contact@ezfuture.ai" className="text-primary font-semibold hover:underline">
                  contact@ezfuture.ai
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-10 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Vreau propunerile mele de automatizare</h3>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume si prenume *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ion Popescu"
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
                    placeholder="ion@companie.ro"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numar de telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="07XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Numele companiei *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Compania SRL"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="pain_points" className="block text-sm font-medium text-gray-700 mb-2">
                  Ce procese va consuma cel mai mult timp? *
                </label>
                <textarea
                  id="pain_points"
                  name="pain_points"
                  required
                  rows={4}
                  value={formData.pain_points}
                  onChange={handleChange}
                  className="textarea-field"
                  placeholder="Descrie procesele repetitive care consuma cele mai multe resurse din echipa ta..."
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
                      Politicii de Confidentialitate
                    </a>
                    . *
                  </span>
                </label>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

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
                    Vreau Propunerile Mele de Automatizare
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
