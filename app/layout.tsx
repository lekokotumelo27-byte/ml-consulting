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

// --- UPDATED WITH YOUR DETAILS FOR GOOGLE ---
export const metadata: Metadata = {
  title: "M.L Consulting | CEO: Junior Tumelo Malapela",
  description: "Founded by Junior Tumelo Malapela (25) in Limpopo, M.L Consulting engineers highly-scalable digital infrastructure, responsive custom applications, and clean design systems to help businesses grow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-white text-slate-900 antialiased blueprint-grid-light min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}