import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights on Operations, Systems, and Performance",
  description:
    "Thought leadership on operations engineering, business process optimization, workflow automation, and operational excellence from Sentient Engineering.",
  openGraph: {
    title: "Insights | Sentient Engineering",
    description:
      "Thought leadership on operations engineering from Sentient Engineering.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <nav className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Insights
        </h1>
        <p className="text-lg text-[#CBD5E1] mb-16 max-w-2xl">
          Thought leadership on operations, systems, and performance from the
          Sentient Engineering team.
        </p>

        <div className="space-y-8">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="p-6 md:p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <time className="text-xs text-[#64748B] font-mono">
                {article.date}
              </time>
              <h2 className="text-xl font-bold text-[#F8FAFC] mt-2 mb-3">
                <Link
                  href={`/blog/${article.slug}`}
                  className="hover:text-accent transition-colors"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                {article.description}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-highlight transition-colors"
              >
                Read Article
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
