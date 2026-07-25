import Image from "next/image";
import Link from "next/link";
import {
  businessOutcomes,
  industries,
  managedAiCapabilities,
  products,
  services,
  workSteps,
} from "@/lib/site-data";
import CapabilitiesCarousel from "./CapabilitiesCarousel";
import ContactSection from "./ContactSection";
import Container from "./Container";

const featuredServices = [
  {
    ...services[1],
    kicker: "Business workflows",
    image: "/images/ai-assistant.jpg",
    imageAlt: "AI assistant supporting connected business workflows",
  },
  {
    ...services[2],
    kicker: "Physical operations",
    image: "/images/computer-vision-detection.webp",
    imageAlt: "Computer vision system detecting activity in a physical environment",
  },
  {
    ...services[6],
    kicker: "Operational intelligence",
    image: "/images/industry-manufacturing.png",
    imageAlt: "Intelligent manufacturing operation with connected robotics",
  },
] as const;

export default function IntelligentSystemsSections() {
  const gyptiq = products[0];

  return (
    <>
      <section id="about" className="scroll-mt-20 bg-[#f6f6f1]">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            Our mission
          </p>
          <h2 className="mt-8 max-w-6xl text-balance text-3xl font-medium leading-[1.13] tracking-[-0.04em] text-black sm:text-5xl lg:text-[4rem]">
            We build intelligent systems that help businesses operate faster,
            see clearly, and make better decisions.
          </h2>
          <div className="mt-14 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[1fr_0.7fr]">
            <p className="max-w-2xl text-lg leading-8 text-black/70">
              Sentient Engineering combines AI, software, automation, and data
              infrastructure to solve practical commercial and industrial
              problems.
            </p>
            <p className="max-w-xl text-sm leading-7 text-black/55 lg:justify-self-end">
              We engineer complete production systems—not isolated models or
              abstract demonstrations. Every engagement begins with the
              operating problem and the value it should create.
            </p>
          </div>

          <figure className="relative mt-16 aspect-[16/9] overflow-hidden bg-neutral-200 sm:aspect-[16/7]">
            <Image
              src="/images/industry-manufacturing.png"
              alt="Smart manufacturing facility showing applied AI in a real operation"
              fill
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
            <figcaption className="absolute bottom-0 left-0 bg-black px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white">
              Applied AI · Engineered for reality
            </figcaption>
          </figure>
        </Container>
      </section>

      <section id="services" className="scroll-mt-20 bg-black text-white">
        <Container className="border-x border-white/15 px-0">
          <div className="grid min-h-[26rem] lg:grid-cols-[1fr_0.78fr]">
            <div className="flex flex-col justify-between border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Applied AI systems
              </p>
              <div className="mt-20">
                <h2 className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                  Built around the work your business actually needs done.
                </h2>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-4 text-sm font-bold"
                >
                  Explore all services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <figure className="relative min-h-[22rem] bg-[#0d0d0d]">
              <Image
                src="/images/computer-vision-hud.webp"
                alt="Applied AI computer vision interface"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />
            </figure>
          </div>

          <div className="bg-[#f6f6f1] text-black">
            {featuredServices.map((service, index) => (
              <article
                key={service.id}
                className="grid border-t border-black/10 lg:grid-cols-2"
              >
                <div
                  className={`flex min-h-[28rem] flex-col justify-between p-6 sm:p-10 ${
                    index % 2 === 1 ? "lg:order-2 lg:border-l" : "lg:border-r"
                  } border-black/10`}
                >
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/45">
                      {service.kicker}
                    </p>
                    <span className="text-xs font-bold text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-20">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-black/60">
                      {service.summary}
                    </p>
                    <div className="mt-8 grid grid-cols-2 border-y border-black/10">
                      {service.outcomes.slice(0, 2).map((outcome) => (
                        <p
                          key={outcome}
                          className="border-r border-black/10 py-4 pr-4 text-xs font-semibold uppercase leading-5 tracking-[0.08em] last:border-r-0 last:pl-4"
                        >
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <figure
                  className={`relative min-h-[24rem] bg-neutral-200 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="products" className="scroll-mt-20 bg-black text-white">
        <Container className="border-x border-white/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Product
              </p>
              <p className="mt-4 text-lg font-semibold">{gyptiq.name}</p>
            </div>
            <h2 className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              An intelligent business companion connecting conversations,
              sales, and operations.
            </h2>
          </div>

          <article className="mt-14 grid border border-white/15 lg:grid-cols-[1.25fr_0.75fr]">
            <figure className="relative min-h-[23rem] border-b border-white/15 bg-[#0b0f0c] sm:min-h-[34rem] lg:border-b-0 lg:border-r">
              <Image
                src="/images/gyptiq-announcement.png"
                alt="Gyptiq intelligent business companion"
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col justify-between p-6 sm:p-9">
              <p className="text-sm leading-7 text-white/60">
                {gyptiq.description}
              </p>
              <div className="mt-12">
                <div className="border-y border-white/15">
                  {gyptiq.outcomes.map((outcome, index) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-4 border-b border-white/15 py-4 last:border-b-0"
                    >
                      <span className="text-[0.65rem] font-bold text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold">{outcome}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-between bg-white px-5 text-sm font-bold text-black"
                >
                  Explore Gyptiq <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-[#f6f6f1] text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Business outcomes
            </p>
            <h2 className="max-w-5xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              AI should create measurable movement in revenue, cost, risk, or
              capacity.
            </h2>
          </div>

          <div className="mt-14 grid border-t border-black/15 md:grid-cols-2 lg:grid-cols-3">
            {businessOutcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                className={`min-h-64 border-b border-black/15 p-6 sm:p-8 ${
                  index % 3 !== 2 ? "lg:border-r" : ""
                } ${index % 2 === 0 ? "md:border-r lg:border-r" : "md:border-r-0"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/45">
                    {outcome.driver}
                  </p>
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/55">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="industries" className="scroll-mt-20 bg-white text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="flex flex-col gap-8 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Industries
              </p>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Engineered for the real world.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/55">
              Systems shaped around the workflow, constraints, risk, and
              operating conditions of each environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className={`border-b border-black/10 py-8 ${
                  index % 2 === 0
                    ? "md:border-r md:pr-8"
                    : "md:pl-8"
                }`}
              >
                <figure className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />
                  <span className="absolute left-4 top-4 bg-black px-3 py-2 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figure>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                  {industry.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-black/55">
                  {industry.examples}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-20 bg-[#ededE7] text-black"
      >
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Engineering capabilities
            </p>
            <h2 className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl">
              Every layer required to move from possibility to production.
            </h2>
          </div>
          <CapabilitiesCarousel />
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                How we work
              </p>
              <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                From business problem to production system.
              </h2>
            </div>
            <ol className="border-t border-black/15">
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 border-b border-black/15 py-6 sm:grid-cols-[3rem_0.55fr_1.45fr]"
                >
                  <span className="text-xs font-bold text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm leading-7 text-black/55">{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 grid border-t border-black/15 pt-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Managed AI
              </p>
              <h2 className="mt-6 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em]">
                Deployment is only the beginning.
              </h2>
            </div>
            <div className="mt-10 grid border-t border-black/10 sm:grid-cols-2 lg:mt-0">
              {managedAiCapabilities.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-28 items-start gap-4 border-b border-black/10 p-5 sm:border-r"
                >
                  <span className="text-xs font-bold text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
