"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { ARTICLES } from "@/lib/constants";

export default function ThoughtLeadershipSection() {
  return (
    <section id="insights" className="relative py-24 md:py-32 bg-[#1E293B]">
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
              Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Insights on Operations, Systems, and Performance
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            Thought leadership from our team on the principles and practices of
            operations engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 md:p-8 rounded-xl bg-[#0F172A]/50 border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <time className="text-xs text-[#64748B] font-mono">
                  {article.date}
                </time>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                {article.description}
              </p>

              <a
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-highlight transition-colors"
              >
                Read Article
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
