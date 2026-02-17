import FadeInOnScroll from '../ui/FadeInOnScroll';

interface CTABannerProps {
  text: string;
  buttonText: string;
  caption?: string;
  variant: 'accent' | 'dark';
  onButtonClick: () => void;
}

export default function CTABanner({
  text,
  buttonText,
  caption = 'Inscrierea dureaza sub 2 minute. Fara angajament.',
  variant,
  onButtonClick,
}: CTABannerProps) {
  const sectionClasses =
    variant === 'accent'
      ? 'bg-gradient-to-r from-accent to-[#FF6B35]'
      : 'bg-gradient-to-br from-dark to-dark-end';

  const buttonClasses =
    variant === 'accent'
      ? 'bg-white text-accent hover:bg-gray-50'
      : 'bg-accent text-white hover:bg-accent-hover';

  return (
    <section className={sectionClasses}>
      <FadeInOnScroll>
        <div className="max-w-3xl mx-auto py-8 md:py-10 px-6 text-center">
          <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
            {text}
          </p>

          <button
            onClick={onButtonClick}
            className={`mt-5 inline-flex items-center justify-center font-semibold text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5 rounded-xl transition-colors duration-200 cursor-pointer ${buttonClasses}`}
          >
            {buttonText}
          </button>

          {caption && (
            <p className="text-sm text-white/70 mt-2">{caption}</p>
          )}
        </div>
      </FadeInOnScroll>
    </section>
  );
}
