import type { Metadata } from "next";
import AutomationAssessment from "@/components/assessment/AutomationAssessment";

export const metadata: Metadata = {
  title: "Automation Opportunity Assessment",
  description:
    "Identify the highest-value automation opportunities across sales, finance, HR, marketing, customer support, supply chain, logistics, and IT operations.",
  openGraph: {
    title: "Automation Opportunity Assessment | Sentient Engineering",
    description:
      "Complete a field-oriented business performance diagnostic and receive an executive automation opportunity report.",
  },
};

export default function DiagnosticPage() {
  return <AutomationAssessment />;
}
