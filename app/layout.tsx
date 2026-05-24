import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korzyści migracji z Twig/Symfony na Next.js",
  description:
    "Analiza korzyści dla firm po migracji z Twig/Symfony na Next.js — case studies, metryki, ROI, plan migracji",
  keywords: "Next.js, Symfony, Twig, migracja, wydajność, web development",
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
