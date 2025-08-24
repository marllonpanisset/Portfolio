import './global.css';
import type { Metadata } from 'next';
import { Header } from './components/header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from './components/ThemeProvider';
import { Poppins } from 'next/font/google'; // Importação da fonte Poppins

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

// Define e carrega a fonte Poppins com os pesos que você pode precisar.
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Adicionado todos os pesos
  subsets: ['latin'],
  variable: '--font-poppins', // Cria uma variável CSS para a fonte
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      // Aplica a variável da fonte Poppins na classe da tag HTML
      className={cx(poppins.variable)}
      suppressHydrationWarning
    >
      <body
        className={cx(
          'antialiased',
          'bg-[var(--color-bg-primary)]',
          'text-[var(--color-text-primary)]',
          'font-poppins' // Adiciona a classe font-poppins para aplicar a fonte globalmente
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
