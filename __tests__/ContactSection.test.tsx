// __tests__/ContactSection.test.tsx
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactSection } from '../app/sections/contact';

describe('ContactSection', () => {
  beforeEach(() => {
    render(<ContactSection />);
  });

  it('renderiza a seção de contato', () => {
    expect(
      screen.getByRole('region', { name: /contato/i })
    ).toBeInTheDocument();
  });

  it('renderiza todos os cards de contato', () => {
    const cards = screen.getAllByTestId('contact-card');
    expect(cards).toHaveLength(4);
  });

  it('cada card é um link válido', () => {
    const cards = screen.getAllByTestId('contact-card');

    cards.forEach((card) => {
      expect(card.tagName.toLowerCase()).toBe('a');
      expect(card).toHaveAttribute('href');
    });
  });

  it('links externos abrem em nova aba', () => {
    const cards = screen.getAllByTestId('contact-card');

    const externalLinks = cards.filter(
      (card) => card.getAttribute('target') === '_blank'
    );

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('possui pelo menos um link tel e um mailto', () => {
    const cards = screen.getAllByTestId('contact-card');

    const hasPhone = cards.some((card) =>
      card.getAttribute('href')?.startsWith('tel:')
    );

    const hasEmail = cards.some((card) =>
      card.getAttribute('href')?.startsWith('mailto:')
    );

    expect(hasPhone).toBe(true);
    expect(hasEmail).toBe(true);
  });
});
