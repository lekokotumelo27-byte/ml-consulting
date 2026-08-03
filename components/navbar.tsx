"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

// --- THE APEX LINK LOGO (Adjusted for dark background) ---
const MLApexLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M20 5L35 32H25L20 23L15 32H5L20 5Z" 
      fill="#60A5FA" 
      fillOpacity="0.4" 
    />
    <path 
      d="M20 5L32 28H23L20 22L17 28H8L20 5Z" 
      fill="#3B82F6" 
    />
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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[url('/navbar-bg.jpg')] bg-cover bg-center shadow-2xl">
      {/* 20% Dark Overlay for elite readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl h-20 items-center justify-between px-6 z-10">
        
        {/* Logo and Name (Switched to White) */}
        <a href="/" className="flex items-center gap-3 group">
          <MLApexLogo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="flex flex-col">
            <span className="font-sans text-xs font-black tracking-wider text-white uppercase text-left leading-none">MLL Digital Consulting</span>
            <span className="font-mono text-[9px] text-blue-400 font-bold tracking-widest uppercase mt-1">Systems Architecture</span>
          </div>
        </a>

        {/* Desktop Links (Switched to White) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs font-semibold tracking-wider text-white/90 transition-colors hover:text-blue-400"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Status & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-mono text-[9px] font-bold text-blue-300 tracking-widest uppercase">Consulting_Active</span>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all shadow-lg"
          >
            TALK TO US
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle (Switched to White) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 md:hidden text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-20 w-full bg-slate-900 border-b border-white/10 px-6 py-8 md:hidden shadow-2xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-sm font-semibold tracking-wider text-white hover:text-blue-400"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-lg"
                >
                  TALK TO US <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}