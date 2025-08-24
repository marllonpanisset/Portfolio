// components/header.tsx
'use client'; // Marca o componente como cliente, permitindo o uso de estados (useState).

import { useState } from 'react'; // Importa o hook 'useState' do React para gerenciar o estado.
import { Navbar } from './nav'; // Importa o componente de navegação, que é usado tanto no desktop quanto no mobile.
import { ThemeSwitcher } from './ThemeSwitcher'; // Importa o componente de troca de tema.

// Componente do cabeçalho da página.
export function Header() {
  // 'useState' para controlar se o menu mobile está aberto ou fechado. O valor inicial é 'false'.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // 'header' fixo no topo da página, com classes para estilo, sombra e transições.
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-md transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 md:py-6">
        {/* Título do site que se comporta como um link para a página inicial. */}
        <h1 className="text-2xl font-bold">Marllon Panisset</h1>

        {/* Contêiner para os botões do header em telas menores que 'md'. */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Componente que permite alternar entre o tema claro e escuro. */}
          <ThemeSwitcher />
          {/* Botão para abrir e fechar o menu mobile. */}
          <button
            onClick={toggleMenu} // Chama a função 'toggleMenu' no clique.
            className="z-50 focus:outline-none"
            aria-label="Toggle menu" // Atributo de acessibilidade.
          >
            {/* Ícone de hambúrguer animado. As linhas são transformadas em um 'X' quando o menu está aberto. */}
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none' }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-opacity duration-300 ease-in-out my-1"
              style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -6px)' : 'none' }}></div>
          </button>
        </div>

        {/* Menu de desktop - visível em telas 'md' e maiores. */}
        <div className="hidden md:flex items-center gap-4">
          {/* Componente de navegação. 'onLinkClick' é passado para garantir que o menu mobile feche. */}
          <Navbar onLinkClick={() => setIsMenuOpen(false)} />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Menu mobile em tela cheia. */}
      {/* O menu é fixo e ocupa a tela inteira. A classe 'translate-x-full' o esconde fora da tela. */}
      {/* 'isMenuOpen ? 'translate-x-0' : 'translate-x-full' ' faz com que ele deslize para dentro ou para fora. */}
    <div className={`fixed top-0 left-0 w-full h-full bg-black/65 backdrop-blur z-200 transition-opacity duration-1000 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-4 flex items-center min-h-screen">
          {/* O componente de navegação é renderizado aqui para o menu mobile. */}
          {/* Adicionei a classe de opacidade no container principal para controlar a visibilidade. */}
          <Navbar onLinkClick={() => setIsMenuOpen(false)} isMobileMenu={true} />
        </div>
      </div>
    </header>
  );
}
