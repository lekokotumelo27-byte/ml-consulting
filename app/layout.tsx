import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CloudBackground from "@/components/cloud-background";
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

// --- CEO METADATA FOR GOOGLE ALIGNMENT ---
export const metadata: Metadata = {
  title: "MLL Digital Consulting | CEO: Junior Tumelo Malapela",
  description: "Founded by Junior Tumelo Malapela (25) in Limpopo, MLL Digital Consulting engineers highly-scalable digital infrastructure, responsive custom applications, and clean design systems to help businesses grow.",
  keywords: ["MLL Digital Consulting", "Junior Tumelo Malapela", "IT Consulting Limpopo", "Systems Architecture South Africa", "Software Engineering"],
  authors: [{ name: "Junior Tumelo Malapela" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      {/* 
          VITAL CHANGE: Removed 'bg-white' and 'blueprint-grid-light' from body 
          to allow the Cloud Engine to be visible.
      */}
      <body className="text-slate-900 antialiased min-h-screen flex flex-col font-sans relative bg-slate-50">
        
        {/* 1. THE DYNAMIC CLOUD ENGINE (Base Layer) */}
        <CloudBackground />

        {/* 2. THE BLUEPRINT GRID (Overlay Layer) */}
        <div className="fixed inset-0 pointer-events-none blueprint-grid-light opacity-[0.05] z-[-10]"></div>
        
        {/* 3. THE CONTENT LAYER */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}