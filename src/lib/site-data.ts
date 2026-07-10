export const capabilities = [
  {
    title: "Applied AI Engineering",
    summary:
      "AI systems that understand context, use business data, and support operational work.",
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
      "Predictive and analytical systems built from operational data.",
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
      "Camera-based systems for inspection, detection, monitoring, and measurement.",
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
      "Integrated AI, sensor, software, and machine systems for physical processes.",
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
      "Connected workflows across applications, APIs, data sources, and AI models.",
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
      "Data platforms, monitoring, and decision interfaces teams can actually use.",
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
      "Operational analysis that points intelligent systems at real constraints.",
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

export const systemImages = [
  {
    label: "Applied AI",
    src: "/images/ai-assistant.jpg",
    alt: "AI assistant interface representing applied AI for customer and operational workflows",
  },
  {
    label: "Machine Learning",
    src: "/images/computer-vision-hud.webp",
    alt: "Digital eye interface representing machine learning and pattern recognition systems",
  },
  {
    label: "Computer Vision",
    src: "/images/computer-vision-detection.webp",
    alt: "Computer vision system detecting people, vehicles, signs, and street objects",
  },
  {
    label: "Visual Intelligence",
    src: "/images/computer-vision-eye.jpg",
    alt: "Human eye with digital overlays representing visual intelligence and image analysis",
  },
  {
    label: "Robotics Integration",
    src: "/images/robotics-arm.webp",
    alt: "Robotic arm representing industrial robotics and autonomous systems integration",
  },
  {
    label: "Autonomous Systems",
    src: "/images/robotics-humanoid.jpg",
    alt: "Humanoid robot representing autonomous systems and intelligent physical operations",
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
    copy: "We study the workflow, data, people, constraints, and desired outcomes.",
  },
  {
    title: "Identify intelligence opportunities",
    copy: "We find where AI, automation, robotics, data, or redesign can create value.",
  },
  {
    title: "Design the architecture",
    copy: "We define data flows, models, integrations, interfaces, and oversight.",
  },
  {
    title: "Build and deploy",
    copy: "We build, integrate, test under realistic conditions, and deploy responsibly.",
  },
  {
    title: "Measure and improve",
    copy: "We monitor reliability, accuracy, adoption, cost, throughput, and impact.",
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
