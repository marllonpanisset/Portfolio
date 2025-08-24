// app/components/PrimaryButton.tsx
'use client';

// Este componente cria um botão de destaque com o estilo primário do tema.

// Define as propriedades que o componente aceita.
interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  download?: boolean; // '?' torna a propriedade opcional.
}

export function PrimaryButton({ href, children, download }: PrimaryButtonProps) {
  // Função para lidar com a rolagem suave quando o link é uma âncora.
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Verifica se o href é um link de âncora.
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      const offset = 72; // Altura do cabeçalho fixo, igual na navegação

      if (targetElement) {
        // Calcula a posição final ajustada para o offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const finalPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <a
      href={href}
      download={download}
      onClick={handleAnchorClick} // Adiciona o evento de clique.
      className="bg-[var(--color-text-accent)] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-80 transition-colors duration-300"
    >
      {children}
    </a>
  );
}