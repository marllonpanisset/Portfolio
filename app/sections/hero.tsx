// app/sections/HeroSection.tsx
import Image from 'next/image';
import { PrimaryButton } from '../components/PrimaryButton';
import { OutlineButton } from '../components/OutlineButton';

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex min-h-screen pt-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Lado esquerdo: Título, subtítulo e CTAs */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-medium"
          >
            Olá, sou <span className="text-[var(--color-text-accent)] font-bold">Marllon Panisset</span> 👋
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-[var(--color-text-secondary)]">
            Dev na estrada 🌎 ajudando negócios locais a conseguirem mais clientes com <strong>sites, landing pages e automações simples</strong>.
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <PrimaryButton href="https://wa.me/+5521987881633?text=Oi%20vi%20seu%20site%20e%20quero%20mais%20clientes">
              Falar no WhatsApp
            </PrimaryButton>

            <OutlineButton href="#services">
              Ver serviços
            </OutlineButton>
          </div>
        </div>
        
        {/* Lado direito: Foto de perfil */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/perfil.png"
            alt="Foto de Marllon Panisset"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-8 border-[var(--color-text-accent)] w-[180px] h-[180px] md:w-[240px] md:h-[240px] lg:w-[400px] lg:h-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}