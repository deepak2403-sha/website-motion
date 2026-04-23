"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { use3DTilt } from "@/hooks/use3DTilt";

const links = [
  {
    label: "Email",
    value: "dsharma04724@gmail.com",
    href: "mailto:dsharma04724@gmail.com",
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    label: "GitHub",
    value: "github.com/dsharma04724",
    href: "https://github.com/dsharma04724",
    icon: GithubIcon,
    description: "See my code",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepak-sharma",
    href: "https://linkedin.com/in/deepak-sharma",
    icon: LinkedinIcon,
    description: "Professional profile",
  },
  {
    label: "Phone",
    value: "+91-9808508974",
    href: "tel:+919808508974",
    icon: Phone,
    description: "Available for calls",
  },
];

type ContactLink = typeof links[0];

const ContactCard3D = ({
  link,
  delay,
  isInView,
}: {
  link: ContactLink;
  delay: number;
  isInView: boolean;
}) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(10);
  const Icon = link.icon;

  return (
    <div style={{ perspective: "800px" }}>
      <motion.a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={`${link.label}: ${link.value}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay, type: "spring", stiffness: 220, damping: 22 }}
        style={{ rotateX, rotateY, display: "block" }}
        className="group p-5 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-blue-500/40 hover:bg-zinc-950 transition-colors duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-3">
          <Icon className="w-5 h-5 text-blue-400" />
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </motion.div>
        </div>
        <div className="text-zinc-500 text-xs mb-1">{link.description}</div>
        <div className="text-white font-medium text-sm truncate">{link.value}</div>
      </motion.a>
    </div>
  );
};

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32 bg-zinc-900">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
            Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30, rotateX: -18 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
              style={{ transformPerspective: 600 }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Let&apos;s build something{" "}
              <span className="text-blue-400">great together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              I&apos;m actively seeking SDE-2 opportunities at high-throughput product
              engineering teams. If you&apos;re building something ambitious — distributed
              systems, fintech, AI infrastructure — let&apos;s talk.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="mailto:dsharma04724@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Send me an email
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right: 3D tilt contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link, i) => (
              <ContactCard3D
                key={link.label}
                link={link}
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
