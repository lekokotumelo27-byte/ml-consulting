"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "We start by understanding your business, your goals, and the real problem behind the request.",
    icon: <Search className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
  },
  {
    id: "02",
    title: "Design",
    description: "We design scalable, secure, and user-centered solutions tailored to your business needs.",
    icon: <PenTool className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070",
  },
  {
    id: "03",
    title: "Engineer",
    description: "We build with clean code, modern technologies, and industry best practices for performance and reliability.",
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
  },
  {
    id: "04",
    title: "Deliver",
    description: "We deploy production-ready systems and provide ongoing support to ensure your continued success.",
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-100 mb-4">
             <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                OUR PROCESS
             </span>
          </div>
          <h2 className="font-sans text-4xl font-black tracking-tight text-slate-900 uppercase md:text-5xl">
            HOW MLL WORKS
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-sans text-sm md:text-base text-slate-500 font-medium">
            We follow a proven engineering process that ensures every solution we build delivers real value and long-term impact.
          </p>
        </div>

        {/* Vertical Stacked Cards */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="w-full flex flex-col items-center">
              
              {/* Step Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-[2.5rem] border border-neutral-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Text Content */}
                <div className="p-10 lg:p-16 flex items-start gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-lg font-bold text-blue-600 italic">
                        {step.id}
                        </span>
                        <h3 className="font-sans text-3xl font-black text-slate-900 uppercase">
                        {step.title}
                        </h3>
                    </div>
                    <p className="mt-4 font-sans text-slate-500 leading-relaxed text-base font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative h-full min-h-[400px] p-6 hidden lg:block">
                  <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-inner">
                    <Image 
                        src={step.image} 
                        alt={step.title}
                        fill
                        className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Connecting Arrow */}
              {index !== steps.length - 1 && (
                <div className="py-8">
                  <ArrowDown className="h-7 w-7 text-blue-600 opacity-60" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Custom Arrow Component to avoid import conflict
function ArrowDown({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
    )
}