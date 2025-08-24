import Link from 'next/link';

// Definindo os tipos para as props do componente
interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
}

export function BlogCard({ slug, title, summary }: BlogCardProps) {
  return (
    <Link
      href={slug}
      // A classe 'transition-[box-shadow]' anima a sombra de forma mais específica.
      // Você pode usar 'transition' para ser mais abrangente, mas 'box-shadow' é a mais precisa aqui.
      className="block p-6 bg-[var(--color-bg-secondary)] rounded-lg shadow-md hover:shadow-xl transition-[box-shadow] duration-300"
    >
      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--color-text-secondary)] mb-4">{summary}</p>
      <span className="text-[var(--color-text-accent)] font-medium hover:underline">
        Ler mais &rarr;
      </span>
    </Link>
  );
}
