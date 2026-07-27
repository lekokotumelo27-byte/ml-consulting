"use client";

import React, { useState, useEffect } from "react";
import { FileSearch, Send, CheckCircle, Lock, Plus, Trash2, Zap, Trophy, Heart } from "lucide-react";

export default function OutreachForge() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  const WEB3FORMS_KEY = "fdaf5dca-3373-4429-b0b9-177a590783e1";

  useEffect(() => { setMounted(true); }, []);

  const [client, setClient] = useState({
    rep_name: "",
    company_name: "",
    website_url: "",
    honor_message: "We have been reviewing your current operations and brand presence. It is clear that you have built a high-standard foundation, and we sincerely honor the success you have achieved in the market.",
  });

  const [auditPoints, setAuditPoints] = useState([
    { issue: "UI/UX Navigation lag", solution: "Modernized Navigation Logic", benefit: "Reduces customer bounce rate by 30%" }
  ]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    const documentTemplate = `
=========================================
MLL DIGITAL CONSULTING // STRATEGIC BRIEF
=========================================

TO: ${client.rep_name} // ${client.company_name.toUpperCase()}
FROM: MLL DIGITAL ENGINEERING TEAM
SUBJECT: TECHNICAL EVALUATION & SYSTEMS ELEVATION

-----------------------------------------
1.0 INTRODUCTION & ACKNOWLEDGMENT
-----------------------------------------
Good Day ${client.rep_name},

Our team at MLL Digital Consulting has been reviewing the digital 
infrastructure of ${client.company_name}. Before discussing technicalities, 
we want to state that ${client.honor_message}

We believe in your mission and want to ensure your technology matches 
the high quality of your brand.

-----------------------------------------
2.0 TECHNICAL EVALUATION & ELEVATIONS
-----------------------------------------
During our review of ${client.website_url}, we identified specific 
opportunities where we can elevate your systems to a modern standard:

${auditPoints.map((p, i) => `
OBSERVATION ${i + 1}: ${p.issue.toUpperCase()}
PROPOSED FIX: ${p.solution.toUpperCase()}
BUSINESS BENEFIT: ${p.benefit}
`).join("\n")}

-----------------------------------------
3.0 WHY CHOOSE MLL DIGITAL?
-----------------------------------------
Every improvement we initiate is built on the MLL Standard:
• SPEED: Global performance optimization (Next.js 14).
• SECURITY: AES-256 Data Encryption & POPIA Compliance.
• CARE: We treat your systems as if they were our own.

-----------------------------------------
4.0 PROPOSED WAY FORWARD
-----------------------------------------
If this technical vision aligns with your growth goals, we would 
love to discuss how we can work on these elevations for you.

We invite you to view our technical portfolio here:
https://ml-consulting-iota.vercel.app/

We look forward to the possibility of scaling your business together.

REGARDS,
MLL DIGITAL CONSULTING TEAM
Research. Analyse. Improve. Deliver.
=========================================
    `;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `STRATEGIC BRIEF: MLL DIGITAL x ${client.company_name}`,
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
          <h2 className="text-2xl font-black text-slate-900 uppercase">Strategic Brief Forged</h2>
          <p className="text-slate-600 mt-4 text-sm">The full report for <strong>{client.company_name}</strong> is in your inbox. Forward it to their team to start the partnership.</p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-all">New Assessment</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <FileSearch className="h-7 w-7 text-blue-600" />
            <h1 className="text-2xl font-black uppercase tracking-tight">Outreach Strategy Forge</h1>
          </div>
          <Lock className="h-4 w-4 text-slate-400" />
        </div>

        <form onSubmit={handleGenerate} className="space-y-8">
          
          {/* Section 1: Introduction & Honor */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest flex items-center gap-2">
              <Trophy className="h-4 w-4" /> 1.0 Honoring the Target
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required placeholder="Client Representative Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, rep_name: e.target.value})} />
              <input required placeholder="Company Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, company_name: e.target.value})} />
              <input required placeholder="Website URL" className="md:col-span-2 border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, website_url: e.target.value})} />
            </div>
            <textarea rows={2} className="w-full border p-4 rounded-lg text-sm italic text-slate-600 outline-none focus:border-blue-600" value={client.honor_message} onChange={e => setClient({...client, honor_message: e.target.value})} />
          </div>

          {/* Section 2: Technicalities & Care */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest flex items-center gap-2">
                <Zap className="h-4 w-4" /> 2.0 Technical Audit Findings
              </h3>
              <button type="button" onClick={() => setAuditPoints([...auditPoints, {issue: "", solution: "", benefit: ""}])} className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">+ ADD FINDING</button>
            </div>
            
            {auditPoints.map((point, i) => (
              <div key={i} className="p-6 bg-slate-50 border rounded-xl space-y-4 relative">
                <div className="grid grid-cols-1 gap-4">
                  <input placeholder="Identify Problem (e.g. Broken links)" className="bg-white border rounded p-3 text-xs font-bold" value={point.issue} onChange={e => { const n = [...auditPoints]; n[i].issue = e.target.value; setAuditPoints(n); }} />
                  <input placeholder="Proposed Solution (e.g. Code Refactor)" className="bg-white border rounded p-3 text-xs font-bold text-green-600" value={point.solution} onChange={e => { const n = [...auditPoints]; n[i].solution = e.target.value; setAuditPoints(n); }} />
                  <input placeholder="Business Benefit (e.g. Higher sales)" className="bg-white border rounded p-3 text-xs italic" value={point.benefit} onChange={e => { const n = [...auditPoints]; n[i].benefit = e.target.value; setAuditPoints(n); }} />
                </div>
                <button type="button" onClick={() => setAuditPoints(auditPoints.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </div>

          {/* Section 3: Call to Action */}
          <div className="bg-slate-900 p-8 rounded-lg text-white text-center space-y-4">
            <Heart className="h-6 w-6 text-blue-400 mx-auto" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">MLL Digital Final Commitment</h3>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              We are ready to deploy our technical expertise to ensure your systems are modern, secure, and performing at peak potential.
            </p>
          </div>

          <button type="submit" disabled={isGenerating} className="w-full bg-blue-600 text-white font-black py-6 rounded hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3">
            {isGenerating ? "GENERATING BRIEF..." : "GENERATE STRATEGIC BRIEFING"} <Send className="h-4 w-4" />
          </button>

        </form>
      </div>
    </main>
  );
}