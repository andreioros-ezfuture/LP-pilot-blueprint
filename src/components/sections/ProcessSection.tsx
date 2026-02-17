import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';

export default function ProcessSection() {
  return (
    <SectionWrapper id="proces" variant="white" maxWidth="standard">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          PROCESUL IN 21 DE ZILE
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Structurat, eficient, fara pierderi de timp
        </h2>
      </div>

      <FadeInOnScroll>
        <div className="mt-8 text-center">
          <p className="text-lg text-body">
            3 sesiuni cu tine, restul e treaba noastra.
          </p>
          <p className="text-lg text-body mt-2">
            Timpul vostru total: <strong>maxim 8-13 ore in 21 de zile.</strong>
          </p>
          <p className="text-body italic mt-4 max-w-3xl mx-auto">
            Stim ca ai mai trecut prin &ldquo;proiecte de analiza&rdquo; care s-au transformat in sedinte interminabile si documente pe care nimeni nu le-a mai deschis. Blueprint-ul e construit sa fie exact opusul.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Timeline */}
      <div className="mt-16 relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-blue-500" />

        {/* Week 1 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-0 md:left-4 top-0">
              <span className="bg-dark text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                Saptamana 1
              </span>
            </div>
            <p className="text-sm text-muted font-medium pt-12">
              &ldquo;Start si Analiza&rdquo;
            </p>
          </div>
        </FadeInOnScroll>

        {/* Session 1 */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20 mb-8">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="accent">1 ora</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 1: Start</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Aliniem asteptarile, stabilim echipa, planificam sesiunile de analiza.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Session 2 */}
        <FadeInOnScroll delay={200}>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="accent">2 ore</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 2: Analiza detaliata</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Analizam fiecare proces: pasi, decizii, date, sisteme, exceptii.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Week 2 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-0 md:left-4 top-0">
              <span className="bg-dark text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                Saptamana 2
              </span>
            </div>
            <p className="text-sm text-muted font-medium pt-12">
              &ldquo;Colectare date&rdquo;
            </p>
          </div>
        </FadeInOnScroll>

        {/* Data collection */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="warning">4-9 ore (intern)</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Echipa ta colecteaza date</h3>
              </div>
              <p className="text-body text-sm leading-relaxed mb-3">
                Pe baza tool-urilor si directiilor primite de la noi, echipa ta colecteaza date, documenteaza procesele si pregateste materialele.
              </p>
              <ul className="space-y-2 text-body text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#8226;</span>
                  Noi oferim structura si tool-urile, iar ulterior facem analiza si mapam automatizarile.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#8226;</span>
                  Echipa ta doar colecteaza date interne si ni le transmite.
                </li>
              </ul>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Week 3 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-0 md:left-4 top-0">
              <span className="bg-dark text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                Saptamana 3
              </span>
            </div>
            <p className="text-sm text-muted font-medium pt-12">
              &ldquo;Validare si Livrare&rdquo;
            </p>
          </div>
        </FadeInOnScroll>

        {/* Session 3 */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="accent">1 ora</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 3: Validare</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Prezentam livrabilele, validam cu decidentii, ajustam prioritatile, stabilim pasii urmatori.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Time Summary Box */}
      <FadeInOnScroll>
        <div className="bg-warning-light border border-warning/30 rounded-2xl p-6 text-center font-semibold mt-8">
          <p className="text-body">
            Timpul vostru total: <strong>maxim 8-13 ore in 21 de zile</strong>
          </p>
          <p className="text-sm text-muted mt-1">
            (4 ore pentru cele trei sesiuni + posibil alte 4-9 ore ca sa ne dati offline rapoarte, exemple, acces la date etc)
          </p>
        </div>
      </FadeInOnScroll>

      {/* Tech Stack */}
      <FadeInOnScroll>
        <div className="mt-16 text-center">
          <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-6">
            CONSTRUIM CU
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
            {['n8n', 'Make', 'OpenAI', 'Supabase', 'Google Workspace'].map((tech) => (
              <span
                key={tech}
                className="bg-light-gray px-4 py-2 rounded-lg font-medium text-body text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-body italic mt-6 text-sm">
            Si (aproape) orice alta solutie tehnica necesara ca sa automatizam procesele manuale.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
