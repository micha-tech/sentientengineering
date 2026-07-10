export const capabilities = [
  {
    title: "Applied AI Engineering",
    summary:
      "We design AI systems that understand business context, work with company data, communicate naturally, use tools, and support operational work.",
    applications: [
      "AI assistants",
      "AI agents",
      "Knowledge systems",
      "Document intelligence",
      "Enterprise search",
      "Customer operations",
      "Sales automation",
      "Voice AI",
      "Workflow orchestration",
      "Decision support systems",
    ],
    image: {
      src: "/images/ai-assistant.jpg",
      width: 1500,
      height: 844,
      alt: "AI assistant interface representing applied AI systems for business operations",
    },
  },
  {
    title: "Applied Machine Learning Engineering",
    summary:
      "We build predictive and analytical systems that learn from operational data and improve decisions.",
    applications: [
      "Forecasting",
      "Classification",
      "Recommendation systems",
      "Anomaly detection",
      "Demand prediction",
      "Churn prediction",
      "Lead scoring",
      "Risk analysis",
      "Predictive maintenance",
      "Optimization",
    ],
  },
  {
    title: "Computer Vision Systems",
    summary:
      "We develop systems that inspect, detect, monitor, measure, and understand physical environments using cameras and visual data.",
    applications: [
      "Quality inspection",
      "Defect detection",
      "Object detection",
      "Safety monitoring",
      "Equipment monitoring",
      "Inventory visibility",
      "Site monitoring",
      "Medical image assistance",
      "Traffic monitoring",
      "Fleet monitoring",
      "Access control",
    ],
    image: {
      src: "/images/computer-vision-detection.webp",
      width: 1080,
      height: 565,
      alt: "Computer vision system detecting pedestrians, vehicles, signals, and objects in a street environment",
    },
  },
  {
    title: "Robotics and Autonomous Systems",
    summary:
      "We design and integrate intelligent systems that connect AI, sensors, software, machines, and physical processes.",
    applications: [
      "Industrial automation",
      "Robotic inspection",
      "Autonomous monitoring",
      "Warehouse automation",
      "Material handling",
      "Smart machinery",
      "Sensor-driven operations",
      "Human-machine collaboration",
    ],
    image: {
      src: "/images/robotics-arm.webp",
      width: 700,
      height: 350,
      alt: "Robotic arm used to represent robotics integration and autonomous systems engineering",
    },
  },
  {
    title: "Intelligent Automation",
    summary:
      "We connect applications, APIs, data sources, business tools, and AI models to automate operational workflows.",
    applications: [
      "Workflow automation",
      "Document processing",
      "Approval systems",
      "Customer service automation",
      "Sales operations",
      "Finance operations",
      "Procurement workflows",
      "Notifications",
      "Process orchestration",
    ],
  },
  {
    title: "Data and Decision Intelligence",
    summary:
      "We transform operational data into information that teams and decision-makers can use.",
    applications: [
      "Executive dashboards",
      "Operational analytics",
      "Real-time monitoring",
      "Data platforms",
      "Reporting systems",
      "Forecasting interfaces",
      "Performance intelligence",
      "Decision-support systems",
    ],
  },
  {
    title: "Operations Engineering",
    summary:
      "We analyze how work, information, materials, and decisions move through an organization so intelligent systems are aimed at real constraints.",
    applications: [
      "Bottleneck analysis",
      "Process mapping",
      "Throughput improvement",
      "Lead-time reduction",
      "Waste elimination",
      "Capacity analysis",
      "Workflow redesign",
      "Constraint management",
      "Operational visibility",
    ],
  },
] as const;

export const industries = [
  {
    name: "Logistics and Transportation",
    applications: [
      "Route intelligence",
      "Dispatch automation",
      "Fleet monitoring",
      "Delivery tracking",
      "Driver visibility",
      "Document processing",
      "Predictive maintenance",
      "Demand forecasting",
      "Computer vision monitoring",
    ],
  },
  {
    name: "Manufacturing",
    applications: [
      "Visual quality inspection",
      "Defect detection",
      "Predictive maintenance",
      "Production monitoring",
      "Process automation",
      "Worker safety",
      "Equipment intelligence",
      "Throughput optimization",
    ],
  },
  {
    name: "Healthcare",
    applications: [
      "Patient workflow automation",
      "Scheduling",
      "Medical document intelligence",
      "Diagnostic support",
      "Medical imaging assistance",
      "Inventory monitoring",
      "Patient communication",
      "Operational analytics",
    ],
  },
  {
    name: "Supply Chain and Distribution",
    applications: [
      "Demand forecasting",
      "Inventory intelligence",
      "Procurement automation",
      "Warehouse visibility",
      "Supplier analysis",
      "Distribution optimization",
      "Order tracking",
      "Stockout prediction",
    ],
  },
  {
    name: "Construction and Infrastructure",
    applications: [
      "Site monitoring",
      "Safety detection",
      "Progress tracking",
      "Project intelligence",
      "Equipment tracking",
      "Procurement visibility",
      "Resource planning",
      "Document automation",
    ],
  },
  {
    name: "Retail and Commerce",
    applications: [
      "Customer intelligence",
      "Demand prediction",
      "Sales automation",
      "Inventory optimization",
      "Recommendation systems",
      "Customer engagement",
      "Payment workflows",
      "Loss prevention",
    ],
  },
  {
    name: "Energy and Utilities",
    applications: [
      "Asset monitoring",
      "Predictive maintenance",
      "Infrastructure inspection",
      "Anomaly detection",
      "Energy forecasting",
      "Field service intelligence",
      "Operational dashboards",
    ],
  },
  {
    name: "Agriculture and Food Systems",
    applications: [
      "Crop monitoring",
      "Disease detection",
      "Yield forecasting",
      "Visual inspection",
      "Supply chain visibility",
      "Equipment monitoring",
      "Farm operations automation",
    ],
  },
  {
    name: "Financial and Professional Services",
    applications: [
      "Document intelligence",
      "Workflow automation",
      "Customer operations",
      "Risk analysis",
      "Knowledge systems",
      "Compliance support",
      "Forecasting",
      "Service delivery automation",
    ],
  },
] as const;

export const gyptiqCapabilities = [
  "Engage customers through WhatsApp and Gmail",
  "Understand customer enquiries",
  "Generate and qualify leads",
  "Follow up with prospects automatically",
  "Create quotations and invoices",
  "Generate payment links",
  "Track payments",
  "Schedule appointments",
  "Send reminders",
  "Maintain customer history",
  "Organize sales and customer workflows",
  "Show business owners what the AI is doing in the background",
] as const;

export const workSteps = [
  {
    title: "Understand the system",
    copy: "We study the business, industry environment, workflow, data, people, constraints, and desired outcomes.",
  },
  {
    title: "Identify intelligence opportunities",
    copy: "We determine where AI, machine learning, computer vision, robotics, automation, or operational redesign can create measurable value.",
  },
  {
    title: "Design the architecture",
    copy: "We define the data flows, models, integrations, interfaces, infrastructure, safeguards, and human oversight required.",
  },
  {
    title: "Build and deploy",
    copy: "We engineer the system, integrate it into existing operations, test it under realistic conditions, and deploy it responsibly.",
  },
  {
    title: "Measure and improve",
    copy: "We monitor performance, reliability, accuracy, adoption, cost, throughput, and business impact.",
  },
] as const;

export const differentiators = [
  "Applied AI, not AI theatre",
  "Business and industrial problem orientation",
  "Strong software engineering foundations",
  "Understanding of digital and physical operations",
  "Integration with existing tools and workflows",
  "Security and reliability by design",
  "Human oversight where appropriate",
  "Measurable operational outcomes",
  "Lean and frugal engineering principles",
  "Systems designed around real constraints",
] as const;
