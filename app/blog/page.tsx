// app/blog/page.tsx

import { BlogPosts } from 'app/components/posts';
import Sidebar from 'app/components/Sidebar';
import { getBlogPosts, getTags } from 'app/blog/utils';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page({ searchParams }) {
  const selectedTag = searchParams?.tag;
  const allTags = getTags();

  // Filtra os posts com base na tag selecionada
  const posts = getBlogPosts().filter(post => {
    if (!selectedTag) {
      return true; // Exibe todos os posts se não houver tag
    }
    // Verifica se a tag está presente no array de tags do post
    return post.metadata.tags?.includes(selectedTag);
  });

  return (
    <section>
      <div>
        <div className="flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-3/4 md:pr-6 md:pr-8 mt-8 md:mt-0">
            <BlogPosts posts={posts} selectedTag={selectedTag} />
          </div>
          <Sidebar tags={allTags} />
        </div>
      </div>
    </section>
  );
}
