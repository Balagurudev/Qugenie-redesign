import { motion } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Brain, BarChart3, ShieldCheck, Zap, GitBranch, Eye, RefreshCw, Cpu, ArrowRight, Check, X } from "lucide-react";
import StackingCards from "@/widgets/stacking-cards/ui/StackingCards";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const pillars = [
  {
    num: "01", tag: "ACTIVE INTELLIGENCE", icon: Eye,
    title: "Active Insights",
    headline: "Read the state. Spot the anomaly.",
    p1: "Analytical signals surface the moment something changes — patterns, outliers, and threshold breaches. Alerts come pre-explained: not 'something looks weird,' but 'PO-2497 mismatches Invoice INV-003, rendering GST file inconsistent. Suggested action: hold payment or adjust reconciliation.'",
    p2: "Because every function writes to one database, the analytics engine reasons over a single truth — never reconciling conflicting reports. Signals arrive without delay, already carrying their own explanation and a recommended next action.",
    capabilities: ["Real-time ledger anomaly detection", "GST mismatch alerts with root cause", "Aging debt threshold monitoring", "Pre-explained signals, not raw data"],
  },
  {
    num: "02", tag: "CONTEXT-SENSITIVE INTELLIGENCE", icon: ShieldCheck,
    title: "Audits",
    headline: "Every change, traced through time.",
    p1: "Chained-hash audit ledger across every module. Reconstruct exactly what was true at any point in the past — who changed it, when, and why. Audit packs generated on-demand for statutory filings, board reviews, and external inspectors.",
    p2: "The platform treats time as a dimension, not a static record. Every record is chained and hashed, so the historical record is tamper-proof by construction. An audit is a routine, zero-downtime query — not a penalty.",
    capabilities: ["Tamper-proof chained-hash ledger", "Point-in-time state reconstruction", "On-demand statutory audit packs", "Zero-downtime compliance queries"],
  },
  {
    num: "03", tag: "AUTONOMIC PROCESS INTELLIGENCE", icon: GitBranch,
    title: "Autonomic",
    headline: "Workflows that run themselves.",
    p1: "Approval routing, escalations, notifications, reconciliation — all engine-driven, not human-driven. Cross-module workflows coordinate without manual intervention. Define policy once; the platform applies it everywhere.",
    p2: "The workflow engine sits inside the unified core rather than bolted on as middleware. A process started in one module completes in another with no integration gaps. Humans are escalated to — they no longer route.",
    capabilities: ["Policy-driven approval routing", "Cross-module workflow coordination", "Automated escalation & notifications", "Zero-gap process handoffs"],
  },
  {
    num: "04", tag: "PHYSICAL-DATABASE INTEGRATION", icon: Cpu,
    title: "Embedded",
    headline: "From software to substance.",
    p1: "Native integration with biometric attendance, IoT sensors, barcode and QR systems, edge devices, and local financial floor agents. Operations flow directly into the database without an integration layer.",
    p2: "Physical-Embedded intelligence closes the loop between the operational record and the operational world. Attendance, inventory movement, and delivery dispatch register as first-class events — not after-the-fact entries.",
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

export default function PlatformAgentic() {
  const nav = (hash: string) => { window.location.hash = hash; window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px]" style={{ fontFamily: FONT }} data-name="AIERPPage">
      {/* ── HERO ── */}
      <section className="w-full max-w-[1120px] mx-auto px-6 pt-[60px] pb-[80px] flex flex-col gap-6 relative z-10 items-start text-left">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-[#0040C1] text-[12px] font-bold tracking-[4px] uppercase block">
          AI-DRIVEN ERP
        </motion.span>
        
        <div className="w-full flex flex-col justify-start items-start">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-left text-[44px] md:text-[56px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-medium tracking-tight leading-[1.1] text-foreground max-w-[900px] mt-4 mb-6 m-0 p-0 uppercase">
            Unlock the power of agentic intelligence.
          </motion.h1>
        </div>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-[18px] md:text-[20px] leading-[30px] text-muted-foreground max-w-[800px]">
          Four pillars of intelligence, each reasoning over one sovereign data core — not chatbots, not autocomplete, but concrete operational signal.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="flex flex-wrap gap-4 mt-2 justify-start">
          <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => nav("#/contact")}
            className="bg-[#0040C1] text-white font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(0,64,193,0.3)] transition-all flex items-center gap-2">
            Book a Free Demo <ArrowRight size={16} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => nav("#/platform/silos")}
            className="bg-transparent text-foreground border border-border font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer hover:bg-secondary transition-all">
            See the platform architecture
            </motion.button>
          </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
          className="mt-16 w-full flex flex-col gap-10 bg-card/30 rounded-[24px] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none blur-[80px]" />
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start relative z-10">
            <h3 className="text-[32px] md:text-[44px] font-semibold text-foreground max-w-[400px] leading-[1.1] tracking-[-0.02em]">
              Four pillars, one architecture.
            </h3>
            <p className="text-[16px] md:text-[18px] leading-[28px] text-muted-foreground max-w-[540px]">
              Most ERP vendors bolt a chat assistant onto a legacy data model and call it AI. QuGenie inverts that. Intelligence is part of the architecture — four distinct pillars, each reasoning over the same canonical store, each producing a concrete operational outcome rather than a conversational one.
            </p>
          </div>

        </motion.div>
      </section>

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
