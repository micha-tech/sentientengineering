import Link from "next/link";
import { ARTICLES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function ThoughtLeadershipSection() {
  return (
    <section id="insights" className="section-shell bg-white py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Practical operations thinking for business leaders."
            description="Short essays on operations management, business process automation, operational excellence, AI for business, measurement, and execution."
          />
          <Link
            href="/blog"
            className="secondary-button w-fit px-5 py-3"
          >
            Read operations insights
          </Link>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              href={`/blog/${article.slug}`}
              key={article.title}
              className="premium-card rounded-xl p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cyan/40"
            >
              <time className="text-xs font-semibold uppercase tracking-widest text-navy">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(`${article.date}T00:00:00`))}
              </time>
              <h3 className="mt-7 text-xl font-semibold leading-7 text-navy">
                {article.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
