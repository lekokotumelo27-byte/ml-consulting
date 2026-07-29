"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Zap, ShieldCheck, Globe, Activity, Lock, Cpu } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Technical Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-blue-100 bg-blue-50/50 px-3 py-1.5">
          <Terminal className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-blue-800 uppercase">
            SOLUTIONS ENGINEERED FOR GROWTH
          </span>
        </div>

        {/* 1. MAIN HEADLINE */}
        <h1 className="max-w-4xl font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-tight">
          WE BUILD FAST, MODERN TECH TO <span className="text-blue-600">SCALE YOUR BUSINESS.</span>
        </h1>

        {/* 2. THE OPTIMIZED IMAGE */}
        <div className="mt-10 w-full max-w-5xl relative aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl bg-neutral-100">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
            alt="MLL Digital Consulting Tech Team collaborating on systems" 
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 3. SUB-HEADLINE */}
        <p className="mt-10 max-w-2xl font-sans text-base text-slate-600 md:text-lg leading-relaxed">
          MLL Digital Consulting designs secure cloud systems, builds custom software, and optimizes your IT infrastructure so your company can run at peak performance without technical bottlenecks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="group flex h-12 items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg text-sm font-bold tracking-wider transition-all shadow-sm"
          >
            START YOUR PROJECT
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/services"
            className="flex h-12 items-center justify-center gap-2 border border-neutral-200 bg-white hover:bg-neutral-50 text-slate-700 px-6 rounded-lg text-sm font-bold tracking-wider transition-all"
          >
            VIEW OUR SERVICES
          </a>
        </div>

        {/* 4. THE LIVE COMMAND CENTER (New Beneficial Section) */}
        <div className="mt-12 max-w-5xl bg-slate-900 rounded-xl p-1 shadow-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-6 bg-slate-900 rounded-lg">
            
            {/* Live Operational Pulse */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <p className="font-mono text-[10px] font-bold text-white tracking-widest">SYSTEM_STATUS: OPTIMAL</p>
            </div>

            {/* Technical Stream (Scrolling Ticker) */}
            <div className="flex-1 overflow-hidden border-x border-slate-800 px-6 hidden md:block">
              <motion.div 
                animate={{ x: [0, -400] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap flex gap-12"
              >
                {["NEXT.JS 14 ENGINE", "SUPABASE DATA NODES", "AES-256 ENCRYPTION", "POPIA COMPLIANT", "0.8s LATENCY STANDARD"].map((text, i) => (
                  <span key={i} className="font-mono text-[9px] font-bold text-slate-500 tracking-[0.2em]">
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Trust Verification */}
            <div className="flex items-center gap-3 shrink-0">
              <Lock className="h-4 w-4 text-blue-400" />
              <p className="font-mono text-[10px] font-bold text-blue-400 tracking-widest uppercase">MLL-Trust-Verified</p>
            </div>

          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-neutral-200 pt-10 sm:grid-cols-3">
          
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-blue-100 bg-blue-50">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">SPEED PERFORMANCE</p>
              <p className="font-sans text-base font-bold text-slate-900 mt-1">Lightning Fast Loading Times</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-blue-100 bg-blue-50">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">DATA PROTECTION</p>
              <p className="font-sans text-base font-bold text-slate-900 mt-1">Total Enterprise Security</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-blue-100 bg-blue-50">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">RELIABILITY STANDARDS</p>
              <p className="font-sans text-base font-bold text-slate-900 mt-1">99.99% Always Online Uptime</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}