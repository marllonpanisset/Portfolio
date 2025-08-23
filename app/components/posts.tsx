// components/BlogPosts.tsx
import Link from 'next/link' // Importa o componente 'Link' do Next.js para navegação otimizada entre as páginas.
import { formatDate, getBlogPosts } from 'app/blog/utils' // Importa funções auxiliares para buscar posts e formatar a data.

// Este é o componente principal que renderiza a lista de posts do blog.
export function BlogPosts() {
  // Chama a função 'getBlogPosts()' para obter um array de todos os posts disponíveis.
  let allBlogs = getBlogPosts()

  return (
    <div>
      {/* Mapeia e renderiza cada post do blog. */}
      {allBlogs
        // Ordena os posts em ordem cronológica reversa (do mais novo para o mais antigo) com base na data de publicação.
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          // O componente 'Link' envolve cada post, tornando-o clicável e navegável.
          // A propriedade 'key' é essencial para o React, garantindo a renderização eficiente da lista.
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            // O 'href' é construído dinamicamente com o slug (endereço amigável) de cada post.
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              {/* Exibe a data de publicação do post, formatada pela função 'formatDate'. */}
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              {/* Exibe o título do post. */}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
