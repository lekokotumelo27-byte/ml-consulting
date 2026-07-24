"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  FileText, 
  ShieldCheck, 
  ShieldAlert, // Added this missing import
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    slug: "", 
    total_investment: "R",
    timeline_duration: "14 Business Days",
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
    if (!supabase) return alert("Database Connection Failed. Check your setup.");
    setIsDeploying(true);

    const projectSlug = formData.slug.toLowerCase().replace(/ /g, "-");

    const { error } = await supabase.from("projects").insert([
      {
        client_name: formData.client_name,
        client_email: formData.client_email,
        slug: projectSlug,
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
      setSuccessLink(`https://ml-consulting-iota.vercel.app/portal/${projectSlug}`);
    }
    setIsDeploying(false);
  };

  if (!mounted) return null;

  if (successLink) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border-2 border-blue-600 p-10 rounded-xl text-center shadow-xl">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">PROJECT SUCCESSFULLY DEPLOYED</h2>
          <p className="text-slate-600 mt-4 font-medium">The formal agreement is now live and ready for the client.</p>
          <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Private Access Link</p>
            <code className="text-sm text-blue-600 font-bold break-all">{successLink}</code>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-blue-700 transition-all"
          >
            Create Another Agreement
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12 border-b-2 border-slate-200 pb-8 text-slate-900">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">Project Agreement Forge</h1>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">Internal Operations // M.L Consulting</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <Lock className="h-4 w-4 text-green-600" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Secure CEO Access</span>
          </div>
        </div>

        <form onSubmit={handleDeploy} className="space-y-10">
          
          {/* Section 1: Client Identification */}
          <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-8 border-l-4 border-blue-600 pl-4">1. Client Identification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Client / Company Name</label>
                <input 
                  required 
                  placeholder="Enter full legal company name" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-600 text-slate-900 font-medium transition-all" 
                  onChange={e => setFormData({...formData, client_name: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Unique Link Name (URL Slug)</label>
                <input 
                  required 
                  placeholder="e.g. acme-corp-revamp" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-600 text-slate-900 font-medium transition-all" 
                  onChange={e => setFormData({...formData, slug: e.target.value})} 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Authorized Billing Email</label>
                <input 
                  required 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-600 text-slate-900 font-medium transition-all" 
                  onChange={e => setFormData({...formData, client_email: e.target.value})} 
                />
              </div>
            </div>
          </section>

          {/* Section 2: Engineering Scope */}
          <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-8 border-l-4 border-blue-600 pl-4">2. Engineering Service Scope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesList.map(service => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`flex items-center justify-between p-4 border-2 rounded-xl transition-all font-bold text-xs uppercase tracking-tight ${
                    selectedServices.includes(service) 
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-inner" 
                    : "border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200"
                  }`}
                >
                  {service}
                  {selectedServices.includes(service) && <CheckCircle2 className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </section>

          {/* Section 3: Financial Architecture */}
          <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase mb-8 border-l-4 border-blue-600 pl-4">3. Investment & Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase">
                  <Zap className="h-4 w-4 text-blue-600" /> Total Project Investment (ZAR)
                </label>
                <input 
                  required
                  placeholder="e.g. R15,000.00" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-600 text-blue-600 font-black text-lg" 
                  onChange={e => setFormData({...formData, total_investment: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase">
                  <Clock className="h-4 w-4 text-blue-600" /> Estimated Project Duration
                </label>
                <input 
                  required
                  placeholder="e.g. 14 Business Days" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-600 text-slate-900 font-bold" 
                  onChange={e => setFormData({...formData, timeline_duration: e.target.value})} 
                />
              </div>
            </div>
          </section>

          {/* Section 4: Vulnerability Analysis */}
          <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8 border-l-4 border-red-600 pl-4">
              <h3 className="text-sm font-black text-slate-900 uppercase flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-red-600" /> Technical Audit Findings
              </h3>
              <button 
                type="button" 
                onClick={() => setVulnerabilities([...vulnerabilities, ""])}
                className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition-all border border-blue-100 shadow-sm"
              >
                <Plus className="h-4 w-4" /> ADD VULNERABILITY
              </button>
            </div>
            
            <div className="space-y-4">
              {vulnerabilities.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <input 
                    placeholder="Describe the issue (e.g. Slow Database Latency)"
                    className="flex-1 border-2 border-slate-100 rounded-lg p-3 text-sm text-slate-700 bg-slate-50 outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    value={v}
                    onChange={e => {
                      const newV = [...vulnerabilities];
                      newV[i] = e.target.value;
                      setVulnerabilities(newV);
                    }}
                  />
                  <button 
                    type="button" 
                    title="Remove item"
                    onClick={() => setVulnerabilities(vulnerabilities.filter((_, idx) => idx !== i))} 
                    className="text-slate-300 hover:text-red-600 transition-colors p-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Final Deployment Button */}
          <button 
            type="submit"
            disabled={isDeploying}
            className="w-full bg-slate-900 text-white font-black py-6 rounded-xl text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-blue-600 transition-all shadow-2xl disabled:opacity-50"
          >
            {isDeploying ? "ENGINEERING PROJECT ASSETS..." : "GENERATE AND DEPLOY AGREEMENT"}
            <Send className="h-5 w-5" />
          </button>

        </form>
      </div>
    </main>
  );
}