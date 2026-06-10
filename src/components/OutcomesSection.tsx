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
            title="The work is judged by operational performance."
            description="The deliverable is not a deck, a dashboard, or an app. The deliverable is a better operating system for the business."
          />
          <div className="premium-card rounded-[2rem] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {OUTCOMES.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="rounded-2xl border border-white/[0.08] bg-black/40 p-4"
                >
                  <span className="mb-8 block h-1.5 w-1.5 rounded-full bg-white/70" />
                  <h3 className="text-base font-medium text-white">{outcome}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
