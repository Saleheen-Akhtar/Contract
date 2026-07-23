import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import Calculator from "@/components/Calculator";
import Vision from "@/components/Vision";
import CuratedResidences from "@/components/CuratedResidences";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-bronze selection:text-white">
      <Hero />
      <ValuePropositions />
      <Calculator />
      <Vision />
      <CuratedResidences />
      <Process />
      <Footer />
    </main>
  );
}
