import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import { Shield, WifiOff, Building2, Server, HardDrive, Settings } from "lucide-react";
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background';
import { Footer } from "@/widgets/footer/ui/Footer";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";

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

      <Newsletter 
        title="QuGenie's on-premise-first architecture gives you full control over your data, infrastructure, and costs — without relying on vendor-controlled cloud systems."
        description=""
        buttonText="Request Demo"
      />

      <Footer />
    </div>
  );
}

const allOfferings = [
  {
    num: "01",
    title: "100% Data Sovereignty",
    desc: "Your data never leaves your servers. No third-party cloud. No breach risk from vendor infrastructure. You own your data completely, legally, permanently.",
    color: "#2970FF",
    icon: Shield
  },
  {
    num: "02",
    title: "Offline Capability",
    desc: "Remote sites, warehouses, and branches keep working even without internet. Data syncs automatically when connectivity is restored.",
    color: "#155EEF",
    icon: WifiOff
  },
  {
    num: "03",
    title: "Ideal for Regulated Industries",
    desc: "Healthcare, finance, manufacturing — strict data-localisation and compliance requirements. QuGenie on-premise meets every standard.",
    color: "#004EEB",
    icon: Building2
  },
  {
    num: "04",
    title: "High-Availability Architecture",
    desc: "Clustered servers with automated failover. Branch-site offline replicas. Zero-downtime deployment patterns. Operations don't stop when one node does.",
    color: "#0040C1",
    icon: Server
  },
  {
    num: "05",
    title: "Works on Your Existing Hardware",
    desc: "No mandatory server upgrades. QuGenie runs efficiently on your current IT infrastructure — reducing total cost of ownership dramatically.",
    color: "#00359E",
    icon: HardDrive
  },
  {
    num: "06",
    title: "Full Customisation Freedom",
    desc: "No vendor restrictions on customisations. Deploy, configure, and extend QuGenie exactly the way your business requires — with no approval from us.",
    color: "#002266",
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
