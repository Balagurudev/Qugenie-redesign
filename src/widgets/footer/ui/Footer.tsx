import { useState, useRef } from "react";
import { motion } from "motion/react";
import imgImage6 from "@/assets/ea704c2933abe54013cfbbb25cf752fbf9a97143.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement>(null);

  const handleLinkClick = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#000411] text-[#eaecf0] border-t border-[#1f2937]/30 relative overflow-hidden shrink-0" 
      data-name="Footer"
    >
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-800)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-950)]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Gigantic Background Watermark */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-[14vw] font-bold font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] text-[#0a0d1d] select-none pointer-events-none tracking-widest uppercase leading-none text-center w-full z-0">
        QuGenie
      </div>
      
      {/* Spotlight Hover Text */}
      <div 
        className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-[14vw] font-bold font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] text-transparent bg-clip-text select-none pointer-events-none tracking-widest uppercase leading-none text-center w-full z-0"
        style={{
          backgroundImage: "linear-gradient(90deg, var(--glow-secondary), var(--brand-800))",
          WebkitBackgroundClip: "text",
          WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`,
          maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 100%)`,
        }}
      >
        QuGenie
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-[80px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[64px] mb-[64px]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-[24px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => handleLinkClick("#/")}
              className="relative shrink-0 size-[61px] cursor-pointer"
            >
              <img alt="QuGenie Logo" className="absolute inset-0 object-cover pointer-events-none size-full scale-[1.2]" src="/qugenie-logo.png" />
            </motion.div>
            
            <div className="flex flex-col gap-3 font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]">
              <h3 className="text-[20px] font-semibold text-white tracking-wide">QuGenie</h3>
              <p className="text-[16px] text-muted-foreground leading-[26px] max-w-[340px]">
                The convergent enterprise platform. Sovereign by construction. Audit-ready by design.
              </p>
              <p className="text-[14px] text-muted-foreground/60 italic mt-2">
                Built by QuGates Technologies Pvt. Ltd. — Bengaluru, India.
              </p>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-[40px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]">
            
            {/* Solutions */}
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">Solutions</span>
              <ul className="flex flex-col gap-[12px] text-[15px] text-muted-foreground">
                <li>
                  <button onClick={() => handleLinkClick("#/solutions/hrms")} className="hover:text-white transition-colors cursor-pointer text-left">
                    HRMS
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Sales, CRM & E-Commerce
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Finance & Accounts
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Inventory & Operations
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    India Compliance
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Communications & Engagement
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Document Vault
                  </button>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">Platform</span>
              <ul className="flex flex-col gap-[12px] text-[15px] text-muted-foreground">
                <li>
                  <button onClick={() => handleLinkClick("#/platform/agentic")} className="hover:text-white transition-colors cursor-pointer text-left">
                    AI-Driven ERP
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/platform/silos")} className="hover:text-white transition-colors cursor-pointer text-left">
                    One Platform Architecture
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/platform/deployment")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Deployment Options
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/platform/on-premise")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Why On-Premise
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/solutions/quikynet")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Quikynet Identity
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/platform/cost-effective")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Why QuGenie is Cost Effective
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">Company</span>
              <ul className="flex flex-col gap-[12px] text-[15px] text-muted-foreground">
                <li>
                  <button onClick={() => handleLinkClick("#/about-us")} className="hover:text-white transition-colors cursor-pointer text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("#/")} className="hover:text-white transition-colors cursor-pointer text-left">
                    Contact
                  </button>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f2937]/30 pt-[32px] flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-muted-foreground/60 font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]">
          <p>© {currentYear} QuGates Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-[24px]">
            <a href="#/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#/" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
