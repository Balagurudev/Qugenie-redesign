import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";
import { PixelCanvas } from "@/shared/ui/pixel-logo-grid";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const solutions = [
  { title: "HRMS", description: "Hire to retire — profiles, attendance, payroll, performance, appraisals.", linkHash: "#/solutions/hrms" },
  { title: "Sales, CRM & E-Commerce", description: "Lead to cash — pipelines, quotations, orders, invoices, storefront.", linkHash: "#/solutions/sales" },
  { title: "Finance & Accounts", description: "GL, AR, AP, banking, taxation, e-invoicing — real-time, audit-ready.", linkHash: "#/solutions/finance" },
  { title: "Inventory & Operations", description: "Procurement, inventory, assets, supply chain — under one record.", linkHash: "#/solutions/inventory" },
  { title: "India Compliance", description: "Audit-ready by construction — PF, ESI, PT, TDS, GST, MCA, LWF.", linkHash: "#/solutions/compliance" },
  { title: "Communications & Engagement", description: "Notifications, newsfeed, polls, announcements — multi-channel delivery.", linkHash: "#/solutions/communications" },
  { title: "Document Vault", description: "Upload once — OCR, classification, retention, audit trail.", linkHash: "#/solutions/vault" },
  { title: "Learning & Development", description: "Skill matrices, course catalogues, certifications, learning paths.", linkHash: "#/solutions/learning" },
  { title: "BI & Analytics", description: "Per-module dashboards plus aggregate MIS — read everything, change nothing.", linkHash: "#/solutions/analytics" },
  { title: "Project Management", description: "Tasks, sprints, timesheets, milestones — delivery with audit trail.", linkHash: "#/solutions/project" },
];

export function Services() {
  const { palette, designSystem } = useThemeCustomizer();
  
  if (designSystem === "ebay") {
    return (
      <div className="bg-white dark:bg-[#111111] text-[#111111] dark:text-white w-full flex flex-col py-32" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6">
          <span className="text-[14px] font-bold tracking-[0.1em] uppercase text-[#666] dark:text-[#A6A6A6]">
            Solutions
          </span>
          <h2 className="text-[48px] md:text-[64px] font-serif leading-[1.05] tracking-tight max-w-[800px] text-[#111] dark:text-white">
            From hire to retire.<br />
            From quote to cash.
          </h2>
          <p className="text-[18px] font-medium leading-[1.5] text-[#555] dark:text-[#A6A6A6] max-w-[700px] mt-2 mb-12">
            Ten convergent modules covering every operational surface of the modern enterprise. Pick what you need today. Add the rest whenever.
          </p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left"
          >
            {solutions.map((sol, i) => {
              // Alternate between pure white and very light gray
              const bgClass = i % 2 === 0 ? "bg-white dark:bg-[#111111]" : "bg-[#F9F9F9]";
              const titleColor = "text-[#111] dark:text-white group-hover:text-white transition-colors duration-500";
              const descColor = "text-[#777] dark:text-[#A6A6A6] group-hover:text-white/90 transition-colors duration-500";
              
              // Calculate row-based delay: Row 2 waits for Row 1 to finish (0.6s gap)
              const rowIndex = Math.floor(i / 3);
              const colIndex = i % 3;
              const delay = (rowIndex * 0.6) + (colIndex * 0.1); // Faster cascade

              return (
                <div 
                  key={i} 
                  onClick={() => { window.location.hash = sol.linkHash; window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="overflow-hidden cursor-pointer group p-1"
                >
                  <motion.div
                    variants={{
                      hidden: { y: "-110%" },
                      visible: { 
                        y: "0%", 
                        transition: { 
                          duration: 0.9, 
                          ease: [0.16, 1, 0.3, 1],
                          delay: delay
                        } 
                      }
                    }}
                    className={`relative p-6 md:p-8 h-[280px] md:h-[320px] flex flex-col justify-between ${bgClass} hover:bg-[var(--primary)] rounded-[16px] border border-[#e5e5e5] hover:border-transparent shadow-sm transition-all duration-500 hover:scale-[1.03]`}
                  >
                    {/* Top Row: Title & Arrow */}
                    <div className="flex justify-between items-start w-full">
                      <h3 className={`text-[20px] md:text-[24px] uppercase font-medium leading-[1.1] tracking-tight max-w-[70%] ${titleColor}`}>
                        {sol.title}
                      </h3>
                      <ArrowUpRight size={28} className="text-[var(--primary)] group-hover:text-white transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                    </div>

                    {/* Bottom Row: Description */}
                    <div className="w-full flex justify-end mt-auto">
                      <p className={`text-[10px] md:text-[11px] uppercase font-semibold leading-[1.5] max-w-[85%] text-right tracking-wide ${descColor}`}>
                        {sol.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <CosmicBeamBackground beamPosition="top-center" beamIntensity="extreme" interactive={true}>
      <section
        style={{ width: "100%", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "center", padding: "80px 0" }}
        data-name="Solutions"
      >
        <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px", display: "flex", flexDirection: "column", gap: 48, zIndex: 10, position: "relative" }}>

        {/* Header */}
        <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>SOLUTIONS</span>
        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2] text-center">
          From hire to retire. From quote to cash.
        </h2>
        <p style={{ fontFamily: FONT, fontSize: 18, fontWeight: 400, color: "var(--text-subtle)", lineHeight: 1.6, letterSpacing: "-0.015em", margin: "-32px 0 0 0" }}>
          Ten convergent modules covering every operational surface of the modern enterprise. Pick what you need today. Add the rest whenever.
        </p>

        {/* 3×3 Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {solutions.map((sol, i) => (
            <div
              key={i}
              onClick={() => { window.location.hash = sol.linkHash; window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group relative overflow-hidden flex flex-col p-7 rounded-2xl cursor-pointer min-h-[200px] border transition-all duration-500 hover:border-transparent hover:shadow-[0_12px_30px_color-mix(in_srgb,var(--primary)_22%,transparent)] bg-[var(--surface-card)] border-[var(--surface-border)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              {/* Pixel Canvas Hover Effect */}
              <PixelCanvas 
                colors={[palette.shades['300'], palette.shades['400'], palette.shades['600'], palette.shades['800']]} 
                gap={4} speed={40} 
              />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[18px] font-semibold tracking-[-0.025em] leading-[1.25] m-0 transition-colors duration-500 group-hover:text-white text-[var(--text-heading)]">
                    {sol.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] tracking-[-0.01em] m-0 font-normal transition-colors duration-500 group-hover:text-white/90 text-[var(--text-subtle)]">
                    {sol.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-5 text-[14px] font-semibold transition-colors duration-500 group-hover:text-white text-[var(--text-brand)]">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom solution callout */}
        <div style={{ width: "100%", background: "var(--surface-card)", border: "1px solid var(--surface-border)", borderRadius: 16, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.02)", fontFamily: FONT, transition: "background 0.3s ease" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 680 }}>
            <h4 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-heading)", margin: 0, letterSpacing: "-0.02em" }}>
              Need a sector-tailored solution?
            </h4>
            <p style={{ fontSize: 15, color: "var(--text-subtle)", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Manufacturing, healthcare, retail, logistics, construction — we ship sector-aware overlays on top of the convergent core.
            </p>
          </div>
          <button
            onClick={() => { window.location.hash = "#/contact"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ flexShrink: 0, background: "var(--primary)", color: "var(--primary-foreground, #ffffff)", fontFamily: FONT, fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, border: "none", cursor: "pointer", whiteSpace: "nowrap" as const }}
          >
            Talk to us
          </button>
        </div>
      </div>
    </section>
  </CosmicBeamBackground>
  );
}
