import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(98, 133, 255, 0.4) 0%, rgba(0, 240, 255, 0.15) 50%, transparent 80%)'
        }}
      />

      {/* Subtle bottom-right ambient accent glow */}
      <div 
        className="absolute top-[45%] -right-[15%] w-[650px] h-[650px] rounded-full opacity-20 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(98, 133, 255, 0.3) 0%, rgba(79, 70, 229, 0.15) 60%, transparent 80%)'
        }}
      />

      {/* Subtle middle-left accent glow */}
      <div 
        className="absolute top-[80%] -left-[10%] w-[550px] h-[550px] rounded-full opacity-15 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(98, 133, 255, 0.1) 60%, transparent 80%)'
        }}
      />

      {/* Cyber Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] cyber-grid"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)'
        }}
      />

      {/* Subtle animated floating stars/dust points */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-[#6285FF] rounded-full animate-ping opacity-30" />
        <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse opacity-25" />
        <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-[#6285FF] rounded-full animate-pulse opacity-20" />
        <div className="absolute top-[85%] right-[18%] w-1.5 h-1.5 bg-[#8CA6FF] rounded-full animate-ping opacity-25" />
      </div>
    </div>
  );
};

