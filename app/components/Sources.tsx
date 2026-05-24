"use client";

const sources = [
  {
    category: "Case Studies",
    color: "#0070F3",
    items: [
      {
        title: "Next.js Showcase — Sonos",
        description: "Oficjalna lista firm używających Next.js w produkcji. Sonos: −75% build time.",
        url: "https://nextjs.org/showcase",
        domain: "nextjs.org",
      },
      {
        title: "Naturaily — Next.js Features, Benefits & Case Studies",
        description: "Szczegółowe case studies: Best IT (−96% rebuild), FGS Global (Lighthouse 90+), Nanobébé (+18% mobile conversions).",
        url: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
        domain: "naturaily.com",
      },
      {
        title: "5hz.io — Next.js E-commerce: Faster Conversions & Custom CMS",
        description: "Fashion retailer: conversion rate 2.1% → 2.9% (+38%), +$106K dodatkowego przychodu/rok.",
        url: "https://www.5hz.io/blog/nextjs-ecommerce-faster-conversions-custom-cms",
        domain: "5hz.io",
      },
      {
        title: "Pagepro — Vercel Hosting Costs",
        description: "Analiza kosztów hostingu na Vercel: −35% kosztów, −40% build time, +50% traffic capacity.",
        url: "https://pagepro.co/blog/vercel-hosting-costs/",
        domain: "pagepro.co",
      },
    ],
  },
  {
    category: "Wydajność i konwersje",
    color: "#3FB950",
    items: [
      {
        title: "Nitropack — How Page Speed Affects Conversion Rate",
        description: "Dane Google/Deloitte 'Milliseconds Make Millions': +8.4% konwersji e-commerce na każde 0.1s szybciej.",
        url: "https://nitropack.io/blog/how-page-speed-affects-conversion/",
        domain: "nitropack.io",
      },
      {
        title: "Cloudflare — Website Performance & Conversion Rates",
        description: "Amazon: każde 100ms opóźnienia = −1% sprzedaży. Statystyki wpływu wydajności na biznes.",
        url: "https://www.cloudflare.com/en-gb/learning/performance/more/website-performance-conversion-rates/",
        domain: "cloudflare.com",
      },
    ],
  },
  {
    category: "Next.js dokumentacja",
    color: "#8B5CF6",
    items: [
      {
        title: "Next.js 14 — App Router dokumentacja",
        description: "Oficjalna dokumentacja Next.js 14 z App Router, Server Components, Metadata API.",
        url: "https://nextjs.org/docs",
        domain: "nextjs.org",
      },
      {
        title: "Vercel — Deploy Next.js",
        description: "Oficjalny hosting dla Next.js z Edge Network, serverless functions i analytics.",
        url: "https://vercel.com/docs",
        domain: "vercel.com",
      },
    ],
  },
];

export default function Sources() {
  return (
    <section id="sources" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#8B949E] bg-[#161B22] border border-[#30363D] rounded-full mb-4 uppercase tracking-widest">
            Transparentność
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Źródła danych
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Wszystkie statystyki i case studies opierają się na weryfikowalnych danych
            z publicznych źródeł
          </p>
        </div>

        {/* Sources by category */}
        <div className="space-y-10">
          {sources.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-lg font-semibold text-[#E6EDF3]">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-[#30363D]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card-hover bg-[#161B22] border border-[#30363D] hover:border-[#0070F3]/40 rounded-xl p-5 block transition-all"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <svg className="w-4 h-4" style={{ color: category.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-[#E6EDF3] group-hover:text-[#0070F3] transition-colors leading-tight mb-1">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#8B949E]/70">{item.domain}</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#8B949E] leading-relaxed">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-[#161B22] border border-[#30363D] rounded-xl p-6 text-center">
          <p className="text-sm text-[#8B949E] max-w-2xl mx-auto">
            <span className="text-[#E6EDF3] font-semibold">Zastrzeżenie:</span> Wyniki mogą się różnić
            w zależności od specyfiki projektu, istniejącej infrastruktury i zasobów zespołu.
            Wszystkie statystyki pochodzą z publicznych case studies i badań wymienionych powyżej.
            Kalkulator ROI dostarcza szacunkowych wyliczeń opartych na publikowanych benchmarkach.
          </p>
        </div>
      </div>
    </section>
  );
}
