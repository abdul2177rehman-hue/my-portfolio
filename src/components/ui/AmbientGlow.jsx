import React from 'react';

export const AmbientGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Off-White / Blush Background Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-[#F4F5F7] to-[#FAF8F9]" />

      {/* Top Hero Soft Diffused Rose Glow */}
      <div 
        className="absolute -top-[10%] right-[10%] w-[650px] h-[550px] bg-rose-500/[0.06] rounded-full blur-[140px] animate-pulse-atmospheric" 
      />

      {/* Center Subtle Crimson Accent Glow */}
      <div 
        className="absolute top-[32%] -left-[10%] w-[600px] h-[600px] bg-red-500/[0.05] rounded-full blur-[150px]" 
      />

      {/* Projects & Services Diffused Warm Pink Glow */}
      <div 
        className="absolute top-[62%] right-[5%] w-[700px] h-[600px] bg-rose-400/[0.05] rounded-full blur-[160px]" 
      />

      {/* Bottom Soft Warm Gradient */}
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[750px] h-[500px] bg-rose-600/[0.04] rounded-full blur-[160px]" 
      />

      {/* Elegant Light Dot Grid Overlay for Modern Technical Depth */}
      <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
    </div>
  );
};
