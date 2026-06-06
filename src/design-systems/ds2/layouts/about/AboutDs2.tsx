import FlowArt, { FlowSection } from "@/components/ui/flow-art";
import { TeamCardExpansion } from "@/components/ui/card-expansion";
import type { AboutContent } from "@/content/about.content";

export function AboutEbay({ content }: { content: typeof AboutContent }) {
  return (
    <div className="text-[#111] dark:text-white w-full overflow-x-hidden" style={{ fontFamily: "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)" }}>
      <FlowArt>
        {/* Hero Section */}
        <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] border-b border-[#E5E5E5] dark:border-[#222]">
          <div className="flex flex-col gap-4 mt-24">
            <span className="text-[14px] leading-[20px] font-bold tracking-[2px] uppercase text-[var(--primary)]">
              {content.hero.tag}
            </span>
            <h1 className="text-[60px] leading-[72px] md:text-[72px] md:leading-[90px] font-bold tracking-[-0.04em] max-w-[900px] uppercase text-[#111] dark:text-white">
              {content.hero.title}
            </h1>
          </div>
          <p className="text-[20px] leading-[30px] font-medium max-w-[800px] text-[#555] dark:text-[#A6A6A6]">
            {content.hero.description}
          </p>
        </FlowSection>

        {/* Vision Section */}
        <FlowSection className="bg-white dark:bg-[#0a0a0a] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#333]">
          <div className="flex flex-col gap-4">
            <span className="text-[14px] leading-[20px] font-bold tracking-[2px] uppercase text-[var(--primary)] block">
              {content.vision.tag}
            </span>
            <h2 className="text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] lg:text-[60px] lg:leading-[72px] font-sans font-medium tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#111] to-[#666] dark:from-white dark:to-[#8a93a2] max-w-[900px]">
              {content.vision.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px]">
            {content.vision.points.map((item, idx) => (
              <div key={idx} className="bg-[#FAFAF9] dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] p-8 flex flex-col min-h-[280px]">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#222] text-[#111] dark:text-white font-bold mb-auto">
                  {item.stat}
                </div>
                <div className="mt-auto pt-12">
                  <h4 className="text-[24px] leading-[32px] font-bold tracking-tight mb-2 text-[#111] dark:text-white">{item.label}</h4>
                  <p className="text-[16px] leading-[24px] text-[#555] dark:text-[#A6A6A6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* Mission Section */}
        <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#222]">
          <div className="flex flex-col gap-4">
            <span className="text-[14px] leading-[20px] font-bold tracking-[2px] uppercase text-[var(--primary)] block">
              {content.mission.tag}
            </span>
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[38px] font-medium max-w-[800px] text-[#555] dark:text-[#A6A6A6]">
              {content.mission.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px]">
            {content.mission.points.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] p-8 flex flex-col min-h-[280px]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F5F5F5] dark:bg-[#222] text-[#111] dark:text-white font-bold mb-auto">
                  {item.stat}
                </div>
                <div className="mt-auto pt-12">
                  <h4 className="text-[24px] leading-[32px] font-bold tracking-tight mb-2 text-[#111] dark:text-white">{item.label}</h4>
                  <p className="text-[16px] leading-[24px] text-[#555] dark:text-[#A6A6A6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* Founders Section */}
        <FlowSection className="bg-white dark:bg-[#0a0a0a] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#333]">
           <div className="w-full h-full flex flex-col justify-center">
               <TeamCardExpansion items={content.founders.items} sectionTitle={content.founders.title} subtitle={content.founders.subtitle} designSystem="ebay" />
           </div>
        </FlowSection>

        {/* Team Section */}
        <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#222]">
           <div className="w-full h-full flex flex-col justify-center">
               <TeamCardExpansion items={content.team.items} sectionTitle={content.team.title} designSystem="ebay" />
           </div>
        </FlowSection>

      </FlowArt>
    </div>
  );
}
