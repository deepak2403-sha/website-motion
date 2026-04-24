'use client'

import { useRef } from "react";
import { motion, useInView } from "farmer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { use3DTilt } from "@/hooks/use3DTilt";

export function SplineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt(4);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-zinc-950 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" style={{ perspective: "1200px" }}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60, rotateX: 14 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.85,
            type: "spring",
            stiffness: 130,
            damping: 20,
          }}
          style={{ rotateX, rotateY }}
        >
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-zinc-800">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center gap-5">
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-2">
                    Open to SDE-2 opportunities
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Deepak Sharma
                  </h1>
                  <p className="mt-2 text-neutral-400 text-base">
                    Software Development Engineer · Juspay
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Java", "Kafka", "Distributed Systems", "RAG / LLMs", "PCI-DSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 text-sm text-neutral-400">
                  <a href="mailto:dsharma04724@gmail.com" className="hover:text-white transition-colors">
                    dsharma04724@gmail.com
                  </a>
                  <a href="https://github.com/dsharma04724" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    github.com/dsharma04724
                  </a>
                  <a href="https://www.linkedin.com/in/deepaksharma2403/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    linkedin.com/in/deepaksharma2403
                  </a>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
