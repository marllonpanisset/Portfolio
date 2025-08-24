// app/sections/HeroSection.tsx
import Image from 'next/image'; // Importa o componente 'Image' otimizado do Next.js.

// Este é o componente principal da seção de boas-vindas na página.
export function HeroSection() {
  return (
    // Seção HTML com o ID "inicio", que serve como âncora para a navegação.
    // As classes do Tailwind definem o estilo, alinhamento e espaçamento da seção.
    <section
      id="inicio"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex min-h-screen pt-20"
    >
      {/* Container principal para o conteúdo da seção hero. */}
      {/* O padding horizontal (px) foi ajustado para telas md e maiores. */}
      <div className="w-full flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Lado esquerdo: Título e descrições. */}
        <div className="flex-1 text-center md:text-left lg:text-left mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Olá, sou o</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--color-text-accent)]">Marllon Panisset</h3>
          <p className="mt-4 text-xl md:text-2xl text-[var(--color-text-secondary)]">Desenvolvedor Front-End</p>
        </div>
        
        {/* Lado direito: Foto de perfil. */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* O componente 'Image' otimiza a imagem para diferentes tamanhos de tela. */}
          <Image
            src="/perfil.png" // Caminho para a imagem de perfil.
            alt="Foto de Marllon Panisset" // Texto alternativo para acessibilidade.
            width={400}
            height={400}
            // Aplica classes de tamanho diferentes para telas:
            // - Mobile (padrão): 180px x 180px
            // - Tablet (md: 768px): 240px x 240px
            // - Desktop (lg: 1024px): 400px x 400px
            className="rounded-full shadow-lg border-8 border-[var(--color-text-accent)] w-[180px] h-[180px] md:w-[240px] md:h-[240px] lg:w-[400px] lg:h-[400px]"
            priority // Otimiza o carregamento da imagem para a primeira visualização.
          />
        </div>
      </div>
    </section>
  );
}
