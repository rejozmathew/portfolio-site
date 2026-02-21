import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MdxComponents';
import readingTime from 'reading-time';
import Link from 'next/link';
import type { Metadata } from 'next';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .filter((name) => {
      const fullPath = path.join(postsDirectory, name);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return data.hidden !== true;
    })
    .map((name) => name.replace(/\.mdx$/, ''));
}

function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as {
        title: string;
        date: string;
        description: string;
        tags?: string | string[];
        contentType?: string;
        traits?: string[];
        hidden?: boolean;
      },
      content,
      readingTime: stats.text,
    };
  } catch (err) {
    console.error(`Error reading post ${slug}:`, err);
    return null;
  }
}

function normalizeTags(raw: string | string[] | undefined): string[] {
  if (Array.isArray(raw)) return raw.map((t) => t.trim());
  if (typeof raw === 'string') return raw.split(',').map((t) => t.trim());
  return [];
}

function formatContentType(ct: string): string {
  if (ct === 'technical') return 'Technical Deep Dive';
  if (ct === 'strategy') return 'Strategy';
  return ct;
}

function formatTrait(trait: string): string {
  const labels: Record<string, string> = {
    code: 'Code',
    architecture: 'Architecture',
    framework: 'Framework',
    'case-study': 'Case Study',
    strategy: 'Strategy',
    implementation: 'Implementation',
    data: 'Data',
  };
  return labels[trait] ?? trait;
}

function contentTypeBadgeClass(ct: string): string {
  if (ct === 'technical') return 'bg-teal-100 text-teal-700';
  if (ct === 'strategy') return 'bg-violet-100 text-violet-700';
  return 'bg-gray-100 text-gray-600';
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found', description: '' };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.hidden === true) {
    notFound();
  }

  const tags = normalizeTags(post.frontmatter.tags);
  const traits = Array.isArray(post.frontmatter.traits) ? post.frontmatter.traits : [];
  const contentType = post.frontmatter.contentType ?? '';

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-6 rounded-lg overflow-hidden p-6">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
          >
            &larr; Back to Blog
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {post.frontmatter.title}
          </h1>

          <p className="text-sm text-gray-400 mb-3">
            Published on{' '}
            {new Date(post.frontmatter.date).toLocaleDateString()} |{' '}
            {post.readingTime}
          </p>

          {/* Content type + traits */}
          {contentType && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded ${contentTypeBadgeClass(contentType)}`}
              >
                {formatContentType(contentType)}
              </span>
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="inline-block bg-white/10 text-white/80 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {formatTrait(trait)}
                </span>
              ))}
            </div>
          )}

          {/* Topic tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-white/10 text-white/70 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
