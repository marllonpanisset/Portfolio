// components/BlogPostsSection.tsx
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Introdução ao Next.js',
    summary: 'Um guia rápido para começar a desenvolver com Next.js.',
    slug: '/blog/introducao-nextjs',
  },
  {
    id: 2,
    title: 'Melhores Práticas de CSS',
    summary: 'Dicas para escrever código CSS limpo e escalável.',
    slug: '/blog/melhores-praticas-css',
  },
  {
    id: 3,
    title: 'O Poder do Tailwind CSS',
    summary: 'Por que o Tailwind CSS revolucionou o desenvolvimento web.',
    slug: '/blog/o-poder-do-tailwind',
  },
];

export function BlogPostsSection() {
  return (
    <section id="blog" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">Últimos Posts do Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.slug} className="block p-6 bg-[var(--color-bg-secondary)] rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{post.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">{post.summary}</p>
              <span className="text-[var(--color-text-accent)] font-medium hover:underline">Ler mais &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}