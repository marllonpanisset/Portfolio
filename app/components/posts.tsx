import { PostCardLarge } from './PostCardLarge';
import { PostCardSmall } from './PostCardSmall';

// Este é o componente que renderiza a lista de posts do blog.
// Ele agora escolhe o layout com base na tag selecionada.
export function BlogPosts({ posts, selectedTag }) {
  // Ordena os posts em ordem cronológica reversa (do mais novo para o mais antigo).
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      {/* Se não houver tag selecionada, exibe o layout grande */}
      {!selectedTag && sortedPosts.map((post) => (
        <PostCardLarge key={post.slug} post={post} />
      ))}
      {/* Se houver uma tag selecionada, exibe o layout pequeno */}
      {selectedTag && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <PostCardSmall key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
