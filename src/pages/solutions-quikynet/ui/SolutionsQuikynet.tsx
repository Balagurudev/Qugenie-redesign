import { motion } from "motion/react";
import ImageReveal from "@/components/ui/image-reveal";
import { Footer } from "@/widgets/footer/ui/Footer";
import MagicRings from "@/widgets/hero/ui/MagicRings";
import { GlareCard } from "@/ui/glare-card";
import { Timeline } from "@/components/ui/timeline";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";

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

export default function SolutionsQuikynet() {
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

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-[#03010a] text-foreground font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="SolutionsQuikynetPage">

      {/* Centered Top Header with Concentric Glowing Waves */}
      <section className="w-full min-h-[70vh] md:min-h-[75vh] bg-[#03010a] text-white py-[160px] md:py-[200px] flex flex-col items-center justify-center text-center relative overflow-hidden shrink-0 border-b border-border/10">

        {/* MagicRings Canvas covering the entire section background exactly as the component */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <MagicRings
            color="#0040C1"
            colorTwo="#155EEF"
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
            className="text-[12px] font-bold uppercase tracking-[4px] text-[#5586ff] opacity-80"
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
            <span className="text-[12px] font-bold uppercase tracking-[4px] text-[#5586ff] opacity-80">
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
          <div className="w-[60px] h-[3px] bg-[#5586ff]" />
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
          <div className="w-[80px] h-[3px] bg-[#0040C1]" />
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
