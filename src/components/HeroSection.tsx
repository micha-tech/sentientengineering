"use client";

import { motion } from "framer-motion";
import Container from "./Container";

function SystemsVisual() {
  const leftNodes = [
    { x: 15, y: 20, label: "Manual", size: 6 },
    { x: 5, y: 45, label: "Siloed", size: 5 },
    { x: 18, y: 65, label: "Slow", size: 4 },
    { x: 10, y: 82, label: "Chaotic", size: 5 },
  ];

  const rightNodes = [
    { x: 82, y: 20, label: "Automated", size: 6 },
    { x: 92, y: 45, label: "Connected", size: 5 },
    { x: 80, y: 65, label: "Efficient", size: 4 },
    { x: 88, y: 82, label: "Structured", size: 5 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {leftNodes.map((node, i) => (
            <motion.circle
              key={`left-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="#1E293B"
              stroke="#475569"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
            />
          ))}
          {rightNodes.map((node, i) => (
            <motion.circle
              key={`right-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="#2563EB"
              stroke="#38BDF8"
              strokeWidth="0.5"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
            />
          ))}
        </motion.g>

        {leftNodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={`left-line-${i}`}
            x1={node.x}
            y1={node.y}
            x2={leftNodes[i + 1].x}
            y2={leftNodes[i + 1].y}
            stroke="#334155"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
          />
        ))}

        {rightNodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={`right-line-${i}`}
            x1={node.x}
            y1={node.y}
            x2={rightNodes[i + 1].x}
            y2={rightNodes[i + 1].y}
            stroke="#2563EB"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ delay: 2 + i * 0.15, duration: 0.6 }}
          />
        ))}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {leftNodes.map((node, i) => (
            <text
              key={`left-label-${i}`}
              x={node.x - 2}
              y={node.y + 2}
              textAnchor="end"
              fill="#64748B"
              fontSize="3.5"
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          ))}
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {rightNodes.map((node, i) => (
            <text
              key={`right-label-${i}`}
              x={node.x + 2}
              y={node.y + 2}
              textAnchor="start"
              fill="#38BDF8"
              fontSize="3.5"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {node.label}
            </text>
          ))}
        </motion.g>

        <motion.path
          d="M 30 20 Q 50 15 70 20"
          fill="none"
          stroke="url(#lineGrad1)"
          strokeWidth="0.8"
          strokeDasharray="1 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 2.8, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 28 45 Q 50 40 72 45"
          fill="none"
          stroke="url(#lineGrad2)"
          strokeWidth="0.8"
          strokeDasharray="1 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 3.2, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 30 65 Q 50 60 70 65"
          fill="none"
          stroke="url(#lineGrad1)"
          strokeWidth="0.8"
          strokeDasharray="1 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 3.6, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 28 82 Q 50 78 72 82"
          fill="none"
          stroke="url(#lineGrad2)"
          strokeWidth="0.8"
          strokeDasharray="1 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 4, duration: 1.5, ease: "easeInOut" }}
        />

        <motion.text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#2563EB"
          fontSize="5"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
        >
          ENGINEER
        </motion.text>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`node-${i}`}
              cx={35 + i * 15}
              cy={92}
              r="1.5"
              fill="#38BDF8"
              opacity="0.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-highlight/5 rounded-full blur-[100px]" />

      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                Operations Engineering Company
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
              Engineering Better{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                Operations
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-[#CBD5E1] leading-relaxed max-w-xl mb-8">
              We help organizations identify operational inefficiencies, quantify
              their impact, and implement intelligent systems that reduce costs,
              improve productivity, and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-blue-700 transition-all shadow-lg shadow-accent/25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Book an Operations Audit
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 text-[#CBD5E1] font-medium text-sm hover:bg-white/5 hover:text-[#F8FAFC] transition-all"
              >
                Discuss Your Challenge
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#64748B]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>
                <span className="text-[#CBD5E1] font-medium">Technology is not the goal.</span>{" "}
                Operational performance is.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-highlight/10 rounded-2xl blur-xl" />
              <div className="relative bg-[#0F172A]/80 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                <SystemsVisual />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
