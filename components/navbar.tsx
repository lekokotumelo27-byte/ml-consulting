"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const MLApexLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 5L35 32H25L20 23L15 32H5L20 5Z" fill="#60A5FA" fillOpacity="0.3" />
    <path d="M20 5L32 28H23L20 22L17 28H8L20 5Z" fill="#2563EB" />
    <circle cx="20" cy="5" r="1.5" fill="#1E3A8A" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Services", href: "/services" },
    { name: "The Workshop", href: "/workshop" },
    { name: "Consulting", href: "/consulting" },
    { name: "Our Story", href: "/our-story" },
  ];

  return (
    /* FIXED: Changed bg-white/80 to bg-white/10 */
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/10 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
        
        <a href="/" className="flex items-center gap-3 group">
          <MLApexLogo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="flex flex-col">
            <span className="font-sans text-xs font-black tracking-wider text-slate-900 uppercase leading-none text-left">MLL Digital Consulting</span>
            <span className="font-mono text-[9px] text-blue-600 font-bold tracking-widest uppercase mt-1">Systems Architecture</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-sans text-xs font-semibold tracking-wider text-slate-600 transition-colors hover:text-blue-600">
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/20 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-[9px] font-bold text-blue-700 tracking-widest uppercase">Consulting_Active</span>
          </div>
          <a href="/contact" className="group flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 shadow-sm">
            INITIATE BRIEFING
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 items-center justify-center rounded border border-neutral-200 md:hidden text-slate-900">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {isOpen && (
          <div className="absolute left-0 top-16 w-full border-b border-neutral-200 bg-white px-6 py-8 md:hidden shadow-lg">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-sans text-sm font-semibold tracking-wider text-slate-700 hover:text-blue-600">
                  {link.name.toUpperCase()}
                </a>
              ))}
              <hr className="border-neutral-200" />
              <a href="/contact" onClick={() => setIsOpen(false)} className="flex h-12 items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-lg shadow-sm">
                INITIATE BRIEFING <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}