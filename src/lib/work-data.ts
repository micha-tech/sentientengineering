export type WorkEntry = {
  id: string;
  title: string;
  category: string;
  status: string;
  problem: string;
  system: string;
  capabilities: readonly string[];
  components: readonly string[];
  deployment: string;
  value: string;
};

export const workEntries = [
  {
    id: "commerce-discovery",
    title: "AI-powered ecommerce and product discovery",
    category: "Commerce intelligence",
    status: "Built system · deployment not disclosed",
    problem:
      "Complex catalogues, slow product selection and unstructured customer requirements create friction before a qualified sales conversation can begin.",
    system:
      "An intelligent commerce platform that interprets requirements, helps customers identify relevant technical products and progresses the enquiry into an RFQ and sales workflow.",
    capabilities: ["Natural-language search", "Recommendations", "Product knowledge", "RFQ workflows"],
    components: ["Catalogue data", "Search and recommendation", "Commerce interface", "Sales workflow integration"],
    deployment: "Deployment environment not publicly disclosed",
    value: "Designed to shorten product discovery and quotation handling for complex purchases.",
  },
  {
    id: "event-vision",
    title: "Computer vision for event registration and check-in",
    category: "Computer vision and identity",
    status: "Built system · deployment not disclosed",
    problem:
      "Manual attendee lookup creates queues, weakens entry control and makes attendance records harder to reconcile.",
    system:
      "An event-operations workflow using facial detection and matching to support registration and check-in, with human review and non-biometric fallback paths.",
    capabilities: ["Facial detection", "Identity matching", "Registration", "Human review"],
    components: ["Enrolment workflow", "Vision service", "Attendee lookup", "Operations reporting"],
    deployment: "Deployment environment not publicly disclosed",
    value: "Designed to support faster lookup, more consistent verification and clearer attendance records.",
  },
  {
    id: "sales-automation",
    title: "Intelligent sales pipeline and quotation automation",
    category: "Revenue operations",
    status: "Built system · deployment not disclosed",
    problem:
      "Sales teams lose response time to repetitive enquiry handling, inconsistent evaluation and manual quotation preparation.",
    system:
      "A governed workflow that receives enquiries, extracts requirements, applies business rules and progresses approved work through quotation and structured follow-up.",
    capabilities: ["Requirement extraction", "Lead qualification", "Business rules", "Quotation automation"],
    components: ["Enquiry intake", "Decision logic", "Approval workflow", "Sales-stage tracking"],
    deployment: "Deployment environment not publicly disclosed",
    value: "Designed to improve response consistency and increase capacity for qualified sales work.",
  },
  {
    id: "biometric-infrastructure",
    title: "Facial biometric infrastructure for identity verification",
    category: "Identity infrastructure",
    status: "Client system · deployment not disclosed",
    problem:
      "Digital onboarding requires controlled facial comparison, explicit handling of uncertain results and an auditable verification record.",
    system:
      "Facial biometric infrastructure built for a KYC and AML technology company as one controlled component within a broader identity and compliance workflow.",
    capabilities: ["Quality validation", "Feature extraction", "Similarity comparison", "Manual review"],
    components: ["Biometric service", "Configurable thresholds", "Integration API", "Audit records"],
    deployment: "Client environment details are confidential",
    value: "Provides an integrable biometric layer with explicit thresholds and review controls.",
  },
  {
    id: "enterprise-knowledge",
    title: "Enterprise AI knowledge and information retrieval",
    category: "Enterprise intelligence",
    status: "Built internal system",
    problem:
      "Employees spend time searching fragmented documents, while important organisational knowledge remains difficult to access consistently.",
    system:
      "An internal knowledge system that lets authorised users search approved sources and receive conversational, source-referenced answers.",
    capabilities: ["Document ingestion", "Semantic search", "Grounded answers", "Role-aware access"],
    components: ["Knowledge pipeline", "Retrieval layer", "Conversational interface", "Access controls"],
    deployment: "Internal environment",
    value: "Designed to reduce retrieval effort while keeping answers connected to approved organisational sources.",
  },
] as const satisfies readonly WorkEntry[];
