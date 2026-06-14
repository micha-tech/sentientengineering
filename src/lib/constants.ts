export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Engineering Better Operations",
  description:
    "We engineer business systems that reduce friction, improve efficiency, and accelerate growth. Sentient Engineering is an operations engineering firm — not a software company, not an AI consultancy, not a cloud provider. We help organizations improve operational performance through intelligent systems, automation, and disciplined process design.",
  email: "hello@sentientengineering.com",
  url: "https://sentientengineering.com",
} as const;

export const META = {
  title: "Sentient Engineering | Operations Engineering Firm",
  description:
    "Sentient Engineering helps organizations improve operational performance through intelligent systems, automation, and disciplined process design. We are an operations engineering firm — not a software company.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_US",
  twitterHandle: "@sentienteng",
} as const;

export const NAV_LINKS = [
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PAIN_POINTS = [
  {
    title: "Manual Processes",
    impact:
      "Critical work depends on handoffs, spreadsheets, inboxes, and memory instead of dependable operating systems.",
  },
  {
    title: "Approval Delays",
    impact:
      "Decisions wait in queues, projects lose momentum, and teams spend energy chasing status instead of advancing work.",
  },
  {
    title: "Data Silos",
    impact:
      "Information lives across disconnected tools, making every report slower and every decision less reliable.",
  },
  {
    title: "Poor Visibility",
    impact:
      "Leadership cannot see constraints early enough to intervene, forecast capacity, or protect delivery quality.",
  },
  {
    title: "Reporting Bottlenecks",
    impact:
      "Teams spend days producing static updates that are already stale by the time they reach decision makers.",
  },
  {
    title: "Duplicate Work",
    impact:
      "The same data is entered, checked, moved, and reconciled repeatedly across functions and systems.",
  },
  {
    title: "Operational Risk",
    impact:
      "Undocumented workflows, fragile access patterns, and informal approvals create avoidable exposure.",
  },
  {
    title: "Scaling Challenges",
    impact:
      "Processes that worked at one stage begin to fracture as volume, headcount, and complexity increase.",
  },
] as const;

export const SENTIENT_METHOD = [
  {
    title: "Observe",
    description:
      "Map how work actually moves through teams, systems, approvals, data, exceptions, and decisions.",
  },
  {
    title: "Diagnose",
    description:
      "Identify constraints, duplicated effort, hidden risk, unclear ownership, and the systems creating friction.",
  },
  {
    title: "Quantify",
    description:
      "Translate operational friction into cost, time, risk, revenue delay, quality impact, and leadership visibility.",
  },
  {
    title: "Engineer",
    description:
      "Design workflows, controls, automations, integrations, reporting, and platforms around measurable outcomes.",
  },
  {
    title: "Implement",
    description:
      "Deploy improvements in focused increments with adoption support, documentation, and operational continuity.",
  },
  {
    title: "Optimize",
    description:
      "Install metrics, feedback loops, and continuous improvement rhythms so operations keep compounding.",
  },
] as const;

export const SERVICES = [
  {
    title: "Reduce Operational Costs",
    description:
      "Identify inefficiencies and implement technology solutions that lower operating expenses.",
    image: "/images/workflow-map.png",
  },
  {
    title: "Increase Operational Efficiency",
    description:
      "Streamline workflows and optimize business processes for maximum productivity.",
    image: "/images/workflow-map.png",
  },
  {
    title: "Automate Business Processes",
    description:
      "Replace manual work with intelligent automation that scales with your business.",
    image: "/images/model.png",
  },
  {
    title: "Build Custom Business Systems",
    description:
      "Design and develop platforms tailored to your operations and workflows.",
    image: "/images/software.png",
  },
  {
    title: "Unlock Business Intelligence",
    description:
      "Turn operational data into actionable insights and performance metrics.",
    image: "/images/business.jpg",
  },
  {
    title: "Apply AI Where It Matters",
    description:
      "Deploy practical AI solutions that solve real business challenges.",
    image: "/images/model.png",
  },
  {
    title: "Modernize & Scale Operations",
    description:
      "Build secure, scalable technology foundations for long-term growth.",
    image: "/images/dashboard.jpg",
  },
] as const;

export const OUTCOMES = [
  { metric: "Lower", label: "Operating Costs", detail: "Through waste elimination and resource optimization" },
  { metric: "Faster", label: "Execution Cycles", detail: "Compressed approval, handoff, and delivery timelines" },
  { metric: "Higher", label: "Revenue Throughput", detail: "Removing bottlenecks that constrain capacity" },
  { metric: "Better", label: "Operational Visibility", detail: "Real-time insight into performance and constraints" },
  { metric: "Reduced", label: "Business Risk", detail: "Eliminating single points of failure and undocumented dependencies" },
  { metric: "More", label: "Predictable Outcomes", detail: "Consistent delivery through repeatable, measured processes" },
] as const;

export const INDUSTRIES = [
  "Construction",
  "Logistics",
  "Professional Services",
  "Manufacturing",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Energy",
  "SMEs",
] as const;

export const CASE_STUDIES = [
  {
    title: "Reporting Operating Model",
    metric: "Faster",
    result: "leadership reporting cycles",
    description:
      "Fragmented spreadsheet reporting is redesigned into governed data pipelines, metric definitions, and executive dashboards.",
  },
  {
    title: "Approval Flow Redesign",
    metric: "Clearer",
    result: "decision ownership",
    description:
      "Multi-stage approvals are converted into measured workflows with routing, escalation logic, and accountability controls.",
  },
  {
    title: "Operations Platform Architecture",
    metric: "Connected",
    result: "systems and data flows",
    description:
      "Disconnected tools are connected through integrations, operational data models, automation, and visibility layers.",
  },
] as const;

export const ARTICLES = [
  {
    title: "The Hidden Cost of Operational Friction",
    description:
      "Why bottlenecks, queues, and exception handling quietly drain margin long before they show up in financial reports.",
    date: "2026-01-15",
    slug: "hidden-cost-operational-friction",
  },
  {
    title: "Automation Is Not an Operations Strategy",
    description:
      "Automating broken work only makes broken work move faster. The operating model has to come first.",
    date: "2026-02-04",
    slug: "automation-is-not-an-operations-strategy",
  },
  {
    title: "What Leaders Should Measure Before They Scale",
    description:
      "The operating metrics that reveal capacity, accountability, risk, and throughput before growth exposes the gaps.",
    date: "2026-03-12",
    slug: "what-leaders-should-measure-before-they-scale",
  },
] as const;

export const FAQS = [
  {
    q: "What is operations engineering?",
    a: "Operations engineering is the practice of analyzing how an organization works, identifying inefficiencies, and designing systems that improve performance. It combines process design, automation, reporting, software, infrastructure, controls, and change implementation.",
  },
  {
    q: "How are you different from a software agency?",
    a: "A software agency usually starts with a build request. Sentient Engineering starts with the operating problem: where work slows down, where cost leaks, where visibility is missing, and where risk accumulates. Technology is used only where it improves operational performance.",
  },
  {
    q: "What is included in an Operations Audit?",
    a: "An Operations Audit maps workflows, interviews stakeholders, reviews systems and data flows, identifies constraints, quantifies business impact, and produces a prioritized roadmap for measurable improvement.",
  },
  {
    q: "Do you implement the solutions you recommend?",
    a: "Yes. We can design and implement workflow changes, automations, integrations, dashboards, infrastructure improvements, and custom operational platforms when those are the right tools for the operating model.",
  },
  {
    q: "Who do you work with?",
    a: "We work with growing SMEs and mid-market organizations across operationally complex industries, especially teams that have outgrown manual coordination and need better systems for scale.",
  },
  {
    q: "How is success measured?",
    a: "Every engagement is tied to measurable operating outcomes such as cost reduction, hours recovered, faster cycle times, fewer errors, improved visibility, reduced risk, and better accountability.",
  },
] as const;
