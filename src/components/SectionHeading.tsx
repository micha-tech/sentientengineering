export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`${tone === "dark" ? "dark-eyebrow" : "eyebrow"} mb-4`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl ${tone === "dark" ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${tone === "dark" ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
