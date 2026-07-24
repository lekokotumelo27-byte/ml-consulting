"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Loader2, AlertTriangle, Users, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export default function ClientCheckInPage({ params }: PageProps) {
  const slug = params.slug;

  const [business, setBusiness] = useState<{ id: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isQrScan, setIsQrScan] = useState(false);
  
  const [isJoined, setIsJoined] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [ticketCode, setTicketCode] = useState<string | null>(null);
  const [peopleAhead, setPeopleAhead] = useState(0);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Detect if the user scanned the physical door QR code
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setIsQrScan(urlParams.get("source") === "qr");
    }

    async function loadBusiness() {
      try {
        const { data, error } = await supabase
          .from("businesses")
          .select("id, name")
          .eq("slug", slug)
          .single();

        if (error || !data) {
          setBusiness(null);
        } else {
          setBusiness(data);
          const { count } = await supabase
            .from("queues")
            .select("*", { count: "exact", head: true })
            .eq("business_id", data.id)
            .eq("status", "waiting");
          
          setPeopleAhead(count || 0);
        }
      } catch (err) {
        setBusiness(null);
      } finally {
        setLoading(false);
      }
    }
    loadBusiness();
  }, [slug]);

  const handleJoinQueue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!business || submitLoading) return;

    setSubmitLoading(true);
    setErrorMsg("");

    try {
      // 1. Check if this is a returning customer
      const { data: pastVisits } = await supabase
        .from("queues")
        .select("id")
        .eq("business_id", business.id)
        .eq("phone_number", phoneNumber.trim())
        .limit(1);

      const isReturningCustomer = pastVisits && pastVisits.length > 0;

      // 2. Determine ticket number
      const { count } = await supabase
        .from("queues")
        .select("*", { count: "exact", head: true })
        .eq("business_id", business.id);

      const nextNumber = (count || 0) + 1;
      const generatedTicket = `A-${nextNumber < 10 ? "0" + nextNumber : nextNumber}`;

      // 3. Insert customer cleanly into database
      const { data, error } = await supabase
        .from("queues")
        .insert([
          {
            business_id: business.id,
            customer_name: customerName,
            phone_number: phoneNumber.trim(),
            ticket_code: generatedTicket,
            status: "waiting"
          }
        ])
        .select()
        .single();

      if (error) {
        setErrorMsg("Could not join the queue. Please check your connection.");
      } else if (data) {
        setTicketCode(generatedTicket);
        setIsReturning(!!isReturningCustomer);
        setIsJoined(true);
      }
    } catch (err) {
      setErrorMsg("An unexpected system connection error occurred.");
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
        <p className="font-sans text-sm font-semibold text-slate-600">Connecting to secure servers...</p>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="h-12 w-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="font-sans text-lg font-bold text-slate-900">Registration Not Found</h1>
        <p className="font-sans text-sm text-slate-500 mt-2 max-w-xs">
          This system link is invalid or the business is not registered on the Q-Flow network.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <span className="font-sans text-xs font-black tracking-wider text-slate-900">M.L Q-FLOW</span>
        <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 border border-green-200">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="font-mono text-[8px] font-bold text-green-700 tracking-wider">LIVE_SYNC</span>
        </div>
      </header>

      {/* Main Form Container */}
      <main className="flex-1 flex flex-col justify-center px-6 py-10 max-w-md mx-auto w-full">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
          
          {!isJoined ? (
            <div className="space-y-6">
              <div className="text-center">
                <span className="font-mono text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  {isQrScan ? "[ DOOR SCAN ENTRY ]" : "[ REMOTE ONLINE ENTRY ]"}
                </span>
                <h1 className="font-sans text-xl font-black text-slate-900 leading-tight">
                  {business.name}
                </h1>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto">
                  {isQrScan 
                    ? "You scanned our door code. Fill in your details below to secure your place in line."
                    : "Skip the lobby wait. Secure your place in line from home before traveling."
                  }
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-sans text-xs font-bold text-slate-700">Currently Waiting</span>
                </div>
                <span className="font-mono text-sm font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  {peopleAhead} PEOPLE
                </span>
              </div>

              {/* Clean form */}
              <form onSubmit={handleJoinQueue} className="space-y-4">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="client-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 082 123 4567"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-neutral-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-600 text-xs font-semibold text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={submitLoading}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white tracking-wider shadow-sm transition-all"
                >
                  {submitLoading ? "GENERATING TICKET..." : "GET TICKET"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          ) : (
            /* Success Ticket Display State */
            <div className="text-center py-4 space-y-6">
              
              <div className="relative h-28 w-28 mx-auto">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="h-24 w-24" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="42" fill="#EFF6FF" />
                    <circle cx="50" cy="50" r="38" stroke="#DBEAFE" strokeWidth="2" fill="white" />
                    <path d="M30 40 C35 25, 65 25, 70 40 Z" fill="#2563EB" />
                    <circle cx="42" cy="46" r="3" fill="#1E293B" />
                    <circle cx="58" cy="46" r="3" fill="#1E293B" />
                    <circle cx="36" cy="54" r="4" fill="#FCA5A5" opacity="0.6" />
                    <circle cx="64" cy="54" r="4" fill="#FCA5A5" opacity="0.6" />
                    <path d="M43 56 Q50 64, 57 56" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </motion.div>
              </div>
              
              <div className="space-y-2">
                {isReturning ? (
                  <span className="font-mono text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase">
                    Welcome Back, {customerName}!
                  </span>
                ) : (
                  <span className="font-mono text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                    Queue Confirmed
                  </span>
                )}
                
                <h2 className="font-sans text-2xl font-black text-slate-900 tracking-tight leading-tight pt-2">
                  You are number <span className="text-blue-600">#{peopleAhead + 1}</span> in line!
                </h2>
                
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  {isReturning 
                    ? "Thank you for supporting us again! We are looking forward to serving you shortly."
                    : "We are excited to serve you. Your ticket has been logged in the system ledger."
                  }
                </p>
              </div>

              {/* Digital Ticket Code */}
              <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-5 bg-slate-50/50 max-w-[240px] mx-auto">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">YOUR ENTRY CODE</span>
                <span className="font-mono text-3xl font-black text-blue-600 tracking-wider block mt-1.5">
                  {ticketCode}
                </span>
              </div>

              <div className="text-xs text-slate-500 border-t border-neutral-100 pt-5 max-w-xs mx-auto leading-relaxed">
                Estimated wait time is approximately <strong className="text-slate-800">{(peopleAhead + 1) * 15} minutes</strong>. Please monitor the lobby board or stand nearby.
              </div>
            </div>
          )}

        </div>
      </main>

      <footer className="py-4 text-center border-t border-neutral-100 bg-white">
        <p className="font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest">
          SYSTEM POWERED BY M.L Q-FLOW PLATFORM
        </p>
      </footer>
    </div>
  );
}