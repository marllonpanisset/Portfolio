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
  
  // NOVO: Processa a descrição para quebrar linhas em cada bullet point.
  // 1. Remove o primeiro bullet point (se houver) para evitar um item vazio no topo.
  // 2. Divide a string pelo bullet point '•'.
  // 3. Mapeia o array resultante, adicionando o bullet point de volta a cada item.
  const descriptionPoints = experience.description
    .trim()
    .split('\n•') // Divide por quebra de linha seguida de bullet (se o formato for o que enviei)
    .map(point => point.trim())
    .filter(point => point.length > 0)
    .map(point => `• ${point}`); // Adiciona o bullet de volta no início

  return (
    <div data-testid="timeline-item" className="flex w-full flex-row items-center gap-4 mb-8 md:justify-center md:items-center">
      
      {/* LADO VAZIO (APENAS DESKTOP) */}
      <div className={`hidden md:block md:w-[53%] ${emptySpaceOrderClass}`}></div>

      {/* GUTTER E PONTO */}
      <div className="md:absolute z-10 flex-shrink-0 w-8 flex justify-center items-center md:order-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-tertiary)]">
          <div className="h-4 w-4 rounded-full bg-[var(--color-text-accent)]"></div>
        </div>
      </div>

      {/* CARD DE EXPERIÊNCIA */}
      <div className={`rounded-lg bg-[var(--color-bg-secondary)] p-4 shadow-md flex-1 md:w-[53%] ${cardOrderClass}`}>
        <h3 className="text-xl font-semibold text-[var(--color-text-accent)]">{experience.role}</h3>
        <h4 className="text-md text-[var(--color-text-secondary)]">{experience.company}</h4>
        <p className="mt-2 text-xs text-[var(--color-text-secondary)]">{experience.period}</p>
        
        {/* NOVO: Mapeia e renderiza cada ponto da descrição */}
        <div className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {descriptionPoints.map((point, index) => (
            <p key={index} className="mb-1 last:mb-0">
              {point}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}