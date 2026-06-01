import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgHeroMockup from "@/assets/hero_dashboard_new.jpg";
import LaserFlow from "@/shared/ui/laser-flow";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

function DesktopBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none z-0">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--primary)_25%,transparent)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
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
          <p className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-semibold leading-[28px] text-[#344054] text-[18px] whitespace-nowrap">Signup with Quikynet</p>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 8px 24px color-mix(in srgb, var(--primary) 45%, transparent)" }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePlatformsClick}
        className="bg-[var(--primary)] relative rounded-[8px] cursor-pointer"
      >
        <div className="flex gap-[12px] items-center justify-center px-[28px] py-[16px] border border-[var(--primary)] rounded-[8px]">
          <p className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-semibold leading-[28px] text-[18px] text-[var(--primary-foreground)] whitespace-nowrap">Book a Free Demo</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Mockup() {
  const { palette, shadeMapping } = useThemeCustomizer();
  const primaryShadeKey = shadeMapping[palette.id] || "800";
  const laserColor = palette.shades[primaryShadeKey];
  
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
          color={laserColor}
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
          <div className="relative rounded-[24px] overflow-hidden border border-[#ffffff]/10 bg-black/40 backdrop-blur-md shadow-[0_24px_50px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition-all duration-500 hover:border-[var(--primary)]/40 hover:shadow-[0_32px_60px_color-mix(in_srgb,var(--primary)_50%,transparent)] w-full h-auto">
            <div className="absolute inset-0 bg-[linear-gradient(to_top_right,color-mix(in_srgb,var(--primary)_10%,transparent),transparent,rgba(255,255,255,0.05))] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
  const { designSystem } = useThemeCustomizer();

  const handleDemoClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlatformsClick = () => {
    window.location.hash = "#/platform/silos";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (designSystem === "ebay") {
    return (
      <div
        className="bg-[#FAFAF9] dark:bg-[#0a0a0a] text-[#111111] dark:text-white w-full flex flex-col overflow-hidden"
        style={{
          height: "100svh",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Top text block ── */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-24 pb-5 shrink-0">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white dark:bg-[#111] text-[12px] font-medium text-[#555] dark:text-[#aaa] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: "var(--primary)" }} />
            Now live — QuGenie v2.0 with Agentic Core
          </div>

          <h1 className="text-[48px] leading-[60px] md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[90px] font-sans font-medium tracking-tight max-w-[900px] mb-4 text-[#111] dark:text-white">
            Rule Your Entire Enterprise.<br />
            From One Sovereign Core.
          </h1>

          <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] font-medium max-w-[560px] text-[#666] dark:text-[#A6A6A6] mb-6">
            Command recruitment, payroll, sales, finance and inventory from one single server. No subscriptions, no vendor lock-in, no data leaking. Built for modern Indian business.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-5">
            <button
              onClick={handlePlatformsClick}
              className="text-white px-7 py-3 text-[16px] leading-[24px] font-semibold rounded-full transition-colors cursor-pointer shadow-md"
              style={{ background: "var(--primary)" }}
            >
              Signup with Quikynet
            </button>
            <button
              onClick={handleDemoClick}
              className="bg-transparent text-[#111] dark:text-white border border-[#d1d1d1] dark:border-[#333] px-7 py-3 text-[16px] leading-[24px] font-semibold rounded-full hover:bg-[#f0f0f0] dark:hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              Book a Free Demo
            </button>
          </div>

        </div>

        {/* ── Video showcase — fills remaining viewport height ── */}
        <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-4 min-h-0">
          <div className="relative rounded-[16px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.15)] border border-[#e2e2e2] dark:border-[#222] bg-white dark:bg-[#111] h-full flex flex-col">




            {/* Video — fills remaining height */}
            <div
              className="relative flex-1 bg-[#0a0a0a] group cursor-pointer overflow-hidden min-h-0"
              onClick={(e) => {
                const vid = (e.currentTarget as HTMLElement).querySelector("video") as HTMLVideoElement | null;
                if (!vid) return;
                if (vid.paused) { vid.play(); } else { vid.pause(); }
              }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={imgHeroMockup}
              >
                <source src="/hero-demo.mp4" type="video/mp4" />
              </video>

              {/* Play/pause overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

              {/* Live badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LIVE DEMO
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center pt-[140px] pb-[80px] overflow-hidden" data-name="Hero">
      <DesktopBackground />
      <HeadingAndSupportingText />
      <Actions />
      <Mockup />
    </div>
  );
}
