import { FAQS } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function FAQSection() {
  return (
    <section id="faq" className="section-shell bg-black py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions executives ask before an operations review."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border border-white/[0.08] bg-white/[0.03] p-5 open:bg-[#111111]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {faq.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition group-open:rotate-45 group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
