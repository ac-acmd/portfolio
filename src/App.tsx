import { Routes, Route } from "react-router-dom";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-white text-foreground">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
