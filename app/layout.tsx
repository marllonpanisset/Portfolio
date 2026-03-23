// app/layout.tsx
import { Inter } from 'next/font/google';
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
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Marllon Panisset | Crio sites que vendem e atraem clientes',
    template: '%s | Marllon Panisset',
  },
  description:
    'Desenvolvedor front-end com 8 anos de experiência. Crio sites institucionais, landing pages de alta conversão e otimização para Google (SEO local). Ajudo seu negócio a aparecer online e conquistar mais clientes.',
  openGraph: {
    title: 'Marllon Panisset | Crio sites que vendem',
    description:
      'Precisa de um site que traga clientes? Especialista em landing pages, SEO local e manutenção. Atendimento remoto.',
    url: baseUrl,
    siteName: 'Marllon Panisset',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Marllon Panisset - Desenvolvedor Front-End',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marllon Panisset | Crio sites que vendem',
    description:
      'Precisa de um site que traga clientes? Especialista em landing pages, SEO local e manutenção. Atendimento remoto.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@seuusuario', // substitua pelo seu @ do Twitter
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
  alternates: {
    canonical: baseUrl,
  },
};

const cx = (...classes: (string | boolean | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={cx(inter.variable)} suppressHydrationWarning>
      <body
        className={cx(
          'antialiased',
          'bg-[var(--color-bg-primary)]',
          'text-[var(--color-text-primary)]',
          'font-sans',
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