import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-12">
        <Services />
      </div>
    </main>
  );
}