import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, MotionValue } from "motion/react";
import { useRef, useState } from "react";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Box, Lock, Search, Settings, Sparkles, CreditCard, Users, Network, BarChart3, Database, Server, TrendingUp, User, MapPin, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import BorderGlow from "@/components/ui/border-glow";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import imgHeroMockup from "@/assets/hero_mockup.png";

import imgWhy1 from "@/assets/why_1.png";
import imgWhy2 from "@/assets/why_2.png";
import imgWhy3 from "@/assets/why_3.png";
import imgWhy4 from "@/assets/why_4.png";
import imgWhy5 from "@/assets/why_5.png";

const costFeatures = [
  { text: "More transactions", icon: CreditCard },
  { text: "More customers", icon: Users },
  { text: "More employees, partners, suppliers", icon: Network },
  { text: "More documents, analytics", icon: BarChart3 }
];

function ExponentialGrowthCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"]
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // There are 4 items. We want the active state to track the progress bar closely.
    // 0 is active initially, switches as line hits next item.
    if (latest < 0.25) setActiveIdx(0);
    else if (latest < 0.5) setActiveIdx(1);
    else if (latest < 0.75) setActiveIdx(2);
    else setActiveIdx(3);
  });

  return (
    <div ref={carouselRef} className="relative w-full h-[300vh] bg-[#03010a]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-start pt-[120px] overflow-hidden">
        
        {/* Header Content */}
        <div className="text-center max-w-[800px] px-6 z-20 flex flex-col items-center gap-6">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#0040C1] bg-[#0040C1]/10 px-3 py-1.5 rounded-md border border-[#0040C1]/20 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#0040C1] rounded-full animate-pulse" />
            [ Data Growth ]
          </span>
          <h2 className="text-[36px] md:text-[56px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-medium leading-[1.1] tracking-[-0.02em] text-white">
            As your business grows, your data grows exponentially, not linearly:
          </h2>
        </div>

        {/* Curved Carousel */}
        <div className="relative w-[1400px] h-[1400px] shrink-0 mt-[100px] pointer-events-none">
          {/* Subtle Ambient Glow inside Arch */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0040C1]/20 blur-[120px] rounded-full pointer-events-none" />

          {/* The Arch Line (Background) */}
          <div className="absolute inset-0 rounded-full border border-white/5 border-t-white/20" />

          {/* Static Wrapper for Icons */}
          <div className="absolute inset-0 w-full h-full">
            {costFeatures.map((item, i) => {
              const angle = -45 + i * 30; // -45, -15, 15, 45 from top center
              const isCurrent = activeIdx === i; // This is for the glowing state
              return (
                <div 
                  key={i}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transformOrigin: "50% 700px",
                    transform: `rotate(${angle}deg)`
                  }}
                >
                  <IconItem 
                    icon={item.icon} 
                    isCurrent={isCurrent} 
                    angle={angle} 
                  />
                </div>
              );
            })}
          </div>

          {/* Active Text Display */}
          <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-full max-w-[600px] text-center z-30 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-[28px] md:text-[36px] text-white font-semibold leading-tight px-4">
                    {costFeatures[activeIdx].text}
                  </h4>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

interface IconItemProps {
  icon: React.ElementType;
  isCurrent: boolean;
  angle: number;
}

function IconItem({ icon: Icon, isCurrent, angle }: IconItemProps) {
  // Counter-rotate statically since the container no longer spins
  return (
    <div 
      style={{ transform: `rotate(${-angle}deg)` }}
      className={`relative flex items-center justify-center transition-all duration-500 ease-out pointer-events-auto cursor-pointer ${
        isCurrent ? "w-[90px] h-[90px]" : "w-[60px] h-[60px]"
      }`}
    >
      {/* Active Glow */}
      <div 
        className={`absolute inset-0 rounded-full bg-[#0040C1] transition-opacity duration-500 ${
          isCurrent ? "opacity-30 blur-[25px]" : "opacity-0"
        }`} 
      />

      {/* Circle Icon Body using BorderGlow animation */}
      <BorderGlow
        animated={isCurrent}
        loop={true}
        glowColor="220 100 60"
        colors={['#5586ff', '#0040C1', '#002060']}
        backgroundColor="rgba(3, 1, 10, 0.8)"
        borderRadius={100}
        glowRadius={isCurrent ? 20 : 10}
        glowIntensity={isCurrent ? 1.5 : 0.5}
        edgeSensitivity={50}
        className="w-full h-full rounded-full flex items-center justify-center transition-all duration-500"
      >
        <div className="w-full h-full flex items-center justify-center relative z-10 rounded-full overflow-hidden">
           {/* Inner glass overlay to retain some 3D feel */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
           <Icon className={`relative z-10 transition-all duration-500 ${isCurrent ? "text-white w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "text-[#5586ff] w-5 h-5 drop-shadow-[0_0_8px_rgba(85,134,255,0.6)]"}`} />
        </div>
      </BorderGlow>
    </div>
  );
}

export default function PlatformCost() {
  const handleDemoClick = () => {
    window.location.hash = "#/contact";
  };

  const translationBullets = [
    { text: "Rising storage costs (charges per GB/TB over limit)", icon: Database },
    { text: "Increased compute costs (more users, more processing, more automation)", icon: Server },
    { text: "Recurring subscription escalations (20% upgrades, feature lockouts)", icon: TrendingUp },
    { text: "Vendor lock-in pricing (switching becomes costly once data is large)", icon: Lock }
  ];

  const { designSystem } = useThemeCustomizer();

  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-background text-[#111111] dark:text-white min-h-screen w-full flex flex-col pt-32 pb-32" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        
        <EbayCostTopSections />

        <EbayCostSection />

        {/* <div className="mt-32">
          <Newsletter 
            title="See how QuGenie's on-premise and hybrid models give you predictable costs, full ownership, and long-term savings without hidden SaaS escalations."
            description=""
            buttonText="Book a Free Demo"
          />
        </div> */}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-[#03010a] text-white pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="PlatformCostPage">
      
      {/* Top Split Section */}
      <section className="w-full max-w-[1200px] px-6 py-[80px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        {/* Subtle background radial glow */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Left Column Header */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[56px] font-bold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent"
          >
            THE HIDDEN COST OF SAAS ERP — AND WHY IT KEEPS RISING
          </motion.h1>
        </div>

        {/* Right Column Supporting Text */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 lg:pt-10">
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[17px] leading-[1.65] text-[#8B949E]"
          >
            Most modern ERP platforms are built on a SaaS-rebuild model that appears affordable at the beginning — low upfront cost, quick deployment, and minimal infrastructure responsibility. The hidden reality highlighted is how the cost structure escalates over time.
          </motion.p>
        </div>

      </section>

      <ExponentialGrowthCarousel />

      {/* Middle Cost Grid translation details */}
      <section className="w-full max-w-[1200px] px-6 py-[120px] flex flex-col lg:flex-row gap-16 items-start relative z-10 border-t border-white/10 mt-10">
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#5586ff]/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between items-start gap-[40px] lg:sticky lg:top-[120px]">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#5586ff] bg-[#5586ff]/10 px-3 py-1.5 rounded-md border border-[#5586ff]/20 flex items-center gap-2 w-max">
              <span className="w-1.5 h-1.5 bg-[#5586ff] rounded-full animate-pulse" />
              [ Impact Analysis ]
            </span>
            <h3 className="text-[36px] md:text-[44px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-[480px]">
              In SaaS ERP systems, this directly translates into:
            </h3>
            <p className="text-[16px] leading-[1.65] text-[#8B949E] max-w-[480px]">
              Over a 3-5 year horizon, organizations often realise they are no longer paying for software — they are paying rent-subsidy for their own data growth. The more successful your business becomes, the more expensive your ERP becomes.
            </p>
          </div>
        </div>

        {/* Right Column (2x2 Grid) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 pt-4">
          {translationBullets.map((bullet, idx) => {
            const titleMatch = bullet.text.match(/^(.*?)\s*\((.*?)\)$/);
            const title = titleMatch ? titleMatch[1] : bullet.text;
            const desc = titleMatch ? titleMatch[2] : "";
            const Icon = bullet.icon;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 group"
              >
                {/* Glowing Icon Box */}
                <div className="w-[64px] h-[64px] bg-[#5586ff] rounded-[16px] flex items-center justify-center text-white text-[20px] font-bold shadow-[0_0_24px_rgba(85,134,255,0.3)] relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-white dark:bg-[#111111]/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <Icon className="w-7 h-7 relative z-10" />
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-[1px] bg-white dark:bg-[#111111]/10 group-hover:bg-[#5586ff]/50 transition-colors duration-500" />

                {/* Title & Description */}
                <div className="flex flex-col gap-2 pr-4">
                  <h4 className="text-[18px] md:text-[20px] font-medium text-white/90 leading-[1.3] group-hover:text-white transition-colors duration-300">
                    {title}
                  </h4>
                  {desc && (
                    <p className="text-[14px] text-[#8B949E] leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom Grid List Section */}
      <section className="w-full max-w-[1120px] px-6 py-[80px] flex flex-col gap-10">
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-[28px] font-semibold tracking-tight text-foreground">
            QUGENIE ON-PREMISE COST THAT STABILISES, NOT EXPLODES
          </h2>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            QuGenie's on-premise-first architecture flips this model entirely — instead of renting infrastructure forever, you own your environment. Here is how that changes the economics:
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-4">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-black dark:text-[#5586ff]" />}
            title="Infrastructure Investment"
            description="Your server cost is largely upfront or predictable. Data growth does not trigger recurring vendor charges." />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-black dark:text-[#5586ff]" />}
            title="Zero Data-Aligned Billing"
            description="Whether you store 10 GB or 10 TB — your ERP cost does not increase proportionally." />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-[#5586ff]" />}
            title="No Per-User Escalator Pressure"
            description="Growth in team size does not force constant pricing tier upgrades." />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-black dark:text-[#5586ff]" />}
            title="No Forced Subscription Cycles"
            description="You run software on your own terms, without driven pricing updates." />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-black dark:text-[#5586ff]" />}
            title="Higher Long-Term ROI"
            description="Over 3-5 years, total cost of ownership falls significantly compared to SaaS alternatives." />
        </ul>
      </section>

      {/* <Newsletter 
        title="See how QuGenie's on-premise and hybrid models give you predictable costs, full ownership, and long-term savings without hidden SaaS escalations."
        description=""
        buttonText="Book a Free Demo"
      /> */}

      <Footer />
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({
  area,
  icon,
  title,
  description
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-border p-2 md:rounded-3xl md:p-3 bg-card overflow-hidden">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="border-[0.75px] border-neutral-200 dark:border-neutral-800/60 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-card dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600/40 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

function EbayCostSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [imgWhy1, imgWhy2, imgWhy3, imgWhy4, imgWhy5];

  const items = [
    { title: "Infrastructure Investment", desc: "Your server cost is largely upfront or predictable. Data growth does not trigger recurring vendor charges." },
    { title: "Zero Data-Based Billing", desc: "Whether you store 10 GB or 10 TB — your ERP cost does not increase proportionally." },
    { title: "No Per-User Escalation Pressure", desc: "Growth in team size does not force constant pricing-tier upgrades." },
    { title: "No Forced Subscription Cycles", desc: "You are not tied to perpetual monthly cost increases driven by vendor pricing changes." },
    { title: "Higher Long-Term ROI", desc: "Over 3-7 years, total cost of ownership drops significantly compared to SaaS alternatives." },
  ];

  return (
    <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 mt-32 flex flex-col gap-12">
      
      {/* Section Heading */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-[48px] leading-[60px] md:text-[48px] md:leading-[60px] font-sans font-medium uppercase tracking-tight text-[#111] dark:text-white max-w-[900px]">
          QUGENIE ON-PREMISE COST THAT STABILISES, NOT EXPLODES
        </h2>
        <p className="text-[18px] leading-[28px] md:text-[18px] md:leading-[28px] text-[#555] dark:text-[#A6A6A6] max-w-[800px] mt-6">
          QuGenie's on-premise-first architecture flips this model entirely. Instead of renting infrastructure forever, you own your environment. Here is how that changes the economics.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-auto items-stretch">
        {/* Left side: List of 5 cards */}
        <div className="flex-1 flex flex-col gap-4">
        {items.map((item, idx) => {
          const isActive = activeIndex === idx; 
          return (
            <div 
              key={idx} 
              onMouseEnter={() => setActiveIndex(idx)}
              className={`group flex-1 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                isActive 
                  ? "bg-[var(--primary)] text-white shadow-lg scale-[1.02] -translate-y-1 z-10" 
                  : "bg-white dark:bg-[#111111] text-[#111] dark:text-white border border-[#E5E5E5] dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-neutral-50 dark:hover:bg-[#1a1a1a]"
              }`}
            >
              {/* Top Right Title */}
              <div className="w-full flex justify-end mb-6">
                <h3 className="text-[30px] leading-[38px] md:text-[30px] md:leading-[38px] font-sans font-medium uppercase tracking-wide text-right max-w-[320px]">
                  {item.title}
                </h3>
              </div>
              
              {/* Bottom Left & Right */}
              <div className="flex items-end justify-between w-full mt-auto">
                <p className={`text-[12px] leading-[18px] md:text-[12px] md:leading-[18px] font-bold uppercase tracking-[1.5px] max-w-[260px] transition-colors duration-300 ${isActive ? "text-white/80" : "text-[#555] dark:text-[#A6A6A6]"}`}>
                  {item.desc}
                </p>
                <div className="flex-shrink-0 ml-4 pb-1 transform transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#ffffff" : "var(--primary)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right side: Image Panel */}
      <div className="flex-1 relative rounded-[24px] overflow-hidden min-h-[500px] lg:min-h-full bg-[var(--primary)] shadow-[0_8px_32px_color-mix(in_srgb,var(--primary)_20%,transparent)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            alt="Feature Preview"
          />
        </AnimatePresence>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/30 to-transparent pointer-events-none" />
        
      </div>
      
      </div>
    </div>
  );
}

function EbayCostTopSections() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="w-full bg-[#FAFAF9] dark:bg-[#0a0a0a] py-16 lg:py-24 mt-8">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <h1 className="text-[48px] leading-[60px] md:text-[48px] md:leading-[60px] font-sans font-normal uppercase tracking-tight text-[#111] dark:text-white">
            THE HIDDEN COST OF SAAS ERP — AND WHY IT KEEPS RISING
          </h1>
          <p className="text-[18px] leading-[28px] md:text-[18px] md:leading-[28px] text-[#555] dark:text-[#A6A6A6] lg:pt-2">
            Most modern ERP platforms are built on a SaaS (cloud) model that appears affordable at the beginning — low upfront cost, quick deployment, and minimal infrastructure responsibility. But what is rarely highlighted is how the cost structure evolves over time.
          </p>
        </div>

        {/* 1st Image Section (Cards) */}
        <div className="flex flex-col gap-8 pt-8 border-t border-[#E5E5E5] dark:border-[#333]">
          <h2 className="text-[48px] leading-[60px] md:text-[48px] md:leading-[60px] font-sans font-medium text-[#111] dark:text-white tracking-tight">
            As your business grows, your data grows exponentially, not linearly:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Users, text: "More transactions" },
              { icon: User, text: "More customers" },
              { icon: MapPin, text: "More employees,\ncommunications" },
              { icon: FileText, text: "More documents,\nanalytics" }
            ].map((item, i) => {
              const isDark = activeCard === i;
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveCard(i)}
                  className={`flex flex-col justify-between p-6 rounded-[16px] min-h-[280px] transition-all duration-300 cursor-pointer ${
                    isDark 
                      ? "bg-[var(--primary)] text-white shadow-lg -translate-y-1" 
                      : "bg-white dark:bg-[#111] text-[#111] dark:text-white border border-[#E5E5E5] dark:border-[#333] shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-start items-start w-full">
                    <item.icon className={`w-8 h-8 transition-colors duration-300 ${isDark ? "text-white" : "text-[var(--primary)]"}`} strokeWidth={1.5} />
                  </div>
                  <div className="mt-auto pt-8">
                    <span className={`text-[16px] leading-[24px] md:text-[16px] md:leading-[24px] whitespace-pre-line transition-colors duration-300 ${isDark ? "text-white font-medium" : "text-[#555] dark:text-[#A6A6A6]"}`}>
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2nd Image Section (Stacked Layout) */}
        <div className="flex flex-col gap-12 lg:gap-16 pt-12 border-t border-[#E5E5E5] dark:border-[#333]">
          
          <div className="flex flex-col gap-6 max-w-[800px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E5E5] dark:border-[#333] bg-white dark:bg-[#111] text-[12px] font-semibold tracking-[1px] uppercase text-[#555] dark:text-[#aaa] w-fit shadow-sm">
              The Reality
            </div>
            <h2 className="text-[48px] leading-[60px] md:text-[48px] md:leading-[60px] font-sans font-medium text-[#111] dark:text-white tracking-tight">
              In SaaS ERP systems, this directly translates into:
            </h2>
            <p className="text-[18px] leading-[28px] md:text-[18px] md:leading-[28px] text-[#555] dark:text-[#A6A6A6]">
              Over a 3-5 year horizon, organisations often realise they are no longer paying for software — they are paying continuously for their own data growth. In essence: the more successful your business becomes, the more expensive your ERP becomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4 max-w-[1000px]">
            {[
              { title: "Rising storage costs", desc: "Charged per GB/TB over time." },
              { title: "Increased compute costs", desc: "More users, more processing, more automation." },
              { title: "Recurring subscription escalations", desc: "Tier upgrades, feature unlocks." },
              { title: "Vendor lock-in pricing", desc: "Switching becomes costly once data is large." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-[30px] bg-[var(--primary)] rounded-full" />
                  <h4 className="text-[30px] leading-[38px] md:text-[30px] md:leading-[38px] font-medium text-[#111] dark:text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-[16px] leading-[24px] md:text-[16px] md:leading-[24px] text-[#555] dark:text-[#A6A6A6] lg:pr-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
