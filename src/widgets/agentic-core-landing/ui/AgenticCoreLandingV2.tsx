import { ArrowRight, Sparkles, Shield, Link, Cpu } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const tiles = [
  { icon: Sparkles, title: "Active Insights", description: "Static Intelligence" },
  { icon: Shield, title: "Audits", description: "Context-Temporal Intelligence" },
  { icon: Link, title: "Autonomic", description: "Connected - Swarm Intelligence" },
  { icon: Cpu, title: "Embodied", description: "Physical - Embodied Intelligence" },
];

export function AgenticCoreLandingV2() {
  return (
    <CosmicBeamBackground beamPosition="bottom-right">
      <section
        style={{ width: "100%", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "center", padding: "80px 0" }}
        data-name="Agentic Core V2"
      >
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px", display: "flex", flexDirection: "column", gap: 48 }}>

        {/* Header */}
        <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>AI-DRIVEN ERP</span>
        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2] text-center">
          Unlock the power of agentic intelligence.
        </h2>
        <p style={{ fontFamily: FONT, fontSize: 18, fontWeight: 400, color: "var(--text-subtle)", lineHeight: 1.6, letterSpacing: "-0.015em", margin: "-32px 0 0 0" }}>
          Four pillars of intelligence, each reasoning over one sovereign data core — not chatbots, not autocomplete, but concrete operational signal.
        </p>

        {/* 4-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <BorderGlow
                key={i}
                className="w-full h-full"
                edgeSensitivity={36}
                glowColor="220 100 60"
                backgroundColor="#03010a"
                borderRadius={28}
                glowRadius={31}
                glowIntensity={2.1}
                coneSpread={25}
                animated={false}
                colors={['#5586ff', '#0040C1', '#002060']}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "28px", height: "100%", fontFamily: FONT }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>{t.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.65, letterSpacing: "-0.01em", margin: 0, fontWeight: 400 }}>{t.description}</p>
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>

        {/* Link */}
        <button
          onClick={() => { window.location.hash = "#/platform/agentic"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ fontFamily: FONT, display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--text-brand)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          See how agentic ERP works <ArrowRight size={16} />
        </button>
      </div>
    </section>
  </CosmicBeamBackground>
  );
}

export default AgenticCoreLandingV2;
