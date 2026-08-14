"use client"; // Mark component as client-side for motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

// Five groupings, each stating what the capability was for.
const expertiseAreas = [
  {
    title: "AI & Machine Learning",
    summary:
      "Models that carry a business decision, and the operating layer that keeps them trustworthy once they are live.",
    skills: [
      "ML decisioning and personalization — selecting offers across channels in real time",
      "Feature store design — consistent, production-ready features for credit risk, retention, and lifetime value models",
      "MLOps — governed code promotion, production monitoring, drift detection, explainability",
      "GenAI and RAG with human-in-the-loop review before a decision stands",
      "Hands-on model development in Python and SAS",
    ],
  },
  {
    title: "Data Platform & Governance",
    summary:
      "The governed foundation everything else runs on — modernization, identity, and the controls that make data defensible to a regulator.",
    skills: [
      "Cloud platform modernization (Snowflake, AWS) and domain-centric architecture",
      "Identity graph (Neo4j) and MDM / Customer 360 for resolving a customer across products",
      "Semantic layers and self-service BI (AtScale, Tableau) so business teams query governed definitions",
      "Data quality, lineage, and observability; regulatory compliance (KYC/AML, GLBA, GDPR/CCPA)",
    ],
  },
  {
    title: "Commercial & Portfolio Analytics",
    summary:
      "Where the analysis meets the P&L: what to charge, where to spend, and what a portfolio is worth.",
    skills: [
      "Risk-based pricing, fund transfer pricing, and equity allocation",
      "Portfolio economics — balance walk validation, vintage and collection curve analysis",
      "Marketing investment and multi-touch attribution",
      "Divestiture and M&A data workstreams",
    ],
  },
  {
    title: "Customer & Marketing Data",
    summary:
      "Making first-party customer data usable for targeting and measurement without stepping outside privacy constraints.",
    skills: [
      "MarTech and CDP integration (Adobe, Segment, Salesforce, Acxiom)",
      "First-party marketing analytics database and campaign measurement",
      "Segmentation, household, journey, and lifecycle analytics",
      "Privacy-compliant activation under GDPR/CCPA",
    ],
  },
  {
    title: "Leadership",
    summary:
      "Running a multi-discipline data organization and holding the executive relationships that fund it.",
    skills: [
      "Global team leadership across data science, engineering, analytics, and data product management",
      "Data product management and roadmap sequencing with business lines",
      "C-suite advisory on data & AI strategy and adoption",
      "Vendor partnerships and product-oriented delivery models",
    ],
  },
];

// Animation variants for fade-in effect
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Expertise: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="expertise" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Expertise & Skills
        </h2>

        {/* Detailed Skill Lists - Could also wrap this grid or individual cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {expertiseAreas.map((area) => (
            // White card background, dark text
            <motion.div
              key={area.title}
              className="rounded-lg bg-white p-6 shadow-md"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-primary mb-2 text-xl font-semibold">
                {area.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{area.summary}</p>
              <ul className="list-outside list-disc space-y-2 pl-5 text-gray-700">
                {area.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View My Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
