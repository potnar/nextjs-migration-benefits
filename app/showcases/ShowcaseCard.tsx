"use client";

import { useState } from "react";
import LighthouseGauge from "./LighthouseGauge";
import type { ShowcaseItem } from "./page";

const lighthouseCategories = [
  { key: "performance",    label: "Perf." },
  { key: "seo",            label: "SEO" },
  { key: "accessibility",  label: "Access." },
  { key: "bestPractices",  label: "B.P." },
] as const;

export default function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const [view, setView] = useState<"after" | "before">("after");
  const scores = view === "after" ? item.after : item.before;

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden hover:border-[#0070F3]/30 transition-all hover:shadow-xl hover:shadow-[#0070F3]/5">

      {/* Browser mockup */}
      <div className="relative h-52 overflow-hidden" style={{ background: item.bgPattern, backgroundColor: "#0D1117" }}>
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 bg-[#0D1117]/80 backdrop-blur-sm border-b border-[#30363D]/60 px-3 py-2 flex items-center gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F85149]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#D29922]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3FB950]" />
          </div>
          <div className="flex-1 bg-[#161B22] border border-[#30363D] rounded-md px-3 py-1 text-xs text-[#8B949E] flex items-center gap-1.5">
            <svg className="w-3 h-3 text-[#3FB950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {item.url}
          </div>
        </div>

        {/* Simulated page content */}
        <div className="absolute inset-0 pt-12 px-4 pb-3 flex flex-col gap-2">
          {/* Nav bar simulation */}
          <div className="flex items-center justify-between">
            <div className="w-20 h-3 rounded-full opacity-60" style={{ backgroundColor: item.color }} />
            <div className="flex gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-2 rounded-full bg-[#30363D]" />
              ))}
            </div>
          </div>
          {/* Hero area */}
          <div className="flex-1 rounded-lg border border-[#30363D]/40 overflow-hidden mt-1 flex flex-col gap-2 p-3"
            style={{ background: `${item.color}08` }}>
            <div className="w-3/4 h-4 rounded-full opacity-70" style={{ backgroundColor: item.color }} />
            <div className="w-1/2 h-3 rounded-full bg-[#30363D]" />
            <div className="w-2/3 h-2 rounded-full bg-[#30363D] opacity-60" />
            <div className="flex gap-2 mt-1">
              <div className="w-20 h-6 rounded-md" style={{ backgroundColor: item.color }} />
              <div className="w-20 h-6 rounded-md border border-[#30363D]" />
            </div>
          </div>
          {/* Cards row simulation */}
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-8 rounded-md bg-[#30363D]/40 border border-[#30363D]/30" />
            ))}
          </div>
        </div>

        {/* Load time badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0D1117]/90 border border-[#30363D] rounded-full px-3 py-1">
          <svg className="w-3 h-3 text-[#0070F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs font-semibold text-[#E6EDF3]">{scores.loadTime}</span>
          <span className="text-xs text-[#8B949E]">load</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Company + toggle */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-[#E6EDF3]">{item.company}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full border"
                style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}>
                {item.industry}
              </span>
            </div>
            <p className="text-xs text-[#8B949E] leading-relaxed max-w-xs">{item.description}</p>
          </div>
        </div>

        {/* Before / After toggle */}
        <div className="flex items-center gap-1 bg-[#0D1117] border border-[#30363D] rounded-lg p-1 mb-5 w-fit">
          <button
            onClick={() => setView("before")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              view === "before"
                ? "bg-[#F85149]/20 text-[#F85149] border border-[#F85149]/30"
                : "text-[#8B949E] hover:text-[#E6EDF3]"
            }`}
          >
            Przed migracją
          </button>
          <button
            onClick={() => setView("after")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              view === "after"
                ? "bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/30"
                : "text-[#8B949E] hover:text-[#E6EDF3]"
            }`}
          >
            Po migracji
          </button>
        </div>

        {/* Lighthouse scores */}
        <div className="bg-[#0D1117]/60 border border-[#30363D]/50 rounded-xl p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-[#8B949E] uppercase tracking-wider flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Lighthouse Score
            </span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              view === "after"
                ? "bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/20"
                : "bg-[#F85149]/10 text-[#F85149] border border-[#F85149]/20"
            }`}>
              {view === "after" ? "Po migracji" : "Przed migracją"}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {lighthouseCategories.map((cat) => (
              <LighthouseGauge
                key={cat.key}
                score={scores[cat.key]}
                size={64}
                label={cat.label}
              />
            ))}
          </div>
        </div>

        {/* Metrics badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-1.5 bg-[#0D1117] border border-[#30363D] rounded-lg px-3 py-2">
              <span className={`text-sm font-bold ${m.positive ? "text-[#3FB950]" : "text-[#F85149]"}`}>
                {m.value}
              </span>
              <span className="text-xs text-[#8B949E]">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Source */}
        <a
          href={item.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-[#0070F3] transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Źródło: {item.sourceLabel}
        </a>
      </div>
    </div>
  );
}
