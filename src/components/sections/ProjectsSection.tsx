"use client";
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "farmer-motion";
import { ExternalLink, Bot, BarChart2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { use3DTilt } from "@/hooks/use3DTilt";

const projects = [
  {
    title: "AI Developer Copilot",
    year: "2025",
    description:
      "Generative AI developer assistant using Retrieval-Augmented Generation (RAG), vector embeddings, and semantic search for automated code review, root cause analysis, and codebase-aware debugging.",
    impact: "Adopted by 20+ engineers at Juspay",
    tags: ["RAG", "LangChain", "Vector Embeddings", "Kafka", "Ollama"],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=75&auto=format&fit=crop",
    accent: "from-blue-600/20 to-purple-600/20",
    border: "hover:border-blue-500/50",
  },
  {
    title: "Payment Observability Dashboard",
    year: "2023",
    description:
      "Real-time reliability dashboard tracking gateway SLOs, authorization rates, and latency percentiles (p95/p99) with Prometheus, Grafana, and Redis alerting.",
    impact: "Reduced MTTD across 5+ payment gateways",
    tags: ["Prometheus", "Grafana", "Node.js", "Redis", "AWS"],
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75&auto=format&fit=crop",
    accent: "from-green-600/20 to-cyan-600/20",
    border: "hover:border-green-500/50",
  },
];

type Project = typeof projects[0];

const ProjectCard3D = ({
  project,
  i,
  isInView,
}: {
  project: Project;
  i: number;
  isInView: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(6);
  const Icon = project.icon;

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
        onMouseLeave={shouldReduceMotion ? undefined : handleMouseLeave}
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{
          duration: 0.65,
          delay: 0.2 + i * 0.15,
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
        className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-colors duration-300 cursor-pointer ${project.border}`}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
            width={800}
            height={400}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} to-zinc-900/80`} />

          {/* Icon badge — floats up on hover */}
          <motion.div
            className="absolute top-4 left-4 p-2 rounded-xl bg-zinc-900/80 border border-zinc-700"
            whileHover={{ y: -3, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Icon className="w-5 h-5 text-blue-400" />
          </motion.div>

          <div className="absolute top-4 right-4 text-zinc-500 text-sm font-mono">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {project.impact}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dsharma04724"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
            <ExternalLink className="w-4 h-4 text-zinc-700" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="relative py-24 md:py-32 bg-zinc-950">
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: -18 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
          style={{ transformPerspective: 600 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard3D key={project.title} project={project} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
