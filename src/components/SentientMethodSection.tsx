"use client";

import { motion } from "framer-motion";
import { SENTIENT_METHOD } from "@/lib/constants";
import Container from "./Container";
import ImagePanel from "./ImagePanel";
import SectionHeading from "./SectionHeading";

export default function SentientMethodSection() {
  return (
    <section id="method" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="grid gap-8">
            <SectionHeading
              eyebrow="The Sentient Method"
              title="From operating reality to engineered performance."
              description="We start by understanding the work, proving the impact, and designing the operating system the business needs."
            />
            <ImagePanel
              src="/images/workflow-map.png"
              alt="Hands arranging a monochrome process map for workflow optimization"
              caption="Workflow diagnosis"
              className="hidden lg:block"
            />
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-white/[0.08] sm:block" />
            <div className="grid gap-4">
              {SENTIENT_METHOD.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
                  className="premium-card relative rounded-3xl p-5 sm:ml-12"
                >
                  <span className="mb-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black text-sm font-medium text-white sm:absolute sm:-left-[4.25rem] sm:top-5">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
