"use client"; // Mark component as client-side for motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

const expertiseAreas = [
  {
    title: "Business & Domain",
    skills: [
      "Consumer Banking, Lending & Deposits",
      "Customer Acquisition, Retention & Lifecycle Analytics",
      "Portfolio, Pricing & Credit Analytics",
      "Pricing Strategy & Product Structure",
      "M&A Integration, Divestiture & Portfolio Migration",
      "Customer Experience & Decision Intelligence",
      "Marketing & Operational Analytics",
    ],
  },
  {
    title: "Strategy & Leadership",
    skills: [
      "Enterprise Data & AI Strategy, Architecture & Modernization",
      "Technical Program & Data Product Management",
      "Global, Multi-Discipline Team Leadership (Data Science, Engineering, Analytics)",
      "C-Suite Partnership & Executive Communication",
      "Cross-Functional Stakeholder Alignment",
      "Data Literacy & Analytics Adoption",
    ],
  },
  {
    title: "Platform & Technology",
    skills: [
      "Cloud-Native Data Platforms (AWS, GCP, Snowflake, Databricks, Spark)",
      "Knowledge Graph, Semantic Layer & BI (Neo4j, AtScale, Tableau)",
      "Master Data Management & Identity Resolution (Customer 360)",
      "MarTech & CRM Integration (Adobe, Segment, Salesforce)",
      "Data Platform Architecture & Modernization",
      "Self-Service BI Enablement",
    ],
  },
  {
    title: "AI/ML & Governance",
    skills: [
      "AI/GenAI Lifecycle & Responsible AI (ML, LLMs, RAG, Agentic AI, MLOps, Observability)",
      "Predictive Modeling (Credit Risk, Retention, Pre-payment, CLV)",
      "ML Feature Engineering & Feature Stores",
      "Data Governance, Quality, Metadata & Lineage (Alation, Anomalo)",
      "Regulatory Compliance (KYC/AML, TCPA, GLBA, PCI DSS, GDPR/CCPA)",
      "Controls, Exception Management & Consent Order Remediation (ServiceNow)",
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

export default Expertise;
