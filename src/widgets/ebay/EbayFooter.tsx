import React from "react";
import { ArrowUpRight } from "lucide-react";

const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

export function EbayFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] dark:bg-[#000000] text-white border-t border-[#333] transition-colors" style={{ fontFamily: FONT }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-12 flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#333] pb-16">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight tracking-tight">
              Rule your entire enterprise.<br />From one core.
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#A6A6A6]">
              The convergent enterprise platform. Sovereign by construction. Audit-ready by design.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-w-[200px]">
            <button className="bg-[var(--primary)] text-white hover:bg-white hover:text-black transition-colors px-6 py-4 rounded-full font-bold flex items-center justify-between group">
              Start Free Trial 
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="bg-transparent text-white border border-[#333] hover:border-white transition-colors px-6 py-4 rounded-full font-bold flex items-center justify-center">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-[#333]">
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#A6A6A6]">Solutions</h4>
            <ul className="flex flex-col gap-4 text-[16px] font-medium">
              <li><a href="#/solutions/hrms" className="hover:text-[var(--primary)] transition-colors">HRMS</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Sales & CRM</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Finance & Accounts</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Inventory</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">India Compliance</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#A6A6A6]">Platform</h4>
            <ul className="flex flex-col gap-4 text-[16px] font-medium">
              <li><a href="#/platform/agentic" className="hover:text-[var(--primary)] transition-colors">AI-Driven ERP</a></li>
              <li><a href="#/platform/silos" className="hover:text-[var(--primary)] transition-colors">One Platform</a></li>
              <li><a href="#/platform/on-premise" className="hover:text-[var(--primary)] transition-colors">Why On-Premise</a></li>
              <li><a href="#/platform/cost-effective" className="hover:text-[var(--primary)] transition-colors">Platform Cost</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#A6A6A6]">Company</h4>
            <ul className="flex flex-col gap-4 text-[16px] font-medium">
              <li><a href="#/about-us" className="hover:text-[var(--primary)] transition-colors">About Us</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Careers</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Newsroom</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#A6A6A6]">Legal</h4>
            <ul className="flex flex-col gap-4 text-[16px] font-medium">
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Security</a></li>
              <li><a href="#/" className="hover:text-[var(--primary)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] font-medium text-[#A6A6A6]">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-[20px] font-bold text-white tracking-tight">QuGenie</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#333]" />
            <span>© {currentYear} QuGates Technologies Pvt. Ltd.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#/" className="hover:text-white transition-colors">Twitter</a>
            <a href="#/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#/" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
