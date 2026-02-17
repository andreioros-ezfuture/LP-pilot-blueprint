import { Star, UserCheck, MessageCircle, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export function WhyOfferSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="section-title">De ce facem oferta asta?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Vrem să demonstrăm ce impact poate avea pe piața din România o strategie de automatizare bine făcută. Și să construim studii de caz autentice, cu rezultate măsurabile.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
          Tu ne ajuți pe noi, noi te ajutăm pe tine. E un schimb cât se poate de echitabil.
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto italic mt-4">
          Numărul de locuri este limitat la 10. Aplicările sunt procesate în ordinea primirii.
        </p>
      </div>
    </section>
  );
}

export function ExclusiveProgramSection() {
  const { ref: ref1, isVisible: isVisible1, getStaggerClass, getStaggerStyle } = useStaggerReveal(0.1, 120);
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal();

  const cards = [
    {
      icon: Star,
      title: 'Atenție Dedicată',
      desc: 'O echipă de seniori lucrează direct pe fiecare proiect, fără delegare. Cu focus pe calitate maximă, nu pe volum.',
      gradient: 'from-primary/5 to-transparent',
    },
    {
      icon: UserCheck,
      title: 'Acces Direct la Fondator',
      desc: 'Comunicăm fără intermediari pe durata întregului proces. Decizii rapide, fără birocrație.',
      gradient: 'from-cta/5 to-transparent',
    },
    {
      icon: MessageCircle,
      title: 'Îmbunătățire Continuă',
      desc: 'Sugestiile tale influențează direct rezultatul final. Ești partener, nu simplu client.',
      gradient: 'from-success/5 to-transparent',
    },
  ];

  return (
    <>
      {/* Sub-section 2: Un program exclusiv */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Subtle blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(91,106,232,0.04)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

        <div ref={ref1} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-soft">
            <div className="text-center mb-12">
              <span className="section-label">DE CE DOAR 10 LOCURI</span>
              <h2 className="section-title">Un program exclusiv,<br className="hidden md:block" />nu un produs de masă</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Cât de serioși am fi dacă am da „la liber" o reducere atât de mare pentru un serviciu cu un asemenea impact? 10 studii de caz sunt suficiente ca să demonstrăm ce putem face. În plus:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className={getStaggerClass(i, `bg-gradient-to-br ${item.gradient} border border-gray-100 rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-card`)}
                  style={getStaggerStyle(i)}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-section 3: ~15 ore/săptămână — DARK with grain */}
      <section className="py-12 md:py-16 bg-white">
        <div ref={ref2} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-gray-900 grain-overlay border border-gray-700/40 rounded-3xl px-8 md:px-12 py-10 text-center relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cta/5 rounded-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                ~15 ore/săptămână pierdute pe taskuri repetitive
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-3">
                Într-o echipă de 10 persoane, asta înseamnă peste <strong className="text-white font-bold">€35.000/an</strong> în productivitate pierdută.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-3">
                <span className="text-primary font-semibold">Blueprint-ul EZ Future AI</span> îți arată exact unde se duc aceste ore - și cum le recuperezi.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                La un business de €2-10 milioane, astfel de cifre nu sunt teoretice.
              </p>
              <p className="text-red-400 text-[15px] italic leading-relaxed">
                Sunt orele în care echipa ta face copy-paste între sisteme, trimite sute de emailuri manual și completează rapoarte pe care nimeni nu le citește.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-section 4: CE ÎȚI CEREM ÎN SCHIMB */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div ref={ref3} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="border border-gray-200/80 rounded-3xl px-8 md:px-12 py-10 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-8">
              CE ÎȚI CEREM ÎN SCHIMB
            </h2>
            <div className="space-y-5">
              {[
                { bold: 'Disponibilitate', text: '- cele 3 sesiuni programate (4 ore în total) și răspunsuri în maximum 48 de ore.' },
                { bold: 'Lucru intern', text: '- echipa ta colectează date și documentează procesele (alte 4-9 ore, plus-minus, cu tool-urile și direcțiile noastre).' },
                { bold: 'Folosirea platformei noastre', text: '- completați datele direct în tool-urile pe care vi le punem la dispoziție (100% confidențial - asumat prin contract - și enterprise-level data security).' },
                { bold: 'Feedback onest', text: '- ne spui franc ce funcționează pentru tine și ce nu (we can take it).' },
                { bold: 'Permisiunea de a folosi rezultatele ca studiu de caz', text: '- datele pot fi anonimizate.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>{item.bold}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
