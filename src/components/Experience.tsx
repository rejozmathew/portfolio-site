"use client"; // Mark component as client-side for framer-motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface ExperienceItem {
  company: string;
  location?: string;
  title: string;
  dates: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title:
      "Sr. Director, Data Science & Data Infrastructure Management (DNA)",
    dates: "June 2022 – Present",
    description: [
      "Led enterprise data & AI platform modernization across analytics, ML, and governance.",
      "Built a cloud-native analytics platform on AWS and Snowflake.",
      "Designed and delivered an enterprise Identity Graph and Customer 360 using Neo4j.",
      "Integrated core banking, digital, and MarTech data to enable AI-driven decisioning.",
      "Led data execution for large-scale portfolio migrations and divestitures.",
      "Partnered with C-suite leaders to shape data & AI strategy and adoption.",
      "Managed a global, multi-disciplinary data organization (~75 team members).",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Director, Data Science – Consumer Banking",
    dates: "Oct 2018 – June 2022",
    description: [
      "Built and scaled an enterprise ML feature store for production analytics.",
      "Enabled self-service BI across all Consumer Banking business lines.",
      "Designed data frameworks supporting Consent Order remediation.",
      "Implemented centralized controls and exception management (ServiceNow).",
      "Served as Chief Data Steward, advancing governance and data quality standards.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Sr. Manager, Analytics, BI & Pricing – Discover Home Loans",
    dates: "Jul 2016 – Oct 2018",
    description: [
      "Built analytics and BI platforms following core system migrations.",
      "Developed multi-touch attribution models for marketing optimization.",
      "Led pricing analytics and redesigned risk-based pricing frameworks.",
      "Delivered profitability improvements, including a 20% increase in ROE.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Manager, Analytics & Data Management",
    dates: "Jul 2014 – Jul 2016",
    description: [
      "Managed operational analytics and executive reporting for Home Loans.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Project Manager, Analytics",
    dates: "Apr 2012 – Jul 2014",
    description: [
      "Delivered analytics and management reporting for lending operations.",
    ],
  },
  {
    company: "American Express",
    location: "Phoenix",
    title: "Senior Business Analyst",
    dates: "Apr 2010 – Apr 2012",
    description: [
      "Led analytics and reporting initiatives for Membership Rewards.",
      "Managed multi-million-dollar analytics and technology programs.",
    ],
  },
  {
    company: "Deloitte Consulting LLP",
    location: "Chicago",
    title: "Senior Consultant (Summer Associate)",
    dates: "Jun 2008 – Aug 2008",
    description: [
      "Developed a $40M business transformation plan for healthcare BI systems.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "India",
    title: "Assistant System Engineer",
    dates: "Feb 2007 – Jul 2007",
    description: [
      "Led development teams delivering solutions for American Express.",
    ],
  },
  {
    company: "UST Global",
    location: "India",
    title: "Senior Software Engineer",
    dates: "Dec 2003 – Oct 2006",
    description: [
      "Built enterprise software solutions for insurance and financial clients.",
    ],
  },
];

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const Experience: React.FC = () => {
  return (
    // Light theme: White background, dark text, blue timeline accents
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Professional Experience
        </h2>
        {/* Adjusted timeline line color */}
        <div className="relative space-y-12 before:absolute before:top-0 before:bottom-0 before:left-[5px] before:w-1 before:bg-gray-300">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pb-8 pl-10 last:pb-0"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Adjusted dot border color */}
              <div className="bg-primary absolute top-1 left-0 h-4 w-4 rounded-full border-4 border-white"></div>
              {/* Adjusted text colors */}
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-md text-primary font-medium">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </p>
              <p className="mb-2 text-sm text-gray-500">{exp.dates}</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#portfolio"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
