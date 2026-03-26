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
    'Transforme sua presença digital com sites profissionais e estratégicos que transmitem confiança, destacam sua marca e aumentam suas vendas.',

  // Favicons e Ícones
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  // Open Graph (Redes Sociais)
  openGraph: {
    title: 'Marllon Panisset | Sites profissionais e estratégicos',
    description:
      'Sites modernos e estratégicos para empresas que querem crescer, transmitir autoridade e conquistar clientes com confiança.',
    url: `${baseUrl}`,
    siteName: 'Marllon Panisset',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: `${baseUrl}og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Marllon Panisset - Sites estratégicos para empresas',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Marllon Panisset | Sites profissionais e estratégicos',
    description:
      'Transforme sua presença digital com sites que destacam sua marca, transmitem autoridade e aumentam suas vendas.',
    images: [`${baseUrl}og-image.png`],
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