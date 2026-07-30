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

export const metadata: Metadata = {
  title: "MLL Digital Consulting | CEO: Junior Tumelo Malapela",
  description: "Founded by Junior Tumelo Malapela (25) in Limpopo, MLL Digital Consulting engineers highly-scalable digital infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      {/* 
          IMPORTANT: We removed 'bg-white' from the body. 
          Now the clouds in <CloudBackground /> will be visible.
      */}
      <body className="text-slate-900 antialiased min-h-screen flex flex-col font-sans relative">
        
        {/* The Cloud Engine */}
        <CloudBackground />

        {/* The Blueprint Grid (Overlayed on the clouds) */}
        <div className="fixed inset-0 pointer-events-none blueprint-grid-light opacity-30 z-[-10]"></div>
        
        {/* The Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}