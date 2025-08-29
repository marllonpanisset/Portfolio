import { render, screen } from '@testing-library/react';
import { HeroSection } from '../app/sections/hero';
import '@testing-library/jest-dom';

describe('HeroSection', () => {
  it('renderiza o título principal e subtítulo', () => {
    render(<HeroSection />);
    
    // Verifica os textos dos headings
    const mainHeading = screen.getByRole('heading', { level: 1, name: /olá, sou o marllon panisset/i });
    const subHeading = screen.getByRole('heading', { level: 2, name: /desenvolvedor front-end/i });
    
    expect(mainHeading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });

  it('renderiza os links de ação', () => {
    render(<HeroSection />);
    
    // Usa o role "link" em vez de "button"
    const projectsLink = screen.getByRole('link', { name: /ver projetos/i });
    const cvLink = screen.getByRole('link', { name: /baixar cv/i });
    
    expect(projectsLink).toBeInTheDocument();
    expect(cvLink).toBeInTheDocument();
  });

  it('renderiza a imagem de perfil', () => {
    render(<HeroSection />);
    
    // Verifica a imagem de perfil
    const profileImage = screen.getByRole('img', { name: /Foto de Marllon Panisset/i });
    
    expect(profileImage).toBeInTheDocument();
  });
});
