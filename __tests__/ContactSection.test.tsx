// __tests__/ContactSection.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactSection } from '../app/sections/contact';

describe('ContactSection', () => {
  it('renderiza o título "Contato"', () => {
    render(<ContactSection />);
    const heading = screen.getByRole('heading', { name: /contato/i });
    expect(heading).toBeInTheDocument();
  });

  it('renderiza todos os cards de contato', () => {
    render(<ContactSection />);
    const contactLinks = [
      'Telefone',
      'LinkedIn',
      'Email',
      'GitHub',
    ];
    
    contactLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('verifica os links e atributos para os cards de contato', () => {
    render(<ContactSection />);

    const phoneLink = screen.getByRole('link', { name: /telefone/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+55-21-98788-1633');
    expect(phoneLink).not.toHaveAttribute('target', '_blank');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/marllonpanisset');
    expect(linkedinLink).toHaveAttribute('target', '_blank');

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:panisset.dev@gmail.com');
    expect(emailLink).not.toHaveAttribute('target', '_blank');

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/marllonpanisset');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });
});
