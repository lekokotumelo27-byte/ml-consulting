"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code2, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 lg:py-28 border-b border-neutral-100 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Balanced Engineering Content */}
        <div className="text-left relative">
          
          {/* HARDWARE MICRO-CARDS (Placed in the empty space above) */}
          <div className="hidden lg:flex gap-4 mb-10">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="w-24 h-16 relative rounded-lg overflow-hidden border border-neutral-200 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400" 
                  alt="Hardware Core Logic" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-mono text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                HW_CORE_LOGIC // V.01
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="w-24 h-16 relative rounded-lg overflow-hidden border border-neutral-200 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400" 
                  alt="IO System Bus" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-mono text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                IO_SYSTEM_BUS // ACTIVE
              </p>
            </motion.div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold font-mono text-[10px] tracking-widest uppercase">
            <ArrowRight className="h-3 w-3" /> Solutions Engineered for Growth
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-8 uppercase">
            Engineering reliable <br className="hidden md:block" />
            digital systems for <span className="text-blue-600">modern organisations.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl text-balance">
            We design, build and operate secure, scalable and high-performance systems that drive real business impact.
          </p>
        </div>

        {/* Right Side: Technical "Alive" Schematic */}
        <div className="relative h-[350px] lg:h-[500px] flex items-center justify-center bg-blue-50/10 rounded-[2.5rem] border border-blue-50/50 shadow-inner">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <motion.path 
              d="M250 100 L400 200 L250 300 L100 200 Z" 
              fill="none" 
              stroke="#2563EB" 
              strokeWidth="1" 
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="opacity-40"
            />
            <motion.path 
              d="M250 150 L350 225 L250 300 L150 225 Z" 
              fill="none" 
              stroke="#2563EB" 
              strokeWidth="1.5" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <g transform="translate(250, 225)">
              <motion.circle 
                r="15" 
                fill="#2563EB" 
                className="opacity-20"
                animate={{ scale: [1, 2.5, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle r="4" fill="#2563EB" />
            </g>

            <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <circle cx="250" cy="150" r="35" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Cloud className="text-blue-600" x="235" y="135" width="30" />
            </motion.g>

            <motion.g animate={{ x: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <circle cx="400" cy="200" r="25" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Code2 className="text-blue-600" x="388" y="188" width="24" />
            </motion.g>

            <motion.g animate={{ x: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <circle cx="100" cy="200" r="25" fill="white" stroke="#2563EB" strokeWidth="1" />
              <Users className="text-blue-600" x="88" y="188" width="24" />
            </motion.g>

            <motion.g animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
              <circle cx="250" cy="300" r="30" fill="white" stroke="#2563EB" strokeWidth="1" />
              <ShieldCheck className="text-blue-600" x="238" y="288" width="24" />
            </motion.g>
          </svg>
        </div>

      </div>
    </section>
  );
}