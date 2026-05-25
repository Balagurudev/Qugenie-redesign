import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Blocks, Database, Workflow, SlidersHorizontal } from "lucide-react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

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

export function UnifiedEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="w-full flex flex-col items-center pt-24 pb-0 -mb-24 px-6 relative" ref={containerRef}>
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(0,64,193,0.15)] via-transparent to-transparent pointer-events-none" />

      {/* Hero Section */}
      <div className="w-full max-w-[800px] flex flex-col items-start md:items-center text-left md:text-center gap-6 relative z-10 mb-20">
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
