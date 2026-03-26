export function FinalCTASection() {
  return (
    <section className="py-28 px-4 md:px-8 text-center relative overflow-hidden">

        <div className="absolute inset-0 -z-10">
            <div className="w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full mx-auto" />
        </div>

        <p className="text-2xl md:text-3xl font-semibold max-w-3xl mx-auto leading-relaxed">
            No final, não é sobre ter um site.
            <br />
            <span className="text-[var(--color-text-accent)]">
            É sobre ser a escolha óbvia quando o cliente estiver pronto para decidir.
            </span>
        </p>

    </section>
  );
}