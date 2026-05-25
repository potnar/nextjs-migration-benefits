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
  tags: string[];
  source: string;
  sourceLabel: string;
};

export const showcases: ShowcaseItem[] = [
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
    tags: ["SSG", "Image Opt.", "ISR"],
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
    description: "Firma IT specjalizująca się w rozwiązaniach e-commerce. Po migracji czas przebudowania strony skrócił się z 2 godzin do mniej niż 5 minut.",
    before: { performance: 48, seo: 65, accessibility: 71, bestPractices: 62, loadTime: "5.8s" },
    after:  { performance: 87, seo: 94, accessibility: 90, bestPractices: 92, loadTime: "1.9s" },
    metrics: [
      { label: "Rebuild time", value: "2h → <5min", positive: true },
      { label: "Page load", value: "+40%", positive: true },
      { label: "Performance", value: "48 → 87", positive: true },
    ],
    tags: ["ISR", "API Routes", "TypeScript"],
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
    tags: ["App Router", "Metadata API", "TypeScript"],
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
    description: "Innowacyjna marka produktów dla niemowląt. Next.js z mobile-first i optymalizacją Core Web Vitals zwiększył konwersje mobilne o 18%.",
    before: { performance: 51, seo: 72, accessibility: 76, bestPractices: 67, loadTime: "5.3s" },
    after:  { performance: 89, seo: 95, accessibility: 94, bestPractices: 91, loadTime: "1.6s" },
    metrics: [
      { label: "Mobile conv.", value: "+18%", positive: true },
      { label: "Bounce rate", value: "−25%", positive: true },
      { label: "Load time", value: "5.3s → 1.6s", positive: true },
    ],
    tags: ["Mobile-first", "Core Web Vitals", "PWA"],
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
    description: "Retailer modowy z segmentu premium. Optymalizacja LCP i statyczne generowanie stron produktowych przełożyło się na wzrost konwersji o 38%.",
    before: { performance: 45, seo: 68, accessibility: 70, bestPractices: 60, loadTime: "6.1s" },
    after:  { performance: 85, seo: 92, accessibility: 88, bestPractices: 90, loadTime: "2.0s" },
    metrics: [
      { label: "Conversion", value: "2.1% → 2.9%", positive: true },
      { label: "Wzrost conv.", value: "+38%", positive: true },
      { label: "Przychód/rok", value: "+$106K", positive: true },
    ],
    tags: ["SSG", "LCP optim.", "Lazy loading"],
    source: "https://www.5hz.io/blog/nextjs-ecommerce-faster-conversions-custom-cms",
    sourceLabel: "5hz.io Blog",
  },
  {
    company: "Vercel SaaS",
    url: "vercel.com/customers",
    industry: "SaaS",
    category: "saas",
    color: "#10B981",
    bgPattern: "radial-gradient(circle at 40% 30%, #10B98122 0%, transparent 60%), radial-gradient(circle at 80% 75%, #34D39922 0%, transparent 50%)",
    description: "Klient SaaS na infrastrukturze Vercel. Next.js z Edge Network obniżył koszty hostingu o 35% przy wzroście pojemności ruchu o 50%.",
    before: { performance: 66, seo: 74, accessibility: 78, bestPractices: 72, loadTime: "3.8s" },
    after:  { performance: 94, seo: 96, accessibility: 96, bestPractices: 97, loadTime: "0.9s" },
    metrics: [
      { label: "Koszty host.", value: "−35%", positive: true },
      { label: "Traffic cap.", value: "+50%", positive: true },
      { label: "Build time", value: "−40%", positive: true },
    ],
    tags: ["Edge Network", "Serverless", "Auto-scaling"],
    source: "https://pagepro.co/blog/vercel-hosting-costs/",
    sourceLabel: "Pagepro Blog",
  },
];
