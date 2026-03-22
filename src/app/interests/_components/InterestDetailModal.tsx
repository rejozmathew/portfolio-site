import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { interestCategoryMeta, type ModalProjectData } from '../_lib/interests';

interface InterestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ModalProjectData | null;
}

const InterestDetailModal: React.FC<InterestDetailModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  const styles = interestCategoryMeta[project.category];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="sticky top-3 right-3 z-[110] text-gray-500 hover:text-gray-900 bg-white/70 hover:bg-gray-100 backdrop-blur-sm transition-colors p-1.5 rounded-full"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${styles.badgeBg} ${styles.badgeText}`}
                >
                  {styles.label}
                </span>
              </div>

              {project.tags.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-1.5">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium ${styles.tagBg} ${styles.tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.imageUrls && project.imageUrls.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.imageUrls.map((url, index) => (
                    <div
                      key={url}
                      className="relative aspect-video w-full overflow-hidden rounded border bg-gray-100"
                    >
                      <Image
                        src={url}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>

              {project.explanation && (
                <div className="prose prose-base max-w-none mb-5 text-gray-700">
                  <h3 className="text-xl font-semibold mb-2">How it Works</h3>
                  <p>{project.explanation}</p>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Features</h3>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-600 columns-1 md:columns-2">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-primary hover:text-primary-dark font-medium transition-colors duration-200 text-lg group"
                >
                  View on GitHub
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InterestDetailModal;
