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
    <div className="py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl py-8 px-6 md:px-10 text-center">
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-5">{text}</p>
          <a href={href} onClick={handleClick} className="btn-primary text-base px-8 py-3">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-gray-500 mt-3">Înscrierea durează sub 2 minute. Fără angajament.</p>
        </div>
      </div>
    </div>
  );
}
