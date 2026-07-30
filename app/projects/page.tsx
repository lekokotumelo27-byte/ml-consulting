import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Direct Minimalist Header */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-max-w-7xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Our <span className="text-blue-600">Projects</span>
          </h1>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
            MLL DIGITAL // COMPLETED WORK
          </span>
        </div>
      </section>

      {/* Projects Showcase Container */}
      <section className="py-12 bg-neutral-50/50 border-b border-neutral-200 flex-1 blueprint-grid-light">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* PLACEHOLDER FOR COMPLETED WORKS */}
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-neutral-200 rounded-xl bg-white/50">
            <p className="font-mono text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
              [ INITIALIZING_PROJECT_VAULT ]
            </p>
            <p className="mt-4 font-sans text-sm text-slate-500 max-w-xs">
              This section is currently being architected for the Inter Quant Desk deployment.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}