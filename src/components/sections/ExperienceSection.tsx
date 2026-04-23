"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Juspay",
    role: "Software Development Engineer",
    period: "Aug 2022 – Present",
    location: "Bangalore, India",
    current: true,
    highlights: [
      "Pioneered LLM-based AI agents for automated code review — cutting review time from 4h to 2h, processing 300+ PRs with 50% less manual effort.",
      "Architected org-wide generative AI infra (Ollama) adopted by 20+ engineers across 4 teams — saving $30K/year and reclaiming 3 hrs/week per engineer.",
      "Built PCI-DSS compliant microservices for HSM cryptographic key injection — TR-31 key-block exchange, automated rotation, end-to-end injection for card-present transactions.",
      "Led NFC-based Tap2Pay SDK with EMV-compliant tokenization across Android POS and 5+ mobile platforms.",
      "Designed distributed event-driven automation framework — 60% ops overhead reduction, 3x throughput, 100+ merchants onboarded.",
      "Led Fraud Risk Management platform with 5+ gateway integrations — 15% improvement in authorization rates.",
      "Owned auth redesign for India's CBDC e-Rupee application — 100% RBI regulatory adherence.",
    ],
    tags: ["Node.js", "Java", "Kafka", "PCI-DSS", "LLM", "Microservices"],
  },
  {
    company: "App Deployer",
    role: "Backend Software Developer Intern",
    period: "Nov 2021 – Feb 2022",
    location: "New Delhi, India",
    current: false,
    highlights: [
      "Designed and documented RESTful APIs for a US-based transport platform serving 20+ clients — Node.js, MongoDB, MySQL with 99.99% uptime.",
      "Re-architected Shopify & WooCommerce integrations — 50% faster onboarding, latency cut from 800ms to 480ms.",
    ],
    tags: ["Node.js", "MongoDB", "MySQL", "REST APIs"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="relative py-24 md:py-32 bg-zinc-900">
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
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: -18 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
          style={{ transformPerspective: 600 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Where I&apos;ve worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-800"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50, rotateY: -18 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + i * 0.18,
                  type: "spring",
                  stiffness: 160,
                  damping: 22,
                }}
                style={{ transformPerspective: 900 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot — pops in after the card */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.18, type: "spring", stiffness: 400, damping: 20 }}
                  className="absolute left-[11px] md:left-[23px] top-6 w-5 h-5 rounded-full border-2 border-blue-500 bg-zinc-950 flex items-center justify-center"
                >
                  <Briefcase className="w-2.5 h-2.5 text-blue-400" />
                </motion.div>

                <div className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-zinc-400 font-medium">{exp.role}</div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="text-zinc-600 text-sm">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.18 + j * 0.04 }}
                        className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="text-blue-500 mt-1 shrink-0">▸</span>
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.18 + j * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                        className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
