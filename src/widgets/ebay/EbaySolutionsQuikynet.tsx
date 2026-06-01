import React from "react";
import imgCard from "@/assets/quikynet_metal_card.png";
import imgPhoneMockup from "@/assets/quikynet_step1.png";

const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

export function EbaySolutionsQuikynet() {
  const handleStartClick = () => {
    window.location.hash = "#/contact";
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen w-full flex flex-col pt-8 pb-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 lg:px-10 flex flex-col gap-16">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mt-8">
          <div className="flex-1 flex flex-col gap-6 text-left">
            <span className="font-bold text-[12px] tracking-[0.5px] uppercase text-[#6E6E6E]" style={{ fontFamily: FONT }}>QUIKYNET</span>
            <h1 
              className="text-[36px] md:text-[48px] font-bold text-[#111111] leading-[1.1] tracking-tight"
              style={{ fontFamily: FONT }}
            >
              Your Digital Business Card & B2B Sales Agent
            </h1>
            <p 
              className="text-[16px] md:text-[18px] text-[#6E6E6E] leading-[1.5]"
              style={{ fontFamily: FONT }}
            >
              Quikynet is a smart networking platform designed to simplify how professionals, businesses, and institutions connect, share, and grow.
            </p>
            <div className="mt-4">
              <button 
                onClick={handleStartClick}
                className="bg-[var(--color-cta,#0064D2)] text-white border-none rounded-full px-8 py-[14px] font-bold text-[16px] transition-colors hover:bg-[color-mix(in_srgb,var(--color-cta)_80%,black)] active:scale-98 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--border-focus,#0064D2)]" 
                style={{ fontFamily: FONT }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square bg-[#F7F7F7] rounded-[24px] overflow-hidden flex items-center justify-center p-8 shadow-[0_2px_8px_rgba(0,0,0,0.10)] border border-[#C2C2C2]">
               <img src={imgCard} alt="Digital Business Card" className="w-[80%] object-contain" />
            </div>
          </div>
        </section>

        <hr className="border-t border-[#C2C2C2] my-4" />

        {/* Timeline / Steps Section */}
        <section className="flex flex-col gap-12">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#111111]" style={{ fontFamily: FONT }}>
              A New Era of Business Networking
            </h2>
            <p className="text-[16px] text-[#6E6E6E] leading-[1.5] mt-4" style={{ fontFamily: FONT }}>
              Quikynet combines a digital business card, a mini-website, and lead management into a single platform for effortless business growth.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
               <div className="bg-[#F7F7F7] rounded-[24px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.10)] border border-[#C2C2C2]">
                 <img src={imgPhoneMockup} alt="Quikynet Mobile App" className="w-full h-auto object-contain" />
               </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
              {[
                { step: "01", title: "Smart Digital Business Card", desc: "Share your contact details, portfolio, and social links instantly via QR code or NFC. Never print a paper card again." },
                { step: "02", title: "Mini-Website for Your Business", desc: "Showcase your products, services, and achievements in a professional, mobile-friendly landing page." },
                { step: "03", title: "Automated Lead Capture", desc: "Every scan acts as a lead. Capture prospect information securely and export it directly to your CRM." },
                { step: "04", title: "B2B Matchmaking & AI Insights", desc: "Connect with relevant businesses globally. Our algorithm suggests partnerships that drive revenue." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-[#F7F7F7] rounded-[12px] transition-colors border-l-4 border-transparent hover:border-[var(--color-cta,#0064D2)]">
                  <div className="font-bold text-[24px] text-[var(--color-cta,#0064D2)]" style={{ fontFamily: FONT }}>{item.step}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[18px] text-[#111111]" style={{ fontFamily: FONT }}>{item.title}</h3>
                    <p className="text-[14px] text-[#6E6E6E] leading-[1.5]" style={{ fontFamily: FONT }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
