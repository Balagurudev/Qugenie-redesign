import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgHeroMockup from "@/assets/hero_dashboard_new.jpg";
import LaserFlow from "@/shared/ui/laser-flow";

function DesktopBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none z-0">
      <div className="absolute inset-0 bg-[#000411]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,64,193,0.25)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,64,193,0.08)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  );
}

function HeadingAndSupportingText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex flex-col font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] gap-[24px] items-center justify-center text-center w-full max-w-[1000px] z-30 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="leading-[1.1] text-[48px] md:text-[72px] font-semibold text-white tracking-tight w-full"
      >
        Rule Your Entire Enterprise.<br className="hidden md:inline" /> From One Sovereign Core.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="leading-[1.6] text-[#fcfcfd]/90 text-[18px] md:text-[20px] max-w-[860px] font-light"
      >
        Command recruitment, payroll, sales, finance and inventory from one single server. No subscriptions, no vendor lock-in, no data leaking. Built for modern Indian business.
      </motion.p>
    </div>
  );
}

function Actions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleDemoClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlatformsClick = () => {
    window.location.hash = "#/platform/silos";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="relative flex gap-[16px] items-center justify-center z-30 mt-[48px]"
    >
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDemoClick}
        className="bg-white relative rounded-[8px] cursor-pointer shadow-[0_1px_2px_rgba(16,24,40,0.05)] border border-[#d0d5dd]"
      >
        <div className="flex gap-[12px] items-center justify-center px-[28px] py-[16px]">
          <p className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-semibold leading-[28px] text-[#344054] text-[18px] whitespace-nowrap">Try now with Demo</p>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 8px 24px rgba(0, 64, 193, 0.45)" }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePlatformsClick}
        className="bg-[#0040C1] relative rounded-[8px] cursor-pointer"
      >
        <div className="flex gap-[12px] items-center justify-center px-[28px] py-[16px] border border-[#0040C1] rounded-[8px]">
          <p className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-semibold leading-[28px] text-[18px] text-white whitespace-nowrap">See platforms</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Mockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.96 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      className="relative mt-[-640px] w-full max-w-[1160px] select-none cursor-pointer group z-10"
      data-name="Mockup Card"
    >
      <div
        style={{
          height: '1400px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.25}
          verticalBeamOffset={0}
          color="#4D94FF"
          horizontalSizing={1.8}
          verticalSizing={3.5}
          wispDensity={1.5}
          wispSpeed={15}
          wispIntensity={20}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={1.5}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />

        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: 'auto',
          zIndex: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <div className="relative rounded-[24px] overflow-hidden border border-[#ffffff]/10 bg-black/40 backdrop-blur-md shadow-[0_24px_50px_rgba(0,64,193,0.3)] transition-all duration-500 hover:border-[#0040C1]/40 hover:shadow-[0_32px_60px_rgba(0,64,193,0.5)] w-full h-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0040C1]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <img
              src={imgHeroMockup}
              alt="QuGenie Sovereign Enterprise Core Dashboard Mockup"
              className="w-full h-auto object-cover rounded-[23px] transition-transform duration-700 group-hover:scale-[1.005]"
              style={{ objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* Mask Layer */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: 'auto',
          zIndex: 5,
          pointerEvents: 'none',
        }}>
          <img
            ref={revealImgRef}
            src={imgHeroMockup}
            alt="Reveal effect"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '23px',
              mixBlendMode: 'lighten',
              opacity: 0.35,
              pointerEvents: 'none',
              '--mx': '-9999px',
              '--my': '-9999px',
              WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 150px, rgba(255,255,255,0.6) 250px, rgba(255,255,255,0.25) 350px, rgba(255,255,255,0) 450px)',
              maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 150px, rgba(255,255,255,0.6) 250px, rgba(255,255,255,0.25) 350px, rgba(255,255,255,0) 450px)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat'
            } as any}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center pt-[140px] pb-[80px] overflow-hidden" data-name="Hero">
      <DesktopBackground />
      <HeadingAndSupportingText />
      <Actions />
      <Mockup />
    </div>
  );
}
