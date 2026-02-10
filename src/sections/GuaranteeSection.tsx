import { Shield, Check, ArrowRight, RefreshCw, CreditCard } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Garantie Dubla</span>
          <h2 className="section-title">Nu pierzi nicicum.</h2>
          <p className="section-desc">
            Blueprint-ul tau e protejat din doua directii. Oricare ar fi rezultatul, investitia ta e acoperita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Guarantee 1: Money back */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/[0.02] border-2 border-primary/30 rounded-3xl p-8 relative">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-2">
              Nu livram? Banii inapoi.
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Daca nu primesti minim 5 carduri de automatizare in 21 de zile,
              iti returnam <strong>100% din suma platita</strong>. Fara intrebari.
            </p>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">100% money back garantat</span>
            </div>
          </div>

          {/* Guarantee 2: Credit towards BUILD */}
          <div className="bg-gradient-to-br from-success/5 to-success/[0.02] border-2 border-success/30 rounded-3xl p-8 relative">
            <div className="w-14 h-14 bg-success rounded-2xl flex items-center justify-center mb-5">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-2">
              Livram? Devine credit in BUILD.
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Daca continui cu implementarea, <strong>intreaga suma din Blueprint devine credit</strong> aplicat
              pe prima automatizare. Practic, Blueprint-ul a fost gratuit.
            </p>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-success" />
              <span className="text-sm font-semibold text-success">€3.750 credit catre implementare</span>
            </div>
          </div>
        </div>

        {/* Bottom summary */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-white font-extrabold text-lg md:text-xl mb-3">
            Oricum ar fi, nu pierzi nimic.
          </p>
          <p className="text-gray-400 text-[15px] max-w-xl mx-auto mb-5">
            Singura conditie: participi la cele 3 sesiuni si raspunzi la solicitari in timp util.
            Restul e responsabilitatea noastra.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['100% money back', '100% credit in BUILD', 'Zero risc'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
