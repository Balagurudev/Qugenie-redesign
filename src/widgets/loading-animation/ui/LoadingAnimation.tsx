import { useEffect, useRef, useState } from "react";
import { Experience } from "../webgpu/experience.js";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";

export function LoadingAnimation({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasStarted) return;
    
    let isMounted = true;
    const exp = new Experience();
    
    // We try to initialize the WebGPU experience
    exp.initialize(containerRef.current).then(() => {
      if (!isMounted) return;
      setHasStarted(true);
      
      // Auto-complete the loading animation after 5 seconds
      // OR provide a button to dismiss it
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 8000);
    }).catch(err => {
      console.error("WebGPU initialization failed:", err);
      if (onComplete) onComplete();
    });

    return () => {
      isMounted = false;
      // Note: Experience.js might need a dispose method to clean up ThreeJS contexts.
      // But for a one-time loading animation, this might be fine.
    };
  }, [hasStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <CosmicBeamBackground 
        beamPosition="top-center" 
        beamIntensity="extreme"
        className="w-full h-full flex flex-col items-center justify-center bg-[#050510]"
      >
        <div 
          ref={containerRef} 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="absolute bottom-10 z-10 pointer-events-auto">
          <button 
            onClick={() => onComplete?.()}
            className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            Skip Animation
          </button>
        </div>
      </CosmicBeamBackground>
    </div>
  );
}
