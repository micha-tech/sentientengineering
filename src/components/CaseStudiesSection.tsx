"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Measurable results from real engagements
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            These illustrative examples demonstrate the type and scale of results
            our clients achieve through operations engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[32px]" />

              <div className="relative z-10">
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                  {study.label}
                </span>

                <h3 className="text-2xl font-bold text-[#38BDF8] mb-3">
                  {study.result}
                </h3>

                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-2">
                  {study.title}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
