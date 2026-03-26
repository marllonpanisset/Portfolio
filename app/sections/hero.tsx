'use client';
import Image from 'next/image';
import { PrimaryButton } from '../components/PrimaryButton';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
    id="inicio"
    className="
      relative
      min-h-screen
      flex items-center
      pt-24
      bg-[var(--color-bg-primary)]
      overflow-hidden
    "
  >
    {/* GRADIENT BACKGROUND */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[120px] rounded-full" />
    </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-16">

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left">

          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Empresas não perdem clientes por falta de serviço.
            <br />
            <span className="text-[var(--color-text-accent)]">
              Perdem por falta de percepção.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Se o seu site não transmite confiança em segundos, você já está perdendo oportunidades todos os dias — mesmo sendo melhor que seus concorrentes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <PrimaryButton href="#contact">
              Quero parar de perder clientes
            </PrimaryButton>
          </motion.div>

        </div>

        {/* IMAGEM */}
        <div className="flex-1 flex justify-center md:justify-end">
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
            "
            priority
          />
        </div>

      </div>
    </section>
  );
}