// __tests__/ExperienceSection.test.tsx
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { ExperienceSection } from '../app/sections/xp';

describe('ExperienceSection', () => {
  beforeEach(() => {
    render(<ExperienceSection />);
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
