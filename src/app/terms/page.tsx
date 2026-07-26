import type { Metadata } from "next";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing the use of the Sentient Engineering website and its published information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f6f6f1] pt-[4.5rem] text-black">
        <Container className="border-x border-black/10 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            Legal
          </p>
          <h1 className="mt-6 text-5xl font-medium tracking-[-0.045em] sm:text-7xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-sm text-black/45">Last updated: 26 July 2026</p>

          <div className="mt-14 max-w-3xl space-y-10 text-base leading-8 text-black/65">
            <section>
              <h2 className="text-2xl font-semibold text-black">Website use</h2>
              <p className="mt-3">
                You may use this website to learn about Sentient Engineering
                and contact us about potential work. Do not misuse the site,
                interfere with its operation or attempt unauthorised access.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">
                Published information
              </h2>
              <p className="mt-3">
                Website content is provided for general information. Project
                scope, performance, pricing, timelines and responsibilities are
                established only through a separate written agreement.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">
                Intellectual property
              </h2>
              <p className="mt-3">
                Unless stated otherwise, the website design, copy, branding and
                original materials belong to Sentient Engineering. They may not
                be republished or commercially reused without permission.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">Contact</h2>
              <p className="mt-3">
                Questions about these terms may be sent to{" "}
                <a
                  className="font-semibold text-black underline underline-offset-4"
                  href={COMPANY.emailHref}
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
