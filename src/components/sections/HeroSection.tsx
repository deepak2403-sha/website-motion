"use client";
import React from "react";
import { motion } from "farmer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { use3DTilt } from "@/hooks/use3DTilt";

// Each word keeps whitespace-nowrap so letters never break mid-word
const nameWords = ["Deepak", "Sharma"];
const wordStartIdx = nameWords.map((_, i) => nameWords.slice(0, i).join("").length);

const orbData = [
  { size: 420, x: "-2%", y: "5%",  color: "rgba(37,99,235,0.22)",  dur: 9,  delay: 0,   my: -60, mx: 32 },
  { size: 320, x: "62%", y: "2%",  color: "rgba(139,92,246,0.18)", dur: 11, delay: 1.3, my: -40, mx: -26 },
  { size: 260, x: "76%", y: "45%", color: "rgba(6,182,212,0.16)",  dur: 8,  delay: 2.5, my: -30, mx: 22 },
  { size: 370, x: "16%", y: "60%", color: "rgba(37,99,235,0.14)",  dur: 10, delay: 0.7, my: -48, mx: -34 },
];

// Tilted rings that spin on Z-axis → look like 3D orbital paths
const ringData = [
  { size: 480, rx: 72, dur: 22, color: "rgba(37,99,235,0.22)",  glow: "rgba(37,99,235,0.08)",  delay: 0   },
  { size: 310, rx: 68, dur: 16, color: "rgba(139,92,246,0.20)", glow: "rgba(139,92,246,0.06)", delay: -5  },
  { size: 640, rx: 78, dur: 30, color: "rgba(6,182,212,0.14)",  glow: "rgba(6,182,212,0.05)",  delay: -10 },
  { size: 390, rx: 65, dur: 19, color: "rgba(99,102,241,0.18)", glow: "rgba(99,102,241,0.06)", delay: -7  },
];

const FloatingBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* Ambient glow blobs */}
    {orbData.map((orb, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{ y: [0, orb.my, 0], x: [0, orb.mx, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
      />
    ))}

    {/* 3D spinning orbital rings — tilted circles that spin on Z */}
    <div className="absolute inset-0 flex items-start justify-center" style={{ paddingTop: "5%" }}>
      {ringData.map((ring, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            width: ring.size,
            height: ring.size,
            border: `1px solid ${ring.color}`,
            boxShadow: `0 0 18px ${ring.glow}`,
            transformPerspective: 900,
            rotateX: ring.rx,
          }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.delay }}
        />
      ))}
    </div>

    {/* Micro floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full"
        style={{
          width: i % 4 === 0 ? 3 : 2,
          height: i % 4 === 0 ? 3 : 2,
          left: `${8 + (i * 4.7) % 84}%`,
          top: `${12 + (i * 7.3) % 76}%`,
          background: i % 2 === 0 ? "rgba(59,130,246,0.7)" : "rgba(139,92,246,0.6)",
        }}
        animate={{ y: [0, -(22 + (i % 5) * 14), 0], opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1] }}
        transition={{ duration: 2.8 + (i % 5) * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.21 }}
      />
    ))}
  </div>
);

const TerminalMockup = () => (
  <div className="w-full h-full bg-zinc-950 rounded-xl p-4 md:p-6 font-mono text-sm overflow-hidden">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-3 text-zinc-500 text-xs">deepak@juspay ~ profile.ts</span>
    </div>
    <div className="space-y-1 text-xs md:text-sm leading-relaxed">
      <div className="text-zinc-500">{`// Software Engineer Profile`}</div>
      <div>
        <span className="text-blue-400">const</span>{" "}
        <span className="text-green-400">engineer</span>{" "}
        <span className="text-zinc-300">= {"{"}</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">name</span>
        <span className="text-zinc-300">: </span>
        <span className="text-amber-300">&quot;Deepak Sharma&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">role</span>
        <span className="text-zinc-300">: </span>
        <span className="text-amber-300">&quot;Software Development Engineer&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">company</span>
        <span className="text-zinc-300">: </span>
        <span className="text-amber-300">&quot;Juspay&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">experience</span>
        <span className="text-zinc-300">: </span>
        <span className="text-orange-400">3</span>
        <span className="text-zinc-300">, </span>
        <span className="text-zinc-500">{`// years`}</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">stack</span>
        <span className="text-zinc-300">: [</span>
        <span className="text-amber-300">&quot;Node.js&quot;</span>
        <span className="text-zinc-300">, </span>
        <span className="text-amber-300">&quot;Java&quot;</span>
        <span className="text-zinc-300">, </span>
        <span className="text-amber-300">&quot;Kafka&quot;</span>
        <span className="text-zinc-300">],</span>
      </div>
      <div className="pl-4">
        <span className="text-purple-400">specialties</span>
        <span className="text-zinc-300">: [</span>
      </div>
      <div className="pl-8">
        <span className="text-amber-300">&quot;Distributed Systems&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-8">
        <span className="text-amber-300">&quot;PCI-DSS / Fintech&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-8">
        <span className="text-amber-300">&quot;LLM Tooling &amp; RAG&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-4"><span className="text-zinc-300">],</span></div>
      <div className="pl-4">
        <span className="text-purple-400">impact</span>
        <span className="text-zinc-300">: {"{"}</span>
      </div>
      <div className="pl-8">
        <span className="text-purple-400">prReviewTime</span>
        <span className="text-zinc-300">: </span>
        <span className="text-amber-300">&quot;4h → 2h&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-8">
        <span className="text-purple-400">costSaved</span>
        <span className="text-zinc-300">: </span>
        <span className="text-amber-300">&quot;$30K/year&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-8">
        <span className="text-purple-400">throughput</span>
        <span className="text-amber-300">&quot;3x&quot;</span>
        <span className="text-zinc-300">,</span>
      </div>
      <div className="pl-4"><span className="text-zinc-300">{"}"}</span></div>
      <div><span className="text-zinc-300">{"}"}</span></div>
      <div className="mt-2 flex items-center gap-1">
        <span className="text-green-400">▶</span>
        <span className="text-zinc-400"> Ready for next challenge</span>
        <span className="animate-pulse text-green-400">_</span>
      </div>
    </div>
  </div>
);

const TiltTerminal = () => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(14);
  return (
    <div style={{ perspective: "800px" }} className="w-full h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="w-full h-full"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <TerminalMockup />
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden">
      <FloatingBackground />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Central radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            {/* Badge — 3D flip-in from depth */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 55 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.55, type: "spring", stiffness: 220, damping: 22 }}
              style={{ transformPerspective: 500 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Open to SDE-2 opportunities
            </motion.div>

            {/* Name — letter 3D tumble, grouped by word (no mid-word wrap) */}
            <h1 className="text-[clamp(2.8rem,8.5vw,7rem)] leading-[1.0] font-extrabold text-white tracking-tight">
              {nameWords.map((word, wi) => (
                <React.Fragment key={word}>
                  {wi > 0 && " "}
                  <span className="inline-block whitespace-nowrap">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        initial={{ opacity: 0, y: 60, rotateX: -80 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.08 + (wordStartIdx[wi] + ci) * 0.045,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ display: "inline-block", transformPerspective: 280 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </React.Fragment>
              ))}
            </h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="text-lg md:text-2xl text-zinc-400 font-light"
            >
              Engineer building{" "}
              <AnimatedTextCycle
                words={[
                  "Distributed Systems",
                  "Fintech Infrastructure",
                  "LLM Tooling",
                  "RAG Pipelines",
                  "Payment Gateways",
                  "Developer Tools",
                ]}
                interval={2800}
                className="text-blue-400"
              />{" "}
              <span className="text-zinc-500">@</span>{" "}
              <span className="text-white font-medium">Juspay</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="max-w-2xl mx-auto text-zinc-500 text-base md:text-lg leading-relaxed"
            >
              Building mission-critical fintech infrastructure — distributed systems,
              PCI-DSS compliance, and LLM-powered developer tooling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.92 }}
              className="flex items-center justify-center gap-4 pt-2"
            >
              <motion.a
                href="mailto:dsharma04724@gmail.com"
                aria-label="Email Deepak"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </motion.a>
              <motion.a
                href="https://github.com/dsharma04724"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/deepak-sharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex items-center justify-center gap-2 text-zinc-600 text-xs pt-4"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              Scroll to explore
            </motion.div>
          </div>
        }
      >
        <TiltTerminal />
      </ContainerScroll>
    </section>
  );
};
