'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  tags: string[];
  contentType: string;
  traits: string[];
}

type FilterType = 'all' | 'strategy' | 'technical';

function formatContentType(ct: string): string {
  if (ct === 'technical') return 'Technical Deep Dive';
  if (ct === 'strategy') return 'Strategy';
  return ct;
}

function contentTypeBadgeClass(ct: string): string {
  if (ct === 'technical') return 'bg-teal-100 text-teal-700';
  if (ct === 'strategy') return 'bg-violet-100 text-violet-700';
  return 'bg-gray-100 text-gray-600';
}

export default function BlogContent({ posts }: { posts: PostMetadata[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered =
    activeFilter === 'all'
      ? posts
      : posts.filter((p) => p.contentType === activeFilter);

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'technical', label: 'Technical Deep Dive' },
  ];

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === f.value
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-700 pb-6"
          >
            {/* Content type badge */}
            {post.contentType && (
              <div className="mb-2">
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded ${contentTypeBadgeClass(post.contentType)}`}
                >
                  {formatContentType(post.contentType)}
                </span>
              </div>
            )}

            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                {post.title}
              </h2>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {new Date(post.date).toLocaleDateString()} | {post.readingTime}
            </p>

            <p className="text-gray-800 dark:text-gray-700 mb-4 leading-relaxed">
              {post.description}
            </p>

            {/* Topic tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
