import { useState } from 'react';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import { deliverables } from '../../data/deliverables';

export default function DeliverablesSection() {
  const [detailOpen, setDetailOpen] = useState(true);

  const featured = deliverables[0];
  const rest = deliverables.slice(1);

  return (
    <section id="livrabile" className="bg-light-gray py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
            10 LIVRABILE PROFESIONALE
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Tot ce ai nevoie ca să iei decizii informate
          </h2>
          <p className="text-body mt-4 text-lg max-w-3xl">
            Fiecare <strong className="text-primary">BLUEPRINT</strong> livrează un pachet complet de 10 documente,
            personalizate pe compania ta.
          </p>
        </FadeInOnScroll>

        {/* Featured deliverable #1 */}
        <FadeInOnScroll className="mt-12">
          <div className="max-w-3xl">
            <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Minim 5
              </span>

              <h3 className="font-heading font-bold text-xl md:text-2xl text-primary">
                {featured.title} - <strong>Minim 5</strong>
              </h3>

              <p className="text-body mt-4">{featured.description}</p>

              {featured.detailBox && (
                <div className="mt-6">
                  <button
                    onClick={() => setDetailOpen(!detailOpen)}
                    className="text-sm text-accent font-semibold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    {detailOpen ? 'Închide' : 'Află mai multe'}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        detailOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      detailOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-light-gray border border-border rounded-xl p-6 space-y-3">
                      {featured.detailBox.map((paragraph, index) => (
                        <p
                          key={index}
                          className={`text-muted text-sm ${index === 1 ? 'font-bold text-primary' : ''}`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Deliverables 2-10 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {rest.map((deliverable, index) => (
            <FadeInOnScroll key={deliverable.number} delay={index * 60}>
              <div className="bg-white border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-accent font-bold text-sm flex items-center justify-center shrink-0 text-white">
                    {deliverable.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{deliverable.title}</h4>
                    <p className="text-sm text-muted mt-1">{deliverable.description}</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
