import Container from "./Container";
import ImagePanel from "./ImagePanel";

export default function PositioningSection() {
  return (
    <section className="section-shell bg-background py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">
              Category
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold text-navy sm:text-5xl lg:text-6xl">
              Operations Engineering.
              <br />
              <span className="text-muted">Not a software company.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              We are not a software development agency. We are not an AI
              consultancy. We are not a cloud provider. Those are tools, not
              outcomes.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Sentient Engineering is an <strong className="text-navy">operations engineering firm</strong>.
              We help organizations engineer business systems that reduce
              friction, improve efficiency, and accelerate growth. Technology
              follows process. Performance is the product.
            </p>
          </div>
          <ImagePanel
            src="/images/operations-review.png"
            alt="Empty dark boardroom with monochrome operational dashboards"
            caption="Operational performance review"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
