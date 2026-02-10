import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  text: string;
  buttonText?: string;
  href?: string;
}

export function CTABanner({ text, buttonText = 'Rezerva-ti Locul', href = '#aplica' }: CTABannerProps) {
  return (
    <div className="py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl py-8 px-6 md:px-10 text-center">
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-5">{text}</p>
          <a href={href} className="btn-primary text-base px-8 py-3">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
