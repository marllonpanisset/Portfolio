'use client'; // Indica que este componente deve ser renderizado no lado do cliente.

import { ThemeProvider as NextThemesProvider } from 'next-themes'; // Importa o provedor de tema principal da biblioteca 'next-themes', renomeando-o para evitar conflitos.

// O componente ThemeProvider é responsável por envolver a sua aplicação e fornecer o contexto do tema (claro/escuro).
// Ele recebe 'children' (os componentes aninhados) e outras 'props' para configurar o provedor.
export function ThemeProvider({ children, ...props }) {
  return (
    // 'NextThemesProvider' é o componente que de fato gerencia o estado do tema.
    <NextThemesProvider
      attribute="data-theme"
      // Define "system" como o tema padrão, o que significa que ele seguirá as configurações do sistema operacional do usuário.
      defaultTheme="system"
      // 'enableSystem' permite que o provedor mude automaticamente o tema se o sistema operacional do usuário mudar.
      enableSystem
      // Passa todas as outras propriedades ('...props') para o provedor, tornando o componente flexível.
      {...props}
    >
      {/* Renderiza todos os componentes que estiverem "dentro" deste provedor. */}
      {children}
    </NextThemesProvider>
  );
}
