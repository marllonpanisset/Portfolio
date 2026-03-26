'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from './nav';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-header)] backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <span
            className="lg:text-4xl text-3xl font-extrabold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: 'var(--color-text-header)',
              letterSpacing: '-1px',
              textTransform: 'capitalize', // pode ser 'uppercase' ou 'lowercase'
            }}
          >
            Marllon Panisset
          </span>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeSwitcher />

          <button
            onClick={toggleMenu}
            className="relative w-6 h-6"
            aria-label="Abrir menu"
          >
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-text-header)] transition ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-text-header)] transition ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-text-header)] transition ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <Navbar onLinkClick={() => setIsMenuOpen(false)} />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur transition ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-center min-h-screen gap-8">
          <Navbar
            onLinkClick={() => setIsMenuOpen(false)}
            isMobileMenu
          />
        </div>
      </div>
    </header>
  );
}