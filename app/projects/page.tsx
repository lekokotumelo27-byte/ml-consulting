"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Code2, 
  Database, 
  ArrowRight,
  Layers,
  HardHat,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

// --- PROJECT 01 COMPONENTS (QUANT DESK - NO CHANGES) ---
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
        <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" /><div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" /><div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
      </div>
      <div className="space-y-1.5">{logs.map((log, i) => (<motion.p key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}><span className="text-slate-600">{">"}</span> {log}</motion.p>))}</div>
    </div>
  );
};

const TradingVisual = () => {
  return (
    <div className="relative w-full h-full bg-slate-900 p-4 flex flex-col gap-4 font-mono">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Neural_Telemetry_v1.0</span>
        <div className="flex gap-4"><span className="text-[9px] text-green-400 font-bold">LIVE: 1.0842</span><span className="text-[9px] text-blue-400 font-bold">LATENCY: 12ms</span></div>
      </div>
      <div className="flex-1 flex items-end gap-1 px-2">
        {[40, 70, 45, 90, 65, 80, 50, 60, 85, 40, 75, 55, 95, 60].map((height, i) => (<motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 1, delay: i * 0.05 }} className={`flex-1 rounded-t-sm ${i === 12 ? 'bg-blue-500 shadow-[0_0_10px_#2563EB]' : 'bg-slate-700 opacity-50'}`} />))}
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900 uppercase">
      <Navbar />

      {/* HEADER */}
      <section className="border-b border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h1>
          <p className="mt-4 font-mono text-[10px] text-slate-400 font-bold tracking-widest">MLL_DIGITAL // COMPLETED_DEPLOYMENTS</p>
        </div>
      </section>

      {/* PROJECT 01: INTER QUANT DESK (FINANCIAL TECH) */}
      <section className="py-20 border-b border-neutral-200 blueprint-grid-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block">CASE STUDY 01</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">INTER QUANT <span className="text-blue-600">DESK.</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl normal-case font-medium">
                An autonomous trading infrastructure that cross-verifies global market data using three different AI models before executing high-stakes decisions.
              </p>
              <div className="flex gap-8 border-t border-neutral-200 pt-10">
                <div className="flex items-center gap-3"><Code2 className="h-5 w-5 text-blue-600" /><span className="font-mono text-[11px] font-bold">PYTHON_CORE</span></div>
                <div className="flex items-center gap-3"><Layers className="h-5 w-5 text-blue-600" /><span className="font-mono text-[11px] font-bold">REACT_DASHBOARD</span></div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <LiveSystemLog />
              <div className="aspect-video bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden relative"><TradingVisual /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02: OPERATIONAL OS (REAL WORLD CIVIL/SITE) */}
      <section className="py-24 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* REAL WORLD VISUAL */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
                  alt="Infrastructure Project Site with Team" 
                  fill
                  className="object-cover brightness-90"
                />
                
                {/* DIGITAL OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-600 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-blue-600 tracking-widest">ACTIVE_SITE_STATUS</span>
                      <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[8px] text-slate-400 font-bold uppercase">Team On-Site</p>
                        <p className="text-xs font-black text-slate-900">12 MEMBERS</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-slate-400 font-bold uppercase">Compliance</p>
                        <p className="text-xs font-black text-slate-900">100% SECURE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CLEAR DESCRIPTION */}
            <div className="lg:col-span-6">
              <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block">CASE STUDY 02</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase leading-tight">Operational <span className="text-blue-600">OS.</span></h2>
              <div className="space-y-6">
                <p className="text-xl font-bold text-slate-800 leading-snug">
                  Transforming messy site operations into one clear, digital portal.
                </p>
                <p className="text-base text-slate-600 leading-relaxed normal-case">
                  Running a large workshop or construction site is difficult when tools, people, and deadlines are scattered. We are building the **Operational OS** to bring everything together. It helps managers see exactly where their resources are, who is on-site, and if the project is hitting its safety and timeline goals.
                </p>
              </div>

              {/* WHAT WE ARE DOING (SIMPLE ICONS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-10 border-t border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded-lg"><HardHat className="h-5 w-5 text-blue-600" /></div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">SITE SAFETY</h4>
                    <p className="text-[11px] text-slate-500 mt-1 normal-case font-medium">Tracking team certifications and on-site safety protocols in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded-lg"><Zap className="h-5 w-5 text-blue-600" /></div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">EFFICIENCY</h4>
                    <p className="text-[11px] text-slate-500 mt-1 normal-case font-medium">Removing paperwork bottlenecks so your team can focus on building.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-6">NEED THIS LEVEL OF <span className="text-blue-500">ENGINEERING?</span></h2>
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