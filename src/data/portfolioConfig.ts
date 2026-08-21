export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

// Ordered to alternate data-platform pieces with AI/ML pieces.
// Card summaries lead with the decision the work changed, then the build.
// Article frontmatter descriptions are left alone — those serve SEO and the
// article pages themselves.
export const portfolioConfig: PortfolioItemConfig[] = [
  {
    blogSlug: "identity-graph",
    titleOverride: "Enterprise Identity Graph",
    descriptionOverride:
      "Marketing could not tell which touchpoint earned a conversion, while fraud and privacy teams each rebuilt the same customer picture separately. One identity layer in Neo4j — resolving people across devices, channels, and accounts — now serves attribution, fraud detection, and AML/KYC and GDPR/CCPA obligations from a single source.",
  },
  {
    blogSlug: "ml-driven-marketing-personalization",
    titleOverride: "ML-Driven Marketing Personalization",
    imageOverride: "/images/blog/ml-personalization/gbdt-dnn-architecture.svg",
    descriptionOverride:
      "Replaced quarterly placement negotiations between product teams with an algorithm that allocates marketing real estate by expected value, choosing among dozens of offers per session in real time. Underneath it: a hybrid GBDT and deep neural network architecture, and the model risk review it had to survive.",
  },
  {
    blogSlug: "bfsi-controls-monitoring",
    titleOverride: "Controls & Monitoring in Financial Services",
    descriptionOverride:
      "When a process touching millions of customers goes wrong, the question is not whether you were compliant — it is how fast you find out, how you size customer impact, and how you prove it was fixed. The operating model connecting control design to monitoring, exception tracking, incident triage, and remediation.",
  },
  {
    blogSlug: "enterprise-data-modernization",
    titleOverride: "Enterprise Data Modernization & AI Data Lifecycle",
    descriptionOverride:
      "Leaders were getting different answers to the same question depending on who ran the query. A domain-centric rebuild of the analytics environment — curated layers, lineage, and observability — so a metric has one definition and a known provenance before anyone, or any AI agent, builds on it.",
  },
  {
    blogSlug: "document-migration-at-scale",
    titleOverride: "Responsible RAG for Document Matching",
    descriptionOverride:
      "A portfolio sale stalls if you cannot prove which borrower each promissory note belongs to. Matching legacy documents across five source systems and 25 years took a three-tier pipeline — deterministic joins, then probabilistic scoring, then a RAG pipeline with LLM-generated explanations, human review, and an audit trail behind every match decision.",
  },
  {
    blogSlug: "ml-call-center",
    titleOverride: "ML-Powered Call Center Monitoring",
    descriptionOverride:
      "A regulator asked how we knew we were catching every complaint, including the ones customers never label as complaints. A call transcript intelligence platform answered it: ML detection of non-self-identified complaints with human review, later extended into LLM summarization, agent coaching, and knowledge gap analysis.",
  },
  {
    blogSlug: "enterprise-mlops",
    titleOverride: "Inside an Enterprise AI/ML Platform",
    descriptionOverride:
      "Models that scored well in a notebook were taking quarters to reach a customer. The platform that closed that gap for a large data science organization: feature store, governed code promotion, batch and real-time serving, and monitoring tiers that let a regulated institution put a model in front of customers and defend it afterward.",
  },
  {
    blogSlug: "llm-sql-modernization",
    titleOverride: "Responsible AI Pattern for Data Transformation",
    descriptionOverride:
      "A cloud migration that lifted a decade of legacy SQL into Snowflake unchanged moved the data but not the cost profile. Modernizing thousands of those queries with LLM rewriting — checked against Snowflake EXPLAIN plans and automated validation, with a human approving each change — is a repeatable pattern for using AI on code you cannot afford to get wrong.",
  },
  {
    blogSlug: "feature-store-foundation",
    titleOverride: "Feature Store Foundation",
    descriptionOverride:
      "Two teams building the same customer feature two different ways is how model results stop being comparable and how time leakage gets into training data. The entity-centric, time-aware data foundation underneath the feature store: reusable feature families and standardized temporal transformations that hold up as feature counts grow.",
  },
];
