import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';

export default function CreditSystemSection() {
  return (
    <SectionWrapper id="credit" variant="white" maxWidth="medium">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          SISTEMUL EZ CREDIT
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Blueprint-ul devine gratuit daca implementezi cu noi
        </h2>
        <p className="text-body mt-4 max-w-3xl mx-auto">
          Intreaga suma investita in <strong>BLUEPRINT</strong> se transforma in <strong>EZ CREDIT</strong> (se citeste &ldquo;easy credit&rdquo;) aplicat direct pe prima automatizare din <strong>BUILD</strong>. Practic, platesti o data si primesti de 2 ori.
        </p>
      </div>

      {/* Credit Table */}
      <FadeInOnScroll>
        <div className="rounded-2xl overflow-hidden border border-border mt-8 max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-dark text-white px-4 md:px-6 py-4 font-semibold text-xs md:text-sm grid grid-cols-2">
            <span>Daca incepi implementarea cu noi in...</span>
            <span className="text-right">Credit aplicat</span>
          </div>
          {/* Row 1 */}
          <div className="px-4 md:px-6 py-4 grid grid-cols-2 bg-success/10">
            <span className="text-body text-sm">14 zile de la livrare</span>
            <span className="text-right text-success font-bold text-sm">100% din valoarea Blueprint</span>
          </div>
          {/* Row 2 */}
          <div className="px-4 md:px-6 py-4 grid grid-cols-2 bg-warning/10">
            <span className="text-body text-sm">15-30 zile de la livrare</span>
            <span className="text-right text-warning font-bold text-sm">50% din valoarea Blueprint</span>
          </div>
          {/* Row 3 */}
          <div className="px-4 md:px-6 py-4 grid grid-cols-2 bg-red-500/10">
            <span className="text-body text-sm">Din ziua 31</span>
            <span className="text-right text-muted font-bold text-sm">Creditul expira</span>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Exemplu concret */}
      <FadeInOnScroll>
        <div className="mt-12">
          <h3 className="text-xl font-heading font-bold text-primary mb-4">
            Exemplu concret
          </h3>
          <p className="text-body text-sm mb-6">
            Sa zicem ca Blueprint-ul se livreaza pe 31 martie (dupa cele 21 de zile). Unul dintre cardurile de automatizare are pret de implementare (<strong>BUILD</strong>) de €10.000. Creditul se calculeaza din momentul livrarii:
          </p>

          {/* Scenario 1 */}
          <div className="bg-light-gray rounded-xl p-5 mb-3">
            <p className="text-body text-sm font-medium mb-2">
              <strong>Semnezi in 14 zile</strong> (pana pe 14 aprilie):
            </p>
            <p className="text-body text-sm">
              €10.000 - <span className="text-success font-semibold">€3.750 credit</span> = mai platesti{' '}
              <span className="font-bold text-xl text-primary">€6.250</span>
            </p>
          </div>

          {/* Scenario 2 */}
          <div className="bg-light-gray rounded-xl p-5 mb-3">
            <p className="text-body text-sm font-medium mb-2">
              <strong>Semnezi in 15-30 zile</strong> (pana pe 30 aprilie):
            </p>
            <p className="text-body text-sm">
              €10.000 - <span className="text-success font-semibold">€1.875 credit</span> = mai platesti{' '}
              <span className="font-bold text-xl text-primary">€8.125</span>
            </p>
          </div>

          {/* Scenario 3 */}
          <div className="bg-light-gray rounded-xl p-5 mb-3">
            <p className="text-body text-sm font-medium mb-2">
              <strong>Semnezi dupa 30 de zile</strong> (din 1 mai):
            </p>
            <p className="text-body text-sm">
              €10.000 - <span className="text-success font-semibold">€0 credit</span> = mai platesti{' '}
              <span className="font-bold text-xl text-primary">€10.000</span>
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Bottom Note */}
      <FadeInOnScroll>
        <p className="text-muted italic text-sm mt-8 text-center">
          Nu livram Blueprint-ul? Primesti 100% banii inapoi. Livram si continui cu BUILD? Blueprint-ul a fost gratuit.
        </p>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
