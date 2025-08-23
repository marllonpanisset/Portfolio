// app/components/BlogCard.tsx
import Link from 'next/link';

// Definindo os tipos para as props do componente
interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
}

export function BlogCard({ slug, title, summary }: BlogCardProps) {
  return (
    <Link href={slug} className="block p-6 bg-[var(--color-bg-secondary)] rounded-lg shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--color-text-secondary)] mb-4">{summary}</p>
      <span className="text-[var(--color-text-accent)] font-medium hover:underline">Ler mais &rarr;</span>
    </Link>
  );
}