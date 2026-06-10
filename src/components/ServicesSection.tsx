"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Container from "./Container";
import ImagePanel from "./ImagePanel";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Engineering work, systems, data, and infrastructure around operational outcomes."
            description="Each engagement is shaped by the operating constraint: cost, speed, visibility, quality, risk, accountability, or scale."
          />
          <ImagePanel
            src="/images/command-center.png"
            alt="Monochrome operational command center with dashboards and system visibility"
            caption="Visibility across the operating system"
          />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.035, duration: 0.45 }}
              className="premium-card group rounded-3xl p-6 transition duration-300 hover:border-white/20"
            >
              <div className="mb-10 h-px w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
              <h3 className="text-xl font-medium tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
