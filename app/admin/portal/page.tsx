"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FileText, CheckCircle, Lock, Send } from "lucide-react";

export default function ProjectForm() {
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  const WEB3FORMS_KEY = "fdaf5dca-3373-4429-b0b9-177a590783e1";

  useEffect(() => { setMounted(true); }, []);

  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    total_price: "R",
    how_long_it_takes: "14 Days",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const servicesList = [
    "UI/UX System Design", "Complete Web Design", "Application & System Design",
    "System Setup & Integration", "Technical Support & Maintenance", "Client Training & Onboarding"
  ];

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // 1. SAVE TO DATABASE
    await supabase.from("projects").insert([{
      client_name: formData.client_name,
      client_email: formData.client_email,
      slug: `direct-${Date.now()}`, 
      total_investment: formData.total_price,
      timeline_duration: formData.how_long_it_takes,
      services_selected: selectedServices,
      status: "SENT"
    }]);

    // 2. CONSTRUCT THE FULL BRANDED AGREEMENT (Updated to MLL Digital Consulting)
    const agreementTemplate = `
=========================================
MLL DIGITAL CONSULTING // SYSTEMS ARCHITECTURE
OFFICIAL PROJECT AGREEMENT
=========================================

CLIENT ENTITY: ${formData.client_name.toUpperCase()}
CLIENT EMAIL: ${formData.client_email}
DATE ISSUED: ${new Date().toLocaleDateString()}

-----------------------------------------
1.0 ENGINEERING MISSION & SCOPE
-----------------------------------------
The following services have been architected specifically for your business requirements:

${selectedServices.map(s => `[✓] ${s.toUpperCase()}`).join("\n")}

-----------------------------------------
2.0 PROJECT FINANCIALS & TIMELINE
-----------------------------------------
TOTAL INVESTMENT: ${formData.total_price}
ESTIMATED DURATION: ${formData.how_long_it_takes}

-----------------------------------------
3.0 ARCHITECTURAL SECURITY STANDARDS
-----------------------------------------
All systems deployed by MLL Digital Consulting adhere to 
bank-grade security protocols:
• AES-256 Bit Data Encryption
• POPIA Compliant Infrastructure
• TLS 1.3 Secure Transfer Protocols

-----------------------------------------
4.0 CEO THANK YOU CARD
-----------------------------------------
"Thank you for choosing MLL Digital Consulting. We don't 
just build websites; we engineer the digital 
engines that drive your business forward. We 
are ready to scale with you."

-----------------------------------------
MLL DIGITAL CONSULTING EXECUTIVE SIGNATURE:
Junior Tumelo Malapela
Chief Executive Officer
Limpopo, South Africa
=========================================
    `;

    // 3. SEND TO YOUR EMAIL
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `OFFICIAL AGREEMENT: ${formData.client_name}`,
        from_name: "MLL PROJECT FORGE",
        message: agreementTemplate,
      }),
    });

    if (response.ok) {
      setIsFinished(true);
    } else {
      alert("Error generating agreement.");
    }
    setIsSaving(false);
  };

  if (!mounted) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans text-slate-900">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-8 border-blue-600 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Agreement Ready</h2>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            The full branded agreement has been sent to your email. 
            <strong> Open your inbox, hit Forward, and send it to {formData.client_email}.</strong>
          </p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded font-bold uppercase text-xs tracking-widest shadow-md hover:bg-blue-600 transition-colors">Create New Project</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans text-slate-900 leading-normal">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-black uppercase tracking-tight">MLL Project Agreement Forge</h1>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">CEO Secure Access</span>
          </div>
        </div>

        <form onSubmit={handleCreate} className="space-y-8">
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">1. Client Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required placeholder="Client Company Name" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold bg-transparent" onChange={e => setFormData({...formData, client_name: e.target.value})} />
              <input required type="email" placeholder="Client Email" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold bg-transparent" onChange={e => setFormData({...formData, client_email: e.target.value})} />
            </div>
          </div>

          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">2. Services Selected</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map(s => (
                <button key={s} type="button" onClick={() => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])} className={`p-4 border rounded text-[10px] font-bold text-left uppercase transition-all ${selectedServices.includes(s) ? "border-blue-600 bg-blue-50 text-blue-700 shadow-inner" : "border-slate-100 text-slate-400"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <input required placeholder="Investment (ZAR)" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold text-blue-600 text-lg bg-transparent" onChange={e => setFormData({...formData, total_price: e.target.value})} />
            <input required placeholder="Duration (Time)" className="border-b-2 p-3 outline-none focus:border-blue-600 font-bold bg-transparent" onChange={e => setFormData({...formData, how_long_it_takes: e.target.value})} />
          </div>

          {/* Section 3: Rebranded MLL Digital Consulting Details */}
          <div className="bg-slate-900 p-8 rounded-lg text-white">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 border-l-4 border-blue-600 pl-4">3. MLL Digital Consulting Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Company Founder</p>
                 <p className="text-sm font-bold">Junior Tumelo Malapela</p>
               </div>
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Company Base</p>
                 <p className="text-sm font-bold">Limpopo, South Africa</p>
               </div>
            </div>
          </div>

          <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white font-black py-6 rounded hover:bg-slate-900 transition-all uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3">
            {isSaving ? "GENERATING..." : "SEND AGREEMENT TO MY EMAIL"} <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </main>
  );
}