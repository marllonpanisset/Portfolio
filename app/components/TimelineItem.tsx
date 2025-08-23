// app/components/TimelineItem.tsx

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  experience: Experience;
  isReversed: boolean;
}

export function TimelineItem({ experience, isReversed }: TimelineItemProps) {
  // Estas classes controlam a ordem dos elementos APENAS em telas de desktop (md e acima)
  const cardOrderClass = isReversed ? 'md:order-1' : 'md:order-3';
  const emptySpaceOrderClass = isReversed ? 'md:order-3' : 'md:order-1';

  return (
    // Container Principal:
    // Mobile: 'flex-row' alinha os itens horizontalmente (padrão, mas explícito).
    // 'items-center' centraliza os itens verticalmente (incluindo o card e a bolinha).
    // Desktop: 'md:justify-center' centraliza todo o grupo de 3 colunas (card, bolinha, espaço).
    // 'md:items-center' garante que as bolinhas fiquem centralizadas verticalmente com os cards.
    <div className="flex w-full flex-row items-center gap-4 mb-8 md:justify-center md:items-center">
      
      {/* LADO VAZIO (APENAS DESKTOP) */}
      {/* Este bloco invisível só aparece no desktop para criar o alinhamento alternado. */}
      {/* A nova classe 'md:w-[45%]' ajusta o tamanho para dar mais espaço. */}
      <div className={`hidden md:block md:w-[53%] ${emptySpaceOrderClass}`}></div>

      {/* GUTTER E PONTO */}
      {/* O ponto central da timeline. Fica sempre no meio no desktop ('md:order-2'). */}
      {/* A largura fixa de 8 e flex-shrink-0 garantem que ele não encolha. */}
      <div className="md:absolute z-10 flex-shrink-0 w-8 flex justify-center items-center md:order-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-tertiary)]">
          <div className="h-4 w-4 rounded-full bg-[var(--color-text-accent)]"></div>
        </div>
      </div>

      {/* CARD DE EXPERIÊNCIA */}
      {/* A nova classe 'md:w-[45%]' ajusta o tamanho do card no desktop para 45%. */}
      <div className={`rounded-lg bg-[var(--color-bg-secondary)] p-4 shadow-md flex-1 md:w-[53%] ${cardOrderClass}`}>
        <h3 className="text-xl font-semibold text-[var(--color-text-accent)]">{experience.role}</h3>
        <h4 className="text-md text-[var(--color-text-secondary)]">{experience.company}</h4>
        <p className="mt-2 text-xs text-[var(--color-text-secondary)]">{experience.period}</p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{experience.description}</p>
      </div>

    </div>
  );
}
