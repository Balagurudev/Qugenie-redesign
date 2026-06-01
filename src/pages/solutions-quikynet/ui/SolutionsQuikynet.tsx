import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "motion/react";
import React, { useRef, useState } from "react";
import ImageReveal from "@/components/ui/image-reveal";
import { Footer } from "@/widgets/footer/ui/Footer";
import MagicRings from "@/widgets/hero/ui/MagicRings";
import { GlareCard } from "@/ui/glare-card";
import { Timeline } from "@/components/ui/timeline";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

// Import real product images
import metalCardImg from "@/assets/quikynet_metal_card.png";
import pvcCardImg from "@/assets/quikynet_pvc_card.png";
import keychainImg from "@/assets/quikynet_keychain.png";
import step1Img from "@/assets/quikynet_step1.png";
import step2Img from "@/assets/quikynet_step2.png";
import step3Img from "@/assets/quikynet_step3.jpg";
import step4Img from "@/assets/quikynet_step4.png";
import convergenceImg from "@/assets/quikynet_qugenie_convergence.png";

import indCom1 from "@/assets/ind_community_1.png";
import indCom2 from "@/assets/ind_community_2.png";
import indCom3 from "@/assets/ind_community_3.png";
import indStu1 from "@/assets/ind_student_1.png";
import indStu2 from "@/assets/ind_student_2.png";
import indStu3 from "@/assets/ind_student_3.png";
import indMar1 from "@/assets/ind_market_1.png";
import indMar2 from "@/assets/ind_market_2.png";
import indMar3 from "@/assets/ind_market_3.png";
import indVis1 from "@/assets/ind_visitor_1.png";
import indVis2 from "@/assets/ind_visitor_2.png";
import indVis3 from "@/assets/ind_visitor_3.png";

const EbayDialStepsSection = ({ titles, descs, images }: { titles: string[], descs: string[], images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth continuous rotation of the dial directly mapped to scroll
  const smoothRotation = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(3, Math.floor(latest * 4));
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="w-full h-[250vh] relative mt-20 mb-32">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="max-w-[1280px] w-full mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Steps List */}
          <div className="w-full md:w-[35%] flex flex-col justify-center gap-10 relative z-10 pl-4 md:pl-8">
            {titles.map((title, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={idx} className="relative flex items-center cursor-pointer" onClick={() => setActiveIndex(idx)}>
                  <div className={`flex items-center gap-5 transition-all duration-700 ease-out ${isActive ? 'opacity-100 scale-[1.02]' : 'opacity-40 scale-100'}`} style={{ transformOrigin: 'left' }}>
                    {/* Thumbnail Icon */}
                    <div className={`w-[50px] h-[50px] shrink-0 rounded-[12px] overflow-hidden transition-all duration-700 ${isActive ? 'shadow-[0_8px_24px_rgba(0,0,0,0.15)] ring-2 ring-[var(--primary)]' : 'shadow-sm'}`}>
                      <img src={images[idx]} className="w-full h-full object-cover" />
                    </div>
                    {/* Title */}
                    <span className={`text-[15px] md:text-[17px] whitespace-nowrap transition-all duration-700 ease-out ${isActive ? 'font-bold text-[#111] dark:text-white' : 'font-medium text-[#666] dark:text-[#A6A6A6]'}`}>
                      {title}
                    </span>
                  </div>
                  
                  {/* Connecting Line */}
                  <div className={`absolute left-full ml-4 w-[40px] md:w-[60px] h-[3px] bg-[var(--primary)] rounded-full transition-all duration-500 ease-out ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />
                </div>
              )
            })}
          </div>

          {/* Right Side: Dial & Content */}
          <div className="w-full md:w-[65%] h-full relative flex items-center justify-center">
            
            {/* Tick Marks Circle Background */}
            <motion.div 
              style={{ rotate: smoothRotation }}
              className="absolute w-[1000px] h-[1000px] rounded-full flex items-center justify-center opacity-40 dark:opacity-20 pointer-events-none" 
            >
               {Array.from({ length: 60 }).map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute w-[2px] h-[12px] bg-[#999] dark:bg-[#fff] rounded-full" 
                   style={{ transform: `rotate(${i * 6}deg) translateY(-490px)` }} 
                 />
               ))}
               {/* 4 decorative highlighted ticks */}
               <div className="absolute w-[4px] h-[18px] bg-[var(--primary)] rounded-full" style={{ transform: `rotate(0deg) translateY(-490px)` }} />
               <div className="absolute w-[4px] h-[18px] bg-[var(--primary)] rounded-full" style={{ transform: `rotate(90deg) translateY(-490px)` }} />
               <div className="absolute w-[4px] h-[18px] bg-[var(--primary)] rounded-full" style={{ transform: `rotate(180deg) translateY(-490px)` }} />
               <div className="absolute w-[4px] h-[18px] bg-[var(--primary)] rounded-full" style={{ transform: `rotate(270deg) translateY(-490px)` }} />
            </motion.div>
            
            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[480px]">
              <span className="bg-[#f0f9ff] text-[var(--primary)] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">
                HOW TO START
              </span>
              
              <div className="min-h-[140px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="text-[36px] md:text-[48px] font-sans font-bold tracking-tight text-[#111] dark:text-white leading-[1.15] mb-4">
                      {titles[activeIndex]}
                    </h2>
                    <p className="text-[15px] md:text-[17px] text-[#666] dark:text-[#A6A6A6] leading-[1.6]">
                      {descs[activeIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Card Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="mt-10 bg-[#f4f5f6] dark:bg-[#1a1a1a] rounded-[24px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col items-center w-full max-w-[480px]"
                >
                  <div className="flex items-center gap-3 w-full mb-4 px-2">
                    <img src={images[activeIndex]} className="w-8 h-8 rounded-[8px] object-cover border border-[#e5e5e5] dark:border-[#333]" />
                    <span className="font-bold text-[14px] text-[#111] dark:text-white">{titles[activeIndex]}</span>
                  </div>
                  <div className="w-full h-[240px] rounded-[16px] overflow-hidden flex items-center justify-center bg-white dark:bg-[#111] border border-[#e5e5e5] dark:border-[#333]">
                    <img src={images[activeIndex]} className="w-full h-full object-contain rounded-[16px]" />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionsQuikynet() {
  const { palette, shadeMapping, designSystem } = useThemeCustomizer();
  const primaryShadeKey = shadeMapping[palette.id] || "800";
  // Use the exact same shade for both colors to avoid any blue/hue shifts
  const secondaryShadeKey = primaryShadeKey;
  const handleStartClick = () => {
    window.location.hash = "#/contact";
  };

  const featureImages = [
    {
      id: 1,
      images: [
        indCom1,
        indCom2,
        indCom3
      ],
      alt: 'Community Networking',
      desc: 'Create or join professional communities. Share announcements, job posts, and updates. Host digital networking events to build your network beyond contacts.'
    },
    {
      id: 2,
      images: [
        indStu1,
        indStu2,
        indStu3
      ],
      alt: 'Student Catalogue',
      desc: 'Great student IDs with digital portfolios integration. Instant access to achievements, skills, and certifications. Perfect for colleges seeking institutional placement.'
    },
    {
      id: 3,
      images: [
        indMar1,
        indMar2,
        indMar3
      ],
      alt: 'Marketplace',
      desc: 'Showcase works or services. Discover trusted professionals and partners. Grow brand visibility within the Quikynet ecosystem.'
    },
    {
      id: 4,
      images: [
        indVis1,
        indVis2,
        indVis3
      ],
      alt: 'Visitor Management',
      desc: 'Simplify how you welcome and track visitors. Real-time visitor logs, analytics, and customisable badges powered by Quikynet identity.'
    }
  ];

  const timelineData = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-[18px] md:text-[24px] font-medium text-white mb-6">
            Create your account
          </p>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-md">
            Sign up in seconds to access your personalized Quikynet dashboard and start building your digital identity.
          </p>
          <div className="w-full flex justify-center">
            <img src={step1Img} className="rounded-[16px] object-contain h-48 md:h-72 lg:h-[400px] w-auto max-w-full shadow-lg border border-white/5" alt="Step 1" />
          </div>
        </div>
      )
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-[18px] md:text-[24px] font-medium text-white mb-6">
            Pick your plan and pay securely
          </p>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-md">
            Choose the perfect networking package that fits your business needs, and check out with our secure payment gateway.
          </p>
          <div className="w-full flex justify-center">
            <img src={step2Img} className="rounded-[16px] object-contain h-48 md:h-72 lg:h-[400px] w-auto max-w-full shadow-lg border border-white/5" alt="Step 2" />
          </div>
        </div>
      )
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-[18px] md:text-[24px] font-medium text-white mb-6">
            Enter details and upload your photo
          </p>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-md">
            Personalize your profile with your professional information, contact details, and a high-quality headshot.
          </p>
          <div className="w-full flex justify-center">
            <img src={step3Img} className="rounded-[16px] object-contain h-48 md:h-72 lg:h-[400px] w-auto max-w-full shadow-lg border border-white/5" alt="Step 3" />
          </div>
        </div>
      )
    },
    {
      title: "Step 4",
      content: (
        <div>
          <p className="text-[18px] md:text-[24px] font-medium text-white mb-6">
            Select your theme and submit
          </p>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-md">
            Finalize your aesthetic by picking a custom theme layout, and publish your new digital business card!
          </p>
          <div className="w-full flex justify-center">
            <img src={step4Img} className="rounded-[16px] object-contain h-48 md:h-72 lg:h-[400px] w-auto max-w-full shadow-lg border border-white/5" alt="Step 4" />
          </div>
        </div>
      )
    }
  ];

  const products = [
    {
      num: "007",
      title: "Premium Metal NFC Cards",
      tagline: "Quikynet - Premium Metal NFC Card",
      desc: "Crafted from premium stainless steel. One-tap NFC + QR access to your digital profile. Fully customisable with your logo and brand theme. Weatherproof and long-lasting.",
      image: metalCardImg
    },
    {
      num: "008",
      title: "Smart PVC NFC Cards",
      tagline: "Quikynet - Smart PVC NFC Card",
      desc: "20+ ready-to-use design templates. One-tap NFC technology. Waterproof, durable, and flexible. Modern simplicity meets smart functionality.",
      image: pvcCardImg
    },
    {
      num: "009",
      title: "Q-TAG Keychains",
      tagline: "Quikynet - Q-TAG Keychain",
      desc: "Compact, stylish, and scannable QR keychains. Instantly share your Quikynet profile. Ideal for businesses, events, and personal branding. Carry your digital identity everywhere.",
      image: keychainImg
    }
  ];

  const timelineTitles = [
    "Create your account",
    "Pick your plan and pay securely",
    "Enter details and upload your photo",
    "Select your theme and submit"
  ];
  
  const timelineDescs = [
    "Sign up in seconds to access your personalized Quikynet dashboard and start building your digital identity.",
    "Choose the perfect networking package that fits your business needs, and check out with our secure payment gateway.",
    "Personalize your profile with your professional information, contact details, and a high-quality headshot.",
    "Finalize your aesthetic by picking a custom theme layout, and publish your new digital business card!"
  ];

  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-[#111111] text-[#111] dark:text-white min-h-screen w-full flex flex-col font-sans pt-32 pb-16">
        
        {/* Hero Section */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col mt-12 gap-6 relative">
          <span className="text-[11px] font-bold tracking-widest text-[var(--primary)] uppercase flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-sm" />
            QUIKYNET
          </span>
          <h1 className="text-[56px] md:text-[72px] font-serif leading-[1.05] tracking-tight max-w-[900px] text-[#111] dark:text-white">
            Your Digital Business Card & B2B Sales Agent
          </h1>
          <p className="text-[18px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[800px]">
            Quikynet is a smart networking platform designed to simplify how professionals, businesses, and institutions connect, share, and grow.
          </p>
          <div className="mt-4">
            <button onClick={handleStartClick} className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--primary)]/20">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full mt-32 px-6">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-bold tracking-widest text-[var(--primary)] uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-sm" />
                QUIKYNET FEATURES
              </span>
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
                <h2 className="text-[44px] md:text-[56px] font-serif font-bold tracking-tight text-[#111] dark:text-white leading-[1.1] max-w-[500px]">
                  Features
                </h2>
                <p className="text-[16px] text-[#777] dark:text-[#A6A6A6] max-w-[500px] leading-[1.5]">
                  Simplify how professionals, businesses, and institutions connect, share, and grow. Modular & Flexible: Start Small, Scale Limitlessly.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featureImages.map((feat, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-[#333] rounded-[24px] overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow flex flex-col">
                  <div className="p-8 pb-0">
                    <h3 className="text-[24px] font-semibold text-[#111] dark:text-white mb-2">{feat.alt}</h3>
                    <p className="text-[15px] text-[#555] dark:text-[#A6A6A6] leading-[1.6]">{feat.desc}</p>
                  </div>
                  <div className="flex-1 mt-8 bg-[#fafafa] dark:bg-[#111] p-8 border-t border-[#e5e5e5] dark:border-[#333] flex items-center justify-center">
                    <img src={feat.images[0]} alt={feat.alt} className="w-full h-auto object-contain max-h-[300px] rounded-[12px] group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Start Section */}
        <EbayDialStepsSection 
          titles={timelineTitles} 
          descs={timelineDescs} 
          images={[step1Img, step2Img, step3Img, step4Img]} 
        />

        {/* Products Section */}
        <div className="w-full mt-32 px-6">
          <div className="max-w-[1280px] mx-auto bg-[#f8f6f5] dark:bg-[#151515] rounded-[32px] p-8 md:p-12 lg:p-16">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#e5e5e5] dark:border-[#333] pb-10 mb-12 gap-12">
              <p className="italic text-[#666] dark:text-[#A6A6A6] text-[18px] md:text-[22px] max-w-[280px]">
                — Smart networking solutions built for modern professionals.
              </p>
              <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-sans tracking-tight text-[#111] dark:text-white max-w-[700px] leading-[1.05]">
                We craft premium, high-impact NFC products <span className="font-bold">for professionals who refuse to blend in.</span>
              </h2>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((prod, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full h-[320px] md:h-[450px] rounded-[16px] overflow-hidden bg-[#ebebeb] dark:bg-[#222] mb-6 flex items-center justify-center">
                    <img 
                      src={prod.image} 
                      className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-105" 
                      alt={prod.title} 
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div>
                    <h3 className="text-[20px] font-bold text-[#111] dark:text-white mb-1">{prod.title}</h3>
                    <p className="text-[14px] text-[#666] dark:text-[#A6A6A6]">{prod.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Convergence Section */}
        <div className="w-full mt-32 px-6 mb-32">
          <div className="max-w-[1280px] mx-auto bg-[#111] text-white rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center border border-[#333] shadow-lg">
            <div className="p-12 md:p-16 flex-1 flex flex-col gap-6">
              <h2 className="text-[40px] md:text-[48px] font-serif font-bold tracking-tight leading-[1.1]">
                Quikynet × QuGenie
              </h2>
              <p className="text-[16px] text-white/80 leading-[1.6]">
                Quikynet and QuGenie are complementary products from QuGates Technologies. Quikynet manages your external identity and connections; QuGenie manages your internal operations. Together they form a complete digital framework for modern Indian businesses.
              </p>
            </div>
            <div className="flex-1 w-full h-[300px] md:h-[400px]">
              <img src={convergenceImg} className="w-full h-full object-cover" alt="Convergence" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-20">
          <Newsletter 
            title="Experience how digital identity, smart networking, and real-time connections work together — tailored to your business."
            description=""
            buttonText="Get Started Today"
            onButtonClick={handleStartClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-[#03010a] text-foreground font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="SolutionsQuikynetPage">

      {/* Centered Top Header with Concentric Glowing Waves */}
      <section className="w-full min-h-[70vh] md:min-h-[75vh] bg-[#03010a] text-white py-[160px] md:py-[200px] flex flex-col items-center justify-center text-center relative overflow-hidden shrink-0 border-b border-border/10">

        {/* MagicRings Canvas covering the entire section background exactly as the component */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <MagicRings
            color={palette.shades[primaryShadeKey]}
            colorTwo={palette.shades[secondaryShadeKey]}
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.42}
            radiusStep={0.08}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />
        </div>

        {/* Content Centered */}
        <div className="relative z-10 max-w-[850px] px-6 flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] font-bold uppercase tracking-[4px] text-[var(--glow-secondary)] opacity-80"
          >
            QUIKYNET
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] leading-[60px] md:text-[72px] md:leading-[90px] font-bold tracking-tight text-white max-w-[720px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]"
          >
            Your Digital Business Card & B2B Sales Agent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-zinc-300 max-w-[620px]"
          >
            Quikynet is a smart networking platform designed to simplify how professionals, businesses, and institutions connect, share, and grow.
          </motion.p>
        </div>
      </section>

      {/* Features Image Reveal Section */}
      <section className="w-full max-w-[1200px] px-6 py-[120px] mx-auto relative z-10 flex flex-col gap-6 md:gap-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start mb-4">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-bold uppercase tracking-[4px] text-[var(--glow-secondary)] opacity-80">
              QUIKYNET FEATURES
            </span>
            <h2 className="text-[48px] leading-[60px] md:text-[72px] md:leading-[90px] font-bold tracking-tight text-white font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]">
              Features
            </h2>
          </div>
          <div className="flex items-start md:justify-end md:pt-[36px]">
            <p className="text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-zinc-300 max-w-[450px]">
              Simplify how professionals, businesses, and institutions connect, share, and grow. Modular & Flexible: Start Small, Scale Limitlessly.
            </p>
          </div>
        </div>

        <ImageReveal images={featureImages} size="expanded" variant="dark-theme" />
      </section>

      {/* HOW TO START Steps Section */}
      <section className="w-full flex flex-col items-center border-t border-border/10 pt-20 mt-10">
        <div className="text-center w-full flex flex-col items-center gap-2 mb-4">
          <h2 className="text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] font-bold tracking-tight text-white font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] uppercase">
            HOW TO START
          </h2>
          <div className="w-[60px] h-[3px] bg-[var(--glow-secondary)]" />
        </div>

        <Timeline data={timelineData} />
      </section>

      {/* Middle Banner Callout */}
      <Newsletter 
        title="Experience how digital identity, smart networking, and real-time connections work together — tailored to your business."
        description=""
        buttonText="Get Started Today"
        onButtonClick={handleStartClick}
      />

      {/* Products NFC Cards Section */}
      <section className="w-full max-w-[1120px] px-6 py-[80px] flex flex-col gap-12">
        <div className="text-center w-full flex flex-col items-center gap-2">
          <h2 className="text-[32px] font-semibold tracking-tight text-foreground">
            Products
          </h2>
          <div className="w-[80px] h-[3px] bg-[var(--primary)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((prod, idx) => (
            <GlareCard key={prod.num} className="flex flex-col items-center justify-between py-8 px-6 cursor-pointer">
              {/* Outer rounded container with border */}
              <div className="relative bg-black/40 border border-slate-800/80 rounded-[32px] w-full px-[20px] pb-2 pt-16 backdrop-blur-[1px]">

                {/* Visual Product Image Container */}
                <div className="flex justify-center items-center min-h-[200px] rounded-[20px] bg-slate-900/60 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-full w-full object-contain max-h-[160px] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-3 items-center text-center mt-6">
                  <h4 className="text-[18px] font-semibold text-foreground tracking-tight">
                    {prod.title}
                  </h4>
                  <p className="text-[14px] leading-[24px] text-muted-foreground">
                    {prod.desc}
                  </p>
                </div>
              </div>
            </GlareCard>
          ))}
        </div>
      </section>

      {/* Quikynet x QuGenie Convergence Section */}
      <section className="w-full max-w-[1120px] px-6 py-[60px] border-t border-border/40 grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-12">
        <div className="md:col-span-7 flex flex-col items-start gap-4">
          <h2 className="text-[28px] font-semibold tracking-tight text-foreground">
            Quikynet × QuGenie
          </h2>
          <p className="text-[16px] leading-[28px] text-muted-foreground mt-2">
            Quikynet and QuGenie are complementary products from QuGates Technologies. Quikynet manages your external identity and connections; QuGenie manages your internal operations. Together they form a complete digital framework for modern Indian businesses.
          </p>
        </div>

        <div className="md:col-span-5 h-[260px] bg-secondary border border-border rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center p-0">
          <img src={convergenceImg} alt="Quikynet x QuGenie Convergence" className="w-full h-full object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
