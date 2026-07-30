"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Code2, 
  Database, 
  ArrowRight,
  Layers,
  Map,
  Truck,
  Navigation,
  Box
} from "lucide-react";
import { useEffect, useState } from "react";

// --- LIVE SYSTEM LOG COMPONENT ---
const LiveSystemLog = () => {
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const messages = [
      "[SYSTEM] Initializing Tri-Agent Consensus...",
      "[AGENT_01] Ollama: Scanning USD liquidity pools...",
      "[AGENT_02] Gemini: Macro-sentiment analysis: BULLISH",
      "[AGENT_03] Max: Risk parameters verified. 0.02% slippage tolerance.",
      "[CONSENSUS] 3/3 Agents Agree. Signal Confirmed.",
      "[EXECUTION] Pushing asynchronous trade via Python Core...",
      "[DASHBOARD] Telemetry updated. Latency: 42ms",
    ];
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextMsg = messages[Math.floor(Math.random() * messages.length)];
        return [...prev.slice(-5), nextMsg];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 rounded-lg p-4 font-mono text-[10px] text-blue-400 border border-slate-800 shadow-2xl">
      <div className="flex gap-1.5 mb-3 border-b border-slate-800 pb-2">
        <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
      </div>
      <div className="space-y-1.5">
        {logs.map((log, i) => (
          <motion.p key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-slate-600">{">"}</span> {log}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

// --- MOCK TRADING VISUAL ---
const TradingVisual = () => {
  return (
    <div className="relative w-full h-full bg-slate-900 p-4 flex flex-col gap-4 font-mono">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Neural_Telemetry_v1.0</span>
        <div className="flex gap-4">
          <span className="text-[9px] text-green-400 font-bold">LIVE: 1.0842</span>
          <span className="text-[9px] text-blue-400 font-bold">LATENCY: 12ms</span>
        </div>
      </div>
      <div className="flex-1 flex items-end gap-1 px-2">
        {[40, 70, 45, 90, 65, 80, 50, 60, 85, 40, 75, 55, 95, 60].map((height, i) => (
          <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 1, delay: i * 0.05 }} className={`flex-1 rounded-t-sm ${i === 12 ? 'bg-blue-500 shadow-[0_0_10px_#2563EB]' : 'bg-slate-700 opacity-50'}`} />
        ))}
      </div>
    </div>
  );
};

// --- INFRASTRUCTURE SCHEMATIC VISUAL (NO EXTERNAL IMAGES) ---
const InfrastructureSchematic = () => {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden border border-slate-800 rounded-xl shadow-2xl font-mono">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Moving Site Nodes */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#2563EB]" />
                <span className="text-[10px] text-white font-bold tracking-widest uppercase">Site_Node_Alpha (Main)</span>
             </div>
             <div className="flex items-center gap-3 opacity-50">
                <div className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Site_Node_Beta (Active)</span>
             </div>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/30 p-2 rounded text-right">
             <p className="text-[8px] text-blue-400 font-bold uppercase tracking-widest">Global_Status</p>
             <p className="text-[10px] text-white font-bold uppercase tracking-widest">OPTIMAL</p>
          </div>
        </div>

        {/* Abstract "Map" Connection Lines */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
           <svg width="100%" height="100%" viewBox="0 0 400 300" className="stroke-blue-500">
              <path d="M50 50 L200 150 L350 80" fill="none" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="3" fill="#2563EB" />
              <circle cx="200" cy="150" r="3" fill="#2563EB" />
              <circle cx="350" cy="80" r="3" fill="#2563EB" />
           </svg>
        </div>

        {/* Bottom Data Bar */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-3 rounded-lg">
          <div className="flex justify-between items-center text-[8px] text-slate-400 font-bold mb-2 uppercase">
             <span>Logistics_Throughput</span>
             <span className="text-blue-400 font-black">72.4% CAP</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: '72%' }} 
               transition={{ duration: 2 }}
               className="h-full bg-blue-500" 
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="border-b border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none">
                Our <span className="text-blue-600">Projects</span>
              </h1>
              <p className="mt-4 font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">MLL_DIGITAL // SYSTEM_ARCHITECTURE_LEDGER</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 01: INTER QUANT DESK */}
      <section className="py-20 border-b border-neutral-200 blueprint-grid-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Case Study 01</span>
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest underline decoration-blue-500 underline-offset-4">IQ-DESK-001</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase mb-6 leading-tight">Inter Quant <span className="text-blue-600">Desk.</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-medium">
                Engineered as an autonomous high-stakes liquidity engine, the IQ-Desk eliminates human cognitive bias through a triple-agent neural consensus.
              </p>
              <div className="flex flex-wrap gap-8 border-t border-neutral-200 pt-10">
                <div className="flex items-center gap-3"><Code2 className="h-5 w-5 text-blue-600" /><span className="font-mono text-[11px] font-bold uppercase tracking-widest">Python_Core</span></div>
                <div className="flex items-center gap-3"><Layers className="h-5 w-5 text-blue-600" /><span className="font-mono text-[11px] font-bold uppercase tracking-widest">React_Telemetry</span></div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <LiveSystemLog />
              <div className="aspect-video bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden relative"><TradingVisual /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02: TITAN INFRASTRUCTURE HUB */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* THE NEW SCHEMATIC VISUAL */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full">
                <InfrastructureSchematic />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Case Study 02</span>
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest underline decoration-blue-500 underline-offset-4">TITAN-HUB-02</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase mb-6 leading-tight">Titan <span className="text-blue-600">Infrastructure</span> Hub.</h2>
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" />
                <p className="pl-6 font-mono text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">[ ACTIVE_DEVELOPMENT // PHASE_BETA ]</p>
                <p className="pl-6 text-xl font-bold text-slate-800 leading-snug">Re-architecting operational oversight for civil engineering environments.</p>
              </div>
              <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-lg">
                Building for the physical world requires digital precision. We are currently architecting a centralized Resource Hub to handle multi-site coordination and asset utilization.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-10 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <Navigation className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-bold text-slate-900 uppercase">Site Telemetry</p>
                    <p className="text-[11px] text-slate-500 mt-1">Integrated node tracking across multiple project zones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-bold text-slate-900 uppercase">Asset Control</p>
                    <p className="text-[11px] text-slate-500 mt-1">Real-time oversight of industrial resource deployment.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Need this level of <span className="text-blue-500">Engineering?</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base">We architect systems that solve complex operational bottlenecks.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all">Initiate System Audit <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}