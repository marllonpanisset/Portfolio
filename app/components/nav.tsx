'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const navItems = {
  '#inicio': { name: 'Início' },
  '#sobre-mim': { name: 'Sobre' },
  '#xp': { name: 'Experiência' },
  '#projetos': { name: 'Projetos' },
  '#contato': { name: 'Contato' },
  '/blog': { name: 'Blog' },
};

interface NavbarProps {
  onLinkClick: () => void;
  isFooter?: boolean;
  isMobileMenu?: boolean;
  activePath: string;
}

export function Navbar({ onLinkClick, isFooter, isMobileMenu, activePath }: NavbarProps) {
  const router = useRouter();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onLinkClick();

    const isAnchor = path.startsWith('#');
    const isHomePage = activePath === '/';
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
    if (activePath === '/') {
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
  }, [activePath]);

  return (
    <nav
      className={clsx(
        'flex flex-col md:flex-row items-center h-full w-full',
        isFooter ? '' : 'justify-center'
      )}
    >
      <div
        className={clsx(
          'items-center w-full flex',
          isFooter ? 'flex-row space-x-2 sm:space-x-4 lg:space-x-6' : 'flex-col md:flex-row md:space-x-0'
        )}
      >
        {Object.entries(navItems).map(([path, { name }]) => {
          const isAnchor = path.startsWith('#');
          const href = isAnchor && activePath !== '/' ? `/${path}` : path;
          
          // Adicionamos a verificação '?' para evitar o erro se activePath for undefined
          const isBlogPage = activePath?.startsWith('/blog');
          const isCurrentBlogLink = path === '/blog';
          
          const isActive =
            !isAnchor &&
            (activePath === path || (isBlogPage && isCurrentBlogLink));

          return (
            <Link
              key={path}
              href={href}
              onClick={isAnchor ? (e) => handleScroll(e, path) : onLinkClick}
              className={clsx(
                'relative flex align-middle px-2 m-1',
                isMobileMenu && 'text-white text-2xl font-bold py-6 hover:scale-110 transition-transform duration-300',
                isFooter && 'text-gray-300 hover:text-white text-sm sm:text-base lg:text-lg py-2',
                !isMobileMenu && !isFooter && 'text-lg py-4 md:py-1',
                isActive
                  ? 'text-[var(--color-text-header)] underline font-semibold'
                  : 'text-gray-300 hover:text-white'
              )}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
