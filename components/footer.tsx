"use client";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side License copyright - Updated to MLL DIGITAL CONSULTING */}
        <p className="font-mono text-[10px] text-slate-500 font-semibold tracking-wider uppercase order-last md:order-first">
          © {new Date().getFullYear()} MLL DIGITAL CONSULTING. CODES ENGINEERED SECURELY.
        </p>

        {/* Right Side Secure Footer Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
          <a href="/security" className="hover:text-blue-600 transition-colors">
            SECURITY_STANDARDS
          </a>
          <a href="/faqs" className="hover:text-blue-600 transition-colors">
            SYSTEM_FAQS
          </a>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-400">STABLE_PORTAL_v1.0</span>
        </div>

      </div>
    </footer>
  );
}