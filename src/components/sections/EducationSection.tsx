"use client";
import React, { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { GraduationCap, Star } from "lucide-react";

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
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Academic background
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-300 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
              <GraduationCap className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Chitkara University</h3>
              <p className="text-zinc-400 font-medium">B.E. Computer Science</p>
              <p className="text-zinc-500 text-sm">Himachal Pradesh, India · Aug 2019 – July 2023</p>
              <div className="flex items-center gap-2 pt-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-semibold text-lg">9.77</span>
                <span className="text-zinc-500 text-sm">GPA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
