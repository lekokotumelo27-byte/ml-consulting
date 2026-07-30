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
  description: "Founded by Junior Tumelo Malapela (25) in Limpopo, MLL Digital Consulting builds high-end digital systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="text-slate-900 antialiased min-h-screen flex flex-col font-sans relative">
        
        {/* The Masterpiece Cloud Engine */}
        <CloudBackground />

        {/* This CSS block forces all pages to let the clouds show through */}
        <style dangerouslySetInnerHTML={{ __html: `
          main, section, .bg-white, .bg-slate-50, .bg-blue-50\\/20 { 
            background-color: transparent !important; 
          }
        `}} />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}