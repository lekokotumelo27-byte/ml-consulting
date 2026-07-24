"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FileText, CheckCircle, Lock } from "lucide-react";

export default function ProjectForm() {
  const [isSaving, setIsSaving] = useState(false);
  const [finishedLink, setFinishedLink] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    link_name: "", 
    total_price: "R",
    how_long_it_takes: "14 Days",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const servicesList = [
    "UI/UX System Design",
    "Complete Web Design",
    "Application & System Design",
    "System Setup & Integration",
    "Technical Support & Maintenance",
    "Client Training & Onboarding"
  ];

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return alert("Database Error");
    setIsSaving(true);

    const safeLink = formData.link_name.toLowerCase().replace(/ /g, "-");

    const { error } = await supabase.from("projects").insert([
      {
        client_name: formData.client_name,
        client_email: formData.client_email,
        slug: safeLink,
        total_investment: formData.total_price,
        timeline_duration: formData.how_long_it_takes,
        services_selected: selectedServices,
        status: "ACTIVE"
      }
    ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      setFinishedLink(`https://ml-consulting-iota.vercel.app/portal/${safeLink}`);
    }
    setIsSaving(false);
  };

  if (!mounted) return null;

  if (finishedLink) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-10">
        <div className="max-w-md w-full border-2 border-slate-900 p-10 rounded-lg text-center shadow-2xl">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900">Project Saved</h2>
          <p className="text-slate-600 mt-4 font-medium">Copy and send this link to the client:</p>
          <div className="mt-4 p-4 bg-slate-100 border border-slate-200 rounded font-bold text-blue-600 break-all">
            {finishedLink}
          </div>
          <button onClick={() => window.location.reload()} className="mt-8 w-full py-4 bg-slate-900 text-white rounded font-bold uppercase text-xs tracking-widest">
            Create New Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Professional Header */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-900">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-slate-900 rounded flex items-center justify-center text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Project Agreement Form</h1>
              <p className="text-slate-500 text-sm font-medium italic">M.L Consulting Internal System</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Access</span>
          </div>
        </div>

        <form onSubmit={handleCreate} className="space-y-8 text-slate-900">
          
          {/* Section 1: Client Information */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-8 border-l-4 border-blue-600 pl-4">1. Client Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Company Name</label>
                <input required placeholder="Client's company name" className="w-full border-2 border-slate-100 rounded-md p-3 font-medium outline-none focus:border-blue-600" 
                  onChange={e => setFormData({...formData, client_name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Link Name (No spaces)</label>
                <input required placeholder="e.g. acme-project" className="w-full border-2 border-slate-100 rounded-md p-3 font-medium outline-none focus:border-blue-600" 
                  onChange={e => setFormData({...formData, link_name: e.target.value})} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Client Email Address</label>
                <input required type="email" placeholder="client@email.com" className="w-full border-2 border-slate-100 rounded-md p-3 font-medium outline-none focus:border-blue-600" 
                  onChange={e => setFormData({...formData, client_email: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Section 2: Services & Pricing */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-8 border-l-4 border-blue-600 pl-4">2. Services & Investment</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {servicesList.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                  className={`p-4 border-2 rounded-md font-bold text-[11px] text-left uppercase transition-all ${
                    selectedServices.includes(s) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Total Amount Charged (ZAR)</label>
                <input required placeholder="R0.00" className="w-full border-2 border-slate-100 rounded-md p-3 font-bold text-blue-600 outline-none focus:border-blue-600" 
                  onChange={e => setFormData({...formData, total_price: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Project Duration (Time)</label>
                <input required placeholder="e.g. 14 Days" className="w-full border-2 border-slate-100 rounded-md p-3 font-medium outline-none focus:border-blue-600" 
                  onChange={e => setFormData({...formData, how_long_it_takes: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Section 3: Our Company Info */}
          <div className="bg-slate-900 p-8 rounded-lg text-white">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 border-l-4 border-blue-600 pl-4">3. M.L Consulting Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Company Founder</p>
                 <p className="text-sm font-bold">Junior Tumelo Malapela</p>
               </div>
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Company Base</p>
                 <p className="text-sm font-bold">Limpopo, South Africa</p>
               </div>
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Primary Email</p>
                 <p className="text-sm font-bold italic">hello@mlconsulting.com</p>
               </div>
               <div>
                 <p className="text-slate-400 uppercase font-bold mb-1">Security Standards</p>
                 <p className="text-sm font-bold uppercase tracking-tight">AES-256 / POPIA Compliant</p>
               </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white font-bold py-5 rounded-lg hover:bg-slate-900 transition-all uppercase tracking-widest text-xs shadow-xl">
            {isSaving ? "Saving Project Details..." : "Create Official Agreement & Link"}
          </button>

        </form>
      </div>
    </main>
  );
}