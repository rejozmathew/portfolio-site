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

// Read all .mdx filenames and strip the extension
function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

// Read and parse a single MDX file by slug
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
      },
      content,
      readingTime: stats.text,
    };
  } catch (err) {
    console.error(`Error reading post ${slug}:`, err);
    return null;
  }
}

// Tell Next.js which slugs to generate at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Build page metadata (head tags) dynamically per slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: '',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

// The main page component for /blog/[slug]
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published on{' '}
            {new Date(post.frontmatter.date).toLocaleDateString()} |{' '}
            {post.readingTime}
          </p>
          {(() => {
            let tags: string[] = [];
            if (Array.isArray(post.frontmatter.tags)) {
              tags = post.frontmatter.tags.map((t: string) => t.trim());
            } else if (typeof post.frontmatter.tags === 'string') {
              tags = post.frontmatter.tags.split(',').map((t: string) => t.trim());
            }
            return tags.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-50 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null;
          })()}
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
