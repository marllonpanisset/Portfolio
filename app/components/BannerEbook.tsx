import Link from 'next/link';

export default function BannerEbook() {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="bg-[var(--color-bg-secondary)] rounded-xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[var(--color-bg-tertiary)] hover:shadow-md transition">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* ICON (mais sutil) */}
          <span className="text-2xl opacity-70">📘</span>

          <div>
            {/* BADGE */}
            <span className="text-xs bg-[var(--color-text-accent)]/10 text-[var(--color-text-accent)] px-2 py-1 rounded-full">
              Novo
            </span>

            <p className="text-[var(--color-text-primary)] font-semibold mt-1">
              Sua primeira renda com Web + IA
            </p>

            <p className="text-sm text-[var(--color-text-secondary)]">
              Guia prático pra sair do zero e conseguir os primeiros clientes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
            href="/nomadev"
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition hover:bg-orange-600 hover:scale-105"
            >
            Ver ebook →
        </Link>
      </div>
    </div>
  );
}