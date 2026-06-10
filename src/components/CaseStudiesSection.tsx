"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function CaseStudiesSection() {
  return (
    <section className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Operational Transformations"
          title="What better operations look like in practice."
          description="Each engagement connects operational diagnosis with the right technical solution: data pipelines, automation, platforms, dashboards, modelling, or infrastructure."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="premium-card rounded-3xl p-6"
            >
              <p className="mb-8 inline-flex rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                Operations Engineering
              </p>
              <h3 className="text-xl font-medium text-white">{study.title}</h3>
              <p className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-white">
                {study.metric}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-300">{study.result}</p>
              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {study.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
