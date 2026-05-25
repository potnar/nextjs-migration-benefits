"use client";

const metrics = [
  {
    value: "−75%",
    label: "Czas budowania",
    company: "Sonos",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    icon: "⚡",
  },
  {
    value: "−96%",
    label: "Czas przebudowania",
    company: "Best IT",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    icon: "🚀",
  },
  {
    value: "+40%",
    label: "Page Load Speed",
    company: "Best IT",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/30",
    icon: "📈",
  },
  {
    value: "+18%",
    label: "Mobile Conversions",
    company: "Nanobébé",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/30",
    icon: "📱",
  },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#E6EDF3 1px, transparent 1px), linear-gradient(90deg, #E6EDF3 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0070F3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0070F3]/40 bg-[#0070F3]/10 text-[#0070F3] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#0070F3] animate-pulse" />
            Analiza oparta na danych z produkcji
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Korzyści firm po migracji{" "}
          <br className="hidden sm:block" />
          <span
            style={{
              background: "linear-gradient(135deg, #0070F3, #00DFD8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            z Twig/Symfony na Next.js
          </span>
        </h1>

        <p className="text-center text-[#8B949E] text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Realowe case studies pokazują dramatyczną poprawę wydajności, wzrost konwersji
          i redukcję kosztów operacyjnych po przejściu na nowoczesny stack frontendowy.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={() => scrollToSection("#case-studies")}
            className="px-8 py-3.5 bg-[#0070F3] hover:bg-[#0060D9] text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#0070F3]/25 w-full sm:w-auto"
          >
            Zobacz Case Studies
          </button>
          <button
            onClick={() => scrollToSection("#comparison")}
            className="px-8 py-3.5 border border-[#30363D] hover:border-[#0070F3]/50 text-[#E6EDF3] rounded-lg font-semibold transition-all duration-200 hover:bg-[#161B22] w-full sm:w-auto"
          >
            Porównanie →
          </button>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.company + m.label}
              className={`relative card-hover rounded-xl border ${m.border} bg-gradient-to-br ${m.color} p-6 backdrop-blur-sm overflow-hidden`}
            >
              <div className="text-3xl mb-2">{m.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-1">
                {m.value}
              </div>
              <div className="text-sm text-[#8B949E] mb-2">{m.label}</div>
              <div className="text-xs font-semibold text-[#0070F3] uppercase tracking-wide">
                {m.company}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("#case-studies")}
            className="flex flex-col items-center gap-2 text-[#8B949E] hover:text-[#0070F3] transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <span className="text-xs">Przewiń w dół</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
