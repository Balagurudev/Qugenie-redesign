import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Blocks, Database, Workflow, SlidersHorizontal } from "lucide-react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import heroBgFinal from "@/assets/hero_bg_final.png";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

const capabilities = [
  {
    id: "01",
    icon: Blocks,
    title: "Modular, Pluggable Design",
    p1: "Pick the modules you need today — HRMS, Sales, Finance, Operations. Plug them into a shared sovereign core. Add the rest whenever you're ready.",
    p2: "Modularity here is not a packaging trick — each module is a bounded context over the same canonical core, so adding one later never means a migration or a data merge. You start with what you need and grow without ever paying a re-platforming tax."
  },
  {
    id: "02",
    icon: Database,
    title: "Single Unified Database",
    p1: "Every module reads and writes against one canonical data store. No silos. No replicas. No reconciliation tax. The data is the data.",
    p2: "The reconciliation tax is the hidden cost of the multi-vendor stack: month-end spent proving that the CRM, the payroll system and the ledger agree. When every function writes to one store, there is nothing to reconcile — agreement is structural, not a process."
  },
  {
    id: "03",
    icon: Workflow,
    title: "Workflow Engine & Automation",
    p1: "Approvals, escalations, notifications, triggers — all engine-driven. Leave requests, expense claims, credit approvals route themselves through policy you define once.",
    p2: "Because the workflow engine sits inside the unified core rather than bolted on as middleware, a process started in one module completes in another with no integration seam. Define policy once; the platform applies it everywhere, every time."
  },
  {
    id: "04",
    icon: SlidersHorizontal,
    title: "Customisation Without Forking",
    p1: "Custom fields, forms, dashboards, and reports — built in, extended in. The platform bends to your business; your business never bends to the platform.",
    p2: "Customisation that forks the codebase is customisation you pay for again at every upgrade. QuGenie's extension model keeps your changes inside the supported platform — your business logic survives every version, untouched."
  }
];

const StickyCard = ({ cap, index, total }: { cap: any, index: number, total: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  
  // transformOrigin: alternating left/right (0% or 100%) and top/bottom for the last one (0% or 100%)
  const transformOrigin = isLast ? (index % 2 === 0 ? "0% 100%" : "100% 100%") : (index % 2 === 0 ? "0% 0%" : "100% 0%");

  // Backgrounds: distinct light colors for light mode (white and light gray), dark grays for dark mode
  const bgClassLight = index % 2 === 0 ? "bg-white" : "bg-[#f2f2f2]";
  const bgClassDark = index % 2 === 0 ? "dark:bg-[#1a1a1a]" : "dark:bg-[#262626]";
  
  // Reduce spacing between cards by pulling subsequent cards up in the document flow
  const marginTopClass = index > 0 ? "-mt-[30vh]" : "";

  return (
    <motion.div
      ref={ref}
      className={`sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden border border-[#e5e5e5] dark:border-[#333] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.2)] ${bgClassLight} ${bgClassDark} ${marginTopClass}`}
      style={{
        scale: isLast ? 1 : scale,
        borderRadius,
        transformOrigin,
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-[14px] font-bold tracking-[2px] text-[var(--primary)] uppercase">CAPABILITY {cap.id}</span>
          <h2 className="text-[48px] md:text-[64px] font-bold tracking-tight uppercase leading-[1.1] text-[#111111] dark:text-white">{cap.title}</h2>
        </div>
        <div className="flex-1 flex flex-col gap-6 md:pl-12">
          <p className="text-[20px] leading-[1.6] text-[#555] dark:text-[#e0e0e0]">{cap.p1}</p>
          <p className="text-[16px] leading-[1.5] text-[#777] dark:text-[#999]">{cap.p2}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function UnifiedEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const { designSystem } = useThemeCustomizer();
  
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-background text-[#111111] dark:text-white w-full flex flex-col pt-32 pb-16 overflow-hidden border-b border-[#d1d1d1] dark:border-[#333]" style={{ fontFamily: "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)" }}>
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col mt-12">
          
          <span className="text-[14px] font-bold tracking-[2px] uppercase text-[var(--primary)] mb-4">
            The Platform
          </span>
          <h1 className="text-[64px] md:text-[96px] font-bold leading-[0.95] tracking-[-0.04em] max-w-[900px] mb-8 uppercase text-[#111111] dark:text-white">
            One Platform.<br/>Zero Silos.
          </h1>
          <p className="text-[20px] font-medium leading-[1.4] max-w-[700px] text-[#555] dark:text-[#A6A6A6] mb-12">
            Every business function — hire to retire, lead to cash, procure to pay — flows through one sovereign architecture. No middleware, no glue code, no reconciliation tax.
          </p>

          <div className="mt-24 mb-16 border-t border-[#d1d1d1] dark:border-[#333] py-16">
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] tracking-[-0.03em] max-w-[800px] mb-8 uppercase text-[var(--primary)]">
              The silo is the problem. Not the symptom.
            </h2>
            <p className="text-[20px] font-medium leading-[1.4] max-w-[900px] text-[#555] dark:text-[#A6A6A6]">
              A typical enterprise runs payroll in one system, sales in another, finance in a third, and a small army of integrations and spreadsheets to keep them in rough agreement. Every silo is a copy of the truth that can drift from every other copy. QuGenie removes the silos rather than integrating them — one platform, one data model, one audit trail, every department.
            </p>
          </div>
        </div>

        {/* Sticky Sections Effect Wrapper */}
        <div className="relative w-full">
          {capabilities.map((cap, i) => (
            <StickyCard key={cap.id} cap={cap} index={i} total={capabilities.length} />
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center pb-0 -mb-24 px-6 relative" ref={containerRef}>
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] overflow-hidden pointer-events-none z-0">
        <img 
          src={heroBgFinal} 
          alt="Unified Ecosystem Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Dynamic theme color tint overlay */}
        <div className="absolute inset-0 bg-[var(--primary)] mix-blend-color opacity-100 pointer-events-none" />
        {/* Deep fade out to match the page background */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 bg-background/20" /> {/* Slight dark wash to ensure text readability */}
      </div>

      {/* Hero Section */}
      <div className="w-full min-h-[95vh] flex flex-col justify-center items-center relative z-10 pt-24 pb-12">
        <div className="w-full max-w-[800px] flex flex-col items-start md:items-center text-left md:text-center gap-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.2em] text-[var(--text-brand)] uppercase"
        >
          The Platform
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-medium tracking-tight text-[var(--text-heading)]"
        >
          One Platform. Zero Silos.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-subtle)] max-w-[650px] leading-relaxed"
        >
          Every business function — hire to retire, lead to cash, procure to pay — flows through one sovereign architecture. No middleware, no glue code, no reconciliation tax.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <button className="bg-[var(--brand-600)] hover:bg-[var(--brand-700)] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book a Free Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-[var(--surface-secondary)] hover:bg-[var(--surface-border)] text-[var(--text-heading)] border border-[var(--surface-border)] px-8 py-4 rounded-lg font-semibold transition-all">
            See agentic intelligence
          </button>
        </motion.div>
        </div>
      </div>

      {/* Problem Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[900px] -mt-4 -mb-32 relative group z-20"
      >
        <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
          <MaskContainer
            revealText={
              <div className="mx-auto max-w-4xl text-center flex flex-col gap-8">
                <h3 className="text-3xl md:text-5xl font-medium text-[var(--text-heading)] tracking-tight">
                  The silo is the problem. Not the symptom.
                </h3>
                <p className="text-lg md:text-xl text-[var(--text-body)] leading-relaxed font-normal">
                  A typical enterprise runs payroll in one system, sales in another, finance in a third, and a small army of integrations and spreadsheets to keep them in rough agreement. Every silo is a copy of the truth that can drift from every other copy. QuGenie removes the silos rather than integrating them — one platform, one data model, one audit trail, every department.
                </p>
              </div>
            }
            className="h-[40rem] text-white"
          >
            <div className="mx-auto max-w-4xl text-center flex flex-col gap-8">
              <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                The silo is the problem. Not the symptom.
              </h3>
              <p className="text-lg md:text-xl text-white leading-relaxed font-normal">
                A typical enterprise runs payroll in one system, sales in another, finance in a third, and a small army of integrations and spreadsheets to keep them in rough agreement. Every silo is a copy of the truth that can drift from every other copy. <span className="text-[var(--brand-300)] font-semibold">QuGenie removes the silos rather than integrating them — one platform, one data model, one audit trail, every department.</span>
              </p>
            </div>
          </MaskContainer>
        </div>
      </motion.div>

      {/* Capabilities List - Scroll Triggered Horizontal Scroll */}
      <div ref={scrollTargetRef} className="w-full relative h-[300vh] mt-0">
        <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden w-full">
          <motion.div 
            style={{ x }} 
            className="flex gap-6 w-[max-content] pl-6 md:pl-[max(2rem,calc((100vw-1200px)/2))] pr-24"
          >
            {capabilities.map((cap, index) => (
              <div 
                key={cap.id}
                className="w-[85vw] md:w-[42vw] lg:w-[45vw] h-[550px] md:h-[600px] xl:h-[680px] shrink-0 rounded-[28px] p-8 md:p-10 shadow-sm flex flex-col relative group border border-[var(--surface-border)] overflow-hidden bg-[var(--surface-card)]"
              >
                {/* Image-like Gradient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(150%_80%_at_50%_0%,var(--brand-600)_0%,transparent_70%)] opacity-80 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Bottom darkness overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface-card)] to-[#080c14] opacity-80 pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Header */}
                  <div className="flex items-center gap-2.5 text-white/90">
                    <cap.icon className="w-5 h-5 stroke-[2.5]" />
                    <span className="text-sm font-semibold tracking-wide">
                      CAPABILITY {cap.id}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-auto flex flex-col gap-6">
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.05] tracking-tight max-w-[95%]">
                      {cap.title}
                    </h4>
                    <div className="flex flex-col gap-3">
                      <p className="text-[var(--text-subtle)] text-sm md:text-base leading-relaxed max-w-[95%]">
                        {cap.p1}
                      </p>
                      <p className="text-[var(--text-subtle)] text-xs md:text-sm leading-relaxed max-w-[95%] opacity-70">
                        {cap.p2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
