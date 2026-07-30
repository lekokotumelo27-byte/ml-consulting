"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CloudBackground() {
  const pathname = usePathname();

  // MAPPING: Every page gets a different high-quality cloud tone
  const cloudTones: Record<string, string> = {
    "/": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2000",           // Home: Bright/Vision
    "/workshop": "https://images.unsplash.com/photo-1534088568595-a066f7104221?q=80&w=2000",   // Workshop: Technical/Deep
    "/consulting": "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=2000", // Consulting: Calm/Horizon
    "/services": "https://images.unsplash.com/photo-1590055532391-815181335d79?q=80&w=2000",   // Services: Clear/Active
    "/our-story": "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=2000",  // Story: Dawn/Warm
  };

  // Fallback to Home clouds if page isn't listed
  const activeCloud = cloudTones[pathname] || cloudTones["/"];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }} // Soft transparency to keep text readable
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeCloud}
            alt="MLL Digital Cloud Infrastructure"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* The Vignette: Ensures the center of the screen stays clean for content */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30"></div>
    </div>
  );
}