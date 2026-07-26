import { FaWhatsapp } from "react-icons/fa6";
import { COMPANY } from "@/lib/constants";
import Container from "./Container";
import ProjectEnquiryForm from "./ProjectEnquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-black text-white">
      <Container className="border-x border-white/15 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Start a project
            </p>
            <h2 className="mt-7 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              Let&apos;s engineer a better way for your business to operate.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              Tell us about the challenge, workflow, customer experience or
              business process you want to improve. Our engineering team will
              assess it and recommend a practical AI or software system.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#project-enquiry"
                className="inline-flex min-h-12 items-center justify-center bg-white px-5 text-sm font-bold text-black"
              >
                Discuss your project
              </a>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-5 text-sm font-bold text-[#071b11]"
              >
                <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 border-t border-white/15">
              <div className="border-b border-white/15 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  Project enquiry
                </p>
                <a
                  className="mt-2 inline-flex font-semibold underline underline-offset-4"
                  href={COMPANY.emailHref}
                >
                  {COMPANY.email}
                </a>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                  Send an overview of your business problem, current process and
                  expected outcome.
                </p>
              </div>

              <div className="border-b border-white/15 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  WhatsApp or phone
                </p>
                <a
                  className="mt-2 inline-flex font-semibold underline underline-offset-4"
                  href={COMPANY.phoneHref}
                >
                  {COMPANY.phone}
                </a>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                  Speak directly with our team about your project, automation
                  opportunity or AI system.
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  Location
                </p>
                <p className="mt-2 font-semibold">{COMPANY.location}</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                  We work with businesses in Nigeria and across Africa, with
                  remote delivery available for suitable projects.
                </p>
              </div>
            </div>
          </div>

          <ProjectEnquiryForm />
        </div>
      </Container>
    </section>
  );
}
