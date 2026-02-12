// app/components/ContactCard.tsx
import { ReactNode } from 'react';

interface ContactCardProps {
  href: string;
  icon: ReactNode;
  label: string;
  isExternal?: boolean; // Para adicionar target="_blank"
}

export function ContactCard({ href, icon, label, isExternal = false }: ContactCardProps) {
  return (
    <a
      href={href}
      data-testid="contact-card"
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 p-2 md:p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      {icon}
      <span className="text-sm md:text-lg text-center">{label}</span>
    </a>
  );
}