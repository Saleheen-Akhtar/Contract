import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DarkSection from "@/components/DarkSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative font-sans overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <div className="pt-32 px-6 md:px-12 relative z-10 bg-white">
        <Hero />
        <Stats />
      </div>
      <DarkSection />
    </main>
  );
}
