"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { SENTIENT_METHOD } from "@/lib/constants";

function MethodStepIcon({ step }: { step: number }) {
  const icons: Record<number, React.ReactNode> = {
    1: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    2: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 9 1 3 7 3" /><polyline points="23 15 23 21 17 21" /><path d="M1 3l7 7" /><path d="M17 17l7 7" />
      </svg>
    ),
    3: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    4: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" /><line x1="12" x2="22" y1="22" y2="8.5" /><line x1="2" x2="12" y1="8.5" y2="22" /><line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    ),
    5: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" /><line x1="4" x2="21" y1="20" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" x2="21" y1="15" y2="21" /><line x1="4" x2="9" y1="4" y2="9" />
      </svg>
    ),
    6: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  };
  return icons[step] || null;
}

export default function SentientMethodSection() {
  return (
    <section id="method" className="relative py-24 md:py-32 bg-[#0F172A]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC]">
            The Sentient Method
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto mt-4">
            A structured, six-phase approach to engineering better operations.
            Each phase builds on the last, delivering measurable results at every
            stage.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {SENTIENT_METHOD.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative lg:flex items-start gap-8 lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-[-2px]" : ""}`}
              >
                <div className="hidden lg:flex lg:w-1/2 justify-center">
                  {i % 2 === 0 ? (
                    <div className="w-full max-w-md p-6 rounded-xl bg-white/[0.03] border border-white/5">
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="hidden lg:flex flex-col items-center relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/25">
                    <MethodStepIcon step={step.step} />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs font-mono text-accent">0{step.step}</span>
                  </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  {i % 2 !== 0 ? (
                    <div className="w-full max-w-md p-6 rounded-xl bg-white/[0.03] border border-white/5">
                      <p className="text-sm text-[#64748B] leading-relaxed lg:hidden">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="lg:hidden flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MethodStepIcon step={step.step} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
