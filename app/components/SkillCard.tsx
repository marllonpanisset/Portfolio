// app/components/SkillCard.tsx
import { ElementType } from 'react';

interface SkillCardProps {
  name: string;
  Icon: ElementType; // Usamos ElementType para poder passar o componente do ícone como prop
}

export function SkillCard({ name, Icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-32 h-32 p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105">
      <Icon className="w-12 h-12 mb-2 text-[var(--color-text-accent)]" />
      <span className="text-sm font-medium text-center text-[var(--color-text-primary)]">
        {name}
      </span>
    </div>
  );
}