export const COMPANY = {
  name: "Sentient Engineering",
  tagline: "Engineering Better Operations",
  description:
    "We help organizations identify operational inefficiencies, quantify their business impact, and engineer intelligent systems that improve efficiency, reduce costs, increase visibility, reduce risk, and support growth.",
  email: "hello@sentientengineering.com",
  phone: "+1 (555) 000-0000",
  address: "London, United Kingdom",
} as const;

export const NAV_LINKS = [
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const PAIN_POINTS = [
  {
    title: "Manual Processes",
    impact:
      "Manual data entry and repetitive tasks consume valuable staff hours, increase error rates, and limit organizational capacity to scale.",
  },
  {
    title: "Approval Delays",
    impact:
      "Slow approval workflows increase project delivery times, frustrate teams, and reduce organizational agility in responding to market changes.",
  },
  {
    title: "Data Silos",
    impact:
      "Fragmented systems prevent teams from accessing a single source of truth, leading to inconsistent reporting and poor decision-making.",
  },
  {
    title: "Reporting Bottlenecks",
    impact:
      "Leadership teams wait days or weeks for critical reports, making it impossible to respond quickly to operational issues.",
  },
  {
    title: "Duplicate Work",
    impact:
      "Without coordinated systems, teams unknowingly duplicate efforts, wasting resources and reducing overall organizational productivity.",
  },
  {
    title: "Poor Visibility",
    impact:
      "Limited operational visibility means leaders cannot identify problems early, measure performance accurately, or plan effectively.",
  },
  {
    title: "Operational Risk",
    impact:
      "Undocumented processes and manual handoffs create single points of failure that expose the business to significant operational risk.",
  },
  {
    title: "Scaling Challenges",
    impact:
      "Processes that worked for a small team break under growth, creating chaos, customer dissatisfaction, and missed revenue opportunities.",
  },
] as const;

export const SENTIENT_METHOD = [
  {
    step: 1,
    title: "Observe",
    description:
      "We immerse ourselves in your workflows, systems, and decision paths. Through stakeholder interviews, process mapping, and data analysis, we build a comprehensive understanding of how your organization operates.",
  },
  {
    step: 2,
    title: "Diagnose",
    description:
      "We identify bottlenecks, inefficiencies, redundant efforts, and hidden risks in your current operations. Every finding is mapped to specific business processes and validated with data.",
  },
  {
    step: 3,
    title: "Quantify",
    description:
      "We measure the real business impact of each inefficiency — in time lost, cost incurred, revenue delayed, and risk accumulated. This creates a clear ROI case for every recommended change.",
  },
  {
    step: 4,
    title: "Engineer",
    description:
      "We design intelligent systems, automated workflows, and operational improvements tailored to your business. Technology is selected to serve the process, not the other way around.",
  },
  {
    step: 5,
    title: "Implement",
    description:
      "We deploy solutions using the right mix of technology, automation, reporting, and process redesign. Implementation is structured, measured, and designed for minimal business disruption.",
  },
  {
    step: 6,
    title: "Optimize",
    description:
      "We establish metrics, monitoring, and continuous improvement cycles. Operations evolve as your business grows, ensuring lasting performance gains — not one-time fixes.",
  },
] as const;

export const SERVICES = [
  {
    title: "Operational Excellence Audits",
    problem:
      "You suspect inefficiencies exist but cannot quantify their impact or prioritize improvements.",
    approach:
      "We conduct a comprehensive audit of your operations, identifying bottlenecks, cost leakage, and improvement opportunities with measurable business cases.",
    outcome:
      "A prioritized roadmap of operational improvements with clear ROI projections for each initiative.",
  },
  {
    title: "Workflow & Process Optimization",
    problem:
      "Your teams follow inconsistent processes, creating variability in quality, timing, and cost.",
    approach:
      "We map current workflows, identify friction points, and redesign processes for consistency, speed, and reliability.",
    outcome:
      "Standardized, documented workflows that reduce cycle times, improve quality, and scale with your business.",
  },
  {
    title: "Business Systems Engineering",
    problem:
      "Your tools and systems are disconnected, requiring manual effort to move data between them.",
    approach:
      "We design and implement integrated systems architectures that connect your tools, automate data flow, and create a single source of truth.",
    outcome:
      "Connected systems that eliminate duplicate data entry and provide real-time operational visibility.",
  },
  {
    title: "Automation & Intelligent Operations",
    problem:
      "Repetitive manual tasks consume team capacity and create bottlenecks in critical workflows.",
    approach:
      "We identify high-impact automation opportunities and implement intelligent workflows using the most appropriate technology for each use case.",
    outcome:
      "Reduced manual effort, faster turnaround times, and teams focused on high-value work instead of repetitive tasks.",
  },
  {
    title: "Operational Visibility & Reporting",
    problem:
      "Leadership lacks the real-time data needed to make informed operational decisions.",
    approach:
      "We build dashboards, reporting systems, and alerting mechanisms that provide actionable insights into every aspect of your operations.",
    outcome:
      "Leadership teams with real-time visibility into performance metrics, enabling proactive decision-making.",
  },
  {
    title: "Cloud & Infrastructure Modernization",
    problem:
      "Legacy infrastructure limits scalability, increases costs, and creates security vulnerabilities.",
    approach:
      "We assess your current infrastructure, design cloud-native architectures, and implement migration strategies aligned with operational needs.",
    outcome:
      "Scalable, cost-efficient infrastructure that supports growth while reducing technical debt and operational risk.",
  },
  {
    title: "Cost Optimization & Technology Efficiency",
    problem:
      "Technology spending is growing faster than revenue, and you cannot identify where costs are wasted.",
    approach:
      "We audit your technology stack, usage patterns, and vendor relationships to identify savings opportunities without sacrificing capability.",
    outcome:
      "Reduced technology costs with a clear understanding of what each tool delivers in business value.",
  },
  {
    title: "Custom Operational Platforms",
    problem:
      "Off-the-shelf software cannot address your unique operational requirements or competitive advantage.",
    approach:
      "We design and build custom operational platforms — from internal tools to customer-facing systems — engineered for your specific business needs.",
    outcome:
      "Purpose-built platforms that give you a genuine operational advantage in your market.",
  },
] as const;

export const INDUSTRIES = [
  { name: "Construction", icon: "🏗️" },
  { name: "Logistics", icon: "🚚" },
  { name: "Professional Services", icon: "📋" },
  { name: "Manufacturing", icon: "⚙️" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "📊" },
  { name: "Education", icon: "🎓" },
  { name: "Retail", icon: "🛍️" },
  { name: "Energy", icon: "⚡" },
  { name: "Growing SMEs", icon: "📈" },
] as const;

export const OUTCOMES = [
  { title: "Reduce Operational Costs", description: "Identify and eliminate waste across processes, technology, and workflows." },
  { title: "Increase Productivity", description: "Free your teams from manual work and focus them on high-value activities." },
  { title: "Improve Visibility", description: "Real-time operational dashboards that give leadership true insight." },
  { title: "Reduce Risk", description: "Eliminate single points of failure and build resilient operations." },
  { title: "Accelerate Delivery", description: "Faster approvals, streamlined workflows, and reduced cycle times." },
  { title: "Improve Accountability", description: "Clear ownership, documented processes, and measurable performance." },
  { title: "Scale Operations", description: "Systems and processes designed to grow without breaking." },
  { title: "Increase Efficiency", description: "Do more with less — optimized resources, automated workflows, better systems." },
] as const;

export const CASE_STUDIES = [
  {
    title: "Reporting Transformation",
    result: "Reduced reporting effort by 92%",
    description:
      "Replaced a manual reporting process involving 6 departments and 3 spreadsheets with an automated operational dashboard, saving 40 staff hours per week.",
    label: "Illustrative Result",
  },
  {
    title: "Approval Workflow Redesign",
    result: "Cut approval turnaround from 5 days to 12 hours",
    description:
      "Redesigned a multi-stage approval process with automated routing, parallel reviews, and mobile-friendly interfaces, accelerating project delivery.",
    label: "Illustrative Result",
  },
  {
    title: "Automated Employee Onboarding",
    result: "Automated onboarding saving 300 staff hours annually",
    description:
      "Engineered an end-to-end onboarding workflow connecting HR, IT, facilities, and compliance systems, reducing manual effort by 85%.",
    label: "Illustrative Result",
  },
] as const;

export const ARTICLES = [
  {
    title: "Why Most Digital Transformation Projects Fail",
    description:
      "The majority of digital transformation initiatives fail not because of technology, but because organizations skip the critical step of understanding their operations first.",
    date: "2024-01-15",
    slug: "why-digital-transformation-projects-fail",
  },
  {
    title: "The Hidden Cost of Operational Friction",
    description:
      "Every operational bottleneck carries a hidden cost that rarely appears in financial reports. Understanding these costs is the first step to eliminating them.",
    date: "2024-02-01",
    slug: "hidden-cost-operational-friction",
  },
  {
    title: "Automation Without Process Design Is Expensive",
    description:
      "Automating a broken process simply produces broken results faster. Process design must precede any automation initiative.",
    date: "2024-02-15",
    slug: "automation-without-process-design",
  },
  {
    title: "Technology Should Follow Operations",
    description:
      "Too many organizations lead with technology decisions. The most successful operations start with process, then select technology to support it.",
    date: "2024-03-01",
    slug: "technology-should-follow-operations",
  },
] as const;

export const FAQS = [
  {
    q: "What exactly is operations engineering?",
    a: "Operations engineering is the discipline of analyzing business operations, identifying inefficiencies, and engineering systems — combining process design, technology, and automation — to improve performance. Unlike consulting that delivers recommendations, we design and implement measurable solutions.",
  },
  {
    q: "How is Sentient Engineering different from a software agency?",
    a: "A software agency starts with technology. We start with operations. Technology is one of many tools we use to solve operational problems. Our focus is on business outcomes — reduced costs, improved productivity, better visibility — not on delivering code.",
  },
  {
    q: "Do I need to have a clear project scope before contacting you?",
    a: "Not at all. Many of our engagements begin with an Operations Audit, where we help you identify where the real problems are. We'll quantify the impact and help you prioritize before any work begins.",
  },
  {
    q: "What size organizations do you work with?",
    a: "We primarily work with growing SMEs and mid-sized organizations, typically between 20 and 500 employees. These organizations have outgrown their initial processes but are not yet large enough for enterprise-scale consulting firms.",
  },
  {
    q: "How do you measure success?",
    a: "Every engagement begins with baseline metrics. Success is measured by measurable improvements in those metrics — time saved, cost reduced, errors eliminated, throughput increased. We don't deliver opinions; we deliver measurable results.",
  },
  {
    q: "What is an Operations Audit and how does it work?",
    a: "An Operations Audit is a structured analysis of your business operations. We interview stakeholders, map processes, analyze data, and identify inefficiencies with quantified business impact. You receive a prioritized roadmap with clear ROI projections.",
  },
  {
    q: "Do you build software or just recommend changes?",
    a: "Both. When technology is part of the solution, we design and implement the right systems — whether that's automation, integrations, dashboards, or custom platforms. But technology is always driven by operational requirements, not the other way around.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "An Operations Audit typically takes 2-4 weeks. Implementation engagements vary based on scope — from 4 weeks for targeted workflow improvements to 12+ weeks for comprehensive operational transformations.",
  },
  {
    q: "What industries do you serve?",
    a: "We work with organizations across industries including construction, logistics, professional services, manufacturing, healthcare, finance, education, retail, and energy. Our methodology is industry-agnostic, though we develop deep domain expertise in each vertical we serve.",
  },
] as const;

export const META = {
  title:
    "Sentient Engineering | Operations Engineering Company | Engineering Better Operations",
  description:
    "We help organizations identify operational inefficiencies, quantify their impact, and engineer intelligent systems that reduce costs, improve productivity, and accelerate growth. Operations consulting, workflow automation, business systems engineering.",
  siteName: "Sentient Engineering",
  url: "https://sentientengineering.com",
  locale: "en_GB",
  type: "website" as const,
  twitterHandle: "@sentienteng",
} as const;
