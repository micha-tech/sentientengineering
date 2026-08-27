import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { getTeamMember, teamMembers } from "@/lib/team-data";

type TeamProfileProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teamMembers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TeamProfileProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return createPageMetadata({
    title: `${member.name} | ${member.role}`,
    description: member.shortBio,
    path: `/team/${member.slug}`,
    image: member.image,
  });
}

export default async function TeamProfilePage({ params }: TeamProfileProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const memberIndex = teamMembers.findIndex((item) => item.slug === member.slug);
  const nextMember = teamMembers[(memberIndex + 1) % teamMembers.length];
  const pageUrl = absoluteUrl(`/team/${member.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": pageUrl,
        name: `${member.name} — ${member.role}`,
        url: pageUrl,
        description: member.shortBio,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        mainEntity: { "@id": `${pageUrl}#person` },
      },
      {
        "@type": "Person",
        "@id": `${pageUrl}#person`,
        name: member.name,
        jobTitle: member.role,
        image: absoluteUrl(member.image),
        url: pageUrl,
        description: member.introduction,
        worksFor: { "@id": `${COMPANY.url}/#organization` },
        knowsAbout: member.focusAreas,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Team", item: `${COMPANY.url}/team` },
          { "@type": "ListItem", position: 3, name: member.name, item: pageUrl },
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
          <Container className="py-12 sm:py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/40">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <Link href="/team" className="hover:text-white">Team</Link><span>/</span>
              <span>{member.name}</span>
            </nav>
            <div className="grid min-h-[35rem] gap-12 pt-16 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#83a8ff]">{member.eyebrow}</p>
              </div>
              <div>
                <h1 className="max-w-5xl text-balance text-[3.4rem] font-medium leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">{member.name}</h1>
                <p className="mt-7 text-xl font-semibold text-white/65 sm:text-2xl">{member.role}, Sentient Engineering</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <figure className="lg:sticky lg:top-28 lg:self-start">
                <div className="relative aspect-[0.686/1] overflow-hidden bg-neutral-200">
                  <Image src={member.image} alt={member.imageAlt} fill priority sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-top" />
                </div>
                <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs font-semibold text-black/45"><span>{member.name}</span><span>Lagos, Nigeria</span></figcaption>
              </figure>

              <article className="max-w-3xl">
                <p className="text-2xl font-medium leading-10 tracking-[-0.025em] sm:text-3xl sm:leading-[1.45]">{member.introduction}</p>
                <div className="mt-12 space-y-7 text-base leading-8 text-black/60">
                  {member.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.58fr_1.42fr]">
              <p className="eyebrow text-[#83a8ff]">Leadership principle</p>
              <blockquote className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl">“{member.quote}”</blockquote>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-24 sm:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
              <div><p className="eyebrow text-[#1f5eff]">Areas of focus</p><h2 className="mt-7 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Where {member.name.split(" ")[0]} leads.</h2></div>
              <ul className="grid gap-x-12 gap-y-7 border-t border-black/15 pt-8 sm:grid-cols-2">
                {member.focusAreas.map((area) => <li key={area} className="flex gap-3 text-sm font-semibold leading-6"><span className="text-[#1f5eff]">•</span>{area}</li>)}
              </ul>
            </div>
            <div className="mt-20 flex flex-col gap-6 border-t border-black/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/team" className="inline-flex w-fit border-b border-black pb-1 text-sm font-bold">← Meet the full team</Link>
              {nextMember.slug !== member.slug ? <Link href={`/team/${nextMember.slug}`} className="inline-flex w-fit border-b border-black pb-1 text-sm font-bold">Next profile: {nextMember.name} →</Link> : null}
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
