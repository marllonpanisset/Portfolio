import { Inter, Space_Grotesk } from 'next/font/google';
import './global.css';
import type { Metadata } from 'next';
import { Header } from './components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Marllon Panisset | Sites profissionais para empresas',
    template: '%s | Marllon Panisset',
  },
  description:
    'Criação de sites profissionais e posicionamento digital para empresas que querem transmitir confiança e fechar mais negócios.',
  openGraph: {
    title: 'Marllon Panisset | Sites profissionais',
    description:
      'Sites estratégicos para empresas que querem crescer e transmitir autoridade.',
    url: baseUrl,
    siteName: 'Marllon Panisset',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans antialiased">
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