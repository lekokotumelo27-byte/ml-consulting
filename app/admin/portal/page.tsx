"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FileText, CheckCircle, Lock } from "lucide-react";

export default function ProjectForm() {
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    const { error: dbError } = await supabase.from("projects").insert([{
      client_name: formData.client_name,
      client_email: formData.client_email,
      slug: `direct-${Date.now()}`,
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

    // 2. SEND THE EMAIL DIRECTLY
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_name: formData.client_name,
        client_email: formData.client_email,
        total_price: formData.total_price,
        duration: formData.how_long_it_takes,
        services: selectedServices
      }),
    });

    if (response.ok) {
      setIsFinished(true);
    } else {
      alert("Data saved, but the Email failed. Check your Resend API Key.");
    }
    setIsSaving(false);
  };

  if (!mounted) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-8 border-green-500 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900">SUCCESS</h2>
          <p className="text-slate-600 mt-4">The professional agreement has been sent directly to <strong>{formData.client_email}</strong>.</p>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded font-bold uppercase text-xs tracking-widest">Send Another Agreement</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4 text-slate-900">
            <FileText className="h-6 w-6" />
            <h1 className="text-2xl font-black uppercase tracking-tight">Project Agreement Forge</h1>
          </div>
          <Lock className="h-4 w-4 text-slate-300" />
        </div>

        <form onSubmit={handleCreate} className="space-y-8">
          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-blue-600 uppercase mb-6 tracking-widest">1. Client Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required placeholder="Client Company Name" className="border-b-2 p-3 outline-none focus:border-blue-600 text-sm font-bold" onChange={e => setFormData({...formData, client_name: e.target.value})} />
              <input required type="email" placeholder="Client Email Address" className="border-b-2 p-3 outline-none focus:border-blue-600 text-sm font-bold" onChange={e => setFormData({...formData, client_email: e.target.value})} />
            </div>
          </div>

          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-blue-600 uppercase mb-6 tracking-widest">2. Services Selected</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map(s => (
                <button key={s} type="button" onClick={() => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])} className={`p-4 border rounded text-[10px] font-bold text-left uppercase transition-all ${selectedServices.includes(s) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 text-slate-400"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded border border-slate-200 shadow-sm grid grid-cols-2 gap-8">
            <input required placeholder="Investment (ZAR)" className="border-b-2 p-3 outline-none focus:border-blue-600 text-sm font-bold text-blue-600" onChange={e => setFormData({...formData, total_price: e.target.value})} />
            <input required placeholder="Duration (Time)" className="border-b-2 p-3 outline-none focus:border-blue-600 text-sm font-bold" onChange={e => setFormData({...formData, how_long_it_takes: e.target.value})} />
          </div>

          <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white font-black py-5 rounded hover:bg-slate-900 transition-all uppercase tracking-widest text-xs shadow-xl">
            {isSaving ? "SENDING..." : "DEPLOY AGREEMENT TO CLIENT EMAIL"}
          </button>
        </form>
      </div>
    </main>
  );
}