import { Star, UserCheck, MessageCircle, ChevronRight } from 'lucide-react';

export function WhyOfferSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
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
  return (
    <>
      {/* Sub-section 2: Un program exclusiv */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="text-center mb-12">
              <span className="section-label">DE CE DOAR 10 LOCURI</span>
              <h2 className="section-title">Un program exclusiv, nu un produs de masă</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Cât de serioși am fi dacă am da „la liber" o reducere atât de mare pentru un serviciu cu un asemenea impact? 10 studii de caz sunt suficiente ca să demonstrăm ce putem face. În plus:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: 'Atenție Dedicată',
                  desc: 'O echipă de seniori lucrează direct pe fiecare proiect, fără delegare. Cu focus pe calitate maximă, nu pe volum.',
                },
                {
                  icon: UserCheck,
                  title: 'Acces Direct la Fondator',
                  desc: 'Comunicăm fără intermediari pe durata întregului proces. Decizii rapide, fără birocrație.',
                },
                {
                  icon: MessageCircle,
                  title: 'Îmbunătățire Continuă',
                  desc: 'Sugestiile tale influențează direct rezultatul final. Ești partener, nu simplu client.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-section 3: ~15 ore/săptămână */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-900 border-2 border-gray-700 rounded-3xl px-8 md:px-12 py-10 text-center">
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
            <p className="text-cta text-[15px] italic leading-relaxed">
              Sunt orele în care echipa ta face copy-paste între sisteme, trimite sute de emailuri manual și completează rapoarte pe care nimeni nu le citește.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-section 4: CE ÎȚI CEREM ÎN SCHIMB */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-2 border-gray-200 rounded-3xl px-8 md:px-12 py-10 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-8">
              CE ÎȚI CEREM ÎN SCHIMB
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Disponibilitate</strong> - cele 3 sesiuni programate (4 ore în total) și răspunsuri în maximum 48 de ore.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Lucru intern</strong> - echipa ta colectează date și documentează procesele (alte 4-9 ore, plus-minus, cu tool-urile și direcțiile noastre).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Folosirea platformei noastre</strong> - completați datele direct în tool-urile pe care vi le punem la dispoziție (100% confidențial - asumat prin contract - și enterprise-level data security).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Feedback onest</strong> - ne spui franc ce funcționează pentru tine și ce nu (we can take it).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Permisiunea de a folosi rezultatele ca studiu de caz</strong> - datele pot fi anonimizate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
