// components/nav.tsx
'use client'; // Indica que este é um componente do lado do cliente.

import Link from 'next/link'; // Importa o componente 'Link' do Next.js para navegação otimizada.
import { usePathname, useRouter } from 'next/navigation'; // Hooks do Next.js para obter o caminho atual e para navegação programática.
import { MouseEvent, useEffect } from 'react'; // Importa tipos e hooks do React.

// Objeto que define os itens de navegação, mapeando o caminho (rota ou âncora) para um nome.
const navItems = {
  '#inicio': { name: 'Início' },
  '#sobre-mim': { name: 'Sobre' },
  '#projetos': { name: 'Projetos' },
  '#contato': { name: 'Contato' },
  '/blog': { name: 'Blog' },
};

// Componente da barra de navegação.
// Recebe 'onLinkClick' como uma prop, que é uma função para ser executada ao clicar em um link.
export function Navbar({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname(); // Obtém a rota atual.
  const router = useRouter(); // Instância do roteador para navegação programática.

  // Função para lidar com o clique em links de âncora (#).
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault(); // Previne o comportamento padrão do link, que é navegar para a âncora.
    onLinkClick(); // Chama a função passada como prop, útil para fechar menus mobile.

    const isAnchor = path.startsWith('#'); // Verifica se o link é uma âncora.
    const isHomePage = pathname === '/'; // Verifica se o usuário está na página inicial.
    const targetId = path.substring(1); // Remove o '#' do caminho para obter o ID do elemento.
    const offset = 72; // Define um deslocamento para o cabeçalho fixo.

    // Se for uma âncora e o usuário estiver na página inicial, faz um scroll suave.
    if (isAnchor && isHomePage) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const finalPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth',
        });
      }
    } else if (isAnchor && !isHomePage) {
      // Se for uma âncora e o usuário NÃO estiver na página inicial, navega para a home e depois faz o scroll.
      router.push(`/${path}`);
    }
  };

  // Hook 'useEffect' para lidar com a navegação direta para âncoras na URL.
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash; // Obtém a âncora da URL (ex: #contato).
      const offset = 72;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const finalPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [pathname]); // O efeito é executado sempre que a rota muda.

  return (
    // Estrutura principal da navegação com classes do Tailwind para responsividade.
    <nav className="flex flex-col md:flex-row items-center justify-center h-full w-full">
      <div className="items-center w-full flex flex-col md:flex-row space-x-0">
        {/* Mapeia o objeto 'navItems' para criar links dinamicamente. */}
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path; // Verifica se o link atual é o ativo.
          const isAnchor = path.startsWith('#'); // Verifica se o link é uma âncora.
          // Define o 'href' correto: para âncoras fora da home, navega para a home e depois para a âncora.
          const href = isAnchor && pathname !== '/' ? `/${path}` : path;
          
          return (
            // Componente 'Link' renderizado para cada item.
            <Link
              key={path}
              href={href}
              // O evento de clique usa 'handleScroll' apenas para links de âncora.
              onClick={isAnchor ? (e) => handleScroll(e, path) : onLinkClick}
              className={`transition-all hover:text-[var(--color-text-primary)] flex align-middle relative py-4 px-2 m-1 md:py-1 ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
