import { Star, UserCheck, MessageCircle, Check } from 'lucide-react';

const weNeed = [
  'Disponibilitate — cele 3 sesiuni programate si raspunsuri in maximum 48 de ore',
  'Lucru intern — echipa ta colecteaza date si documenteaza procesele (8+ ore, cu tool-urile noastre)',
  'Folosirea platformei noastre — completati datele direct in tool-urile pe care vi le punem la dispozitie',
  'Feedback sincer — ne spui ce functioneaza si ce nu',
  'Permisiunea de a folosi rezultatele ca studiu de caz — datele pot fi anonimizate',
];

export function WhyPilotSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(91,106,232,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-light mb-4">
            De ce doar 10 locuri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Un program exclusiv, nu un produs de masa
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Vrem sa demonstram impactul real al unei strategii de automatizare bine facute
            si sa construim studii de caz autentice, cu rezultate masurabile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {[
            {
              icon: Star,
              title: 'Atentie Dedicata',
              desc: 'Echipa senior lucreaza direct pe fiecare proiect, fara delegare. Calitate maxima, nu volum.',
            },
            {
              icon: UserCheck,
              title: 'Acces Direct la Fondator',
              desc: 'Comunicare fara intermediari pe durata intregului proces. Decizii rapide, fara birocratie.',
            },
            {
              icon: MessageCircle,
              title: 'Imbunatatire Continua',
              desc: 'Sugestiile tale influenteaza direct rezultatul final. Esti partener, nu doar client.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Cost of inaction */}
        <div className="max-w-3xl mx-auto bg-cta/10 border border-cta/20 rounded-2xl px-8 py-6 mb-8 text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            ~15 ore/saptamana pierdute pe taskuri repetitive
          </p>
          <p className="text-gray-400 text-[15px]">
            Intr-o echipa de 10 persoane, asta inseamna peste <strong className="text-white">€35.000/an</strong> in productivitate pierduta.
            <br />Blueprint-ul iti arata exact unde se duc aceste ore — si cum le recuperezi.
          </p>
          <p className="text-gray-500 text-[14px] mt-2 italic">
            Nu sunt cifre teoretice. Sunt orele in care echipa ta face copy-paste intre sisteme, trimite emailuri manuale si completeaza rapoarte pe care nimeni nu le citeste.
          </p>
        </div>

        {/* Ce cerem in schimb */}
        <div className="max-w-3xl mx-auto bg-white/[0.04] border border-white/[0.08] rounded-2xl px-8 py-6">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Ce cerem in schimb</p>
          <div className="space-y-3">
            {weNeed.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-[15px] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
