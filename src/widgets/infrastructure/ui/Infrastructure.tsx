import { ArrowRight, Server, Cloud } from "lucide-react";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";
import BorderGlow from "@/components/ui/border-glow";

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
          <BorderGlow
            className="w-full h-full cursor-pointer"
            edgeSensitivity={40}
            glowColor="220 100 60"
            backgroundColor="#050610"
            borderRadius={24}
            glowRadius={35}
            glowIntensity={2.5}
            coneSpread={30}
            animated={false}
            colors={['#4096ff', '#0040C1', '#001a4d']}
          >
            <div className="group relative z-10 flex flex-col gap-5 p-9 h-full">
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-white/5 text-white/90 border border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Cloud size={24} className="stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <h3 className="text-[22px] font-semibold text-white tracking-[-0.025em] leading-[1.2] m-0">CLOUD SAAS</h3>
                <p className="text-[15px] text-white/60 leading-[1.65] m-0 font-normal group-hover:text-white/80 transition-colors">
                  Managed by us, sovereign cloud in India — running in days, predictable monthly cost.
                </p>
              </div>
            </div>
          </BorderGlow>

          {/* Private Cloud */}
          <BorderGlow
            className="w-full h-full cursor-pointer"
            edgeSensitivity={40}
            glowColor="220 100 60"
            backgroundColor="#050610"
            borderRadius={24}
            glowRadius={35}
            glowIntensity={2.5}
            coneSpread={30}
            animated={false}
            colors={['#4096ff', '#0040C1', '#001a4d']}
          >
            <div className="group relative z-10 flex flex-col gap-5 p-9 h-full">
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-white/5 text-white/90 border border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Server size={24} className="stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <h3 className="text-[22px] font-semibold text-white tracking-[-0.025em] leading-[1.2] m-0">ON-PREMISE</h3>
                <p className="text-[15px] text-white/60 leading-[1.65] m-0 font-normal group-hover:text-white/80 transition-colors">
                  Your servers, your perimeter — complete data sovereignty, no vendor lock-in, air-gapped supported.
                </p>
              </div>
            </div>
          </BorderGlow>
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
