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
      "Partnered with business unit and marketing analytics teams to build customer acquisition, servicing, and retention analytics across personal loans, home loans, and deposits.",
      "Integrated MarTech, CRM, digital, and core banking data into the enterprise platform, enabling ML-driven personalization and next-best-action decisioning that delivered ~$100M in measurable business impact.",
      "Directed data workstreams for Discover's $9B student-loan portfolio migration and divestiture — balance walk validation across 2M+ accounts, collection curves, and vintage analysis supporting the portfolio sale.",
      "Orchestrated customer data consolidation and account reconciliation for Capital One's $35B acquisition of Discover, delivering Day 1 operational readiness under regulatory timelines.",
      "Drove enterprise data & AI platform transformation on AWS and Snowflake — including master data management and entity resolution via enterprise identity knowledge graph (Neo4j) and Customer 360.",
      "Operationalized GenAI and ML use cases — RAG-based document matching, ML classification — with human-in-the-loop validation and governed workflows, alongside governance and observability frameworks for production data and AI systems.",
      "Partnered with C-level executives as an advisor to shape enterprise data & AI strategy, drive data literacy, and guide adoption of analytics and AI decisioning across business lines.",
      "Led a global data organization of ~75 across data science, analytics, data product management, and engineering.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Director, Data, Analytics & AI",
    dates: "Oct 2018 – June 2022",
    description: [
      "Appointed under a mandate from the President of Consumer Banking to build enterprise data and analytics capabilities — defined a 5+ year strategy and investment-backed roadmap across all Consumer Banking business lines.",
      "Built and scaled an enterprise ML feature store supporting credit risk, retention, CLV, and customer analytics.",
      "Enabled self-service BI across all Consumer Banking business lines.",
      "Designed an enterprise marketing analytics database anchored on first-party data, enabling privacy-compliant targeting and measurement post-GDPR/CCPA.",
      "Implemented centralized controls and exception management (ServiceNow) supporting CFPB consent order remediation.",
      "Served as Chief Data Steward for Consumer Banking, advancing governance frameworks and data quality standards.",
      "Developed the balance history and portfolio analytics framework for consumer loan products, supporting Finance, Credit Strategy, and business unit analytics teams with reconciliation, trend analysis, and regulatory reporting.",
    ],
  },
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title: "Sr. Manager, Analytics, BI & Pricing – Discover Home Loans",
    dates: "Jul 2016 – Oct 2018",
    description: [
      "Redesigned risk-based pricing models and product structures, driving a 20% increase in ROE while improving conversion.",
      "Built a multi-touch attribution model that quantified what each channel actually contributed, and used it to redirect marketing investment across digital and offline campaigns.",
      "Stood up the analytical data environment and BI infrastructure from scratch after an origination system migration, restoring enterprise reporting and marketing analytics for Discover Home Loans.",
      "Ran the CSAT/NPS survey pipeline for funded loan customers, giving the home loans business its voice-of-customer reporting.",
      "Partnered with Treasury and Credit Risk on fund transfer pricing (FTP) and equity allocation analysis, optimizing lending margins and cost-of-capital allocation.",
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
              <ul className="list-outside list-disc space-y-1 pl-5 text-sm text-gray-700">
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
