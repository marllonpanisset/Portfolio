export function AuthoritySection() {
  return (
    <section
      className="
        relative
        py-20 px-4 md:px-8
        bg-[var(--color-bg-secondary)]
        border-y border-white/5
      "
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* MINI LABEL */}
        <span className="text-sm uppercase tracking-widest text-[var(--color-text-accent)]">
          Posicionamento estratégico
        </span>

        {/* HEADLINE */}
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold leading-tight">
          Empresas não precisam de mais um site.
          <br />
          <span className="text-[var(--color-text-accent)]">
            Precisam ser percebidas como a melhor escolha.
          </span>
        </h2>

        {/* TEXTO */}
        <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Cada projeto é construído para alinhar percepção, posicionamento e conversão — 
          transformando sua presença digital em um ativo que gera oportunidades reais.
        </p>

      </div>

      {/* DETALHE VISUAL (leve glow estilo Stripe) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blur-3xl bg-[radial-gradient(circle_at_center,var(--color-text-accent),transparent_70%)]" />
    </section>
  );
}