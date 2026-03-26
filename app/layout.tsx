import { Inter, Space_Grotesk } from 'next/font/google';
import './global.css';
import type { Metadata } from 'next';
import { Header } from './components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { ThemeProvider } from './components/ThemeProvider';

// Fonts
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

// URLs públicas absolutas para OG Image
const BASE_URL = 'https://marllonpanisset.netlify.app/';
const OG_IMAGE_URL = 'https://marllonpanisset.netlify.app/og-image.png';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Título e descrição principais
  title: {
    default: 'Marllon Panisset | Sites Profissionais para Empresas que Vendem Mais',
    template: '%s | Marllon Panisset',
  },
  description:
    'Transforme sua presença digital com sites modernos, estratégicos e focados em conversão. Conquiste clientes, destaque sua marca e aumente suas vendas online.',

  // Favicons e ícones
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Marllon Panisset | Sites Estratégicos para Empresas que Crescem',
    description:
      'Criação de sites profissionais e estratégicos que ajudam empresas a transmitir autoridade, conquistar clientes e aumentar vendas online.',
    url: BASE_URL,
    siteName: 'Marllon Panisset',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Marllon Panisset - Sites Estratégicos para Empresas',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Marllon Panisset | Sites Estratégicos e Profissionais',
    description:
      'Aumente sua presença digital e conquiste mais clientes com sites modernos, estratégicos e focados em conversão.',
    images: [OG_IMAGE_URL],
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