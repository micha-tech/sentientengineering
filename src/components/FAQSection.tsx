import { FAQS } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function FAQSection() {
  return (
    <section id="faq" className="section-shell bg-background py-16 sm:py-24">
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
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-cyan/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-navy">
                {faq.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 text-navy transition group-open:rotate-45 group-open:border-cyan group-open:bg-cyan group-open:text-navy">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
