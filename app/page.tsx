import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import ConversionChart from "./components/ConversionChart";
import Comparison from "./components/Comparison";
import Roadmap from "./components/Roadmap";
import Sources from "./components/Sources";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
        <CaseStudies />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
        <ConversionChart />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
        <Comparison />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
        <Roadmap />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
