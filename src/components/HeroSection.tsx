"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

function OperationalSystemVisual() {
  const nodes = [
    { x: 16, y: 22, label: "Intake" },
    { x: 38, y: 22, label: "Review" },
    { x: 62, y: 22, label: "Approve" },
    { x: 84, y: 22, label: "Deliver" },
    { x: 25, y: 58, label: "Data" },
    { x: 50, y: 58, label: "Control" },
    { x: 75, y: 58, label: "Report" },
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 5],
    [5, 6],
    [6, 3],
    [1, 5],
    [2, 5],
  ];

  return (
    <div className="premium-card relative overflow-hidden rounded-[1.75rem] p-4 sm:p-6">
      <div className="absolute inset-0 hairline-grid opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl" />
      <div className="relative sm:hidden">
        <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/workflow-map.png"
            alt="Monochrome operational workflow map arranged on a dark desk"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/[0.08] bg-black/55 px-3 py-2 backdrop-blur-md">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              Operational Flow
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          {["Observe", "Diagnose", "Engineer", "Optimize"].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/45 px-4 py-3"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-medium text-black">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-white">{step}</span>
              <span className="ml-auto h-px w-10 bg-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
      <svg
        viewBox="0 0 100 78"
        className="relative hidden h-auto w-full sm:block"
        role="img"
        aria-label="Animated operational system diagram"
      >
        <defs>
          <filter id="monoGlow">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map(([from, to], index) => (
          <motion.line
            key={`${from}-${to}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="0.45"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.08, duration: 0.8, ease: "easeOut" }}
          />
        ))}
        {nodes.map((node, index) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5.8"
              fill="#111111"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="0.7"
              filter="url(#monoGlow)"
              animate={{ opacity: [0.78, 1, 0.78] }}
              transition={{ delay: index * 0.15, duration: 3, repeat: Infinity }}
            />
            <circle cx={node.x} cy={node.y} r="1.35" fill="white" opacity="0.85" />
            <text
              x={node.x}
              y={node.y + 12}
              textAnchor="middle"
              fill="rgba(255,255,255,0.58)"
              fontSize="3"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
        <motion.rect
          x="33"
          y="36"
          width="34"
          height="15"
          rx="3"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.14)"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        />
        <motion.text
          x="50"
          y="45.5"
          textAnchor="middle"
          fill="white"
          fontSize="3.8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.5 }}
        >
          OPERATING SYSTEM
        </motion.text>
      </svg>
      <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.08] pt-4 text-center sm:grid sm:grid-cols-3 sm:gap-2">
        {["Cost", "Throughput", "Visibility"].map((metric) => (
          <div key={metric} className="flex-1 rounded-2xl bg-white/[0.035] px-2 py-2 sm:py-3 min-w-[80px]">
            <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px] sm:tracking-[0.22em]">
              {metric}
            </p>
            <p className="mt-0.5 text-xs font-medium text-white sm:mt-1 sm:text-sm">Measured</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-28 sm:pt-32 lg:min-h-screen lg:pt-36">
        <div className="absolute inset-0 -z-10 hairline-grid opacity-70" />
        <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
        <Container className="pb-20 sm:pb-28 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                Operations Engineering
              </div>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Engineering Better Operations.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                We help organizations improve operational performance through
                intelligent systems, automation, and disciplined process design.
                Lower operating costs. Faster execution. Better visibility.
                Reduced risk.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#audit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Book an Operations Audit
                </a>
                <a
                  href="#audit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                >
                  Discuss Your Challenge
                </a>
              </div>
              <p className="mt-8 max-w-xl border-l border-white/15 pl-4 text-sm leading-6 text-zinc-500">
                <span className="text-zinc-300">Technology is not the goal.</span>{" "}
                Operational performance is.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
            >
              <OperationalSystemVisual />
            </motion.div>
          </div>
        </Container>
    </section>
  );
}
