import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import BlogContent, { type PostMetadata } from './BlogContent';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.map((t: string) => t.trim());
  if (typeof raw === 'string') return raw.split(',').map((t) => t.trim());
  return [];
}

function getAllPostsMetadata(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName): PostMetadata | null => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        if (
          typeof data.title !== 'string' ||
          typeof data.date !== 'string' ||
          typeof data.description !== 'string'
        ) {
          console.warn(`Skipping post "${fileName}": Missing or invalid frontmatter.`);
          return null;
        }

        if (data.hidden === true) return null;

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          readingTime: stats.text,
          tags: normalizeTags(data.tags),
          contentType: typeof data.contentType === 'string' ? data.contentType : '',
          traits: normalizeTags(data.traits),
        };
      } catch (err) {
        console.error(`Error reading metadata for post ${slug}:`, err);
        return null;
      }
    });

  const validPosts = allPostsData.filter((post): post is PostMetadata => post !== null);
  return validPosts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read my latest thoughts and articles.',
};

export default function BlogIndexPage() {
  const posts = getAllPostsMetadata();
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogContent posts={posts} />
    </div>
  );
}
