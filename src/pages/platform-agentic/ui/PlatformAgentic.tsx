import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Footer } from "@/widgets/footer/ui/Footer";
import Lenis from "lenis";
import { Brain, BarChart3, ShieldCheck, Zap, GitBranch, Eye, RefreshCw, Cpu, ArrowRight, ArrowDown, Check, X, ArrowUpRight } from "lucide-react";
import StackingCards from "@/widgets/stacking-cards/ui/StackingCards";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const ScrollRevealText = ({ text, className }: { text: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"]
  });

  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline-flex", flexWrap: "wrap", columnGap: "0.25em" }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <motion.span key={i} style={{ opacity }}>
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

const pillars = [
  {
    num: "01", tag: "STATIC INTELLIGENCE", icon: Eye,
    title: "Active Insights",
    headline: "Read the state. Spot the anomaly.",
    p1: "Cross-module analytical signals surface the moment something diverges from policy or pattern. Receivables ageing past threshold. Leave balances out of band. GST Input mismatched. Alerts come pre-explained — not 'something looks weird', but 'PO-2487 mismatched against Invoice-INV-993, vendor MSME flag inconsistent, suggested action: hold payment until reconciled.'",
    p2: "Static Intelligence reads the present state of the business across every module at once. Because every function writes to one canonical store, the analytical layer never has to reconcile conflicting copies — it reasons over a single truth. The result is signal that arrives where work happens, already carrying its own explanation and a recommended next action.",
    capabilities: ["Real-time ledger anomaly detection", "GST mismatch alerts with root cause", "Aging debt threshold monitoring", "Pre-explained signals, not raw data"],
  },
  {
    num: "02", tag: "CONTEXT-TEMPORAL INTELLIGENCE", icon: ShieldCheck,
    title: "Audits",
    headline: "Every change, traced through time.",
    p1: "Chained-hash audit ledger across every module. Reconstruct exactly what was true at any point in the past — who changed it, when, and why. Audit packs generated on demand for statutory filings, board reviews, and external assurance. Compliance teams stop fearing audits and start running them as routine sanity checks.",
    p2: "Context-Temporal Intelligence treats context and time as a single fabric — the platform does not just know what is true, it knows what was true, and the path between the two. Every mutation is chained and hashed, so the historical record is tamper-evident by construction. An audit stops being a quarterly fire-drill and becomes a query.",
    capabilities: ["Tamper-proof chained-hash ledger", "Point-in-time state reconstruction", "On-demand statutory audit packs", "Zero-downtime compliance queries"],
  },
  {
    num: "03", tag: "CONNECTED - SWARM INTELLIGENCE", icon: GitBranch,
    title: "Autonomic",
    headline: "Workflows that run themselves.",
    p1: "Approval routing, escalation, notification, reconciliation — engine-driven, not human-driven. Cross-module workflows coordinate without manual orchestration. Define policy once; the platform applies it everywhere. Leave requests, expense claims, credit approvals, and statutory filings flow through their own paths while humans focus on the exceptions.",
    p2: "Connected - Swarm Intelligence is the coordination layer: many small policy-driven processes acting in concert without a human conductor. Because the workflow engine sits inside the unified core rather than bolted on as middleware, a process started in one module completes in another with no integration seam. Humans are escalated to — they no longer route.",
    capabilities: ["Policy-driven approval routing", "Cross-module workflow coordination", "Automated escalation & notifications", "Zero-gap process handoffs"],
  },
  {
    num: "04", tag: "PHYSICAL - EMBODIED INTELLIGENCE", icon: Cpu,
    title: "Embodied",
    headline: "From software to substance.",
    p1: "Native integration with biometric attendance, IoT sensors, barcode and QR systems, edge devices, and (soon) humanoid floor agents. Operational reality flows into the data layer without an integration tax. The ERP isn't a passive recorder of what happened — it senses, acts, and learns at the edge.",
    p2: "Physical - Embodied Intelligence closes the loop between the operational record and the operational world. Attendance, inventory movement, sensor telemetry and floor activity enter the data layer as first-class events, not after-the-fact imports. The platform perceives the business as it actually runs — and increasingly, acts back on it.",
    capabilities: ["Biometric & IoT direct integration", "Barcode/QR first-class events", "Edge device data ingestion", "No middleware integration layer"],
  },
];

const capabilities = [
  { icon: Brain, title: "Structural AI", desc: "Intelligence built into the database core — not layered on top as a chatbot." },
  { icon: BarChart3, title: "Live Analytics", desc: "Real-time dashboards update as transactions happen across every department." },
  { icon: RefreshCw, title: "Self-Routing Workflows", desc: "Approvals, escalations, and reconciliation run automatically on defined policy." },
  { icon: Zap, title: "Instant Signal", desc: "Anomalies surface in milliseconds with an explanation and suggested action." },
  { icon: ShieldCheck, title: "Tamper-Proof Audit", desc: "Every record is hash-chained. No entry can be silently altered." },
  { icon: Eye, title: "Unified Visibility", desc: "One database. Every department. No reconciliation between conflicting reports." },
];

const comparisonRows = [
  { feature: "Intelligence model", traditional: "Bolt-on chatbot / BI layer", qugenie: "Structural — built into the database core" },
  { feature: "Anomaly detection", traditional: "Manual review or scheduled reports", qugenie: "Continuous, real-time, pre-explained alerts" },
  { feature: "Audit trail", traditional: "Separate log table, easily bypassed", qugenie: "Tamper-proof chained-hash ledger" },
  { feature: "Workflow automation", traditional: "Middleware / third-party integration", qugenie: "Native engine inside the unified core" },
  { feature: "Physical integration", traditional: "Custom connectors required", qugenie: "Biometric, IoT, QR — first-class events" },
  { feature: "Data source", traditional: "Multiple siloed databases", qugenie: "Single sovereign ledger — one truth" },
  { feature: "Alert quality", traditional: "'Something changed'", qugenie: "Root cause + recommended action included" },
];

const stats = [
  { value: "4", label: "Intelligence Pillars" },
  { value: "1", label: "Sovereign Database" },
  { value: "0", label: "Integration Tax" },
  { value: "∞", label: "Audit Depth" },
];

const AIERPHeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-[#020614] pointer-events-none">
    {/* Deep background ambient light */}
    <div className="absolute top-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_#0B2466_0%,_transparent_75%)] opacity-90" />
    
    {/* Top Right intense light flare */}
    <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#004EEB] opacity-50 blur-[100px]" />
    <div className="absolute top-[-5%] right-[-5%] w-[30%] aspect-square rounded-full bg-[#2986FF] opacity-80 blur-[60px]" />
    <div className="absolute top-[-5%] right-[-2%] w-[15%] aspect-square rounded-full bg-[#FFFFFF] opacity-100 blur-[20px]" />
    
    {/* Sharp Diagonal Light Rays (Lens Flare) */}
    <div className="absolute top-[-5%] right-[10%] w-[40%] h-[2px] bg-white opacity-50 blur-[2px] rotate-[-35deg]" />
    <div className="absolute top-[5%] right-[-5%] w-[2px] h-[50%] bg-white opacity-50 blur-[2px] rotate-[-35deg]" />
    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-[linear-gradient(215deg,_rgba(255,255,255,0.2)_0%,_transparent_20%)] blur-[4px]" />

    {/* The High-Resolution Glowing Arches */}
    <div className="absolute bottom-0 left-0 right-0 h-[100%] opacity-90 mix-blend-screen">
      <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="arch-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="10%" stopColor="#00D4FF" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#1B52EB" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#020614" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 5 Layered Concentric Arches for high fidelity depth */}
        <circle cx="720" cy="1150" r="600" fill="none" stroke="url(#arch-grad)" strokeWidth="60" className="blur-[4px]" />
        <circle cx="720" cy="1150" r="700" fill="none" stroke="url(#arch-grad)" strokeWidth="80" className="blur-[6px]" />
        <circle cx="720" cy="1150" r="820" fill="none" stroke="url(#arch-grad)" strokeWidth="100" className="blur-[8px]" />
        <circle cx="720" cy="1150" r="960" fill="none" stroke="url(#arch-grad)" strokeWidth="120" className="blur-[12px]" />
        <circle cx="720" cy="1150" r="1120" fill="none" stroke="url(#arch-grad)" strokeWidth="140" className="blur-[16px]" />
      </svg>
    </div>

    {/* Fade out to background */}
    <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-background to-transparent" />
  </div>
);

export default function PlatformAgentic() {
  const { designSystem } = useThemeCustomizer();
  const nav = (hash: string) => { window.location.hash = hash; window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (designSystem === "ebay") {
    return <EbayAgenticLayout />;
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-white" style={{ fontFamily: FONT }} data-name="AIERPPage">
      {/* ── HERO ── */}
      <div className="relative w-full min-h-[95vh] flex flex-col justify-center pt-[120px] pb-[80px]">
        <AIERPHeroBackground />
        <section className="w-full max-w-[1120px] mx-auto px-6 flex flex-col gap-6 relative z-10 items-start text-left">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-[#0040C1] text-[12px] font-bold tracking-[4px] uppercase block">
            AI-DRIVEN ERP
          </motion.span>
          
          <div className="w-full flex flex-col justify-start items-start">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="text-left text-[44px] md:text-[56px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-medium tracking-tight leading-[1.1] text-white max-w-[900px] mt-4 mb-6 m-0 p-0 uppercase">
              Unlock the power of agentic intelligence.
            </motion.h1>
          </div>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-[17px] md:text-[19px] leading-[28px] text-zinc-300 max-w-[700px] font-light">
            Four pillars of intelligence, each reasoning over one sovereign data core — not chatbots, not autocomplete, but concrete operational signal.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="flex flex-wrap gap-4 mt-2 justify-start">
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => nav("#/contact")}
              className="bg-[#0040C1] text-white font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(0,64,193,0.3)] transition-all flex items-center gap-2">
              Book a Free Demo <ArrowRight size={16} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => nav("#/platform/silos")}
              className="bg-transparent text-white border border-[#ffffff33] font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer hover:bg-[#ffffff11] transition-all">
              See the platform architecture
            </motion.button>
          </motion.div>

        </section>
      </div>

      {/* ── ARCHITECTURE - STACKING CARDS ── */}
      <section style={{ width: "100%" }}>
        <StackingCards
          pillars={pillars.map(p => {
            const Icon = p.icon;
            function IconWrapper({ size }: { size?: number }) {
              return <Icon size={size} />;
            }
            IconWrapper.displayName = `IconWrapper-${p.title}`;
            return { num: p.num, tag: p.tag, icon: IconWrapper, title: p.title, headline: p.headline, p1: p.p1, p2: p.p2, capabilities: p.capabilities };
          })}
        />
      </section>

      {/* ── HOW IT WORKS ── */}
      {/* <section style={{ width: "100%", background: "var(--surface-secondary)", borderTop: "1px solid var(--surface-divider)", borderBottom: "1px solid var(--surface-divider)", padding: "80px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 48, fontFamily: FONT }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>HOW IT WORKS</span>
            <h2 style={{ fontSize: 40, fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.15, letterSpacing: "-0.03em", margin: "12px 0 8px 0" }}>
              Not a chatbot. Not autocomplete.
            </h2>
            <p style={{ fontSize: 18, color: "var(--text-subtle)", lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
              A chatbot waits to be asked. Agentic intelligence does not. The four pillars run continuously behind the database whether or not anyone is looking at a screen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { step: "01", title: "Every transaction enters one ledger", body: "HR, Finance, Inventory, Sales — every department writes to the same sovereign database. There is no reconciliation across systems because there is only one system." },
              { step: "02", title: "Active Intelligence monitors continuously", body: "The analytics engine scans state in real time. When a threshold is crossed or an anomaly is detected, it surfaces a pre-explained alert — not a raw data point." },
              { step: "03", title: "Autonomic engine routes actions", body: "Workflow policies defined once apply everywhere. Approvals, escalations, and cross-module handoffs happen automatically. Humans are called in for decisions, not routing." },
              { step: "04", title: "Audit ledger records everything permanently", body: "Every change is chained and hashed. The historical record is tamper-proof. Compliance is a query, not a project." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: "flex", gap: 20, padding: 28, borderRadius: 16, border: "1px solid var(--surface-border)", background: "var(--surface-card)" }}>
                <div style={{ flexShrink: 0, fontSize: 32, fontWeight: 700, color: "var(--text-brand)", lineHeight: 1, opacity: 0.5, minWidth: 40 }}>{item.step}</div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-heading)", margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--text-subtle)", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── STRUCTURAL VS ADDITIVE ── */}
      {/* <section style={{ width: "100%", maxWidth: 1120, padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", fontFamily: FONT }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>STRUCTURAL AI</span>
          <h2 style={{ fontSize: 36, fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.2, letterSpacing: "-0.03em", margin: 0 }}>
            The intelligence and the system of record are the same thing.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-subtle)", lineHeight: 1.7, margin: 0 }}>
            Because the intelligence is structural rather than additive, there is no integration tax, no separate pipeline, and no gap between what the assistant knows and what the system holds.
          </p>
          <button onClick={() => nav("#/contact")} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--text-brand)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            Talk to our team <ArrowRight size={15} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "Additive AI (chatbot layer)", pct: 35, bad: true },
            { label: "Integration tax", pct: 55, bad: true },
            { label: "Data latency", pct: 48, bad: true },
            { label: "QuGenie structural AI", pct: 95, bad: false },
            { label: "Single source of truth", pct: 100, bad: false },
          ].map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 500 }}>
                <span style={{ color: "var(--text-body)" }}>{bar.label}</span>
                <span style={{ color: bar.bad ? "#f97066" : "var(--icon-brand-color)" }}>{bar.bad ? `${bar.pct}% overhead` : `${bar.pct}% coverage`}</span>
              </div>
              <div style={{ height: 6, borderRadius: 99, background: "var(--surface-border)", overflow: "hidden" }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }}
                  style={{ height: "100%", borderRadius: 99, background: bar.bad ? "#f97066" : "var(--text-brand)" }} />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <Newsletter 
        title="See AI ERP reasoning over your own operational data."
        description="Book a live session where we run QuGenie against your actual workflows — HR, Finance, Inventory, or all three."
        buttonText="Book a Free Demo"
        onButtonClick={() => nav("#/contact")}
        secondaryButtonText="Explore Architecture"
        onSecondaryButtonClick={() => nav("#/platform/silos")}
      />

      <Footer />
    </div>
  );
}

function EbayAgenticLayout() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine active index based on immediate scroll progress (no lag)
    if (latest < 0.25) setOpenIndex(0);
    else if (latest < 0.5) setOpenIndex(1);
    else if (latest < 0.75) setOpenIndex(2);
    else setOpenIndex(3);
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#FAFAF9] dark:bg-background text-[#111111] dark:text-white min-h-screen w-full flex flex-col pt-32 pb-32" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      
      {/* ── Top Header ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col gap-6 items-start mb-16 md:mb-24">
        <span className="inline-flex items-center gap-2 border border-[#d1d1d1] dark:border-[#333] text-[#555] dark:text-[#A6A6A6] text-[11px] font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest bg-white dark:bg-[#111111] shadow-sm">
          <div className="w-1.5 h-1.5 bg-[#111] rounded-full" />
          AI-DRIVEN ERP
        </span>
        <h1 className="text-[52px] md:text-[80px] font-serif leading-[1] tracking-tight text-[#111] dark:text-white max-w-[800px] uppercase">
          Unlock the power of <span className="text-[#999] dark:text-[#A6A6A6]">agentic intelligence.</span>
        </h1>
        <p className="text-[18px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[700px] mt-2">
          Four pillars of intelligence. Four operational outcomes. Not chatbots, not autocomplete — concrete signal that surfaces exactly where you act on it, reasoning over a single sovereign data core.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <button className="bg-[var(--primary)] text-white font-medium text-[15px] px-[26px] py-[14px] rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2" onClick={() => window.location.hash = "#/contact"}>
            Book a Free Demo <ArrowRight size={16} />
          </button>
          <button className="bg-white dark:bg-[#111111] text-[#111] dark:text-white border border-[#d1d1d1] dark:border-[#333] font-medium text-[15px] px-[26px] py-[14px] rounded-full cursor-pointer hover:bg-[#f5f5f5] transition-colors" onClick={() => window.location.hash = "#/platform/silos"}>
            See the platform architecture
          </button>
        </div>
      </div>

      {/* ── Architecture Overview ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 mt-4 mb-24">
        <div className="max-w-[800px]">
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[#111] dark:text-white mb-6">
            <ScrollRevealText text="Four pillars, one architecture." />
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#555] dark:text-[#A6A6A6]">
            <ScrollRevealText text="Most ERP vendors bolt a chat assistant onto a legacy data model and call it AI. QuGenie inverts that. Intelligence is part of the architecture — four distinct pillars, each reasoning over the same canonical store, each producing a concrete operational outcome rather than a conversational one. Static reads the present. Context-Temporal reconstructs the past. Connected - Swarm coordinates the flow. Physical - Embodied closes the loop with the real world." />
          </p>
        </div>
      </div>

      {/* ── Scroll Controlled Accordion ── */}
      <div ref={containerRef} className="relative w-full h-[300vh]">
        <div className="sticky top-[120px] w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col border-t border-[#e5e5e5]">
          {pillars.map((p, i) => {
            const isOpen = openIndex === i;
            const Icon = p.icon;

            return (
              <div key={i} className="border-b border-[#e5e5e5] flex flex-col transition-colors duration-1000">
                {/* Header Row */}
                <button 
                  onClick={() => setOpenIndex(i)}
                  className={`w-full flex flex-col md:flex-row items-start md:items-center text-left py-8 md:py-12 cursor-pointer bg-transparent border-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'hidden' : 'flex hover:pl-4'}`}
                >
                  <div className="w-[80px] shrink-0 text-[16px] font-bold mb-4 md:mb-0">{p.num}</div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-24 w-full">
                    <span className="text-[11px] font-bold tracking-widest text-[#999] dark:text-[#A6A6A6] uppercase w-auto md:w-[200px] shrink-0">{p.tag}</span>
                    <h2 className="text-[32px] md:text-[44px] font-medium tracking-tight text-[#555] dark:text-[#A6A6A6]">{p.title}</h2>
                  </div>
                  <ArrowUpRight size={28} className="text-[#111] dark:text-white shrink-0 mt-4 md:mt-0 self-end md:self-auto hidden md:block" />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="w-full bg-[#F5F5F5] rounded-[24px] p-6 md:p-12 my-6 flex flex-col lg:flex-row gap-8 lg:gap-24 relative shadow-sm border border-[#ebebeb]">
                        


                        {/* Right: Text Content */}
                        <div className="flex-1 flex flex-col pt-4">
                          <div className="absolute top-10 left-6 md:left-12 flex gap-1">
                            <span className="text-[#999] dark:text-[#A6A6A6] text-[14px]">/</span>
                            <span className="text-[#111] dark:text-white font-bold text-[14px]">{p.num}</span>
                          </div>

                          <div className="flex flex-col gap-2 mt-4 lg:mt-0">
                            <span className="text-[11px] font-bold tracking-widest text-[#999] dark:text-[#A6A6A6] uppercase">{p.tag}</span>
                            <h2 className="text-[40px] md:text-[52px] font-medium tracking-tight leading-[1.1] text-[#111] dark:text-white">{p.title}</h2>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-6">
                            {p.capabilities.map((cap, j) => (
                              <span key={j} className="bg-white dark:bg-[#111111] border border-[#e5e5e5] text-[#555] dark:text-[#A6A6A6] px-4 py-2 rounded-full text-[12px] font-bold shadow-sm">
                                {cap}
                              </span>
                            ))}
                          </div>

                          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[600px] mt-8">
                            {p.p1}
                          </p>
                          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[600px] mt-4 mb-16">
                            {p.p2}
                          </p>

                          <div className="mt-auto self-start lg:absolute lg:bottom-12 lg:right-12">
                             <button className="bg-[var(--primary)] text-white px-8 py-3.5 rounded-full font-medium text-[14px] hover:opacity-90 transition-opacity cursor-pointer border-none shadow-md" onClick={() => window.location.hash = "#/contact"}>
                               Book a Free Demo
                             </button>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </div>

      {/* ── Conclusion Section ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 mt-24 mb-16 pt-16 border-t border-[#e5e5e5]">
        <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight text-[#111] dark:text-white max-w-[400px] leading-[1.1]">
          This is not a chat assistant bolted onto an ERP.
        </h2>
        <div className="flex-1 flex flex-col gap-6 text-[16px] md:text-[18px] leading-[1.6] text-[#555] dark:text-[#A6A6A6]">
          <p>
            A chatbot waits to be asked. Agentic intelligence does not. The four pillars run continuously against the live data core — surfacing signal, tracing history, routing workflow, and sensing the floor — whether or not anyone is looking at a screen.
          </p>
          <p>
            Because the intelligence is architectural rather than additive, there is no integration tax, no separate AI data pipeline, and no gap between what the assistant knows and what the system knows. The intelligence and the system of record are the same thing.
          </p>
        </div>
      </div>

    </div>
  );
}
