'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 500], [0, 120]);
  const yContent = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* CAMADA 1 — BACKGROUND */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0"
      >
        <img
          src="/images/ebook/nomadev/vol1-capa.png"
          alt=""
          className="w-full h-full object-cover scale-125"
        />
      </motion.div>

      {/* CAMADA 2 — OVERLAY AJUSTADO */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/50" />

      {/* GRADIENT LOCAL (só onde tem texto) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* CONTEÚDO */}
      <motion.div
        style={{ y: yContent }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="[text-shadow:0_2px_10px_rgba(0,0,0,0.6)]"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Sua primeira renda online com Web + IA
          </h1>

          <p className="mt-4 text-lg text-white">
            Mesmo começando do zero — sem precisar ser expert
          </p>

          <p className="mt-6 text-white/80">
            Um guia direto pra você sair do zero e começar a gerar renda usando o que já sabe.
          </p>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-black/40 hover:bg-orange-600 transition"
          >
            Começar agora
          </motion.a>
        </motion.div>

        {/* CAPA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              rotateY: 6,
              rotateX: 4,
              scale: 1.05,
            }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-[var(--color-text-accent)] blur-2xl opacity-25 rounded-2xl" />

            {/* PROFUNDIDADE */}
            <div className="absolute top-2 left-2 w-full h-full bg-black/30 rounded-xl" />
            <div className="absolute top-1 left-1 w-full h-full bg-black/40 rounded-xl" />

            <img
              src="/images/ebook/nomadev/vol1-capa.png"
              alt="Ebook Nomadev"
              className="relative w-[280px] md:w-[360px] rounded-xl shadow-2xl"
            />

          </motion.div>
        </motion.div>

      </motion.div>

    </section>
  );
}