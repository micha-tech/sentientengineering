import Container from "./Container";

export default function PositioningSection() {
  return (
    <section className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
            Positioning
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Most businesses do not have a technology problem. They have an
            operations problem.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            New tools rarely fix unclear ownership, slow approvals, duplicated
            work, missing data, or fragile workflows. Sentient Engineering
            starts with the operating model, then engineers the systems required
            to make performance visible, measurable, and repeatable.
          </p>
        </div>
      </Container>
    </section>
  );
}
