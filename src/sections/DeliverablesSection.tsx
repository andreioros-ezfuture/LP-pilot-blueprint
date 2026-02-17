import { useScrollReveal } from '../hooks/useScrollReveal';

export function DeliverablesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="livrabile" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">10 LIVRABILE PROFESIONALE</span>
          <h2 className="section-title">
            Tot ce ai nevoie ca să iei decizii informate
          </h2>
          <p className="section-desc">
            Fiecare <span className="text-primary font-semibold">BLUEPRINT</span> livrează un pachet complet de 10 documente, personalizate pe compania ta.
          </p>
        </div>

        {/* Deliverable 1 - Special / Highlighted with gradient accent */}
        <div className="card-accent mb-8 bg-gradient-to-br from-primary/[0.04] to-transparent">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            1. Carduri de Automatizare{' '}
            <span className="text-primary font-semibold">Minim 5</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Descriere AS IS / TO BE, integrări necesare, calcul ROI, preț fix și asumat prin contract pentru{' '}
            <span className="font-bold">BUILD</span> (dacă implementezi cu noi), timeline și garanții incluse.
          </p>

          {/* Highlighted explanation box */}
          <div className="mt-6 bg-primary/[0.06] border border-primary/15 rounded-xl p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold">Cardurile de Automatizare EZ Future AI</span>{' '}
              nu sunt niște „cartonașe" cu design frumos, care-ți spun în cuvinte elocvente „că apa e udă".
            </p>
            <p>
              <span className="font-bold">Sunt documente de lucru</span>{' '}
              care includ minim 5 automatizări personalizate, mapate riguros la nivel de proces.
            </p>
            <p>
              Pe baza lor pot fi construite soluții tehnice eficiente și sigure în etapa de implementare.
            </p>
            <p>
              Și pot fi folosite atât de{' '}
              <span className="font-bold">oamenii tehnici</span>, cât și de{' '}
              <span className="font-bold">stakeholderi</span>{' '}
              (owners, board members sau executivi care trebuie să ia deciziile de business chiar dacă nu sunt neapărat oameni tehnici).
            </p>
          </div>
        </div>

        {/* Deliverables 2-10 Grid Table */}
        <div className="border border-gray-200/80 rounded-2xl overflow-hidden bg-white shadow-soft">
          {/* Row 1: Deliverables 2 & 3 */}
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-b border-gray-200/60 md:border-r hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">2. Plan de Implementare</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ordinea recomandată, dependințe, timeline pe 90 de zile și 12 luni, ROI agregat pe etape.
              </p>
            </div>
            <div className="p-6 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">3. Process Map AS IS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diagrame vizuale ale proceselor actuale - pași, decizii, excepții și bottleneck-uri.
              </p>
            </div>
          </div>

          {/* Row 2: Deliverables 4 & 5 */}
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-b border-gray-200/60 md:border-r hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">4. Process Map TO BE</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Procesele automatizate - ce face automatizarea și unde rămâne intervenția umană.
              </p>
            </div>
            <div className="p-6 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">5. Documentație Procese AS IS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descriere detaliată: pași, responsabili, frecvență, volume, inputuri, outputuri, excepții.
              </p>
            </div>
          </div>

          {/* Row 3: Deliverables 6 & 7 */}
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-b border-gray-200/60 md:border-r hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">6. Decision Log</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Registru al deciziilor: ce am ales, de ce, ce alternative am exclus și pe ce bază.
              </p>
            </div>
            <div className="p-6 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">7. Matrice RACI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cine e Responsible, Accountable, Consulted și Informed pentru fiecare automatizare.
              </p>
            </div>
          </div>

          {/* Row 4: Deliverables 8 & 9 */}
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-b border-gray-200/60 md:border-r hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">8. Evaluare Impact Schimbare</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analiza impactului: ce se schimbă, cine e afectat, training necesar, riscuri de rezistență.
              </p>
            </div>
            <div className="p-6 border-b border-gray-200/60 hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">9. Plan de Adopție</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategie de implementare: comunicare, training, timeline de tranziție, indicatori de succes.
              </p>
            </div>
          </div>

          {/* Row 5: Deliverable 10 (full width) */}
          <div>
            <div className="p-6 hover:bg-gray-50/50 transition-colors duration-200">
              <h3 className="font-bold text-gray-900 mb-2">10. Ghid de Excepții</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scenarii de excepție documentate: ce se întâmplă când ceva nu merge și cum tratează automatizarea fiecare caz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
