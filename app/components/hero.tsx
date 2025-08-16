// components/HeroSection.tsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex min-h-screen pt-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-4">
        <div className="flex-1 text-left mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Olá, sou o</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text-accent)]">Marllon Panisset</h3>
          <p className="mt-4 text-xl md:text-2xl text-[var(--color-text-secondary)]">Desenvolvedor Front-End</p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/profile.png"
            alt="Foto de Marllon Panisset"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-[var(--color-text-accent)]"
          />
        </div>
      </div>
    </section>
  );
}