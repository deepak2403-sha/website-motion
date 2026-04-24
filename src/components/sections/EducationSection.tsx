"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { GraduationCap, Star } from "lucide-react";
import { use3DTilt } from "@/hooks/use3DTilt";

const EducationCard3D = ({ isInView }: { isInView: boolean }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(8);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, rotateY: -90, scale: 0.85 }}
        animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
        transition={{
          duration: 0.85,
          delay: 0.2,
          type: "spring",
          stiffness: 110,
          damping: 18,
        }}
        style={{ rotateX, rotateY }}
        className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 hover:bg-zinc-900 transition-colors duration-300 max-w-2xl cursor-default"
      >
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75, type: "spring", stiffness: 300, damping: 20 }}
            className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0"
          >
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="text-xl font-bold text-white"
            >
              Chitkara University
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.77 }}
              className="text-zinc-400 font-medium"
            >
              B.E. Computer Science
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.84 }}
              className="text-zinc-500 text-sm"
            >
              Himachal Pradesh, India · Aug 2019 – July 2023
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.95, type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-2 pt-1"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 font-semibold text-lg">9.77</span>
              <span className="text-zinc-500 text-sm">GPA</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="education" className="relative py-24 md:py-32 bg-zinc-950">
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
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: -18 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 180, damping: 20 }}
          style={{ transformPerspective: 600 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Academic background
        </motion.h2>

        <EducationCard3D isInView={isInView} />
      </div>
    </section>
  );
};
