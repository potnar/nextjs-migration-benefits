"use client";

import { useState } from "react";

/* ─── Demo 1: ISR Counter ─────────────────────────────────── */
function ISRDemo() {
  const [count, setCount] = useState(0);
  const [revalidating, setRevalidating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [log, setLog] = useState<string[]>(["Strona załadowana (cache hit)"]);

  const addLog = (msg: string) =>
    setLog((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 4)]);

  const simulate = () => {
    setRevalidating(true);
    addLog("Żądanie do serwera...");
    setTimeout(() => {
      setCount((c) => c + 1);
      setLastUpdated(new Date());
      setRevalidating(false);
      addLog("✓ Strona przebudowana w tle (ISR)");
    }, 1200);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-[#8B949E] leading-relaxed">
        <strong className="text-[#E6EDF3]">ISR (Incremental Static Regeneration)</strong> — strona jest statyczna i ładuje się błyskawicznie, ale dane odświeżają się w tle bez rebuildu całego projektu.
      </p>
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${revalidating ? "bg-[#D29922] animate-pulse" : "bg-[#3FB950]"}`} />
            <span className="text-xs text-[#8B949E]">{revalidating ? "Rewalidacja..." : "Cache aktywny"}</span>
          </div>
          <span className="text-xs text-[#8B949E]">
            Wersja: <span className="text-[#0070F3] font-mono font-bold">#{count + 1}</span>
          </span>
        </div>
        <div className="bg-[#161B22] rounded-lg p-4 mb-3 border border-[#30363D]/50">
          <div className="text-xs text-[#8B949E] mb-1">Treść strony (statyczna, z cache):</div>
          <div className="text-2xl font-bold text-[#E6EDF3]">Licznik odwiedzin: <span className="text-[#0070F3]">{(count + 1) * 1247 + 38291}</span></div>
          <div className="text-xs text-[#8B949E] mt-1">Ostatnia aktualizacja: {lastUpdated.toLocaleTimeString()}</div>
        </div>
        <div className="font-mono text-xs text-[#3FB950] bg-[#0D1117] rounded-lg p-3 border border-[#30363D]/50 space-y-0.5 max-h-24 overflow-hidden">
          {log.map((l, i) => <div key={i} className={i === 0 ? "text-[#3FB950]" : "text-[#8B949E]"}>{l}</div>)}
        </div>
      </div>
      <button
        onClick={simulate}
        disabled={revalidating}
        className="w-full py-2.5 bg-[#0070F3] hover:bg-[#0060D9] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-all"
      >
        {revalidating ? "⟳ Rewalidacja w toku..." : "↺ Symuluj rewalidację strony"}
      </button>
    </div>
  );
}

/* ─── Demo 2: Image Optimization ─────────────────────────── */
function ImageOptDemo() {
  const [optimized, setOptimized] = useState(true);

  const sizes = {
    original: { size: "2.4 MB", format: "JPEG", loadTime: "3.8s", blur: false },
    optimized: { size: "68 KB", format: "WebP", loadTime: "0.3s", blur: false },
  };
  const current = optimized ? sizes.optimized : sizes.original;

  return (
    <div className="space-y-4">
      <p className="text-xs text-[#8B949E] leading-relaxed">
        <strong className="text-[#E6EDF3]">next/image</strong> — automatycznie konwertuje do WebP/AVIF, lazy loading, blur placeholder i responsywne rozmiary. Zero konfiguracji.
      </p>
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden">
        {/* Simulated image */}
        <div className="relative h-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1117 0%, #161B22 100%)" }}>
          {/* Pixel grid sim */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`grid gap-1 transition-all duration-500 ${optimized ? "opacity-100" : "opacity-40 blur-[1px]"}`}
              style={{ gridTemplateColumns: "repeat(12,1fr)", width: "90%", height: "80%" }}>
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="rounded-sm" style={{
                  backgroundColor: `hsl(${(i * 17 + 200) % 360}, ${optimized ? 70 : 30}%, ${optimized ? 45 : 25}%)`,
                  opacity: optimized ? 1 : 0.5,
                }} />
              ))}
            </div>
          </div>
          {/* Overlay badge */}
          <div className="absolute top-2 left-2 flex gap-2">
            <span className={`text-xs px-2 py-0.5 rounded font-bold ${optimized ? "bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/30" : "bg-[#F85149]/20 text-[#F85149] border border-[#F85149]/30"}`}>
              {current.format}
            </span>
          </div>
          {/* Blur placeholder sim */}
          {!optimized && (
            <div className="absolute inset-0 bg-[#161B22]/60 flex items-center justify-center">
              <span className="text-xs text-[#8B949E]">Brak blur placeholder</span>
            </div>
          )}
        </div>
        <div className="p-4 grid grid-cols-3 gap-3 border-t border-[#30363D]">
          {[
            { label: "Rozmiar", value: current.size, good: optimized },
            { label: "Format", value: current.format, good: optimized },
            { label: "Load time", value: current.loadTime, good: optimized },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-sm font-bold ${stat.good ? "text-[#3FB950]" : "text-[#F85149]"}`}>{stat.value}</div>
              <div className="text-xs text-[#8B949E]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setOptimized(true)}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${optimized ? "bg-[#3FB950]/15 text-[#3FB950] border border-[#3FB950]/30" : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]"}`}
        >
          ✓ next/image (optymalizowane)
        </button>
        <button
          onClick={() => setOptimized(false)}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!optimized ? "bg-[#F85149]/15 text-[#F85149] border border-[#F85149]/30" : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]"}`}
        >
          ✗ &lt;img&gt; (bez optymalizacji)
        </button>
      </div>
    </div>
  );
}

/* ─── Demo 3: SSR vs SSG vs CSR ──────────────────────────── */
function RenderingDemo() {
  const [mode, setMode] = useState<"ssg" | "ssr" | "csr">("ssg");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("Treść załadowana natychmiast ze statycznego cache.");

  const modes = {
    ssg: {
      label: "SSG", color: "#3FB950", icon: "⚡",
      desc: "Strona pre-renderowana w build time. Serwowana z CDN. Najszybsza opcja.",
      ttfb: "~20ms", fcp: "~0.3s", tti: "~0.5s",
      steps: ["Build time: generowanie HTML", "Deploy na CDN", "Użytkownik: instant response"],
    },
    ssr: {
      label: "SSR", color: "#D29922", icon: "🔄",
      desc: "Strona generowana na serwerze przy każdym żądaniu. Świeże dane, wolniejszy TTFB.",
      ttfb: "~150ms", fcp: "~0.8s", tti: "~1.2s",
      steps: ["Żądanie → serwer", "Fetch danych + render HTML", "Response do klienta"],
    },
    csr: {
      label: "Legacy PHP", color: "#F85149", icon: "🐌",
      desc: "Typowe podejście legacy PHP/monolith: serwer renderuje HTML, JS dokłada interaktywność. Wolny initial load.",
      ttfb: "~600ms", fcp: "~2.4s", tti: "~3.8s",
      steps: ["Żądanie → PHP server", "Monolith + template render", "HTML + osobne requesty JS/CSS"],
    },
  };

  const current = modes[mode];

  const simulate = () => {
    setLoading(true);
    setContent("Ładowanie...");
    const delay = mode === "ssg" ? 150 : mode === "ssr" ? 600 : 2000;
    setTimeout(() => {
      setLoading(false);
      setContent(
        mode === "ssg" ? "Treść załadowana natychmiast ze statycznego cache." :
        mode === "ssr" ? "Treść pobrana i wyrenderowana przez serwer w czasie rzeczywistym." :
        "Treść załadowana przez legacy PHP/monolith + czas na hydratację JS..."
      );
    }, delay);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-[#8B949E] leading-relaxed">
        <strong className="text-[#E6EDF3]">Strategie renderowania</strong> — Next.js daje pełną kontrolę: SSG, SSR, ISR lub CSR. Legacy PHP/monolith jest ograniczony do server-side render.
      </p>
      <div className="flex gap-1 bg-[#0D1117] border border-[#30363D] rounded-xl p-1">
        {(Object.keys(modes) as Array<keyof typeof modes>).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setContent(modes[m].desc.split(".")[0] + "."); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${mode === m ? "text-white" : "text-[#8B949E] hover:text-[#E6EDF3]"}`}
            style={mode === m ? { backgroundColor: `${modes[m].color}25`, border: `1px solid ${modes[m].color}50`, color: modes[m].color } : {}}
          >
            {modes[m].icon} {modes[m].label}
          </button>
        ))}
      </div>
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl p-4 space-y-3">
        <p className="text-xs text-[#8B949E]">{current.desc}</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "TTFB", value: current.ttfb },
            { label: "FCP", value: current.fcp },
            { label: "TTI", value: current.tti },
          ].map((m) => (
            <div key={m.label} className="bg-[#161B22] rounded-lg p-2.5 text-center border border-[#30363D]/50">
              <div className="text-sm font-bold" style={{ color: current.color }}>{m.value}</div>
              <div className="text-xs text-[#8B949E]">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {current.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#8B949E]">
              <span className="w-4 h-4 rounded-full text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: current.color }}>{i + 1}</span>
              {step}
            </div>
          ))}
        </div>
        <div className={`bg-[#161B22] rounded-lg p-3 border border-[#30363D]/50 text-xs transition-all ${loading ? "text-[#8B949E]" : "text-[#E6EDF3]"}`}>
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 animate-spin" style={{ color: current.color }} fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              {content}
            </span>
          ) : content}
        </div>
      </div>
      <button onClick={simulate} disabled={loading}
        className="w-full py-2.5 text-sm font-semibold rounded-lg transition-all disabled:opacity-50"
        style={{ backgroundColor: `${current.color}20`, color: current.color, border: `1px solid ${current.color}40` }}>
        {loading ? "Ładowanie..." : `▶ Symuluj ładowanie (${current.label})`}
      </button>
    </div>
  );
}

/* ─── Demo 4: Core Web Vitals ─────────────────────────────── */
function CWVDemo() {
  const [stack, setStack] = useState<"nextjs" | "twig">("nextjs");

  const data = {
    nextjs: {
      lcp: { value: 1.2, unit: "s", label: "LCP", desc: "Largest Contentful Paint", good: true },
      fid: { value: 8, unit: "ms", label: "FID", desc: "First Input Delay", good: true },
      cls: { value: 0.04, unit: "", label: "CLS", desc: "Cumulative Layout Shift", good: true },
      fcp: { value: 0.8, unit: "s", label: "FCP", desc: "First Contentful Paint", good: true },
    },
    twig: {
      lcp: { value: 4.1, unit: "s", label: "LCP", desc: "Largest Contentful Paint", good: false },
      fid: { value: 180, unit: "ms", label: "FID", desc: "First Input Delay", good: false },
      cls: { value: 0.28, unit: "", label: "CLS", desc: "Cumulative Layout Shift", good: false },
      fcp: { value: 2.9, unit: "s", label: "FCP", desc: "First Contentful Paint", good: false },
    },
  };

  const thresholds = {
    lcp:  { good: 2.5,  poor: 4.0 },
    fid:  { good: 100,  poor: 300 },
    cls:  { good: 0.1,  poor: 0.25 },
    fcp:  { good: 1.8,  poor: 3.0 },
  };

  const current = data[stack];

  return (
    <div className="space-y-4">
      <p className="text-xs text-[#8B949E] leading-relaxed">
        <strong className="text-[#E6EDF3]">Core Web Vitals</strong> — metryki Google decydujące o rankingu SEO. Next.js automatycznie optymalizuje wszystkie cztery wskaźniki.
      </p>
      <div className="flex gap-2">
        {(["nextjs", "twig"] as const).map((s) => (
          <button key={s} onClick={() => setStack(s)}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
              stack === s
                ? s === "nextjs" ? "bg-[#3FB950]/15 text-[#3FB950] border border-[#3FB950]/30" : "bg-[#F85149]/15 text-[#F85149] border border-[#F85149]/30"
                : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]"
            }`}>
            {s === "nextjs" ? "▲ Next.js" : "🐘 Legacy PHP"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {(Object.entries(current) as [keyof typeof thresholds, typeof current.lcp][]).map(([key, metric]) => {
          const threshold = thresholds[key];
          const ratio = Math.min(metric.value / threshold.poor, 1);
          const barColor = metric.good ? "#3FB950" : metric.value <= threshold.good ? "#3FB950" : "#F85149";
          return (
            <div key={key} className="bg-[#0D1117] border border-[#30363D] rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-[#E6EDF3]">{metric.label}</span>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${metric.good ? "bg-[#3FB950]/10 text-[#3FB950]" : "bg-[#F85149]/10 text-[#F85149]"}`}>
                  {metric.good ? "Good" : "Poor"}
                </span>
              </div>
              <div className="text-lg font-bold mb-1" style={{ color: barColor }}>
                {metric.value}{metric.unit}
              </div>
              <div className="w-full bg-[#30363D] rounded-full h-1.5 mb-1">
                <div className="h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${ratio * 100}%`, backgroundColor: barColor }} />
              </div>
              <div className="text-[10px] text-[#8B949E]">{metric.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Demo 5: API Routes ──────────────────────────────────── */
function APIRoutesDemo() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<null | object>(null);
  const [endpoint, setEndpoint] = useState("/api/products");

  const mockResponses: Record<string, object> = {
    "/api/products": { products: [{ id: 1, name: "Głośnik Pro", price: 299 }, { id: 2, name: "Soundbar X", price: 499 }], total: 2, cached: true },
    "/api/user": { id: "usr_123", name: "Jan Kowalski", plan: "pro", createdAt: "2024-01-15" },
    "/api/analytics": { pageViews: 12849, conversion: "3.2%", avgLoadTime: "1.1s", bounceRate: "22%" },
  };

  const fetchData = () => {
    setLoading(true);
    setResponse(null);
    setTimeout(() => {
      setLoading(false);
      setResponse(mockResponses[endpoint]);
    }, 600);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-[#8B949E] leading-relaxed">
        <strong className="text-[#E6EDF3]">API Routes</strong> — Next.js zawiera wbudowany backend. Endpointy `/api/*` działają jako serverless functions. Zero konfiguracji serwera.
      </p>
      <div className="flex gap-1 flex-wrap">
        {Object.keys(mockResponses).map((ep) => (
          <button key={ep} onClick={() => { setEndpoint(ep); setResponse(null); }}
            className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all ${endpoint === ep ? "bg-[#0070F3]/15 text-[#0070F3] border border-[#0070F3]/30" : "bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]"}`}>
            {ep}
          </button>
        ))}
      </div>
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[#30363D] bg-[#161B22]/50">
          <span className="text-xs text-[#3FB950] font-mono font-bold">GET</span>
          <span className="text-xs text-[#E6EDF3] font-mono">{endpoint}</span>
          <span className="ml-auto text-xs text-[#8B949E]">Next.js API Route</span>
        </div>
        <div className="p-3 font-mono text-xs min-h-[100px]">
          {loading ? (
            <span className="text-[#8B949E] flex items-center gap-2">
              <svg className="w-3 h-3 animate-spin text-[#0070F3]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Fetching...
            </span>
          ) : response ? (
            <pre className="text-[#3FB950] whitespace-pre-wrap text-[11px]">{JSON.stringify(response, null, 2)}</pre>
          ) : (
            <span className="text-[#8B949E]">Kliknij Fetch aby wywołać endpoint</span>
          )}
        </div>
      </div>
      <button onClick={fetchData} disabled={loading}
        className="w-full py-2.5 bg-[#0070F3] hover:bg-[#0060D9] disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-all">
        {loading ? "⟳ Fetching..." : `▶ Fetch ${endpoint}`}
      </button>
    </div>
  );
}

/* ─── Main LiveDemos component ────────────────────────────── */
const demos = [
  { id: "isr",     label: "ISR",            icon: "♻️",  color: "#0070F3", component: ISRDemo },
  { id: "image",   label: "Image Opt.",     icon: "🖼️",  color: "#8B5CF6", component: ImageOptDemo },
  { id: "render",  label: "Renderowanie",   icon: "⚡",  color: "#D29922", component: RenderingDemo },
  { id: "cwv",     label: "Core Web Vitals",icon: "📊",  color: "#EC4899", component: CWVDemo },
  { id: "api",     label: "API Routes",     icon: "🔌",  color: "#10B981", component: APIRoutesDemo },
];

export default function LiveDemos() {
  const [active, setActive] = useState("isr");
  const ActiveDemo = demos.find((d) => d.id === active)!.component;
  const activeDemo = demos.find((d) => d.id === active)!;

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden">
      {/* Demo tab bar */}
      <div className="flex overflow-x-auto border-b border-[#30363D]">
        {demos.map((demo) => (
          <button
            key={demo.id}
            onClick={() => setActive(demo.id)}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-4 text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
              active === demo.id
                ? "border-current bg-[#0D1117]/40"
                : "border-transparent text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]/20"
            }`}
            style={active === demo.id ? { color: demo.color, borderColor: demo.color } : {}}
          >
            <span>{demo.icon}</span>
            {demo.label}
          </button>
        ))}
      </div>

      {/* Demo content */}
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: demo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{activeDemo.icon}</span>
              <h3 className="text-lg font-bold text-[#E6EDF3]">{activeDemo.label}</h3>
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ color: activeDemo.color, backgroundColor: `${activeDemo.color}15`, border: `1px solid ${activeDemo.color}30` }}>
                Live demo
              </span>
            </div>
            <ActiveDemo />
          </div>

          {/* Right: code snippet */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-[#8B949E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-sm font-semibold text-[#8B949E]">Kod (Next.js)</h3>
            </div>
            <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[#30363D] bg-[#161B22]/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                </div>
                <span className="text-xs text-[#8B949E] font-mono">
                  {active === "isr" ? "app/page.tsx" : active === "image" ? "app/components/Hero.tsx" : active === "render" ? "app/products/page.tsx" : active === "cwv" ? "next.config.mjs" : "app/api/products/route.ts"}
                </span>
              </div>
              <pre className="p-4 text-xs font-mono text-[#E6EDF3] overflow-x-auto leading-relaxed">
                {active === "isr" && `// app/page.tsx
export const revalidate = 60; // sekund

export default async function Page() {
  const data = await fetch('/api/data', {
    next: { revalidate: 60 }
  });

  return <main>{/* treść */}</main>;
}`}
                {active === "image" && `// next/image — automatyczna optymalizacja
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority          // LCP optimization
      placeholder="blur" // blur-up effect
      // Auto: WebP, lazy load,
      // responsive sizes
    />
  );
}`}
                {active === "render" && `// app/products/page.tsx
// SSG — generowane w build time
export default async function Products() {
  const products = await getProducts();
  return <ProductList items={products} />;
}

// SSR — przy każdym żądaniu
export const dynamic = 'force-dynamic';

// ISR — odświeżane co 60s
export const revalidate = 60;`}
                {active === "cwv" && `// next.config.mjs
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Automatic:
  // ✓ Font optimization (no layout shift)
  // ✓ Script optimization
  // ✓ CSS optimization
  // ✓ Bundle splitting
  // ✓ Prefetching
};`}
                {active === "api" && `// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const products = await db.products.findMany({
    cache: 'force-cache', // CDN cache
  });

  return NextResponse.json({
    products,
    total: products.length,
  });
}
// Brak konfiguracji serwera!
// Auto-deploy jako serverless fn`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
