"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

const skillGroups = [
  {
    category: "Languages",
    color: "blue",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "C++", "Haskell"],
  },
  {
    category: "Backend & Architecture",
    color: "purple",
    skills: [
      "Node.js", "Express.js", "Microservices", "gRPC", "REST APIs",
      "Distributed Systems", "Event-Driven", "Circuit Breaker", "High Availability",
    ],
  },
  {
    category: "Databases",
    color: "green",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization"],
  },
  {
    category: "Messaging & Streaming",
    color: "amber",
    skills: ["Apache Kafka", "Webhooks", "Async Processing", "Event Sourcing", "Idempotency"],
  },
  {
    category: "AI & Generative AI",
    color: "cyan",
    skills: ["OpenAI API", "Ollama", "RAG Pipelines", "LangChain", "Vector Embeddings", "AI Agents"],
  },
  {
    category: "Observability",
    color: "rose",
    skills: ["Prometheus", "Grafana", "Distributed Tracing", "SLO/SLI/SLA", "Incident Mgmt"],
  },
  {
    category: "Cloud & DevOps",
    color: "orange",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Payment & Security",
    color: "teal",
    skills: ["PCI-DSS", "EMV / ISO 8583", "HSM / TR-31", "NFC / Tap2Pay", "Tokenization"],
  },
];

const colorMap: Record<string, { badge: string; dot: string }> = {
  blue:   { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   dot: "bg-blue-400" },
  purple: { badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", dot: "bg-purple-400" },
  green:  { badge: "bg-green-500/10 text-green-400 border-green-500/20", dot: "bg-green-400" },
  amber:  { badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", dot: "bg-amber-400" },
  cyan:   { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",   dot: "bg-cyan-400" },
  rose:   { badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",   dot: "bg-rose-400" },
  orange: { badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", dot: "bg-orange-400" },
  teal:   { badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",   dot: "bg-teal-400" },
};

type SkillGroup = typeof skillGroups[0];

const SkillCard3D = ({
  group,
  delay,
  isInView,
}: {
  group: SkillGroup;
  delay: number;
  isInView: boolean;
}) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(10);
  const colors = colorMap[group.color];

  return (
    <div style={{ perspective: "700px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40, rotateX: 28, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
        transition={{
          duration: 0.55,
          delay,
          type: "spring",
          stiffness: 220,
          damping: 24,
        }}
        style={{ rotateX, rotateY }}
        className="p-5 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-950 transition-colors duration-300"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
          <h3 className="text-zinc-300 text-sm font-semibold">{group.category}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {group.skills.map((skill, j) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.3,
                delay: delay + 0.1 + j * 0.03,
                type: "spring",
                stiffness: 350,
                damping: 22,
              }}
              className={`px-2 py-0.5 rounded-md border text-xs font-medium ${colors.badge}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="relative py-24 md:py-32 bg-zinc-900">
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
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: -18 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
          style={{ transformPerspective: 600 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Technologies I work with
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard3D
              key={group.category}
              group={group}
              delay={0.1 + i * 0.07}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
