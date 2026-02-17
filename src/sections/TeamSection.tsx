import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ExpandableProfile({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const collapsedHeight = 180;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? contentRef.current.scrollHeight : collapsedHeight);
    }
  }, [expanded]);

  useEffect(() => {
    setHeight(collapsedHeight);
  }, []);

  return (
    <div className="border border-gray-200/80 rounded-xl p-5 mb-6 md:mb-0">
      <h4 className="text-lg font-bold text-gray-900 mb-3">Background</h4>
      <div className="relative">
        <div
          style={{ height }}
          className="overflow-hidden transition-[height] duration-500 ease-in-out"
        >
          <div ref={contentRef}>
            {children}
          </div>
        </div>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 mx-auto"
      >
        {expanded ? 'Vezi mai puțin' : 'Vezi mai mult'}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Header */}
        <div className="border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <span className="section-label">CU CINE VEI LUCRA</span>
            <h2 className="section-title-gradient">Oamenii din spatele Blueprint-ului</h2>
            <p className="section-desc">
              Nu externalizăm. Nu delegăm. Lucrăm direct cu tine.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 md:grid-rows-[auto_1fr_auto] gap-0 border border-gray-200/80 rounded-2xl overflow-hidden">
            {/* LEFT COLUMN - Andrei Oros */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200/60 p-6 md:p-8 flex flex-col md:row-span-3 md:grid md:[grid-template-rows:subgrid] md:gap-6">
              {/* Photo + Name + Role */}
              <div className="text-center mb-6 md:mb-0">
                <img
                  src="/andrei.webp"
                  alt="Andrei Oros"
                  loading="lazy"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-gray-100"
                />
                <h3 className="text-2xl font-bold text-gray-900">Andrei Oros</h3>
                <p className="text-base font-semibold text-primary mt-1">Founder</p>
                <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
                  Strategie de automatizare și implementare tehnică. Lucrează direct cu fiecare companie din pilot.
                </p>
              </div>

              {/* Background + Testimonial - Collapsible */}
              <ExpandableProfile>
                <p className="text-sm italic text-gray-600 mb-4">
                  Founder, multiple businesses | 1 mil. € exit | Chief Executive Officer | Senior Consultant 3D Modeling, Scan to BIM &amp; Laser Scanning
                </p>

                <p className="text-sm font-bold text-gray-800 mb-3">
                  Peste 14 ani experiență de conducere în companii de tehnologie la intersecția dintre capabilități tehnice complexe și clienți non-tehnici.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  A lucrat cu clienți din Europa, SUA, Australia, Noua Zeelandă, Canada și nu numai.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  În 2011 a fondat ArenaCAD și a condus compania ca CEO până în 2025, când a făcut exit de 1 mil. €. Ulterior a rămas ca Senior Consultant part-time în perioada de tranziție.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Acolo a construit o practică în jurul modelării 2D/3D, Scan to BIM și scanării laser 3D, deservind arhitecți, companii de construcții și ingineri la nivel internațional.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Transformarea unor servicii extrem de tehnice în oferte structurate și repetabile pentru clienți care aveau nevoie de rezultate - nu de jargon - l-a învățat exact ce lipsește astăzi din zona de consultanță în automatizare.
                </p>

                <p className="text-sm text-gray-600 mb-2">
                  Același principiu stă la baza EZ Future AI:
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  Să iei ceva complex (strategia de automatizare), să îl faci accesibil (descoperire structurată) și să livrezi rezultate măsurabile (ROI documentat la fiecare pas).
                </p>

                <p className="text-sm italic text-gray-700 leading-relaxed border-t border-gray-200 pt-4 mb-6">
                  „Misiunea mea este să livrez rezultate excepționale care depășesc așteptările, respectând în același timp termene stricte și menținând standarde precise."
                </p>

                {/* Christopher Ball testimonial */}
                <div className="border border-gray-200/80 rounded-xl bg-gray-50 p-5">
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-4">
                    „Andrei este un CEO și antreprenor extraordinar. Lucrez îndeaproape cu el din 2017. Este onest, muncitor și corect. Are viziune și abilitatea de a o transforma în realitate. Nu aș fi putut găsi un partener de afaceri mai bun."
                  </p>
                  <p className="text-xs text-gray-500 mb-3">16 august 2022</p>
                  <div className="flex items-center gap-3">
                    <img src="/christopher-ball.webp" alt="Christopher Ball" loading="lazy" className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Christopher Ball</p>
                      <p className="text-xs text-gray-600 leading-snug">
                        Global Economics, Szechenyi Chair în Economie Internațională și Director al Central European Institute la Quinnipiac University
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableProfile>

              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/arenacad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200/80 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-200"
              >
                Vezi profil LinkedIn{' '}
                <span className="text-primary">Andrei Oros</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* RIGHT COLUMN - Iuliana Ghioca */}
            <div className="p-6 md:p-8 flex flex-col md:row-span-3 md:grid md:[grid-template-rows:subgrid] md:gap-6">
              {/* Photo + Name + Role */}
              <div className="text-center mb-6 md:mb-0">
                <img
                  src="/iuliana.webp"
                  alt="Iuliana Ghioca"
                  loading="lazy"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-gray-100"
                />
                <h3 className="text-2xl font-bold text-gray-900">Iuliana Ghioca</h3>
                <p className="text-base font-semibold text-primary mt-1">Chief Automation Officer</p>
                <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
                  Transformare digitală, analiză de procese și livrabile strategice. Traduce complexitatea operațională în planuri clare de acțiune.
                </p>
              </div>

              {/* Background + Testimonial - Collapsible */}
              <ExpandableProfile>
                <p className="text-sm italic text-gray-600 mb-4">
                  Global Digital Transformation Lead | Senior Process Improvement &amp; Automation Manager | Lean Six Sigma Black Belt
                </p>

                <p className="text-sm font-bold text-gray-800 mb-3">
                  Peste 16 ani experiență în transformarea operațiunilor de business prin automatizare inteligentă și excelență în procese, în cadrul corporațiilor multinaționale.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Printre altele, a gestionat implementări ServiceNow pentru clienți Fortune 500, inclusiv NXP și Mass Mutual.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Expertiza ei constă în conectarea proceselor de business cu soluțiile tehnologice. Conduce inițiative de transformare digitală care livrează rezultate măsurabile și eficiență operațională la nivel organizațional.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  De-a lungul carierei a coordonat peste 15 implementări majore de sisteme pe piețe globale, inclusiv SAP, ServiceNow, Anaplan și BlackLine, obținând reduceri de 30-50% ale timpilor de procesare prin inițiative de automatizare și optimizare a proceselor.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Experiența ei combină procesele, tehnologia și managementul schimbării, transformând inițiative complexe în soluții scalabile și adoptate operațional.
                </p>

                <p className="text-sm text-gray-600 mb-6">
                  Înainte de a se alătura EZ Future AI, a fost timp de un an <span className="font-bold">Chief of AI Automation</span> într-un business românesc de ~3 mil. € care crescuse de 4x în 4 ani. Acolo a contribuit la structurarea proceselor și pregătirea organizației pentru automatizare și scalare.
                </p>

                {/* Elizabeth Jacobson testimonial */}
                <div className="border border-gray-200/80 rounded-xl bg-gray-50 p-5">
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-1">
                    „Iuliana a fost Global Business Service (GBS) Record to Report (RTR) Process Improvement Manager, în timp ce eu eram RTR Global Process Owner la Molson Coors Brewing Company.
                  </p>
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-1">
                    A fost un performer de top și am colaborat la multiple implementări de tehnologii SaaS și proiecte de îmbunătățire a proceselor.
                  </p>
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-1">
                    Am lucrat cu mulți profesioniști din zona de Finance Transformation și este rar să găsești pe cineva care să aibă expertiză atât în lucrul cu oamenii, cât și în procesele de contabilitate/finanțe și tehnologie.
                  </p>
                  <p className="text-sm italic text-gray-700 leading-relaxed mb-4">
                    Am fost impresionată de etica ei de muncă și de abilitatea ei de a identifica și mobiliza resursele potrivite pentru a asigura succesul proiectelor."
                  </p>
                  <p className="text-xs text-gray-500 mb-3">2 noiembrie 2020</p>
                  <div className="flex items-center gap-3">
                    <img src="/elizabeth-jacobson.webp" alt="Elizabeth Jacobson" loading="lazy" className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Elizabeth Jacobson</p>
                      <p className="text-xs text-gray-600 leading-snug">
                        Consultant Finance Transformation la BlackLine
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandableProfile>

              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/ghioca-iuliana-98b71aa0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200/80 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-200"
              >
                Vezi profil LinkedIn{' '}
                <span className="text-primary">Iuliana Ghioca</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
