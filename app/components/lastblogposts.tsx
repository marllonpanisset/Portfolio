// components/BlogPostsSection.tsx
import Link from 'next/link'; // Importa o componente 'Link' do Next.js para navegação eficiente.

// Array de objetos que contém dados de exemplo para os posts do blog.
// Em uma aplicação real, estes dados seriam buscados de uma API ou de um CMS.
const blogPosts = [
  {
    id: 1,
    title: 'Introdução ao Next.js',
    summary: 'Um guia rápido para começar a desenvolver com Next.js.',
    slug: '/blog/introducao-nextjs', // O "slug" é a parte amigável da URL para o post.
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

// Componente principal para a seção de posts do blog na página.
export function BlogPostsSection() {
  return (
    // Seção HTML que serve como contêiner. O 'id' permite a navegação via âncora.
    <section id="blog" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        {/* Título da seção. */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">Últimos Posts do Blog</h2>
        
        {/* Grade responsiva de cartões para os posts. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapeia o array 'blogPosts' para criar um cartão para cada post. */}
          {blogPosts.map((post) => (
            // O componente 'Link' torna todo o cartão clicável.
            <Link key={post.id} href={post.slug} className="block p-6 bg-[var(--color-bg-secondary)] rounded-lg shadow-md hover:shadow-xl transition-all">
              {/* Título do post. */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{post.title}</h3>
              {/* Resumo/descrição do post. */}
              <p className="text-[var(--color-text-secondary)] mb-4">{post.summary}</p>
              {/* Texto do link "Ler mais". */}
              <span className="text-[var(--color-text-accent)] font-medium hover:underline">Ler mais &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
