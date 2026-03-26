'use client';

import Link from 'next/link';
import { MouseEvent } from 'react';
import clsx from 'clsx';

const navItems = [
  { href: '#inicio', name: 'Início' },
  { href: '#services', name: 'Soluções' },
  { href: '#projects', name: 'Projetos' },
  { href: '#contact', name: 'Contato' },
];

interface NavbarProps {
  onLinkClick: () => void;
  isFooter?: boolean;
  isMobileMenu?: boolean;
}

export function Navbar({ onLinkClick, isFooter, isMobileMenu }: NavbarProps) {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onLinkClick();

    const element = document.getElementById(target);
    if (element) {
      const offset = 80;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={clsx(
        'flex items-center w-full',
        isFooter ? 'justify-center flex-wrap gap-6' : 'justify-center'
      )}
    >
      {navItems.map((item) => {
        const target = item.href.replace('#', '');

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, target)}
            className={clsx(
              'transition-all duration-300 whitespace-nowrap',
              
              // Desktop padrão
              !isMobileMenu && !isFooter &&
                'text-base px-4 py-2 text-[var(--color-text-header)] hover:text-[var(--color-text-accent)]',

              // Mobile menu
              isMobileMenu &&
                'text-2xl font-semibold text-white py-4 hover:scale-105 transition-transform',

              // Footer
              isFooter &&
                'text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}