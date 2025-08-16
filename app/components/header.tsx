// components/header.tsx
'use client';

import { useState } from 'react';
import { Navbar } from './nav';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-md transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 md:py-6">
        <h1 className="text-2xl font-bold">Marllon Panisset</h1>

        {/* Botões do header para mobile - visível em telas menores que md */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <button
            onClick={toggleMenu}
            className="z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Ícone de Hambúrguer ou X */}
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none' }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-opacity duration-300 ease-in-out my-1"
              style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -6px)' : 'none' }}></div>
          </button>
        </div>

        {/* Menu de desktop e o ThemeSwitcher no desktop - visível a partir de md */}
        <div className="hidden md:flex items-center gap-4">
          <Navbar onLinkClick={() => setIsMenuOpen(false)} />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Menu mobile em tela cheia */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[var(--color-bg-primary)] z-40 transition-transform duration-500 ease-in-out transform md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 flex items-center min-h-screen">
          <Navbar onLinkClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}