// __tests__/ProjectsSection.test.tsx
import { render, screen } from '@testing-library/react';
import ProjectsSection from '../app/sections/projects'; // Importação corrigida para o componente padrão
import '@testing-library/jest-dom';

describe('ProjectsSection', () => {
  it('renderiza o título principal e as descrições dos projetos', () => {
    // Renderiza o componente ProjectsSection
    render(<ProjectsSection />);
    
    // Verifica o título principal da seção
    const mainHeading = screen.getByRole('heading', { name: /projetos/i });
    expect(mainHeading).toBeInTheDocument();

    // Verifica os títulos dos projetos, usando o nível de heading (h3)
    const projectHeading1 = screen.getByRole('heading', { level: 3, name: /portfólio \+ blog em next.js/i });
    const projectHeading2 = screen.getByRole('heading', { level: 3, name: /dashboard interativo/i });
    const projectHeading3 = screen.getByRole('heading', { level: 3, name: /jogo sorteio do amigo secreto/i });
    const projectHeading4 = screen.getByRole('heading', { level: 3, name: /jogo do número secreto/i });
    
    expect(projectHeading1).toBeInTheDocument();
    expect(projectHeading2).toBeInTheDocument();
    expect(projectHeading3).toBeInTheDocument();
    expect(projectHeading4).toBeInTheDocument();

    // Corrige a busca por texto para usar `getAllByText` e verificar o número de elementos encontrados
    const projectDescriptions = screen.getAllByText((content, element) => {
      // Adiciona verificação de null para evitar erro do TypeScript
      return element !== null && element.textContent.includes('Esse site que você está navegando.');
    });

    // Se o teste falhar, é porque ele encontrou vários elementos com o mesmo texto. 
    // Uma solução melhor é usar `getByText` e garantir que cada descrição seja única.
    // Vamos garantir que a descrição exista
    const projectDescription1 = screen.getByText('Esse site que você está navegando.');
    const projectDescription2 = screen.getByText('projeto que une api de cotação de moedas e dashboard para visualização');
    const projectDescription3 = screen.getByText('Este projeto é um sorteador de amigos desenvolvido com JavaScript');
    const projectDescription4 = screen.getByText('jogo para adivinhar um número secreto');

    expect(projectDescription1).toBeInTheDocument();
    expect(projectDescription2).toBeInTheDocument();
    expect(projectDescription3).toBeInTheDocument();
    expect(projectDescription4).toBeInTheDocument();
  });

  it('renderiza os links e imagens dos projetos', () => {
    // Renderiza o componente ProjectsSection
    render(<ProjectsSection />);
    
    // Verifica os links de GitHub e Projeto para cada card
    const githubLinks = screen.getAllByRole('link', { name: /github/i });
    const projectLinks = screen.getAllByRole('link', { name: /projeto/i });

    expect(githubLinks).toHaveLength(4);
    expect(projectLinks).toHaveLength(4);

    // Verifica as imagens dos projetos pelo alt text
    const projectImages = screen.getAllByRole('img');
    expect(projectImages).toHaveLength(4);
    
    const projectImage1 = screen.getByRole('img', { name: /portfólio \+ blog em next.js/i });
    const projectImage2 = screen.getByRole('img', { name: /dashboard interativo/i });
    const projectImage3 = screen.getByRole('img', { name: /jogo sorteio do amigo secreto/i });
    const projectImage4 = screen.getByRole('img', { name: /jogo do número secreto/i });

    expect(projectImage1).toBeInTheDocument();
    expect(projectImage2).toBeInTheDocument();
    expect(projectImage3).toBeInTheDocument();
    expect(projectImage4).toBeInTheDocument();
  });
});
