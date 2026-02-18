import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

function reportWebVitals() {
  if (!('PerformanceObserver' in window)) return;

  const send = (name: string, value: number) => {
    if (import.meta.env.DEV) {
      console.log(`[Web Vital] ${name}: ${Math.round(value)}ms`);
    } else if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    }
  };

  // LCP
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const last = entries[entries.length - 1] as PerformanceEntry;
    if (last) send('LCP', last.startTime);
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  // CLS
  let clsValue = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
        clsValue += (entry as PerformanceEntry & { value: number }).value;
      }
    }
    send('CLS', clsValue * 1000);
  }).observe({ type: 'layout-shift', buffered: true });

  // INP (replaces FID)
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      send('INP', entry.duration);
    }
  }).observe({ type: 'event', buffered: true });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals()
