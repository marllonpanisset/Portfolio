// Seu layout.tsx ajustado
import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Header } from './components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Portfólio | Marllon Panisset - Desenvolvedor Front-End',
    template: '%s | Portfólio | Marllon Panisset - Desenvolvedor Front-End',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Portfólio | Marllon Panisset',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Portfólio | Marllon Panisset',
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

// Define a função cx com tipagem adequada para evitar erros
const cx = (...classes: (string | boolean | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body
        className={cx(
          'antialiased',
          'bg-[var(--color-bg-primary)]',
          'text-[var(--color-text-primary)]'
        )}
      >
        <ThemeProvider
          // Remove o attribute="class" para que ele use o data-theme
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}