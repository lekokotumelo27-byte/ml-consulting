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

// --- ENHANCED CEO METADATA FOR GOOGLE ALIGNMENT ---
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
      <body className="bg-white text-slate-900 antialiased blueprint-grid-light min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}