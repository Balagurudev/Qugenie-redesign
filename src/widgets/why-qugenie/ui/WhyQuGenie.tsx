import { ShieldCheck, Coins, BookOpenCheck, PackagePlus, EyeOff, Gauge } from "lucide-react";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const reasons = [
  { icon: ShieldCheck, title: "Sovereign Node Ownership", description: "You own the server, you own the database. Deploy on your local infrastructure or private cloud. Zero vendor lock-in." },
  { icon: Coins, title: "Zero License Fees Forever", description: "No monthly subscriptions or per-user taxes. Pay once for implementation and updates, run freely." },
  { icon: BookOpenCheck, title: "Audit-Ready by Design", description: "Double-entry financial records and comprehensive compliance engines keep your business audit-proof." },
  { icon: PackagePlus, title: "Modular Expansion Path", description: "Install only what you need today. Add inventory, payroll, or CRM tomorrow with a single-click." },
  { icon: EyeOff, title: "Sovereign AI Core", description: "Your private local AI models analyze financial logs and automate workflows. Your business intelligence never leaves your site." },
  { icon: Gauge, title: "Lightning Fast Speed", description: "A lightweight Go/React stack designed to run beautifully on modest server infrastructure. No bloated enterprise lag." },
];

export function WhyQuGenie() {
  return (
    <section
      className="w-full bg-[#03010a] text-white flex flex-col items-center py-[100px]"
      data-name="Why QuGenie"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center gap-16">

        {/* Top Centered Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[800px]">
          <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#5586ff" }}>
            WHY QUGENIE
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2] text-center">
            Six reasons QuGenie wins where the giants stall.
          </h2>
          <p style={{ fontFamily: FONT, fontSize: 18, fontWeight: 400, color: "#8B949E", lineHeight: 1.6, letterSpacing: "-0.015em", maxWidth: "700px" }}>
            Traditional ERPs require long consultants, massive licensing budgets, and years to deploy. We built a system that shifts the power back to you.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-[#1f2233] gap-[1px] border border-[#1f2233] rounded-[16px] overflow-hidden shadow-2xl">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div 
                key={i} 
                className="group relative flex flex-col items-center text-center gap-6 p-12 bg-[#050814] hover:bg-[#080b1a] transition-colors duration-300 overflow-hidden"
              >
                {/* Volumetric Glow Beam (Top center) */}
                <div className="absolute top-0 left-0 w-full h-[280px] bg-[radial-gradient(100%_100%_at_top_center,_rgba(85,134,255,0.25)_0%,_rgba(21,94,239,0.05)_50%,_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Top Border Stroke - Layer 1 (Wide soft blue) */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#155EEF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Top Border Stroke - Layer 2 (Bright core blue) */}
                <div className="absolute top-0 left-[20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#5586ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top Border Stroke - Layer 3 (Intense white glare) */}
                <div className="absolute top-0 left-[35%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_12px_3px_rgba(85,134,255,0.8)]" />

                <div className="flex items-center justify-center text-[#8B949E] group-hover:text-white transition-colors duration-500 z-10">
                  <Icon size={26} strokeWidth={1.25} />
                </div>
                
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <h3 style={{ fontFamily: FONT, fontSize: 19, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: FONT, fontSize: 14, color: "#8B949E", lineHeight: 1.65, letterSpacing: "-0.01em", margin: 0, fontWeight: 400 }}>
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyQuGenie;
