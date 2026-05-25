import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/svg-fkvg6xd5th";
import imgImage6 from "@/assets/ea704c2933abe54013cfbbb25cf752fbf9a97143.png";

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
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="p-2.5 rounded-full bg-secondary/50 border border-border cursor-pointer flex items-center justify-center transition-colors text-foreground"
      data-name="ThemeToggle"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
          />
        )}
      </motion.svg>
    </motion.button>
  );
}

function MenuSolutions({ onClose }: { onClose: () => void }) {
  const items = [
    { title: "HRMS", hash: "#/solutions/hrms", desc: "Manage employee lifecycle, attendance, payroll, and appraisals." },
    { title: "Sales CRM & E-Commerce", hash: "#/solutions/sales", desc: "Omnichannel commerce engines for lightning-fast orders." },
    { title: "Finance & Accounts", hash: "#/solutions/finance", desc: "Double-entry ledger, real-time GST filings, and tracking." },
    { title: "Inventory & Warehouse", hash: "#/solutions/inventory", desc: "Multi-location inventory tracking and serialized barcodes." },
    { title: "Procurement & SCM", hash: "#/solutions/procurement", desc: "Vendor portals, automated RFQs, and PO tracking." },
    { title: "Project Management", hash: "#/solutions/project", desc: "Timesheets, milestone tracking, and task allocation." },
    { title: "Manufacturing", hash: "#/solutions/manufacturing", desc: "Bill of materials (BOM) and shop-floor execution logs." },
    { title: "CRM & Customer Support", hash: "#/solutions/support", desc: "Unified client profiles, helpdesk tickets, and feedback." },
    { title: "HR Talent & Recruitment", hash: "#/solutions/recruitment", desc: "Applicant tracking system (ATS) and offer rollouts." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-0 mt-3 w-[640px] bg-card border border-border rounded-[12px] shadow-lg p-3 z-50 text-left font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] grid grid-cols-2 gap-2"
    >
      {items.map((item) => (
        <div 
          key={item.title}
          onClick={() => {
            window.location.hash = item.hash;
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
          className="p-3 hover:bg-secondary/60 rounded-[8px] cursor-pointer transition-colors"
        >
          <p className="font-semibold text-foreground text-[14px]">{item.title}</p>
          <p className="text-[12px] text-muted-foreground mt-0.5 leading-normal">{item.desc}</p>
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
      className="absolute left-0 mt-3 w-[320px] bg-card border border-border rounded-[12px] shadow-lg p-2 z-50 text-left font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]"
    >
      {items.map((item) => (
        <div 
          key={item.title}
          onClick={() => {
            window.location.hash = item.hash;
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
          className="p-3 hover:bg-secondary/60 rounded-[8px] cursor-pointer transition-colors"
        >
          <p className="font-semibold text-foreground text-[14px]">{item.title}</p>
          <p className="text-[12px] text-muted-foreground mt-0.5 leading-normal">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}

export function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1280px] z-50 px-8 py-3 rounded-[16px] bg-background/70 backdrop-blur-xl border border-border/40 shadow-[0_12px_32px_rgba(0,0,0,0.06)] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]">
      <div className="flex items-center justify-between w-full">
        
        {/* Brand Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={() => handleLinkClick("#/")}
          className="relative shrink-0 size-[50px] cursor-pointer"
        >
          <img alt="QuGenie Logo" className="absolute inset-0 object-cover pointer-events-none size-full scale-[1.2]" src="/qugenie-logo.png" />
        </motion.div>

        {/* Navigation Items */}
        <nav className="hidden md:flex gap-8 items-center text-[15px] font-semibold text-foreground/80">
          <button 
            onClick={() => handleLinkClick("#/")}
            className="hover:text-[#0040C1] transition-colors cursor-pointer"
          >
            Home
          </button>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button 
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setPlatformOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#0040C1] transition-colors cursor-pointer"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <MenuSolutions onClose={() => setSolutionsOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          {/* Platform Dropdown */}
          <div className="relative" ref={platformRef}>
            <button 
              onClick={() => {
                setPlatformOpen(!platformOpen);
                setSolutionsOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#0040C1] transition-colors cursor-pointer"
            >
              Platform
              <svg className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {platformOpen && (
                <MenuPlatform onClose={() => setPlatformOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => handleLinkClick("#/about-us")}
            className="hover:text-[#0040C1] transition-colors cursor-pointer"
          >
            About Us
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex gap-[12px] items-center">
          <ThemeToggle />
          
          <button 
            onClick={() => handleLinkClick("#/contact")}
            className="hidden sm:block text-[15px] font-semibold text-foreground/80 hover:text-[#0040C1] transition-colors px-4 py-2 cursor-pointer"
          >
            Log in
          </button>

          <motion.button 
            whileHover={{ scale: 1.04, boxShadow: "0px 8px 16px rgba(0, 64, 193, 0.25)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleLinkClick("#/contact")}
            className="bg-[#0040C1] text-white font-semibold text-[14px] px-[20px] py-[10px] rounded-[8px] cursor-pointer shadow-sm transition-all"
          >
            Book a Free Demo
          </motion.button>
        </div>

      </div>
    </header>
  );
}
