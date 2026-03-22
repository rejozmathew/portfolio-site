'use client';

import { useState } from 'react';
import InterestDetailModal from './InterestDetailModal';
import InterestSummaryCard from './InterestSummaryCard';
import type { InterestFeedItem, ModalProjectData } from '../_lib/interests';

export default function InterestsFeed({ items }: { items: InterestFeedItem[] }) {
  const [selectedProject, setSelectedProject] = useState<ModalProjectData | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item) => (
          <InterestSummaryCard
            key={item.id}
            item={item}
            onClick={
              item.kind === 'modal' ? () => setSelectedProject(item.project) : undefined
            }
          />
        ))}
        {items.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No projects added yet.</p>
        )}
      </div>

      {items.length > 0 && (
        <div className="text-center mt-12 text-gray-500">
          <p>Open a card for project details or read the full article.</p>
        </div>
      )}

      <InterestDetailModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
