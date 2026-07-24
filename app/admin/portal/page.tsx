"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FileText, CheckCircle, Lock, Send } from "lucide-react";

export default function ProjectForm() {
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  // YOUR WEB3FORMS KEY
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

    // 1. SAVE TO DATABASE (INTERNAL RECORD)
    const { error: dbError } = await supabase.from("projects").insert([{
      client_name: formData.client_name,
      client_email: formData.client_email,
      slug: `proj-${Date.now()}`, 
      total_investment: formData.total_price,
      timeline_duration: formData.how_long_it_takes,
      services_selected: selectedServices,
      status: "SENT"
    }]);

    if (dbError) {
      alert("Database Error: " + dbError.message);
      setIsSaving(false);
      return;
    }

    // 2. CONSTRUCT THE AGREEMENT TEXT
    const agreementText = `
OFFICIAL PROJECT AGREEMENT
M.L CONSULTING // SYSTEMS ARCHITECTURE

CLIENT ENTITY: ${formData.client_name}
CLIENT EMAIL: ${formData.client_email}

SERVICES TO BE PROVIDED:
${selectedServices.map(s => `• ${s.toUpperCase()}`).join("\n")}

PROJECT FINANCIALS:
TOTAL INVESTMENT: ${formData.total_price}
ESTIMATED DURATION: ${formData.how_long_it_takes}

SECURITY STANDARDS:
- AES-256 Bit Data Encryption
- POPIA Compliant Architecture
- TLS 1.3 Transfer Protocols

M.L CONSULTING EXECUTIVE SIGNATURE:
Junior Tumelo Malapela
Chief Executive Officer
Limpopo, South Africa
    `;

    // 3. SEND TO YOUR EMAIL VIA WEB3FORMS
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `FOR CLIENT: Project Agreement - ${formData.client_name}`,
          from_name: "M.L PROJECT FORGE",
          message: agreementText,
        }),
      });

      if (response.ok) {
        setIsFinished(true);
      } else {
        alert("Web3Forms Error. Check your Access Key.");
      }
    } catch (err) {
      alert("Network Error while sending email.");
    }

    setIsSaving(false);
  };

  if (!mounted) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-8 border-blue-600 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-slate-900 uppercase">Agreement Created</h2>
          <p className="text-slate-600 mt-4 text-sm">The agreement has been sent to **YOUR** email. Simply forward it to **{formData.client_email}** to finalize the deal.</p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded font-bold uppercase text-xs tracking-widest">Create New Project</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-black uppercase tracking-tight">Project Agreement Forge</h1>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Staff Access Only</span>
          </div>
        </div>

        <form onSubmit={handleCreate} className="space-y-8">
          
          {/* Client Info */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">1. Client Identification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Company Name</label>
                <input required placeholder="Acme Logistics" className="w-full border-b-2 p-2 outline-none focus:border-blue-600 font-bold" onChange={e => setFormData({...formData, client_name: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Client Email</label>
                <input required type="email" placeholder="ceo@acme.com" className="w-full border-b-2 p-2 outline-none focus:border-blue-600 font-bold" onChange={e => setFormData({...formData, client_email: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">2. Engineering Scope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map(s => (
                <button key={s} type="button" onClick={() => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])} className={`p-4 border rounded text-[10px] font-bold text-left uppercase transition-all ${selectedServices.includes(s) ? "border-blue-600 bg-blue-50 text-blue-700 shadow-inner" : "border-slate-100 text-slate-400"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-blue-600 uppercase border-l-4 border-blue-600 pl-4 tracking-widest">3. Project Financials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Total Price (ZAR)</label>
                <input required placeholder="R15,000.00" className="w-full border-b-2 p-2 outline-none focus:border-blue-600 font-bold text-blue-600 text-lg" onChange={e => setFormData({...formData, total_price: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Duration</label>
                <input required placeholder="e.g. 14 Days" className="w-full border-b-2 p-2 outline-none focus:border-blue-600 font-bold" onChange={e => setFormData({...formData, how_long_it_takes: e.target.value})} />
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