'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from './nav';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isBlogPost = pathname.startsWith('/blog/') && pathname.split('/').length > 2;

  // Bloqueia scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-header)] text-[var(--color-text-header)] shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="logo text-2xl font-black tracking-tight">
          Marllon Panisset
        </Link>

        {isBlogPost ? (
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm text-[var(--color-accent)] hover:underline">
              ← Voltar para o Blog
            </Link>
            <ThemeSwitcher />
          </div>
        ) : (
          <>
            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeSwitcher />
              <button
                onClick={toggleMenu}
                className={`relative w-6 h-6 focus:outline-none ${isMenuOpen ? 'z-[60]' : 'z-50'}`}
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-4">
              <Navbar onLinkClick={() => setIsMenuOpen(false)} activePath={pathname} />
              <ThemeSwitcher />
            </div>
          </>
        )}
      </div>

      {/* Mobile overlay menu */}
      {!isBlogPost && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col justify-center items-center min-h-screen gap-8 px-4">
            <Navbar onLinkClick={() => setIsMenuOpen(false)} isMobileMenu activePath={pathname} />
          </div>
        </div>
      )}
    </header>
  );
}