export const services = [
  {
    id: "ai-systems-engineering",
    title: "AI Systems Engineering",
    icon: "spark" as const,
    summary:
      "Complete AI-powered applications, decision-support systems, recommendation engines, and enterprise platforms.",
    problems:
      "Disconnected AI experiments, slow knowledge work, inconsistent decisions, and processes that need intelligence embedded in the workflow.",
    applications: [
      "Enterprise AI applications",
      "Decision-support systems",
      "Recommendation engines",
      "AI agents and assistants",
    ],
    outcomes: [
      "Faster operational decisions",
      "Consistent execution",
      "Scalable intelligent workflows",
    ],
    industries: ["Commerce", "Healthcare", "Manufacturing", "Professional services"],
  },
  {
    id: "intelligent-process-automation",
    title: "Intelligent Process Automation",
    icon: "workflow" as const,
    summary:
      "AI-enabled automation across enquiries, quotations, approvals, procurement, reporting, and internal operations.",
    problems:
      "Manual handoffs, repetitive administration, fragmented applications, slow approvals, and inconsistent follow-up.",
    applications: [
      "Sales and service workflows",
      "Approval orchestration",
      "Procurement automation",
      "Reporting and notifications",
    ],
    outcomes: [
      "Shorter cycle times",
      "Lower administrative load",
      "More reliable execution",
    ],
    industries: ["Logistics", "Retail", "Construction", "Professional services"],
  },
  {
    id: "computer-vision-engineering",
    title: "Computer Vision Engineering",
    icon: "pulse" as const,
    summary:
      "Visual systems for inspection, object detection, tracking, safety, counting, and operational visibility.",
    problems:
      "Limited physical visibility, manual inspection, inconsistent quality checks, and delayed detection of risk.",
    applications: [
      "Quality and defect inspection",
      "Safety monitoring",
      "Equipment and site monitoring",
      "Object tracking and counting",
    ],
    outcomes: [
      "Earlier issue detection",
      "Improved safety visibility",
      "More consistent inspection",
    ],
    industries: ["Manufacturing", "Energy", "Construction", "Logistics"],
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    icon: "database" as const,
    summary:
      "Systems that extract, classify, validate, compare, and route information from business and technical documents.",
    problems:
      "High-volume document handling, manual data entry, slow validation, and information trapped in unstructured files.",
    applications: [
      "Purchase order processing",
      "Invoice and quotation extraction",
      "Tender and contract review",
      "Forms and technical reports",
    ],
    outcomes: [
      "Faster processing",
      "Higher data quality",
      "Searchable structured information",
    ],
    industries: ["Distribution", "Healthcare", "Construction", "Financial services"],
  },
  {
    id: "conversational-voice-ai",
    title: "Conversational and Voice AI",
    icon: "message" as const,
    summary:
      "AI systems for WhatsApp, email, web chat, telephone, internal applications, support, and sales.",
    problems:
      "Slow response, missed enquiries, inconsistent service, overloaded teams, and disconnected communication channels.",
    applications: [
      "Customer service assistants",
      "Sales and enquiry handling",
      "Appointment workflows",
      "Employee and technical support",
    ],
    outcomes: [
      "Faster response",
      "Consistent engagement",
      "Greater service capacity",
    ],
    industries: ["Retail", "Healthcare", "Field services", "B2B commerce"],
  },
  {
    id: "enterprise-knowledge-rag",
    title: "Enterprise Knowledge and RAG Systems",
    icon: "layers" as const,
    summary:
      "Secure knowledge assistants connected to company documents, CRM records, policies, catalogues, and technical data.",
    problems:
      "Slow information retrieval, fragmented knowledge, repeated questions, and expertise that is difficult to access.",
    applications: [
      "Enterprise search",
      "Policy and procedure assistants",
      "Technical knowledge systems",
      "Product and catalogue intelligence",
    ],
    outcomes: [
      "Faster knowledge access",
      "More consistent answers",
      "Reduced search effort",
    ],
    industries: ["Scientific equipment", "Healthcare", "Manufacturing", "Professional services"],
  },
  {
    id: "predictive-ai",
    title: "Predictive AI and Decision Intelligence",
    icon: "chart" as const,
    summary:
      "Forecasting, anomaly detection, lead scoring, demand planning, predictive maintenance, and decision support.",
    problems:
      "Reactive decisions, hidden patterns, uncertain demand, equipment risk, and limited forward visibility.",
    applications: [
      "Demand and revenue forecasting",
      "Predictive maintenance",
      "Lead and risk scoring",
      "Anomaly detection",
    ],
    outcomes: [
      "Earlier intervention",
      "Improved planning",
      "Better resource decisions",
    ],
    industries: ["Manufacturing", "Energy", "Logistics", "Commerce"],
  },
  {
    id: "optimization-operations-intelligence",
    title: "Optimization and Operations Intelligence",
    icon: "target" as const,
    summary:
      "Mathematical and AI systems for routes, scheduling, production, warehouses, procurement, and resource allocation.",
    problems:
      "Inefficient routing, poor scheduling, constrained capacity, inventory imbalance, and complex allocation decisions.",
    applications: [
      "Route and dispatch optimization",
      "Workforce scheduling",
      "Production planning",
      "Supply-chain optimization",
    ],
    outcomes: [
      "Better asset utilization",
      "Lower operating cost",
      "More reliable planning",
    ],
    industries: ["Logistics", "Manufacturing", "Energy", "Construction"],
  },
  {
    id: "robotics-edge-ai",
    title: "Robotics and Edge AI",
    icon: "bot" as const,
    summary:
      "Intelligence deployed close to machines, cameras, sensors, and physical operations.",
    problems:
      "Latency-sensitive decisions, limited connectivity, repetitive physical tasks, and systems that must operate at the edge.",
    applications: [
      "Robotic inspection",
      "Edge computer vision",
      "Sensor intelligence",
      "Autonomous monitoring",
    ],
    outcomes: [
      "Faster local response",
      "Reduced manual exposure",
      "Improved physical automation",
    ],
    industries: ["Manufacturing", "Energy", "Logistics", "Infrastructure"],
  },
  {
    id: "ai-infrastructure-mlops",
    title: "AI Infrastructure and MLOps",
    icon: "cloud" as const,
    summary:
      "Deployment pipelines, model evaluation, vector databases, observability, APIs, governance, and cloud infrastructure.",
    problems:
      "Fragile deployments, uncontrolled cost, limited observability, poor evaluation, and security gaps.",
    applications: [
      "AI deployment pipelines",
      "Model and workflow evaluation",
      "Vector data infrastructure",
      "Monitoring and governance",
    ],
    outcomes: [
      "Reliable deployment",
      "Controlled operating cost",
      "Maintainable AI systems",
    ],
    industries: ["Enterprise", "Financial services", "Healthcare", "Industrial operations"],
  },
  {
    id: "managed-ai-operations",
    title: "Managed AI Operations",
    icon: "shield" as const,
    summary:
      "Ongoing monitoring, maintenance, evaluation, knowledge updates, infrastructure support, and system optimization.",
    problems:
      "Limited internal AI capacity, degrading system quality, changing workflows, and unmanaged operational risk.",
    applications: [
      "System monitoring",
      "Knowledge-base maintenance",
      "Integration support",
      "Continuous optimization",
    ],
    outcomes: [
      "Sustained system quality",
      "Reduced operational burden",
      "Continuous improvement",
    ],
    industries: ["All deployed AI environments"],
  },
] as const;

export const products = [
  {
    id: "gyptiq",
    name: "Gyptiq",
    label: "Flagship Product",
    description:
      "An AI-native business operations platform connecting customer conversations, records, sales workflows, quotations, payments, appointments, inventory, and internal operations.",
    useCase:
      "Customer-facing operations for businesses working across WhatsApp, email, websites, and internal teams.",
    capabilities: [
      "Unified enquiry handling",
      "Lead qualification and follow-up",
      "Quotations and payment workflows",
      "Appointments, reminders, and customer history",
    ],
    outcomes: [
      "Faster response",
      "More consistent follow-up",
      "Reduced manual work",
      "One operational view",
    ],
    cta: "Explore Gyptiq",
  },
  {
    id: "revenue-operations",
    name: "AI Revenue Operations Platform",
    label: "Configurable Platform",
    description:
      "An intelligent sales and customer-engagement system for businesses receiving enquiries through multiple channels.",
    useCase:
      "Lead capture, qualification, response, quotation, follow-up, reactivation, and conversion analysis.",
    capabilities: [
      "Lead capture and qualification",
      "AI-assisted responses",
      "Quotation preparation",
      "Conversion analytics",
    ],
    outcomes: ["Shorter response cycles", "Consistent follow-up", "Improved sales visibility"],
    cta: "Discuss This Platform",
  },
  {
    id: "document-processing",
    name: "Intelligent Document Processing Platform",
    label: "Configurable Platform",
    description:
      "A platform for extracting, validating, structuring, comparing, and routing information from operational documents.",
    useCase:
      "Purchase orders, quotations, invoices, tenders, forms, contracts, and technical reports.",
    capabilities: [
      "Document classification",
      "Field extraction and validation",
      "Comparison and exception handling",
      "Workflow routing",
    ],
    outcomes: ["Less manual entry", "Faster processing", "Higher information quality"],
    cta: "Discuss This Platform",
  },
  {
    id: "commerce-engine",
    name: "AI Commerce Engine",
    label: "Configurable Platform",
    description:
      "An intelligent layer for B2B commerce and ecommerce platforms with technical product and purchasing intelligence.",
    useCase:
      "Complex product discovery, matching, quotation, compatibility checking, and customer support.",
    capabilities: [
      "Natural-language product search",
      "Technical product matching",
      "Purchase-order upload",
      "RFQ generation and follow-up",
    ],
    outcomes: ["Faster product discovery", "More accurate matching", "Shorter quotation cycles"],
    cta: "Discuss This Platform",
  },
  {
    id: "industrial-vision",
    name: "Industrial Vision Platform",
    label: "Industry Solution",
    description:
      "Modular computer-vision systems for safety, inspection, tracking, counting, site monitoring, and production visibility.",
    useCase:
      "Physical operations that need continuous visual inspection or event detection.",
    capabilities: [
      "Defect and object detection",
      "Safety monitoring",
      "Equipment inspection",
      "Counting and tracking",
    ],
    outcomes: ["Earlier detection", "Consistent inspection", "Improved operational visibility"],
    cta: "Discuss This Solution",
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance Platform",
    label: "Industry Solution",
    description:
      "A reliability system for equipment health scoring, anomaly detection, failure-risk prediction, and maintenance planning.",
    useCase:
      "Asset-intensive operations seeking to reduce unplanned downtime and improve maintenance decisions.",
    capabilities: [
      "Equipment health scoring",
      "Anomaly and risk detection",
      "Inspection tracking",
      "Maintenance scheduling",
    ],
    outcomes: ["Earlier maintenance action", "Reduced downtime risk", "Better reliability planning"],
    cta: "Discuss This Solution",
  },
  {
    id: "knowledge-assistant",
    name: "Enterprise AI Knowledge Assistant",
    label: "Managed Solution",
    description:
      "A secure AI assistant grounded in company documents, policies, technical manuals, catalogues, and business records.",
    useCase:
      "Organisations that need reliable, governed access to distributed internal knowledge.",
    capabilities: [
      "Secure retrieval",
      "Source-grounded answers",
      "Role-aware access",
      "Knowledge monitoring",
    ],
    outcomes: ["Faster information access", "Consistent answers", "Reduced support load"],
    cta: "Discuss This Solution",
  },
  {
    id: "logistics-intelligence",
    name: "Logistics Intelligence Platform",
    label: "Industry Solution",
    description:
      "An operational platform for dispatch, route planning, delivery prediction, fleet visibility, and logistics documentation.",
    useCase:
      "Transport and distribution operations coordinating vehicles, orders, documents, and delivery commitments.",
    capabilities: [
      "Route and dispatch intelligence",
      "Delivery prediction",
      "Fleet monitoring",
      "Document automation",
    ],
    outcomes: ["Improved delivery visibility", "Better route decisions", "More reliable dispatch"],
    cta: "Discuss This Solution",
  },
] as const;

export const industries = [
  {
    name: "Logistics and Supply Chain",
    image: "/images/industry-logistics.png",
    imageAlt:
      "Connected logistics network with cargo ship, trucks, aircraft, and port operations",
    examples:
      "Route optimization, dispatch intelligence, delivery prediction, fleet monitoring, document processing, and operational visibility.",
  },
  {
    name: "Manufacturing",
    image: "/images/industry-manufacturing.png",
    imageAlt:
      "Smart manufacturing facility with robotic production lines",
    examples:
      "Quality inspection, predictive maintenance, production intelligence, defect detection, scheduling, and inventory optimization.",
  },
  {
    name: "Healthcare and Medical Services",
    image: "/images/industry-healthcare-laboratory.png",
    imageAlt:
      "Modern healthcare laboratory with microscope and diagnostic equipment",
    examples:
      "Document intelligence, patient communication, appointment systems, inventory visibility, equipment monitoring, and operational automation.",
  },
  {
    name: "Scientific and Laboratory Equipment",
    image: "/images/industry-healthcare-laboratory.png",
    imageAlt:
      "Scientific laboratory microscope and testing equipment",
    examples:
      "Technical product search, quotation automation, purchase-order processing, product recommendations, after-sales support, and knowledge systems.",
  },
  {
    name: "Energy and Utilities",
    image: "/images/industry-energy.png",
    imageAlt:
      "Renewable energy and utilities infrastructure with wind, solar, hydro, and power transmission",
    examples:
      "Asset monitoring, anomaly detection, field inspection, maintenance intelligence, reliability analytics, and decision support.",
  },
  {
    name: "Construction and Infrastructure",
    image: "/images/industry-construction.png",
    imageAlt:
      "Engineers overseeing a major construction and infrastructure project",
    examples:
      "Site monitoring, safety compliance, project intelligence, document processing, equipment tracking, and progress analysis.",
  },
  {
    name: "Retail and B2B Commerce",
    image: "/images/industry-commerce.png",
    imageAlt:
      "Autonomous package delivery supporting modern retail and commerce operations",
    examples:
      "Product intelligence, customer engagement, demand planning, sales automation, quotation workflows, and inventory optimization.",
  },
  {
    name: "Professional and Field Services",
    image: "/images/industry-field-services.png",
    imageAlt:
      "Field service professional coordinating work with a connected tablet",
    examples:
      "Knowledge systems, scheduling, customer operations, reporting, field coordination, document automation, and decision support.",
  },
] as const;

export const engineeringCapabilities = [
  "Generative AI",
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Computer Vision",
  "Natural Language Processing",
  "Predictive Analytics",
  "Optimization",
  "AI Agents",
  "Voice AI",
  "Workflow Automation",
  "Data Engineering",
  "Cloud Infrastructure",
  "APIs and Integrations",
  "Vector Databases",
  "MLOps",
  "Edge AI",
] as const;

export const businessOutcomes = [
  "Reduce customer response time",
  "Shorten enquiry-to-quotation cycles",
  "Increase sales follow-up consistency",
  "Reduce repetitive administrative work",
  "Improve operational visibility",
  "Detect risks and anomalies earlier",
  "Improve resource allocation",
  "Reduce equipment downtime",
  "Improve decision-making",
  "Increase process reliability",
  "Convert unstructured data into usable information",
  "Scale operations without proportionally increasing overhead",
] as const;

export const managedAiCapabilities = [
  "System monitoring",
  "Model and workflow evaluation",
  "Knowledge-base updates",
  "Infrastructure management",
  "Integration maintenance",
  "Security and access control",
  "Cost monitoring",
  "Incident response",
  "Performance reporting",
  "Continuous optimization",
] as const;

export const workSteps = [
  {
    title: "Understand",
    copy: "We study the operational problem, objective, workflow, data, systems, constraints, and success metrics.",
  },
  {
    title: "Design",
    copy: "We define the architecture, AI capabilities, integrations, user experience, governance, and deployment approach.",
  },
  {
    title: "Build",
    copy: "We engineer the application, workflows, data pipelines, models, APIs, infrastructure, and interfaces.",
  },
  {
    title: "Deploy",
    copy: "We integrate the system with the existing environment and prepare it for secure production use.",
  },
  {
    title: "Operate and Improve",
    copy: "We monitor outcomes, update knowledge, optimize workflows, and improve the system continuously.",
  },
] as const;

export const projectTypes = [
  "AI Business System",
  "Intelligent Automation",
  "Computer Vision",
  "Document Intelligence",
  "Conversational or Voice AI",
  "Enterprise Knowledge System",
  "Predictive AI",
  "AI Product Development",
  "Managed AI Operations",
  "Other",
] as const;
