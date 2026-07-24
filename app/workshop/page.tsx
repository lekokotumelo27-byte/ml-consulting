"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Check, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Database,
  MessageSquare,
  FileCheck,
  Cpu,
  Server
} from "lucide-react";

export default function WorkshopPage() {
  
  // Custom infinite floating animation configuration - strictly typed for TypeScript
  const floatTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Slim Clean Header */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              The <span className="text-blue-600">Workshop</span>
            </h1>
            <p className="mt-1 font-sans text-sm text-slate-500">
              Step into the world of tech. See what our technicians can do.
            </p>
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
            M.L CONSULTING // CAPABILITY PORTFOLIO
          </span>
        </div>
      </section>

      {/* THE 4 WORKSHOP SECTIONS */}
      <div className="bg-neutral-50/30">

        {/* SECTION 1: CUSTOM BUSINESS WEBSITES */}
        <section className="py-20 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Text block */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  01 // FRONT-FACING TECH
                </span>
                <h2 className="font-sans text-3xl font-black text-slate-900 leading-tight">
                  Custom Business Websites
                </h2>
                <p className="font-sans text-base text-slate-600 leading-relaxed">
                  We design and build clean, lightning-fast business websites from scratch. We focus heavily on stunning, mobile-friendly interfaces that instantly make your company look like an industry leader and convert visitors into paying clients.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Mobile Responsive UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Google SEO Optimized</span>
                  </div>
                </div>
              </div>

              {/* Automated Visual (Cartoon) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] h-[260px] bg-white border border-neutral-200 rounded-2xl shadow-sm flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid-light opacity-40" />
                  
                  {/* Modern Illustration */}
                  <div className="relative w-full h-full flex flex-col justify-between z-10">
                    {/* Floating website elements */}
                    <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                      </div>
                      <span className="h-4 w-24 rounded bg-neutral-100 animate-pulse" />
                    </div>

                    {/* Person at Desk + Web Graphic */}
                    <div className="flex-1 flex items-center justify-between gap-4 mt-4">
                      {/* Character Vector Illustration */}
                      <svg className="h-28 w-28 text-slate-700" viewBox="0 0 100 100">
                        {/* Desk Chair */}
                        <rect x="25" y="55" width="12" height="25" rx="2" fill="#E2E8F0" />
                        {/* Person Silhouette */}
                        <circle cx="45" cy="35" r="12" fill="#94A3B8" />
                        <path d="M30 65 C30 50, 60 50, 60 65 Z" fill="#64748B" />
                        {/* Monitor */}
                        <rect x="65" y="45" width="25" height="18" rx="2" fill="#475569" />
                        <rect x="75" y="63" width="5" height="10" fill="#64748B" />
                        <line x1="70" y1="73" x2="85" y2="73" stroke="#64748B" strokeWidth="2" />
                      </svg>

                      {/* Gentle automated floating website card */}
                      <motion.div 
                        animate={{ y: [0, -12, 0] }}
                        transition={floatTransition}
                        className="w-28 rounded-xl border border-blue-100 bg-blue-50/50 p-3 shadow-sm"
                      >
                        <span className="h-2 w-10 bg-blue-500 rounded block mb-2" />
                        <span className="h-1.5 w-16 bg-blue-300 rounded block mb-1.5" />
                        <span className="h-1.5 w-12 bg-blue-200 rounded block" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: PRIVATE CLIENT PORTALS */}
        <section className="py-20 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Automated Visual (Cartoon) - Left aligned on desktop for balance */}
              <div className="lg:col-span-6 flex justify-center order-last lg:order-first">
                <div className="relative w-full max-w-[340px] h-[260px] bg-white border border-neutral-200 rounded-2xl shadow-sm flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid-light opacity-40" />

                  {/* Modern Illustration */}
                  <div className="relative w-full h-full flex items-center justify-around z-10">
                    
                    {/* User Profile Card */}
                    <div className="w-28 rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm space-y-2">
                      <div className="h-8 w-8 rounded-full bg-slate-300 mx-auto" />
                      <span className="h-2 w-12 bg-slate-500 rounded block mx-auto" />
                      <span className="h-1.5 w-16 bg-slate-400 rounded block mx-auto" />
                    </div>

                    {/* Laser Link pipeline */}
                    <div className="h-[2px] w-8 bg-neutral-100 relative">
                      <span className="absolute inset-0 bg-blue-500 rounded animate-pulse" />
                    </div>

                    {/* Floating glowing shield key */}
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={floatTransition}
                      className="w-24 h-24 rounded-full border border-blue-100 bg-blue-50 flex flex-col items-center justify-center shadow-inner"
                    >
                      <ShieldCheck className="h-8 w-8 text-blue-600 animate-pulse" />
                      <span className="font-mono text-[8px] text-blue-700 font-bold uppercase mt-1">SECURED</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  02 // INTERNAL PORTALS
                </span>
                <h2 className="font-sans text-3xl font-black text-slate-900 leading-tight">
                  Private Client Portals
                </h2>
                <p className="font-sans text-base text-slate-600 leading-relaxed">
                  We develop custom, secure web applications and private client areas. Your customers can securely log in, download invoices, sign digital forms, upload secure documents, and manage their business relationship with you on any device.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Encrypted Logins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Secure Database Link</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: AUTOMATION AND WORKFLOWS */}
        <section className="py-20 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Text block */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  03 // SMART AUTOMATION
                </span>
                <h2 className="font-sans text-3xl font-black text-slate-900 leading-tight">
                  Smart Business Automations
                </h2>
                <p className="font-sans text-base text-slate-600 leading-relaxed">
                  One client makes a booking or purchase, and our system takes over. We write background processes that automatically update your internal ledger, trigger instant WhatsApp confirmations to clients, and email professional PDF invoices.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">WhatsApp Alert Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Automatic PDF Invoices</span>
                  </div>
                </div>
              </div>

              {/* Automated Visual (Cartoon) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] h-[260px] bg-white border border-neutral-200 rounded-2xl shadow-sm flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid-light opacity-40" />

                  {/* Modern Illustration */}
                  <div className="relative w-full h-full flex flex-col justify-center items-center z-10">
                    
                    {/* Central automation engine gears */}
                    <div className="flex items-center gap-6 relative">
                      
                      {/* Left element: client action */}
                      <div className="h-10 w-10 rounded-lg border border-neutral-200 bg-white flex items-center justify-center shadow-sm">
                        <Smartphone className="h-5 w-5 text-slate-500 animate-bounce" />
                      </div>

                      {/* Central gear */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="h-16 w-16 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center"
                      >
                        <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </motion.div>

                      {/* Right element: automated task outcome */}
                      <div className="h-10 w-10 rounded-lg border border-green-200 bg-green-50 flex items-center justify-center shadow-sm">
                        <Check className="h-5 w-5 text-green-600 animate-pulse" />
                      </div>

                    </div>

                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-6">
                      BACKGROUND_PROCESSOR // ACTIVE
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: DEDICATION SUPPORT & SETUP */}
        <section className="py-20 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Automated Visual (Cartoon) - Left aligned on desktop for balance */}
              <div className="lg:col-span-6 flex justify-center order-last lg:order-first">
                <div className="relative w-full max-w-[340px] h-[260px] bg-white border border-neutral-200 rounded-2xl shadow-sm flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid-light opacity-40" />

                  {/* Modern Illustration */}
                  <div className="relative w-full h-full flex flex-col justify-around z-10">
                    
                    {/* Floating support check cards */}
                    <div className="space-y-2">
                      <motion.div 
                        animate={{ x: [0, 8, 0] }}
                        transition={floatTransition}
                        className="flex items-center gap-3 border border-neutral-200 bg-white rounded-lg p-2.5 max-w-[200px]"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-600" />
                        <span className="font-sans text-[10px] font-bold text-slate-800">Workspace Setup</span>
                      </motion.div>

                      <motion.div 
                        animate={{ x: [0, -8, 0] }}
                        transition={{ ...floatTransition, delay: 1 }}
                        className="flex items-center gap-3 border border-neutral-200 bg-white rounded-lg p-2.5 max-w-[200px] ml-auto"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-600" />
                        <span className="font-sans text-[10px] font-bold text-slate-800">Support Helpdesk</span>
                      </motion.div>
                    </div>

                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest text-center">
                      M.L CLIENT ENABLEMENT // ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  04 // TEAM SUPPORT
                </span>
                <h2 className="font-sans text-3xl font-black text-slate-900 leading-tight">
                  Handover & IT Support
                </h2>
                {/* FIXED raw apostrophe: don't -> don&apos;t */}
                <p className="font-sans text-base text-slate-600 leading-relaxed">
                  We don&apos;t just deliver your code and disappear. We configure your corporate Google Workspace, set up your custom domain emails, train your entire team on a direct video call, and provide ongoing monthly support whenever you need.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Google Workspace Config</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-sans text-xs font-bold text-slate-700">Helpdesk Support Desk</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}