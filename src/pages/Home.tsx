import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import PastClients from "../components/home/PastClients";
import WhoThisIsFor from "../components/home/WhoThisIsFor";
import WorkSection from "../components/home/WorkSection";
import Pricing from "../components/home/Pricing";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";
import FinalCallToAction from "../components/home/FinalCallToAction";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <SEO path="/" />
      <Hero />
      <PastClients />
      <WhoThisIsFor />
      <WorkSection />
      <Pricing />
      <HowItWorks />
      <About />
      <FinalCallToAction />
    </>
  );
}
