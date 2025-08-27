// app/components/PostCardLarge.tsx

import Link from 'next/link';
import Image from 'next/image'; // Para otimização de imagens
import { formatDate } from 'app/blog/utils';

export function PostCardLarge({ post }) {
  // O código já estava configurado para pegar a imagem do frontmatter.
  // Esta linha apenas torna o fallback explícito dentro do próprio componente Image.
  const imageUrl = post.metadata.image;

  return (
    <Link
      key={post.slug}
      className="block bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-8 transition-transform transform hover:scale-[1.01]"
      href={`/blog/${post.slug}`}
    >
      <div className="w-full h-auto overflow-hidden rounded-lg mb-4">
        {/*
          Aqui, o src agora usa a variável imageUrl diretamente.
          Se a imagem do frontmatter não existir, você deve configurar o Next.js
          para lidar com a otimização de imagens externas ou, como fallback,
          usar um URL local de uma imagem padrão. Para este caso,
          você precisa garantir que post.metadata.image tenha um valor.
        */}
        <Image
          src={imageUrl}
          alt={`Imagem de capa para o post: ${post.metadata.title}`}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-2 px-3 py-3 pb-3">
        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {post.metadata.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, false)}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          {post.metadata.summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.metadata.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
