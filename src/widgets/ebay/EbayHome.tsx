import React from "react";
import imgHeroMockup from "@/assets/hero_dashboard_new.jpg";
import imgCard from "@/assets/card_hand.webp";

const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

export function EbayHome() {
  return (
    <div className="bg-[#000000] text-white min-h-screen w-full flex flex-col pt-16 pb-32 overflow-hidden" style={{ fontFamily: FONT }}>
      
      {/* ── Playbook Style Hero ── */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative">
        <div className="flex-1 z-10">
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] font-bold leading-[0.95] tracking-[-0.04em] max-w-[800px] mb-8">
            Rule your entire enterprise.<br />
            From one core.
          </h1>
          <p className="text-[20px] md:text-[24px] font-medium leading-[1.3] max-w-[500px] text-[#E5E5E5] mb-12">
            Command recruitment, payroll, sales, finance and inventory from one single server. No subscriptions, no vendor lock-in, no data leaking. Built for modern Indian business.
          </p>
          <div className="flex gap-4">
            <button className="bg-[var(--primary)] text-white border-none px-8 py-4 text-[18px] font-bold rounded-full transition-transform hover:scale-105 active:scale-95">
              Signup with Quikynet
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-4 text-[18px] font-bold rounded-full hover:bg-white hover:text-black transition-colors">
              Book a Free Demo
            </button>
          </div>
        </div>

        {/* Floating staggered grid blocks mimicking the playbook cover */}
        <div className="flex-1 relative min-h-[500px] hidden lg:block">
           <div className="absolute top-0 right-[20%] w-[450px] h-[300px] bg-[#E5E5E5] rounded-[12px] overflow-hidden shadow-2xl z-20">
             <img src={imgHeroMockup} className="w-full h-full object-cover" alt="Dashboard" />
           </div>
           <div className="absolute top-[240px] right-[40%] w-[350px] h-[300px] bg-[#F5AF02] rounded-[12px] z-10" />
           <div className="absolute top-[380px] right-[10%] w-[250px] h-[250px] bg-[#0064D2] rounded-[12px] z-30 flex items-center justify-center p-6 text-[32px] font-bold leading-tight">
             Sovereign.<br/>Convergent.
           </div>
        </div>
      </div>

      {/* ── Huge text divider ── */}
      <div className="w-full mt-32 mb-16 overflow-hidden whitespace-nowrap opacity-20">
        <h2 className="text-[180px] font-bold leading-none tracking-tighter">
          THINGS. PEOPLE. LOVE.
        </h2>
      </div>

      {/* ── Services Section ── */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col gap-12 mt-16">
        <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] tracking-[-0.03em] max-w-[600px]">
          From hire to retire.<br />
          From quote to cash.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { title: "HRMS", color: "bg-[#0064D2]", desc: "Hire to retire — profiles, attendance, payroll, performance." },
            { title: "Sales & CRM", color: "bg-[#E53238]", desc: "Lead to cash — pipelines, quotations, orders, storefront." },
            { title: "Finance", color: "bg-[#86B817]", desc: "GL, AR, AP, banking, taxation, e-invoicing — audit-ready." },
            { title: "Inventory", color: "bg-[#F5AF02]", desc: "Procurement, inventory, assets, supply chain.", textColor: "text-black" },
            { title: "Compliance", color: "bg-[#111111]", border: "border border-[#333]", desc: "PF, ESI, PT, TDS, GST. Audit-ready by construction." },
            { title: "Quikynet", color: "bg-[#6938EF]", desc: "Digital business card and B2B matchmaking network." },
            { title: "Vault", color: "bg-[#333333]", desc: "Upload once. OCR, classification, retention, audit trail." },
            { title: "Project Mgmt", color: "bg-[#0050A8]", desc: "Tasks, sprints, timesheets, milestones — delivery." },
          ].map((srv, i) => (
            <div key={i} className={`relative p-8 rounded-[16px] h-[320px] flex flex-col justify-between ${srv.color} ${srv.border || ''} ${srv.textColor || 'text-white'} transition-transform hover:-translate-y-2`}>
               <h3 className="text-[32px] font-bold leading-[1.1] tracking-tight">{srv.title}</h3>
               <p className="text-[16px] font-medium leading-[1.4] opacity-90">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Choose Us Staggered Blocks ── */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col mt-48 relative">
        <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] tracking-[-0.03em] max-w-[800px] mb-24">
          Six reasons QuGenie wins where the giants stall.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-12 relative z-10">
          {[
            { title: "Sovereign by Construction", desc: "Your data stays where you put it. On-premise, on a sovereign cloud you control, or in our managed SaaS — your call." },
            { title: "Convergent, Not Connected", desc: "One database, one canonical truth. Every module reads and writes the same data. No middleware tax. No reconciliation jobs." },
            { title: "Audit-Ready by Default", desc: "Chained-hash ledger across every transaction. Reconstruct exactly what was true at any point in the past." },
            { title: "Agentic AI — Built In", desc: "Insight, audit, automation, and embodied intelligence — native to the platform, not stitched on as chatbots." },
          ].map((r, i) => (
            <div key={i} className={`flex flex-col gap-4 max-w-[400px] ${i%2!==0 ? 'md:ml-auto md:mt-24' : ''}`}>
              <div className="h-[2px] w-12 bg-[var(--primary)] mb-4" />
              <h3 className="text-[32px] font-bold leading-[1.1] tracking-tight">{r.title}</h3>
              <p className="text-[18px] leading-[1.5] text-[#A6A6A6]">{r.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] bg-[#6938EF] rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="absolute top-[60%] left-[10%] w-[300px] h-[300px] bg-[#F5AF02] rounded-full blur-[100px] opacity-10 pointer-events-none" />
      </div>

    </div>
  );
}
