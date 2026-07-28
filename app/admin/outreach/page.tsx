"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Zap, 
  FileSearch, 
  Lock, 
  Plus, 
  Trash2,
  Trophy,
  ArrowRight
} from "lucide-react";

// --- APEX LINK LOGO ---
const MLApexLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 5L35 32H25L20 23L15 32H5L20 5Z" fill="#60A5FA" fillOpacity="0.3" />
    <path d="M20 5L32 28H23L20 22L17 28H8L20 5Z" fill="#2563EB" />
    <circle cx="20" cy="5" r="1.5" fill="#1E3A8A" />
  </svg>
);

export default function OutreachForge() {
  const [showPreview, setShowPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const [client, setClient] = useState({
    name: "",
    website: "",
    honor_message: "It is clear that you have built a high-standard foundation, and we sincerely honor the reputation you have achieved in the market.",
  });

  const [findings, setFindings] = useState([
    { issue: "Mobile Spacing & Typography Density", solution: "Line-Height & Padding Optimization", benefit: "Ensures 100% readability for mobile users." }
  ]);

  if (!mounted) return null;

  if (showPreview) {
    return (
      <div className="min-h-screen bg-slate-100 py-12 px-4 font-sans text-slate-900">
        <div id="brief-document" className="max-w-[800px] mx-auto bg-white shadow-2xl border border-slate-200 overflow-hidden print:shadow-none print:border-none">
          
          {/* BRANDED HEADER */}
          <div className="bg-slate-900 p-12 text-center border-b-8 border-blue-600">
            <MLApexLogo className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-white text-3xl font-black tracking-widest uppercase leading-none">MLL DIGITAL CONSULTING</h1>
            <p className="text-blue-400 text-[10px] font-bold tracking-[0.5em] uppercase mt-4">Systems Architecture & IT Strategy</p>
          </div>

          <div className="p-12 lg:p-20 space-y-12">
            <div>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <FileSearch className="h-4 w-4" /> Strategic Assessment Brief
              </p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Technical Elevation: {client.name}</h2>
            </div>

            {/* HONOR SECTION */}
            <div className="border-l-4 border-blue-600 pl-8 py-2 bg-blue-50/30 rounded-r-xl">
              <p className="text-xl font-serif italic text-slate-700 leading-relaxed">
                &quot;Our team has been reviewing your digital infrastructure. {client.honor_message}&quot;
              </p>
            </div>

            {/* FINDINGS */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <Trophy className="h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">2.0 Engineering Opportunities</h3>
              </div>
              {findings.map((f, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-4">Finding {i + 1}</p>
                    <p className="text-sm font-bold text-slate-500 uppercase">Current Bottleneck:</p>
                    <p className="text-lg font-black text-slate-900 mt-1 uppercase">{f.issue}</p>
                    <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] font-black text-green-600 uppercase mb-1">Proposed MLL Solution</p>
                        <p className="text-sm font-bold text-slate-800 uppercase">{f.solution}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Business Impact</p>
                        <p className="text-sm font-medium text-slate-600 italic">{f.benefit}</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="bg-slate-900 p-10 rounded-2xl text-white flex justify-between items-center">
                 <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-4 text-blue-400">
                      <ShieldCheck className="h-6 w-6" />
                      <h4 className="text-xs font-black uppercase tracking-widest">MLL Engineering Standard</h4>
                    </div>
                    <p className="text-xs text-slate-400">AES-256 Data Encryption // POPIA Compliant Architecture</p>
                 </div>
                 <div className="text-right">
                    <p className="font-serif italic text-2xl">MLL Digital</p>
                 </div>
            </div>
          </div>
        </div>

        {/* PRINT ACTION */}
        <div className="max-w-[800px] mx-auto mt-10 flex justify-between items-center no-print">
           <button onClick={() => setShowPreview(false)} className="text-slate-500 text-xs font-bold uppercase hover:text-slate-900 flex items-center gap-2">
             <ArrowRight className="h-4 w-4 rotate-180" /> Back to Editor
           </button>
           <button onClick={() => window.print()} className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-700 transition-all">
             Save as Official PDF
           </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 font-sans blueprint-grid-light">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b-4 border-slate-900 pb-8">
          <div className="flex items-center gap-6">
            <MLApexLogo className="h-16 w-16" />
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Strategic Outreach Forge</h1>
              <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em]">Internal Engine // MLL Digital</p>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setShowPreview(true); }} className="space-y-8">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm space-y-8 text-slate-900">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-6">1.0 Honoring the Target</h3>
            <div className="grid grid-cols-2 gap-8">
              <input required placeholder="Client Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, name: e.target.value})} />
              <input required placeholder="Website URL" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, website: e.target.value})} />
            </div>
            <textarea rows={2} className="w-full border-2 border-slate-50 p-4 rounded-lg text-sm italic text-slate-600 outline-none focus:border-blue-600" value={client.honor_message} onChange={e => setClient({...client, honor_message: e.target.value})} />
          </div>

          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm space-y-8 text-slate-900">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-6">2.0 Assessment Findings</h3>
              <button type="button" onClick={() => setFindings([...findings, {issue: "", solution: "", benefit: ""}])} className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded">+ ADD FINDING</button>
            </div>
            {findings.map((f, i) => (
              <div key={i} className="p-6 bg-slate-50 border rounded-xl space-y-4 relative">
                <input placeholder="Observed Constraint" className="w-full bg-white border p-3 text-xs font-bold" value={f.issue} onChange={e => { const n = [...findings]; n[i].issue = e.target.value; setFindings(n); }} />
                <input placeholder="MLL Proposed Elevation" className="w-full bg-white border p-3 text-xs font-black text-blue-600" value={f.solution} onChange={e => { const n = [...findings]; n[i].solution = e.target.value; setFindings(n); }} />
                <input placeholder="Direct Business Benefit" className="w-full bg-white border p-3 text-[10px] italic" value={f.benefit} onChange={e => { const n = [...findings]; n[i].benefit = e.target.value; setFindings(n); }} />
                <button type="button" onClick={() => setFindings(findings.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white font-black py-8 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-[0.4em] text-xs shadow-2xl">
            GENERATE STRATEGIC BRIEFING
          </button>
        </form>
      </div>
    </main>
  );
}