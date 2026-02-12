// __tests__/HeroSection.test.tsx
import { render, screen, within } from '@testing-library/react';
import { HeroSection } from '../app/sections/hero';
import '@testing-library/jest-dom';

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it('renderiza a seção hero', () => {
    expect(
      screen.getByRole('region')
    ).toBeInTheDocument();
  });

  it('possui heading principal e subtítulo', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  });

  it('possui dois CTAs funcionais', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(2);

    const anchorLink = links.find(link =>
      link.getAttribute('href')?.startsWith('#')
    );

    const downloadLink = links.find(link =>
      link.hasAttribute('download')
    );

    expect(anchorLink).toBeDefined();
    expect(downloadLink).toBeDefined();
  });

  it('renderiza a imagem de perfil com alt', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt');
  });
});
