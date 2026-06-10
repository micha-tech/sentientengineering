"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function PositioningSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] leading-[1.15] mb-6">
              Most businesses don&apos;t have a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                technology problem
              </span>
              .
              <br />
              They have an{" "}
              <span className="text-[#38BDF8]">operations problem</span>.
            </h2>

            <p className="text-lg md:text-xl text-[#CBD5E1] leading-relaxed mb-8">
              Organizations often purchase software without first understanding
              the underlying operational inefficiencies causing poor performance.
              They implement tools expecting process improvement, but technology
              cannot fix broken workflows.
            </p>

            <p className="text-lg md:text-xl text-[#CBD5E1] leading-relaxed">
              <span className="text-[#F8FAFC] font-semibold">
                Sentient Engineering begins with operations, not technology.
              </span>{" "}
              We analyze how your business actually works, identify where
              performance breaks down, and engineer solutions that deliver
              measurable improvement. Technology follows strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Business Operations", desc: "How work gets done" },
              { label: "Systems Thinking", desc: "Understanding connections" },
              { label: "Process Engineering", desc: "Designing for flow" },
              { label: "Technology Execution", desc: "Tools that serve process" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-sm bg-accent" />
                </div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
