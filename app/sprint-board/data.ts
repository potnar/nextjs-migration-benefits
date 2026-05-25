export type Priority = "critical" | "high" | "medium" | "low";
export type Status = "todo" | "in-progress" | "review" | "done";
export type Role = "pm" | "dev" | "both";
export type SprintId = "sprint-1" | "sprint-2" | "sprint-3" | "sprint-4" | "backlog";

export type Epic = {
  id: string;
  label: string;
  color: string;
  icon: string;
};

export type SprintMeta = {
  id: SprintId;
  label: string;
  goal: string;
  dates: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  epicId: string;
  sprint: SprintId;
  status: Status;
  priority: Priority;
  storyPoints: number;
  role: Role;
  labels: string[];
};

export const epics: Epic[] = [
  { id: "discovery",   label: "Discovery & Audit",    color: "#0EA5E9", icon: "🔍" },
  { id: "foundation",  label: "Fundament techniczny",  color: "#8B5CF6", icon: "⚙️" },
  { id: "migration",   label: "Migracja UI",           color: "#F97316", icon: "🔄" },
  { id: "performance", label: "Wydajność & SEO",       color: "#3FB950", icon: "⚡" },
  { id: "launch",      label: "Launch & Monitoring",   color: "#EC4899", icon: "🚀" },
];

export const sprintsMeta: SprintMeta[] = [
  {
    id: "sprint-1",
    label: "Sprint 1",
    goal: "Discovery: zmapuj obecny stan stosu i zdefiniuj mierzalne kryteria sukcesu migracji",
    dates: "Tyg. 1–2",
  },
  {
    id: "sprint-2",
    label: "Sprint 2",
    goal: "Proof of Concept: zwaliduj architekturę Next.js na jednej wybranej podstronie",
    dates: "Tyg. 3–4",
  },
  {
    id: "sprint-3",
    label: "Sprint 3",
    goal: "Core migration: migruj główne widoki, integracje zewnętrzne i przygotuj testy E2E",
    dates: "Tyg. 5–6",
  },
  {
    id: "sprint-4",
    label: "Sprint 4",
    goal: "Launch: stabilizuj, przetestuj pod obciążeniem i wykonaj cutover na produkcję",
    dates: "Tyg. 7–8",
  },
  {
    id: "backlog",
    label: "Backlog",
    goal: "Zadania odkładane — zaplanowane po stabilizacji głównej migracji",
    dates: "Future",
  },
];

export const tasks: Task[] = [
  // ── Sprint 1: Discovery & Foundation ──────────────────────────
  {
    id: "NEXT-001",
    title: "Audit techniczna obecnego stosu",
    description: "Inwentaryzacja komponentów, zależności npm, integracji zewnętrznych i wąskich gardeł wydajnościowych. Wyjście: dokument z listą priorytetów i szacunkiem trudności migracji.",
    epicId: "discovery",
    sprint: "sprint-1",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "both",
    labels: ["audit", "planning"],
  },
  {
    id: "NEXT-002",
    title: "Definicja KPI i kryteriów sukcesu",
    description: "Ustalenie mierzalnych celów: Lighthouse score, LCP, konwersje, czas deployu. Zapis obecnych wartości jako baseline do porównania po migracji.",
    epicId: "discovery",
    sprint: "sprint-1",
    status: "todo",
    priority: "high",
    storyPoints: 3,
    role: "pm",
    labels: ["KPI", "metrics", "baseline"],
  },
  {
    id: "NEXT-003",
    title: "Mapowanie komponentów do migracji",
    description: "Lista wszystkich komponentów UI z oceną trudności (S/M/L/XL) i zależnościami. Identyfikacja kandydatów do wspólnej biblioteki komponentów.",
    epicId: "discovery",
    sprint: "sprint-1",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "both",
    labels: ["components", "planning"],
  },
  {
    id: "NEXT-004",
    title: "Baseline pomiar Core Web Vitals",
    description: "Lighthouse audit i Web Vitals na kluczowych stronach (główna, produkt, checkout). Zapis wyników jako baseline przed migracją.",
    epicId: "performance",
    sprint: "sprint-1",
    status: "todo",
    priority: "medium",
    storyPoints: 2,
    role: "dev",
    labels: ["CWV", "lighthouse"],
  },
  {
    id: "NEXT-005",
    title: "Setup repozytorium Next.js 14 + CI/CD",
    description: "Inicjalizacja projektu Next.js 14 App Router, TypeScript, Tailwind, ESLint/Prettier. Konfiguracja pipeline CI/CD na Vercel z preview deployments.",
    epicId: "foundation",
    sprint: "sprint-1",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "dev",
    labels: ["setup", "CI/CD", "vercel"],
  },

  // ── Sprint 2: Proof of Concept ─────────────────────────────────
  {
    id: "NEXT-006",
    title: "PoC: migracja strony głównej na Next.js",
    description: "Przepisanie strony głównej jako Proof of Concept. Cel: walidacja architektury komponentowej i strategii renderowania (SSG/ISR).",
    epicId: "migration",
    sprint: "sprint-2",
    status: "todo",
    priority: "high",
    storyPoints: 8,
    role: "dev",
    labels: ["PoC", "SSG", "ISR"],
  },
  {
    id: "NEXT-007",
    title: "Implementacja ISR dla treści dynamicznych",
    description: "Konfiguracja Incremental Static Regeneration dla stron z treścią zmieniającą się rzadziej niż raz na godzinę. Redukcja rebuild time z godzin do sekund.",
    epicId: "foundation",
    sprint: "sprint-2",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "dev",
    labels: ["ISR", "performance"],
  },
  {
    id: "NEXT-008",
    title: "Porównanie wydajności PoC vs obecna strona",
    description: "Lighthouse run na PoC, zestawienie z baseline ze Sprint 1. Raport dla PM i stakeholderów z deltas Lighthouse, LCP i TTFB.",
    epicId: "performance",
    sprint: "sprint-2",
    status: "todo",
    priority: "high",
    storyPoints: 3,
    role: "dev",
    labels: ["lighthouse", "benchmark"],
  },
  {
    id: "NEXT-009",
    title: "Demo PoC i decyzja go/no-go",
    description: "Prezentacja wyników PoC dla stakeholderów. Zbieranie feedbacku i formalna decyzja o kontynuacji migracji w pełnym zakresie.",
    epicId: "discovery",
    sprint: "sprint-2",
    status: "todo",
    priority: "medium",
    storyPoints: 2,
    role: "pm",
    labels: ["stakeholders", "decision", "demo"],
  },
  {
    id: "NEXT-010",
    title: "Refinement backlogu na podstawie wniosków z PoC",
    description: "Aktualizacja wycen i priorytetów tasków na podstawie wniosków z PoC. Podział zadań XL na mniejsze, dostarczalne tickety.",
    epicId: "discovery",
    sprint: "sprint-2",
    status: "todo",
    priority: "medium",
    storyPoints: 3,
    role: "both",
    labels: ["refinement", "planning"],
  },

  // ── Sprint 3: Core Migration ────────────────────────────────────
  {
    id: "NEXT-011",
    title: "Migracja stron produktowych (SSG)",
    description: "Migracja wszystkich stron produktowych do Next.js SSG z dynamicznymi routes (/product/[slug]). getStaticPaths + getStaticProps lub generateStaticParams.",
    epicId: "migration",
    sprint: "sprint-3",
    status: "todo",
    priority: "high",
    storyPoints: 8,
    role: "dev",
    labels: ["SSG", "products", "routing"],
  },
  {
    id: "NEXT-012",
    title: "Implementacja Next.js Image Optimization",
    description: "Migracja wszystkich tagów img na next/image. Konfiguracja domains i formatów (WebP/AVIF). Oczekiwany wzrost Lighthouse performance o 10–15 pkt.",
    epicId: "performance",
    sprint: "sprint-3",
    status: "todo",
    priority: "medium",
    storyPoints: 3,
    role: "dev",
    labels: ["images", "WebP", "performance"],
  },
  {
    id: "NEXT-013",
    title: "Integracja z zewnętrznymi API i CMS",
    description: "Podłączenie istniejących integracji (CMS, API produktów, e-commerce backend) do warstwy Next.js Server Components i API Routes.",
    epicId: "migration",
    sprint: "sprint-3",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "dev",
    labels: ["API", "CMS", "integration"],
  },
  {
    id: "NEXT-014",
    title: "Testy regresji i E2E (Playwright)",
    description: "Konfiguracja Playwright. Pokrycie krytycznych ścieżek użytkownika: strona główna, produkt, formularz kontaktowy/checkout.",
    epicId: "migration",
    sprint: "sprint-3",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "dev",
    labels: ["testing", "E2E", "Playwright"],
  },
  {
    id: "NEXT-015",
    title: "Aktualizacja dokumentacji produktowej",
    description: "Uaktualnienie specyfikacji, user stories i roadmapy produktowej w Confluence/Notion po zmianach architektonicznych wprowadzonych przez migrację.",
    epicId: "discovery",
    sprint: "sprint-3",
    status: "todo",
    priority: "medium",
    storyPoints: 3,
    role: "pm",
    labels: ["docs", "Confluence"],
  },
  {
    id: "NEXT-016",
    title: "Setup Vercel Analytics i monitoring",
    description: "Włączenie Vercel Web Analytics, Speed Insights i alertów na Core Web Vitals. Konfiguracja dashboardu dostępnego dla PM.",
    epicId: "launch",
    sprint: "sprint-3",
    status: "todo",
    priority: "medium",
    storyPoints: 3,
    role: "dev",
    labels: ["analytics", "monitoring", "vercel"],
  },

  // ── Sprint 4: Launch & Optimization ───────────────────────────
  {
    id: "NEXT-017",
    title: "Load testing i optymalizacja bundle size",
    description: "Testy obciążeniowe (k6 / Artillery) na środowisku staging. Analiza bundle-analyzer, code splitting, dynamic imports i lazy loading komponentów.",
    epicId: "performance",
    sprint: "sprint-4",
    status: "todo",
    priority: "high",
    storyPoints: 5,
    role: "dev",
    labels: ["load-test", "bundle", "performance"],
  },
  {
    id: "NEXT-018",
    title: "Plan komunikacji cutover dla stakeholderów",
    description: "Przygotowanie harmonogramu cutover, listy kontaktów i szablonów komunikatów. Ustalenie okna maintenance i kryteriów rollback.",
    epicId: "launch",
    sprint: "sprint-4",
    status: "todo",
    priority: "high",
    storyPoints: 3,
    role: "pm",
    labels: ["communication", "cutover"],
  },
  {
    id: "NEXT-019",
    title: "Cutover plan i procedura rollback",
    description: "Szczegółowy plan zmiany DNS/CDN, checklist go-live i procedura rollback w ciągu 15 min. Akceptacja przez Tech Lead i PM przed wdrożeniem.",
    epicId: "launch",
    sprint: "sprint-4",
    status: "todo",
    priority: "critical",
    storyPoints: 5,
    role: "both",
    labels: ["cutover", "rollback", "go-live"],
  },
  {
    id: "NEXT-020",
    title: "Go-live i monitoring post-launch (48h)",
    description: "Uruchomienie na produkcji, 48h intensywny monitoring: error rate, CWV, konwersje. War room z Dev i PM, szybka reakcja na anomalie.",
    epicId: "launch",
    sprint: "sprint-4",
    status: "todo",
    priority: "critical",
    storyPoints: 3,
    role: "both",
    labels: ["go-live", "monitoring"],
  },

  // ── Backlog ────────────────────────────────────────────────────
  {
    id: "NEXT-021",
    title: "Integracja z GA4 i Hotjar",
    description: "Dodanie GA4 przez next/script Strategy='afterInteractive'. Konfiguracja event tracking dla zdarzeń e-commerce i heatmap Hotjar.",
    epicId: "performance",
    sprint: "backlog",
    status: "todo",
    priority: "medium",
    storyPoints: 3,
    role: "dev",
    labels: ["analytics", "GA4", "hotjar"],
  },
  {
    id: "NEXT-022",
    title: "A/B testing z Vercel Edge Config",
    description: "Infrastruktura do A/B testów z Vercel Edge Config i Next.js middleware. Testy wariantów UI z podziałem ruchu 50/50 dla PM.",
    epicId: "performance",
    sprint: "backlog",
    status: "todo",
    priority: "medium",
    storyPoints: 5,
    role: "both",
    labels: ["AB-test", "edge-config"],
  },
  {
    id: "NEXT-023",
    title: "SEO audit po migracji",
    description: "Pełny audit SEO po go-live: crawl Screaming Frog, weryfikacja sitemap.xml, robots.txt, strukturalne dane JSON-LD, indeksacja Google.",
    epicId: "performance",
    sprint: "backlog",
    status: "todo",
    priority: "high",
    storyPoints: 3,
    role: "pm",
    labels: ["SEO", "audit", "GSC"],
  },
  {
    id: "NEXT-024",
    title: "Internacjonalizacja (i18n) w Next.js",
    description: "Implementacja i18n routing Next.js App Router dla obsługi wielu języków. Migracja słowników i18n, konfiguracja locale detection.",
    epicId: "migration",
    sprint: "backlog",
    status: "todo",
    priority: "medium",
    storyPoints: 8,
    role: "dev",
    labels: ["i18n", "localization"],
  },
];
