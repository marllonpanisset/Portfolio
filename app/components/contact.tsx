// components/ContactSection.tsx
import { Phone, Linkedin, Mail, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contato" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">Contato</h2>
        
        {/* Usando Grid para o layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 justify-items-center sm:grid-cols-3 lg:grid-cols-4">

          {/* Card de Telefone */}
          <a href="tel:+55-11-99999-9999" className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 p-2 md:p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Phone size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />
            <span className="text-sm md:text-lg text-center">Telefone</span>
          </a>
          
          {/* Card de LinkedIn */}
          <a href="https://www.linkedin.com/in/marllonpanisset" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 p-2 md:p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Linkedin size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />
            <span className="text-sm md:text-lg text-center">LinkedIn</span>
          </a>
          
          {/* Card de Email */}
          <a href="mailto:marllon.panisset@email.com" className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 p-2 md:p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Mail size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />
            <span className="text-sm md:text-lg text-center">Email</span>
          </a>

          {/* Card de GitHub */}
          <a href="https://github.com/marllonpanisset" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 p-2 md:p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Github size={48} className="text-[var(--color-text-accent)] mb-2 md:mb-4" />
            <span className="text-sm md:text-lg text-center">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}