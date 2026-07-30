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
  Map,
  Truck
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
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className={`flex-1 rounded-t-sm ${i === 12 ? 'bg-blue-500 shadow-[0_0_10px_#2563EB]' : 'bg-slate-700 opacity-50'}`}
          />
        ))}
      </div>
      <div className="space-y-3 pt-2 border-t border-slate-800">
        {[
          { label: "OLLAMA_CONFIDENCE", val: "94%", color: "bg-blue-500" },
          { label: "GEMINI_SENTIMENT", val: "88%", color: "bg-blue-400" },
          { label: "MAX_RISK_SHIELD", val: "100%", color: "bg-green-500" }
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-[8px] font-bold text-slate-500 mb-1 uppercase tracking-tighter">
              <span>{bar.label}</span>
              <span>{bar.val}</span>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: bar.val }} transition={{ duration: 1.5 }} className={`h-full ${bar.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- INFRASTRUCTURE DASHBOARD VISUAL ---
const InfrastructureVisual = () => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-neutral-200">
      <Image 
        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
        alt="Civil Engineering Site" 
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />

      <div className="relative p-6 h-full flex flex-col justify-between font-mono text-white">
        <div className="flex justify-between items-start">
          <div className="bg-white/90 p-3 rounded-lg border border-white shadow-sm">
            <p className="text-[8px] font-bold text-blue-600 uppercase tracking-widest mb-1">Live_Site_Telemetry</p>
            <p className="text-[10px] font-black text-slate-900">GPS: -23.8961, 29.4486</p>
            <p className="text-[10px] font-black text-slate-900">SITES: 04_ACTIVE</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded uppercase">PHASE: EXCAVATION</span>
            <span className="bg-slate-900/80 text-white text-[8px] font-black px-2 py-1 rounded border border-slate-700 uppercase backdrop-blur-md text-center">Uptime: 99.9%</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-slate-900/90 border border-slate-700 p-3 rounded-lg backdrop-blur-md">
            <div className="flex justify-between text-[8px] text-white font-bold mb-2 uppercase tracking-tighter">
              <span>Logistics_Deployment_Progress</span>
              <span>72%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-[72%] bg-blue-500 shadow-[0_0_10px_#2563EB]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const brains = [
    { name: "Ollama", role: "Local Market Intelligence", description: "Handles high-speed local data processing and technical indicator scanning.", icon: <Cpu className="h-5 w-5" /> },
    { name: "Gemini", role: "Global Macro Sentiment", description: "Processes real-time news feeds and global economic shifts.", icon: <Brain className="h-5 w-5" /> },
    { name: "Max", role: "Risk & Execution Controller", description: "The final gatekeeper. Cross-references all signals against risk protocols.", icon: <ShieldCheck className="h-5 w-5" /> }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

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

      <section className="py-20 border-b border-neutral-200 blueprint-grid-light relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Case Study 01</span>
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest underline decoration-blue-500 underline-offset-4">IQ-DESK-001</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase mb-6 leading-tight">Inter Quant <span className="text-blue-600 underline decoration-blue-100">Desk.</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-medium">
                Engineered as an autonomous high-stakes liquidity engine, the IQ-Desk eliminates human cognitive bias through a triple-agent neural consensus. It cross-verifies market volatility before moving a single dollar.
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

      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brains.map((brain, i) => (
              <motion.div key={brain.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-blue-300 transition-all group">
                <div className="h-10 w-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">{brain.icon}</div>
                <h4 className="font-sans text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{brain.name}</h4>
                <p className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">{brain.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{brain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full relative">
                <InfrastructureVisual />
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
                <p className="pl-6 text-xl font-bold text-slate-800 leading-snug">Re-architecting operational oversight for the modern civil engineering environment.</p>
              </div>
              <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-lg">Building for the physical world requires digital precision. We are currently architecting a centralized Resource Hub designed to handle multi-site coordination, tracking heavy-asset utilization and safety compliance.</p>
              <div className="grid grid-cols-2 gap-6 pt-10 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <Map className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-bold text-slate-900 uppercase">Geospatial Mapping</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Multi-site telemetry tracking via integrated GPS.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-bold text-slate-900 uppercase">Asset Utilization</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Real-time oversight of heavy machinery deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Need this level of <span className="text-blue-500">Engineering?</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base">We architect systems that solve complex operational bottlenecks. Whether it&apos;s AI integration or custom cloud infrastructure, we build it for scale.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all">Initiate System Audit <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CircleStackIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" />
    </svg>
  );
}