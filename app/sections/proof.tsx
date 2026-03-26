'use client';
import { AlertTriangle } from 'lucide-react';

export function ProofSection() {
  return (
    <section
      className="
        relative
        py-28 px-4 md:px-8
        bg-[var(--color-bg-secondary)]
        overflow-hidden
      "
    >
      {/* GLOW FUNDO */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blur-3xl bg-[radial-gradient(circle_at_center,var(--color-text-accent),transparent_70%)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* HEADLINE */}
        <h3 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          O problema quase nunca é o serviço.
          <br />
          <span className="text-[var(--color-text-accent)]">
            É como sua empresa é percebida.
          </span>
        </h3>

        {/* SUB */}
        <p className="text-lg text-[var(--color-text-secondary)] mb-20 max-w-2xl mx-auto">
          A maioria das empresas perde clientes antes mesmo da conversa começar.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Falta de confiança",
              desc: "O cliente entra no site e sai sem sentir segurança para entrar em contato."
            },
            {
              title: "Baixa conversão",
              desc: "Você recebe visitas, mas elas não se transformam em oportunidades reais."
            },
            {
              title: "Posicionamento fraco",
              desc: "Sua empresa não é percebida no nível que realmente opera."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                group
                relative
                p-6
                rounded-2xl
                bg-[var(--color-bg-primary)]
                border border-white/5
                backdrop-blur-xl

                hover:border-[var(--color-text-accent)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                transition-all duration-300
              "
            >
              {/* ÍCONE */}
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-[var(--color-text-accent)]/10 text-[var(--color-text-accent)]">
                  <AlertTriangle size={20} />
                </div>
              </div>

              {/* TEXTO */}
              <h4 className="font-semibold mb-2 text-center">
                {item.title}
              </h4>

              <p className="text-sm text-[var(--color-text-secondary)] text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* FRASE FINAL */}
        <p className="mt-20 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
          Meu trabalho é resolver isso com estratégia,
          <span className="text-[var(--color-text-accent)]">
            {" "}não só com design.
          </span>
        </p>

      </div>
    </section>
  );
}