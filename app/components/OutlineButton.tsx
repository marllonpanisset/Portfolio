// app/components/OutlineButton.tsx
'use client';

// Este componente cria um botão secundário com o estilo de borda do tema.

// Define as propriedades que o componente aceita.
interface OutlineButtonProps {
  href: string;
  children: React.ReactNode;
  download?: boolean; // '?' torna a propriedade opcional.
}

export function OutlineButton({ href, children, download }: OutlineButtonProps) {
  // Função para lidar com a rolagem suave quando o link é uma âncora.
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
      className="border-2 border-[var(--color-text-accent)] text-[var(--color-text-accent)] font-semibold py-3 px-8 rounded-full hover:bg-[var(--color-text-accent)] hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}
