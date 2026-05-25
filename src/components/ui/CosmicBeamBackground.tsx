import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CosmicBeamBackgroundProps {
  className?: string;
  beamPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "left-side" | "right-side" | "center" | "top-center";
  beamIntensity?: "soft" | "strong" | "extreme";
  interactive?: boolean;
  children?: React.ReactNode;
}

export function CosmicBeamBackground({
  className = "",
  beamPosition = "bottom-right",
  beamIntensity = "strong",
  interactive = false,
  children
}: CosmicBeamBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const shiftX = useTransform(smoothX, [0, 1], [-120, 120]);
  const shiftY = useTransform(smoothY, [0, 1], [-120, 120]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const getBeamStyles = () => {
    let positionClass = "";
    let angle = "-45deg";
    
    switch (beamPosition) {
      case "bottom-right":
        positionClass = "bottom-[-30%] right-[-20%]";
        angle = "-35deg";
        break;
      case "bottom-left":
        positionClass = "bottom-[-30%] left-[-20%]";
        angle = "35deg";
        break;
      case "top-right":
        positionClass = "top-[-30%] right-[-20%]";
        angle = "215deg";
        break;
      case "top-left":
        positionClass = "top-[-30%] left-[-20%]";
        angle = "145deg";
        break;
      case "left-side":
        positionClass = "top-[20%] left-[-40%]";
        angle = "20deg";
        break;
      case "right-side":
        positionClass = "top-[20%] right-[-40%]";
        angle = "-20deg";
        break;
      case "center":
        positionClass = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
        angle = "0deg";
        break;
      case "top-center":
        positionClass = "top-[-30%] left-1/2 -translate-x-1/2";
        angle = "0deg";
        break;
    }
    
    return { positionClass, angle };
  };
  
  const { positionClass, angle } = getBeamStyles();

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full overflow-hidden bg-[#030514] ${className}`}
    >
      {/* Base Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0"
        }}
      />
      
      {/* Lighting Beam Core & Outer Glow */}
      <motion.div style={interactive ? { x: shiftX, y: shiftY } : {}} className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: beamIntensity === "soft" ? 0.3 : beamIntensity === "strong" ? 0.7 : 1 }}
          animate={{ 
            opacity: beamIntensity === "soft" ? [0.3, 0.5, 0.3] : beamIntensity === "strong" ? [0.7, 1, 0.7] : [1, 1.3, 1],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-[180%] md:w-[120%] h-[60%] md:h-[40%] pointer-events-none origin-center ${positionClass}`}
          style={{
            background: beamIntensity === "extreme" 
              ? "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,1) 0%, rgba(135,206,250,0.9) 15%, rgba(0,80,255,0.6) 40%, transparent 100%)"
              : "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,1) 0%, rgba(85,134,255,0.8) 15%, rgba(0,64,193,0.4) 40%, transparent 100%)",
            transform: `rotate(${angle})`,
            filter: beamIntensity === "extreme" ? "blur(60px) brightness(1.3)" : "blur(80px)",
            mixBlendMode: "screen"
          }}
        />
      </motion.div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
