// app/components/GA.tsx
'use client';

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../../lib/ga';

export default function GA() {
  useEffect(() => {
    // Adiciona script GA se ainda não estiver
    if (!document.querySelector(`#ga-script`)) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(inlineScript);
    }
  }, []);

  return null; // Componente invisível
}