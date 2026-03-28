export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

export const portfolioConfig: PortfolioItemConfig[] = [
  { blogSlug: "identity-graph", titleOverride: "Enterprise Identity Graph" },
  { blogSlug: "document-migration-at-scale", titleOverride: "Responsible RAG for Document Matching" },
  { blogSlug: "enterprise-mlops", titleOverride: "Inside an Enterprise AI/ML Platform" },
  { blogSlug: "ml-driven-marketing-personalization", titleOverride: "ML-Driven Marketing Personalization" },
  { blogSlug: "llm-sql-modernization", titleOverride: "Responsible AI Pattern for Data Transformation" },
  { blogSlug: "ml-call-center", titleOverride: "ML-Powered Call Center Monitoring" },
  {
    blogSlug: "enterprise-data-modernization",
    titleOverride: "Enterprise Data Modernization & AI Data Lifecycle",
  },
  { blogSlug: "bfsi-controls-monitoring", titleOverride: "Controls & Monitoring in Financial Services" },
  {
    blogSlug: "feature-store-foundation",
    titleOverride: "Feature Store Foundation",
  },
];
