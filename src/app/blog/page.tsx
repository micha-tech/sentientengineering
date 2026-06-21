import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/constants";
import Container from "@/components/Container";

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
    <main className="min-h-screen bg-background">
      <Container className="pt-28 pb-20 sm:pt-32">
        <Link
          href="/"
          className="secondary-button min-h-0 px-4 py-2"
        >
          Back to home
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="eyebrow">
            Insights
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold text-navy sm:text-6xl">
            Operations thinking for leaders building better systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Essays on operational friction, automation, measurement, systems
            design, and the practical work of scaling execution.
          </p>
        </header>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="premium-card rounded-xl p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cyan/40"
            >
              <time className="text-xs font-semibold uppercase tracking-widest text-navy">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(`${article.date}T00:00:00`))}
              </time>
              <h2 className="mt-8 text-xl font-semibold leading-7 text-navy">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
