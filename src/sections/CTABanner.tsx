import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  text: string;
  buttonText?: string;
  href?: string;
}

export function CTABanner({ text, buttonText = 'Vreau Planul Meu', href = '#aplica' }: CTABannerProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12 md:py-16 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(91,106,232,0.12)_0%,transparent_50%)] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <p className="text-lg md:text-xl font-bold text-white mb-5">{text}</p>
        <a href={href} onClick={handleClick} className="btn-primary text-base px-8 py-3">
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-xs text-gray-400 mt-3">Înscrierea durează sub 2 minute. Fără angajament.</p>
      </div>
    </div>
  );
}
