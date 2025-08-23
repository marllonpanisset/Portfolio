// app/components/TimelineItem.tsx
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  experience: Experience;
  isReversed: boolean; // Controla se o card fica à esquerda ou à direita
}

export function TimelineItem({ experience, isReversed }: TimelineItemProps) {
  const alignmentClass = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`mb-8 flex justify-between items-center w-full ${alignmentClass}`}>
      {/* Lado vazio da timeline para o alinhamento */}
      <div className="hidden md:block md:w-5/12"></div>
      
      {/* Ponto na linha da timeline */}
      <div className="flex items-center justify-center relative z-10 w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] text-white shrink-0">
        <div className="w-4 h-4 rounded-full bg-[var(--color-text-accent)]"></div>
      </div>

      {/* Lado com o cartão de experiência */}
      <div className="p-4 rounded-lg shadow-md w-full md:w-5/12 bg-[var(--color-bg-secondary)]">
        <h3 className="text-xl font-semibold text-[var(--color-text-accent)]">{experience.role}</h3>
        <h4 className="text-md text-[var(--color-text-secondary)]">{experience.company}</h4>
        <p className="text-xs mt-2 text-[var(--color-text-secondary)]">{experience.period}</p>
        <p className="text-sm mt-2 text-[var(--color-text-secondary)]">{experience.description}</p>
      </div>
    </div>
  );
}