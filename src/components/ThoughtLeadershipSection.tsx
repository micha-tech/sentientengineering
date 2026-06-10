import Link from "next/link";
import { ARTICLES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function ThoughtLeadershipSection() {
  return (
    <section id="insights" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Thought Leadership"
            title="Clear thinking for leaders improving how work gets done."
            description="Essays on operational friction, systems design, automation, measurement, and the practical realities of scaling execution."
          />
          <Link
            href="/blog"
            className="inline-flex w-fit rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
          >
            View insights
          </Link>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              href={`/blog/${article.slug}`}
              key={article.title}
              className="premium-card rounded-3xl p-6 transition duration-300 hover:border-white/20"
            >
              <time className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(`${article.date}T00:00:00`))}
              </time>
              <h3 className="mt-8 text-xl font-medium leading-7 text-white">
                {article.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
