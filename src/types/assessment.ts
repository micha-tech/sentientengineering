export type FunctionId =
  | "sales"
  | "finance"
  | "hr"
  | "marketing"
  | "support"
  | "supply-chain"
  | "it";

export type AssessmentFunction = {
  id: FunctionId;
  name: string;
  shortName: string;
  description: string;
  coreQuestion: string;
  dimensions: string[];
  questions: string[];
  kpis: string[];
  opportunities: string[];
  impactAreas: string[];
  systems: string[];
  icon: "sales" | "coins" | "people" | "target" | "headset" | "workflow" | "code";
};

export type IntakeData = {
  company: string;
  industry: string;
  size: string;
  revenue: string;
  role: string;
  functionId: FunctionId | "";
  challenge: string;
  otherChallenge: string;
};

export type LeadData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  functionId: FunctionId | "";
  size: string;
  challenge: string;
  preferredTime: string;
};

export type AnswerMap = Record<string, number>;

export type MaturityLevel = {
  level: 1 | 2 | 3 | 4 | 5;
  name: "Manual / Reactive" | "Digitized but Disconnected" | "Structured" | "Integrated" | "Intelligent";
  description: string;
};

export type AssessmentResult = {
  functionId: FunctionId;
  opportunityScore: number;
  readinessScore: number;
  impactScore: number;
  riskScore: number;
  visibilityScore: number;
  dimensionScores: Record<string, number>;
  maturity: MaturityLevel;
  riskLevel: "Low" | "Moderate" | "High" | "Critical";
  opportunityLevel: "Low" | "Medium" | "High" | "Very High";
  readinessLevel: "Not Ready" | "Early Stage" | "Ready with Process Cleanup" | "Implementation Ready" | "Optimization Ready";
  bottlenecks: string[];
  opportunities: string[];
  impactAreas: string[];
  systems: string[];
  executiveSummary: string;
};

