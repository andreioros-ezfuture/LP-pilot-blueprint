import { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import { teamMembers } from '../../data/teamMembers';

function TeamMemberCard({ member, delay }: { member: (typeof teamMembers)[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  const firstTwoParagraphs = member.background.slice(0, 2);
  const restParagraphs = member.background.slice(2);
  const hasMore = restParagraphs.length > 0;

  return (
    <FadeInOnScroll delay={delay} className="h-full">
      <div className="h-full flex flex-col">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-dark p-1">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full rounded-full object-cover bg-light-gray"
            />
          </div>
        </div>

        {/* Name & Role */}
        <h3 className="font-bold text-xl mt-5 text-center text-primary">{member.name}</h3>
        <p className="text-accent text-sm font-semibold text-center mt-1">{member.role}</p>

        {/* Description */}
        <p className="text-body text-center mt-4 text-sm">{member.description}</p>

        {/* Divider */}
        <hr className="border-border my-6" />

        {/* Background */}
        <div className="flex-1">
          <h4 className="font-bold text-primary mb-3">Background</h4>

          {firstTwoParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-body text-sm ${index === 0 ? 'italic text-muted' : 'font-semibold'} ${
                index > 0 ? 'mt-3' : ''
              }`}
            >
              {paragraph}
            </p>
          ))}

          {hasMore && (
            <>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {restParagraphs.map((paragraph, index) => {
                  const isQuote = paragraph.startsWith('"') && paragraph.endsWith('"');
                  return (
                    <p
                      key={index}
                      className={`text-body text-sm mt-3 ${isQuote ? 'italic text-muted' : ''}`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-accent font-semibold hover:underline mt-3 cursor-pointer inline-flex items-center gap-1"
              >
                {expanded ? 'Vezi mai putin' : 'Vezi mai mult'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Testimonial - visible only when expanded */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-border pt-6 mt-6">
            <div className="flex items-center gap-3">
              {member.testimonial.photo && (
                <img
                  src={member.testimonial.photo}
                  alt={member.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-bold text-sm text-primary">{member.testimonial.author}</p>
                <p className="text-muted text-xs">{member.testimonial.role}</p>
              </div>
            </div>

            <p className="italic text-body text-sm whitespace-pre-line mt-4">
              &ldquo;{member.testimonial.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="border-t border-border pt-4 mt-6">
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Vezi profil LinkedIn: <span className="font-semibold text-primary hover:text-accent">{member.name}</span> &rarr;
          </a>
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default function TeamSection() {
  return (
    <SectionWrapper id="echipa" variant="light">
      <FadeInOnScroll>
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4 text-center">
          CU CINE VEI LUCRA
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
          Oamenii din spatele Blueprint-ului
        </h2>
        <p className="text-body mt-4 text-lg text-center">
          Nu externalizam. Nu delegam. Lucram direct cu tine.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`px-6 lg:px-10 ${
              index === 0 ? 'lg:border-r border-border' : ''
            }`}
          >
            <TeamMemberCard member={member} delay={index * 150} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
