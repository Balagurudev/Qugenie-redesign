import React from "react";
const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

interface EbaySolutionTemplateProps {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
}

export function EbaySolutionTemplate({ tagline, title, subtitle, description, features }: EbaySolutionTemplateProps) {
  return (
    <div className="bg-[#FAFAF9] text-[#111111] min-h-screen w-full flex flex-col pt-32 pb-32" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      
      {/* ── Bright Aesthetic Hero ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col mt-12 gap-4 relative">
        <span className="inline-block border border-[#d1d1d1] text-[#555] text-[11px] font-bold px-3 py-1 rounded-[6px] w-fit uppercase tracking-wider bg-white shadow-sm">
          {tagline}
        </span>
        <h1 className="text-[64px] md:text-[80px] font-serif leading-[1.05] tracking-tight max-w-[900px] text-[#111]">
          {title}
        </h1>
      </div>

      <div className="w-full mt-24 mb-16 overflow-hidden whitespace-nowrap opacity-5">
        <h2 className="text-[140px] font-serif font-bold leading-none tracking-tighter uppercase">
          {subtitle.substring(0, 50)}
        </h2>
      </div>

      {/* ── Split Copy Section ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <h2 className="text-[40px] md:text-[56px] font-serif leading-[1.1] tracking-tight text-[#111]">
          {subtitle}
        </h2>
        <div className="flex flex-col gap-8">
          <p className="text-[18px] font-medium leading-[1.6] text-[#555]">
            {description}
          </p>
          <button className="self-start bg-[#111] text-white border-none px-8 py-4 text-[16px] font-medium rounded-full hover:bg-[#333] transition-colors cursor-pointer">
            Book a Free Demo
          </button>
        </div>
      </div>

      {/* ── Staggered Features Grid ── */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const bgClass = idx % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#F2F4F7]";

            return (
              <div 
                key={idx} 
                className={`relative p-8 rounded-[24px] h-[280px] flex flex-col ${bgClass} transition-all hover:scale-[1.02] cursor-pointer group shadow-sm`}
              >
                <div className="flex-1">
                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-tight text-[#111] mb-3">{item.title}</h3>
                  <p className="text-[15px] font-medium leading-[1.5] text-[#666] group-hover:text-[#333] transition-colors">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
