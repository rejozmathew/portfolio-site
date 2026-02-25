"use client"; // Mark component as client-side for framer-motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA
import type { PortfolioProject } from "@/lib/getPortfolioData";

// Animation variants for project cards (similar to Experience)
const cardAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, // Slightly different stagger
      duration: 0.5,
    },
  }),
};

interface PortfolioProps {
  projects: PortfolioProject[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Portfolio & Key Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.blogSlug}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg" // Added overflow-hidden
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }} // Added hover scale effect
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
            >
              {/* Image Container with hover effect */}
              <div className="group relative h-48 overflow-hidden bg-gray-300">
                {" "}
                {/* Added group and relative */}
                <div className="flex h-full w-full items-center justify-center text-gray-500">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect
                    />
                  ) : (
                    <span>Project Visual</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                {/* Dark text */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{project.description}</p>
                {project.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      // Light blue tags
                      <span
                        key={t}
                        className="rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {/* Blue link */}
                <Link
                  href={`/blog/${project.blogSlug}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read Full Article
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End-of-portfolio blog link */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-primary text-sm font-medium hover:underline">
            Read all articles
          </Link>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Link
            href="/education"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Education
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
