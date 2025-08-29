// __tests__/AboutSection.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '../app/sections/about';

describe('AboutSection', () => {
  it('renderiza o título principal "Sobre Mim"', () => {
    const { container } = render(<AboutSection />);
    const heading = screen.getByRole('heading', { name: /sobre mim/i });
    expect(heading).toBeInTheDocument();
    expect(container.querySelector('#sobre-mim')).toBeTruthy();
  });

  it('renderiza os três parágrafos de descrição pessoal', () => {
    const { container } = render(<AboutSection />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(3);

    expect(screen.getByText(/mais de 8 anos de experiência/i)).toBeInTheDocument();
    expect(screen.getByText(/componentes reutilizáveis/i)).toBeInTheDocument();
    expect(screen.getByText(/análise e desenvolvimento de sistemas/i)).toBeInTheDocument();
  });

  it('renderiza o título "Habilidades" e todos os cards de skill', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();

    const skillNames = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'];
    skillNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('renderiza o título "Experiência" e todos os itens da timeline', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument();

    const companies = [
      'Binaria',
      'ED3 Digital',
      'AM4',
      'Sirius Interativa',
      'Sírius Interativa',
      'Hospital Rio Mar',
    ];

    companies.forEach((company) => {
      expect(screen.getByText(company)).toBeInTheDocument();
    });
  });
});
