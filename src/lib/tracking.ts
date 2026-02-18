/* ------------------------------------------------------------------ */
/*  Tracking utilities — GA4, Meta Pixel, LinkedIn Insight Tag         */
/*  Scripts are injected only after cookie consent + env var present.   */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
    lintrk: (...args: unknown[]) => void;
    _linkedin_data_partner_ids: string[];
  }
}

let trackingLoaded = false;

/* — Google Analytics 4 ——————————————————————————————— */

function loadGA4(measurementId: string) {
  if (!measurementId || document.querySelector(`script[src*="gtag/js?id=${measurementId}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}

/* — Meta Pixel ————————————————————————————————————— */

function loadMetaPixel(pixelId: string) {
  if (!pixelId || typeof window.fbq === 'function') return;

  /* Meta Pixel base code (official snippet adapted for TS) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fbq: any = function (...args: unknown[]) {
    fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [] as unknown[];
  window.fbq = fbq;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);

  fbq('init', pixelId);
  fbq('track', 'PageView');
}

/* — LinkedIn Insight Tag ——————————————————————————— */

function loadLinkedIn(partnerId: string) {
  if (!partnerId || document.querySelector('script[src*="snap.licdn.com"]')) return;

  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(partnerId);

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(s);
}

/* — Public API ————————————————————————————————————— */

export function initTracking() {
  if (trackingLoaded) return;
  trackingLoaded = true;

  const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  const linkedInId = import.meta.env.VITE_LINKEDIN_PARTNER_ID;

  if (ga4Id) loadGA4(ga4Id);
  if (pixelId) loadMetaPixel(pixelId);
  if (linkedInId) loadLinkedIn(linkedInId);
}

export function trackFormSubmission() {
  if (!trackingLoaded) return;

  // GA4
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: 'pilot_application',
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }

  // LinkedIn
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: import.meta.env.VITE_LINKEDIN_CONVERSION_ID });
  }
}
