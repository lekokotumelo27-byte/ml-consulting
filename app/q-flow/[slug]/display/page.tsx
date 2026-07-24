"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Loader2, 
  AlertTriangle, 
  Tv, 
  Users, 
  Volume2, 
  Megaphone, 
  Clock,
  Lock
} from "lucide-react";

interface PageProps {
  params: { slug: string };
}

interface QueueItem {
  id: string;
  customer_name: string;
  ticket_code: string;
  status: "waiting" | "serving" | "completed" | "cancelled";
  served_by?: string;
}

export default function LobbyDisplayPage({ params }: PageProps) {
  const slug = params.slug;

  const [business, setBusiness] = useState<{ id: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [queueList, setQueueList] = useState<QueueItem[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Audio Permission State
  const [audioEnabled, setAudioPermission] = useState(false);

  // Active announcement state
  const [currentCall, setCurrentCall] = useState<{ name: string; ticket: string; station: string } | null>(null);
  const announcedIds = useRef<string[]>([]);

  // Dynamic labels based on URL slug (Clinic vs Barbershop)
  const isClinic = slug === "clinic";
  const stationLabel = isClinic ? "Doctor" : "Barber";
  const sectionLabel = isClinic ? "CONSULTING ROOMS" : "CHAIRS";

  const barbers = ["Barber 1", "Barber 2", "Barber 3", "Barber 4", "Barber 5"];

  useEffect(() => {
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
          .select("id, customer_name, ticket_code, status, served_by")
          .eq("business_id", busData.id)
          .in("status", ["waiting", "serving"])
          .order("joined_at", { ascending: true });

        if (qError) {
          setErrorMsg("Could not load display ledger.");
        } else {
          setQueueList(qData || []);
          
          if (qData) {
            const alreadyServing = qData.filter(item => item.status === "serving").map(item => item.id);
            announcedIds.current = alreadyServing;
          }
        }
      } catch (err) {
        setBusiness(null);
      } finally {
        setLoading(false);
      }
    }
    loadBusinessAndQueue();
  }, [slug]);

  // Real-time Database Sync & Live Voice Announcement Trigger
  useEffect(() => {
    if (!business) return;
    const businessId = business.id; // Capture ID cleanly to prevent TypeScript null checks

    const queueSubscription = supabase
      .channel("lobby-display-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "queues",
          filter: `business_id=eq.${businessId}`
        },
        () => {
          supabase
            .from("queues")
            .select("id, customer_name, ticket_code, status, served_by")
            .eq("business_id", businessId)
            .in("status", ["waiting", "serving"])
            .order("joined_at", { ascending: true })
            .then(({ data }) => {
              if (!data) return;

              // Check for newly called customers
              const beingServed = data.filter(item => item.status === "serving");
              const newCall = beingServed.find(item => !announcedIds.current.includes(item.id));

              if (newCall && newCall.served_by) {
                announcedIds.current.push(newCall.id);

                setCurrentCall({
                  name: newCall.customer_name,
                  ticket: newCall.ticket_code,
                  station: newCall.served_by
                });

                if (audioEnabled) {
                  speakAnnouncement(newCall.customer_name, newCall.ticket_code, newCall.served_by);
                }

                setTimeout(() => {
                  setCurrentCall(null);
                }, 7000);
              }

              setQueueList(data);
            });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(queueSubscription);
    };
  }, [business, audioEnabled]);

  // Native HTML5 Female Voice Announcement System
  const speakAnnouncement = (name: string, ticket: string, station: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const parsedTicket = ticket.split("").join(" ");
    const textToSpeak = `Ticket ${parsedTicket}. ${name}. You are next. Please head to ${station}.`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) => 
        voice.name.toLowerCase().includes("female") || 
        voice.name.toLowerCase().includes("zira") || 
        voice.name.toLowerCase().includes("google us english") ||
        voice.name.toLowerCase().includes("hazel")
    );

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.85;
    utterance.pitch = 1.0; 

    window.speechSynthesis.speak(utterance);
  };

  const formatPublicName = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    if (parts.length <= 1) return fullName;
    const firstName = parts[0];
    const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
    return `${firstName} ${lastInitial}.`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center text-slate-800">
        <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
        <p className="font-sans text-sm font-semibold text-slate-600">Initializing Lobby Display Engine...</p>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="h-12 w-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="font-sans text-lg font-bold">Display Link Inactive</h1>
        <p className="font-sans text-sm text-slate-500 mt-2 max-w-xs">
          This display channel is currently offline or not registered.
        </p>
      </div>
    );
  }

  const activeServing = queueList.filter(item => item.status === "serving");
  const activeWaiting = queueList.filter(item => item.status === "waiting");

  return (
    <div className="min-h-screen bg-white blueprint-grid-light text-slate-900 flex flex-col justify-between font-sans overflow-hidden relative">
      
      {/* Audio Activation Alert Banner */}
      {!audioEnabled && (
        <div className="bg-blue-600 px-8 py-3 text-white flex items-center justify-between text-xs font-bold animate-fadeIn">
          <div className="flex items-center gap-2">
            <Volume2 className="h-4.5 w-4.5 animate-bounce" />
            <span>Browser sound protection active. Click the button to enable the Voice Announcer.</span>
          </div>
          <button
            onClick={() => {
              setAudioPermission(true);
              if (window.speechSynthesis) {
                window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
              }
            }}
            className="bg-white text-blue-700 px-3 py-1.5 rounded font-black uppercase tracking-wider"
          >
            Enable Voice
          </button>
        </div>
      )}

      {/* Lobby Header */}
      <header className="border-b border-neutral-200 bg-white px-8 py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg border border-blue-200 bg-blue-50 flex items-center justify-center">
            <Tv className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-black tracking-widest text-slate-400 uppercase">Q-FLOW LIVE DISPLAY</span>
            <span className="font-sans text-lg font-black text-slate-900 uppercase tracking-wide">{business.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-full bg-green-50 border border-green-200 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span className="font-mono text-[9px] font-bold text-green-700 tracking-wider uppercase">LEDGER_SYNC_ONLINE</span>
        </div>
      </header>

      {/* Main Split Screen */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 items-stretch relative">
        
        {/* Left Column: Serving Nodes */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              [ {sectionLabel} / NOW SERVING ]
            </span>
            <div className="h-[2px] w-8 bg-blue-600 mt-2" />
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-start">
            {activeServing.length > 0 ? (
              activeServing.map((client) => (
                <div 
                  key={client.id} 
                  className="rounded-2xl border-l-[6px] border-l-blue-600 border border-neutral-200 bg-white p-6 shadow-sm flex items-center justify-between gap-4 animate-fadeIn"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-black tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full uppercase">
                      NOW SERVING
                    </span>
                    <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                      {formatPublicName(client.customer_name)}
                    </h2>
                  </div>

                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="font-mono text-sm font-black text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded">
                      {client.served_by} <span className="text-blue-300 mx-1">|</span> TICKET {client.ticket_code}
                    </span>
                    <span className="text-[10px] font-sans font-bold text-slate-400 flex items-center gap-1 uppercase">
                      <Clock className="h-3.5 w-3.5 text-slate-400" /> Est: 15 Mins Remaining
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-neutral-100 rounded-2xl bg-slate-50/50 p-12 text-center h-full">
                <Users className="h-10 w-10 text-slate-300 mb-3" />
                <h3 className="font-sans text-lg font-bold text-slate-400">Awaiting Next Client</h3>
                <p className="text-xs text-slate-400 mt-1">Lobby is currently quiet or waiting for check-ins.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Waiting List Queue */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between shadow-md">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  [ NEXT_IN_LINE ]
                </span>
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                  {activeWaiting.length} WAITING
                </span>
              </div>

              {/* Waiting List Rows */}
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-2">
                {activeWaiting.map((client, index) => (
                  <div 
                    key={client.id}
                    className="rounded-xl border border-neutral-100 bg-slate-50/50 p-4 flex items-center justify-between shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-700 font-mono text-sm font-black flex items-center justify-center border border-blue-100">
                        {index + 1}
                      </div>
                      <h3 className="font-sans text-lg font-bold text-slate-800">
                        {formatPublicName(client.customer_name)}
                      </h3>
                    </div>
                    
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded border border-blue-100 bg-blue-50 text-blue-700">
                      TICKET: {client.ticket_code}
                    </span>
                  </div>
                ))}

                {activeWaiting.length === 0 && (
                  <div className="border-2 border-dashed border-neutral-100 rounded-xl p-16 text-center">
                    <Users className="h-8 w-8 text-neutral-300 mx-auto mb-3" />
                    <p className="font-sans text-sm font-bold text-slate-400">No Customers Waiting</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-slate-400 font-mono text-[8px] uppercase tracking-widest">
              <span>SYSTEM: ONLINE_</span>
              <span>SCREEN_ID: LOBBY_01</span>
            </div>

          </div>
        </div>

        {/* Full-Screen Announcement Overlay */}
        <AnimatePresence>
          {currentCall && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-blue-600 z-50 flex flex-col justify-between p-12 text-white text-center"
            >
              {/* Background blueprint lines */}
              <div className="absolute inset-0 blueprint-grid-light opacity-10 pointer-events-none" />

              <div className="flex justify-between items-center z-10 border-b border-white/10 pb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  [ LOBBY_AUDIO_SIGNAL // TRIGGERED ]
                </span>
                <div className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-white animate-bounce" />
                  <span className="font-sans text-xs font-black uppercase tracking-wider">SPEAKING...</span>
                </div>
              </div>

              <div className="z-10 space-y-8 flex-1 flex flex-col justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 border border-white/20 mx-auto animate-ping">
                  <Volume2 className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xl sm:text-2xl font-black tracking-widest text-blue-200 uppercase bg-white/5 border border-white/15 px-6 py-2 rounded-full inline-block">
                    TICKET {currentCall.ticket}
                  </span>
                  
                  <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none pt-4 uppercase">
                    Hey {currentCall.name}!
                  </h2>
                  
                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-blue-100 pt-2 tracking-tight">
                    You are next. Please head to {currentCall.station}.
                  </h3>
                </div>
              </div>

              <div className="z-10 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
                <span>M.L Q-FLOW LEDGER</span>
                <span>STATUS_ACTIVE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Clean Lobby TV Custom Footer */}
      <footer className="py-5 text-center border-t border-neutral-200 bg-neutral-50/80">
        <p className="font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest">
          Q-FLOW LOBBY SIGNAL SYSTEM // CODES ARCHITECTED SECURELY
        </p>
      </footer>

    </div>
  );
}