import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShieldCheck, Scale, Cpu, FileCheck } from "lucide-react";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Direct Minimalist Header */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Our <span className="text-blue-600">Story</span>
          </h1>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
            M.L CONSULTING // ESTABLISHED STANDARDS
          </span>
        </div>
      </section>

      {/* Main Direct Content Grid */}
      <section className="py-12 bg-neutral-50/50 border-b border-neutral-200 flex-1">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">
                WHO WE ARE
              </span>
              <h2 className="font-sans text-2xl font-black text-slate-900 leading-tight">
                Engineering Custom Software Systems For Growth.
              </h2>
              <p className="font-sans text-base text-slate-700 leading-relaxed">
                M.L Consulting was founded with a straightforward goal: to deliver fast, highly-secure, and reliable technology directly to businesses. We noticed that companies were tired of dealing with slow website templates, hidden agency fees, and developers who disappeared after launch.
              </p>
              <p className="font-sans text-base text-slate-700 leading-relaxed">
                We do not cut corners, and we do not use generic page builders. Every platform we deliver is designed with clean code, secure databases, and fast performance architectures. We stand behind our work by handling everything from the design phase to direct staff training and ongoing technical support.
              </p>
            </div>

            {/* Right Column: Direct Professional Guarantees */}
            <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                OUR CLIENT GUARANTEES
              </span>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Scale className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Fixed, Transparent Estimates</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      You will know the exact scope, timeline, and cost of your project before we write any code. No hidden surprises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FileCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">100% IP & Code Ownership</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      Once final invoices are settled, the full source code and all database credentials belong entirely to you. No vendor lock-in.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">POPIA Data Protection</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      We protect your user profiles and database endpoints using strict encryption layers aligned with local data laws.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}