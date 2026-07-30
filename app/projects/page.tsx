"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Layers,
  HardHat,
  Zap,
  ArrowRight,
  Monitor
} from "lucide-react";

// --- QUANT DESK REAL VISUAL ---
const QuantDeskVisual = () => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-slate-900">
      <Image 
        src="https://images.unsplash.com/photo-1611974717482-98252c6a45b7?auto=format&fit=crop&q=80&w=2070" 
        alt="Autonomous Trading Environment" 
        fill
        className="object-cover opacity-60"
      />
      
      {/* DIGITAL OVERLAY - NEURAL STATUS */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute top-6 left-6">
        <div className="bg-slate-950/90 backdrop-blur-md p-3 rounded border border-slate-700 shadow-2xl">
          <div className="flex items-center gap-2 mb-1">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em]">Neural_Link_Active</span>
          </div>
          <p className="text-[10px] font-black text-white tracking-widest uppercase">CONSENSUS: 3/3 AGENTS</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
         <div className="bg-blue-600 p-2 rounded shadow-lg">
            <Monitor className="h-4 w-4 text-white" />
         </div>
      </div>
    </div>
  );
};

// --- OPERATIONAL OS REAL VISUAL ---
const OperationalOSVisual = () => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
      <Image 
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
        alt="Infrastructure Project Site" 
        fill
        className="object-cover brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-600 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Operational_Status</span>
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Active Sites</p>
              <p className="text-xs font-black text-slate-900 tracking-wider uppercase">04 Locations</p>
            </div>
            <div>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Safety Compliance</p>
              <p className="text-xs font-black text-slate-900 tracking-wider uppercase">100% Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const brains = [
    { name: "Ollama", role: "Local Intelligence", description: "Handles high-speed local data processing and technical indicators.", icon: <Cpu className="h-5 w-5" /> },
    { name: "Gemini", role: "Global Sentiment", description: "Processes real-time news feeds and global economic context.", icon: <Brain className="h-5 w-5" /> },
    { name: "Max", role: "Risk Controller", description: "Final gatekeeper. Cross-references all signals against risk protocols.", icon: <ShieldCheck className="h-5 w-5" /> }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900 uppercase">
      <Navbar />

      {/* BALANCED HEADER */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h1>
          <p className="mt-2 font-mono text-[9px] text-slate-400 font-bold tracking-[0.2em]">MLL_DIGITAL // COMPLETED_SYSTEMS_LEDGER</p>
        </div>
      </section>

      {/* PROJECT 01: INTER QUANT DESK */}
      <section className="py-20 border-b border-neutral-200 blueprint-grid-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block">CASE STUDY 01</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">INTER QUANT <span className="text-blue-600">DESK.</span></h2>
              <div className="space-y-6">
                 <p className="text-base font-bold text-slate-800 leading-snug">
                   Autonomous High-Stakes Liquidity Engine.
                 </p>
                 <p className="text-sm text-slate-600 leading-relaxed normal-case font-medium">
                   Engineered to eliminate emotional bias and high-latency in USD Forex markets. We architected a system that runs a **Python-driven Quant Core** for execution, cross-referencing three independent AI Agents—Ollama (Local Technicals), Gemini (Global News), and Max (Risk Management). Only when a 3/3 consensus is reached does the system push an order. 
                 </p>
              </div>
              <div className="flex gap-8 border-t border-neutral-200 mt-8 pt-8 font-mono">
                <div className="flex items-center gap-3"><Code2 className="h-4 w-4 text-blue-600" /><span className="text-[10px] font-bold tracking-widest">PYTHON_CORE</span></div>
                <div className="flex items-center gap-3"><Layers className="h-4 w-4 text-blue-600" /><span className="text-[10px] font-bold tracking-widest">REACT_DASHBOARD</span></div>
              </div>
            </div>

            <div className="lg:col-span-6">
               <div className="aspect-[4/3] w-full">
                  <QuantDeskVisual />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT 02: OPERATIONAL OS */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 order-last lg:order-first">
               <div className="aspect-[4/3] w-full">
                  <OperationalOSVisual />
               </div>
            </div>

            <div className="lg:col-span-6">
              <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block">CASE STUDY 02</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">OPERATIONAL <span className="text-blue-600">OS.</span></h2>
              <div className="space-y-6">
                <p className="text-base font-bold text-slate-800 leading-snug">
                  Centralized Site & Logistics Oversight.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed normal-case font-medium">
                  Designed for civil engineering and industrial environments where scattered resources cause bottlenecks. **Operational OS** provides managers with a centralized dashboard to track site safety, real-time asset utilization, and project milestones across multiple locations, moving away from fragmented paperwork to digital-first coordination.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-1.5 rounded"><HardHat className="h-4 w-4 text-blue-600" /></div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 tracking-widest">SITE SAFETY</h4>
                    <p className="text-[11px] text-slate-500 normal-case font-medium">Real-time team compliance tracking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-1.5 rounded"><Zap className="h-4 w-4 text-blue-600" /></div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 tracking-widest">EFFICIENCY</h4>
                    <p className="text-[11px] text-slate-500 normal-case font-medium">Automating operational workflows.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEURAL IDENTITY LAYER */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brains.map((brain, i) => (
              <motion.div key={brain.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-blue-300 transition-all group">
                <div className="h-10 w-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">{brain.icon}</div>
                <h4 className="font-sans text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{brain.name}</h4>
                <p className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-4">{brain.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed normal-case font-medium">{brain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">Need this level of <span className="text-blue-500">Engineering?</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base normal-case font-medium">
            We architect systems that solve real-world operational bottlenecks. From AI trading desks to heavy-duty logistics portals, we build for growth.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xs tracking-widest transition-all">
            INITIATE SYSTEM AUDIT <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}