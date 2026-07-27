"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  FileText, 
  Send, 
  Lock, 
  Plus, 
  Trash2,
  Trophy,
  ArrowRight
} from "lucide-react";

// --- APEX LINK LOGO COMPONENT ---
const MLApexLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 5L35 32H25L20 23L15 32H5L20 5Z" fill="#60A5FA" fillOpacity="0.3" />
    <path d="M20 5L32 28H23L20 22L17 28H8L20 5Z" fill="#2563EB" />
    <circle cx="20" cy="5" r="1.5" fill="#1E3A8A" />
  </svg>
);

export default function OutreachForge() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  const WEB3FORMS_KEY = "fdaf5dca-3373-4429-b0b9-177a590783e1";

  useEffect(() => { setMounted(true); }, []);

  const [client, setClient] = useState({
    name: "",
    website: "",
    industry: "Technology",
    honor_message: "We have been closely following your progress. The way you handle your brand and market presence is truly commendable, and it is clear why you are a leader in your field.",
    potential_vision: "Our vision is to bridge the gap between your current success and the absolute peak of modern digital performance. We see an opportunity to engineer a digital engine that matches the high quality of your services.",
  });

  const [improvements, setImprovements] = useState(["Optimized UI Responsiveness", "Enhanced Security Layering"]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    const documentTemplate = `
=========================================
MLL DIGITAL CONSULTING // STRATEGIC BRIEF
=========================================

TO: THE EXECUTIVE TEAM // ${client.name.toUpperCase()}
FROM: MLL DIGITAL ENGINEERING TEAM
SUBJECT: STRATEGIC DIGITAL ASSESSMENT & PARTNERSHIP PROPOSAL

-----------------------------------------
1.0 THE HONOR OF YOUR WORK
-----------------------------------------
${client.honor_message}

At MLL Digital Consulting, we only reach out to brands that we 
sincerely respect. Your current digital presence shows a strong 
foundation, and we honor the work you have put into your platform.

-----------------------------------------
2.0 THE OPPORTUNITY FOR EVOLUTION
-----------------------------------------
While your current systems are functional, our technical audit 
suggests that we can help you evolve into a more modern, high- 
performance architecture. We propose the following upgrades:

${improvements.map(i => `[→] ${i.toUpperCase()}`).join("\n")}

-----------------------------------------
3.0 OUR TECHNICAL POTENTIAL
-----------------------------------------
${client.potential_vision}

By partnering with MLL Digital, you gain access to our core 
engineering standards:
• ENTERPRISE SPEED: Sub-0.8s load times for maximum retention.
• BANK-GRADE SECURITY: AES-256 Data Encryption & POPIA Compliance.
• SCALABLE ARCHITECTURE: Built with Next.js and Cloud-Native logic.

-----------------------------------------
4.0 THE WAY FORWARD
-----------------------------------------
We are not here to undermine your current work, but to champion your 
future. If our technical vision aligns with your growth goals, we 
would be honored to arrange a formal briefing to discuss a way forward.

OFFICIAL PORTFOLIO: https://ml-consulting-iota.vercel.app/
MLL DIGITAL // Research. Analyse. Improve. Deliver.
=========================================
    `;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `STRATEGIC BRIEF: MLL DIGITAL x ${client.name}`,
        from_name: "MLL OUTREACH FORGE",
        message: documentTemplate,
      }),
    });

    if (response.ok) { setIsFinished(true); }
    setIsGenerating(false);
  };

  if (!mounted) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full border-2 border-blue-600 p-10 rounded-2xl text-center shadow-2xl">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Mission Forged</h2>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            The professional outreach brief for <strong>{client.name}</strong> has been delivered to your inbox. 
            Forward it with confidence to initiate the partnership.
          </p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-all">Start Next Assessment</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans blueprint-grid-light">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Matching Website Branding */}
        <div className="flex items-center justify-between mb-12 border-b-4 border-slate-900 pb-8">
          <div className="flex items-center gap-5">
            <MLApexLogo className="h-16 w-16" />
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Outreach Forge v2.0</h1>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">MLL Digital Consulting // Potential Engine</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <Lock className="h-4 w-4 text-slate-300" />
            <span className="text-[10px] font-black text-slate-400 uppercase">Executive Forge Mode</span>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-8">
          
          {/* Section 1: The Honor (Appreciation) */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-6">
              <Trophy className="h-6 w-6 text-blue-600" />
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">1.0 Honoring Their Work</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Entity Name</label>
                <input required placeholder="e.g. Melsoft Digital" className="w-full border-b-2 border-slate-100 p-3 outline-none focus:border-blue-600 font-black text-slate-900" onChange={e => setClient({...client, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Their Current Site</label>
                <input required placeholder="https://..." className="w-full border-b-2 border-slate-100 p-3 outline-none focus:border-blue-600 font-bold text-blue-600" onChange={e => setClient({...client, website: e.target.value})} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message of Appreciation (The Hook)</label>
              <textarea rows={2} className="w-full border-2 border-slate-50 p-4 rounded-lg outline-none focus:border-blue-600 text-sm italic text-slate-600" value={client.honor_message} onChange={e => setClient({...client, honor_message: e.target.value})} />
            </div>
          </div>

          {/* Section 2: The Potential (Solutions) */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 border-l-4 border-green-600 pl-6">
              <Sparkles className="h-6 w-6 text-green-600" />
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">2.0 Showcasing Potential</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Proposed Engineering Upgrades</label>
                <button type="button" onClick={() => setImprovements([...improvements, ""])} className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded">+ ADD TASK</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {improvements.map((im, i) => (
                  <div key={i} className="flex gap-2 items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <input className="bg-transparent flex-1 text-xs font-bold text-slate-700 outline-none" value={im} onChange={e => { const n = [...improvements]; n[i] = e.target.value; setImprovements(n); }} />
                    <button type="button" onClick={() => setImprovements(improvements.filter((_, idx) => idx !== i))}><Trash2 className="h-4 w-4 text-slate-300 hover:text-red-500" /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Future Partnership Vision</label>
              <textarea rows={2} className="w-full border-2 border-slate-50 p-4 rounded-lg outline-none focus:border-blue-600 text-sm italic text-slate-600" value={client.potential_vision} onChange={e => setClient({...client, potential_vision: e.target.value})} />
            </div>
          </div>

          {/* Section 3: Standard Security & Link */}
          <div className="bg-slate-900 p-10 rounded-xl text-white space-y-6 relative overflow-hidden">
             <MLApexLogo className="absolute -right-10 -bottom-10 h-64 w-64 opacity-5 rotate-12" />
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                  <h3 className="text-sm font-black uppercase tracking-widest">3.0 Fixed Engineering Standards</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div>
                     <p className="text-[9px] font-bold text-blue-400 uppercase mb-2">Encryption</p>
                     <p className="text-[11px] text-slate-400">AES-256 Bit Encryption standard on all database entry points.</p>
                   </div>
                   <div>
                     <p className="text-[9px] font-bold text-blue-400 uppercase mb-2">Architecture</p>
                     <p className="text-[11px] text-slate-400">Next.js 14 Framework with Cloud-Optimized deployment infrastructure.</p>
                   </div>
                   <div>
                     <p className="text-[9px] font-bold text-blue-400 uppercase mb-2">Compliance</p>
                     <p className="text-[11px] text-slate-400">Fully POPIA aligned systems designed for the South African market.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Final Submit Button */}
          <button 
            type="submit" 
            disabled={isGenerating} 
            className="w-full bg-blue-600 text-white font-black py-8 rounded-xl hover:bg-slate-900 transition-all uppercase tracking-[0.4em] text-xs shadow-2xl flex items-center justify-center gap-4 group"
          >
            {isGenerating ? "ARCHITECTING PROPOSAL..." : "GENERATE STRATEGIC ASSESSMENT"} 
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </button>

        </form>
      </div>
    </main>
  );
}