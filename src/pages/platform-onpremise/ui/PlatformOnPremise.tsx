import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import { Shield, WifiOff, Building2, Server, HardDrive, Settings } from "lucide-react";
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background';
import { Footer } from "@/widgets/footer/ui/Footer";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import imgHeroMockup from "@/assets/hero_mockup.png";

export default function PlatformOnPremise() {
  const handleDemoClick = () => {
    window.location.hash = "#/contact";
  };

  const offeringsLeft = [
    {
      num: "01",
      title: "100% Data Sovereignty",
      desc: "Your data never leaves your servers. No third-party cloud. No breach risks from vendor infrastructure. You own your data completely, legally, permanently."
    },
    {
      num: "02",
      title: "Offline Capability",
      desc: "Remote sites, warehouses, and branches keep working even without internet. Data syncs automatically when connectivity is restored."
    },
    {
      num: "03",
      title: "Ideal for Regulated Industries",
      desc: "Healthcare, finance, manufacturing — strict data-localisation and compliance requirements. QuGenie on-premise meets every standard."
    }
  ];

  const offeringsRight = [
    {
      num: "04",
      title: "High-Availability Architecture",
      desc: "Clustered servers with automated failover. Warm-standby hot replicas. Zero-downtime deployment patterns. Operations don't stop when hardware does."
    },
    {
      num: "05",
      title: "Works on Your Existing Hardware",
      desc: "No mandatory server upgrades. QuGenie runs efficiently on your current IT infrastructure — reducing total cost of ownership dramatically."
    },
    {
      num: "06",
      title: "Full Customisation Freedom",
      desc: "No vendor restrictions on customisation. Deploy, configure, and extend QuGenie exactly the way your business requires — with no approval from us."
    }
  ];

  const { designSystem } = useThemeCustomizer();

  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-background text-[#111111] dark:text-white min-h-screen w-full flex flex-col pt-32 pb-32" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
        
        {/* ── Bright Aesthetic Hero ── */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col mt-12 gap-4 relative">
          <span className="inline-block border border-[#d1d1d1] dark:border-[#333] text-[#555] dark:text-[#A6A6A6] text-[11px] font-bold px-3 py-1 rounded-[6px] w-fit uppercase tracking-wider bg-white dark:bg-[#111111] shadow-sm">
            Platform Deployment
          </span>
          <h1 className="text-[56px] md:text-[72px] font-serif leading-[1.05] tracking-tight max-w-[900px] text-[#111] dark:text-white">
            Why On-Premise and Why Almost No ERP Offers It Properly.
          </h1>
          <p className="text-[18px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[800px] mt-4">
            On-premise ERP requires deep engineering maturity — it's far harder to package, deploy, and support than a simple SaaS product. Most modern ERP vendors have abandoned it entirely. QuGenie offers true on-premise deployment with high-availability architecture, clustered servers, automated failover, and offline capability for branch sites.
          </p>
        </div>

        {/* New Added Section: High Availability */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start pt-16 mt-16 border-t border-[#E5E5E5] dark:border-[#333]">
          <h2 className="text-[32px] leading-[40px] md:text-[36px] md:leading-[48px] font-sans font-medium tracking-tight text-[#111] dark:text-white pr-8">
            High Availability. Total Sovereignty.<br />Your Infrastructure.
          </h2>
          <p className="text-[18px] leading-[28px] md:text-[18px] md:leading-[28px] text-[#555] dark:text-[#A6A6A6] lg:pt-2">
            Most ERP companies default to cloud-only and charge you forever. QuGenie leads with on-premise because we believe your data should live on your servers, under your control, with zero dependency on our uptime, our pricing, or our business decisions.
          </p>
        </div>

        <EbayWhatYouGetSection />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="PlatformOnPremisePage">
      
      {/* Cosmic Parallax — High Availability Section */}
      <section className="w-full">
        <CosmicParallaxBg
          head="Why On-Premise and Why Almost No ERP Offers It Properly."
          text="On-premise ERP requires deep engineering maturity — it's far harder to package, deploy, and support than a simple SaaS product. Most modern ERP vendors have abandoned it entirely. QuGenie offers true on-premise deployment with high-availability architecture, clustered servers, automated failover, and offline capability for branch sites. This isn't a legacy feature — it's a strategic advantage for businesses in regulated industries, those with sensitive data, and organizations that simply refuse to be locked into a vendor's cloud."
          loop={true}
          className="w-full min-h-[100vh]"
        >
          <div className="absolute bottom-0 left-0 w-full h-[35%] flex items-center px-6 md:px-16 z-10">
            <div className="w-full max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <h3 className="text-white font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight tracking-[-0.02em]">
                High Availability. Total Sovereignty.<br />Your Infrastructure.
              </h3>
              <p className="text-white/60 font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] text-[14px] md:text-[16px] leading-[1.6]">
                Most ERP companies default to cloud-only and charge you forever. QuGenie leads with on-premise because we believe your data should live on your servers, under your control, with zero dependency on our uptime, our pricing, or our business decisions.
              </p>
            </div>
          </div>
        </CosmicParallaxBg>
      </section>

      {/* What You Get Layout Section - Stacking Cards */}
      <section className="w-full max-w-[1120px] px-6 mx-auto relative z-10 mb-[120px] mt-10">
        <WhatYouGetSection />
      </section>

      <Footer />
    </div>
  );
}

const allOfferings = [
  {
    num: "01",
    title: "100% Data Sovereignty",
    desc: "Your data never leaves your servers. No third-party cloud. No breach risk from vendor infrastructure. You own your data completely, legally, permanently.",
    color: "var(--brand-500)",
    icon: Shield
  },
  {
    num: "02",
    title: "Offline Capability",
    desc: "Remote sites, warehouses, and branches keep working even without internet. Data syncs automatically when connectivity is restored.",
    color: "var(--brand-600)",
    icon: WifiOff
  },
  {
    num: "03",
    title: "Ideal for Regulated Industries",
    desc: "Healthcare, finance, manufacturing — strict data-localisation and compliance requirements. QuGenie on-premise meets every standard.",
    color: "var(--brand-700)",
    icon: Building2
  },
  {
    num: "04",
    title: "High-Availability Architecture",
    desc: "Clustered servers with automated failover. Branch-site offline replicas. Zero-downtime deployment patterns. Operations don't stop when one node does.",
    color: "var(--brand-800)",
    icon: Server
  },
  {
    num: "05",
    title: "Works on Your Existing Hardware",
    desc: "No mandatory server upgrades. QuGenie runs efficiently on your current IT infrastructure — reducing total cost of ownership dramatically.",
    color: "var(--brand-900)",
    icon: HardDrive
  },
  {
    num: "06",
    title: "Full Customization Freedom",
    desc: "No vendor restrictions on customisations. Deploy, configure, and extend QuGenie exactly the way your business requires — with no approval from us.",
    color: "var(--brand-950)",
    icon: Settings
  }
];

interface FeatureCardProps {
  i: number;
  num: string;
  title: string;
  desc: string;
  color: string;
  icon: React.ElementType;
}

const FeatureCard = ({ i, num, title, desc, color, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="h-[80vh] flex items-start justify-center sticky top-[100px] overflow-hidden">
      <motion.div
        style={{ backgroundColor: color }}
        className={`absolute w-full flex flex-col justify-between shadow-[0_-5px_15px_rgba(0,0,0,0.3)] rounded-[12px] feature-card-offset-${i}`}
      >
        {/* Card Header Row — Display xs (24px) per design system */}
        <div className="w-full px-6 md:px-8 lg:px-10 flex justify-between items-center shrink-0 border-b border-white/10" style={{ height: 'var(--card-row-h, 64px)' }}>
          <h3
            className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]
                       text-[20px] md:text-[24px] lg:text-[24px]
                       font-medium leading-[32px] tracking-[-0.02em]
                       text-white"
          >
            {title}
          </h3>
          <span className="text-[11px] md:text-[12px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] text-white/50 tracking-widest uppercase tabular-nums">
            {num}
          </span>
        </div>

        {/* Card Body — Text sm (14px) for description */}
        <div className="w-full flex-grow flex flex-row justify-between items-end px-6 md:px-8 lg:px-10 py-6 md:py-8 gap-4">
          <p
            className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]
                       text-[13px] md:text-[14px]
                       font-normal leading-[20px] tracking-[0]
                       text-white/70
                       max-w-[75%] lg:max-w-[65%]"
          >
            {desc}
          </p>

          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative border border-white/40 shrink-0">
            <Icon size={18} strokeWidth={1.5} className="text-white" />
            <div className="absolute bottom-[-5px] left-[-5px] w-3 h-3 md:w-4 md:h-4 bg-[#4ade80] opacity-70 blur-[3px]"></div>
            <div className="absolute top-[-5px] right-[-5px] w-3 h-3 md:w-4 md:h-4 bg-[#60a5fa] opacity-70 blur-[3px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WhatYouGetSection = () => {
  return (
    <>
      <style>{`
        :root {
          --card-row-h: 56px;
        }
        @media (min-width: 768px) {
          :root { --card-row-h: 64px; }
        }
        @media (min-width: 1024px) {
          :root { --card-row-h: 72px; }
        }
        ${allOfferings.map((_, i) => `
          .feature-card-offset-${i} {
            top: calc(${i} * 56px);
            height: calc(80vh - (${i} * 56px));
          }
          @media (min-width: 768px) {
            .feature-card-offset-${i} {
              top: calc(${i} * 64px);
              height: calc(80vh - (${i} * 64px));
            }
          }
          @media (min-width: 1024px) {
            .feature-card-offset-${i} {
              top: calc(${i} * 72px);
              height: calc(80vh - (${i} * 72px));
            }
          }
        `).join('')}
      `}</style>
      <div className="relative flex flex-col lg:flex-row w-full items-start">
        {/* Left sticky panel */}
        <div className="w-full lg:w-[45%] h-[80vh] sticky top-[100px] flex flex-col justify-between
                        px-6 md:px-10 lg:px-12 py-6 lg:py-10
                        bg-black text-white z-0 border-r border-white/10 rounded-[12px] lg:rounded-r-none">
          {/* Top: index label */}
          <div className="flex justify-end">
            <span className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]
                             text-[11px] md:text-[12px] font-medium tracking-widest uppercase text-white/50">
              #04
            </span>
          </div>

          {/* Middle: Display lg heading — 48px / 60px lh / -2% tracking */}
          <div className="flex-grow flex flex-col justify-start pt-4 lg:pt-6">
            <h2
              className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]
                         text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px]
                         font-semibold leading-[1.05] tracking-[-0.02em]
                         text-white"
            >
              On-Premise<br/>What You<br/>Get
            </h2>
          </div>

          {/* Bottom: Text sm body */}
          <div>
            <p
              className="font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]
                         text-[13px] md:text-[14px]
                         font-normal leading-[20px] tracking-[0]
                         text-white/60
                         max-w-[300px]"
            >
              A breakdown of exactly what our true on-premise architecture provides. Total control over your data, your servers, and your security.
            </p>
          </div>
        </div>

        {/* Right scrolling cards */}
        <div className="w-full lg:w-[55%] flex flex-col z-10 bg-background">
          {allOfferings.map((offering, i) => (
            <FeatureCard
              key={offering.num}
              i={i}
              {...offering}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function EbayWhatYouGetSection() {
  return (
    <div className="w-full mt-32 px-6">
      <div className="max-w-[1280px] mx-auto bg-white dark:bg-[#111111] rounded-[16px] p-8 md:p-12 lg:p-20 text-[#111111] dark:text-white flex flex-col font-sans border border-[#e5e5e5] dark:border-[#333] shadow-sm">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 gap-10 pb-16 items-end">
          <div className="col-span-1">
            <h2 className="text-[48px] md:text-[64px] font-medium tracking-tight leading-[1.05] max-w-[600px] text-[#111111] dark:text-white">
              On-Premise: What You Get
            </h2>
          </div>
        </div>

        {/* List Section */}
        <div className="flex flex-col w-full">
          {allOfferings.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#e5e5e5] dark:border-[#333] py-10 md:py-12 items-center group hover:bg-[var(--primary)] hover:border-transparent transition-all duration-500 ease-out rounded-[12px] px-4 -mx-4 cursor-pointer">
              <div className="lg:col-span-7 xl:col-span-8 flex items-center pl-2 md:pl-8 mb-6 lg:mb-0">
                <span className="text-[80px] md:text-[100px] font-light leading-none text-[#111] dark:text-white group-hover:text-white font-sans tracking-tighter transition-colors duration-500 ease-out">{idx + 1}</span>
              </div>
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-2 pr-4">
                <span className="text-[18px] md:text-[20px] text-[#111] dark:text-white group-hover:text-white font-medium transition-colors duration-500 ease-out">{item.title}</span>
                <span className="text-[15px] text-[#555] dark:text-[#A6A6A6] group-hover:text-white/90 leading-[1.5] transition-colors duration-500 ease-out">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
