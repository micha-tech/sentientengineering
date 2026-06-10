"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-xl bg-accent/10 border border-accent/20 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
            Thank You
          </h3>
          <p className="text-sm text-[#CBD5E1]">
            We have received your enquiry and will be in touch within one
            business day to discuss how we can help engineer better operations
            for your organization.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-[#CBD5E1] mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder-[#475569] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[#CBD5E1] mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder-[#475569] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-[#CBD5E1] mb-1.5">
              Company
            </label>
            <input
              id="company"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder-[#475569] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-[#CBD5E1] mb-1.5">
              Tell us about your operational challenge
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder-[#475569] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
              placeholder="Describe the operational challenges your organization is facing..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-700 transition-all shadow-lg shadow-accent/25"
          >
            Send Enquiry
          </button>
          <p className="text-xs text-center text-[#475569]">
            We typically respond within one business day.
          </p>
        </form>
      )}
    </div>
  );
}
