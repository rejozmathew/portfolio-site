import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  modalProjects,
  type InterestArticle,
  type InterestArticleMetadata,
  type InterestCategory,
  type InterestFeedItem,
} from './interests';

const interestsDirectory = path.join(process.cwd(), 'src', 'content', 'interests');

function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw
      .filter((value): value is string => typeof value === 'string')
      .map((value) => value.trim());
  }

  if (typeof raw === 'string') {
    return raw.split(',').map((value) => value.trim());
  }

  return [];
}

function isInterestCategory(value: unknown): value is InterestCategory {
  return value === 'software' || value === 'hardware' || value === 'other';
}

function getTimestamp(date: string): number {
  const normalized = new Date(date.includes('T') ? date : `${date}T00:00:00Z`);
  return Number.isNaN(normalized.getTime()) ? 0 : normalized.getTime();
}

function sortByDateDesc<T extends { date: string; title: string }>(a: T, b: T): number {
  const dateDiff = getTimestamp(b.date) - getTimestamp(a.date);
  return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title);
}

function parseInterestArticle(slug: string, fileContents: string): InterestArticle | null {
  const { data, content } = matter(fileContents);

  if (data.hidden === true) {
    return null;
  }

  if (
    typeof data.title !== 'string' ||
    typeof data.date !== 'string' ||
    typeof data.description !== 'string' ||
    !isInterestCategory(data.category) ||
    typeof data.heroImage !== 'string'
  ) {
    console.warn(
      `Skipping interest "${slug}": Missing or invalid frontmatter (title, date, description, category, heroImage).`,
    );
    return null;
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: normalizeTags(data.tags),
    category: data.category,
    heroImage: data.heroImage,
    contentType: typeof data.contentType === 'string' ? data.contentType : '',
    traits: normalizeTags(data.traits),
    content,
  };
}

export function getAllInterestArticleMetadata(): InterestArticleMetadata[] {
  const fileNames = fs.readdirSync(interestsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(interestsDirectory, fileName);

      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const article = parseInterestArticle(slug, fileContents);

        if (!article) {
          return null;
        }

        const { content, ...metadata } = article;
        void content;
        return metadata;
      } catch (err) {
        console.error(`Error reading interest article ${slug}:`, err);
        return null;
      }
    })
    .filter((article): article is InterestArticleMetadata => article !== null)
    .sort(sortByDateDesc);
}

export function getInterestArticleBySlug(slug: string): InterestArticle | null {
  const fullPath = path.join(interestsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return parseInterestArticle(slug, fileContents);
  } catch (err) {
    console.error(`Error reading interest article ${slug}:`, err);
    return null;
  }
}

export function getInterestFeed(): InterestFeedItem[] {
  const articleItems: InterestFeedItem[] = getAllInterestArticleMetadata().map((article) => ({
    kind: 'article',
    id: article.slug,
    slug: article.slug,
    title: article.title,
    date: article.date,
    summary: article.description,
    category: article.category,
    tags: article.tags,
    cardImageUrl: article.heroImage,
  }));

  const modalItems: InterestFeedItem[] = modalProjects.map((project) => ({
    kind: 'modal',
    id: project.id,
    title: project.title,
    date: project.date,
    summary: project.briefDescription,
    category: project.category,
    tags: project.tags,
    cardImageUrl: project.cardImageUrl,
    project,
  }));

  return [...articleItems, ...modalItems].sort(sortByDateDesc);
}
