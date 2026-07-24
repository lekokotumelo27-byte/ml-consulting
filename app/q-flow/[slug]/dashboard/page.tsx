"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, AlertTriangle, Users, Check, Play, Trash2, CheckCircle2, Printer } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

interface QueueItem {
  id: string;
  customer_name: string;
  phone_number: string;
  ticket_code: string;
  status: "waiting" | "serving" | "completed" | "cancelled";
  served_by?: string;
}

export default function OwnerDashboardPage({ params }: PageProps) {
  const slug = params.slug;

  const [business, setBusiness] = useState<{ id: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [queueList, setQueueList] = useState<QueueItem[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Dynamic Browser Origin State (Locks the local/live URL automatically)
  const [browserOrigin, setBrowserOrigin] = useState("http://localhost:3000");

  const barbers = ["Barber 1", "Barber 2", "Barber 3", "Barber 4", "Barber 5"];

  useEffect(() => {
    // Detect the exact active domain address automatically (e.g. localhost or live url)
    if (typeof window !== "undefined") {
      setBrowserOrigin(window.location.origin);
    }

    async function loadBusinessAndQueue() {
      try {
        const { data: busData, error: busError } = await supabase
          .from("businesses")
          .select("id, name")
          .eq("slug", slug)
          .single();

        if (busError || !busData) {
          setBusiness(null);
          setLoading(false);
          return;
        }

        setBusiness(busData);

        const { data: qData, error: qError } = await supabase
          .from("queues")
          .select("id, customer_name, phone_number, ticket_code, status, served_by")
          .eq("business_id", busData.id)
          .in("status", ["waiting", "serving"])
          .order("joined_at", { ascending: true });

        if (qError) {
          setErrorMsg("Could not load queue ledger.");
        } else {
          setQueueList(qData || []);
        }
      } catch (err) {
        setBusiness(null);
      } finally {
        setLoading(false);
      }
    }
    loadBusinessAndQueue();
  }, [slug]);

  // Real-time Sync Subscription
  useEffect(() => {
    if (!business) return;

    const queueSubscription = supabase
      .channel("live-queue-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "queues",
          filter: `business_id=eq.${business.id}`
        },
        () => {
          supabase
            .from("queues")
            .select("id, customer_name, phone_number, ticket_code, status, served_by")
            .eq("business_id", business.id)
            .in("status", ["waiting", "serving"])
            .order("joined_at", { ascending: true })
            .then(({ data }) => {
              if (data) setQueueList(data);
            });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(queueSubscription);
    };
  }, [business]);

  // Automatic Barber Allocation Logic
  const handleServeNext = async (clientId: string) => {
    const activeServing = queueList.filter(item => item.status === "serving");
    const busyStations = activeServing.map(item => item.served_by);
    const freeStation = barbers.find(station => !busyStations.includes(station));

    if (!freeStation) {
      setErrorMsg("All stations are currently busy. Complete an active session first.");
      return;
    }

    try {
      const { error } = await supabase
        .from("queues")
        .update({ 
          status: "serving",
          served_by: freeStation 
        })
        .eq("id", clientId);

      if (error) {
        setErrorMsg("Failed to update status on server.");
      }
    } catch (err) {
      setErrorMsg("A system communication error occurred.");
    }
  };

  const handleCompleteSession = async (id: string) => {
    try {
      const { error } = await supabase
        .from("queues")
        .update({ status: "completed" })
        .eq("id", id);

      if (error) {
        setErrorMsg("Failed to complete session.");
      }
    } catch (err) {
      setErrorMsg("A database communication error occurred.");
    }
  };

  const handleCancelSession = async (id: string) => {
    try {
      const { error } = await supabase
        .from("queues")
        .update({ status: "cancelled" })
        .eq("id", id);

      if (error) {
        setErrorMsg("Failed to remove customer.");
      }
    } catch (err) {
      setErrorMsg("A database communication error occurred.");
    }
  };

  // Triggers browser native print dialog
  const handlePrintPoster = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
        <p className="font-sans text-sm font-semibold text-slate-600">Connecting to Admin Ledger...</p>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="h-12 w-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="font-sans text-lg font-bold text-slate-900">Admin Authentication Failed</h1>
        <p className="font-sans text-sm text-slate-500 mt-2 max-w-xs">
          This system link is invalid or the business is not registered on the Q-Flow network.
        </p>
      </div>
    );
  }

  const activeServing = queueList.filter(item => item.status === "serving");
  const activeWaiting = queueList.filter(item => item.status === "waiting");

  // Dynamic QR Code link pointing specifically to door scan mode (?source=qr) using the live browser origin
  const qrTargetUrl = `${browserOrigin}/q-flow/${slug}?source=qr`;
  const qrCodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrTargetUrl)}`;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      
      {/* HEADER - HIDDEN WHEN PRINTING */}
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between shadow-sm print:hidden">
        <div className="flex flex-col">
          <span className="font-sans text-xs font-black tracking-wider text-slate-900">M.L Q-FLOW CONSOLE</span>
          <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-wider">{business.name}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrintPoster}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 h-10 rounded-lg transition-colors"
          >
            <Printer className="h-4 w-4" /> Print Door Poster
          </button>
          
          <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 border border-green-200">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-[8px] font-bold text-green-700 tracking-wider">LEDGER_ACTIVE</span>
          </div>
        </div>
      </header>

      {/* MAIN DASHBOARD CONTENT - HIDDEN WHEN PRINTING */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 animate-fadeIn print:hidden">
        {errorMsg && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold text-center">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Serving Panel */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              [ CHAIRS / NOW SERVING ]
            </h3>
            
            <div className="space-y-3">
              {barbers.map((barber) => {
                const currentClient = activeServing.find(item => item.served_by === barber);
                return (
                  <div key={barber} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                        {barber}
                      </span>
                      {currentClient ? (
                        <div className="mt-2">
                          <h4 className="font-sans text-sm font-black text-slate-900 leading-none">
                            {currentClient.customer_name}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-slate-400 block mt-1.5">
                            TICKET: {currentClient.ticket_code}
                          </span>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 mt-2 font-medium">Chair is empty</p>
                      )}
                    </div>

                    {currentClient && (
                      <button
                        onClick={() => handleCompleteSession(currentClient.id)}
                        type="button"
                        className="h-10 px-4 rounded-lg border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Complete
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Waitlist Panel */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              [ WAITING LIST // {activeWaiting.length} CLIENTS ]
            </h3>

            <div className="space-y-3">
              {activeWaiting.map((client, index) => (
                <div 
                  key={client.id}
                  className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center justify-between gap-4 transition-all hover:border-neutral-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400 mt-0.5">#{index + 1}</span>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-slate-900">{client.customer_name}</h4>
                      <p className="font-mono text-[10px] text-slate-400 mt-0.5">{client.phone_number}</p>
                      <span className="inline-block text-[10px] font-bold bg-blue-50 border border-blue-100 text-blue-700 px-2.5 py-0.5 rounded mt-2">
                        TICKET: {client.ticket_code}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleServeNext(client.id)}
                      className="h-9 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                    >
                      <Play className="h-3.5 w-3.5 fill-white" /> Serve
                    </button>

                    <button
                      onClick={() => handleCancelSession(client.id)}
                      className="h-9 w-9 rounded-lg border border-neutral-200 hover:bg-red-50 hover:border-red-200 text-neutral-400 hover:text-red-500 flex items-center justify-center transition-colors"
                      title="Remove from queue"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              {activeWaiting.length === 0 && (
                <div className="border-2 border-dashed border-neutral-200 rounded-xl p-12 text-center bg-white/50">
                  <Users className="h-8 w-8 text-neutral-300 mx-auto mb-3" />
                  <p className="font-sans text-sm font-bold text-slate-500">Waitlist Empty</p>
                  <p className="text-xs text-slate-400 mt-1">
                    When customers check in, they will pop up here instantly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER - HIDDEN WHEN PRINTING */}
      <footer className="py-4 text-center border-t border-neutral-200 bg-white print:hidden">
        <p className="font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest">
          ADMIN CONSOLE SYSTEM // M.L Q-FLOW NETWORK
        </p>
      </footer>


      {/* =======================================================
          A4 PRINTABLE DOOR POSTER TEMPLATE (ONLY VISIBLE ON PRINT)
          ======================================================= */}
      <div className="hidden print:flex flex-col justify-between items-center bg-white text-black p-12 h-screen w-full text-center border-8 border-double border-blue-600 rounded-3xl">
        <div className="space-y-4">
          <span className="font-mono text-sm tracking-widest text-blue-600 font-bold block">
            [ M.L Q-FLOW NETWORK ]
          </span>
          {/* Dynamic Business Name */}
          <h1 className="font-sans text-4xl font-black uppercase tracking-tight text-slate-900 pt-4 leading-none animate-fadeIn">
            {business?.name || "Sassy Barbershop"}
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* Dynamic Scannable QR Code */}
        <div className="flex flex-col items-center space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={qrCodeImageSrc} 
            alt="Scannable waiting list QR code" 
            className="w-56 h-56 border-2 border-slate-900 p-2 rounded-xl"
          />
          <span className="font-mono text-xs text-slate-500">
            [ SCAN TO JOIN WAITING LIST ]
          </span>
        </div>

        <div className="space-y-4 max-w-lg mx-auto">
          <h2 className="font-sans text-2xl font-extrabold text-slate-900 leading-tight">
            Skip the lobby wait.
          </h2>
          <p className="font-sans text-sm text-slate-600 leading-relaxed">
            Scan this code with your phone camera to secure your ticket and wait anywhere you want. We will announce your name on the lobby TV when it is your turn.
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-6 w-full font-mono text-[10px] text-slate-400 uppercase tracking-widest">
          SASSY_BARBERSHOP // POWERED BY M.L CONSULTING
        </div>
      </div>

    </div>
  );
}