import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

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
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const bodyContent: Record<string, string> = {
    "why-digital-transformation-projects-fail": `
      <p>Over 70% of digital transformation projects fail to achieve their objectives. The common narrative blames technology — poor implementation, wrong tools, inadequate skills. But in our experience working with dozens of organizations, the real cause is almost never technological.</p>
      <p>The fundamental problem is that most organizations attempt to digitize broken processes. They implement sophisticated software systems on top of workflows that are fragmented, inconsistent, and poorly understood. The result is expensive digital chaos.</p>
      <p>True digital transformation must begin with operational analysis. Before selecting any technology, organizations need to understand their current workflows, identify the root causes of inefficiency, and design processes that are optimized for the digital environment.</p>
      <p>Technology should be the last decision, not the first.</p>
    `,
    "hidden-cost-operational-friction": `
      <p>Operational friction is the invisible tax that every organization pays. It doesn't appear on any financial statement, yet it directly impacts profitability, growth, and competitiveness.</p>
      <p>Consider the cost of a single approval bottleneck. A decision that takes five days instead of two hours delays project initiation, holds up resources, and reduces organizational agility. Multiply this by hundreds of decisions across dozens of workflows, and the cumulative cost is staggering.</p>
      <p>We've developed methodologies to quantify these hidden costs. By measuring cycle times, handoff delays, rework rates, and waiting periods, we can calculate the exact financial impact of operational friction.</p>
      <p>The first step to eliminating hidden costs is making them visible.</p>
    `,
    "automation-without-process-design": `
      <p>Automation is one of the most powerful tools in operations engineering. It eliminates repetitive work, reduces errors, and accelerates delivery. But automation has a dangerous trap: it amplifies whatever process it automates.</p>
      <p>Automating a broken process doesn't fix it — it simply produces broken results faster and more reliably. We've seen organizations implement sophisticated RPA (Robotic Process Automation) only to discover they had automated workflows that shouldn't exist in the first place.</p>
      <p>The correct sequence is: understand the process, redesign it for efficiency, validate the new design, and then automate. Process design must precede automation investment.</p>
      <p>When done correctly, automation delivers transformative results. When done incorrectly, it locks inefficiency into your operations at scale.</p>
    `,
    "technology-should-follow-operations": `
      <p>In our experience, the most common cause of operational inefficiency is technology-led decision making. Organizations select software based on features, brand recognition, or industry trends — without first understanding what their operations actually need.</p>
      <p>The result is a stack of expensive tools that don't work well together, require manual data transfer, and force employees to adapt their workflows to the limitations of the software.</p>
      <p>The alternative is an operations-led approach: understand your workflows, identify your requirements, and then select technology that serves your operational needs. This approach consistently delivers better outcomes at lower cost.</p>
      <p>Technology is a tool, not a strategy. When operations lead, technology enables. When technology leads, operations suffer.</p>
    `,
  };

  return (
    <main className="min-h-screen bg-[#0F172A]">
      <article className="mx-auto w-full max-w-3xl px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <nav className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Insights
          </Link>
        </nav>

        <time className="text-xs text-[#64748B] font-mono">
          {article.date}
        </time>
        <h1 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mt-4 mb-6 leading-[1.15]">
          {article.title}
        </h1>
        <p className="text-lg text-[#CBD5E1] mb-10">
          {article.description}
        </p>

        <div
          className="prose prose-invert prose-sm max-w-none text-[#CBD5E1] leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html:
              bodyContent[article.slug] ||
              "<p>This article is coming soon. Please check back later.</p>",
          }}
        />

        <div className="mt-16 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
