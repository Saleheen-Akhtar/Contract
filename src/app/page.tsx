import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-white">
      <Hero />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
