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
    image: "https://images.unsplash.com/photo-1454165833767-027508496b4c?q=80&w=2070",
  },
  {
    id: "02",
    title: "Design",
    description: "We design scalable, secure, and user-centered solutions tailored to your business needs.",
    icon: <PenTool className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1581291518151-0107e77a3f5b?q=80&w=2070",
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
    <section className="py-24 bg-white border-b border-neutral-100">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Screenshot Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-100 mb-6">
             <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                OUR PROCESS
             </span>
          </div>
          <h2 className="font-sans text-4xl font-black tracking-tight text-slate-900 uppercase">
            HOW MLL WORKS
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-sans text-sm text-slate-500 font-medium leading-relaxed">
            We follow a proven engineering process that ensures every solution we build delivers real value and long-term impact.
          </p>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="w-full flex flex-col items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] border border-neutral-200 shadow-sm overflow-hidden min-h-[300px]"
              >
                {/* Content Side */}
                <div className="p-10 lg:p-14 flex items-start gap-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-lg font-bold text-blue-600 italic">
                        {step.id}
                        </span>
                        <h3 className="font-sans text-2xl font-black text-slate-900 uppercase">
                        {step.title}
                        </h3>
                    </div>
                    <p className="font-sans text-slate-500 leading-relaxed text-sm font-medium max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative hidden lg:block h-full w-full">
                    <Image 
                        src={step.image} 
                        alt={step.title}
                        fill
                        className="object-cover"
                    />
                </div>
              </motion.div>

              {/* Connecting Blue Arrow */}
              {index !== steps.length - 1 && (
                <div className="py-6">
                  <ArrowDownIcon className="h-6 w-6 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}