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

  // Título e descrição principais para SEO
  title: {
    default: 'Marllon Panisset | Criação de Sites Profissionais e Estratégicos para Empresas',
    template: '%s | Marllon Panisset',
  },
  description:
    'Transforme sua presença digital com sites modernos, estratégicos e focados em conversão. Destaque sua marca, conquiste clientes e aumente suas vendas online com design profissional e marketing digital integrado.',

  // Favicons e ícones
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Marllon Panisset | Sites Profissionais e Estratégicos para Empresas que Crescem',
    description:
      'Criação de sites estratégicos e modernos que ajudam empresas a transmitir autoridade, conquistar clientes e aumentar vendas online. Design, UX e marketing digital integrados para resultados reais.',
    url: BASE_URL,
    siteName: 'Marllon Panisset',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Marllon Panisset - Sites Estratégicos e Profissionais para Empresas',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Marllon Panisset | Sites Estratégicos que Convertem Clientes',
    description:
      'Aumente sua presença digital e conquiste mais clientes com sites profissionais, estratégicos e otimizados para conversão. Design moderno, UX intuitivo e marketing digital integrado.',
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
      <head>
        {/* Meta tag de verificação Google */}
        <meta
          name="google-site-verification"
          content="UgWDy6Fwyil08nk2f2vwVaGlGTTod5_trrfqgaqPKVY"
        />
      </head>
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