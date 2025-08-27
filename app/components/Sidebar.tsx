'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Sidebar({ tags }: { tags: string[] }) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "Todos") {
      router.push("/blog");
    } else {
      router.push(`/blog?tag=${value}`);
    }
  };

  return (
    <div className="md:w-1/4 md:border-l md:border-1 md:border-gray-400 md:p-8">
      {/* Mobile: Select */}
      <div className="mb-4 md:hidden">
        <label htmlFor="filter" className="font-semibold text-lg mb-2 block">
          Filtro
        </label>
        <select
          id="filter"
          value={selectedTag || "Todos"}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
        >
          <option value="Todos">Todos</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: Lista */}
      <div className="hidden md:block">
        <h2 className="font-semibold text-lg mb-4 tracking-tighter">
          Filtros
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog"
              className={`block py-2 px-3 rounded-lg transition-colors bg-[var(--color-bg-primary-filter)] text-[var(--color-text-sidebar-filter)] ${
                !selectedTag
                  ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  : ""
              }`}
            >
              Todos
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog?tag=${tag}`}
                className={`block py-2 px-3 rounded-lg transition-colors bg-[var(--color-bg-sidebar-filter)] text-[var(--color-text-sidebar-filter)] ${
                  selectedTag === tag
                    ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                    : ""
                }`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
