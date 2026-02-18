import { useState, useEffect } from 'react';
import { initTracking } from '../../lib/tracking';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') {
      initTracking();
    } else if (!stored) {
      // Small delay so the page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    // 'rejected' → do nothing, stay hidden
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    initTracking();
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 animate-slide-up"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto max-w-5xl px-4 pb-4 md:px-6">
        <div className="rounded-2xl bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.10)] border border-gray-100 px-5 py-4 md:flex md:items-center md:gap-6">
          {/* Text */}
          <p className="text-sm text-body leading-relaxed md:flex-1">
            Folosim cookie-uri pentru a analiza traficul și a îmbunătăți experiența pe site.
            Detalii în{' '}
            <a
              href="/legal/confidentialitate.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:text-accent-hover"
            >
              Politica de Confidențialitate
            </a>
            .
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-3 md:mt-0 md:shrink-0">
            <button
              onClick={reject}
              className="px-5 py-2.5 text-sm font-medium text-muted hover:text-primary border border-gray-200 rounded-xl transition-colors duration-200"
            >
              Refuz
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-colors duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
