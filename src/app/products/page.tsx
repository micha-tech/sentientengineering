import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { products } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Products and Intelligent Platforms",
  description:
    "Gyptiq and configurable AI platforms for revenue, document processing, commerce, industrial vision, predictive maintenance, knowledge and logistics.",
  path: "/products",
});

const portfolio = products.slice(1);

export default function ProductsPage() {
  const gyptiq = products[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Products and Intelligent Platforms",
    url: `${COMPANY.url}/products`,
    description:
      "Sentient Engineering products and configurable AI platforms for commercial and industrial teams.",
    hasPart: products.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description,
      applicationCategory: "BusinessApplication",
    })),
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="bg-black pt-[4.5rem] text-white">
          <Container className="border-x border-white/15 px-0">
            <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
              <div className="flex min-h-[31rem] flex-col justify-end border-b border-white/15 p-6 py-14 sm:p-10 sm:py-20 lg:min-h-[37rem] lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Products and platforms
                </p>
                <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.25rem]">
                  Intelligence packaged for the work that repeats.
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Ready foundations for customer engagement, documents,
                  commerce, vision, maintenance, knowledge and logistics —
                  configured around your people, data and tools.
                </p>
              </div>

              <div className="grid grid-cols-2 bg-[#111]">
                {[
                  ["01", "Revenue"],
                  ["02", "Efficiency"],
                  ["03", "Reliability"],
                  ["04", "Visibility"],
                ].map(([number, label], index) => (
                  <div
                    key={label}
                    className={`flex min-h-40 flex-col justify-between border-white/15 p-6 sm:min-h-48 sm:p-8 ${
                      index % 2 === 0 ? "border-r" : ""
                    } ${index < 2 ? "border-b" : ""}`}
                  >
                    <span className="text-xs font-bold text-white/25">
                      {number}
                    </span>
                    <span className="text-lg font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 px-0">
            <div className="grid lg:grid-cols-2">
              <figure className="relative min-h-[28rem] border-b border-black/10 bg-neutral-200 sm:min-h-[38rem] lg:border-b-0 lg:border-r">
                <Image
                  src="/images/gyptiq-in-hand.png"
                  alt="Gyptiq mobile interface for connected customer and business workflows"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <span className="absolute left-5 top-5 bg-black px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Flagship product
                </span>
              </figure>

              <article className="flex flex-col justify-between p-6 py-14 sm:p-10 sm:py-20 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                    {gyptiq.name}
                  </p>
                  <h2 className="mt-7 max-w-xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">
                    One place to manage conversations, customers and commercial
                    workflows.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                    {gyptiq.description}
                  </p>
                </div>

                <div className="mt-14">
                  <div className="grid border-y border-black/15 sm:grid-cols-2">
                    {gyptiq.outcomes.map((outcome, index) => (
                      <div
                        key={outcome}
                        className={`flex min-h-24 items-end gap-3 border-black/15 py-5 ${
                          index % 2 === 0
                            ? "sm:border-r sm:pr-5"
                            : "sm:pl-5"
                        } ${index < 2 ? "border-b" : ""}`}
                      >
                        <span className="text-xs font-bold text-black/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex min-h-12 items-center justify-between bg-black px-5 text-sm font-bold text-white"
                  >
                    Discuss Gyptiq <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-16 sm:py-24">
            <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Platform portfolio
              </p>
              <div>
                <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl">
                  Start with a proven foundation. Configure what makes your
                  business different.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
                  Each platform is adapted to the workflow, integrations,
                  controls and success measures that matter to your team.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              {portfolio.map((product, index) => (
                <article
                  id={product.id}
                  key={product.id}
                  className={`scroll-mt-28 border-b border-black/10 py-9 ${
                    index % 2 === 0
                      ? "md:border-r md:pr-8"
                      : "md:pl-8"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                      {product.label}
                    </p>
                    <span className="text-xs font-bold text-black/20">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.04em]">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                    {product.description}
                  </p>

                  <p className="mt-7 border-l-2 border-[#235cff] pl-4 text-sm font-medium leading-6 text-black/75">
                    {product.useCase}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-black/10 pt-5">
                    {product.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="text-xs font-bold uppercase leading-5 tracking-[0.07em] text-black/50"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex border-b border-black pb-1 text-sm font-bold"
                  >
                    {product.cta}
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-5 border-y border-black/15 py-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-xl font-semibold tracking-[-0.025em]">
                Need a tailored system instead of a packaged platform?
              </p>
              <Link
                className="inline-flex min-h-12 shrink-0 items-center justify-center border border-black px-5 text-sm font-bold transition hover:bg-black hover:text-white"
                href="/services"
              >
                Explore engineering services
              </Link>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
