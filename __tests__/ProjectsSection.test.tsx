// __tests__/ProjectsSection.test.tsx
import { render, screen, within } from '@testing-library/react';
import ProjectsSection from '../app/sections/projects';
import '@testing-library/jest-dom';

describe('ProjectsSection', () => {
  beforeEach(() => {
    render(<ProjectsSection />);
  });

  it('renderiza a seção de projetos', () => {
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renderiza todos os cards de projeto', () => {
    const cards = screen.getAllByTestId('project-card');
    expect(cards).toHaveLength(4);
  });

  it('cada projeto possui título, imagem e dois links', () => {
    const cards = screen.getAllByTestId('project-card');

    cards.forEach((card) => {
      const utils = within(card);

      // Deve ter um heading nível 3
      expect(utils.getByRole('heading', { level: 3 })).toBeInTheDocument();

      // Deve ter uma imagem
      expect(utils.getByRole('img')).toBeInTheDocument();

      // Deve ter dois links (GitHub + Projeto)
      const links = utils.getAllByRole('link');
      expect(links).toHaveLength(2);
    });
  });

  it('cada projeto possui pelo menos uma tecnologia listada', () => {
    const cards = screen.getAllByTestId('project-card');

    cards.forEach((card) => {
      const utils = within(card);

      const badges = utils.getAllByText((content, element) =>
        element?.tagName.toLowerCase() === 'span'
      );

      expect(badges.length).toBeGreaterThan(0);
    });
  });
});
