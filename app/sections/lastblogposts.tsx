// app/sections/BlogSection.tsx
import { BlogCard } from '../components/BlogCard'; // Importa o novo componente

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

export function BlogSection() {
  return (
    <section id="blog" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Últimos Posts do Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapeia os dados e renderiza o componente BlogCard para cada post */}
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}