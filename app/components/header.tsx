'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from './nav';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detecta se está em um post do blog (ex: /blog/slug)
  const isBlogPost = pathname.startsWith('/blog/') && pathname.split('/').length > 2;

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-header)] text-[var(--color-text-header)] shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          Marllon Panisset
        </Link>

        {/* Se for um post do blog → Header simplificado */}
        {isBlogPost ? (
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline"
            >
              ← Voltar para o Blog
            </Link>
            <ThemeSwitcher />
          </div>
        ) : (
          <>
            {/* Mobile */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeSwitcher />
              <button
                onClick={toggleMenu}
                className="z-50 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div
                  className="w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isMenuOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none',
                  }}
                ></div>
                <div
                  className="w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out my-1"
                  style={{ opacity: isMenuOpen ? 0 : 1 }}
                ></div>
                <div
                  className="w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -6px)' : 'none',
                  }}
                ></div>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-4">
              <Navbar 
                onLinkClick={() => setIsMenuOpen(false)} 
                activePath={pathname}
              />
              <ThemeSwitcher />
            </div>
          </>
        )}
      </div>

      {/* Mobile overlay menu */}
      {!isBlogPost && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/65 backdrop-blur z-200 transition-opacity duration-1000 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 flex items-center min-h-screen">
            <Navbar 
              onLinkClick={() => setIsMenuOpen(false)} 
              isMobileMenu={true} 
              activePath={pathname}
            />
          </div>
        </div>
      )}
    </header>
  );
}
