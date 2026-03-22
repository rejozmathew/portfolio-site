export type InterestCategory = 'software' | 'hardware' | 'other';

export interface ModalProjectData {
  id: string;
  date: string;
  title: string;
  briefDescription: string;
  category: InterestCategory;
  tags: string[];
  description: string;
  explanation?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  cardImageUrl: string;
  imageUrls?: string[];
}

export interface InterestArticleMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: InterestCategory;
  heroImage: string;
  contentType: string;
  traits: string[];
}

export interface InterestArticle extends InterestArticleMetadata {
  content: string;
}

interface InterestFeedBase {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: InterestCategory;
  tags: string[];
  cardImageUrl: string;
}

export interface InterestArticleFeedItem extends InterestFeedBase {
  kind: 'article';
  slug: string;
}

export interface InterestModalFeedItem extends InterestFeedBase {
  kind: 'modal';
  project: ModalProjectData;
}

export type InterestFeedItem = InterestArticleFeedItem | InterestModalFeedItem;

export const modalProjects: ModalProjectData[] = [
  {
    id: 'ebook-abridger',
    date: '2025-07-16',
    title: 'Ebook Abridger',
    briefDescription: 'GenAI-powered app to summarize EPUB ebooks.',
    category: 'software',
    tags: ['Python', 'GenAI', 'LangChain', 'CLI', 'GUI', 'EPUB'],
    description:
      'A Python application to generate abridged versions of EPUB ebooks using Large Language Models (LLMs). It preserves chapter structure, narrative flow, and key elements while reducing length based on user settings.',
    explanation:
      'The application reads an EPUB file, then uses AI (specifically, Large Language Models via LangChain) to summarize each chapter individually. It automatically detects if the book is fiction or non-fiction to adjust the summarization style. Short chapters can be skipped. Finally, it combines these summaries into a new, shorter EPUB file, preserving the original metadata.',
    features: [
      'EPUB Input/Output (preserving metadata)',
      'AI-Powered Summarization (chapter-by-chapter + overall)',
      'Adjustable Summary Length',
      'Genre Auto-detection for better summaries',
      'Option to Skip Short Chapters',
      'Error Reporting for failed chapters',
      'Cost Estimation for API usage',
      'Command-Line Interface (CLI)',
      'Graphical User Interface (GUI)',
      'Supports multiple LLM providers (Gemini, Ollama, OpenRouter)',
    ],
    githubUrl: 'https://github.com/rejozacharia/ebook-abridger',
    cardImageUrl: '/images/DIY/ebook-abridger/ebook-abridger-gui.png',
    imageUrls: [
      '/images/DIY/ebook-abridger/ebook-abridger-gui.png',
      '/images/DIY/ebook-abridger/ebook-abridger-complete.png',
    ],
  },
];

export const interestCategoryMeta: Record<
  InterestCategory,
  {
    label: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    tagBg: string;
    tagText: string;
  }
> = {
  software: {
    label: 'Software',
    border: 'border-t-4 border-blue-500',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
  },
  hardware: {
    label: 'Hardware',
    border: 'border-t-4 border-green-500',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-800',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
  },
  other: {
    label: 'Project',
    border: 'border-t-4 border-gray-500',
    badgeBg: 'bg-gray-100',
    badgeText: 'text-gray-800',
    tagBg: 'bg-gray-100',
    tagText: 'text-gray-800',
  },
};

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

const longDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

function normalizeDate(date: string): Date {
  return new Date(date.includes('T') ? date : `${date}T00:00:00Z`);
}

export function formatDisplayDate(
  date: string,
  variant: 'short' | 'long' = 'long',
): string {
  const normalized = normalizeDate(date);

  if (Number.isNaN(normalized.getTime())) {
    return date;
  }

  return variant === 'short'
    ? shortDateFormatter.format(normalized)
    : longDateFormatter.format(normalized);
}
