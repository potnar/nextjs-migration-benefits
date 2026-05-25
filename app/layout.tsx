import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korzyści migracji z legacy monolitu na Next.js",
  description:
    "Analiza korzyści dla firm po migracji z legacy monolitu / PHP na Next.js — case studies, metryki, ROI",
  keywords: "Next.js, migracja, legacy PHP, monolith, wydajność, web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="bg-[#0D1117] text-[#E6EDF3] antialiased">
        {children}
      </body>
    </html>
  );
}
