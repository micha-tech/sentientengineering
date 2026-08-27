import type { Metadata } from "next";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Sentient Engineering handles information submitted through its website and project enquiry form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f6f6f1] pt-[4.5rem] text-black">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            Legal
          </p>
          <h1 className="mt-6 text-5xl font-medium tracking-[-0.045em] sm:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-black/45">Last updated: 26 July 2026</p>

          <div className="mt-14 max-w-3xl space-y-10 text-base leading-8 text-black/65">
            <section>
              <h2 className="text-2xl font-semibold text-black">
                Information we collect
              </h2>
              <p className="mt-3">
                We collect the information you choose to provide through our
                project enquiry form, email, telephone or WhatsApp, including
                your name, work contact details, company and project
                information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">
                How we use it
              </h2>
              <p className="mt-3">
                We use enquiry information to assess your request, respond to
                you, prepare project discussions and protect the website from
                misuse. We do not sell personal information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">
                Service providers and retention
              </h2>
              <p className="mt-3">
                Information may be processed by the hosting, email and
                communications services required to operate this website. We
                retain it only for as long as reasonably needed for the enquiry,
                our records and applicable legal obligations.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-black">
                Your questions
              </h2>
              <p className="mt-3">
                To ask about your information or request a correction or
                deletion, email{" "}
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
