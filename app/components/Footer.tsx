export default function Footer() {
  return (
    <footer className="border-t border-[#30363D] bg-[#0D1117] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#0070F3] rounded flex items-center justify-center font-bold text-white text-xs">
            N
          </div>
          <span className="text-sm text-[#8B949E]">
            Next.js Migration Guide — dane z produkcji
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#8B949E]">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0070F3] transition-colors"
          >
            Next.js Docs
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0070F3] transition-colors"
          >
            Vercel
          </a>
          <span>Zbudowane z Next.js + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
