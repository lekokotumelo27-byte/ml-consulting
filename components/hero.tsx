"use client";

import { ArrowRight, ArrowUpRight, Cloud, Code2, Users, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-8 text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase">
            <ArrowRight className="h-3 w-3" /> Solutions Engineered for Growth
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
            Engineering reliable digital systems for modern organisations.
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
            We design, build and operate secure, scalable and high-performance systems that drive real business impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-md">
              Explore Services <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/projects" className="bg-neutral-100 hover:bg-neutral-200 text-slate-900 px-8 py-4 rounded-lg font-bold text-sm transition-all border border-neutral-200">
              View Our Work
            </a>
          </div>
        </div>

        {/* Hero Visual: Technical Isometric Schematic */}
        <div className="relative h-[400px] flex items-center justify-center">
          <svg viewBox="0 0 500 500" className="w-full h-full opacity-60">
              <path d="M250 100 L400 200 L250 300 L100 200 Z" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M250 150 L350 225 L250 300 L150 225 Z" fill="none" stroke="#2563EB" strokeWidth="2" />
              <circle cx="250" cy="150" r="40" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Cloud className="text-blue-600" x="235" y="135" width="30" />
              <circle cx="400" cy="200" r="30" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Code2 className="text-blue-600" x="385" y="185" width="30" />
              <circle cx="100" cy="200" r="30" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Users className="text-blue-600" x="85" y="185" width="30" />
              <circle cx="250" cy="300" r="35" fill="white" stroke="#2563EB" strokeWidth="1" />
              <ShieldCheck className="text-blue-600" x="235" y="285" width="30" />
          </svg>
        </div>
      </div>
    </section>
  );
}