"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  ShieldAlert, 
  Zap, 
  Clock, 
  Send, 
  CheckCircle2, 
  Plus, 
  Trash2,
  Lock
} from "lucide-react";

export default function CEOCommandCenter() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [successLink, setSuccessLink] = useState("");

  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    slug: "", 
    total_investment: "R",
    timeline_duration: "14 Days",
  });

  const [vulnerabilities, setVulnerabilities] = useState([""]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const servicesList = [
    "UI/UX System Design",
    "Complete Web Engineering",
    "Custom Application Design",
    "System Setup & Integration",
    "Technical Support & Maintenance",
    "Staff Training & Onboarding"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);

    const { error } = await supabase.from("projects").insert([
      {
        client_name: formData.client_name,
        client_email: formData.client_email,
        slug: formData.slug.toLowerCase().replace(/ /g, "-"),
        total_investment: formData.total_investment,
        timeline_duration: formData.timeline_duration,
        services_selected: selectedServices,
        detected_vulnerabilities: vulnerabilities.filter(v => v !== ""),
        status: "PROPOSAL_SENT"
      }
    ]);

    if (error) {
      alert("System Error: " + error.message);
    } else {
      setSuccessLink(`https://ml-consulting.vercel.app/portal/${formData.slug.toLowerCase().replace(/ /g, "-")}`);
    }
    setIsDeploying(false);
  };

  if (successLink) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full border border-blue-100 bg-blue-50/30 p-8 rounded-2xl text-center shadow-sm">
          <CheckCircle2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Project Deployed</h2>
          <p className="text-sm text-slate-600 mt-2">The digital agreement is now live and ready for the client.</p>
          <div className="mt-6 p-4 bg-white border border-blue-100 rounded-lg break-all">
            <code className="text-xs text-blue-700 font-bold">{successLink}</code>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-xs uppercase tracking-widest shadow-md hover:bg-blue-700 transition-all"
          >
            Create New Mission
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">M.L Command Center</h1>
            <p className="text-blue-600 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">CEO Project Architect // Internal</p>
          </div>
          <Lock className="h-5 w-5 text-slate-300" />
        </div>

        <form onSubmit={handleDeploy} className="space-y-8 bg-white border border-slate-200 p-8 md:p-12 rounded-sm shadow-xl">
          
          {/* Section 1: Client Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-100">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline decoration-blue-500 underline-offset-4">Client Name</label>
              <input required placeholder="e.g. Acme Corp" className="w-full border-b-2 py-2 outline-none focus:border-blue-600 font-sans text-sm" 
                onChange={e => setFormData({...formData, client_name: e.target.value})} />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline decoration-blue-500 underline-offset-4">Project Slug (URL Name)</label>
              <input required placeholder="e.g. acme-revamp" className="w-full border-b-2 py-2 outline-none focus:border-blue-600 font-sans text-sm" 
                onChange={e => setFormData({...formData, slug: e.target.value})} />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline decoration-blue-500 underline-offset-4">Billing Email</label>
              <input required type="email" placeholder="ceo@client.com" className="w-full border-b-2 py-2 outline-none focus:border-blue-600 font-sans text-sm" 
                onChange={e => setFormData({...formData, client_email: e.target.value})} />
            </div>
          </div>

          {/* Section 2: Services Selection */}
          <div className="py-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 underline decoration-blue-500 underline-offset-4">Select Engineering Scope</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map(service => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`flex items-center gap-3 p-4 border rounded-lg transition-all text-left ${
                    selectedServices.includes(service) 
                    ? "border-blue-600 bg-blue-50/50 text-blue-700" 
                    : "border-slate-100 hover:border-slate-300 text-slate-500"
                  }`}
                >
                  <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${selectedServices.includes(service) ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                    {selectedServices.includes(service) && <div className="h-1.5 w-1.5 bg-white rounded-full" />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight">{service}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Financials & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-100">
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest underline decoration-blue-500 underline-offset-4">
                <Zap className="h-3 w-3" /> Total Investment (ZAR)
              </label>
              <input placeholder="R15,000.00" className="w-full border-b-2 py-2 outline-none focus:border-blue-600 font-sans text-sm font-bold text-blue-600" 
                onChange={e => setFormData({...formData, total_investment: e.target.value})} />
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest underline decoration-blue-500 underline-offset-4">
                <Clock className="h-3 w-3" /> Engineering Duration
              </label>
              <input placeholder="e.g. 14 Business Days" className="w-full border-b-2 py-2 outline-none focus:border-blue-600 font-sans text-sm" 
                onChange={e => setFormData({...formData, timeline_duration: e.target.value})} />
            </div>
          </div>

          {/* Section 4: Technical Analysis (The Why) */}
          <div className="space-y-6 pt-4">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest underline decoration-red-500 underline-offset-4">
                <ShieldAlert className="h-3 w-3" /> Detected System Vulnerabilities
              </label>
              <button 
                type="button" 
                onClick={() => setVulnerabilities([...vulnerabilities, ""])}
                className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded flex items-center gap-1 hover:bg-blue-100 transition-all"
              >
                <Plus className="h-3 w-3" /> ADD POINT
              </button>
            </div>
            
            <div className="space-y-3">
              {vulnerabilities.map((v, i) => (
                <div key={i} className="flex gap-2">
                  <input 
                    placeholder="e.g. Unsecured database entry points causing leak risk"
                    className="flex-1 border rounded-lg p-3 text-xs bg-slate-50 outline-none focus:ring-1 focus:ring-blue-600"
                    value={v}
                    onChange={e => {
                      const newV = [...vulnerabilities];
                      newV[i] = e.target.value;
                      setVulnerabilities(newV);
                    }}
                  />
                  <button 
                    type="button" 
                    title="Remove vulnerability"
                    aria-label="Remove vulnerability"
                    onClick={() => setVulnerabilities(vulnerabilities.filter((_, idx) => idx !== i))} 
                    className="text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Deploy Button */}
          <button 
            type="submit"
            disabled={isDeploying}
            className="w-full bg-slate-900 text-white font-black py-5 rounded-lg text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50"
          >
            {isDeploying ? "ENGINEERING PROJECT ASSETS..." : "DEPLOY PROJECT AGREEMENT"}
            <Send className="h-4 w-4" />
          </button>

        </form>
      </div>
    </main>
  );
}