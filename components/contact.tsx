"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  // Your active Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "fdaf5dca-3373-4429-b0b9-177a590783e1";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "UI/UX Design",
    budget: "R5,000 - R15,000",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New ZAR Client Lead: ${formData.name} (${formData.company || "No Company"})`,
      from_name: "M.L Consulting Website",
      name: formData.name,
      email: formData.email,
      company: formData.company || "Not provided",
      service_requested: formData.service,
      budget_range: formData.budget,
      project_description: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      setErrorMessage("Could not connect to the mail server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                GET IN TOUCH
              </span>
              <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                READY TO START YOUR PROJECT?
              </h2>
              <p className="mt-6 font-sans text-base text-slate-600 leading-relaxed">
                Fill out the form to tell us about your project. We review all requests personally and will get back to you with a clear, straight-forward estimate in less than 24 hours.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="mt-12 lg:mt-0 space-y-6 border-l-2 border-blue-100 pl-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-neutral-400">DIRECT EMAIL</p>
                  <p className="font-sans text-sm font-semibold text-slate-900 mt-0.5">hello@mlconsulting.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-neutral-400">RESPONSE TIME</p>
                  <p className="font-sans text-sm font-semibold text-slate-900 mt-0.5">Under 24 Hours (Guaranteed)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-neutral-400">DATA PRIVACY</p>
                  <p className="font-sans text-sm font-semibold text-slate-900 mt-0.5">Your project details are 100% secure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-neutral-200 bg-blue-50/10 p-8 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Company fields with matched IDs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="form-name"
                        className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="form-company"
                        className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                      >
                        Company Name (Optional)
                      </label>
                      <input
                        id="form-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="e.g. Acme Corp"
                      />
                    </div>
                  </div>

                  {/* Email Field with matched ID */}
                  <div>
                    <label 
                      htmlFor="form-email"
                      className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Accessible Select Dropdown with Updated Services */}
                  <div>
                    <label 
                      htmlFor="form-service"
                      className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      What Service Do You Need?
                    </label>
                    <div className="relative">
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-neutral-200 bg-white pl-4 pr-10 h-12 font-sans text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                      >
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Complete Web Design">Complete Web Design</option>
                        <option value="Application & System Design">Application & System Design</option>
                        <option value="System Setup & Integration">System Setup & Integration</option>
                        <option value="Client Training & Onboarding">Client Training & Onboarding</option>
                        <option value="Technical Support & Maintenance">Technical Support & Maintenance</option>
                        <option value="Software Modernization">Software Modernization</option>
                        <option value="Cloud Scaling & Migration">Cloud Scaling & Migration</option>
                        <option value="Business Workflow Automation">Business Workflow Automation</option>
                        <option value="Security & POPIA Compliance Audit">Security & POPIA Compliance Audit</option>
                        <option value="Technical Strategy & Roadmap Planning">Technical Strategy & Roadmap Planning</option>
                      </select>
                      {/* CSS-Only Absolute SVG Chevron overlay */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Budget Selector in South African Rands (ZAR) */}
                  <div>
                    <span className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Budget Range (ZAR)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Under R5,000", "R5,000 - R15,000", "R15,000+"].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`flex h-11 items-center justify-center rounded-lg border font-mono text-xs uppercase tracking-wider transition-all ${
                            formData.budget === tier
                              ? "border-blue-500 bg-blue-50 text-blue-700 font-bold"
                              : "border-neutral-200 bg-white text-slate-600 hover:border-neutral-300"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Message with matched ID */}
                  <div>
                    <label 
                      htmlFor="form-message"
                      className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Briefly describe your project
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder="Tell us what you want to build, what problem you are solving, or how we can help..."
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-600 text-sm font-semibold">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white tracking-wider shadow-sm hover:shadow transition-all ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "SENDING REQUEST..." : "SEND INQUIRY"}
                    <Send className="h-4 w-4" />
                  </button>

                </form>
              ) : (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border border-blue-200 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-slate-900">
                    REQUEST RECEIVED SUCCESSFULLY!
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-sm text-slate-600 leading-relaxed">
                    Thank you! We have received your project details. We will review them carefully and email you a straight-forward plan in less than 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", company: "", service: "UI/UX Design", budget: "R5,000 - R15,000", message: "" });
                    }}
                    className="mt-8 flex h-10 items-center justify-center gap-2 border border-neutral-200 rounded-lg bg-white px-6 font-sans text-xs font-bold text-slate-700 hover:bg-neutral-50 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}