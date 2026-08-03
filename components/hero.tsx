"use client";

import { ArrowRight, Cloud, Code2, Users, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 lg:py-28 border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Balanced Engineering Content */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase">
            <ArrowRight className="h-3 w-3" /> Solutions Engineered for Growth
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-8 uppercase">
            Engineering reliable <br className="hidden md:block" />
            digital systems for <span className="text-blue-600">modern organisations.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
            We design, build and operate secure, scalable and high-performance systems that drive real business impact.
          </p>
        </div>

        {/* Right Side: Technical Schematic */}
        <div className="relative h-[300px] lg:h-[450px] flex items-center justify-center bg-blue-50/20 rounded-[2.5rem] border border-blue-50">
          <svg viewBox="0 0 500 500" className="w-full h-full opacity-80">
              <path d="M250 100 L400 200 L250 300 L100 200 Z" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="6 6" />
              <path d="M250 150 L350 225 L250 300 L150 225 Z" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              
              <circle cx="250" cy="150" r="35" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Cloud className="text-blue-600" x="235" y="135" width="30" />
              
              <circle cx="400" cy="200" r="25" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Code2 className="text-blue-600" x="388" y="188" width="24" />
              
              <circle cx="100" cy="200" r="25" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Users className="text-blue-600" x="88" y="188" width="24" />
              
              <circle cx="250" cy="300" r="30" fill="white" stroke="#2563EB" strokeWidth="1" />
              <ShieldCheck className="text-blue-600" x="238" y="288" width="24" />
          </svg>
        </div>

      </div>
    </section>
  );
}