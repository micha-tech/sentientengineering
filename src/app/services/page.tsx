import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Applied AI Engineering Services",
  description:
    "Applied AI systems engineering, intelligent automation, computer vision, document intelligence, predictive AI, MLOps, and managed AI operations.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Applied AI Engineering Services"
          title="Complete Intelligent Systems, Engineered for Production"
          copy="We combine AI, software, automation, data, cloud infrastructure, and operational engineering to build systems that perform reliably inside real organisations."
          image="/images/ai-intelligence-portrait.webp"
          imageAlt="Human and machine intelligence representing production applied AI engineering"
        />

        <section className="bg-white py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <SectionHeading
                eyebrow="How we engage"
                title="Engineering Scope Matched to the Operating Problem"
                copy="A service may begin with one workflow or one decision, but the design accounts for the complete production environment: people, data, applications, infrastructure, controls, and ownership."
              />
              <div className="border-t border-slate-200">
                {[
                  [
                    "New systems",
                    "Design and build an intelligent application or platform around a defined business requirement.",
                  ],
                  [
                    "Existing operations",
                    "Add intelligence and automation to workflows, applications, equipment, and data already in use.",
                  ],
                  [
                    "Deployed AI",
                    "Stabilize, evaluate, monitor, operate, and improve systems already in production.",
                  ],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[10rem_1fr]"
                  >
                    <h2 className="text-base font-semibold text-[#071b20]">
                      {title}
                    </h2>
                    <p className="text-sm leading-7 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f3f6f4] py-16 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Service portfolio"
              title="Applied AI Engineering Across the Complete System"
              copy="Each engagement is scoped around a real operating requirement, with technical depth and business outcomes kept visible together."
            />

            <div className="mt-12 border-t border-slate-300">
              {services.map((service, index) => (
                <article
                  id={service.id}
                  key={service.id}
                  className="scroll-mt-28 border-b border-slate-300 py-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[4rem_0.82fr_1.18fr] lg:gap-10">
                    <p className="text-xs font-bold text-[#2f7d44]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h2 className="text-2xl font-semibold leading-8 text-[#071b20]">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {service.summary}
                      </p>
                      <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#2f7d44]">
                        Problems it solves
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {service.problems}
                      </p>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-3">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                          Example applications
                        </h3>
                        <ul className="mt-4 grid gap-3">
                          {service.applications.map((item) => (
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
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                          Business outcomes
                        </h3>
                        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                          {service.outcomes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                          Relevant industries
                        </h3>
                        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                          {service.industries.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#contact">
                Discuss Your Project
              </a>
              <Link className="secondary-button px-6" href="/products">
                Explore Our Products
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
