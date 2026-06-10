"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustriesSection() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Industries we serve
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            Our methodology is industry-agnostic. We bring operations engineering
            expertise to every sector.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="group px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              <span className="text-lg mr-2">{industry.icon}</span>
              <span className="text-sm text-[#CBD5E1] group-hover:text-[#F8FAFC] transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
