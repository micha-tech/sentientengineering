import { FUNCTION_MAP } from "@/lib/assessment-data";
import type { AnswerMap, AssessmentResult, FunctionId, MaturityLevel } from "@/types/assessment";

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, Math.round(value)));

const maturityDescriptions: Record<MaturityLevel["name"], string> = {
  "Manual / Reactive": "Work depends heavily on messages, spreadsheets, memory, and individual effort.",
  "Digitized but Disconnected": "Useful tools exist, but data and workflows remain fragmented across the function.",
  Structured: "Processes have owners and structure, although reporting and handoffs still require manual work.",
  Integrated: "Core systems are connected and several workflows, alerts, and approvals are automated.",
  Intelligent: "Automation and AI actively support routing, insight, prediction, and real-time decision-making.",
};

function getMaturity(score: number): MaturityLevel {
  const level = (score < 20 ? 1 : score < 40 ? 2 : score < 60 ? 3 : score < 80 ? 4 : 5) as MaturityLevel["level"];
  const names: MaturityLevel["name"][] = ["Manual / Reactive", "Digitized but Disconnected", "Structured", "Integrated", "Intelligent"];
  const name = names[level - 1];
  return { level, name, description: maturityDescriptions[name] };
}

const riskLevel = (score: number): AssessmentResult["riskLevel"] => score >= 80 ? "Critical" : score >= 60 ? "High" : score >= 35 ? "Moderate" : "Low";
const opportunityLevel = (score: number): AssessmentResult["opportunityLevel"] => score >= 82 ? "Very High" : score >= 62 ? "High" : score >= 38 ? "Medium" : "Low";
const readinessLevel = (score: number): AssessmentResult["readinessLevel"] => score < 25 ? "Not Ready" : score < 43 ? "Early Stage" : score < 63 ? "Ready with Process Cleanup" : score < 82 ? "Implementation Ready" : "Optimization Ready";

export function questionId(functionId: FunctionId, index: number) {
  return `${functionId}-q-${index + 1}`;
}

export function calculateAssessment(functionId: FunctionId, answers: AnswerMap): AssessmentResult {
  const config = FUNCTION_MAP[functionId];
  const values = config.questions.map((_, index) => answers[questionId(functionId, index)] ?? 0);
  const average = values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
  const strength = (average / 5) * 100;

  const dimensionScores = Object.fromEntries(config.dimensions.map((dimension, dimensionIndex) => {
    const relevant = values.filter((_, questionIndex) => questionIndex % config.dimensions.length === dimensionIndex);
    const score = relevant.length ? relevant.reduce((sum, value) => sum + value, 0) / relevant.length : average;
    return [dimension, clamp((score / 5) * 100)];
  }));

  const visibilityDimensions = config.dimensions.filter((dimension) => /visibility|report|tracking|monitor|analytics|forecast/i.test(dimension));
  const visibilityValues = visibilityDimensions.map((dimension) => dimensionScores[dimension]);
  const visibilityScore = visibilityValues.length ? clamp(visibilityValues.reduce((sum, value) => sum + value, 0) / visibilityValues.length) : clamp(strength * 0.88);

  const weakDimensions = Object.entries(dimensionScores).sort((a, b) => a[1] - b[1]);
  const opportunityScore = clamp(46 + (100 - strength) * 0.58, 15, 96);
  const readinessScore = clamp(18 + strength * 0.78, 12, 94);
  const impactScore = clamp(54 + (100 - strength) * 0.38, 35, 96);
  const riskScore = clamp(15 + (100 - strength) * 0.76, 10, 96);
  const maturity = getMaturity(strength);

  const bottlenecks = weakDimensions.slice(0, 3).map(([dimension, score]) =>
    `${dimension} is operating at ${score}% maturity, creating avoidable manual effort, delay, or control exposure.`,
  );
  const opportunities = weakDimensions.slice(0, 3).map(([dimension], index) =>
    `${config.opportunities[index % config.opportunities.length]} to strengthen ${dimension.toLowerCase()}.`,
  );

  const oppLevel = opportunityLevel(opportunityScore);
  const readyLevel = readinessLevel(readinessScore);
  return {
    functionId,
    opportunityScore,
    readinessScore,
    impactScore,
    riskScore,
    visibilityScore,
    dimensionScores,
    maturity,
    riskLevel: riskLevel(riskScore),
    opportunityLevel: oppLevel,
    readinessLevel: readyLevel,
    bottlenecks,
    opportunities,
    impactAreas: config.impactAreas,
    systems: config.systems,
    executiveSummary: `Based on your responses, ${config.name} shows ${oppLevel.toLowerCase()} automation opportunity and ${readyLevel.toLowerCase()} readiness. The highest-value improvement areas are ${weakDimensions.slice(0, 3).map(([name]) => name.toLowerCase()).join(", ")}.`,
  };
}

export const SAMPLE_ANSWERS: AnswerMap = Object.fromEntries(
  FUNCTION_MAP.sales.questions.map((_, index) => [questionId("sales", index), [2, 2, 3, 2, 3, 1, 2, 1, 1, 2, 2, 2, 3, 2, 4][index]]),
);

export const SAMPLE_RESULT = calculateAssessment("sales", SAMPLE_ANSWERS);
