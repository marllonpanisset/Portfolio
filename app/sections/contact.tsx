// app/sections/ContactSection.tsx
import { Phone, Mail } from 'lucide-react';
import { ContactCard } from '../components/ContactCard'; // Importa o novo componente
import LinkedinIcon from '../components/icons/LinkedinIcon'; // Supondo que você criou esses ícones
import GithubIcon from '../components/icons/GithubIcon';   // Supondo que você criou esses ícones

// Dados dos contatos para facilitar a manutenção
const contactLinks = [
  {
    href: 'tel:+55-21-98788-1633',
    icon: <Phone size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />,
    label: 'Telefone',
    isExternal: false,
  },
  {
    href: 'https://www.linkedin.com/in/marllonpanisset',
    icon: <LinkedinIcon className="text-[var(--color-text-accent)] mb-2 md:mb-4 w-12 h-12" />,
    label: 'LinkedIn',
    isExternal: true,
  },
  {
    href: 'mailto:panisset.dev@gmail.com',
    icon: <Mail size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />,
    label: 'Email',
    isExternal: false,
  },
  {
    href: 'https://github.com/marllonpanisset',
    icon: <GithubIcon className="text-[var(--color-text-accent)] mb-2 md:mb-4 w-10 h-10" />,
    label: 'GitHub',
    isExternal: true,
  },
];

export function ContactSection() {
  return (
    <section 
      id="contato"
      aria-labelledby="contato-heading"
      className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2
          id="contato-heading" 
          className="text-4xl font-bold text-center mb-20">Contato</h2>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8 justify-items-center sm:grid-cols-3 lg:grid-cols-4">
          {/* Mapeia os dados e renderiza o ContactCard para cada item */}
          {contactLinks.map((link) => (
            <ContactCard
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              isExternal={link.isExternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}