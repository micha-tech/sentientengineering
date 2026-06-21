import { PILLARS, QUESTIONS, type PillarId } from "./diagnostic-data";

export type AnswerMap = Record<string, number>;

export type DiagnosticResult = {
  overall: number;
  pillarScores: Record<PillarId, number>;
  maturity: "Reactive" | "Developing" | "Structured" | "Scalable" | "Intelligent";
  risk: "Low" | "Moderate" | "High" | "Critical";
  opportunity: "Low" | "Medium" | "High" | "Very High";
  automationScore: number;
  bottlenecks: string[];
  opportunities: string[];
  impacts: string[];
};

const getMaturity = (score: number): DiagnosticResult["maturity"] => {
  if (score < 25) return "Reactive";
  if (score < 45) return "Developing";
  if (score < 65) return "Structured";
  if (score < 82) return "Scalable";
  return "Intelligent";
};

const getRisk = (score: number): DiagnosticResult["risk"] => {
  if (score < 30) return "Critical";
  if (score < 50) return "High";
  if (score < 72) return "Moderate";
  return "Low";
};

const getOpportunity = (score: number): DiagnosticResult["opportunity"] => {
  if (score < 35) return "Very High";
  if (score < 58) return "High";
  if (score < 78) return "Medium";
  return "Low";
};

export function calculateResult(answers: AnswerMap): DiagnosticResult {
  const pillarScores = Object.fromEntries(
    PILLARS.map((pillar) => {
      const questions = QUESTIONS.filter((question) => question.pillar === pillar.id);
      const total = questions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0);
      return [pillar.id, Math.round((total / (questions.length * 4)) * 100)];
    }),
  ) as Record<PillarId, number>;

  const overall = Math.round(
    PILLARS.reduce((sum, pillar) => sum + pillarScores[pillar.id] * pillar.weight, 0),
  );

  const ranked = [...QUESTIONS].sort(
    (a, b) => (answers[a.id] ?? 0) - (answers[b.id] ?? 0),
  );

  const unique = (values: string[]) => [...new Set(values)];
  const weakest = ranked.slice(0, 8);

  return {
    overall,
    pillarScores,
    maturity: getMaturity(overall),
    risk: getRisk(overall),
    opportunity: getOpportunity(overall),
    automationScore: Math.min(96, Math.max(12, Math.round(100 - pillarScores.operations * 0.55 - pillarScores.visibility * 0.2))),
    bottlenecks: unique(weakest.map((question) => question.bottleneck)).slice(0, 3),
    opportunities: unique(weakest.map((question) => question.opportunity)).slice(0, 3),
    impacts: unique(weakest.map((question) => question.impact)).slice(0, 5),
  };
}

export const SAMPLE_ANSWERS: AnswerMap = {
  "sales-capture": 1,
  "sales-response": 1,
  "sales-pipeline": 2,
  "sales-followup": 1,
  "sales-forecast": 1,
  "marketing-attribution": 1,
  "marketing-nurture": 1,
  "marketing-economics": 0,
  "marketing-handoff": 1,
  "marketing-automation": 1,
  "support-intake": 1,
  "support-response": 1,
  "support-knowledge": 2,
  "support-ownership": 1,
  "support-insight": 1,
  "operations-manual": 1,
  "operations-handoffs": 1,
  "operations-approvals": 1,
  "operations-integration": 0,
  "operations-measurement": 1,
  "visibility-dashboard": 0,
  "visibility-reporting": 1,
  "visibility-kpis": 2,
  "visibility-alerts": 0,
  "visibility-decisions": 1,
};

export const SAMPLE_RESULT = calculateResult(SAMPLE_ANSWERS);
