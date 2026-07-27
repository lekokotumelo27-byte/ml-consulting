"use client";

import React, { useState, useEffect } from "react";
import { FileSearch, Send, CheckCircle, Lock, Plus, Trash2, Zap } from "lucide-react";

export default function OutreachForge() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  const WEB3FORMS_KEY = "fdaf5dca-3373-4429-b0b9-177a590783e1";

  useEffect(() => { setMounted(true); }, []);

  const [client, setClient] = useState({
    name: "",
    website: "",
    exciting_message: "We have the team, the technology, and the vision to transform these digital challenges into a powerful competitive advantage for your brand.",
  });

  const [problems, setProblems] = useState([""]);
  const [solutions, setSolutions] = useState([""]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    const documentTemplate = `
=========================================
MLL DIGITAL CONSULTING // STRATEGIC OUTREACH
OFFICIAL DIGITAL ASSESSMENT REPORT
=========================================

PREPARED FOR: ${client.name.toUpperCase()}
WEBSITE ANALYSED: ${client.website}
DATE: ${new Date().toLocaleDateString()}

-----------------------------------------
1.0 THE CURRENT CHALLENGE
-----------------------------------------
Our research team has identified the following 
bottlenecks in your current digital presence:

${problems.map(p => `[!] ${p}`).join("\n")}

-----------------------------------------
2.0 THE MLL DIGITAL SOLUTION
-----------------------------------------
To bridge these gaps, our engineers propose 
the following high-performance upgrades:

${solutions.map(s => `[✓] ${s}`).join("\n")}

-----------------------------------------
3.0 OUR PARTNERSHIP VISION
-----------------------------------------
${client.exciting_message}

We are ready to deploy our full technical 
resources to ensure your systems are fast, 
secure, and modern.

-----------------------------------------
4.0 ENGINEERING STANDARDS
-----------------------------------------
• AES-256 Bit Data Encryption (Standard)
• POPIA Compliant Architecture
• TLS 1.3 Secure Transfer Protocols

-----------------------------------------
MLL DIGITAL CONSULTING
Research. Analyse. Improve. Deliver.

VIEW OUR FULL PORTFOLIO:
https://ml-consulting-iota.vercel.app/
=========================================
    `;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `STRATEGIC PROPOSAL: MLL x ${client.name}`,
        from_name: "MLL OUTREACH SYSTEM",
        message: documentTemplate,
      }),
    });

    if (response.ok) { setIsFinished(true); }
    setIsGenerating(false);
  };

  if (!mounted) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-8 border-blue-600 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-slate-900 uppercase">Assessment Forged</h2>
          <p className="text-slate-600 mt-4 text-sm">The professional proposal for <strong>{client.name}</strong> is in your inbox. Forward it to them to initiate the project.</p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded font-bold uppercase text-xs tracking-widest transition-colors hover:bg-blue-600">Start Next Research</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <FileSearch className="h-7 w-7 text-blue-600" />
            <h1 className="text-2xl font-black uppercase tracking-tight">Outreach Strategy Forge</h1>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Internal Tool</span>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-8">
          
          {/* Section 1: Client */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">1. Target Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required placeholder="Client Company Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, name: e.target.value})} />
              <input required placeholder="Target Website URL" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, website: e.target.value})} />
            </div>
          </div>

          {/* Section 2: Problems & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-black text-red-500 uppercase">Problems Identified</h3>
                <button type="button" onClick={() => setProblems([...problems, ""])} className="text-[10px] font-bold text-blue-600 underline">+ ADD</button>
              </div>
              {problems.map((p, i) => (
                <input key={i} placeholder="e.g. Slow mobile loading" className="w-full border-b p-2 text-xs" value={p} onChange={e => { const n = [...problems]; n[i] = e.target.value; setProblems(n); }} />
              ))}
            </div>

            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-black text-green-600 uppercase">Proposed Solutions</h3>
                <button type="button" onClick={() => setSolutions([...solutions, ""])} className="text-[10px] font-bold text-blue-600 underline">+ ADD</button>
              </div>
              {solutions.map((s, i) => (
                <input key={i} placeholder="e.g. Next.js Migration" className="w-full border-b p-2 text-xs" value={s} onChange={e => { const n = [...solutions]; n[i] = e.target.value; setSolutions(n); }} />
              ))}
            </div>
          </div>

          {/* Section 3: The Message */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">3. Partnership Vision (The Excitement)</h3>
            <textarea 
              rows={3}
              className="w-full border-2 border-slate-50 p-4 rounded-lg outline-none focus:border-blue-600 text-sm italic text-slate-600 leading-relaxed"
              value={client.exciting_message}
              onChange={e => setClient({...client, exciting_message: e.target.value})}
            />
          </div>

          {/* Final Button */}
          <button type="submit" disabled={isGenerating} className="w-full bg-blue-600 text-white font-black py-6 rounded hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3">
            {isGenerating ? "BUILDING ASSESSMENT..." : "GENERATE STRATEGIC PROPOSAL"} <Zap className="h-4 w-4" />
          </button>

        </form>
      </div>
    </main>
  );
}