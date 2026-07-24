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

export const metadata: Metadata = {
  title: "M.L Consulting | Enterprise Systems & IT Architecture",
  description: "We engineer highly-scalable digital infrastructure, responsive custom applications, and clean design systems.",
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