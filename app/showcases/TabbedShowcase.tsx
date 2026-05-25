"use client";

import { useState } from "react";
import LighthouseGauge from "./LighthouseGauge";
import type { ShowcaseItem } from "./data";

const lighthouseCategories = [
  { key: "performance",   label: "Performance",    icon: "⚡" },
  { key: "seo",           label: "SEO",             icon: "🔍" },
  { key: "accessibility", label: "Accessibility",   icon: "♿" },
  { key: "bestPractices", label: "Best Practices",  icon: "✅" },
] as const;

function ScoreDiff({ before, after }: { before: number; after: number }) {
  const diff = after - before;
  const positive = diff >= 0;
  return (
    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${positive ? "text-[#3FB950] bg-[#3FB950]/10" : "text-[#F85149] bg-[#F85149]/10"}`}>
      {positive ? "+" : ""}{diff}
    </span>
  );
}

export default function TabbedShowcase({ items }: { items: ShowcaseItem[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [view, setView] = useState<"after" | "before">("after");
  const item = items[activeIdx];
  const scores = view === "after" ? item.after : item.before;

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-[#30363D] scrollbar-hide">
        {items.map((s, i) => (
          <button
            key={s.company}
            onClick={() => { setActiveIdx(i); setView("after"); }}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-4 text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
              activeIdx === i
                ? "border-[#0070F3] text-[#E6EDF3] bg-[#0070F3]/5"
                : "border-transparent text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]/40"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: activeIdx === i ? s.color : "#30363D" }}
            />
            {s.company}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: info + browser mockup */}
          <div className="space-y-5">
            {/* Company header */}
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: `${item.color}20` }}
              >
                {["🔊","💼","🌐","👶","👗","▲"][activeIdx]}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-[#E6EDF3]">{item.company}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border font-medium"
                    style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                  >
                    {item.industry}
                  </span>
                  {item.verified ? (
                    <span className="text-xs px-2 py-0.5 rounded-full border font-medium text-[#3FB950] border-[#3FB950]/30 bg-[#3FB950]/10 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Zweryfikowane
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full border font-medium text-[#D29922] border-[#D29922]/30 bg-[#D29922]/10">
                      Case study
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#8B949E] mt-0.5">{item.url}</span>
              </div>
            </div>

            <p className="text-sm text-[#8B949E] leading-relaxed">{item.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#0D1117] border border-[#30363D] text-[#8B949E]">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA — link do strony */}
            <a
              href={item.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: item.color, boxShadow: `0 4px 20px ${item.color}30` }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {item.company === "Fashion Retailer" || item.company === "Best IT"
                ? "Przeczytaj case study →"
                : `Otwórz ${item.company} →`}
            </a>

            {/* Browser mockup */}
            <div className="rounded-xl overflow-hidden border border-[#30363D]">
              {/* Chrome bar */}
              <div className="bg-[#0D1117] px-3 py-2 border-b border-[#30363D] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F85149]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D29922]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3FB950]" />
                </div>
                <div className="flex-1 bg-[#161B22] border border-[#30363D] rounded px-2.5 py-0.5 text-xs text-[#8B949E] flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#3FB950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {item.url}
                </div>
                {/* Load time badge */}
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3 text-[#0070F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className={view === "after" ? "text-[#3FB950]" : "text-[#F85149]"}>
                    {scores.loadTime}
                  </span>
                </div>
              </div>
              {/* Page body */}
              <div
                className="h-36 p-4 flex flex-col gap-2.5"
                style={{ background: item.bgPattern, backgroundColor: "#0D1117" }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-16 h-3 rounded-full opacity-70" style={{ backgroundColor: item.color }} />
                  <div className="flex gap-1.5">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-2 rounded-full bg-[#30363D]" />)}
                  </div>
                </div>
                <div className="flex-1 rounded-lg border border-[#30363D]/30 p-3 flex flex-col gap-2" style={{ background: `${item.color}08` }}>
                  <div className="w-2/3 h-3 rounded-full opacity-60" style={{ backgroundColor: item.color }} />
                  <div className="w-1/2 h-2 rounded-full bg-[#30363D]" />
                  <div className="flex gap-2 mt-1">
                    <div className="w-16 h-5 rounded-md" style={{ backgroundColor: item.color }} />
                    <div className="w-16 h-5 rounded-md border border-[#30363D]" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1,2,3,4].map(i => <div key={i} className="h-5 rounded bg-[#30363D]/40" />)}
                </div>
              </div>
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-2">
              {item.metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-1.5 bg-[#0D1117] border border-[#30363D] rounded-lg px-3 py-2">
                  <span className={`text-base font-bold ${m.positive ? "text-[#3FB950]" : "text-[#F85149]"}`}>{m.value}</span>
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

          {/* Right: Lighthouse scores */}
          <div className="space-y-5">
            {/* Toggle */}
            <div className="flex items-center gap-1 bg-[#0D1117] border border-[#30363D] rounded-xl p-1 w-fit">
              <button
                onClick={() => setView("before")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  view === "before"
                    ? "bg-[#F85149]/15 text-[#F85149] border border-[#F85149]/30"
                    : "text-[#8B949E] hover:text-[#E6EDF3]"
                }`}
              >
                Przed migracją
              </button>
              <button
                onClick={() => setView("after")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  view === "after"
                    ? "bg-[#3FB950]/15 text-[#3FB950] border border-[#3FB950]/30"
                    : "text-[#8B949E] hover:text-[#E6EDF3]"
                }`}
              >
                Po migracji
              </button>
            </div>

            {/* Gauges — large */}
            <div className="bg-[#0D1117]/60 border border-[#30363D]/50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-4 h-4 text-[#8B949E]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
                <span className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider">Lighthouse Report</span>
                <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${view === "after" ? "text-[#3FB950] bg-[#3FB950]/10 border border-[#3FB950]/20" : "text-[#F85149] bg-[#F85149]/10 border border-[#F85149]/20"}`}>
                  {view === "after" ? "✓ Po migracji" : "✗ Przed migracją"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {lighthouseCategories.map((cat) => {
                  const beforeScore = item.before[cat.key];
                  const afterScore = item.after[cat.key];
                  return (
                    <div key={cat.key} className="flex items-center gap-4">
                      <LighthouseGauge score={scores[cat.key]} size={80} />
                      <div>
                        <div className="text-sm font-medium text-[#E6EDF3]">{cat.icon} {cat.label}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[#8B949E]">{beforeScore} → {afterScore}</span>
                          <ScoreDiff before={beforeScore} after={afterScore} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Before vs After comparison bars */}
            <div className="bg-[#0D1117]/60 border border-[#30363D]/50 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider mb-4">Porównanie: Przed vs Po</h4>
              {lighthouseCategories.map((cat) => {
                const bScore = item.before[cat.key];
                const aScore = item.after[cat.key];
                return (
                  <div key={cat.key}>
                    <div className="flex justify-between text-xs text-[#8B949E] mb-1.5">
                      <span>{cat.icon} {cat.label}</span>
                      <span className="font-mono">{bScore} → <span className="text-[#3FB950] font-semibold">{aScore}</span></span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full bg-[#30363D] rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-700"
                          style={{
                            width: `${bScore}%`,
                            backgroundColor: bScore >= 90 ? "#3FB950" : bScore >= 50 ? "#D29922" : "#F85149",
                          }}
                        />
                      </div>
                      <div className="w-full bg-[#30363D] rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-700"
                          style={{
                            width: `${aScore}%`,
                            backgroundColor: aScore >= 90 ? "#3FB950" : aScore >= 50 ? "#D29922" : "#F85149",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-4 pt-2 text-xs text-[#8B949E]">
                <span className="flex items-center gap-1.5"><span className="w-6 h-1.5 rounded bg-[#F85149] inline-block" /> Przed</span>
                <span className="flex items-center gap-1.5"><span className="w-6 h-1.5 rounded bg-[#3FB950] inline-block" /> Po</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
