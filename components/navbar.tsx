"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const MLApexLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 5L35 32H25L20 23L15 32H5L20 5Z" fill="#60A5FA" fillOpacity="0.4" />
    <path d="M20 5L32 28H23L20 22L17 28H8L20 5Z" fill="#3B82F6" />
    <circle cx="20" cy="5" r="1.5" fill="#FFFFFF" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Workshop", href: "/workshop" },
    { name: "Consulting", href: "/consulting" },
    { name: "Our Story", href: "/our-story" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="relative w-full h-20 lg:h-24 bg-[url('/navbar-bg.jpg.png')] bg-cover bg-[center_top_20%] bg-no-repeat border-b border-white/10 shadow-2xl overflow-hidden">
      
      {/* Heavy Gradient Overlay for Elite Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl h-full items-center justify-between px-6 z-10">
        
        {/* Left: Identity (Scaled Down for Readability) */}
        <a href="/" className="flex items-center gap-3 group">
          <MLApexLogo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-black tracking-[0.15em] text-white uppercase leading-none">MLL Digital Consulting</span>
            <span className="font-mono text-[8px] text-blue-400 font-bold tracking-widest uppercase mt-1 opacity-80">Systems Architecture</span>
          </div>
        </a>

        {/* Center: Desktop Links (Extra Small & Sharp) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[11px] font-bold tracking-[0.2em] text-white/90 hover:text-blue-400 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/contact"
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[10px] font-bold tracking-widest transition-all shadow-xl uppercase"
          >
            Talk to us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 lg:hidden text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-slate-950 border-b border-white/10 px-6 py-10 lg:hidden shadow-2xl z-50">
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-sm font-bold tracking-[0.2em] text-white hover:text-blue-400 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex h-14 items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold tracking-[0.2em] rounded-lg uppercase"
              >
                Talk to us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}