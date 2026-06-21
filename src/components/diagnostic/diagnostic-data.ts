export type PillarId = "sales" | "marketing" | "support" | "operations" | "visibility";

export type AnswerOption = {
  label: string;
  detail: string;
  value: number;
};

export type DiagnosticQuestion = {
  id: string;
  pillar: PillarId;
  prompt: string;
  guidance: string;
  bottleneck: string;
  opportunity: string;
  impact: string;
  options: AnswerOption[];
};

export const PILLARS: Array<{
  id: PillarId;
  name: string;
  shortName: string;
  description: string;
  weight: number;
}> = [
  {
    id: "sales",
    name: "Sales Performance",
    shortName: "Sales",
    description: "Lead capture, response discipline, pipeline control, and revenue visibility.",
    weight: 0.23,
  },
  {
    id: "marketing",
    name: "Lead Generation & Marketing",
    shortName: "Marketing",
    description: "Attribution, nurturing, acquisition economics, and campaign follow-through.",
    weight: 0.18,
  },
  {
    id: "support",
    name: "Customer Support & Engagement",
    shortName: "Support",
    description: "Response speed, service consistency, issue ownership, and customer insight.",
    weight: 0.17,
  },
  {
    id: "operations",
    name: "Workflow Efficiency",
    shortName: "Operations",
    description: "Manual workload, handoffs, approvals, integration, and throughput.",
    weight: 0.24,
  },
  {
    id: "visibility",
    name: "Executive Visibility",
    shortName: "Visibility",
    description: "Decision-grade reporting, KPI ownership, alerts, and operational control.",
    weight: 0.18,
  },
];

const maturityOptions: AnswerOption[] = [
  { label: "Ad hoc", detail: "Mostly manual, inconsistent, or dependent on individual effort.", value: 0 },
  { label: "Partly defined", detail: "A basic process exists, but execution varies.", value: 1 },
  { label: "Structured", detail: "The process is documented and usually followed.", value: 2 },
  { label: "Systemized", detail: "Tools, ownership, and measurement are connected.", value: 3 },
  { label: "Optimized", detail: "The process is automated, measured, and continuously improved.", value: 4 },
];

export const QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "sales-capture",
    pillar: "sales",
    prompt: "How consistently are new enquiries captured in one sales system?",
    guidance: "Consider website forms, calls, email, referrals, social channels, and WhatsApp.",
    bottleneck: "Leads are entering through disconnected channels without a reliable system of record.",
    opportunity: "Centralize lead capture and automatically assign every enquiry to an owner.",
    impact: "Lost lead recovery",
    options: maturityOptions,
  },
  {
    id: "sales-response",
    pillar: "sales",
    prompt: "How disciplined is your team’s response to a new sales enquiry?",
    guidance: "Assess response time, ownership, escalation, and whether management can see delays.",
    bottleneck: "Slow or inconsistent lead response is creating avoidable conversion risk.",
    opportunity: "Introduce instant acknowledgement, routing, response SLAs, and escalation alerts.",
    impact: "Faster lead response",
    options: maturityOptions,
  },
  {
    id: "sales-pipeline",
    pillar: "sales",
    prompt: "How structured and current is your sales pipeline?",
    guidance: "A strong pipeline has defined stages, next actions, values, owners, and close dates.",
    bottleneck: "Pipeline activity is not consistently structured around stages and next actions.",
    opportunity: "Implement a CRM pipeline with stage rules, task automation, and deal hygiene controls.",
    impact: "Stronger follow-up discipline",
    options: maturityOptions,
  },
  {
    id: "sales-followup",
    pillar: "sales",
    prompt: "How reliably are prospects followed up after the first conversation?",
    guidance: "Include reminders, proposals, dormant opportunities, and longer buying cycles.",
    bottleneck: "Sales follow-up depends too heavily on memory and individual working habits.",
    opportunity: "Automate follow-up sequences, next-action reminders, and dormant lead recovery.",
    impact: "Reduced opportunity leakage",
    options: maturityOptions,
  },
  {
    id: "sales-forecast",
    pillar: "sales",
    prompt: "Can leadership see live opportunities and expected revenue with confidence?",
    guidance: "Think about forecast accuracy, pipeline coverage, conversion, and stalled deals.",
    bottleneck: "Leadership lacks a dependable, real-time view of opportunity value and sales risk.",
    opportunity: "Create a live revenue dashboard with pipeline coverage and exception reporting.",
    impact: "Improved revenue visibility",
    options: maturityOptions,
  },
  {
    id: "marketing-attribution",
    pillar: "marketing",
    prompt: "How well do you track which channels and campaigns generate qualified leads?",
    guidance: "Consider source tracking from first touch through sale—not just clicks or enquiries.",
    bottleneck: "Lead source and campaign contribution are not reliably connected to revenue.",
    opportunity: "Connect campaign attribution to CRM outcomes and closed revenue.",
    impact: "Better marketing allocation",
    options: maturityOptions,
  },
  {
    id: "marketing-nurture",
    pillar: "marketing",
    prompt: "How consistently are prospects nurtured after their first interaction?",
    guidance: "Include educational sequences, retargeting, event follow-up, and sales handoff.",
    bottleneck: "Prospects who are not immediately ready to buy receive inconsistent nurturing.",
    opportunity: "Build segmented nurture journeys tied to intent and sales readiness.",
    impact: "Higher conversion consistency",
    options: maturityOptions,
  },
  {
    id: "marketing-economics",
    pillar: "marketing",
    prompt: "How confidently can you measure cost per lead and customer acquisition cost?",
    guidance: "Strong measurement includes channel costs, lead quality, conversion, and payback.",
    bottleneck: "Acquisition decisions are being made without dependable unit economics.",
    opportunity: "Create a channel performance model covering spend, quality, conversion, and CAC.",
    impact: "Improved acquisition efficiency",
    options: maturityOptions,
  },
  {
    id: "marketing-handoff",
    pillar: "marketing",
    prompt: "How clearly are marketing-qualified leads handed to sales?",
    guidance: "Assess qualification rules, ownership, response time, feedback, and rejection reasons.",
    bottleneck: "Marketing-to-sales handoffs create delay, ambiguity, or poor lead accountability.",
    opportunity: "Automate qualification, assignment, acceptance, and feedback workflows.",
    impact: "Faster sales cycle",
    options: maturityOptions,
  },
  {
    id: "marketing-automation",
    pillar: "marketing",
    prompt: "How automated are recurring campaign and follow-up activities?",
    guidance: "Consider segmentation, triggers, reminders, reporting, and sales notifications.",
    bottleneck: "Manual campaign execution is slowing response and limiting consistent follow-through.",
    opportunity: "Automate campaign triggers, list movement, follow-up, and performance reporting.",
    impact: "Manual workload reduction",
    options: maturityOptions,
  },
  {
    id: "support-intake",
    pillar: "support",
    prompt: "How well are customer conversations unified across channels?",
    guidance: "Include email, phone, web, social channels, messaging apps, and walk-ins.",
    bottleneck: "Customer conversations are scattered across channels with weak case visibility.",
    opportunity: "Create a shared support workspace with unified customer history and ownership.",
    impact: "Better customer engagement",
    options: maturityOptions,
  },
  {
    id: "support-response",
    pillar: "support",
    prompt: "How consistently do you meet a defined customer response target?",
    guidance: "Consider acknowledgement time, resolution time, escalation, and out-of-hours coverage.",
    bottleneck: "Customer response performance is inconsistent or not actively controlled.",
    opportunity: "Introduce service targets, priority routing, alerts, and response dashboards.",
    impact: "Improved customer response",
    options: maturityOptions,
  },
  {
    id: "support-knowledge",
    pillar: "support",
    prompt: "How efficiently are common customer questions resolved?",
    guidance: "Assess repeat enquiries, approved answers, self-service, and agent assistance.",
    bottleneck: "Teams repeatedly answer common enquiries manually without reusable knowledge.",
    opportunity: "Build a governed knowledge base with AI-assisted response drafting.",
    impact: "Faster issue resolution",
    options: maturityOptions,
  },
  {
    id: "support-ownership",
    pillar: "support",
    prompt: "How visible are unresolved issues, repeat complaints, and case ownership?",
    guidance: "Strong control includes status, owner, age, priority, history, and escalation.",
    bottleneck: "Open issues and repeat complaints are difficult to track across the business.",
    opportunity: "Implement ticket ownership, ageing controls, escalation, and trend analysis.",
    impact: "Reduced customer leakage",
    options: maturityOptions,
  },
  {
    id: "support-insight",
    pillar: "support",
    prompt: "How effectively is customer feedback used to improve operations?",
    guidance: "Consider root causes, recurring issues, product/service fixes, and leadership reporting.",
    bottleneck: "Customer feedback is not systematically translated into operational improvement.",
    opportunity: "Create closed-loop feedback reporting linked to owners and corrective actions.",
    impact: "Service quality improvement",
    options: maturityOptions,
  },
  {
    id: "operations-manual",
    pillar: "operations",
    prompt: "How much core work still depends on spreadsheets, messages, paper, or repeated entry?",
    guidance: "Focus on high-volume work that directly affects customers, cash, or delivery.",
    bottleneck: "Critical workflows rely on manual coordination and repeated administrative effort.",
    opportunity: "Digitize high-volume workflows with structured forms, rules, and automated updates.",
    impact: "Manual workload reduction",
    options: maturityOptions,
  },
  {
    id: "operations-handoffs",
    pillar: "operations",
    prompt: "How reliably does work move between people and departments?",
    guidance: "Assess missing information, rework, queues, unclear ownership, and status chasing.",
    bottleneck: "Handoffs create delays because ownership, information, or next steps are unclear.",
    opportunity: "Engineer workflow handoffs with required data, ownership, SLAs, and notifications.",
    impact: "Reduced process delays",
    options: maturityOptions,
  },
  {
    id: "operations-approvals",
    pillar: "operations",
    prompt: "How efficient and traceable are business approvals?",
    guidance: "Include purchasing, discounts, expenses, hiring, contracts, and exceptions.",
    bottleneck: "Approvals are creating avoidable queues and limited audit visibility.",
    opportunity: "Automate approval routing, delegation, reminders, and decision records.",
    impact: "Faster approvals",
    options: maturityOptions,
  },
  {
    id: "operations-integration",
    pillar: "operations",
    prompt: "How connected are the systems used by different departments?",
    guidance: "Consider duplicated records, manual exports, inconsistent data, and re-keying.",
    bottleneck: "Disconnected systems are creating duplicate work and inconsistent business data.",
    opportunity: "Integrate core systems around shared records and event-driven data flows.",
    impact: "Higher throughput",
    options: maturityOptions,
  },
  {
    id: "operations-measurement",
    pillar: "operations",
    prompt: "How consistently do you measure cycle time, backlog, rework, and throughput?",
    guidance: "Strong operations use trend data and thresholds to drive improvement.",
    bottleneck: "Operational performance is managed without consistent flow and quality metrics.",
    opportunity: "Instrument workflows and establish practical throughput and quality controls.",
    impact: "Stronger operational control",
    options: maturityOptions,
  },
  {
    id: "visibility-dashboard",
    pillar: "visibility",
    prompt: "Can leadership see sales, service, finance, and operations in one decision view?",
    guidance: "The view should surface priorities, exceptions, risk, and trends—not just totals.",
    bottleneck: "Leadership lacks one dependable view of cross-functional business performance.",
    opportunity: "Create an executive command center with role-based operational scorecards.",
    impact: "Better executive visibility",
    options: maturityOptions,
  },
  {
    id: "visibility-reporting",
    pillar: "visibility",
    prompt: "How automated and timely is management reporting?",
    guidance: "Consider data collection, reconciliation, commentary, distribution, and delays.",
    bottleneck: "Manual report preparation consumes time and delays management insight.",
    opportunity: "Automate data consolidation, KPI calculation, and scheduled reporting.",
    impact: "Faster management decisions",
    options: maturityOptions,
  },
  {
    id: "visibility-kpis",
    pillar: "visibility",
    prompt: "How clearly are operational KPIs defined and owned?",
    guidance: "A useful KPI has a definition, target, owner, frequency, and response threshold.",
    bottleneck: "Key operating measures lack consistent definitions, targets, or accountable owners.",
    opportunity: "Establish a KPI operating model with targets, ownership, and review cadence.",
    impact: "Clearer accountability",
    options: maturityOptions,
  },
  {
    id: "visibility-alerts",
    pillar: "visibility",
    prompt: "How quickly are leaders alerted when performance moves outside acceptable limits?",
    guidance: "Consider stalled sales, service backlog, cash risk, delivery delay, and exceptions.",
    bottleneck: "Material exceptions are discovered after they have already affected revenue or customers.",
    opportunity: "Introduce threshold alerts and exception workflows for critical performance signals.",
    impact: "Earlier risk intervention",
    options: maturityOptions,
  },
  {
    id: "visibility-decisions",
    pillar: "visibility",
    prompt: "How confidently can leadership trace decisions back to current, reliable data?",
    guidance: "Assess data consistency, drill-down, history, and trust in reported numbers.",
    bottleneck: "Decision-making is slowed by inconsistent data and limited confidence in reports.",
    opportunity: "Create governed data definitions and traceable operational reporting.",
    impact: "Higher decision confidence",
    options: maturityOptions,
  },
];

export const DEPARTMENTS = {
  Sales: {
    statement: "Move every opportunity through a visible, disciplined revenue process.",
    before: ["Leads across inboxes and phones", "Follow-up depends on memory", "Unclear pipeline value", "Lost or dormant opportunities"],
    after: ["Unified lead capture", "Automated follow-up and alerts", "Live pipeline and forecast", "Clear next-action ownership"],
    metric: "Revenue visibility",
  },
  Marketing: {
    statement: "Connect campaign activity to lead quality, sales action, and revenue.",
    before: ["Weak source attribution", "Manual campaign follow-up", "Disconnected audience lists", "Unclear acquisition economics"],
    after: ["Campaign-to-revenue attribution", "Triggered nurture journeys", "CRM-connected audiences", "CAC and conversion reporting"],
    metric: "Acquisition efficiency",
  },
  "Customer Support": {
    statement: "Give every customer issue an owner, service target, and visible outcome.",
    before: ["Scattered customer messages", "Inconsistent response times", "Repeated manual answers", "Limited issue visibility"],
    after: ["Unified customer workspace", "SLA routing and escalation", "AI-assisted response drafting", "Live service dashboard"],
    metric: "Customer response",
  },
  HR: {
    statement: "Reduce administrative friction across hiring, onboarding, and employee service.",
    before: ["Email-based approvals", "Manual onboarding checklists", "Repeated document chasing", "Scattered employee records"],
    after: ["Structured approval workflows", "Automated onboarding journeys", "Self-service requests", "Central employee operations view"],
    metric: "Team productivity",
  },
  Finance: {
    statement: "Improve cash visibility and control without adding reporting workload.",
    before: ["Manual invoice follow-up", "Delayed reconciliations", "Spreadsheet reporting", "Late visibility into cash risk"],
    after: ["Automated collection reminders", "Connected transaction data", "Live cash dashboards", "Exception and ageing alerts"],
    metric: "Cash control",
  },
  Operations: {
    statement: "Engineer work to move faster with less chasing, rework, and ambiguity.",
    before: ["Manual handoffs", "Approval bottlenecks", "Duplicate data entry", "Status hidden across teams"],
    after: ["Orchestrated workflows", "Automated approvals", "Connected systems", "Real-time throughput view"],
    metric: "Operational throughput",
  },
} as const;

export type DepartmentName = keyof typeof DEPARTMENTS;
