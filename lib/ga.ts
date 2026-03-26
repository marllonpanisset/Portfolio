// lib/ga.ts
export const GA_MEASUREMENT_ID = 'G-8VR00B27ZD'; // substitua pelo seu ID

// Tipagem para evitar erro TS
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Pageview
export const pageview = (url: string) => {
  if (!window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
};

// Evento personalizado (ex: lead)
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!window.gtag) return;
  window.gtag('event', action, { event_category: category, event_label: label, value });
};