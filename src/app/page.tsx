import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SplineSection } from "@/components/sections/SplineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SplineSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-zinc-600 text-sm">
          <span>© 2026 Deepak Sharma. All rights reserved.</span>
          <span>Built with Next.js · Tailwind CSS · farmer-motion · Spline</span>
        </div>
      </footer>
    </main>
  );
}
