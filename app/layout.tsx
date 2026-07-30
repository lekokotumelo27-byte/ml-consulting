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
      <body className="text-slate-900 antialiased min-h-screen flex flex-col font-sans relative">
        
        {/* Stable Cloud Background */}
        <CloudBackground />

        {/* Content Container - Transparent to let the sky show through */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

        {/* Global Transparency Logic */}
        <style dangerouslySetInnerHTML={{ __html: `
          main, section { background-color: transparent !important; }
        `}} />

      </body>
    </html>
  );
}