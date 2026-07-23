export default function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-[#8fd3bf]" : "text-[#2f7d44]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.08] sm:text-5xl ${
          light ? "text-white" : "text-[#071b20]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
