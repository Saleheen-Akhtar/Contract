import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#111111] selection:bg-[#EAEAEA] selection:text-[#111111] relative font-sans overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
