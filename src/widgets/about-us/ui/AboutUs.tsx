import { ArrowUpRight } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

export function AboutUs() {
  const platformItems = [
    "MODULAR, PLUGGABLE DESIGN",
    "SINGLE UNIFIED DATABASE",
    "WORKFLOW ENGINE & AUTOMATION",
    "CUSTOMISATION WITHOUT FORKING",
  ];

  return (
    <section
      className="w-full bg-[#03010a] text-white flex justify-center py-[100px]"
      data-name="Platform Overview"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-14">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-4">
            <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "#5586ff" }}>
              THE PLATFORM
            </span>
            <h2 style={{ fontFamily: FONT, fontSize: 56, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              One Platform.<br />Zero Silos.
            </h2>
          </div>
          <div className="flex flex-col gap-8 max-w-[400px]">
            <p style={{ fontFamily: FONT, fontSize: 18, color: "#a1a1aa", lineHeight: 1.6 }}>
              Every business function flows through one sovereign architecture — no middleware, no glue code, no reconciliation tax.
            </p>
            <button
              onClick={() => { window.location.hash = "#/platform/silos"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 text-white font-semibold text-[15px] border-b border-white pb-1 w-fit hover:opacity-80 transition-opacity"
            >
              Explore the platform architecture <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* 4 Buttons Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {platformItems.map((item, i) => (
            <div key={i} className="relative w-full h-[60px] rounded-[8px] overflow-hidden cursor-pointer group">
              <BorderGlow
                animated={true}
                loop={true}
                glowColor="#5586ff"
                backgroundColor="#0f111a"
                borderRadius={8}
                className="w-full h-full"
              >
                <div className="relative w-full h-full bg-[#0f111a] rounded-[7px] flex items-center justify-center text-center group-hover:bg-[#161925] transition-colors overflow-hidden">
                  {/* Smooth revolving inner beam effect (Hover) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[7px] overflow-hidden pointer-events-none">
                    {/* The ultra-bright conic gradient beam using exact colors from ai-loader */}
                    <div className="absolute top-1/2 left-1/2 w-[400px] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_250deg,#005dff_320deg,#38bdf8_360deg)]" />
                    {/* Inner mask to hollow out the beam, keeping it towards the edges */}
                    <div className="absolute inset-[1.5px] bg-[#161925] rounded-[6px]" />
                    {/* Add a bright static inner glow matching the deep blue for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_24px_rgba(0,93,255,0.4)] rounded-[7px]" />
                  </div>
                  
                  <span className="text-[13px] font-bold tracking-wider text-[#a1a1aa] uppercase z-20 px-4">
                    {item}
                  </span>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>


        {/* The Big Grid Card */}
        {/*
        <div className="relative w-full rounded-[16px] border border-[#1f2233] overflow-hidden mt-4 bg-[#050814] min-h-[500px] flex items-center shadow-2xl">

          <div className="absolute inset-0 flex justify-between px-16 pointer-events-none opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-full w-px bg-blue-400/20" />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-[var(--primary)]/20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-12 py-16 gap-12">

            <div className="flex flex-col gap-8 max-w-[420px]">
              <h3 className="text-left m-0 p-0" style={{ fontFamily: FONT, fontSize: 46, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#ffffff" }}>
                DATA SILOS ARE SLOWING YOU DOWN
              </h3>
              <p style={{ fontFamily: FONT, fontSize: 16, color: "#a1a1aa", lineHeight: 1.6 }}>
                Fragmented software, rigid middleware, and constant manual reconciliation are creating a massive tax on your operations.
              </p>
            </div>

            <div className="relative w-full md:w-[500px] h-[340px]">

              <div className="absolute top-[8%] right-[5%] bg-[#13162b] border border-[#2b345e] rounded-[8px] px-5 py-3 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-[14px] text-gray-200 font-medium tracking-wide">Reconciliation tax</span>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
              </div>

              <div className="absolute top-[36%] left-[2%] bg-[#13162b] border border-[#2b345e] rounded-[8px] px-5 py-3 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-[14px] text-gray-200 font-medium tracking-wide">Middleware overhead</span>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
              </div>

              <div className="absolute bottom-[26%] left-[10%] bg-[#13162b] border border-[#2b345e] rounded-[8px] px-5 py-3 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-[14px] text-gray-200 font-medium tracking-wide">Fragmented workflows</span>
                <div className="w-3 h-4 bg-gray-400 rounded-[2px]" />
              </div>

              <div className="absolute bottom-[2%] right-[5%] bg-[#13162b] border border-[#2b345e] rounded-[8px] px-5 py-3 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-[14px] text-gray-200 font-medium tracking-wide">Isolated data silos</span>
                <div className="w-3.5 h-3.5 border-2 border-gray-400 rounded-full" />
              </div>

            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

export default AboutUs;
