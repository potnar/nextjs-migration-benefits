"use client";

import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from "recharts";

const chartData = [
  { loadTime: 0.5, conversion: 5.8, label: "0.5s" },
  { loadTime: 1.0, conversion: 5.1, label: "1.0s" },
  { loadTime: 1.5, conversion: 4.4, label: "1.5s" },
  { loadTime: 2.0, conversion: 3.8, label: "2.0s" },
  { loadTime: 2.5, conversion: 3.2, label: "2.5s" },
  { loadTime: 3.0, conversion: 2.7, label: "3.0s" },
  { loadTime: 3.5, conversion: 2.3, label: "3.5s" },
  { loadTime: 4.0, conversion: 2.0, label: "4.0s" },
  { loadTime: 4.5, conversion: 1.7, label: "4.5s" },
  { loadTime: 5.0, conversion: 1.5, label: "5.0s" },
  { loadTime: 6.0, conversion: 1.2, label: "6.0s" },
  { loadTime: 8.0, conversion: 0.9, label: "8.0s" },
  { loadTime: 10.0, conversion: 0.6, label: "10.0s" },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value: number; payload: { loadTime: number } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-3 text-sm shadow-xl">
        <p className="text-[#8B949E] mb-1">
          Czas ładowania: <span className="text-[#E6EDF3] font-semibold">{payload[0].payload.loadTime}s</span>
        </p>
        <p className="text-[#8B949E]">
          Konwersja:{" "}
          <span className="text-[#0070F3] font-semibold">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

function ROICalculator() {
  const [revenue, setRevenue] = useState(1000000);
  const [improvement, setImprovement] = useState(500);

  // +8.4% konwersji na każde 0.1s szybciej (Google/Deloitte)
  const secondsImproved = improvement / 1000;
  const conversionLift = (secondsImproved / 0.1) * 8.4;
  const additionalRevenue = (revenue * conversionLift) / 100;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN", maximumFractionDigits: 0 }).format(n);
  const formatNumber = (n: number) =>
    new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 lg:p-8">
      <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">Kalkulator ROI</h3>
      <p className="text-sm text-[#8B949E] mb-8">
        Oparte na danych Google/Deloitte: +8.4% konwersji e-commerce na każde 0.1s szybciej
      </p>

      <div className="space-y-8">
        {/* Revenue slider */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-[#E6EDF3]">
              Roczny przychód online
            </label>
            <span className="text-[#0070F3] font-bold">{formatCurrency(revenue)}</span>
          </div>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-[#8B949E] mt-1">
            <span>100K PLN</span>
            <span>10M PLN</span>
          </div>
        </div>

        {/* Speed slider */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-[#E6EDF3]">
              Poprawa czasu ładowania
            </label>
            <span className="text-[#0070F3] font-bold">{improvement}ms ({(improvement/1000).toFixed(1)}s)</span>
          </div>
          <input
            type="range"
            min="100"
            max="3000"
            step="100"
            value={improvement}
            onChange={(e) => setImprovement(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-[#8B949E] mt-1">
            <span>100ms</span>
            <span>3000ms</span>
          </div>
        </div>

        {/* Result */}
        <div className="bg-gradient-to-br from-[#0070F3]/15 to-[#00DFD8]/5 border border-[#0070F3]/30 rounded-xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-[#8B949E] mb-1">Wzrost konwersji</div>
              <div className="text-2xl font-bold text-[#3FB950]">
                +{conversionLift.toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-xs text-[#8B949E] mb-1">Dodatkowy przychód/rok</div>
              <div className="text-2xl font-bold text-[#0070F3]">
                +{formatNumber(additionalRevenue)} PLN
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs text-[#8B949E] mb-1">ROI w 3 lata</div>
              <div className="text-2xl font-bold text-[#E6EDF3]">
                +{formatNumber(additionalRevenue * 3)} PLN
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#8B949E]">
          * Szacunki oparte na danych: Google/Deloitte &ldquo;Milliseconds Make Millions&rdquo; (+8.4% konwersji/0.1s),{" "}
          <a
            href="https://nitropack.io/blog/how-page-speed-affects-conversion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0070F3] hover:underline"
          >
            Źródło: Nitropack
          </a>
        </p>
      </div>
    </div>
  );
}

export default function ConversionChart() {
  return (
    <section id="conversions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#3FB950] bg-[#3FB950]/10 border border-[#3FB950]/20 rounded-full mb-4 uppercase tracking-widest">
            Wpływ na biznes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Wydajność a Konwersje
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Każda sekunda opóźnienia kosztuje. Dane z badań Google, Deloitte i Amazona
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              value: "+8.4%",
              desc: "konwersji e-commerce na każde 0.1s szybciej",
              source: "Google / Deloitte",
              href: "https://nitropack.io/blog/how-page-speed-affects-conversion/",
              color: "#0070F3",
            },
            {
              value: "−1%",
              desc: "sprzedaży Amazon na każde 100ms opóźnienia",
              source: "Amazon Research",
              href: "https://www.cloudflare.com/en-gb/learning/performance/more/website-performance-conversion-rates/",
              color: "#F97316",
            },
            {
              value: "70%",
              desc: "użytkowników rezygnuje ze strony ładującej się >3s",
              source: "Google Research",
              href: "https://nitropack.io/blog/how-page-speed-affects-conversion/",
              color: "#EC4899",
            },
          ].map((stat) => (
            <div
              key={stat.desc}
              className="bg-[#161B22] border border-[#30363D] rounded-xl p-5 card-hover"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-sm text-[#8B949E] mb-3 leading-relaxed">{stat.desc}</p>
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8B949E] hover:text-[#0070F3] transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Źródło: {stat.source}
              </a>
            </div>
          ))}
        </div>

        {/* Chart + Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart */}
          <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">
              Czas ładowania vs Współczynnik konwersji
            </h3>
            <p className="text-sm text-[#8B949E] mb-8">
              Symulacja oparta na benchmarkach e-commerce (dane Google/Deloitte)
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="convGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0070F3" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0070F3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" />
                <XAxis
                  dataKey="label"
                  stroke="#8B949E"
                  tick={{ fontSize: 11 }}
                  label={{ value: "Czas ładowania (s)", position: "insideBottom", offset: -2, fill: "#8B949E", fontSize: 11 }}
                />
                <YAxis
                  stroke="#8B949E"
                  tick={{ fontSize: 11 }}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine x="2.0s" stroke="#3FB950" strokeDasharray="4 4" label={{ value: "Next.js ~", fill: "#3FB950", fontSize: 11 }} />
                <ReferenceLine x="4.0s" stroke="#F97316" strokeDasharray="4 4" label={{ value: "Twig ~", fill: "#F97316", fontSize: 11 }} />
                <Area
                  type="monotone"
                  dataKey="conversion"
                  stroke="#0070F3"
                  strokeWidth={2.5}
                  fill="url(#convGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#0070F3", strokeWidth: 2, stroke: "#161B22" }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-4 text-xs text-[#8B949E]">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-[#3FB950]" />
                Next.js (typowe ~1-2s)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-[#F97316]" />
                Twig/Symfony (typowe ~3-5s)
              </span>
            </div>
          </div>

          {/* ROI Calculator */}
          <ROICalculator />
        </div>
      </div>
    </section>
  );
}
