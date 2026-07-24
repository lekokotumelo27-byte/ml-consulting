"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MessageSquare, ChevronDown, ArrowRight } from "lucide-react";

export default function FaqsPage() {
  // Simple State to track which FAQ is clicked/open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to design and launch a new system?",
      a: "Clean, professional website redesigns and UI projects typically take 2 to 3 weeks. Custom application systems or database client portals take 4 to 6 weeks, depending on the complexity of the database schema."
    },
    {
      q: "Do I fully own the code and systems after you build them?",
      a: "Yes, 100%. Once the project is complete and the final invoice is settled, all database credentials, source code files, domain records, and server accounts are fully transferred to you. We believe in absolute transparency."
    },
    {
      q: "What happens if our system has an issue or goes down?",
      a: "All systems we deliver are monitored continuously. If you are on our Technical Support & Maintenance retainer, our helpdesk is alerted instantly to any errors and will resolve them before it impacts your business."
    },
    {
      q: "Are your databases secure and compliant with South African privacy laws (POPIA)?",
      a: "Absolutely. Every database and form system we build uses modern encryption and row-level database security. This guarantees your corporate data and client profiles are protected and fully aligned with POPIA guidelines."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 border-b border-neutral-200 bg-white">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/40 blur-[120px]" />
        
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            SYSTEM QUESTIONS
          </span>
          <h1 className="mt-4 font-sans text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
            Frequently Asked <span className="text-blue-600">Questions.</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto font-sans text-sm text-slate-600 leading-relaxed">
            Get straight-forward, simple answers about our development standards, project deliverables, ownership transfers, and technical retainers.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 text-left font-sans text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-neutral-50 pt-3">
                      <p className="font-sans text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-50/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 mx-auto mb-6">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="font-sans text-lg font-bold text-slate-900">
            Have a different question about an application scope?
          </h2>
          <p className="mt-2 font-sans text-xs text-slate-500">
            Tell us about your requirements, and we will get back to you with a direct answer.
          </p>
          <div className="mt-6">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Get Direct Tech Support <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}