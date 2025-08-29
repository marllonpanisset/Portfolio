// app/sections/BlogSection.tsx
import { BlogCard } from '../components/BlogCard';
import { getBlogPosts } from '../blog/utils'; // Importa a função do lado do servidor
import { Post } from 'types/blog'; // Importa a tipagem

export function BlogSection() {
  const posts: Post[] = getBlogPosts();

  if (posts.length === 0) {
    return (
      <section id="blog" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <div className="container mx-auto text-center">
          <p>Nenhum post de blog encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Últimos Posts do Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapeia os dados e renderiza o componente BlogCard para cada post */}
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.metadata.title}
              summary={post.metadata.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}