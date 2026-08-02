"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowDown } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "We start by understanding your business, your goals, and the real problem behind the request.",
    icon: <Search className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
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
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070",
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
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
            OUR PROCESS
          </span>
          <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 uppercase sm:text-5xl">
            HOW MLL WORKS
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-sans text-base text-slate-600">
            We follow a proven engineering process that ensures every solution we build delivers real value and long-term impact.
          </p>
        </div>

        {/* Vertical Process Steps */}
        <div className="flex flex-col items-center gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="w-full flex flex-col items-center">
              
              {/* Step Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left Content */}
                <div className="p-8 lg:p-12 flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    {step.icon}
                  </div>
                  <div>
                    <span className="font-mono text-sm font-bold text-blue-600 uppercase tracking-widest">
                      {step.id}
                    </span>
                    <h3 className="mt-1 font-sans text-2xl font-black text-slate-900 uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-sans text-slate-600 leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative h-64 lg:h-full min-h-[300px] border-l border-neutral-200 hidden lg:block">
                  <Image 
                    src={step.image} 
                    alt={`MLL Process Step: ${step.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Connecting Arrow (Don't show after last step) */}
              {index !== steps.length - 1 && (
                <div className="py-4">
                  <ArrowDown className="h-6 w-6 text-blue-600 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}