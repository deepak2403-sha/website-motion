"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { Zap, Users, Shield, Brain } from "lucide-react";
import { use3DTilt } from "@/hooks/use3DTilt";

const stats = [
  { value: "3+", label: "Years at Juspay", icon: Zap },
  { value: "300+", label: "PRs Processed by AI Agent", icon: Brain },
  { value: "100+", label: "Merchants Onboarded", icon: Users },
  { value: "60%", label: "Ops Overhead Reduced", icon: Shield },
];

const highlights = [
  { label: "Distributed Systems", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { label: "PCI-DSS / EMV", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { label: "LLM Tooling", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  { label: "Event-Driven Architecture", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { label: "High Availability", color: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
  { label: "RAG Pipelines", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
];

type StatItem = typeof stats[0];

const Stat3DCard = ({
  stat,
  delay,
  isInView,
}: {
  stat: StatItem;
  delay: number;
  isInView: boolean;
}) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(12);
  const Icon = stat.icon;

  return (
    <div style={{ perspective: "800px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40, scale: 0.88 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.55, delay, type: "spring", stiffness: 220, damping: 22 }}
        style={{ rotateX, rotateY }}
        className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/40 hover:bg-zinc-900 transition-colors duration-300 cursor-default"
      >
        <Icon className="w-5 h-5 text-blue-400 mb-3" />
        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-zinc-500 text-sm leading-snug">{stat.label}</div>
      </motion.div>
    </div>
  );
};

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="w-8 h-px bg-blue-500"
          />
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
              style={{ transformPerspective: 600 }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Building reliable systems that{" "}
              <span className="text-blue-400">scale under pressure</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              I&apos;m a Software Development Engineer at Juspay, where I architect and
              ship mission-critical fintech infrastructure used by millions. My work spans
              payment security protocols (HSM, TR-31, EMV), distributed event-driven
              frameworks, and org-wide AI tooling.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              I pioneered LLM-based developer tooling — from automated PR review agents to
              RAG-powered codebase assistants — and deployed open-source AI infrastructure
              adopted by 20+ engineers across 4 teams, saving $30K/year.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {highlights.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.06, type: "spring", stiffness: 300, damping: 22 }}
                  className={`px-3 py-1 rounded-full border text-xs font-medium ${h.color}`}
                >
                  {h.label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D tilt stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Stat3DCard
                key={stat.label}
                stat={stat}
                delay={0.2 + i * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
