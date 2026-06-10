"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="py-16 md:py-20 bg-[#1E293B] border-t border-white/5">
      <div className="mx-auto w-full max-w-2xl px-6 md:px-12 text-center">
        {subscribed ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[#CBD5E1]"
          >
            Thank you for subscribing. We&apos;ll send insights on operations
            engineering straight to your inbox.
          </motion.p>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
              Stay informed
            </h3>
            <p className="text-sm text-[#64748B] mb-6">
              Get insights on operations, systems, and performance delivered to
              your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder-[#475569] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
