"use client"; // Needs client-side animation

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

// Animation variants for the list container
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay between children
    },
  },
};

// Animation variants for list items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const About: React.FC = () => {
  return (
    // Light theme: White background, dark text
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Executive Summary
        </h2>
        <motion.div
          className="space-y-6 text-lg text-gray-700"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={itemVariants}>
            I lead data, analytics, and AI in financial services — consumer banking, lending, and deposits — building the analytics, ML, and governed data platforms that drive customer growth and business performance.
          </motion.p>
          <motion.p variants={itemVariants}>
            For more than 20 years, my work has spanned business ownership and technology leadership: pricing, portfolio economics, and marketing and operational analytics on one side; cloud-native data architecture, decisioning frameworks, and responsible AI in regulated environments on the other.
          </motion.p>
          <motion.p variants={itemVariants}>
            I directed the data and analytics workstreams for Discover&apos;s $9B student-loan portfolio divestiture and orchestrated customer data consolidation for Capital One&apos;s $35B acquisition — alongside building the enterprise identity graph, Customer 360, ML feature store, and self-service BI capabilities used across Consumer Banking.
          </motion.p>
          <motion.p variants={itemVariants}>
            I lead global teams and partner with C-suite stakeholders on enterprise data & AI strategy. Most of what I write about here started as a problem someone needed solved.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
