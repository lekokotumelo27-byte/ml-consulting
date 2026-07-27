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
    { issue: "Mobile Typographic Density", solution: "Line-Height Optimization", benefit: "Improves readability by 40%" }
  ]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // --- BRANDED HTML TEMPLATE FOR THE CLIENT ---
    const htmlEmail = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 0; color: #0f172a; background-color: #ffffff;">
        
        <!-- HEADER / BRANDING -->
        <div style="background-color: #0f172a; padding: 40px 20px; text-align: center; border-bottom: 5px solid #2563eb;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 2px; font-weight: 900;">MLL DIGITAL CONSULTING</h1>
          <p style="color: #60a5fa; margin: 10px 0 0; font-size: 10px; font-weight: bold; letter-spacing: 4px; text-transform: uppercase;">Systems Architecture & Strategy</p>
        </div>

        <div style="padding: 40px;">
          <!-- INTRO -->
          <p style="font-size: 14px; color: #64748b; margin-bottom: 5px; font-weight: bold; text-transform: uppercase;">Strategic Briefing</p>
          <h2 style="font-size: 24px; margin-top: 0; color: #0f172a;">Technical Evaluation: ${client.company_name}</h2>
          
          <div style="margin-top: 25px; border-left: 4px solid #2563eb; padding-left: 20px;">
            <p style="font-size: 15px; line-height: 1.6; color: #334155; font-style: italic;">
              "Good Day ${client.rep_name}, our team has been reviewing your digital infrastructure. ${client.honor_message}"
            </p>
          </div>

          <!-- ASSESSMENT TABLE -->
          <div style="margin-top: 40px;">
            <h3 style="font-size: 12px; font-weight: 900; text-transform: uppercase; color: #2563eb; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">2.0 Technical Elevation Points</h3>
            
            ${auditPoints.map((p) => `
              <div style="margin-top: 20px; padding: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                <p style="margin: 0; font-size: 11px; font-weight: bold; color: #ef4444; text-transform: uppercase;">Observation:</p>
                <p style="margin: 5px 0 15px; font-size: 14px; font-weight: 900; color: #0f172a;">${p.issue.toUpperCase()}</p>
                
                <p style="margin: 0; font-size: 11px; font-weight: bold; color: #22c55e; text-transform: uppercase;">MLL Elevation:</p>
                <p style="margin: 5px 0 15px; font-size: 14px; font-weight: 900; color: #0f172a;">${p.solution.toUpperCase()}</p>
                
                <p style="margin: 0; font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase;">Business Benefit:</p>
                <p style="margin: 5px 0 0; font-size: 13px; color: #475569;">${p.benefit}</p>
              </div>
            `).join('')}
          </div>

          <!-- SECURITY STANDARDS -->
          <div style="margin-top: 40px; background-color: #0f172a; padding: 30px; border-radius: 8px; color: #ffffff;">
            <p style="margin: 0; font-size: 10px; font-weight: bold; color: #60a5fa; text-transform: uppercase; letter-spacing: 2px;">3.0 Engineering Standards</p>
            <ul style="margin: 20px 0 0; padding: 0; list-style: none; font-size: 12px; color: #94a3b8;">
              <li style="margin-bottom: 10px;">🔹 <strong>Security:</strong> AES-256 Bit Data Encryption</li>
              <li style="margin-bottom: 10px;">🔹 <strong>Architecture:</strong> Next.js Cloud-Native Deployment</li>
              <li>🔹 <strong>Compliance:</strong> Standard POPIA Data Protocols</li>
            </ul>
          </div>

          <!-- CTA / CLOSING -->
          <div style="margin-top: 50px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 30px;">
            <p style="font-size: 14px; color: #475569; line-height: 1.6;">
              If our technical vision aligns with your growth goals, we would be honored to discuss a way forward for your brand.
            </p>
            <a href="https://ml-consulting-iota.vercel.app/" style="display: inline-block; margin-top: 20px; background-color: #2563eb; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">View Our Full Portfolio</a>
          </div>

          <div style="margin-top: 40px; text-align: center;">
             <p style="margin: 0; font-size: 14px; font-weight: 900; color: #0f172a;">MLL DIGITAL CONSULTING TEAM</p>
             <p style="margin: 5px 0 0; font-size: 11px; color: #2563eb; font-weight: bold; text-transform: uppercase;">Research. Analyse. Improve. Deliver.</p>
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 9px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          © 2024 MLL DIGITAL CONSULTING // LIMPOPO, SOUTH AFRICA
        </div>
      </div>
    `;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `STRATEGIC BRIEF: MLL DIGITAL x ${client.company_name}`,
        from_name: "MLL OUTREACH SYSTEM",
        message: htmlEmail, // HTML is sent directly
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
          <h2 className="text-2xl font-black text-slate-900 uppercase">Mission Ready</h2>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            The fully branded briefing for <strong>{client.company_name}</strong> is in your inbox. 
            Forward it to their team to show off our potential.
          </p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-all">New Briefing</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <FileSearch className="h-7 w-7 text-blue-600" />
            <h1 className="text-2xl font-black uppercase tracking-tight">Outreach Strategy Forge</h1>
          </div>
          <Lock className="h-4 w-4 text-slate-400" />
        </div>

        <form onSubmit={handleGenerate} className="space-y-8">
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest flex items-center gap-2">
              <Trophy className="h-4 w-4" /> 1.0 Target Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required placeholder="Client Rep Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, rep_name: e.target.value})} />
              <input required placeholder="Target Company" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold" onChange={e => setClient({...client, company_name: e.target.value})} />
            </div>
            <textarea rows={2} className="w-full border p-4 rounded-lg text-sm italic text-slate-600 outline-none focus:border-blue-600" value={client.honor_message} onChange={e => setClient({...client, honor_message: e.target.value})} />
          </div>

          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest flex items-center gap-2">
                <Zap className="h-4 w-4" /> 2.0 Technical Evaluation
              </h3>
              <button type="button" onClick={() => setAuditPoints([...auditPoints, {issue: "", solution: "", benefit: ""}])} className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">+ ADD FINDING</button>
            </div>
            {auditPoints.map((point, i) => (
              <div key={i} className="p-6 bg-slate-50 border rounded-xl space-y-4 relative">
                <input placeholder="Identify Technical Issue" className="w-full bg-white border rounded p-3 text-xs font-bold" value={point.issue} onChange={e => { const n = [...auditPoints]; n[i].issue = e.target.value; setAuditPoints(n); }} />
                <input placeholder="MLL Engineered Elevation" className="w-full bg-white border rounded p-3 text-xs font-bold text-green-600" value={point.solution} onChange={e => { const n = [...auditPoints]; n[i].solution = e.target.value; setAuditPoints(n); }} />
                <input placeholder="Direct Business Benefit" className="w-full bg-white border rounded p-3 text-xs italic" value={point.benefit} onChange={e => { const n = [...auditPoints]; n[i].benefit = e.target.value; setAuditPoints(n); }} />
                <button type="button" onClick={() => setAuditPoints(auditPoints.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </div>

          <button type="submit" disabled={isGenerating} className="w-full bg-blue-600 text-white font-black py-6 rounded hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3">
            {isGenerating ? "FORGING..." : "GENERATE STRATEGIC BRIEFING"} <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </main>
  );
}