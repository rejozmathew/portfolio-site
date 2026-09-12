export interface PortfolioItemConfig {
  blogSlug: string;
  titleOverride?: string;
  descriptionOverride?: string;
  tagsOverride?: string[];
  imageOverride?: string;
}

// The homepage portfolio is intentionally curated in this order.
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
    blogSlug: "bfsi-controls-monitoring",
    titleOverride: "Controls & Monitoring in Financial Services",
    descriptionOverride:
      "When a process touching millions of customers goes wrong, the question is not whether you were compliant — it is how fast you find out, how you size customer impact, and how you prove it was fixed. The operating model connecting control design to monitoring, exception tracking, incident triage, and remediation.",
  },
  {
    blogSlug: "ml-driven-marketing-personalization",
    titleOverride: "ML-Driven Marketing Personalization",
    imageOverride: "/images/blog/ml-personalization/gbdt-dnn-architecture.svg",
    descriptionOverride:
      "Replaced quarterly placement negotiations between product teams with an algorithm that allocates marketing real estate by expected value, choosing among dozens of offers per session in real time. Underneath it: a hybrid GBDT and deep neural network architecture, and the model risk review it had to survive.",
  },
  {
    blogSlug: "prepayment",
    titleOverride: "The Prepayment Paradox",
    imageOverride:
      "/images/blog/prepayment-paradox-decision-trees/prepayment-lifecycle.svg",
    descriptionOverride:
      "The strongest borrowers can become the weakest portfolio investments when they refinance before acquisition costs are recovered. A prepayment propensity model using segmentation trees, credit bureau features, and closed-loop suppression logic identified that risk before solicitation.",
  },
  {
    blogSlug: "enterprise-data-management",
    titleOverride: "Enterprise Data Management: The Five-Year Foundation",
    descriptionOverride:
      "Advanced analytics and AI cannot scale on data that people cannot find, understand, or trust. A five-year foundation spanning cataloguing, profiling, quality monitoring, stewardship, and governance turned a fragmented data estate into reusable enterprise infrastructure.",
  },
  {
    blogSlug: "channel-containment",
    titleOverride: "Digital Channel Containment",
    descriptionOverride:
      "Digital adoption metrics hid the moments when customers abandoned mobile or web and called for help. A cross-channel containment scorecard and NLP-driven intent matching exposed where experiences broke, why they broke, and which fixes would reduce both customer friction and service cost.",
  },
  {
    blogSlug: "hybrid-lakehouse-migration",
    titleOverride: "Hybrid Data Lakehouse",
    descriptionOverride:
      "Enterprises often need Snowflake and Databricks to coexist without creating two disconnected data estates. A hybrid lakehouse built on Apache Iceberg, coordinated governance, and a layered migration path keeps both platforms working from an open, controlled foundation.",
  },
  {
    blogSlug: "enterprise-data-modernization",
    titleOverride: "Enterprise Data Modernization",
    descriptionOverride:
      "Leaders were getting different answers to the same question depending on who ran the query. A domain-centric rebuild of the analytics environment — curated layers, lineage, and observability — so a metric has one definition and a known provenance before anyone, or any AI agent, builds on it.",
  },
  {
    blogSlug: "document-migration-at-scale",
    titleOverride: "RAG Document Migration",
    descriptionOverride:
      "A portfolio sale stalls if you cannot prove which borrower each promissory note belongs to. Matching legacy documents across five source systems and 25 years took a three-tier pipeline — deterministic joins, then probabilistic scoring, then a RAG pipeline with LLM-generated explanations, human review, and an audit trail behind every match decision.",
  },
  {
    blogSlug: "enterprise-mlops",
    titleOverride: "Inside an Enterprise AI/ML Platform",
    descriptionOverride:
      "Models that scored well in a notebook were taking quarters to reach a customer. The platform that closed that gap for a large data science organization: feature store, governed code promotion, batch and real-time serving, and monitoring tiers that let a regulated institution put a model in front of customers and defend it afterward.",
  },
  {
    blogSlug: "ml-call-center",
    titleOverride: "ML-Powered Call Center Monitoring",
    descriptionOverride:
      "A regulator asked how we knew we were catching every complaint, including the ones customers never label as complaints. A call transcript intelligence platform answered it: ML detection of non-self-identified complaints with human review, later extended into LLM summarization, agent coaching, and knowledge gap analysis.",
  },
  {
    blogSlug: "llm-sql-modernization",
    titleOverride: "LLM SQL Modernization",
    descriptionOverride:
      "A cloud migration that lifted a decade of legacy SQL into Snowflake unchanged moved the data but not the cost profile. Modernizing thousands of those queries with LLM rewriting — checked against Snowflake EXPLAIN plans and automated validation, with a human approving each change — is a repeatable pattern for using AI on code you cannot afford to get wrong.",
  },
];
