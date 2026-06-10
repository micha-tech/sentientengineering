"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { SERVICES } from "@/lib/constants";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group p-6 md:p-8 rounded-xl bg-[#0F172A]/50 border border-white/5 hover:border-accent/20 transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <span className="text-xs font-mono text-accent/60">0{index + 1}</span>
      </div>

      <h3 className="text-lg font-bold text-[#F8FAFC] mb-4 group-hover:text-accent transition-colors">
        {service.title}
      </h3>

      <div className="space-y-3">
        <div>
          <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
            Problem
          </h4>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            {service.problem}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
            Approach
          </h4>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            {service.approach}
          </p>
        </div>
        <div className="pt-2 border-t border-white/5">
          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
            Outcome
          </h4>
          <p className="text-sm text-[#F8FAFC] font-medium leading-relaxed">
            {service.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#1E293B]">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <Container className="relative z-10">
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Services engineered for business outcomes
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            We don&apos;t deliver technical capabilities. We deliver measurable
            improvements in operational performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
