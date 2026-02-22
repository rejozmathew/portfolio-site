import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { portfolioConfig } from '@/data/portfolioConfig';

export interface PortfolioProject {
  blogSlug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.map((t: string) => t.trim());
  if (typeof raw === 'string') return raw.split(',').map((t) => t.trim());
  return [];
}

export function getPortfolioData(): PortfolioProject[] {
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

  return portfolioConfig
    .map((config) => {
      const filePath = path.join(blogDir, `${config.blogSlug}.mdx`);
      try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          blogSlug: config.blogSlug,
          title: config.titleOverride ?? data.title ?? config.blogSlug,
          description: config.descriptionOverride ?? data.description ?? '',
          tags: config.tagsOverride ?? normalizeTags(data.tags),
          imageUrl: config.imageOverride ?? data.heroImage ?? '',
        };
      } catch (err) {
        console.error(`Error reading blog post for portfolio: ${config.blogSlug}`, err);
        return null;
      }
    })
    .filter((item): item is PortfolioProject => item !== null);
}
