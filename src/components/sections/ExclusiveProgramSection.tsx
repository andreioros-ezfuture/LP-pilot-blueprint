import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Card from '../ui/Card';

const exclusiveCards = [
  {
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Atentie Dedicata',
    description:
      'O echipa de seniori lucreaza direct pe fiecare proiect, fara delegare. Cu focus pe calitate maxima, nu pe volum.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Acces Direct la Fondator',
    description:
      'Comunicam fara intermediari pe durata intregului proces. Decizii rapide, fara birocratie.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: 'Imbunatatire Continua',
    description:
      'Sugestiile tale influenteaza direct rezultatul final. Esti partener, nu simplu client.',
  },
];

const requirementItems = [
  {
    title: 'Disponibilitate',
    description:
      'cele 3 sesiuni programate (4 ore in total) si raspunsuri in maximum 48 de ore.',
  },
  {
    title: 'Lucru intern',
    description:
      'echipa ta colecteaza date si documenteaza procesele (alte 4-9 ore, plus-minus, cu tool-urile si directiile noastre).',
  },
  {
    title: 'Folosirea platformei noastre',
    description:
      'completati datele direct in tool-urile pe care vi le punem la dispozitie (100% confidential — asumat prin contract — si enterprise-level data security).',
  },
  {
    title: 'Feedback onest',
    description: 'ne spui franc ce functioneaza pentru tine si ce nu (we can take it).',
  },
  {
    title: 'Permisiunea de a folosi rezultatele ca studiu de caz',
    description: 'datele pot fi anonimizate.',
  },
];

export default function ExclusiveProgramSection() {
  return (
    <>
      {/* Sub-section A: Un program exclusiv */}
      <SectionWrapper id="exclusiv" variant="white">
        <FadeInOnScroll>
          <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
            DE CE DOAR 10 LOCURI
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Un program exclusiv, nu un produs de masa
          </h2>
          <p className="text-body mt-4 text-lg max-w-4xl">
            Cat de seriosi am fi daca am da &ldquo;la liber&rdquo; o reducere atat de mare pentru un
            serviciu cu un asemenea impact? 10 studii de caz sunt suficiente ca sa demonstram ce
            putem face. In plus:
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {exclusiveCards.map((card, index) => (
            <FadeInOnScroll key={card.title} delay={index * 100} className="h-full">
              <Card className="h-full">
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold text-lg text-primary">{card.title}</h3>
                <p className="text-body mt-2">{card.description}</p>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Sub-section B: ~15 ore/saptamana (dark) */}
      <section className="bg-gradient-to-br from-dark to-dark-end py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInOnScroll>
            {/* Stat headline */}
            <div className="text-center">
              <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl">
                ~15 ore/saptamana
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white/80 mt-3">
                pierdute pe taskuri repetitive
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-accent mx-auto my-8 rounded-full" />

            {/* Body - each sentence on its own line */}
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <p className="text-white/80 text-lg">
                Intr-o echipa de 10 persoane, asta inseamna peste{' '}
                <span className="text-accent font-bold">€35.000/an</span> in productivitate pierduta.
              </p>

              <p className="text-white text-lg font-medium">
                <strong>Blueprint-ul EZ Future AI</strong> iti arata exact unde se duc aceste ore - si cum le recuperezi.
              </p>

              <p className="text-white/60 text-base">
                La un business de €2–10 milioane, astfel de cifre nu sunt teoretice.
              </p>

              <p className="text-white/40 italic text-base">
                Sunt orele in care echipa ta face copy-paste intre sisteme, trimite sute de emailuri manual si completeaza rapoarte pe care nimeni nu le citeste.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Sub-section C: Ce iti cerem in schimb */}
      <SectionWrapper variant="white" maxWidth="medium">
        <FadeInOnScroll>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Ce iti cerem in schimb
          </h2>
        </FadeInOnScroll>

        <div className="mt-10 space-y-0">
          {requirementItems.map((item, index) => (
            <FadeInOnScroll key={item.title} delay={index * 80}>
              <div
                className={`flex gap-4 items-start py-6 ${
                  index < requirementItems.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-accent shrink-0 mt-1.5" />
                <div>
                  <span className="font-bold text-primary">{item.title}</span>
                  <span className="text-body"> — {item.description}</span>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
