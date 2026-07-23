import Image from "next/image";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#06191d] pt-20 text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#06191d]/78" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#06191d_0%,rgba(6,25,29,0.94)_48%,rgba(6,25,29,0.55)_100%)]" />
      <Container className="relative z-10">
        <div className="flex min-h-[32rem] items-end py-16 sm:min-h-[38rem] sm:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd3bf]">
              {eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {copy}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
