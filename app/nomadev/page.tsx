import Link from "next/link";
import Hero from "./components/Hero";
import EbookPreview from "./components/EbookPreview";
import CTA from "./components/CTA";
import { ebook } from "./data/ebook";
import SocialProof from "./components/SocialProof";

export default function NomadevPage() {
  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">

      {/* HERO */}
      <Hero />

      {/* Prova Social */}
      <SocialProof />

      {/* PROBLEMA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Você não está travado por falta de conhecimento
        </h2>

        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Você está travado porque tenta aprender tudo antes de começar,
          acha que precisa estar pronto e depende de um salário que limita sua liberdade.
        </p>

        <div className="mt-6 text-[var(--color-text-secondary)] space-y-2">
          <p>→ troca tempo por dinheiro</p>
          <p>→ pouco tempo pra criar algo seu</p>
          <p>→ liberdade sempre pra depois</p>
        </div>

        <p className="mt-8 text-lg font-semibold text-[var(--color-text-primary)]">
          Você não precisa de mais informação.
          <br />
          Você precisa de direção e ação.
        </p>
      </section>

      {/* INSIGHT */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          O maior erro não é não saber
        </h2>

        <p className="text-[var(--color-text-secondary)]">
          É não usar o que você já sabe.
        </p>

        <div className="mt-6 text-[var(--color-text-secondary)] space-y-2">
          <p>✔ sabe mexer no computador</p>
          <p>✔ sabe se comunicar</p>
          <p>✔ resolve problemas simples</p>
        </div>

        <p className="mt-8 font-semibold text-[var(--color-text-primary)]">
          O que falta não é habilidade.
          <br />
          É um caminho claro pra monetizar isso.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          É aqui que entra o NOMADEV
        </h2>

        <p className="text-[var(--color-text-secondary)] mb-6">
          O <strong>{ebook.title}</strong> é um guia prático pra você sair do zero
          e começar a gerar renda online com Web + IA.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-[var(--color-text-secondary)]">
          <p>✔ entender o que vender</p>
          <p>✔ usar IA pra acelerar</p>
          <p>✔ conseguir clientes</p>
          <p>✔ gerar renda rápido</p>
        </div>

        <p className="mt-8 font-semibold text-[var(--color-text-primary)]">
          Sem enrolação. Só prática.
        </p>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          O que você vai aprender
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-[var(--color-text-secondary)]">
          <p>💻 Desenvolvimento web pra gerar renda</p>
          <p>🤖 IA pra acelerar seu trabalho</p>
          <p>💰 O que vender mesmo iniciando</p>
          <p>📍 Como conseguir clientes</p>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Pra quem é esse ebook
        </h2>

        <div className="text-[var(--color-text-secondary)] space-y-2">
          <p>✔ quer ganhar dinheiro online</p>
          <p>✔ quer sair do modelo tradicional</p>
          <p>✔ quer trabalhar de qualquer lugar</p>
          <p>✔ quer começar mesmo sem saber tudo</p>
        </div>

        <p className="mt-6 text-[var(--color-text-secondary)] opacity-70">
          ❌ Não é pra quem não quer agir
        </p>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Construído na prática
        </h2>

        <p className="text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Sou desenvolvedor web e, depois de anos no caminho tradicional,
          decidi buscar mais liberdade.
          <br /><br />
          Hoje estou construindo minha renda online enquanto inicio minha jornada
          como nômade digital — documentando tudo na prática.
        </p>
      </section>

      {/* PREVIEW */}
      <EbookPreview />

      {/* CTA PRINCIPAL */}
      <CTA />

      {/* FUTURO */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Isso é só o começo
        </h2>

        <div className="text-[var(--color-text-secondary)] space-y-2">
          <p>📘 Próximos ebooks da jornada</p>
          <p>🚀 Novas formas de renda</p>
          <p>🌎 Mais liberdade</p>
        </div>
      </section>

      {/* UPSELL */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Não quer aprender? Quer pronto?
        </h2>

        <p className="text-[var(--color-text-secondary)] mb-6">
          Posso te ajudar a gerar clientes com:
        </p>

        <div className="text-[var(--color-text-secondary)] space-y-2">
          <p>✔ Sites profissionais</p>
          <p>✔ Landing pages</p>
          <p>✔ Estrutura digital</p>
          <p>✔ Automações com IA</p>
        </div>

        <Link href="/#services" className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition">
            Ver serviços
        </Link>
      </section>

      {/* FINAL */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
          Liberdade não começa quando tudo está pronto
        </h2>

        <p className="mt-4 text-[var(--color-text-secondary)]">
          Começa quando você decide começar.
        </p>

        <a
            href={ebook.hotmartLink}
            target="_blank"
            className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition"
        >
            Começar agora
        </a>
      </section>

    </main>
  );
}