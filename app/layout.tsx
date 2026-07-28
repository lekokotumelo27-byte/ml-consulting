import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// --- CEO METADATA FOR GOOGLE ---
export const metadata: Metadata = {
  title: "MLL Digital Consulting | CEO: Junior Tumelo Malapela",
  description: "Founded by Junior Tumelo Malapela (25) in Limpopo, MLL Digital Consulting engineers highly-scalable digital infrastructure, responsive custom applications, and clean design systems to help businesses grow.",
  keywords: ["MLL Digital Consulting", "Junior Tumelo Malapela", "IT Consulting Limpopo", "Systems Architecture South Africa", "Software Engineering"],
  authors: [{ name: "Junior Tumelo Malapela" }],
  viewport: "width=device-width, initial-scale=1",
};

// --- MLL FLOATING SOCIAL SIDEBAR (Hard-Coded SVGs for Zero Errors) ---
const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {/* Decorative vertical line */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-slate-200"></div>
      
      {/* The Floating Container */}
      <div className="flex flex-col gap-6 p-3 bg-white/60 backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
        
        {/* LinkedIn SVG */}
        <a href="#" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        {/* Facebook SVG */}
        <a href="#" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>

        {/* Instagram SVG */}
        <a href="#" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>

        {/* Twitter/X SVG */}
        <a href="#" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </a>
      </div>

      <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-slate-200"></div>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-white text-slate-900 antialiased blueprint-grid-light min-h-screen flex flex-col font-sans relative">
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}