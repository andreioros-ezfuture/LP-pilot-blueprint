import { type FormEvent } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Button from '../ui/Button';
import SpotsCounter from '../ui/SpotsCounter';
import { useAppContext } from '../../AppContext';
import { validateEmail, validatePhone, validateRequired, validateGdpr } from '../../lib/validators';
import { supabase } from '../../lib/supabase';
import { trackFormSubmission } from '../../lib/tracking';
import type { FormValues } from '../../types';

interface ApplicationFormSectionProps {
  id?: string;
}

/* ------------------------------------------------------------------ */
/*  Inline sub-components (ProgressSteps, TrustBadge, form fields)    */
/* ------------------------------------------------------------------ */

function ProgressSteps() {
  const steps = [
    'Completeaza formularul',
    'Raspuns in 48 de ore',
    'Apel scurt (15 min)',
    'Incepem colaborarea',
  ];

  return (
    <ol className="space-y-4 mt-6">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-xs font-bold shrink-0 mt-0.5">
            {i + 1}
          </span>
          <span className="text-body text-sm">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function TrustBadgeItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted text-xs">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      <TrustBadgeItem
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
        label="Date securizate"
      />
      <TrustBadgeItem
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        }
        label="Fara spam"
      />
      <TrustBadgeItem
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        label="Raspuns in 48h"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Form field helpers                                                */
/* ------------------------------------------------------------------ */

interface InputFieldProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (name: keyof FormValues, value: string) => void;
}

function InputField({ label, name, type = 'text', placeholder, value, error, onChange }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary mb-1.5">
        {label} <span className="text-accent">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full px-4 py-3 rounded-lg border text-sm text-primary placeholder:text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors duration-200 ${
          error ? 'border-danger' : 'border-border'
        }`}
      />
      {error && <p className="text-danger text-xs mt-1">{error}</p>}
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  name: keyof FormValues;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (name: keyof FormValues, value: string) => void;
}

function TextareaField({ label, name, placeholder, value, error, onChange }: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-primary mb-1.5">
        {label} <span className="text-accent">*</span>
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        rows={4}
        className={`w-full px-4 py-3 rounded-lg border text-sm text-primary placeholder:text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors duration-200 resize-none ${
          error ? 'border-danger' : 'border-border'
        }`}
      />
      {error && <p className="text-danger text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */

export default function ApplicationFormSection({ id = 'aplica' }: ApplicationFormSectionProps) {
  const { spots, decrementSpot, form, setFormValues, setFormStatus, setFormErrors } = useAppContext();

  const handleFieldChange = (name: keyof FormValues, value: string | boolean) => {
    setFormValues({ [name]: value });
    // Clear error on change
    if (form.errors[name]) {
      setFormErrors({ ...form.errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const errors: Partial<Record<keyof FormValues, string>> = {};

    const nameError = validateRequired(form.values.name, 'Nume si prenume');
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(form.values.email);
    if (emailError) errors.email = emailError;

    const phoneError = validatePhone(form.values.phone);
    if (phoneError) errors.phone = phoneError;

    const cuiError = validateRequired(form.values.cui, 'CUI companie');
    if (cuiError) errors.cui = cuiError;

    const processesError = validateRequired(form.values.processes, 'Descrierea proceselor');
    if (processesError) errors.processes = processesError;

    const gdprError = validateGdpr(form.values.gdprConsent);
    if (gdprError) errors.gdprConsent = gdprError;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Submit to Supabase
    setFormStatus('submitting');

    try {
      const { error: insertError } = await supabase
        .from('pilot_applications')
        .insert({
          contact_name: form.values.name.trim(),
          email: form.values.email.trim(),
          phone: form.values.phone.trim(),
          company_name: form.values.cui.trim(),
          pain_points: form.values.processes.trim(),
          gdpr_consent: form.values.gdprConsent,
        });

      if (insertError) throw insertError;

      // Fire-and-forget email notification
      supabase.functions.invoke('notify-pilot-application', {
        body: {
          contact_name: form.values.name.trim(),
          email: form.values.email.trim(),
          phone: form.values.phone.trim(),
          company_name: form.values.cui.trim(),
          pain_points: form.values.processes.trim(),
        },
      }).catch(err => console.error('Email notification failed:', err));

      setFormStatus('success');
      decrementSpot();
      trackFormSubmission();
    } catch (err) {
      console.error('Submission error:', err);
      setFormStatus('error');
    }
  };

  /* ---- Spots Full State ---- */
  if (spots.remaining === 0 && form.status !== 'success') {
    return (
      <SectionWrapper id={id} variant="white">
        <FadeInOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Toate locurile au fost ocupate
            </h2>
            <p className="text-body mt-4 text-lg">
              Programul pilot a fost completat. Contacteaza-ne la{' '}
              <a href="mailto:contact@ezfuture.ai" className="text-accent hover:underline font-semibold">
                contact@ezfuture.ai
              </a>{' '}
              pentru urmatoarele oportunitati.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>
    );
  }

  /* ---- Success State ---- */
  if (form.status === 'success') {
    return (
      <SectionWrapper id={id} variant="white">
        <FadeInOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success icon */}
            <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Locul tau e rezervat!
            </h2>

            {/* Timeline */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <div className="bg-light-gray rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-muted uppercase tracking-wide">Analiza</p>
                <p className="font-semibold text-primary text-sm">24-48h</p>
              </div>
              <svg className="w-5 h-5 text-muted hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <div className="bg-light-gray rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-muted uppercase tracking-wide">Apel</p>
                <p className="font-semibold text-primary text-sm">15 min</p>
              </div>
              <svg className="w-5 h-5 text-muted hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <div className="bg-light-gray rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-muted uppercase tracking-wide">Start Blueprint</p>
                <p className="font-semibold text-primary text-sm">Saptamana 1</p>
              </div>
            </div>

            <p className="text-muted text-sm mt-8">
              Daca nu primesti raspuns, scrie-ne la{' '}
              <a href="mailto:contact@ezfuture.ai" className="text-accent hover:underline">
                contact@ezfuture.ai
              </a>
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>
    );
  }

  /* ---- Default / Form State ---- */
  return (
    <SectionWrapper id={id} variant="white">
      <div className="grid md:grid-cols-5 gap-8 md:gap-16">
        {/* Left Column */}
        <div className="md:col-span-2">
          <FadeInOnScroll>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">
              APLICA ACUM
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-3">
              Inscrie-te in Programul Pilot
            </h2>
            <p className="text-body mt-4 leading-relaxed">
              Dureaza sub 2 minute sa te inscrii.{' '}
              <span className="font-semibold">Fara angajament</span>. Primesti un raspuns in 48 de ore.
            </p>

            <ProgressSteps />

            {/* Guarantee badges */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 bg-light-gray rounded-xl p-4">
                <svg className="w-6 h-6 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-primary">100% money back</p>
                  <p className="text-xs text-muted mt-0.5">Nu livram in 21 zile? Banii inapoi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-light-gray rounded-xl p-4">
                <svg className="w-6 h-6 text-warning shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-primary">€3.750 credit BUILD</p>
                  <p className="text-xs text-muted mt-0.5">Livram si continui? Blueprint devine gratuit.</p>
                </div>
              </div>
            </div>

            {/* Spots counter */}
            <div className="mt-6">
              <SpotsCounter remaining={spots.remaining} total={spots.total} />
            </div>
          </FadeInOnScroll>
        </div>

        {/* Right Column - Form Card */}
        <div className="md:col-span-3">
          <FadeInOnScroll>
            <div className="bg-white border border-border rounded-2xl p-5 md:p-8 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-primary">
                Vreau planul meu de automatizare
              </h3>

              {/* Red notice box */}
              <div className="bg-danger-light border-l-4 border-danger rounded-r-lg p-4 mt-5">
                <p className="text-sm text-primary">
                  Doar 10 locuri in Programul Pilot cu 50% reducere. Aplicarile sunt procesate in ordinea primirii.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Row 1: Nume + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Nume si prenume"
                    name="name"
                    placeholder="Mihai Popescu"
                    value={form.values.name}
                    error={form.errors.name}
                    onChange={handleFieldChange}
                  />
                  <InputField
                    label="Email profesional"
                    name="email"
                    type="email"
                    placeholder="mihai@companie.ro"
                    value={form.values.email}
                    error={form.errors.email}
                    onChange={handleFieldChange}
                  />
                </div>

                {/* Row 2: Telefon + CUI */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Numar de telefon"
                    name="phone"
                    type="tel"
                    placeholder="07xx xxx xxx"
                    value={form.values.phone}
                    error={form.errors.phone}
                    onChange={handleFieldChange}
                  />
                  <InputField
                    label="CUI companie"
                    name="cui"
                    placeholder="RO12345678"
                    value={form.values.cui}
                    error={form.errors.cui}
                    onChange={handleFieldChange}
                  />
                </div>

                <TextareaField
                  label="Descrie in cateva propozitii: Ce procese va consuma cel mai mult timp?"
                  name="processes"
                  placeholder="Descrie pe scurt ce procese repetitive consuma cele mai multe resurse in compania pe care o conduci."
                  value={form.values.processes}
                  error={form.errors.processes}
                  onChange={handleFieldChange}
                />

                {/* GDPR Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.values.gdprConsent}
                      onChange={(e) => handleFieldChange('gdprConsent', e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent/30 shrink-0 accent-accent"
                    />
                    <span className="text-xs text-body leading-relaxed">
                      Sunt de acord ca EZ Prime SRL (EZFuture.ai) sa prelucreze datele furnizate in scopul
                      evaluarii aplicatiei mele pentru programul Blueprint Pilot si contactarii ulterioare,
                      conform{' '}
                      <a href="/legal/confidentialitate.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Politicii de Confidentialitate
                      </a>.{' '}
                      <span className="text-accent">*</span>
                    </span>
                  </label>
                  {form.errors.gdprConsent && (
                    <p className="text-danger text-xs mt-1 ml-7">{form.errors.gdprConsent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={form.status === 'submitting'}
                >
                  {form.status === 'submitting'
                    ? 'Se trimite...'
                    : 'Vreau Planul Meu de Automatizare'}
                </Button>
              </form>

              {/* Trust Badges */}
              <TrustBadges />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
