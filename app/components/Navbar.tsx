"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Start" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#conversions", label: "Konwersje" },
  { href: "#comparison", label: "Porównanie" },
  { href: "#sources", label: "Źródła" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/95 backdrop-blur-md border-b border-[#30363D]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#0070F3] rounded flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <span className="font-semibold text-sm text-[#E6EDF3] hidden sm:block">
              Next.js Migration Guide
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22] rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/showcases"
              className="px-3 py-1.5 text-sm font-medium text-[#0070F3] hover:bg-[#0070F3]/10 rounded-md transition-colors border border-[#0070F3]/30 ml-1"
            >
              Showcases ✦
            </Link>
            <Link
              href="/sprint-board"
              className="px-3 py-1.5 text-sm font-medium text-[#3FB950] hover:bg-[#3FB950]/10 rounded-md transition-colors border border-[#3FB950]/30 ml-1"
            >
              Sprint Board ✦
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#30363D] py-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2.5 text-sm text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/showcases"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 text-sm text-[#0070F3] hover:bg-[#0070F3]/10 transition-colors font-medium"
            >
              Showcases ✦
            </Link>
            <Link
              href="/sprint-board"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 text-sm text-[#3FB950] hover:bg-[#3FB950]/10 transition-colors font-medium"
            >
              Sprint Board ✦
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
