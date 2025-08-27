'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  className?: string;
};

function toTitleCase(str: string) {
  return decodeURIComponent(str)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumb({ className = '' }: Props) {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}>
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[var(--color-text-primary)]">Início</Link>
        </li>
        {parts.map((part, i) => {
          const href = '/' + parts.slice(0, i + 1).join('/');
          const isLast = i === parts.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <span className="opacity-60">/</span>
              {isLast ? (
                <span className="text-[var(--color-text-primary)] font-medium">{toTitleCase(part)}</span>
              ) : (
                <Link href={href} className="hover:text-[var(--color-text-primary)]">
                  {toTitleCase(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
