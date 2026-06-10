"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#1E293B]">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Let&apos;s talk about your operations
          </h2>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            Tell us about the operational challenges your organization is facing.
            We&apos;ll show you how operations engineering can help.
          </p>
        </motion.div>

        <ContactForm />
      </Container>
    </section>
  );
}
