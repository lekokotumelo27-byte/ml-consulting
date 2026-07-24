import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, ArrowRight, Compass, HelpCircle, ShieldCheck } from "lucide-react";

export default function ConsultingPage() {
  
  const tiers = [
    {
      title: "System Audit & Roadmap",
      price: "R5,000",
      type: "One-Time Assessment",
      description: "Best for businesses that have an existing website or system but do not know why it is slow, hard to manage, or if it is secure.",
      features: [
        "Complete website speed & code review",
        "Security & privacy vulnerability check",
        "Staff bottleneck interview",
        "Written action roadmap (Plain-English PDF)",
        "60-minute feedback & explanation call"
      ],
      cta: "Request an Audit",
      featured: false
    },
    {
      title: "Ongoing Tech Advisory",
      price: "R10,000",
      type: "Monthly Retainer / On-Call Advisory",
      description: "Best for growing businesses that need expert technical leadership and decision-making support without the cost of a full-time executive.",
      features: [
        "Dedicated monthly advisory hours",
        "Direct email & WhatsApp support",
        "Reviewing third-party developer proposals",
        "Guidance on software and cloud tool setups",
        "Monthly system progress review meetings"
      ],
      cta: "Secure Advisory Support",
      featured: true
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Direct Minimalist Header */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            IT <span className="text-blue-600">Consulting</span>
          </h1>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
            STRATEGY & AUDITS // PLAIN-ENGLISH ADVICE
          </span>
        </div>
      </section>

      {/* Comforting Message Box & Pricing Grid */}
      <section className="py-12 bg-neutral-50/50 border-b border-neutral-200 flex-1">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          
          {/* THE COMFORT & SAFETY PANEL */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-6 flex items-start gap-4 max-w-5xl mx-auto shadow-sm">
            <Compass className="h-6 w-6 text-blue-600 shrink-0 mt-0.5 animate-pulse" />
            <div>
              <h4 className="font-sans text-sm font-bold text-slate-900 uppercase tracking-wide">
                We Speak Your Language - No Confusing Jargon
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                We understand that technology can feel overwhelming and confusing. That is why we make a simple promise: we speak in plain English. No complicated buzzwords, no confusing code talk, and no making you feel lost. We are here to guide you step-by-step, answer every question patiently, and make sure you feel completely safe, informed, and in control of your business technology.
              </p>
            </div>
          </div>

          {/* TWO-COLUMN DIRECT PACKAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div 
                key={tier.title} 
                className={`relative flex flex-col justify-between rounded-xl border p-8 shadow-sm transition-all bg-white ${
                  tier.featured 
                    ? "border-blue-500 ring-4 ring-blue-50" 
                    : "border-neutral-200"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-blue-600 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {tier.type}
                  </span>
                  <h3 className="mt-2 font-sans text-xl font-bold text-slate-900">
                    {tier.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-slate-500 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="my-6 flex items-baseline gap-1.5">
                    <span className="font-sans text-3xl font-black text-slate-900">{tier.price}</span>
                    <span className="font-sans text-xs text-slate-400">
                      {tier.featured ? "/ month" : "one-time"}
                    </span>
                  </div>

                  <ul className="space-y-3.5 border-t border-neutral-100 pt-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <a
                    href="/contact"
                    className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      tier.featured 
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm" 
                        : "border border-neutral-200 bg-white hover:bg-neutral-50 text-slate-700"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* QUICK ADVICE LINK */}
          <div className="text-center max-w-xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
            <HelpCircle className="h-4 w-4 text-slate-400" />
            <span className="font-sans text-xs text-slate-500">Unsure which consulting model suits your business?</span>
            <a href="/contact" className="font-sans text-xs font-bold text-blue-600 hover:text-blue-700 underline">
              Get free advice in 24 hours
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}