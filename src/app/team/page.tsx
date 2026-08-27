import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { teamMembers } from "@/lib/team-data";

export const metadata: Metadata = createPageMetadata({
  title: "Meet the Team | Sentient Engineering",
  description:
    "Meet the people leading engineering and customer experience at Sentient Engineering in Lagos, Nigeria.",
  path: "/team",
});

export default function TeamPage() {
  const pageUrl = absoluteUrl("/team");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        name: "Meet the Sentient Engineering Team",
        url: pageUrl,
        description: metadata.description,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: teamMembers.map((member, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${COMPANY.url}/team/${member.slug}`,
            name: member.name,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Team", item: pageUrl },
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
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="grid min-h-[31rem] gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#83a8ff]">Meet the team</p>
                <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                  Leadership across engineering delivery and the customer experience around it.
                </p>
              </div>
              <div>
                <h1 className="max-w-5xl text-balance text-[3.2rem] font-medium leading-[0.98] tracking-[-0.058em] sm:text-7xl lg:text-[5.3rem]">
                  The people responsible for how we build—and how we serve.
                </h1>
                <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                  Sentient Engineering brings technical depth and human understanding together. Meet the leaders shaping our systems, standards and client relationships.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
              <p className="eyebrow text-[#1f5eff]">Our leadership</p>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl">
                Distinct disciplines. One standard of care.
              </h2>
            </div>

            <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <article key={member.slug}>
                  <Link href={`/team/${member.slug}`} className="group block">
                    <span className="relative block aspect-[4/5] overflow-hidden bg-neutral-200">
                      <Image
                        src={member.image}
                        alt={member.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                      />
                    </span>
                    <span className="mt-7 grid gap-5 border-t border-black/15 pt-6 sm:grid-cols-[3rem_1fr]">
                      <span className="text-xs font-bold text-black/25">{String(index + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{member.name}</span>
                        <span className="mt-3 block text-sm font-semibold text-black/50">{member.role}</span>
                        <span className="mt-5 block max-w-xl text-sm leading-7 text-black/55">{member.shortBio}</span>
                        <span className="mt-6 inline-flex border-b border-black pb-1 text-sm font-bold transition group-hover:border-[#1f5eff] group-hover:text-[#1f5eff]">Read full profile →</span>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-20 sm:py-28">
            <div className="grid gap-8 border-y border-black/15 py-10 lg:grid-cols-[0.58fr_1.42fr]">
              <p className="eyebrow text-[#1f5eff]">Shared responsibility</p>
              <p className="max-w-4xl text-2xl font-medium leading-10 tracking-[-0.025em] sm:text-3xl">
                Strong intelligent systems depend on both disciplined engineering and a clear understanding of the people, organisations and outcomes they are built to serve.
              </p>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
