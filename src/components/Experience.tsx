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
      "Sr. Director, Data, Analytics & AI",
    dates: "June 2022 – May 2026",
    description: [
      "Rebuilt the enterprise analytics environment on AWS and Snowflake so reporting, modeling, and governance ran off one governed foundation instead of a decade of divergent extracts.",
      "Delivered the enterprise identity graph (Neo4j) and Customer 360 that let marketing resolve a customer across products and measure campaigns end to end.",
      "Integrated MarTech, CRM, digital, and core banking data into that platform to power personalization and decisioning — roughly $100M in measured business impact.",
      "Directed data workstreams for Discover's $9B student loan portfolio migration and divestiture — balance walk validation across 2M+ accounts with 20 years of history, collection curves, and vintage analysis.",
      "Orchestrated customer data consolidation and account reconciliation for Capital One's $35B acquisition of Discover, delivering Day 1 operational readiness under regulatory timelines.",
      "Put GenAI and ML into production where the work was genuinely manual — LLM summarization, RAG-based document matching, ML classification — each with human-in-the-loop review before a decision stood.",
      "Built the governance and observability layer — data quality, lineage, drift monitoring, explainability — that made all of the above defensible to regulators and internal audit.",
      "Advised C-level executives on data & AI strategy, and led a global organization of ~75 data scientists, engineers, analysts, and data product managers on a product-oriented delivery model.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Director, Data, Analytics & AI",
    dates: "Oct 2018 – June 2022",
    description: [
      "Appointed under a mandate from the President of Consumer Banking to build the division's data and analytics capability, sequencing a multi-year roadmap with every business line.",
      "Architected and scaled the enterprise ML feature store so credit risk, retention, and customer lifetime value models trained and scored on the same production-ready features.",
      "Delivered self-service BI across all Consumer Banking lines, so business teams could answer their own questions against curated data rather than queue for an analyst.",
      "Designed the marketing analytics database on first-party data, making campaign targeting and measurement possible under GDPR/CCPA constraints.",
      "Built the balance history and portfolio analytics framework Finance and Credit strategy used for reconciliation, trend analysis, and regulatory reporting.",
      "Implemented centralized control and exception management (ServiceNow) for CFPB consent order remediation — audit trails, escalation workflows, and closed-loop tracking across compliance functions.",
      "Served as Chief Data Steward for Consumer Banking, setting the governance and data-quality standards that regulatory reporting depended on.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Sr. Manager, Analytics, BI & Pricing – Discover Home Loans",
    dates: "Jul 2016 – Oct 2018",
    description: [
      "Redesigned risk-based pricing and product structure for the home equity portfolio, improving loan profitability — a 20% increase in ROE — while improving conversion.",
      "Partnered with Treasury and Credit Risk on fund transfer pricing and equity allocation, setting the cost-of-capital basis behind lending margin decisions.",
      "Built a multi-touch attribution model that quantified what each channel actually contributed, and used it to redirect marketing investment across digital and offline campaigns.",
      "Stood up the analytical data environment and BI infrastructure from scratch after an origination system migration, restoring enterprise reporting and marketing analytics for Discover Home Loans.",
      "Ran the CSAT/NPS survey pipeline for funded loan customers, giving the home loans business its voice-of-customer reporting.",
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
    title: "Summer Associate",
    dates: "Jun 2008 – Aug 2008",
    description: [
      "MBA summer internship: developed a $40M business reengineering plan for a healthcare insurer's BI ecosystem.",
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
            href="/expertise"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Expertise
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
