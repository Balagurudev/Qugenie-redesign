import { motion } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

export default function PlatformDeployment() {
  const handleHash = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cloudBullets = [
    "Fully managed infrastructure",
    "Automatic updates and patches",
    "Sovereign cloud — data stays in India",
    "Predictable monthly cost",
    "Built-in disaster recovery",
    "99.9% uptime SLA"
  ];

  const onPremBullets = [
    "Complete data sovereignty",
    "No vendor lock-in",
    "Custom SLAs and policies",
    "Air-gapped deployment supported",
    "Integrate with existing AD / LDAP",
    "Source available licensing options"
  ];

  const tableRows = [
    {
      factor: "Time to first value",
      cloud: "Fastest — provisioned and running in days.",
      onprem: "Deliberate — sized and deployed to your estate."
    },
    {
      factor: "Data residency & control",
      cloud: "Sovereign cloud in India, managed by QuGates.",
      onprem: "Entirely within your perimeter, including air-gapped."
    },
    {
      factor: "Cost shape",
      cloud: "Predictable per-user monthly operating cost.",
      onprem: "Infrastructure-led; stabilises as you scale."
    },
    {
      factor: "Operational burden",
      cloud: "We run updates, backups, recovery.",
      onprem: "Your team, on your policies — or a managed option."
    }
  ];

  const { designSystem } = useThemeCustomizer();

  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-background text-[#111] dark:text-white min-h-screen w-full flex flex-col pt-32 pb-0" style={{ fontFamily: "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)" }}>
        
        {/* Minimal Hero Section */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-[50vh] gap-6 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d1d1d1] dark:border-[#333] text-[#555] dark:text-[#A6A6A6] text-[11px] font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest bg-white dark:bg-[#111111] shadow-sm">
            <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" />
            DEPLOYMENT
          </span>
          <h1 className="text-[56px] md:text-[80px] lg:text-[96px] font-sans font-bold leading-[1.1] tracking-tight text-[#111] dark:text-white uppercase mt-6 max-w-[1000px]">
            Your infrastructure. <br/>
            <span className="text-[#999] dark:text-[#A6A6A6]">Your call.</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[800px] mt-8">
            Cloud SaaS for speed, on-premise for sovereignty. Same platform, same data model, same audit trail. Pick what fits your operational posture today; switch when it doesn't.
          </p>
        </div>

        {/* Cloud vs On-Prem Side-by-Side Cards */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#222] bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Cloud Card */}
              <div className="bg-[#FAFAF9] dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] p-10 rounded-[16px] flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[12px] font-bold uppercase tracking-[2px] text-[var(--primary)]">CLOUD SaaS</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#111] dark:text-white tracking-tight leading-tight mb-6">
                    Managed by us.<br />Run anywhere.
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#555] dark:text-[#A6A6A6] border-b border-[#E5E5E5] dark:border-[#333] pb-8 mb-8 font-medium">
                    Sovereign cloud hosted in India, with the operational simplicity of SaaS. We manage updates, backups, and infrastructure; you pay per user per month.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {cloudBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] font-medium text-[#111] dark:text-white">
                        <svg className="w-5 h-5 text-[var(--primary)] shrink-0 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* On-Premise Card */}
              <div className="bg-[var(--primary)] text-white border border-transparent p-10 rounded-[16px] flex flex-col justify-between min-h-[500px] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white/10 text-white text-[10px] font-bold uppercase tracking-[2px] px-5 py-2 rounded-bl-[12px] shadow-sm">
                  RECOMMENDED
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[12px] font-bold uppercase tracking-[2px] text-white/90">ON-PREMISE</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-6">
                    Your servers.<br />Your sovereignty.
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-white/90 border-b border-white/20 pb-8 mb-8 font-medium">
                    Run the entire QuGenie stack on infrastructure you control. No telemetry pipelines, no data leaving your perimeter, no SaaS vendor between you and your operational truth.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {onPremBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] font-medium text-white">
                        <svg className="w-5 h-5 text-white shrink-0 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factor Comparison Table */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#222] bg-[#FAFAF9] dark:bg-[#000000]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24">
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#111] dark:text-white uppercase mb-12 text-center">
              Which is right for you?
            </h2>
            <div className="w-full overflow-x-auto border border-[#E5E5E5] dark:border-[#333] rounded-[16px] bg-white dark:bg-[#111] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#E5E5E5] dark:border-[#333] bg-[#F5F5F5] dark:bg-[#222]">
                    <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-[#555] dark:text-[#A6A6A6] w-1/4">FACTOR</th>
                    <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-[var(--primary)] w-3/8">CLOUD SaaS</th>
                    <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-[#111] dark:text-white w-3/8">ON-PREMISE</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#E5E5E5] dark:border-[#333] hover:bg-[#FAFAF9] dark:hover:bg-[#1a1a1a] transition-colors">
                      <td className="px-8 py-6 text-[16px] font-bold text-[#111] dark:text-white align-top">{row.factor}</td>
                      <td className="px-8 py-6 text-[16px] font-medium text-[#555] dark:text-[#A6A6A6] align-top leading-[1.6]">{row.cloud}</td>
                      <td className="px-8 py-6 text-[16px] font-medium text-[#555] dark:text-[#A6A6A6] align-top leading-[1.6]">{row.onprem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>



        <Newsletter 
          title="Not sure which fits? We will walk your team through both."
          description="We'll help you evaluate your infrastructure needs and show you how QuGenie adapts to either."
          buttonText="Book a Free Demo"
          onButtonClick={() => handleHash("#/contact")}
        />

        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] relative overflow-hidden" data-name="PlatformDeploymentPage">
      
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0040C1]/15 via-transparent to-transparent pointer-events-none blur-[100px] z-0" />

      {/* Hero Section */}
      <section className="w-full max-w-[1120px] mx-auto px-6 pt-[60px] pb-[80px] flex flex-col gap-6 relative z-10 items-start text-left">
        
        {/* Cinematic Volumetric Light Ray Effect */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[100%] pointer-events-none -z-10 mix-blend-screen opacity-70">
          
          {/* Broad, soft ambient light streaming from the right */}
          <div className="absolute top-1/2 right-[-20%] w-[150%] h-[400px] bg-gradient-to-l from-[#0040C1]/40 via-[#5586ff]/10 to-transparent -translate-y-1/2 blur-[60px] transform-gpu" />
          
          {/* Focused, intense core beam matching brand colors */}
          <div className="absolute top-1/2 right-0 w-[100%] h-[100px] bg-gradient-to-l from-[#5586ff]/40 via-[#0040C1]/20 to-transparent -translate-y-1/2 blur-[30px] transform-gpu animate-[pulse_5s_ease-in-out_infinite]" />
          
          {/* Bright center origin point */}
          <div className="absolute top-1/2 right-[-5%] w-[300px] h-[300px] bg-[#5586ff]/20 rounded-full -translate-y-1/2 blur-[80px]" />
        </div>
        
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12px] font-bold uppercase tracking-[4px] text-[#0040C1] block"
        >
          DEPLOYMENT
        </motion.span>
        
        <div className="w-full flex justify-start">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-left text-[48px] md:text-[64px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-medium tracking-tighter leading-[1.1] text-foreground max-w-[800px] mt-4 mb-6 m-0 p-0"
          >
            Your infrastructure.<br />Your call.
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[18px] md:text-[20px] leading-[1.6] text-muted-foreground max-w-[700px]"
        >
          Cloud SaaS for speed, on-premise for sovereignty. Same platform, same data model, same audit trail. Pick what fits your operational posture today; switch when it doesn't.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 flex justify-start"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleHash("#/contact")}
            className="bg-[#0040C1] text-white font-semibold text-[16px] px-[32px] py-[16px] rounded-[8px] cursor-pointer shadow-[0_8px_20px_rgba(0,64,193,0.3)] hover:bg-[#0033a0] transition-all"
          >
            Book a Free Demo
          </motion.button>
        </motion.div>
      </section>

      {/* Cloud vs On-Prem Side-by-Side Cards */}
      <section className="w-full max-w-[1120px] px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Cloud SaaS Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-card/40 backdrop-blur-md border border-border/60 p-[40px] rounded-[24px] flex flex-col justify-between items-start gap-8 overflow-hidden transition-all duration-300 hover:bg-card/60 hover:border-[#10b981]/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#10b981] opacity-[0.03] blur-[60px] group-hover:opacity-[0.1] transition-opacity duration-500 rounded-full" />
          
          <div className="flex flex-col gap-6 w-full relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#10b981]/10 text-[#10b981] rounded-[8px] border border-[#10b981]/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#10b981]">CLOUD SaaS</span>
            </div>
            
            <h3 className="text-[28px] md:text-[32px] font-semibold text-foreground tracking-tight leading-tight">
              Managed by us.<br />Run anywhere.
            </h3>
            
            <p className="text-[15px] leading-[1.6] text-muted-foreground border-b border-border/50 pb-6">
              Sovereign cloud hosted in India, with the operational simplicity of SaaS. We manage updates, backups, and infrastructure; you pay per user per month.
            </p>
            
            <ul className="flex flex-col gap-3 mt-2">
              {cloudBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-foreground/80">
                  <svg className="w-5 h-5 text-[#10b981] shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleHash("#/contact")}
            className="w-full relative z-10 bg-secondary/50 border border-border/80 text-foreground hover:bg-[#10b981] hover:text-white hover:border-[#10b981] font-semibold py-4 rounded-[8px] cursor-pointer transition-all shadow-sm"
          >
            Start a Cloud Trial
          </motion.button>
        </motion.div>

        {/* On-Premise Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-[#0040C1] p-[40px] rounded-[24px] flex flex-col justify-between items-start gap-8 overflow-hidden shadow-[0_20px_40px_rgba(0,64,193,0.2)]"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white opacity-[0.05] blur-[80px] rounded-full pointer-events-none" />
          
          <div className="absolute top-0 right-0 bg-white text-[#0040C1] text-[10px] font-bold uppercase tracking-[2px] px-5 py-2 rounded-bl-[12px] shadow-sm">
            RECOMMENDED
          </div>

          <div className="flex flex-col gap-6 w-full relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 text-white rounded-[8px] border border-white/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="text-[12px] font-bold uppercase tracking-[2px] text-white/90">ON-PREMISE</span>
            </div>
            
            <h3 className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight leading-tight">
              Your servers.<br />Your sovereignty.
            </h3>
            
            <p className="text-[15px] leading-[1.6] text-white/80 border-b border-white/20 pb-6">
              Run the entire QuGenie stack on infrastructure you control. No telemetry pipelines, no data leaving your perimeter, no SaaS vendor between you and your operational truth.
            </p>
            
            <ul className="flex flex-col gap-3 mt-2">
              {onPremBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-white">
                  <svg className="w-5 h-5 text-[#60a5fa] shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleHash("#/platform/on-premise")}
            className="w-full relative z-10 bg-white text-[#0040C1] hover:bg-[#f0f4ff] font-semibold py-4 rounded-[8px] cursor-pointer transition-colors shadow-md"
          >
            Talk to Us About On-Prem
          </motion.button>
        </motion.div>

      </section>

      {/* Factor Comparison Table */}
      <section className="w-full max-w-[1120px] px-6 py-[60px] flex flex-col gap-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-[#0040C1]/10 rounded-[8px] border border-[#0040C1]/20">
            <svg className="w-5 h-5 text-[#0040C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]">
            Which is right for you?
          </h2>
        </div>

        <div className="w-full overflow-hidden border border-border/60 rounded-[24px] bg-card/40 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/20">
                <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-muted-foreground w-1/4">FACTOR</th>
                <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-[#0040C1] w-3/8">CLOUD SaaS</th>
                <th className="px-8 py-6 text-[12px] font-bold uppercase tracking-[2px] text-[#0040C1] w-3/8">ON-PREMISE</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, idx) => (
                <tr key={idx} className="border-b border-border/40 hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6 text-[15px] font-semibold text-foreground align-top group-hover:text-[#0040C1] transition-colors">{row.factor}</td>
                  <td className="px-8 py-6 text-[14px] text-muted-foreground align-top leading-[1.6]">{row.cloud}</td>
                  <td className="px-8 py-6 text-[14px] text-muted-foreground align-top leading-[1.6]">{row.onprem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="w-full max-w-[1120px] px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Why On-Premise Case */}
        <motion.div 
          whileHover={{ y: -4 }}
          onClick={() => handleHash("#/platform/on-premise")}
          className="group relative bg-card/30 backdrop-blur-sm border border-border/60 p-8 rounded-[24px] cursor-pointer flex flex-col items-start gap-4 hover:bg-card/60 hover:border-[#0040C1]/40 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0040C1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0040C1]">DEEP DIVE</span>
          <h4 className="text-[22px] font-semibold text-foreground tracking-tight group-hover:text-[#0040C1] transition-colors">
            Why On-Premise
          </h4>
          <p className="text-[14px] leading-[1.6] text-muted-foreground">
            The full case for sovereign, in-perimeter deployment — data control, no vendor lock-in, air-gapped operation.
          </p>
          <span className="text-[14px] font-semibold text-[#0040C1] flex items-center gap-2 mt-2">
            Read the On-Premise case <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </motion.div>

        {/* Why QuGenie is Cost Effective */}
        <motion.div 
          whileHover={{ y: -4 }}
          onClick={() => handleHash("#/platform/cost-effective")}
          className="group relative bg-card/30 backdrop-blur-sm border border-border/60 p-8 rounded-[24px] cursor-pointer flex flex-col items-start gap-4 hover:bg-card/60 hover:border-[#0040C1]/40 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0040C1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0040C1]">DEEP DIVE</span>
          <h4 className="text-[22px] font-semibold text-foreground tracking-tight group-hover:text-[#0040C1] transition-colors">
            Why QuGenie is Cost Effective
          </h4>
          <p className="text-[14px] leading-[1.6] text-muted-foreground">
            How on-premise stabilises total cost of ownership while SaaS pricing keeps escalating with your data growth.
          </p>
          <span className="text-[14px] font-semibold text-[#0040C1] flex items-center gap-2 mt-2">
            See the cost argument <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </motion.div>

      </section>

      {/* Bottom Conversion Band (Using the newly redesigned Newsletter look) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 py-[100px] relative z-10">
        <div className="relative overflow-hidden bg-card/40 border border-border/60 rounded-[24px] p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0040C1] to-transparent opacity-80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[120px] bg-[#0040C1] opacity-30 blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]">
              Not sure which fits? We will walk your team through both.
            </h2>
            <motion.div className="mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleHash("#/contact")}
                className="bg-[#0040C1] text-white font-semibold text-[15px] px-8 py-3 rounded-[8px] hover:shadow-[0_8px_20px_rgba(0,64,193,0.3)] transition-all cursor-pointer"
              >
                Book a Free Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
