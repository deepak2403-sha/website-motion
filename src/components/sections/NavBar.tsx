"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "farmer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        const id = visibleEntries[0].target.id;
        if (id) setActiveSection(`#${id}`);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors duration-200"
            aria-label="Deepak Sharma — home"
          >
            DS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 text-sm rounded-lg transition-all duration-200 cursor-pointer",
                  activeSection === link.href
                    ? "text-white bg-zinc-800/70"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                )}
                aria-label={`Navigate to ${link.label}`}
                aria-current={activeSection === link.href ? "page" : undefined}
              >
                <span className="inline-flex items-center gap-2">
                  {activeSection === link.href ? (
                    <motion.span
                      layoutId="active-nav-dot"
                      className="w-1.5 h-1.5 rounded-full bg-blue-400"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  ) : (
                    <span className="w-1.5 h-1.5" aria-hidden />
                  )}
                  {link.label}
                </span>
              </button>
            ))}
            <a
              href="mailto:dsharma04724@gmail.com"
              className="ml-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              aria-label="Hire Deepak — send email"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-3 text-left rounded-xl transition-all duration-200 cursor-pointer text-sm font-medium",
                    activeSection === link.href
                      ? "text-white bg-zinc-800"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                  )}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:dsharma04724@gmail.com"
                className="mt-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium text-center transition-colors duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
