import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Key, ShieldCheck, RotateCcw, ShieldAlert } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Direct Minimalist Header */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Security <span className="text-blue-600">Standards</span>
          </h1>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
            BANK-GRADE DATA PROTECTION
          </span>
        </div>
      </section>

      {/* Core 3 Security Standards - Visible Immediately */}
      <section className="py-12 bg-neutral-50/50 border-b border-neutral-200 flex-1">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Standard 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <Key className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-sm font-black text-slate-900 uppercase tracking-wide">
                  01 // Data Encryption
                </h3>
                <p className="font-sans text-xs text-slate-600 mt-2 leading-relaxed">
                  All traffic traveling between your customers and your application is encrypted using industry-standard TLS layers. This shields form inputs and customer queries from external intercepts.
                </p>
              </div>
            </div>

            {/* Standard 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-sm font-black text-slate-900 uppercase tracking-wide">
                  02 // Database Isolation (RLS)
                </h3>
                <p className="font-sans text-xs text-slate-600 mt-2 leading-relaxed">
                  We write strict row-level security (RLS) policies in our cloud databases. This serves as a digital seal, blocking unauthorized users or hackers from accessing sensitive business records.
                </p>
              </div>
            </div>

            {/* Standard 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-sm font-black text-slate-900 uppercase tracking-wide">
                  03 // Recovery Backups
                </h3>
                <p className="font-sans text-xs text-slate-600 mt-2 leading-relaxed">
                  We configure automated daily server backup schedules. If a staff member accidentally deletes critical data, we can roll back and restore your entire operational ledger in minutes.
                </p>
              </div>
            </div>

          </div>

          {/* Simple POPIA Compliance Notice */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 flex items-start gap-4">
            <ShieldAlert className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">
                POPIA-Conscious Infrastructure
              </h4>
              <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                We develop system models fully aligned with local South African data protection rules. We host on secure, globally monitored infrastructure networks managed by PostgreSQL and Vercel.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}