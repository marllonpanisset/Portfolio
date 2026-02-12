// __tests__/AboutSection.test.tsx
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { AboutSection } from '../app/sections/about';

describe('AboutSection', () => {
  beforeEach(() => {
    render(<AboutSection />);
  });

  it('renderiza a seção principal corretamente', () => {
    const section = document.querySelector('#sobre-mim');
    expect(section).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /sobre mim/i })
    ).toBeInTheDocument();
  });

  it('renderiza pelo menos 4 parágrafos na descrição', () => {
    const section = document.querySelector('#sobre-mim')!;
    const paragraphs = within(section).getAllByText(
      (_, element) => element?.tagName.toLowerCase() === 'p'
    );

    expect(paragraphs.length).toBeGreaterThanOrEqual(4);
  });

  it('renderiza corretamente a lista de habilidades', () => {
    const skillsHeading = screen.getByRole('heading', {
      name: /habilidades/i,
    });

    expect(skillsHeading).toBeInTheDocument();

    const skillCards = screen.getAllByTestId('skill-card');

    expect(skillCards).toHaveLength(6);
  });

  it('renderiza corretamente a timeline de experiências', () => {
    const experienceHeading = screen.getByRole('heading', {
      name: /experiência/i,
    });

    expect(experienceHeading).toBeInTheDocument();

    const timelineItems = screen.getAllByTestId('timeline-item');

    expect(timelineItems).toHaveLength(7);
  });
});
