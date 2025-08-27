// app/components/PostCardSmall.tsx

import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'app/blog/utils';

export function PostCardSmall({ post }) {
  // Pega a imagem do frontmatter ou usa um placeholder
  const imageUrl = post.metadata.image || 'https://placehold.co/400x200';

  return (
    <Link
      key={post.slug}
      className="block bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
      href={`/blog/${post.slug}`}
    >
      <div className="w-full h-40 relative">
        <Image
          src={imageUrl}
          alt={`Imagem de capa para o post: ${post.metadata.title}`}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          {post.metadata.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {formatDate(post.metadata.publishedAt, false)}
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3 mb-4">
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
