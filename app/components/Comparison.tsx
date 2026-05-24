"use client";

const rows = [
  {
    criterion: "Server-Side Rendering (SSR)",
    twig: { value: "Partial (PHP)", note: "Tylko PHP server-side", ok: false },
    nextjs: { value: "Native SSR/SSG/ISR", note: "Pełna kontrola renderowania", ok: true },
  },
  {
    criterion: "SEO & Meta tags",
    twig: { value: "Manualne", note: "Brak wbudowanego wsparcia", ok: false },
    nextjs: { value: "Next Metadata API", note: "Automatyczne OG, sitemap, robots", ok: true },
  },
  {
    criterion: "Core Web Vitals",
    twig: { value: "Trudne do optymalizacji", note: "Wymaga ręcznej konfiguracji", ok: false },
    nextjs: { value: "Wbudowana optymalizacja", note: "Image, Font, Script optimization", ok: true },
  },
  {
    criterion: "Headless CMS",
    twig: { value: "Ograniczone", note: "Tight coupling z Symfony", ok: false },
    nextjs: { value: "Natywne wsparcie", note: "Contentful, Sanity, Strapi, etc.", ok: true },
  },
  {
    criterion: "Skalowalność",
    twig: { value: "Serwer PHP", note: "Skalowanie pionowe / manual", ok: false },
    nextjs: { value: "Edge / Serverless", note: "Auto-scaling na Vercel/AWS", ok: true },
  },
  {
    criterion: "Koszty infrastruktury",
    twig: { value: "Wysokie (VPS/dedicated)", note: "Stałe koszty serwera", ok: false },
    nextjs: { value: "Pay-per-use", note: "Serverless — płacisz za użycie", ok: true },
  },
  {
    criterion: "Ekosystem & DX",
    twig: { value: "PHP/Symfony ecosystem", note: "Mniejsza społeczność frontend", ok: false },
    nextjs: { value: "React ecosystem", note: "npm, 2M+ paczek, duża społeczność", ok: true },
  },
  {
    criterion: "Internacjonalizacja (i18n)",
    twig: { value: "Symfony Translator", note: "Wymaga custom setup", ok: false },
    nextjs: { value: "Wbudowany i18n routing", note: "next.config + middleware", ok: true },
  },
  {
    criterion: "Czas do wdrożenia (TTD)",
    twig: { value: "Build + FTP/SSH deploy", note: "Ręczny, podatny na błędy", ok: false },
    nextjs: { value: "Git push → auto deploy", note: "CI/CD z Vercel/Netlify", ok: true },
  },
  {
    criterion: "TypeScript support",
    twig: { value: "Brak natywny", note: "PHP nie ma TypeScript", ok: false },
    nextjs: { value: "First-class TypeScript", note: "Zero-config, pełne typy", ok: true },
  },
  {
    criterion: "Build Time",
    twig: { value: "Wolny (minutes)",  note: "Webpack + PHP compilation", ok: false },
    nextjs: { value: "Szybki (seconds)", note: "Turbopack + ISR + cache", ok: true },
  },
  {
    criterion: "API Routes",
    twig: { value: "Symfony Controllers", note: "Osobna warstwa backendu", ok: false },
    nextjs: { value: "Built-in API Routes", note: "Full-stack w jednym projekcie", ok: true },
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D29922] bg-[#D29922]/10 border border-[#D29922]/20 rounded-full mb-4 uppercase tracking-widest">
            Head-to-head
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Twig/Symfony vs Next.js
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Szczegółowe porównanie według kluczowych kryteriów technicznych i biznesowych
          </p>
        </div>

        {/* Score summary */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B949E]">0</div>
            <div className="text-sm text-[#8B949E] mt-1">Twig/Symfony</div>
          </div>
          <div className="text-2xl text-[#30363D]">vs</div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3FB950]">{rows.length}</div>
            <div className="text-sm text-[#8B949E] mt-1">Next.js</div>
          </div>
        </div>

        {/* Table - desktop */}
        <div className="hidden lg:block rounded-2xl border border-[#30363D] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#161B22] border-b border-[#30363D]">
                <th className="text-left py-4 px-6 text-sm font-semibold text-[#8B949E] w-1/3">
                  Kryterium
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-[#8B949E] w-1/3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#8B949E]" />
                    Twig / Symfony
                  </div>
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-[#0070F3] w-1/3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#0070F3]" />
                    Next.js ▲
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-[#30363D]/50 transition-colors hover:bg-[#161B22]/50 ${
                    i % 2 === 0 ? "bg-[#0D1117]" : "bg-[#0D1117]/50"
                  }`}
                >
                  <td className="py-4 px-6">
                    <span className="font-medium text-[#E6EDF3] text-sm">{row.criterion}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="flex items-center gap-2 text-sm text-[#8B949E]">
                        <svg className="w-4 h-4 text-[#F85149] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {row.twig.value}
                      </span>
                      <span className="text-xs text-[#8B949E]/70 mt-1">{row.twig.note}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center bg-[#0070F3]/5">
                    <div className="inline-flex flex-col items-center">
                      <span className="flex items-center gap-2 text-sm text-[#3FB950] font-medium">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {row.nextjs.value}
                      </span>
                      <span className="text-xs text-[#8B949E]/70 mt-1">{row.nextjs.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-3">
          {rows.map((row) => (
            <div key={row.criterion} className="bg-[#161B22] border border-[#30363D] rounded-xl p-4">
              <h4 className="font-semibold text-[#E6EDF3] text-sm mb-3">{row.criterion}</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F85149]/5 border border-[#F85149]/20 rounded-lg p-3">
                  <div className="text-xs text-[#F85149] font-semibold mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Twig/Symfony
                  </div>
                  <div className="text-xs text-[#8B949E]">{row.twig.value}</div>
                </div>
                <div className="bg-[#3FB950]/5 border border-[#3FB950]/20 rounded-lg p-3">
                  <div className="text-xs text-[#3FB950] font-semibold mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Next.js
                  </div>
                  <div className="text-xs text-[#8B949E]">{row.nextjs.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
