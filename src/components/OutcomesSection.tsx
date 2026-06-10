"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { OUTCOMES } from "@/lib/constants";

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="relative py-24 md:py-32 bg-[#1E293B]">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Outcomes That Matter
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            Every engagement is measured against the business outcomes that drive
            real value for your organization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUTCOMES.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative p-6 rounded-xl bg-[#0F172A]/50 border border-white/5 overflow-hidden group hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">
                  {outcome.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
