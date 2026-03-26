'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/nomadev_vlogs' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/marllon-panisset' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-bg-secondary)] border-t border-white/5 py-16 px-4">

      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* MARCA */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Marllon Panisset
            </h3>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Especialista em posicionamento digital.
              <br />
              Transformo presença online em percepção de valor e geração de negócios.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
              Navegação
            </h4>

            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              <li><a href="#inicio" className="hover:text-[var(--color-text-accent)]">Início</a></li>
              <li><a href="#services" className="hover:text-[var(--color-text-accent)]">Serviços</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-text-accent)]">Contato</a></li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
              Contato
            </h4>

            <div className="space-y-3 text-[var(--color-text-secondary)]">

              {/* EMAIL (você pode trocar depois) */}
              <a
                href="mailto:contato.marllon@gmail.com"
                className="block hover:text-[var(--color-text-accent)]"
              >
                contato.marllon@gmail.com
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5521987881633"
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-[var(--color-text-accent)]"
              >
                <FaWhatsapp />
                Falar no WhatsApp
              </a>

            </div>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">

          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Sua empresa já tem potencial para crescer.
            <br />
            <span className="text-[var(--color-text-accent)]">
              Falta ser percebida no nível certo.
            </span>
          </p>

          <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} Marllon Panisset
          </p>

        </div>

      </div>
    </footer>
  );
}