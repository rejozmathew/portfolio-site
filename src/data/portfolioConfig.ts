export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

export const portfolioConfig: PortfolioItemConfig[] = [
  { blogSlug: "identity-graph", titleOverride: "Enterprise Identity Graphs / Customer360" },
  { blogSlug: "ml-driven-marketing-personalization", titleOverride: "ML-Driven Marketing Personalization" },
  { blogSlug: "enterprise-data-modernization" },
  { blogSlug: "bfsi-controls-monitoring", titleOverride: "Controls & Monitoring in Financial Services" },
  { blogSlug: "ml-call-center", titleOverride: "ML-Powered Call Center Monitoring" },
  { blogSlug: "llm-sql-modernization", titleOverride: "GenAI + HITL SQL Modernization" },
];
