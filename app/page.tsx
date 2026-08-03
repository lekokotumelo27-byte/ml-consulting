"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { 
  ShieldAlert, Server, Cpu, Network, 
  Microscope, Layers, Binary, Zap,
  Monitor, Sparkles, ArrowRight, ArrowUpRight
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white blueprint-grid-light">
      <Navbar />
      <Hero />

      {/* SECTION 2: THE FOUR PILLARS */}
      <section className="py-16 lg:-mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white border border-neutral-100 shadow-2xl rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 lg:p-14 gap-12">
            {[
              { icon: <ShieldAlert className="h-6 w-6" />, title: "Secure by Design", desc: "Hardened encryption and POPIA compliant data layers." },
              { icon: <Server className="h-6 w-6" />, title: "Cloud Native", desc: "Reliable infrastructure built for infinite scaling." },
              { icon: <Cpu className="h-6 w-6" />, title: "High Performance", desc: "Optimized engines with 0.8s latency standards." },
              { icon: <Network className="h-6 w-6" />, title: "Systems Strategy", desc: "Strategic architecture aligned with business goals." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-start text-left">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE METHODOLOGY */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <span className="text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase mb-4 block">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">How MLL Works</h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-8">
              A precise engineering workflow that ensures every deployment is secure, stable, and built to scale.
            </p>
            <a href="/projects" className="text-blue-600 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
              View Our Process <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {[
              { id: "01", icon: <Microscope className="h-5 w-5" />, title: "Discover", desc: "Deep analysis of the technical bottleneck." },
              { id: "02", icon: <Layers className="h-5 w-5" />, title: "Design", desc: "Architecting the logic and system schema." },
              { id: "03", icon: <Binary className="h-5 w-5" />, title: "Engineer", desc: "Writing clean, high-concurrency code." },
              { id: "04", icon: <Zap className="h-5 w-5" />, title: "Deliver", desc: "Live production with monitoring support." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-blue-600 font-black text-lg italic">{step.id}</span>
                  <div className="text-blue-600">{step.icon}</div>
                  {i < 3 && <ArrowRight className="hidden lg:block absolute -right-6 top-5 text-blue-200 h-4 w-4" />}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">{step.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ENGINEERING PERSONAS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-left">
             <span className="text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase mb-4 block">Team Expertise</span>
             <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">The technical lead for <br /> every operational layer.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Network className="h-8 w-8" />, title: "Systems Architect", desc: "Designing resilient backbones that support massive growth." },
              { icon: <Monitor className="h-8 w-8" />, title: "Software Engineer", desc: "Crafting efficient applications using modern logic." },
              { icon: <Server className="h-8 w-8" />, title: "Cloud Engineer", desc: "Managing global infrastructure with high availability." },
              { icon: <Sparkles className="h-8 w-8" />, title: "AI & Automation", desc: "Integrating neural models to streamline workflows." }
            ].map((card, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group">
                <div className="text-blue-600 mb-6 transition-transform group-hover:scale-110 duration-500">{card.icon}</div>
                <h3 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-widest">{card.title}</h3>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                <div className="w-8 h-0.5 bg-blue-600 mt-8 rounded-full opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CAPABILITIES RIBBON */}
      <section className="py-14 border-t border-neutral-100 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Server className="h-4 w-4" />, label: "Cloud Ops" },
              { icon: <Binary className="h-4 w-4" />, label: "Custom Dev" },
              { icon: <Zap className="h-4 w-4" />, label: "Automations" },
              { icon: <ShieldAlert className="h-4 w-4" />, label: "Security" },
              { icon: <Cpu className="h-4 w-4" />, label: "Neural AI" },
              { icon: <Network className="h-4 w-4" />, label: "Integrations" }
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 transition-all">
                <div className="text-blue-600">{cap.icon}</div>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}