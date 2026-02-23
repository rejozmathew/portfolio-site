"use client"; // Mark this as a Client Component

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/lib/getPortfolioData";

// Import Server Components (can be used directly in Client Components)
import Hero from "@/components/Hero"; // Reverted to standard import
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

// Dynamically import components that might have client-specific hooks/interactions if needed
// For simple display, direct import might be fine, but dynamic keeps flexibility
const Expertise = dynamic(() => import("@/components/Expertise"), { ssr: true }); // Keep SSR for initial load if possible
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });

// Define animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const defaultSectionViewport = { once: true, amount: 0.2 } as const;
const tallSectionViewport = { once: true, amount: 0.05 } as const;

interface ClientSectionsProps {
  portfolioProjects: PortfolioProject[];
}

const ClientSections: React.FC<ClientSectionsProps> = ({ portfolioProjects }) => {
  return (
    <>
      {/* Render Hero directly, animation will be handled inside Hero */}
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Expertise />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Experience />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={tallSectionViewport}
        variants={sectionVariants}
      >
        <Portfolio projects={portfolioProjects} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Education />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Certifications />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default ClientSections;
