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
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";

// --- CASE STUDY 01: THE TERMINAL LOGS ---
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7">
              <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block">CASE STUDY 01</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">INTER QUANT <span className="text-blue-600">DESK.</span></h2>
              <div className="space-y-6">
                 <p className="text-base font-bold text-slate-800 leading-snug">Autonomous High-Stakes Neural Execution Engine.</p>
                 <p className="text-sm text-slate-600 leading-relaxed normal-case font-medium">
                   We architected this system to eliminate the high-latency and emotional bottlenecks associated with manual USD Forex trading. The engine uses a **Python Quant Core** to manage asynchronous order execution, cross-referencing a **Triple-Agent Consensus**—Ollama, Gemini, and Max. Only once all agents reach a 3/3 majority agreement is the signal pushed to the live market.
                 </p>
              </div>
              <div className="flex gap-8 border-t border-neutral-200 mt-8 pt-8 font-mono">
                <div className="flex items-center gap-3"><Code2 className="h-4 w-4 text-blue-600" /><span className="text-[10px] font-bold tracking-widest uppercase">PYTHON_CORE</span></div>
                <div className="flex items-center gap-3"><Layers className="h-4 w-4 text-blue-600" /><span className="text-[10px] font-bold tracking-widest uppercase">REACT_TELEMETRY</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* TERMINAL LOGS KEPT */}
              <LiveSystemLog />
              
              {/* STABLE SPLASH IMAGE (MATCHING CASE STUDY 2 CONFIG) */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-200 bg-slate-900">
                <Image 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" 
                  alt="High-End System Infrastructure" 
                  fill
                  className="object-cover opacity-70"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[9px] text-blue-400 font-bold uppercase tracking-[0.2em]">Neural_Processing_Node_v1.0</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT 02: OPERATIONAL OS (LEFT EXACTLY AS IS) */}
      <section className="py-24 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
                  alt="Infrastructure Project Site with Team" 
                  fill
                  className="object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-600 shadow-lg">
                    <div className="flex justify-between items-center mb-2 text-slate-900">
                      <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">ACTIVE_SITE_STATUS</span>
                      <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-slate-900">
                      <div><p className="text-[8px] text-slate-400 font-bold uppercase">Team On-Site</p><p className="text-xs font-black">12 MEMBERS</p></div>
                      <div><p className="text-[8px] text-slate-400 font-bold uppercase">Compliance</p><p className="text-xs font-black">100% SECURE</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter mb-4 inline-block uppercase">CASE STUDY 02</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 uppercase leading-tight tracking-tight">Operational <span className="text-blue-600">OS.</span></h2>
              <div className="space-y-6">
                <p className="text-xl font-bold text-slate-800 leading-snug">Transforming messy site operations into one clear, digital portal.</p>
                <p className="text-base text-slate-600 leading-relaxed normal-case font-medium">
                  Running a large workshop or construction site is difficult when tools, people, and deadlines are scattered. We are building the **Operational OS** to bring everything together. It helps managers see exactly where their resources are, who is on-site, and if the project is hitting its safety and timeline goals.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-10 border-t border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded-lg"><HardHat className="h-5 w-5 text-blue-600" /></div>
                  <div><h4 className="text-xs font-black text-slate-900 uppercase">SITE SAFETY</h4><p className="text-[11px] text-slate-500 mt-1 normal-case font-medium">Tracking team certifications and safety protocols in real-time.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded-lg"><Zap className="h-5 w-5 text-blue-600" /></div>
                  <div><h4 className="text-xs font-black text-slate-900 uppercase">EFFICIENCY</h4><p className="text-[11px] text-slate-500 mt-1 normal-case font-medium">Removing paperwork bottlenecks so your team can focus on building.</p></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEURAL LAYER */}
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
            We architect systems that solve real-world operational bottlenecks. Whether it&apos;s AI integration or custom cloud infrastructure, we build for scale.
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