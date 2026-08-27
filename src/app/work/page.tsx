import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { workEntries } from "@/lib/work-data";

export const metadata: Metadata = createPageMetadata({
  title: "Selected Applied AI Engineering Work",
  description:
    "Selected Sentient Engineering systems across commerce, computer vision, revenue operations, biometrics and enterprise knowledge, with delivery status stated plainly.",
  path: "/work",
});

export default function WorkPage() {
  const pageUrl = absoluteUrl("/work");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        name: "Selected Applied AI Engineering Work",
        url: pageUrl,
        description: metadata.description,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        about: workEntries.map((entry) => ({ "@type": "CreativeWork", name: entry.title, description: entry.system })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Work", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="bg-black pt-[4.5rem] text-white">
          <Container>
            <div className="grid min-h-[38rem] gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
              <div className="flex flex-col justify-end">
                <p className="eyebrow text-[#83a8ff]">Selected work</p>
                <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.97] tracking-[-0.06em] sm:text-7xl lg:text-[5.2rem]">Engineering credibility requires clarity about what was built.</h1>
                <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">Selected project-backed systems, their operational purpose and the most accurate status supported by the information currently available.</p>
              </div>
              <div className="border-t border-white/20 pt-8">
                <p className="eyebrow text-white/35">Our reporting sequence</p>
                <ol className="mt-8 grid gap-5 sm:grid-cols-2">
                  {["Problem", "System", "Status", "Value"].map((item) => <li key={item} className="flex gap-3 text-lg font-semibold"><span className="text-[#83a8ff]">•</span>{item}</li>)}
                </ol>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-10 sm:py-16">
            {workEntries.map((entry) => (
              <article key={entry.id} id={entry.id} className="scroll-mt-24 border-b border-black/15 py-14 sm:py-20">
                <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                  <div>
                    <p className="eyebrow text-[#1f5eff]">{entry.category}</p>
                    <h2 className="mt-8 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">{entry.title}</h2>
                    <span className="mt-7 inline-flex text-[0.62rem] font-bold uppercase tracking-[0.09em] text-black/50">{entry.status}</span>
                  </div>
                  <div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div><p className="eyebrow text-black/35">Operational problem</p><p className="mt-4 text-sm leading-7 text-black/60">{entry.problem}</p></div>
                      <div><p className="eyebrow text-black/35">System engineered</p><p className="mt-4 text-sm leading-7 text-black/60">{entry.system}</p></div>
                    </div>
                    <div className="mt-9 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                      <div><p className="eyebrow text-black/35">System components</p><ul className="mt-4 border-t border-black/10">{entry.components.map((item) => <li key={item} className="border-b border-black/10 py-3 text-xs font-semibold">{item}</li>)}</ul></div>
                      <div><p className="eyebrow text-black/35">Relevant capabilities</p><ul className="mt-4 space-y-3">{entry.capabilities.map((item) => <li key={item} className="flex gap-3 text-xs font-semibold"><span className="text-[#1f5eff]">•</span>{item}</li>)}</ul></div>
                    </div>
                    <div className="mt-9 grid gap-5 border-t border-black/15 pt-7 sm:grid-cols-2"><div><p className="eyebrow text-black/35">Deployment</p><p className="mt-3 text-sm font-semibold leading-6">{entry.deployment}</p></div><div className="border-l-2 border-[#1f5eff] pl-4"><p className="eyebrow text-black/35">Business value</p><p className="mt-3 text-sm font-semibold leading-6">{entry.value}</p></div></div>
                  </div>
                </div>
              </article>
            ))}
            <div className="py-16 sm:py-20">
              <div className="grid gap-8 border-y border-black/15 py-8 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow text-[#1f5eff]">Evidence boundary</p><div><h2 className="text-3xl font-semibold tracking-[-0.04em]">No invented metrics, clients or deployment claims.</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-black/55">Where deployment details or measured outcomes are not publicly supported by repository content, this page says so. Owner-approved screenshots, status and outcomes can be added when supplied.</p></div></div>
              <Link href="/contact" className="mt-10 inline-flex min-h-12 items-center bg-black px-5 text-sm font-bold text-white">Discuss a similar problem</Link>
            </div>
          </Container>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
