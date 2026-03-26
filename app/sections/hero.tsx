'use client';
import Image from 'next/image';
import { PrimaryButton } from '../components/PrimaryButton';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pb-24 pt-24 bg-[var(--color-bg-primary)] overflow-hidden">
      
      {/* Ajuste 1: 'flex-col' até 1024px, 'lg:flex-row' a partir de 1024px.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* TEXTO - Ocupa 100% até 1024px
          Ajuste 3: 'text-center' até 1024px, 'lg:text-left' a partir de 1024px.
        */}
        <div className="flex-1 w-full text-center lg:text-left">

          <h1
            className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Empresas não perdem clientes por falta de serviço.
            <br />
            <span className="text-[var(--color-text-accent)]">
              Perdem por falta de percepção.
            </span>
          </h1>

          {/* 
            centralizado em tablets/monitores menores quando quebrado.
          */}
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)]">
            Se o seu site não transmite confiança em segundos, você já está perdendo oportunidades todos os dias — mesmo sendo melhor que seus concorrentes.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <PrimaryButton href="#contact">
              Quero parar de perder clientes
            </PrimaryButton>
          </div>

        </div>

        {/* IMAGEM - Quebra para baixo até 1024px*/}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/perfil.png"
            alt="Marllon Panisset"
            width={420}
            height={420}
            className="
              rounded-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
              border border-white/10
              hover:scale-[1.02]
              transition duration-500
              /* Ajuste 8: Garante que a imagem não fique gigante em tablets */
              max-w-[320px] lg:max-w-[420px] 
            "
            priority
          />
        </div>

      </div>
    </section>
  );
}