"use client";

import { motion } from "framer-motion";
import { OUTCOMES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OutcomesSection() {
  return (
    <section id="results" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Outcomes"
            title="The work is judged by operating results."
            description="The deliverable is not a deck, a dashboard, or an app. The deliverable is improved business performance."
          />
          <div className="premium-card rounded-[2rem] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {OUTCOMES.map((outcome, index) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="rounded-2xl border border-white/[0.08] bg-black/40 p-4"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                    {outcome.metric}
                  </span>
                  <h3 className="mt-1 text-xl font-medium text-white">
                    {outcome.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    {outcome.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
