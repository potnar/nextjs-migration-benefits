"use client";

const cases = [
  {
    company: "Sonos",
    industry: "Consumer Electronics",
    logo: "🔊",
    color: "from-blue-500/15 to-transparent",
    border: "border-blue-500/25",
    accentColor: "#0070F3",
    metrics: [
      { label: "Czas budowania", before: "—", after: "−75%", icon: "⚡" },
      { label: "Lighthouse Score", before: "—", after: "+10 pkt", icon: "🏆" },
    ],
    description:
      "Sonos przeniósł swoją stronę na Next.js, osiągając dramatyczną redukcję czasu budowania o 75% oraz znaczącą poprawę wyników Lighthouse, co przełożyło się na lepszą widoczność w wyszukiwarkach.",
    highlights: [
      "Integracja z headless CMS",
      "Automatyczna optymalizacja obrazów",
      "Incremental Static Regeneration",
    ],
    source: "https://nextjs.org/showcase",
    sourceLabel: "Next.js Showcase",
  },
  {
    company: "Best IT",
    industry: "IT Services",
    logo: "💼",
    color: "from-purple-500/15 to-transparent",
    border: "border-purple-500/25",
    accentColor: "#8B5CF6",
    metrics: [
      { label: "Czas przebudowania", before: "2h", after: "<5 min (−96%)", icon: "🚀" },
      { label: "Page Load Speed", before: "—", after: "+40%", icon: "📈" },
    ],
    description:
      "Best IT zredukował czas przebudowania strony z 2 godzin do mniej niż 5 minut — redukcja o 96%. Jednocześnie prędkość ładowania strony wzrosła o 40%, co natychmiast przełożyło się na wskaźniki zaangażowania.",
    highlights: [
      "ISR eliminuje długie rebuildy",
      "Streaming SSR",
      "Edge caching z Vercel",
    ],
    source: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
    sourceLabel: "Naturaily Blog",
  },
  {
    company: "FGS Global",
    industry: "Communications",
    logo: "🌐",
    color: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/25",
    accentColor: "#06B6D4",
    metrics: [
      { label: "Lighthouse Score", before: "<70", after: "90+", icon: "🏆" },
      { label: "Dev Time", before: "—", after: "−30%", icon: "⏱️" },
    ],
    description:
      "FGS Global osiągnął wynik Lighthouse powyżej 90 punktów i skrócił czas developmentu o 30% dzięki component-driven development w Next.js i lepszemu DX zespołu deweloperskiego.",
    highlights: [
      "TypeScript end-to-end",
      "Component-driven development",
      "Automatyczne Code Splitting",
    ],
    source: "https://naturaily.com/blog/nextjs-features-benefits-case-studies",
    sourceLabel: "Naturaily Blog",
  },
  {
    company: "Desenio",
    industry: "E-commerce / Art Prints",
    logo: "🖼️",
    color: "from-violet-500/15 to-transparent",
    border: "border-violet-500/25",
    accentColor: "#A78BFA",
    metrics: [
      { label: "Konwersje", before: "—", after: "+34%", icon: "🛒" },
      { label: "Bounce Rate", before: "—", after: "−37%", icon: "📉" },
    ],
    description:
      "Skandynawski e-commerce z plakatami zmigrował z monolitu (po przejęciu The Poster Store). Deploy skrócił się z 2h do kilku minut, uruchomiono 30 nowych rynków w ciągu jednego miesiąca.",
    highlights: [
      "ISR — deploy z 2h do kilku minut",
      "30 nowych rynków w 1 miesiąc",
      "Headless architecture",
    ],
    source: "https://vercel.com/customers/desenio",
    sourceLabel: "Vercel Case Study",
  },
  {
    company: "Fashion Retailer",
    industry: "E-commerce / Fashion",
    logo: "👗",
    color: "from-orange-500/15 to-transparent",
    border: "border-orange-500/25",
    accentColor: "#F97316",
    metrics: [
      { label: "Conversion Rate", before: "2.1%", after: "2.9% (+38%)", icon: "📊" },
      { label: "Dodatkowy przychód", before: "—", after: "+$106K/rok", icon: "💰" },
    ],
    description:
      "Anonimowy retailer modowy zwiększył conversion rate z 2.1% do 2.9% (wzrost o 38%), co przy istniejącym ruchu przełożyło się na dodatkowe $106,000 przychodu rocznie wyłącznie dzięki poprawie wydajności.",
    highlights: [
      "Static Generation dla stron produktów",
      "Optymalizacja LCP (Largest Contentful Paint)",
      "Lazy loading obrazów",
    ],
    source: "https://www.5hz.io/blog/nextjs-ecommerce-faster-conversions-custom-cms",
    sourceLabel: "5hz.io Blog",
  },
  {
    company: "Vercel SaaS Client",
    industry: "SaaS",
    logo: "▲",
    color: "from-emerald-500/15 to-transparent",
    border: "border-emerald-500/25",
    accentColor: "#10B981",
    metrics: [
      { label: "Koszty hostingu", before: "—", after: "−35%", icon: "💸" },
      { label: "Traffic Capacity", before: "—", after: "+50%", icon: "📡" },
    ],
    description:
      "Klient SaaS na Vercel zredukował koszty hostingu o 35%, skrócił build time o 40% i zwiększył pojemność ruchu o 50% przy jednoczesnym obniżeniu kosztów infrastruktury dzięki Edge Network Vercel.",
    highlights: [
      "Vercel Edge Network",
      "Automatic scaling",
      "Pay-per-use model",
    ],
    source: "https://pagepro.co/blog/vercel-hosting-costs/",
    sourceLabel: "Pagepro Blog",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0070F3] bg-[#0070F3]/10 border border-[#0070F3]/20 rounded-full mb-4 uppercase tracking-widest">
            Dane produkcyjne
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Rzeczywiste wyniki firm, które przeprowadziły migrację na Next.js
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.company}
              className={`card-hover rounded-2xl border ${c.border} bg-gradient-to-br ${c.color} bg-[#161B22] p-6 flex flex-col`}
            >
              {/* Company header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${c.accentColor}20` }}
                  >
                    {c.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#E6EDF3] text-lg">{c.company}</h3>
                    <span className="text-xs text-[#8B949E]">{c.industry}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#0D1117]/50 rounded-xl p-3 border border-[#30363D]/50"
                  >
                    <div className="text-xl mb-1">{m.icon}</div>
                    <div
                      className="text-lg font-bold leading-tight"
                      style={{ color: c.accentColor }}
                    >
                      {m.after}
                    </div>
                    <div className="text-xs text-[#8B949E] mt-0.5">{m.label}</div>
                    {m.before !== "—" && (
                      <div className="text-xs text-[#8B949E] mt-0.5 line-through opacity-60">
                        było: {m.before}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-[#8B949E] leading-relaxed mb-4 flex-grow">
                {c.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#8B949E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FB950] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Source */}
              <a
                href={c.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-[#0070F3] transition-colors border-t border-[#30363D]/50 pt-4"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Źródło: {c.sourceLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
