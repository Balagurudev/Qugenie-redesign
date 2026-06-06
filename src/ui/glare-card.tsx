import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

export function GlareCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const deltaX = useTransform(x, (current) => {
    if (!ref.current) return 0;
    return current - ref.current.offsetWidth / 2;
  });
  const deltaY = useTransform(y, (current) => {
    if (!ref.current) return 0;
    return current - ref.current.offsetHeight / 2;
  });

  // Smooth out tilt rotations with physical springs
  const rotateX = useSpring(useTransform(deltaY, [-150, 150], [12, -12]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(deltaX, [-150, 150], [-12, 12]), {
    stiffness: 150,
    damping: 15,
  });

  const perspective = 1000;
  
  // Set midpoint to 20 so that the tilt animation renders fully and beautifully
  const rotateXClamped = useTransform(rotateX, (current) => {
    const midPoint = 20;
    const clamp = Math.min(Math.max(current, -midPoint), midPoint);
    return clamp;
  });
  const rotateYClamped = useTransform(rotateY, (current) => {
    const midPoint = 20;
    const clamp = Math.min(Math.max(current, -midPoint), midPoint);
    return clamp;
  });

  const [isHovered, setIsHovered] = useState(false);

  // Dynamic template to bind x and y MotionValues directly to a high-contrast spotlight gradient
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.65) 0%, rgba(0, 0, 0, 1) 90%)`;

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-[24px] border border-[#1e2d45] bg-[#0c101b]/90 backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-[var(--primary)]/15 hover:border-[var(--primary)]/40 ${className ?? ""}`}
      style={{ 
        perspective: perspective, 
        rotateX: rotateXClamped, 
        rotateY: rotateYClamped,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Smoothly return card to centered flat position
        x.set(ref.current ? ref.current.offsetWidth / 2 : 0);
        y.set(ref.current ? ref.current.offsetHeight / 2 : 0);
      }}
    >
      {/* Layer 1: Holographic Rainbow Sheen (Color Dodge) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 mix-blend-color-dodge transition-opacity duration-300 bg-gradient-to-br from-pink-500/20 via-blue-600/25 to-emerald-500/20"
        style={{
          opacity: isHovered ? 0.65 : 0,
        }}
      />

      {/* Layer 2: Dynamic Spotlight Glare (Color Dodge) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-40 mix-blend-color-dodge transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: glareBackground,
        }}
      />
      
      {/* Content wrapper to preserve layers */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}

