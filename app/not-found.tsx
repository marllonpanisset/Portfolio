// app/not-found.tsx
export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-28 px-4 text-center max-w-3xl mx-auto">
      <h1 className="mb-8 text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
        404 - Página não encontrada
      </h1>
      <p className="mb-4 text-lg text-[var(--color-text-secondary)]">
        A página que você está procurando não existe ou foi removida.
      </p>
      <p className="text-[var(--color-text-secondary)]">
        Volte para a <a href="/" className="text-[var(--color-text-accent)] underline">página inicial</a> e continue navegando pelo site.
      </p>
    </section>
  );
}