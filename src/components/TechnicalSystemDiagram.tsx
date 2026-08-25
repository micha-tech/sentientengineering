type DiagramVariant = "system" | "signal" | "collaboration";

type TechnicalSystemDiagramProps = {
  variant?: DiagramVariant;
  className?: string;
  label?: string;
};

const diagramCopy: Record<
  DiagramVariant,
  {
    eyebrow: string;
    title: string;
    nodes: readonly [string, string, string, string];
  }
> = {
  system: {
    eyebrow: "Complete system architecture",
    title: "Evidence becomes an operating decision.",
    nodes: ["Business + physical world", "Data + signals", "Models + software", "Human + system action"],
  },
  signal: {
    eyebrow: "Signal intelligence",
    title: "Measure. Transform. Interpret. Act.",
    nodes: ["Sensors", "Time domain", "FFT / STFT", "Condition decision"],
  },
  collaboration: {
    eyebrow: "Shared intelligence",
    title: "Conversation becomes durable knowledge.",
    nodes: ["Video + voice", "Live collaboration", "Speaker-aware AI", "Searchable knowledge"],
  },
};

export default function TechnicalSystemDiagram({
  variant = "system",
  className = "",
  label,
}: TechnicalSystemDiagramProps) {
  const copy = diagramCopy[variant];

  return (
    <figure
      className={`technical-diagram relative isolate overflow-hidden border border-white/15 bg-[#0b0b0b] p-5 text-white sm:p-8 ${className}`}
      aria-label={label ?? copy.title}
    >
      <div className="absolute inset-0 technical-grid opacity-45" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#83a8ff]">
            {copy.eyebrow}
          </p>
          <span className="h-2 w-2 rounded-full bg-[#83a8ff] shadow-[0_0_18px_#83a8ff]" />
        </div>

        <div className="relative mt-10 h-[22rem] min-w-0 sm:h-[28rem]">
          <svg
            viewBox="0 0 700 500"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label={copy.title}
          >
            <defs>
              <linearGradient id={`line-${variant}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#83a8ff" stopOpacity="0.3" />
                <stop offset="0.5" stopColor="#83a8ff" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.4" />
              </linearGradient>
              <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M76 250 C170 250 170 112 270 112 S370 250 454 250 S530 390 630 390"
              fill="none"
              stroke={`url(#line-${variant})`}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="motion-safe:animate-[diagram-dash_12s_linear_infinite]"
            />
            <path
              d="M76 250 C185 250 174 390 270 390 S366 250 454 250 S540 112 630 112"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />

            {[
              [76, 250],
              [270, 112],
              [454, 250],
              [630, 390],
            ].map(([x, y], index) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="30" fill="#0b0b0b" stroke="#ffffff" strokeOpacity="0.22" />
                <circle
                  cx={x}
                  cy={y}
                  r={index === 2 ? 8 : 5}
                  fill={index === 2 ? "#83a8ff" : "#ffffff"}
                  fillOpacity={index === 2 ? 1 : 0.85}
                  filter={index === 2 ? `url(#glow-${variant})` : undefined}
                />
                <circle cx={x} cy={y} r="44" fill="none" stroke="#83a8ff" strokeOpacity="0.12" />
              </g>
            ))}

            {variant === "signal" ? (
              <path
                d="M70 322 L95 322 L108 298 L120 350 L134 277 L149 330 L166 314 L186 322 L208 322"
                fill="none"
                stroke="#83a8ff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : null}
          </svg>

          <div className="absolute inset-0">
            <div className="absolute left-[2%] top-[43%] w-36 -translate-y-full">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/35">01 · Input</p>
              <p className="mt-2 text-sm font-semibold leading-5">{copy.nodes[0]}</p>
            </div>
            <div className="absolute left-[27%] top-[4%] w-36">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/35">02 · Acquire</p>
              <p className="mt-2 text-sm font-semibold leading-5">{copy.nodes[1]}</p>
            </div>
            <div className="absolute left-[58%] top-[43%] w-36 -translate-y-full">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#83a8ff]">03 · Interpret</p>
              <p className="mt-2 text-sm font-semibold leading-5">{copy.nodes[2]}</p>
            </div>
            <div className="absolute bottom-[2%] right-[1%] w-40">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/35">04 · Operate</p>
              <p className="mt-2 text-sm font-semibold leading-5">{copy.nodes[3]}</p>
            </div>
          </div>
        </div>

        <figcaption className="border-t border-white/15 pt-5 text-xs leading-6 text-white/45">
          {copy.title}
        </figcaption>
      </div>
    </figure>
  );
}
