'use client';
import { motion } from 'framer-motion';

export function HowIHelpSection() {
  return (
    <section
      id="how-i-help"
      className="py-20 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="container mx-auto max-w-4xl text-center">

        {/* Título */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Como posso te ajudar
        </motion.h2>

        {/* Parágrafos */}
        {[
          "Muitos negócios dependem apenas do Instagram e acabam perdendo clientes por não terem uma presença online estruturada.",
          "Eu crio sites e landing pages que convertem visitantes em clientes, integrados ao WhatsApp e com comunicação clara.",
          "Também ofereço planos de manutenção e suporte para manter seu site seguro, rápido e funcionando perfeitamente.",
          "Com soluções de presença digital, como SEO Local e Google Meu Negócio, seu negócio é encontrado por quem realmente procura seus serviços.",
          "Trabalho de qualquer lugar 🌎, mas estou totalmente focado em gerar resultados reais para cada cliente, com soluções simples e práticas.",
          "Não é sobre ter um site bonito — é sobre ter um site que gera resultado real."
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className={`text-lg md:text-xl text-[var(--color-text-secondary)] mb-${idx === 5 ? '0' : '6'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.8 }}
          >
            {idx === 1 ? (
              <>
                Eu crio <strong>sites e landing pages que convertem visitantes em clientes</strong>, integrados ao WhatsApp e com comunicação clara.
              </>
            ) : idx === 2 ? (
              <>
                Também ofereço <strong>planos de manutenção e suporte</strong> para manter seu site seguro, rápido e funcionando perfeitamente.
              </>
            ) : idx === 4 ? (
              <>
                Trabalho de qualquer lugar 🌎, mas estou totalmente focado em gerar resultados reais para cada cliente, com soluções simples e práticas.
              </>
            ) : idx === 5 ? (
              <>
                Não é sobre ter um site bonito — é sobre ter um site que <strong>gera resultado real</strong>.
              </>
            ) : (
              text
            )}
          </motion.p>
        ))}

      </div>
    </section>
  );
}