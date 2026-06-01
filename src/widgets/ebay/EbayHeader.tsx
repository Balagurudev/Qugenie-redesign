import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/ea704c2933abe54013cfbbb25cf752fbf9a97143.png";
import { ThemeCustomizerPanel } from "@/components/ui/ThemeCustomizerPanel";

const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.95 }}
      className="p-2.5 rounded-full border border-[#e5e5e5] dark:border-[#333] cursor-pointer flex items-center justify-center transition-colors text-[#111] dark:text-white"
    >
      <motion.svg
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isDark ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
        )}
      </motion.svg>
    </motion.button>
  );
}

function MenuSolutions({ onClose }: { onClose: () => void }) {
  const items = [
    { title: "HRMS", hash: "#/solutions/hrms", desc: "Hire to retire — profiles, attendance, payroll, performance, appraisals." },
    { title: "Sales, CRM & E-Commerce", hash: "#/solutions/sales", desc: "Lead to cash — pipelines, quotations, orders, invoices, storefront." },
    { title: "Finance & Accounts", hash: "#/solutions/finance", desc: "GL, AR, AP, banking, taxation, e-invoicing — real-time, audit-ready." },
    { title: "Inventory & Operations", hash: "#/solutions/inventory", desc: "Procurement, inventory, assets, supply chain — under one record." },
    { title: "India Compliance", hash: "#/solutions/compliance", desc: "Audit-ready by construction — PF, ESI, PT, TDS, GST, MCA, LWF." },
    { title: "Communications & Engagement", hash: "#/solutions/communications", desc: "Notifications, newsfeed, polls, announcements — multi-channel delivery." },
    { title: "Document Vault", hash: "#/solutions/vault", desc: "Upload once — OCR, classification, retention, audit trail." },
    { title: "Learning & Development", hash: "#/solutions/learning", desc: "Skill matrices, course catalogues, certifications, learning paths." },
    { title: "BI & Analytics", hash: "#/solutions/analytics", desc: "Per-module dashboards plus aggregate MIS — read everything, change nothing." },
    { title: "Project Management", hash: "#/solutions/project", desc: "Tasks, sprints, timesheets, milestones — delivery with audit trail." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-[#111111] border border-[#333333] rounded-[16px] shadow-2xl p-4 z-50 text-left grid grid-cols-2 gap-2"
    >
      {items.map((item) => (
        <div 
          key={item.title}
          onClick={() => {
            window.location.hash = item.hash;
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
          className="p-3 hover:bg-[#222] rounded-[8px] cursor-pointer transition-colors"
        >
          <p className="font-bold text-white dark:text-[#111] text-[15px] tracking-tight">{item.title}</p>
          <p className="text-[13px] text-[#A6A6A6] mt-1 leading-[1.4]">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}

function MenuPlatform({ onClose }: { onClose: () => void }) {
  const items = [
    { title: "AI Driven ERP", hash: "#/platform/agentic", desc: "Four pillars of structural intelligence built into the core." },
    { title: "Deployment Options", hash: "#/platform/deployment", desc: "Cloud SaaS vs On-Premise infrastructure choices." },
    { title: "Why On-Premise", hash: "#/platform/on-premise", desc: "True sovereignty, offline capability & high availability." },
    { title: "Why Qugenie is Cost Effective", hash: "#/platform/cost-effective", desc: "Predictable TCO that stabilises as you grow." },
    { title: "Unified Ecosystem", hash: "#/platform/silos", desc: "Modular, zero-silos integrated platform." },
    { title: "Quikynet", hash: "#/solutions/quikynet", desc: "Digital business card & smart B2B networking agent." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[360px] bg-[#111111] border border-[#333333] rounded-[16px] shadow-2xl p-4 z-50 text-left flex flex-col gap-1"
    >
      {items.map((item) => (
        <div 
          key={item.title}
          onClick={() => {
            window.location.hash = item.hash;
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
          className="p-3 hover:bg-[#222] rounded-[8px] cursor-pointer transition-colors"
        >
          <p className="font-bold text-white dark:text-[#111] text-[15px] tracking-tight">{item.title}</p>
          <p className="text-[13px] text-[#A6A6A6] mt-1 leading-[1.4]">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}

export function EbayHeader() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setPlatformOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSolutionsOpen(false);
    setPlatformOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9] dark:bg-background border-b border-[#e5e5e5] dark:border-[#333]" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => { window.location.hash = "#/"; window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-8 h-8 bg-[#111] dark:bg-white rounded-full flex items-center justify-center text-white dark:text-[#111] font-serif font-bold text-lg group-hover:scale-105 transition-transform">
            Q
          </div>
          <span className="text-[20px] font-bold tracking-tight text-[#111] dark:text-white">
            QuGenie
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => handleLinkClick("#/")} className="text-[15px] font-medium text-[#111] dark:text-white hover:text-[#555] dark:text-[#A6A6A6] transition-colors bg-transparent border-none cursor-pointer p-0">Home</button>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button 
              className="flex items-center gap-1 text-[15px] font-medium text-[#111] dark:text-white hover:text-[#555] dark:text-[#A6A6A6] transition-colors bg-transparent border-none cursor-pointer p-0"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              Solutions <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && <MenuSolutions onClose={() => setSolutionsOpen(false)} />}
            </AnimatePresence>
          </div>

          {/* Platform Dropdown */}
          <div className="relative" ref={platformRef}>
            <button 
              className="flex items-center gap-1 text-[15px] font-medium text-[#111] dark:text-white hover:text-[#555] dark:text-[#A6A6A6] transition-colors bg-transparent border-none cursor-pointer p-0"
              onClick={() => setPlatformOpen(!platformOpen)}
            >
              Platform <ChevronDown size={14} className={`transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {platformOpen && <MenuPlatform onClose={() => setPlatformOpen(false)} />}
            </AnimatePresence>
          </div>

          <button 
            className="text-[15px] font-medium text-[#111] dark:text-white hover:text-[#555] dark:text-[#A6A6A6] transition-colors bg-transparent border-none cursor-pointer p-0"
            onClick={() => handleLinkClick("#/about-us")}
          >
            About Us
          </button>
          
          <button 
            className="text-[15px] font-medium text-[#111] dark:text-white hover:text-[#555] dark:text-[#A6A6A6] transition-colors bg-transparent border-none cursor-pointer p-0"
            onClick={() => handleLinkClick("#/contact")}
          >
            Contact
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <ThemeCustomizerPanel />
          <button 
            onClick={() => { window.location.hash = "#/contact"; }}
            className="text-white px-5 py-2 rounded-full font-medium border-none cursor-pointer text-[15px] transition-colors"
            style={{ background: "var(--primary)" }}
          >
            Book Demo
          </button>
        </div>

      </div>
    </header>
  );
}
