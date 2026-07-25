import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Products and Intelligent Platforms",
  description:
    "Gyptiq and configurable AI platforms for revenue operations, document processing, commerce, industrial vision, predictive maintenance, knowledge, and logistics.",
  path: "/products",
});

export default function ProductsPage() {
  const gyptiq = products[0];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="AI Products"
          title="Intelligent Platforms Built Around Recurring Operational Problems"
          copy="Our product portfolio combines established products, configurable platforms, industry solutions, and managed systems that can be adapted to the operating environment."
          image="/images/gyptiq-announcement.png"
          imageAlt="Gyptiq intelligent business operations platform"
        />

        <section className="bg-white py-16 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow={gyptiq.label}
              title={gyptiq.name}
              copy={gyptiq.description}
            />
            <div className="mt-12 grid overflow-hidden rounded-md border border-slate-200 lg:grid-cols-[0.82fr_1.18fr]">
              <figure className="relative min-h-[28rem] bg-slate-100">
                <Image
                  src="/images/gyptiq-in-hand.png"
                  alt="Gyptiq mobile interface showing AI-assisted business operations"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </figure>
              <div className="grid gap-8 p-6 sm:p-10">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2f7d44]">
                    Primary use case
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {gyptiq.useCase}
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2f7d44]">
                      Core capabilities
                    </h2>
                    <ul className="mt-4 grid gap-3">
                      {gyptiq.capabilities.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-[#8fd3bf] pl-3 text-sm leading-6 text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#2f7d44]">
                      Expected outcomes
                    </h2>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                      {gyptiq.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <a className="primary-button px-6" href="#contact">
                    {gyptiq.cta}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f3f6f4] py-16 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Platform portfolio"
              title="Configurable Platforms and Industry Solutions"
              copy="These systems are configured and engineered around each organisation's data, workflows, integrations, controls, and deployment requirements."
            />

            <div className="mt-12 grid border-t border-slate-300 lg:grid-cols-2">
              {products.slice(1).map((product, index) => (
                <article
                  id={product.id}
                  key={product.id}
                  className={`scroll-mt-28 border-b border-slate-300 py-8 lg:p-8 ${
                    index % 2 === 0 ? "lg:border-r" : ""
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f7d44]">
                    {product.label}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-8 text-[#071b20]">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>
                  <div className="mt-7 border-t border-slate-200 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Primary use case
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {product.useCase}
                    </p>
                  </div>
                  <div className="mt-7 grid gap-7 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                        Core capabilities
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                        {product.capabilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                        Expected outcomes
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                        {product.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a className="secondary-button px-5" href="#contact">
                      {product.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link className="secondary-button px-6" href="/services">
                View Engineering Services
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
