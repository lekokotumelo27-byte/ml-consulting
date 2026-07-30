"use client";

import Image from "next/image";

export default function CloudBackground() {
  // We are using the specific technical cloud image you liked
  const workshopCloud = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000";

  return (
    <div className="fixed inset-0 overflow-hidden bg-white" style={{ zIndex: -20 }}>
      {/* THE STABLE MASTERPIECE BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={workshopCloud}
          alt="MLL Digital Infrastructure"
          fill
          priority
          unoptimized
          className="object-cover opacity-60 brightness-110"
        />
      </div>
      
      {/* THE CLARITY VEIL: Ensures words are never hidden, especially on mobile */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none"></div>

      {/* THE BLUEPRINT GRID OVERLAY */}
      <div className="absolute inset-0 blueprint-grid-light opacity-[0.08] pointer-events-none"></div>
    </div>
  );
}