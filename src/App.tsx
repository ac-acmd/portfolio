import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import SpectrumASelfReflectionToolPrivacyPolicy from "./pages/SpectrumASelfReflectionToolPrivacyPolicy";

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-white text-foreground">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/spectrum-a-self-reflection-tool-privacy-policy" element={<SpectrumASelfReflectionToolPrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
