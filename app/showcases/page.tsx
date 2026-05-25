"use client";

import { useState } from "react";
import Link from "next/link";
import ShowcaseCard from "./ShowcaseCard";
import TabbedShowcase from "./TabbedShowcase";
import LiveDemos from "./LiveDemos";
import { showcases } from "./data";

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS" },
  { id: "services", label: "Usługi" },
];

export default function ShowcasesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? showcases
    : showcases.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-[#30363D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Powrót</span>
            </Link>
            <span className="text-[#30363D]">/</span>
            <span className="text-sm text-[#E6EDF3] font-medium">Showcases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0070F3] rounded flex items-center justify-center font-bold text-white text-xs">N</div>
            <span className="text-sm text-[#8B949E] hidden sm:block">Next.js Migration Guide</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ── SECTION 1: Tabbed Showcase ── */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0070F3] bg-[#0070F3]/10 border border-[#0070F3]/20 rounded-full mb-4 uppercase tracking-widest">
              Deep dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-3">
              Wyniki firm — zakładka po zakładce
            </h2>
            <p className="text-[#8B949E] max-w-xl mx-auto">
              Kliknij firmę, aby zobaczyć pełne wyniki Lighthouse i metryki biznesowe
            </p>
          </div>
          <TabbedShowcase items={showcases} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />

        {/* ── SECTION 2: Live Demos ── */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3FB950] bg-[#3FB950]/10 border border-[#3FB950]/20 rounded-full mb-4 uppercase tracking-widest">
              Interaktywne demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-3">
              Next.js — funkcje na żywo
            </h2>
            <p className="text-[#8B949E] max-w-xl mx-auto">
              Klikalne dema kluczowych funkcji Next.js, które robią różnicę
            </p>
          </div>
          <LiveDemos />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />

        {/* ── SECTION 3: Cards Grid (oryginalne karty) ── */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D29922] bg-[#D29922]/10 border border-[#D29922]/20 rounded-full mb-4 uppercase tracking-widest">
              Przegląd
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-3">
              Wszystkie case studies
            </h2>
            <p className="text-[#8B949E] max-w-xl mx-auto mb-8">
              Pełny przegląd z filtrowaniem po kategorii
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat.id
                      ? "bg-[#0070F3] text-white shadow-lg shadow-[#0070F3]/25"
                      : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#0070F3]/40"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-2 text-xs ${activeFilter === cat.id ? "text-white/70" : "text-[#8B949E]"}`}>
                    ({cat.id === "all" ? showcases.length : showcases.filter(s => s.category === cat.id).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <ShowcaseCard key={item.company} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#30363D] hover:border-[#0070F3]/40 text-[#8B949E] hover:text-[#E6EDF3] rounded-lg transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Wróć do strony głównej
          </Link>
        </div>

      </div>
    </div>
  );
}
