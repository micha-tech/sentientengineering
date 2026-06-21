import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { ARTICLES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

const ARTICLE_BODY: Record<string, string[]> = {
  "hidden-cost-operational-friction": [
    "Operational friction is the invisible tax paid by growing organizations. It appears in approval queues, duplicate data entry, unclear ownership, delayed reports, status meetings, exceptions, and rework.",
    "The financial impact is rarely visible as one obvious line item. Instead, it spreads across payroll, missed delivery dates, slower customer response, lower management confidence, and decisions made from incomplete information.",
    "The first job of operations engineering is to make that cost visible. Once cycle time, handoff delay, rework, and exception volume are measured, leaders can decide which constraints deserve investment.",
  ],
  "automation-is-not-an-operations-strategy": [
    "Automation can be powerful, but it is not a strategy by itself. When a business automates a poorly designed workflow, the result is often a faster version of the same operational problem.",
    "The better sequence is to observe the workflow, diagnose the constraint, simplify the process, define ownership, measure the expected impact, and then automate the parts that should actually be automated.",
    "Good automation removes friction from a coherent operating model. Bad automation locks confusion into the organization at scale.",
  ],
  "what-leaders-should-measure-before-they-scale": [
    "Scale exposes the quality of an operating model. Processes that feel manageable at a smaller size can fracture when volume, headcount, geography, and customer expectations increase.",
    "Before scaling, leaders should understand cycle time, throughput, queue depth, rework rate, exception volume, cost per workflow, and the points where decisions repeatedly stall.",
    "These measurements create a clearer growth plan. They show where to standardize, where to automate, where to redesign ownership, and where better visibility is required.",
  ],
};

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Sentient Engineering`,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Sentient Engineering"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const paragraphs = ARTICLE_BODY[article.slug] ?? [
    "This insight is being prepared by Sentient Engineering.",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Container className="pt-28 pb-20 sm:pt-32">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="secondary-button min-h-0 px-4 py-2"
          >
            Back to insights
          </Link>

          <header className="mt-12 border-b border-slate-200 pb-10">
            <time className="text-xs font-semibold uppercase tracking-widest text-navy">
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(`${article.date}T00:00:00`))}
            </time>
            <h1 className="mt-5 text-balance text-4xl font-semibold text-navy sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {article.description}
            </p>
          </header>

          <div className="mt-10 space-y-7 text-base leading-8 text-slate-700">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="premium-card mt-14 rounded-xl p-6">
            <p className="text-sm leading-7 text-muted">
              Sentient Engineering helps leadership teams translate operational
              friction into measurable priorities, then engineer the systems that
              improve performance.
            </p>
            <Link
              href="/#audit"
              className="primary-button mt-5 min-h-0 px-5 py-3"
            >
              Request an Operations Audit
            </Link>
          </div>
        </article>
      </Container>
    </main>
  );
}
