import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import { EbaySolutionTemplate } from "@/widgets/ebay/EbaySolutionTemplate";
import { motion } from "motion/react";

import BorderGlow from "@/components/ui/border-glow";

export default function SolutionsSupport() {
  const { designSystem, palette } = useThemeCustomizer();


  const handleDemoClick = () => {
    window.location.hash = "#/contact";
  };

  const features = [
    { title: "Unified Profiles", desc: "A 360-degree view of every customer interaction and transaction." },
    { title: "Helpdesk Tickets", desc: "Multi-channel ticketing system with SLA enforcement." },
    { title: "Knowledge Base", desc: "Create self-service articles to deflect common support queries." },
    { title: "Feedback Surveys", desc: "Automated CSAT and NPS surveys after ticket resolution." },
    { title: "Live Chat Integration", desc: "Engage with customers in real-time directly from the platform." },
    { title: "Escalation Rules", desc: "Ensure critical issues are routed to senior agents automatically." },
    { title: "Warranty Management", desc: "Track product warranties and automate RMA workflows." },
    { title: "Service Contracts", desc: "Manage AMC renewals and scheduled maintenance visits." },
    { title: "Support Analytics", desc: "Measure first-response times and agent resolution rates." }
  ];

  if (designSystem === "ebay") {
    return (
      <EbaySolutionTemplate 
        tagline="SUPPORT SOLUTION" 
        title="CRM & Customer Support" 
        subtitle="Turn Support into a Competitive Advantage" 
        description="QuGenie Support unifies sales history with customer service. Give your agents the context they need to resolve issues faster and delight your clients." 
        features={features}
      />
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="SolutionsSupportPage">
      
      {/* Top Tagline */}
      <section className="w-full max-w-[1120px] px-6 pt-6">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] font-semibold uppercase tracking-[3px] text-[var(--primary)]"
        >
          SUPPORT SOLUTION
        </motion.span>
      </section>

      {/* Spectacular Graphic Hero Panel */}
      <section className="w-full max-w-[1120px] px-6 py-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[360px] w-full rounded-[24px] relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[#002266] to-[#03010a] flex flex-col justify-end p-8 md:p-12 shadow-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-[600px] flex flex-col gap-2">
            <span className="bg-white dark:bg-[#111111]/10 text-white font-semibold text-[12px] uppercase tracking-widest px-3 py-1 rounded-[4px] self-start mb-2">CUSTOMER FIRST</span>
            <h1 className="text-[38px] md:text-[48px] font-semibold text-white tracking-tight leading-none">
              CRM & Customer Support
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Split Description Section */}
      <section className="w-full max-w-[1120px] px-6 py-[60px] grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Title */}
        <div className="md:col-span-7 flex flex-col items-start gap-4">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]">
            Turn Support into a Competitive Advantage
          </h2>
        </div>

        {/* Right Copy & CTA */}
        <div className="md:col-span-5 flex flex-col items-start gap-6">
          <p className="text-[16px] leading-[28px] text-muted-foreground">
            QuGenie Support unifies sales history with customer service. Give your agents the context they need to resolve issues faster and delight your clients.
          </p>
          <motion.button 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDemoClick}
            className="bg-[var(--primary)] text-white font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer shadow-sm hover:shadow-[0px_8px_16px_rgba(0,64,193,0.25)] transition-all"
          >
            Book a Free Demo
          </motion.button>
        </div>

      </section>

      {/* Grid of 9 Cards */}
      <section className="w-full max-w-[1120px] px-6 py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <BorderGlow
              key={idx}
              className="w-full h-full cursor-pointer"
              edgeSensitivity={36}
              glowColor="220 100 60"
              backgroundColor="#03010a"
              borderRadius={16}
              glowRadius={31}
              glowIntensity={2.1}
              coneSpread={25}
              animated={false}
              colors={[palette.shades['400'], palette.shades['800'], palette.shades['950']]}
            >
              <div className="p-6 h-full flex flex-col gap-3 group">

              <div className="relative z-10 flex flex-col gap-3 h-full">
                <div className="w-[36px] h-[36px] rounded-[8px] bg-white dark:bg-[#111111]/5 flex items-center justify-center text-white mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <h4 className="text-[17px] font-semibold text-white tracking-tight mt-2">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-[24px] text-white/60">
                  {item.desc}
                </p>
              </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* Standard bottom space before footer */}
      <div className="w-full h-[60px]" />

      
    </div>
  );
}
