'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect } from 'react';
import clsx from 'clsx';

const navItems = {
  '#inicio': { name: 'Início' },
  '#how-i-help': { name: 'Como posso te ajudar' },
  '#services': { name: 'Serviços' },
  '#projects': { name: 'Projetos' },
  '#contact': { name: 'Contato' },
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
        window.scrollTo({ top: finalPosition, behavior: 'smooth' });
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
          window.scrollTo({ top: finalPosition, behavior: 'smooth' });
        }
      }
    }
  }, [activePath]);

  return (
    <nav
      className={clsx(
        'flex flex-col md:flex-row items-center h-full w-full overflow-x-hidden',
        isFooter ? '' : 'justify-center'
      )}
    >
      <div
        className={clsx(
          'items-center w-full',
          isFooter
            ? 'flex flex-wrap justify-center gap-6'
            : 'flex flex-col md:flex-row md:space-x-0'
        )}
      >
        {Object.entries(navItems).map(([path, { name }]) => {
          const isAnchor = path.startsWith('#');
          const href = isAnchor && activePath !== '/' ? `/${path}` : path;

          const isBlogPage = activePath?.startsWith('/blog');
          const isCurrentBlogLink = path === '/blog';

          const isActive =
            !isAnchor &&
            (activePath === path || (isBlogPage && isCurrentBlogLink));

          // Se for footer, muda "Como posso te ajudar" para "Ajuda"
          const displayName =
            isFooter && name === 'Como posso te ajudar' ? 'Ajuda' : name;

          return (
            <Link
              key={path}
              href={href}
              onClick={isAnchor ? (e) => handleScroll(e, path) : onLinkClick}
              className={clsx(
                'relative px-3 py-2 font-medium transition-all duration-300 whitespace-nowrap',
                isMobileMenu &&
                  'text-white text-2xl font-bold py-6 hover:scale-105 transition-transform',
                isFooter &&
                  'text-gray-300 hover:text-white text-sm sm:text-base lg:text-lg py-2',
                !isMobileMenu && !isFooter &&
                  'text-lg py-2 hover:text-[var(--color-accent)]',
                isActive
                  ? 'text-[var(--color-accent)] underline font-semibold'
                  : 'text-[var(--color-text-header)]'
              )}
            >
              {displayName}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}