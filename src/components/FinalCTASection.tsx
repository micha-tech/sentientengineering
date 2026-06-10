"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6 leading-[1.15]">
            Ready to Engineer Better Operations?
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] leading-relaxed mb-10 max-w-2xl mx-auto">
            Let&apos;s identify where inefficiencies are slowing your business
            and design systems that unlock measurable performance improvements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-accent/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Book an Operations Audit
            </a>
            <a
              href={`mailto:hello@sentientengineering.com`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/10 text-[#CBD5E1] font-medium text-sm hover:bg-white/5 hover:text-[#F8FAFC] transition-all"
            >
              hello@sentientengineering.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
