"use client";

import { useState } from "react";
import Link from "next/link";
import ShowcaseCard from "./ShowcaseCard";

export type ShowcaseItem = {
  company: string;
  url: string;
  industry: string;
  category: "ecommerce" | "saas" | "media" | "services";
  color: string;
  bgPattern: string;
  description: string;
  before: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
    loadTime: string;
  };
  after: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
    loadTime: string;
  };
  metrics: { label: string; value: string; positive: boolean }[];
  source: string;
  sourceLabel: string;
};

const showcases: ShowcaseItem[] = [
  {
    company: "Sonos",
    url: "sonos.com",
    industry: "Consumer Electronics",
    category: "ecommerce",
    color: "#E8452C",
    bgPattern: "radial-gradient(circle at 30% 50%, #E8452C22 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ff6b4422 0%, transparent 50%)",
    description: "Globalny producent głośników premium. Migracja na Next.js pozwoliła drastycznie skrócić czas budowania i poprawić wyniki Core Web Vitals na wszystkich rynkach.",
    before: { performance: 62, seo: 78, accessibility: 74, bestPractices: 70, loadTime: "4.2s" },
    after:  { performance: 91, seo: 97, accessibility: 92, bestPractices: 95, loadTime: "1.4s" },
    metrics: [
      { label: "Build time", value: "−75%", positive: true },
      { label: "Lighthouse", value: "+10 pkt", positive: true },
      { label: "Load time", value: "4.2s → 1.4s", positive: true },
    ],
    source: "https://nextjs.org/showcase",
    sourceLabel: "Next.js Showcase",
  },
  {
    company: "Best IT",
    url: "bestit.com",
    industry: "IT Services",
    category: "services",
    color: "#6C63FF",
    bgPattern: "radial-gradient(circle at 70% 30%, #6C63FF22 0%, transparent 60%), radial-gradient(circle at 20% 80%, #8B5CF622 0%, transparent 50%)",
    description: "Firma IT specjalizująca się w rozwiązaniach e-commerce. Po migracji na Next.js czas przebudowania strony skrócił się z 2 godzin do mniej niż 5 minut.",
    before: { performance: 48, seo: 65, accessibility: 71, bestPractices: 62, loadTime: "5.8s" },
    after:  { performance: 87, seo: 94, accessibility: 90, bestPractices: 92, loadTime: "1.9s" },
    metrics: [
      { label: "Rebuild time", value: "2h → <5min", positive: true },
      { label: "Page load", value: "+40%", positive: true },
      { label: "Performance", value: "48 → 87", positive: true },
    ],
    source: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
    sourceLabel: "Naturaily Blog",
  },
  {
    company: "FGS Global",
    url: "fgsglobal.com",
    industry: "Communications",
    category: "services",
    color: "#0EA5E9",
    bgPattern: "radial-gradient(circle at 50% 20%, #0EA5E922 0%, transparent 60%), radial-gradient(circle at 90% 70%, #06B6D422 0%, transparent 50%)",
    description: "Globalna firma komunikacyjna. Wdrożenie Next.js z TypeScript i komponentowym podejściem przełożyło się na Lighthouse 90+ i skrócenie czasu developmentu o 30%.",
    before: { performance: 54, seo: 70, accessibility: 68, bestPractices: 65, loadTime: "4.9s" },
    after:  { performance: 93, seo: 97, accessibility: 95, bestPractices: 96, loadTime: "1.2s" },
    metrics: [
      { label: "Lighthouse", value: "90+", positive: true },
      { label: "Dev time", value: "−30%", positive: true },
      { label: "SEO score", value: "70 → 97", positive: true },
    ],
    source: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
    sourceLabel: "Naturaily Blog",
  },
  {
    company: "Nanobébé",
    url: "nanobebe.com",
    industry: "E-commerce / Baby Products",
    category: "ecommerce",
    color: "#F472B6",
    bgPattern: "radial-gradient(circle at 30% 60%, #F472B622 0%, transparent 60%), radial-gradient(circle at 75% 25%, #EC489922 0%, transparent 50%)",
    description: "Innowacyjna marka produktów dla niemowląt. Next.js z mobile-first podejściem i optymalizacją Core Web Vitals zwiększył konwersje mobilne o 18%.",
    before: { performance: 51, seo: 72, accessibility: 76, bestPractices: 67, loadTime: "5.3s" },
    after:  { performance: 89, seo: 95, accessibility: 94, bestPractices: 91, loadTime: "1.6s" },
    metrics: [
      { label: "Mobile conv.", value: "+18%", positive: true },
      { label: "Bounce rate", value: "−25%", positive: true },
      { label: "Load time", value: "5.3s → 1.6s", positive: true },
    ],
    source: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
    sourceLabel: "Naturaily Blog",
  },
  {
    company: "Fashion Retailer",
    url: "example-fashion.com",
    industry: "E-commerce / Fashion",
    category: "ecommerce",
    color: "#F97316",
    bgPattern: "radial-gradient(circle at 60% 40%, #F9731622 0%, transparent 60%), radial-gradient(circle at 20% 70%, #FB923C22 0%, transparent 50%)",
    description: "Anonimowy retailer modowy z segmentu premium. Optymalizacja LCP i statyczne generowanie stron produktowych przełożyło się na wzrost konwersji o 38%.",
    before: { performance: 45, seo: 68, accessibility: 70, bestPractices: 60, loadTime: "6.1s" },
    after:  { performance: 85, seo: 92, accessibility: 88, bestPractices: 90, loadTime: "2.0s" },
    metrics: [
      { label: "Conversion", value: "2.1% → 2.9%", positive: true },
      { label: "Wzrost conv.", value: "+38%", positive: true },
      { label: "Przychód/rok", value: "+$106K", positive: true },
    ],
    source: "https://www.5hz.io/blog/nextjs-ecommerce-faster-conversions-custom-cms",
    sourceLabel: "5hz.io Blog",
  },
  {
    company: "Vercel SaaS Client",
    url: "vercel.com/customers",
    industry: "SaaS",
    category: "saas",
    color: "#10B981",
    bgPattern: "radial-gradient(circle at 40% 30%, #10B98122 0%, transparent 60%), radial-gradient(circle at 80% 75%, #34D39922 0%, transparent 50%)",
    description: "Klient SaaS na infrastrukturze Vercel. Przejście na Next.js z Edge Network obniżyło koszty hostingu o 35% przy jednoczesnym wzroście pojemności ruchu o 50%.",
    before: { performance: 66, seo: 74, accessibility: 78, bestPractices: 72, loadTime: "3.8s" },
    after:  { performance: 94, seo: 96, accessibility: 96, bestPractices: 97, loadTime: "0.9s" },
    metrics: [
      { label: "Koszty host.", value: "−35%", positive: true },
      { label: "Traffic cap.", value: "+50%", positive: true },
      { label: "Build time", value: "−40%", positive: true },
    ],
    source: "https://pagepro.co/blog/vercel-hosting-costs/",
    sourceLabel: "Pagepro Blog",
  },
];

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS" },
  { id: "services", label: "Usługi" },
];

export default function ShowcasesPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? showcases
    : showcases.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Top nav bar */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0070F3] bg-[#0070F3]/10 border border-[#0070F3]/20 rounded-full mb-4 uppercase tracking-widest">
            Wyniki produkcyjne
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E6EDF3] mb-4">
            Showcases
          </h1>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Wyniki Lighthouse i metryki wydajności przed i po migracji na Next.js —
            dane z produkcji
          </p>
        </div>

        {/* Lighthouse legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {[
            { range: "90–100", color: "#3FB950", label: "Dobry" },
            { range: "50–89",  color: "#D29922", label: "Wymaga poprawy" },
            { range: "0–49",   color: "#F85149", label: "Słaby" },
          ].map((item) => (
            <div key={item.range} className="flex items-center gap-2 text-sm text-[#8B949E]">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span style={{ color: item.color }}>{item.range}</span>
              <span>— {item.label}</span>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-[#0070F3] text-white shadow-lg shadow-[#0070F3]/25"
                  : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#0070F3]/40"
              }`}
            >
              {cat.label}
              <span className={`ml-2 text-xs ${active === cat.id ? "text-white/70" : "text-[#8B949E]"}`}>
                ({cat.id === "all" ? showcases.length : showcases.filter(s => s.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <ShowcaseCard key={item.company} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
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
