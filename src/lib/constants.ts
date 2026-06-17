export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Engineering Better Business Operations",
  description:
    "Sentient Engineering is an Operations Engineering company. We improve business operations using process improvement, automation, AI, custom software, and data analytics as tools for measurable business performance.",
  email: "hello@sentientengineering.com",
  url: "https://sentientengineering.com",
} as const;

export const META = {
  title:
    "Sentient Engineering | Operations Engineering for Better Business Performance",
  description:
    "Sentient Engineering helps businesses in Nigeria, Africa, and beyond improve operations, cash flow, efficiency, productivity, visibility, and measurable business performance.",
  siteName: "Sentient Engineering",
  url: COMPANY.url,
  locale: "en_US",
  twitterHandle: "@sentienteng",
} as const;

export const NAV_LINKS = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Method", href: "#method" },
  { label: "Tools", href: "#tools" },
  { label: "Metrics", href: "#metrics" },
  { label: "Industries", href: "#industries" },
] as const;

export const PROBLEMS = [
  "Slow approvals",
  "Manual work",
  "Poor visibility",
  "Delayed collections",
  "Rework",
  "Bottlenecks",
  "Disconnected teams",
  "Revenue leakage",
] as const;

export const OUTCOMES = [
  {
    title: "Cash Flow",
    description:
      "Reduce delays in collections, improve working capital, and increase cash availability.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Remove bottlenecks, unnecessary work, and process waste from everyday execution.",
  },
  {
    title: "Productivity",
    description:
      "Help teams do more valuable work with less friction, checking, chasing, and rework.",
  },
  {
    title: "Customer Experience",
    description:
      "Improve response time, service consistency, delivery quality, and follow-through.",
  },
  {
    title: "Visibility",
    description:
      "Give leadership clearer insight into performance, risk, ownership, and execution.",
  },
  {
    title: "Business Performance",
    description:
      "Connect process improvement, automation, and systems work to measurable ROI.",
  },
] as const;

export const SENTIENT_METHOD = [
  {
    title: "Discover",
    description:
      "We identify where time, money, and effort are being lost inside the business.",
  },
  {
    title: "Diagnose",
    description:
      "We map processes, measure performance, and identify bottlenecks, leakage, and weak controls.",
  },
  {
    title: "Design",
    description:
      "We redesign operations around speed, accountability, visibility, control, and value.",
  },
  {
    title: "Build",
    description:
      "We implement practical systems using workflow automation, AI, custom software, and data analytics where needed.",
  },
  {
    title: "Improve",
    description:
      "We measure results, optimize performance, and help operations keep improving after launch.",
  },
] as const;

export const TOOLS = [
  "AI for business operations",
  "Workflow automation",
  "Custom software development",
  "Business systems",
  "Data analytics",
  "Operational dashboards",
  "Process optimization",
  "Systems integration",
  "Business intelligence",
  "Operational intelligence",
] as const;

export const METRICS = [
  "Days Sales Outstanding",
  "Cash Conversion Cycle",
  "Lead Time",
  "Cycle Time",
  "Rework Rate",
  "Customer Response Time",
  "Operating Cost",
  "Revenue Leakage",
  "Productivity",
  "Working Capital",
  "Cash Availability",
  "Process Efficiency",
] as const;

export const INDUSTRIES = [
  "SMEs",
  "Retail and Distribution",
  "Logistics",
  "Professional Services",
  "Construction",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Real Estate",
  "Field Service Businesses",
  "Finance and Accounting Teams",
] as const;

export const PROOF_POINTS = [
  "We start with how the business actually works, not with a preferred tool.",
  "We diagnose waste, leakage, delay, visibility gaps, and weak execution controls.",
  "We build practical operating systems that leaders and teams can use every day.",
  "We measure improvement through cash flow, speed, productivity, quality, and control.",
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
    q: "What is Operations Engineering?",
    a: "Operations Engineering is the discipline of diagnosing, designing, building, measuring, and improving how a business operates. It combines process improvement, business systems, workflow automation, AI, data analytics, and operational controls to improve business performance.",
  },
  {
    q: "How are you different from a software agency?",
    a: "A software agency usually starts with a build request. Sentient Engineering starts with the operating problem: where money leaks, where work slows down, where visibility is missing, and where execution breaks. Technology is used only where it improves operations.",
  },
  {
    q: "What is included in an Operations Audit?",
    a: "An Operations Audit reviews workflows, systems, data, performance metrics, team handoffs, bottlenecks, cash flow constraints, reporting gaps, and improvement opportunities. The output is a prioritized operations improvement roadmap.",
  },
  {
    q: "Do you implement the improvements?",
    a: "Yes. We diagnose and design the operating model, then implement the practical systems, automations, dashboards, integrations, workflows, and controls needed to improve performance.",
  },
  {
    q: "Who is this for?",
    a: "We work with business owners, CEOs, founders, COOs, CFOs, executive teams, growth-focused SMEs, and mid-sized organizations that need stronger operational control, better cash visibility, faster execution, and measurable ROI.",
  },
  {
    q: "How is success measured?",
    a: "Success is measured through operating metrics such as Days Sales Outstanding, cash conversion cycle, lead time, cycle time, customer response time, rework rate, operating cost, productivity, revenue leakage, and process efficiency.",
  },
] as const;
