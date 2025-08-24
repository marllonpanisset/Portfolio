// components/nav.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect } from 'react';

const navItems = {
  '#inicio': { name: 'Início' },
  '#sobre-mim': { name: 'Sobre' },
  '#projetos': { name: 'Projetos' },
  '#contato': { name: 'Contato' },
  '/blog': { name: 'Blog' },
};

// Adiciona a prop opcional 'isFooter' e 'isMobileMenu' à interface.
interface NavbarProps {
  onLinkClick: () => void;
  isFooter?: boolean;
  isMobileMenu?: boolean; // Nova prop para identificar o menu mobile
}

export function Navbar({ onLinkClick, isFooter, isMobileMenu }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onLinkClick();

    const isAnchor = path.startsWith('#');
    const isHomePage = pathname === '/';
    const targetId = path.substring(1);
    const offset = 72;

    if (isAnchor && isHomePage) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const finalPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth',
        });
      }
    } else if (isAnchor && !isHomePage) {
      router.push(`/${path}`);
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      const offset = 72;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const finalPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [pathname]);

  return (
    <nav className={`flex flex-col md:flex-row items-center h-full w-full  ${isFooter ? '' : 'justify-center'}`}>
      <div className={`items-center w-full flex ${isFooter ? 'flex-row space-x-2 sm:space-x-4 lg:space-x-6' : 'flex-col md:flex-row md:space-x-0'}`}>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path;
          const isAnchor = path.startsWith('#');
          const href = isAnchor && pathname !== '/' ? `/${path}` : path;
          
          return (
            <Link
              key={path}
              href={href}
              onClick={isAnchor ? (e) => handleScroll(e, path) : onLinkClick}
              className={`transition-all flex align-middle relative px-2 m-1 
              ${isMobileMenu ? 'text-white text-2xl font-bold py-6 hover:scale-110' : ''}
              ${isFooter ? 'text-gray-300 hover:text-white text-sm sm:text-base lg:text-lg py-2' : ''}
              ${!isMobileMenu && !isFooter ? `text-lg py-4 md:py-1 ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'} hover:text-[var(--color-text-primary)]` : ''}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
