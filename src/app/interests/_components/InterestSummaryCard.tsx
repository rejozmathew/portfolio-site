import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDisplayDate, interestCategoryMeta, type InterestFeedItem } from '../_lib/interests';

interface InterestSummaryCardProps {
  item: InterestFeedItem;
  onClick?: () => void;
}

const InterestSummaryCard: React.FC<InterestSummaryCardProps> = ({ item, onClick }) => {
  const { title, summary, cardImageUrl, category, tags, date } = item;
  const styles = interestCategoryMeta[category];

  const cardContent = (
    <>
      <div className="relative h-40 w-full flex-shrink-0">
        {cardImageUrl ? (
          <Image
            src={cardImageUrl}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="bg-gray-200 object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles.badgeBg} ${styles.badgeText}`}
          >
            {styles.label}
          </span>
          <span className="text-xs text-gray-500">{formatDisplayDate(date, 'short')}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-3 flex-grow">{summary}</p>

        {tags.length > 0 && (
          <div className="mt-auto pt-2 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-500 mb-1.5">Tags:</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles.tagBg} ${styles.tagText}`}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 5 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles.tagBg} ${styles.tagText}`}
                >
                  ...
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );

  if (item.kind === 'article') {
    return (
      <Link
        href={`/interests/${item.slug}`}
        className={`block rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${styles.border}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${styles.border}`}
      onClick={onClick}
    >
      {cardContent}
    </div>
  );
};

export default InterestSummaryCard;
