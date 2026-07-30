"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CloudBackground() {
  const pathname = usePathname();

  // CURATED HIGH-END ARCHITECTURAL CLOUD TONES
  const cloudTones: Record<string, string> = {
    "/": "https://images.unsplash.com/photo-1534088568595-a066f7104221?q=80&w=2000",           // Home: The Vision (Expansive)
    "/workshop": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000",   // Workshop: The Engine (Deep/Technical)
    "/services": "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2000",   // Services: The Horizon (Clean)
    "/consulting": "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2000", // Consulting: The Strategy (Calm)
  };

  const activeCloud = cloudTones[pathname] || cloudTones["/"];

  return (
    <div className="fixed inset-0 overflow-hidden bg-white" style={{ zIndex: -20 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }} // Higher visibility for that masterpiece look
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeCloud}
            alt="MLL Digital Infrastructure"
            fill
            priority
            className="object-cover brightness-110 contrast-[1.05]"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Light Blueprint Overlay */}
      <div className="absolute inset-0 blueprint-grid-light opacity-[0.06] pointer-events-none"></div>
      
      {/* Soft Vignette to keep content sharp */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40"></div>
    </div>
  );
}