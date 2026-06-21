import type { Metadata } from "next";
import BusinessDiagnostic from "@/components/diagnostic/BusinessDiagnostic";

export const metadata: Metadata = {
  title: "Business Growth & Operations Diagnostic",
  description:
    "Assess sales, marketing, customer support, workflow efficiency, and executive visibility to identify practical business systems and automation opportunities.",
  openGraph: {
    title: "Business Growth & Operations Diagnostic | Sentient Engineering",
    description:
      "Find where your business is losing sales, time, and profit with a guided executive operations assessment.",
  },
};

export default function DiagnosticPage() {
  return <BusinessDiagnostic />;
}
