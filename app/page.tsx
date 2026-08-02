import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Process from "@/components/process";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
    </main>
  );
}