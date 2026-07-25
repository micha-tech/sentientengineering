import { COMPANY } from "@/lib/constants";
import Container from "./Container";
import ProjectEnquiryForm from "./ProjectEnquiryForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-black text-white"
    >
      <Container className="border-x border-white/15 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Start with the problem
            </p>
            <h2 className="mt-7 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              What should work better in your business?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              Tell us where you are losing time, visibility, revenue, or
              reliability. We will help define the system and the value case.
            </p>
            </div>
            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                Direct enquiry
              </p>
              <a
                className="mt-3 inline-flex text-base font-semibold text-white underline underline-offset-4"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <ProjectEnquiryForm />
        </div>
      </Container>
    </section>
  );
}
