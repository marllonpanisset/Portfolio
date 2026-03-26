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
  
  // Configuração de Favicons e Ícones
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }, // Caso tenha um favicon.png geral
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Configuração do Open Graph (Redes Sociais)
  openGraph: {
    title: 'Marllon Panisset | Sites profissionais',
    description:
      'Sites estratégicos para empresas que querem crescer e transmitir autoridade.',
    url: baseUrl,
    siteName: 'Marllon Panisset',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Nome do arquivo que você salvou na pasta public
        width: 1200,
        height: 630,
        alt: 'Marllon Panisset - Posicionamento Digital',
      },
    ],
  },

  // Configuração para o Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Marllon Panisset | Sites profissionais',
    description: 'Sites estratégicos para empresas que querem crescer.',
    images: ['/og-image.png'],
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