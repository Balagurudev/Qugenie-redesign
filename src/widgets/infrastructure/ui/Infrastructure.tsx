import { ArrowRight, Server, Cloud } from "lucide-react";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

export function Infrastructure() {
  return (
    <CosmicBeamBackground beamPosition="top-left" beamIntensity="soft">
      <section
        style={{ width: "100%", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "center", padding: "80px 0" }}
        data-name="Deployment"
      >
        <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px", display: "flex", flexDirection: "column", gap: 48, zIndex: 10, position: "relative" }}>

        {/* Header */}
        <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>DEPLOYMENT</span>
        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2] text-center">
          Your infrastructure. Your call.
        </h2>
        <p style={{ fontFamily: FONT, fontSize: 18, fontWeight: 400, color: "var(--text-subtle)", lineHeight: 1.6, letterSpacing: "-0.015em", margin: "-32px 0 0 0" }}>
          Cloud SaaS for speed, on-premise for sovereignty — same platform, same data model, same audit trail.
        </p>

        {/* Two cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, fontFamily: FONT }}>
          {/* Local Server */}
          <div className="group flex flex-col gap-5 p-9 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-card)] shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-colors duration-500 hover:border-transparent cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(150%_80%_at_50%_0%,var(--brand-600)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[var(--icon-brand-bg)] text-[var(--icon-brand-color)] group-hover:bg-white/15 group-hover:text-white transition-colors duration-500">
                <Cloud size={24} />
              </div>
              <h3 className="text-[22px] font-semibold text-[var(--text-heading)] group-hover:text-white tracking-[-0.025em] leading-[1.2] m-0 transition-colors duration-500">CLOUD SAAS</h3>
              <p className="text-[15px] text-[var(--text-subtle)] group-hover:text-white/90 leading-[1.65] m-0 font-normal transition-colors duration-500">
                Managed by us, sovereign cloud in India — running in days, predictable monthly cost.
              </p>
            </div>
          </div>

          {/* Private Cloud */}
          <div className="group flex flex-col gap-5 p-9 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-card)] shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-colors duration-500 hover:border-transparent cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(150%_80%_at_50%_0%,var(--brand-600)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[var(--icon-brand-bg)] text-[var(--icon-brand-color)] group-hover:bg-white/15 group-hover:text-white transition-colors duration-500">
                <Server size={24} />
              </div>
              <h3 className="text-[22px] font-semibold text-[var(--text-heading)] group-hover:text-white tracking-[-0.025em] leading-[1.2] m-0 transition-colors duration-500">ON-PREMISE</h3>
              <p className="text-[15px] text-[var(--text-subtle)] group-hover:text-white/90 leading-[1.65] m-0 font-normal transition-colors duration-500">
                Your servers, your perimeter — complete data sovereignty, no vendor lock-in, air-gapped supported.
              </p>
            </div>
          </div>
        </div>

        {/* Link */}
        <button
          onClick={() => { window.location.hash = "#/platform/on-premise"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ fontFamily: FONT, display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--text-brand)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          Explore deployment guides <ArrowRight size={16} />
        </button>
        </div>
      </section>
    </CosmicBeamBackground>
  );
}

export default Infrastructure;
