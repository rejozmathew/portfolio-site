import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MdxComponents';
import { formatDisplayDate, interestCategoryMeta } from '../_lib/interests';
import {
  getAllInterestArticleMetadata,
  getInterestArticleBySlug,
} from '../_lib/getInterestData';

export async function generateStaticParams() {
  return getAllInterestArticleMetadata().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInterestArticleBySlug(slug);

  if (!article) {
    return { title: 'Interest Not Found', description: '' };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function InterestArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInterestArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = interestCategoryMeta[article.category];

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto">
        <Link href="/interests" className="text-blue-600 hover:underline mb-6 inline-block">
          &larr; Back to Interests
        </Link>

        <header className="mb-8 rounded-lg overflow-hidden border-b border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${category.badgeBg} ${category.badgeText}`}
            >
              {category.label}
            </span>
            <p className="text-sm text-gray-400">{formatDisplayDate(article.date)}</p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">{article.title}</h1>
          <p className="mt-3 text-lg text-gray-300 leading-relaxed">{article.description}</p>

          {article.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-white/10 text-white/75 px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
