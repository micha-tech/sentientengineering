"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
            title="Outcome-based services. Technology is the tool, not the product."
            description="Every engagement is organized around a measurable business outcome — lower costs, faster operations, better decisions. We apply the right tools only where they solve real operational problems."
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
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
                <Image
                  src={service.image}
                  alt={`${service.title} visual`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>
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
