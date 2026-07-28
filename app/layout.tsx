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

// --- MLL HORIZONTAL SOCIAL DOCK (Error-Proof SVGs) ---
const SocialDock = () => {
  return (
    <div className="w-full bg-transparent no-print">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end items-center gap-5 py-3">
          {/* LinkedIn - Put your link in the href="..." */}
          <a href="https://linkedin.com/company/mlldigital" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          {/* Facebook - Put your link in the href="..." */}
          <a href="https://facebook.com/mlldigital" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

          {/* Instagram - Put your link in the href="..." */}
          <a href="https://instagram.com/mlldigital" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          {/* Twitter/X - Put your link in the href="..." */}
          <a href="https://twitter.com/mlldigital" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
        </div>
      </div>
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
        {/* The Social Icons now sit in a straight line at the top right of the page content */}
        <SocialDock />
        {children}
      </body>
    </html>
  );
}