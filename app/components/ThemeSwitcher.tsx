// components/ThemeSwitcher.tsx
'use client'; // Indica que este é um componente do lado do cliente no Next.js, permitindo o uso de hooks e eventos de clique.

import { useTheme } from 'next-themes'; // Hook da biblioteca 'next-themes' para gerenciar o tema (claro/escuro).
import { Moon, Sun } from 'lucide-react'; // Importa os ícones de sol e lua da biblioteca Lucide.

export function ThemeSwitcher() {
  // Obtém o tema atual e a função para alterá-lo.
  const { theme, setTheme } = useTheme();

  return (
    // Botão que o usuário vai clicar para mudar o tema.
    <button
      // O evento de clique verifica o tema atual e o altera para o oposto.
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      // Classes do Tailwind para estilo, transições e acessibilidade.
      className="flex p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode" // Atributo de acessibilidade para leitores de tela.
    >
      {/* Ícone do sol (representa o modo claro) */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-light-text-primary dark:text-dark-text-primary" />
      {/* A classe "dark:scale-0" esconde o sol quando o tema é 'dark'.
        A classe "dark:-rotate-90" adiciona uma animação de rotação para fora.
      */}

      {/* Ícone da lua (representa o modo escuro) */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-light-text-primary dark:text-dark-text-primary" />
      {/* A classe "scale-0" o esconde por padrão.
        A classe "dark:scale-100" o mostra quando o tema é 'dark'.
        A classe "dark:rotate-0" adiciona uma animação de rotação para dentro.
      */}
    </button>
  );
}
