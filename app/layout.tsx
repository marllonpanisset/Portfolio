// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google';
import './global.css';
import type { Metadata } from 'next';
import { Header } from './components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from './components/ThemeProvider';

// Fonte principal (Inter) – corpo, títulos, menus
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Fonte para logo (opcional: pode ser a mesma Inter com peso 800, mas vamos usar uma mais distinta)
// Para manter simples e evitar downloads extras, usaremos Inter com peso 800 no logo.
// Mas se quiser uma fonte específica para o logo, podemos importar Clash Display (requer CDN ou pacote)
// Vou manter Inter por enquanto, mas com ajuste de letter-spacing.
// Se desejar Clash Display, posso adicionar.

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Portfólio | Marllon Panisset - Desenvolvedor Front-End',
    template: '%s | Marllon Panisset - Desenvolvedor Front-End',
  },
  description: 'Portfólio de Marllon Panisset, desenvolvedor Front-End especializado em JavaScript, Next.js e Tailwind CSS.',
  openGraph: {
    title: 'Portfólio | Marllon Panisset - Desenvolvedor Front-End',
    description: 'Portfólio de Marllon Panisset, desenvolvedor Front-End especializado em JavaScript, Next.js e Tailwind CSS.',
    url: 'https://marllonpanisset.netlify.app',
    siteName: 'Marllon Panisset - Desenvolvedor Front-End',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes: (string | boolean | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={cx(inter.variable)}
      suppressHydrationWarning
    >
      <body
        className={cx(
          'antialiased',
          'bg-[var(--color-bg-primary)]',
          'text-[var(--color-text-primary)]',
          'font-sans', // agora 'sans' será Inter
          'transition-colors duration-300'
        )}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}