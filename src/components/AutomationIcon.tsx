type IconName =
  | "arrow"
  | "audit"
  | "bell"
  | "bot"
  | "briefcase"
  | "chart"
  | "check"
  | "clock"
  | "cloud"
  | "code"
  | "coins"
  | "database"
  | "headset"
  | "layers"
  | "mail"
  | "message"
  | "people"
  | "pulse"
  | "sales"
  | "shield"
  | "spark"
  | "target"
  | "workflow";

export default function AutomationIcon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" {...common} /><path d="m14 7 5 5-5 5" {...common} /></>,
    audit: <><path d="M9 5H5v14h14v-4" {...common} /><path d="m13 11 7-7" {...common} /><path d="M15 4h5v5" {...common} /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" {...common} /><path d="M10 21h4" {...common} /></>,
    bot: <><rect x="4" y="7" width="16" height="13" rx="4" {...common} /><path d="M12 3v4M8 12h.01M16 12h.01M8.5 16h7" {...common} /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" {...common} /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" {...common} /></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" {...common} /></>,
    check: <path d="m5 12 4 4L19 6" {...common} />,
    clock: <><circle cx="12" cy="12" r="9" {...common} /><path d="M12 7v5l3 2" {...common} /></>,
    cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 8.8 4.5 4.5 0 0 0 7 18Z" {...common} />,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" {...common} /></>,
    coins: <><ellipse cx="12" cy="6" rx="7" ry="3" {...common} /><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" {...common} /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" {...common} /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" {...common} /></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" {...common} /><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2ZM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v2c0 2-2 3-4 3h-2" {...common} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" {...common} /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...common} /><path d="m3 7 9 6 9-6" {...common} /></>,
    message: <path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4-.9L3 21l1.8-4.3A8 8 0 1 1 21 12Z" {...common} />,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" {...common} /><circle cx="9" cy="7" r="4" {...common} /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" {...common} /></>,
    pulse: <><path d="M3 12h4l2-6 4 12 2-6h6" {...common} /></>,
    sales: <><path d="M4 19V5M4 19h16" {...common} /><path d="m7 15 4-4 3 2 5-6" {...common} /><path d="M16 7h3v3" {...common} /></>,
    shield: <path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z" {...common} />,
    spark: <><path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3L12 3Z" {...common} /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" {...common} /></>,
    target: <><circle cx="12" cy="12" r="9" {...common} /><circle cx="12" cy="12" r="5" {...common} /><circle cx="12" cy="12" r="1" fill="currentColor" /></>,
    workflow: <><rect x="3" y="4" width="6" height="5" rx="1" {...common} /><rect x="15" y="15" width="6" height="5" rx="1" {...common} /><path d="M9 6.5h4a3 3 0 0 1 3 3V15M15 17.5h-4a3 3 0 0 1-3-3V9" {...common} /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {paths[name]}
    </svg>
  );
}

