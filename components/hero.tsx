"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Zap, ShieldCheck, Globe, Search, PenTool, Code2, Rocket } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    description: "We start by understanding your business, your goals, and the real problem behind the request.",
    icon: <Search className="h-5 w-5 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    id: "02",
    title: "Design",
    description: "We design scalable, secure, and user-centered solutions tailored to your business needs.",
    icon: <PenTool className="h-5 w-5 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
  },
  {
    id: "03",
    title: "Engineer",
    description: "We build with clean code, modern technologies, and industry best practices for performance.",
    icon: <Code2 className="h-5 w-5 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
  },
  {
    id: "04",
    title: "Deliver",
    description: "We deploy production-ready systems and provide ongoing support to ensure your success.",
    icon: <Rocket className="h-5 w-5 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800",
  },
];

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
        <h1 className="max-w-4xl font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-tight uppercase">
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

        {/* 4. CTA Buttons */}
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

        {/* --- 5. HOW MLL WORKS SECTION (PLACED EXACTLY AFTER BUTTONS) --- */}
        <div className="mt-32 mb-32">
            <div className="text-center mb-16">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                    OUR PROCESS
                </span>
                <h2 className="mt-6 font-sans text-3xl font-black tracking-tight text-slate-900 uppercase">
                    HOW MLL WORKS
                </h2>
                <p className="mt-3 mx-auto max-w-xl font-sans text-sm text-slate-500 font-medium leading-relaxed">
                    We follow a proven engineering process that ensures every solution we build delivers real value and long-term impact.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4">
                {processSteps.map((step, index) => (
                    <div key={step.id} className="w-full flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-[2rem] border border-neutral-200 shadow-sm overflow-hidden min-h-[280px]"
                        >
                            {/* Left Content */}
                            <div className="p-8 md:p-12 flex items-start gap-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                                    {step.icon}
                                </div>
                                <div className="pt-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-base font-bold text-blue-600 italic">
                                            {step.id}
                                        </span>
                                        <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="font-sans text-slate-500 leading-relaxed text-sm font-medium max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative h-48 md:h-full hidden md:block border-l border-neutral-100">
                                <Image 
                                    src={step.image} 
                                    alt={step.title} 
                                    fill 
                                    className="object-cover grayscale brightness-95 opacity-90 hover:grayscale-0 transition-all duration-700" 
                                />
                            </div>
                        </motion.div>

                        {index !== processSteps.length - 1 && (
                            <div className="py-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                                    <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* 6. Performance Metrics - FULLY PRESERVED AT THE BOTTOM */}
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