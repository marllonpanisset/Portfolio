import { getEbookLink } from "../data/ebook";

export default function CTA() {
  return (
    <section id="cta" className="py-24 text-center scroll-mt-[70px]">
      <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
        Comece sua primeira renda online hoje
      </h2>

      <p className="mt-4 text-[var(--color-text-secondary)]">
        Sem esperar o momento perfeito.
      </p>

      <a
        href={getEbookLink("cta", "cta_section")}
        target="_blank"
        className="mt-8 inline-block bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition"
      >
        Comprar Agora
      </a>
    </section>
  );
}