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

// Adiciona a prop opcional 'isFooter' à interface.
interface NavbarProps {
  onLinkClick: () => void;
  isFooter?: boolean;
}

export function Navbar({ onLinkClick, isFooter }: NavbarProps) {
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
    <nav className="flex flex-col md:flex-row items-center justify-center h-full w-full">
      <div className="items-center w-full flex flex-col md:flex-row space-x-0">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path;
          const isAnchor = path.startsWith('#');
          const href = isAnchor && pathname !== '/' ? `/${path}` : path;
          
          return (
            <Link
              key={path}
              href={href}
              onClick={isAnchor ? (e) => handleScroll(e, path) : onLinkClick}
              className={`transition-all hover:text-[var(--color-text-primary)] flex align-middle relative px-2 m-1 ${isFooter ? 'py-2' : 'py-4 md:py-1'} ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}