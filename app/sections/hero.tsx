'use client';
import Image from 'next/image';
import { PrimaryButton } from '../components/PrimaryButton';
import { OutlineButton } from '../components/OutlineButton';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex min-h-screen pt-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Lado esquerdo: Título, subtítulo e CTAs */}
        <motion.div
          className="flex-1 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Olá, sou <span className="text-[var(--color-text-accent)] font-bold">Marllon Panisset</span> 👋
          </motion.h1>

          <motion.h2
            className="mt-4 text-xl md:text-2xl text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dev na estrada 🌎 ajudando negócios locais a conseguirem mais clientes com <strong>sites, landing pages e automações simples</strong>.
          </motion.h2>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <PrimaryButton href="https://wa.me/+5521987881633?text=Oi%20vi%20seu%20site%20e%20quero%20mais%20clientes">
              Falar no WhatsApp
            </PrimaryButton>

            <OutlineButton href="#services">
              Ver serviços
            </OutlineButton>
          </motion.div>
        </motion.div>
        
        {/* Lado direito: Foto de perfil */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Image
            src="/perfil.png"
            alt="Foto de Marllon Panisset"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-8 border-[var(--color-text-accent)] w-[180px] h-[180px] md:w-[240px] md:h-[240px] lg:w-[400px] lg:h-[400px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}