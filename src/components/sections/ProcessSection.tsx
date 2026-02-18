import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';

export default function ProcessSection() {
  return (
    <SectionWrapper id="proces" variant="white" maxWidth="standard">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          PROCESUL ÎN 21 DE ZILE
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Structurat, eficient, fără pierderi de timp
        </h2>
      </div>

      <FadeInOnScroll>
        <div className="mt-8 text-center">
          <p className="text-lg text-body">
            3 sesiuni cu tine, restul e treaba noastră.
          </p>
          <p className="text-lg text-body mt-2">
            Timpul vostru total: <strong>maxim 8-13 ore în 21 de zile.</strong>
          </p>
          <p className="text-body italic mt-4 max-w-3xl mx-auto">
            Știm că ai mai trecut prin &ldquo;proiecte de analiză&rdquo; care s-au transformat în ședințe interminabile și documente pe care nimeni nu le-a mai deschis. Blueprint-ul e construit să fie exact opusul.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Timeline */}
      <div className="mt-16 relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-blue-500" />

        {/* Week 1 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10 flex items-center gap-3">
            <span className="bg-dark text-white px-4 md:px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
              Săptămâna 1
            </span>
            <span className="text-sm text-muted font-medium">
              Start și Analiză
            </span>
          </div>
        </FadeInOnScroll>

        {/* Session 1 */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20 mb-8">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="accent">1 oră</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 1: Start</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Aliniem așteptările, stabilim echipa, planificăm sesiunile de analiză.
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
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 2: Analiză detaliată</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Analizăm fiecare proces: pași, decizii, date, sisteme, excepții.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Week 2 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10 flex items-center gap-3">
            <span className="bg-dark text-white px-4 md:px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
              Săptămâna 2
            </span>
            <span className="text-sm text-muted font-medium">
              Colectare date
            </span>
          </div>
        </FadeInOnScroll>

        {/* Data collection */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20 mb-10">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="warning">4-9 ore (intern)</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Echipa ta colectează date</h3>
              </div>
              <p className="text-body text-sm leading-relaxed mb-3">
                Pe baza tool-urilor și direcțiilor primite de la noi, echipa ta colectează date, documentează procesele și pregătește materialele.
              </p>
              <ul className="space-y-2 text-body text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#8226;</span>
                  Noi oferim structura și tool-urile, iar ulterior facem analiza și mapăm automatizările.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#8226;</span>
                  Echipa ta doar colectează date interne și ni le transmite.
                </li>
              </ul>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Week 3 */}
        <FadeInOnScroll>
          <div className="relative pl-12 md:pl-20 mb-10 flex items-center gap-3">
            <span className="bg-dark text-white px-4 md:px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
              Săptămâna 3
            </span>
            <span className="text-sm text-muted font-medium">
              Validare și Livrare
            </span>
          </div>
        </FadeInOnScroll>

        {/* Session 3 */}
        <FadeInOnScroll delay={100}>
          <div className="relative pl-12 md:pl-20">
            <div className="absolute left-[12px] md:left-[28px] top-3 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="accent">1 oră</Badge>
                <h3 className="font-heading font-bold text-primary text-lg">Sesiunea 3: Validare</h3>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Prezentăm livrabilele, validăm cu decidenții, ajustăm prioritățile, stabilim pașii următori.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Time Summary Box */}
      <FadeInOnScroll>
        <div className="bg-warning-light border border-warning/30 rounded-2xl p-6 text-center font-semibold mt-8">
          <p className="text-body">
            Timpul vostru total: <strong>maxim 8-13 ore în 21 de zile</strong>
          </p>
          <p className="text-sm text-muted mt-1">
            (4 ore pentru cele trei sesiuni + posibil alte 4-9 ore ca să ne dați offline rapoarte, exemple, acces la date etc)
          </p>
        </div>
      </FadeInOnScroll>

      {/* Tech Stack */}
      <FadeInOnScroll>
        <div className="mt-16 text-center">
          <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-6">
            CONSTRUIM CU
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 max-w-3xl mx-auto">
            {([
              {
                name: 'n8n',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 28 14" fill="none">
                    {/* Lines connecting nodes */}
                    <path d="M6 7h4" stroke="#EA4B71" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M14 7h4" stroke="#EA4B71" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M22 7h4" stroke="#EA4B71" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
                    {/* Node 1 */}
                    <circle cx="4" cy="7" r="3.2" stroke="#EA4B71" strokeWidth="1.3"/>
                    <circle cx="4" cy="7" r="1.2" fill="#EA4B71"/>
                    {/* Node 2 */}
                    <circle cx="12" cy="7" r="3.2" stroke="#EA4B71" strokeWidth="1.3"/>
                    <circle cx="12" cy="7" r="1.2" fill="#EA4B71"/>
                    {/* Node 3 */}
                    <circle cx="20" cy="7" r="3.2" stroke="#EA4B71" strokeWidth="1.3"/>
                    <circle cx="20" cy="7" r="1.2" fill="#EA4B71"/>
                    {/* Node 4 (smaller, trailing) */}
                    <circle cx="27" cy="7" r="2.2" stroke="#EA4B71" strokeWidth="1.3" opacity="0.6"/>
                    <circle cx="27" cy="7" r="0.8" fill="#EA4B71" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                name: 'Make',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 18V6l4 6 4-6 4 6 4-6v12"/>
                  </svg>
                ),
              },
              {
                name: 'OpenAI',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v7.5M12 14.5V22M2 12h7.5M14.5 12H22M4.93 4.93l5.3 5.3M13.77 13.77l5.3 5.3M19.07 4.93l-5.3 5.3M10.23 13.77l-5.3 5.3"/>
                    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  </svg>
                ),
              },
              {
                name: 'Supabase',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.13 21.26c-.36.48-1.13.17-1.13-.42V14h-5.6c-.65 0-1.01-.76-.6-1.27L13.13 2.74c.36-.48 1.13-.17 1.13.42V10h5.6c.65 0 1.01.76.6 1.27L13.13 21.26z"/>
                  </svg>
                ),
              },
              {
                name: 'Google',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                ),
              },
              {
                name: 'Zapier',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.95 5.56L12 11.3 8.05 5.56H2.63l7.1 6.46-7.1 6.42h5.42L12 12.7l3.95 5.74h5.42l-7.1-6.42 7.1-6.46h-5.42z"/>
                  </svg>
                ),
              },
              {
                name: 'Slack',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.04 15.18a2.52 2.52 0 0 1-2.52 2.52A2.52 2.52 0 0 1 0 15.18a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52zm1.27 0a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v6.31A2.52 2.52 0 0 1 8.83 24a2.52 2.52 0 0 1-2.52-2.52v-6.31zM8.83 5.04a2.52 2.52 0 0 1-2.52-2.52A2.52 2.52 0 0 1 8.83 0a2.52 2.52 0 0 1 2.52 2.52v2.52H8.83zm0 1.27a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52H2.52A2.52 2.52 0 0 1 0 8.83a2.52 2.52 0 0 1 2.52-2.52h6.31zM18.96 8.83a2.52 2.52 0 0 1 2.52-2.52A2.52 2.52 0 0 1 24 8.83a2.52 2.52 0 0 1-2.52 2.52h-2.52V8.83zm-1.27 0a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52V2.52A2.52 2.52 0 0 1 15.17 0a2.52 2.52 0 0 1 2.52 2.52v6.31zM15.17 18.96a2.52 2.52 0 0 1 2.52 2.52A2.52 2.52 0 0 1 15.17 24a2.52 2.52 0 0 1-2.52-2.52v-2.52h2.52zm0-1.27a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h6.31A2.52 2.52 0 0 1 24 15.17a2.52 2.52 0 0 1-2.52 2.52h-6.31z"/>
                  </svg>
                ),
              },
              {
                name: 'HubSpot',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.33 10.27V7.35a2.1 2.1 0 0 0 1.21-1.89v-.06a2.1 2.1 0 0 0-2.1-2.1h-.06a2.1 2.1 0 0 0-2.1 2.1v.06c0 .82.47 1.53 1.17 1.87v2.95a5.16 5.16 0 0 0-2.42 1.22l-6.4-4.98a2.09 2.09 0 0 0 .05-.42 2.13 2.13 0 1 0-2.13 2.13c.34 0 .66-.08.95-.24l6.28 4.89a5.16 5.16 0 0 0-.2 1.4 5.2 5.2 0 0 0 5.2 5.2 5.2 5.2 0 0 0 5.2-5.2 5.2 5.2 0 0 0-4.65-5.16zm-.95 7.9a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52z"/>
                  </svg>
                ),
              },
              {
                name: 'Airtable',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.52 1.57L2.15 5.33c-.28.11-.28.51 0 .63l9.42 3.78a2.4 2.4 0 0 0 .86.16c.3 0 .58-.06.86-.16l9.42-3.78c.28-.11.28-.51 0-.63l-9.37-3.76a2.34 2.34 0 0 0-1.82 0z"/>
                    <path d="M12.85 11.56v10.2c0 .32.34.54.63.42l9.7-3.89c.2-.08.32-.26.32-.47V7.62c0-.32-.34-.54-.63-.42l-9.7 3.89a.5.5 0 0 0-.32.47z"/>
                    <path d="M11.15 11.56v10.2c0 .32-.34.54-.63.42L.82 18.29a.5.5 0 0 1-.32-.47V7.62c0-.32.34-.54.63-.42l9.7 3.89c.2.08.32.26.32.47z"/>
                  </svg>
                ),
              },
              {
                name: 'Sheets',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.5 7h-3.5V3.5L19.5 7zM6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 10v6h10v-6H7zm0 0h4v2.5H7V12zm0 3.5h4V18H7v-2.5zm5-3.5h5v2.5h-5V12zm0 3.5h5V18h-5v-2.5z"/>
                  </svg>
                ),
              },
              {
                name: 'Gmail',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.22L12 12.67 2 6.22V6zm0 2.54l9.53 6.12a1 1 0 0 0 .94 0L22 8.54V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.54z"/>
                  </svg>
                ),
              },
              {
                name: 'Shopify',
                icon: (
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.54 4.81c-.01-.09-.08-.15-.17-.16-.09 0-1.72-.13-1.72-.13s-1.14-1.13-1.27-1.26c-.12-.13-.37-.09-.46-.06l-.65.2c-.39-1.12-1.07-2.15-2.27-2.15h-.1C10.52.74 10.03.5 9.61.5c-2.8 0-4.14 3.5-4.56 5.28l-1.96.61c-.6.19-.62.21-.7.78L.88 20.54l12.86 2.41 6.96-1.5S17.55 4.9 17.54 4.81zM11.2 3.66l-1.02.31c0-.04 0-.08 0-.12 0-.65-.09-1.17-.24-1.59.6.08 1 .78 1.26 1.4zm-2.12.66L6.94 5c.35-1.36 1.02-2.72 2.33-2.72.16 0 .31.02.45.06-.45.53-.74 1.34-.64 2.08zM9.65 1.2c.1 0 .2.03.29.1-.94.45-1.95 1.57-2.38 3.82l-1.5.46C6.6 3.92 7.67 1.2 9.65 1.2z"/>
                    <path d="M17.37 4.65c-.09 0-1.72-.13-1.72-.13s-1.14-1.13-1.27-1.26a.19.19 0 0 0-.11-.05l-.97 19.74 6.96-1.5s-2.84-19.28-2.85-19.37a.2.2 0 0 0-.04.57z"/>
                    <path d="M10.46 8.38l-.81 2.42s-.72-.38-1.58-.38c-1.28 0-1.34.8-1.34 1 0 1.11 2.89 1.53 2.89 4.12 0 2.04-1.29 3.35-3.03 3.35-2.09 0-3.16-1.3-3.16-1.3l.56-1.85s1.1.94 2.02.94c.6 0 .84-.47.84-.82 0-1.44-2.37-1.51-2.37-3.88 0-2 1.43-3.93 4.33-3.93.97 0 1.65.3 1.65.3z"/>
                  </svg>
                ),
              },
            ] as { name: string; icon: React.ReactNode }[]).map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-body">{tech.name}</span>
              </div>
            ))}
          </div>
          <p className="text-body italic mt-6 text-sm">
            Și (aproape) orice altă soluție tehnică necesară ca să automatizăm procesele manuale.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
