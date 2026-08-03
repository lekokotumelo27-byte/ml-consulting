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
    <header className="relative w-full h-24 lg:h-32 bg-[url('/navbar-bg.jpg')] bg-cover bg-center border-b border-white/20 shadow-2xl">
      <div className="mx-auto flex max-w-7xl h-full items-center justify-between px-6">
        
        {/* Left Side: Logo & Identity */}
        <a href="/" className="flex items-center gap-3 group relative z-10">
          <MLApexLogo className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="flex flex-col">
            <span className="font-sans text-sm font-black tracking-wider text-white uppercase leading-none">MLL Digital Consulting</span>
            <span className="font-mono text-[10px] text-blue-400 font-bold tracking-widest uppercase mt-1">Systems Architecture</span>
          </div>
        </a>

        {/* Center: Desktop Links */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-bold tracking-wider text-white hover:text-blue-400 transition-colors"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Right Side: Status & CTA */}
        <div className="hidden lg:flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-mono text-[10px] font-bold text-blue-300 tracking-widest uppercase">Consulting_Active</span>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wider transition-all shadow-xl"
          >
            TALK TO US
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded border border-white/20 lg:hidden text-white relative z-10"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-slate-900 border-b border-white/10 px-6 py-10 lg:hidden shadow-2xl z-50">
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-lg font-bold tracking-wider text-white hover:text-blue-400"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-6">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-16 items-center justify-center gap-2 bg-blue-600 text-white text-base font-bold tracking-wider rounded-lg"
                >
                  TALK TO US <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}