"use client";

import { motion } from "framer-motion";
import { PAIN_POINTS } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OperationalPainSection() {
  return (
    <section className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Operational Pain"
          title="The costs usually hide inside everyday work."
          description="Operational drag rarely announces itself. It appears as waiting, checking, rework, missed context, informal approvals, and leadership reports that arrive too late."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.035, duration: 0.45 }}
              className="premium-card rounded-3xl p-5 transition duration-300 hover:border-white/20"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/40" />
              </div>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.impact}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
