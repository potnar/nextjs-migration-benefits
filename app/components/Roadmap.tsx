"use client";

const phases = [
  {
    phase: 1,
    title: "Audyt techniczny",
    duration: "2–3 tygodnie",
    color: "#0070F3",
    bgColor: "from-blue-500/15 to-transparent",
    border: "border-blue-500/25",
    icon: "🔍",
    tasks: [
      "Analiza aktualnego stacku Twig/Symfony",
      "Identyfikacja zewnętrznych API i integracji",
      "Audyt SEO i Core Web Vitals baseline",
      "Inwentaryzacja komponentów Twig/szablonów",
      "Analiza zależności composer/npm",
      "Mapowanie ścieżek URL i routingu",
    ],
    deliverables: ["Raport techniczny", "Mapa komponentów", "Priorytetyzacja zadań"],
  },
  {
    phase: 2,
    title: "Setup środowiska",
    duration: "1–2 tygodnie",
    color: "#8B5CF6",
    bgColor: "from-purple-500/15 to-transparent",
    border: "border-purple-500/25",
    icon: "⚙️",
    tasks: [
      "Inicjalizacja projektu Next.js 14 (App Router)",
      "Konfiguracja TypeScript + ESLint + Prettier",
      "Setup Tailwind CSS / system designu",
      "Konfiguracja CI/CD (GitHub Actions + Vercel)",
      "Setup środowisk (dev/staging/prod)",
      "Konfiguracja CMS headless (jeśli dotyczy)",
    ],
    deliverables: ["Boilerplate projektu", "Pipeline CI/CD", "Design system"],
  },
  {
    phase: 3,
    title: "Migracja API Backend",
    duration: "3–5 tygodni",
    color: "#06B6D4",
    bgColor: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/25",
    icon: "🔌",
    tasks: [
      "Przeniesienie logiki z Symfony Controllers do API Routes",
      "Migracja warstwy danych (Doctrine → Prisma/Drizzle)",
      "Integracja z zewnętrznymi serwisami",
      "Implementacja middleware (auth, CORS, rate limiting)",
      "Testy API (jednostkowe i integracyjne)",
      "Dokumentacja endpointów (OpenAPI/Swagger)",
    ],
    deliverables: ["API Routes", "Testy", "Dokumentacja API"],
  },
  {
    phase: 4,
    title: "Migracja komponentów",
    duration: "6–12 tygodni",
    color: "#F97316",
    bgColor: "from-orange-500/15 to-transparent",
    border: "border-orange-500/25",
    icon: "🧩",
    tasks: [
      "Konwersja szablonów Twig → React Server Components",
      "Implementacja strategii renderowania (SSG/SSR/ISR)",
      "Migracja formularzy (Symfony Forms → React Hook Form)",
      "Przeniesienie stylów (Twig/Bootstrap → Tailwind)",
      "Implementacja routing (Symfony routes → App Router)",
      "Integracja CMS z Next.js Image i Font optimization",
    ],
    deliverables: ["Komponenty React", "Strony Next.js", "Routing"],
  },
  {
    phase: 5,
    title: "SEO & Performance",
    duration: "2–3 tygodnie",
    color: "#3FB950",
    bgColor: "from-green-500/15 to-transparent",
    border: "border-green-500/25",
    icon: "📈",
    tasks: [
      "Migracja meta tagów do Next.js Metadata API",
      "Konfiguracja sitemap.xml i robots.txt",
      "Optymalizacja Core Web Vitals (LCP, FID, CLS)",
      "Implementacja strukturalnych danych JSON-LD",
      "Setup redirects i canonical URLs",
      "Testy Lighthouse i Web Vitals monitoring",
    ],
    deliverables: ["SEO audit", "Lighthouse 90+", "Redirects map"],
  },
  {
    phase: 6,
    title: "QA & Launch",
    duration: "2–4 tygodnie",
    color: "#EC4899",
    bgColor: "from-pink-500/15 to-transparent",
    border: "border-pink-500/25",
    icon: "🚀",
    tasks: [
      "Testy end-to-end (Playwright/Cypress)",
      "Testy regresji wizualnej (Storybook/Chromatic)",
      "Performance testing i load testing",
      "Cutover plan i rollback strategy",
      "Szkolenie zespołu z nowego stacku",
      "Monitoring post-launch (Vercel Analytics, Sentry)",
    ],
    deliverables: ["Test suite", "Launch checklist", "Monitoring setup"],
  },
];

export default function Roadmap() {
  const totalWeeks = "16–29";

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#EC4899] bg-[#EC4899]/10 border border-[#EC4899]/20 rounded-full mb-4 uppercase tracking-widest">
            6 faz migracji
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Plan migracji — Roadmap
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto mb-4">
            Ustrukturyzowany proces migracji z Twig/Symfony na Next.js
          </p>
          <div className="inline-flex items-center gap-2 bg-[#161B22] border border-[#30363D] rounded-full px-5 py-2.5">
            <span className="text-sm text-[#8B949E]">Szacowany czas całkowity:</span>
            <span className="text-[#E6EDF3] font-bold">{totalWeeks} tygodni</span>
          </div>
        </div>

        {/* Source badge */}
        <div className="flex justify-center mb-12">
          <a
            href="https://naturaily.com/blog/nextjs-features-benefits-case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#8B949E] hover:text-[#0070F3] transition-colors border border-[#30363D] hover:border-[#0070F3]/40 rounded-full px-4 py-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Źródło: Naturaily Blog — Next.js Case Studies
          </a>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0070F3] via-[#30363D] to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={phase.phase}
                  className={`relative lg:flex lg:items-start lg:gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:mb-16`}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-2rem)] card-hover`}>
                    <div
                      className={`bg-[#161B22] border ${phase.border} bg-gradient-to-br ${phase.bgColor} rounded-2xl p-6`}
                    >
                      {/* Phase header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ backgroundColor: `${phase.color}20` }}
                        >
                          {phase.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs font-bold uppercase tracking-widest"
                              style={{ color: phase.color }}
                            >
                              Faza {phase.phase}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs bg-[#0D1117] border border-[#30363D] rounded-full px-2.5 py-0.5 text-[#8B949E]">
                              ⏱ {phase.duration}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#E6EDF3]">{phase.title}</h3>
                        </div>
                      </div>

                      {/* Tasks */}
                      <ul className="space-y-2 mb-5">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-[#8B949E]">
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: phase.color }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {task}
                          </li>
                        ))}
                      </ul>

                      {/* Deliverables */}
                      <div className="border-t border-[#30363D]/50 pt-4">
                        <p className="text-xs text-[#8B949E] mb-2 font-semibold uppercase tracking-wider">
                          Deliverables
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((d) => (
                            <span
                              key={d}
                              className="text-xs px-2.5 py-1 rounded-full border"
                              style={{
                                color: phase.color,
                                borderColor: `${phase.color}40`,
                                backgroundColor: `${phase.color}10`,
                              }}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 items-center justify-center text-sm font-bold text-white z-10 mt-4"
                    style={{
                      backgroundColor: phase.color,
                      borderColor: "#0D1117",
                      boxShadow: `0 0 20px ${phase.color}40`,
                    }}
                  >
                    {phase.phase}
                  </div>

                  {/* Empty space for the other side (desktop) */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-br from-[#0070F3]/10 to-[#00DFD8]/5 border border-[#0070F3]/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#E6EDF3] mb-3">
            Gotowy do migracji?
          </h3>
          <p className="text-[#8B949E] max-w-xl mx-auto mb-6">
            Każda firma ma inny punkt startowy. Przeprowadzimy bezpłatny audyt techniczny
            i przygotujemy spersonalizowany plan migracji.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://naturaily.com/blog/nextjs-features-benefits-case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0070F3] hover:bg-[#0060D9] text-white rounded-lg font-semibold transition-colors text-sm"
            >
              Więcej o migracji →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
