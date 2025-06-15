import React from "react";

const GlowWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Soft bluish glow background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[200px] opacity-20 top-[-150px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[200px] opacity-20 bottom-[-150px] right-[-100px]" />
      </div>

      {/* Content goes here */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowWrapper;
