import { ArrowRight } from "lucide-react";
import { CosmicBeamBackground } from "@/components/ui/CosmicBeamBackground";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const solutions = [
  { title: "HRMS", description: "Manage employee lifecycle, attendance, payroll, and appraisals in a single, unified HR core.", linkHash: "#/solutions/hrms" },
  { title: "Sales CRM & E-Commerce", description: "Omnichannel commerce engines built for lightning-fast orders and billing pipelines.", linkHash: "#/solutions/sales" },
  { title: "Finance & Accounts", description: "Double-entry general ledger, real-time GST filings, and granular asset depreciation tracking.", linkHash: "#/solutions/finance" },
  { title: "Inventory & Warehouse", description: "Multi-location inventory tracking, serialized barcodes, and automated reorder pipelines.", linkHash: "#/solutions/inventory" },
  { title: "Procurement & SCM", description: "Vendor portals, automated RFQs, and purchase order tracking aligned with operational budgets.", linkHash: "#/solutions/procurement" },
  { title: "Project Management", description: "Timesheets, milestone tracking, and task allocation mapped directly to client invoices.", linkHash: "#/solutions/project" },
  { title: "Manufacturing", description: "Bill of materials (BOM), shop-floor execution logs, and capacity planning for modern plants.", linkHash: "#/solutions/manufacturing" },
  { title: "CRM & Customer Support", description: "Unified client profiles, helpdesk tickets, and feedback surveys synced with sales histories.", linkHash: "#/solutions/support" },
  { title: "HR Talent & Recruitment", description: "Applicant tracking system (ATS), pre-employment evaluations, and automated offer rollouts.", linkHash: "#/solutions/recruitment" },
];

export function Services() {
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
          Modular components built to scale. Plug into our shared data core, choose your starting point, and expand at your own pace.
        </p>

        {/* 3×3 Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {solutions.map((sol, i) => (
            <div
              key={i}
              onClick={() => { window.location.hash = sol.linkHash; window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group relative overflow-hidden flex flex-col p-7 rounded-2xl cursor-pointer min-h-[200px] border transition-all duration-500 hover:border-transparent hover:shadow-[0_12px_30px_rgba(0,64,193,0.22)] bg-[var(--surface-card)] border-[var(--surface-border)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              {/* Radial Hover Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(150%_80%_at_50%_0%,var(--brand-600)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />
              
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
              Need a custom tailormade solution?
            </h4>
            <p style={{ fontSize: 15, color: "var(--text-subtle)", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Collaborate directly with our engineering team to build a bespoke operational module for your unique enterprise.
            </p>
          </div>
          <button
            onClick={() => { window.location.hash = "#/contact"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ flexShrink: 0, background: "#0040C1", color: "#ffffff", fontFamily: FONT, fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, border: "none", cursor: "pointer", whiteSpace: "nowrap" as const }}
          >
            Talk to us
          </button>
        </div>
      </div>
    </section>
  </CosmicBeamBackground>
  );
}
