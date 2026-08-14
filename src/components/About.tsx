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
            I lead data, analytics, and AI in consumer banking — and I&apos;ve
            spent as much time on what these capabilities decide as on how
            they&apos;re built.
          </motion.p>
          <motion.p variants={itemVariants}>
            At Discover I ran a global organization of about 75 people across
            data science, engineering, analytics, and data product management.
            We built the identity graph and Customer 360 so marketing could
            target and measure across products; the ML feature store so credit
            risk and retention models ran on consistent, production-ready data;
            the governance and observability layer so all of it held up to
            regulators. Earlier, I redesigned risk-based pricing and fund
            transfer pricing for the home equity business. When Discover
            divested its $9B student loan portfolio and was later acquired by
            Capital One, I owned the data workstreams behind both.
          </motion.p>
          <motion.p variants={itemVariants}>
            I&apos;m still hands-on. The articles below are written from systems
            I designed and, in places, built.
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
