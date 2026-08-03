"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { 
  ShieldCheck, Cloud, Users, 
  Search, PenTool, Code2, Rocket, 
  Layers, Monitor, Sparkles,
  ArrowRight, ArrowUpRight, Cpu, Network
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white blueprint-grid-light">
      <Navbar />
      <Hero />

      {/* SECTION 2: THE FOUR PILLARS (Overlapping Layout) */}
      <section className="py-20 lg:-mt-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white border border-neutral-100 shadow-2xl rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-12 lg:p-16 gap-12">
            {[
              { icon: <ShieldCheck className="h-7 w-7" />, title: "Secure by Design", desc: "Security built into every layer of the systems we build." },
              { icon: <Cloud className="h-7 w-7" />, title: "Cloud First", desc: "Scalable, reliable and cost-effective solutions." },
              { icon: <Gauge className="h-7 w-7" />, title: "High Performance", desc: "Engineered for speed, reliability and growth." },
              { icon: <Users className="h-7 w-7" />, title: "Client Focused", desc: "We partner with you to deliver real impact." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW MLL WORKS (HORIZONTAL FLOW) */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase mb-4 block">Our Process</span>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">How MLL Works</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              A proven engineering process that ensures every solution we build delivers real value and long-term impact.
            </p>
            <a href="/projects" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
              View Our Process <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {[
              { id: "01", icon: <Search />, title: "Discover", desc: "Understanding your business goals and real problems." },
              { id: "02", icon: <PenTool />, title: "Design", desc: "Designing scalable, secure, and user-centered solutions." },
              { id: "03", icon: <Code2 />, title: "Engineer", desc: "Building with clean code and industry best practices." },
              { id: "04", icon: <Rocket />, title: "Deliver", desc: "Deploying production-ready systems with support." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-blue-600 font-black text-xl italic">{step.id}</span>
                  <div className="text-blue-600">{step.icon}</div>
                  {i < 3 && <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-blue-200 h-4 w-4" />}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-tight">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET THE ARCHITECTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
             <span className="text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase mb-4 block">Our Engineering Team</span>
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">The architects behind the solutions.</h2>
             <p className="text-slate-500 mt-6 max-w-xl font-medium">Our team combines deep technical expertise with a passion for solving complex problems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layers className="h-10 w-10" />, title: "Systems Architect", desc: "Designs scalable and resilient system architectures that support growth." },
              { icon: <Monitor className="h-10 w-10" />, title: "Software Engineer", desc: "Builds high-quality, maintainable and efficient applications using modern tech." },
              { icon: <Cloud className="h-10 w-10" />, title: "Cloud Engineer", desc: "Deploys and manages secure, reliable and cost-effective infrastructure." },
              { icon: <Sparkles className="h-10 w-10" />, title: "AI & Automation", desc: "Creates intelligent solutions that streamline processes and drive impact." }
            ].map((card, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group">
                <div className="text-blue-600 mb-8 transition-transform group-hover:scale-110 duration-500">{card.icon}</div>
                <h3 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-tight">{card.title}</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                <div className="w-10 h-1 bg-blue-600 mt-8 rounded-full opacity-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CAPABILITIES RIBBON */}
      <section className="py-16 border-t border-neutral-100 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-blue-600 font-bold font-mono text-[9px] tracking-widest uppercase mb-12 block text-center lg:text-left">Our Capabilities</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8">
            {[
              { icon: <Cloud className="h-5 w-5" />, label: "Cloud Architecture" },
              { icon: <Code2 className="h-5 w-5" />, label: "Software Dev" },
              { icon: <Zap className="h-5 w-5" />, label: "Automation" },
              { icon: <ShieldCheck className="h-5 w-5" />, label: "Cybersecurity" },
              { icon: <Cpu className="h-5 w-5" />, label: "Data & AI" },
              { icon: <Network className="h-5 w-5" />, label: "System Integration" }
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <div className="text-blue-600">{cap.icon}</div>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight leading-tight">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Custom Icons
function Zap({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function Gauge({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}