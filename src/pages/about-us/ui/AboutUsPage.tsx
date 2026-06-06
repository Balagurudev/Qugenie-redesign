import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { ThreeDCarousel } from "@/components/ui/three-d-carousel";
import { TeamCardExpansion } from "@/components/ui/card-expansion";

import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import FlowArt, { FlowSection } from "@/components/ui/flow-art";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Layers, Blocks, ShieldCheck } from "lucide-react";

export default function AboutUsPage() {
  const { designSystem } = useThemeCustomizer();
  const handleContactClick = () => {
    window.location.hash = "#/contact";
  };
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridMousePos, setGridMousePos] = useState({ x: 0, y: 0 });
  const [visionHoverIdx, setVisionHoverIdx] = useState<number | null>(null);
  const [missionHoverIdx, setMissionHoverIdx] = useState<number | null>(null);

  // ── Data arrays must be defined BEFORE any conditional return ──
  const founderItems = [
    {
      id: "founder-1",
      role: "Founder & CEO",
      name: "Wg Cdr Srambikal Sudhakaran (Retd.)",
      desc: "Founder and CEO of QuGates Technologies, which he established in December 2020 after a 23-year career in the Indian Air Force. He set QuGenie's founding thesis: that India needs sovereign, intelligent enterprise software it owns end-to-end — and built the company to deliver it.",
      num: "018",
      imgTag: "Founder Portrait — Founder & CEO",
      image: "/src/assets/sudhakaran.jpg"
    },
    {
      id: "founder-3",
      role: "Co-Founder & Director",
      name: "Dr Thiruvonasundari Duraiswamy",
      desc: "Enthusiastic next-generation technologist with deep passion for EV engineering, MATLAB modeling, and AI/ML instrumentation to drive intelligent automation. Over 15 years of proven expertise in teaching, industrial training, and ramping up workforces for agile environments. Holds a doctorate from Amrita School of Engineering and was awarded a prestigious Gold Medal by Visvesvaraya Technological University for exceptional M.E. achievements. Passionate about enhancing workflows through agile-based culture, with deep experience in digitalization and automotive technologies.",
      num: "029",
      imgTag: "Co-Founder & Director — EV & AI/ML",
      image: "/src/assets/sundari.jpg"
    },
    {
      id: "founder-2",
      role: "Co-Founder & Director",
      name: "Ms Ritu Advani",
      desc: "Passionate STEM educator and entrepreneur with over 10 years of experience in curriculum development for block-based and text-based coding, Android App Development, Machine Learning, AI, and STEM-based Robotic Education. Coach for world-level competitions: World Robotics Olympiad (WRO), FIRST Robotics, VEX Robotics, MIT App Inventor Appathon, Codeavour, Makebot CodingBee. Mentor of Change at Atal Innovation Mission (NITI Aayog). Founder of Coding Tale, on a mission to make STEM education accessible to all. President of Giants Group of Mumbai ONE, a nonprofit working in healthcare, education, women empowerment, and community welfare.",
      num: "025",
      imgTag: "Co-Founder & Director — STEM Education",
      image: "/src/assets/ritu.jpg"
    }
  ];

  const teamItems = [
    {
      id: "team-1",
      role: "Engineering Lead",
      name: "Profile coming soon",
      desc: "Owns the QuGenie platform build — the bounded contexts, the event bus, the deployment topology.",
      num: "021",
      imgTag: "Engineering Lead — Platform Architecture",
      image: "/src/assets/eng_1.png"
    },
    {
      id: "team-2",
      role: "Product Lead",
      name: "Profile coming soon",
      desc: "Owns the product surface — what gets built, in what order, and how it maps to real MSME workflows.",
      num: "022",
      imgTag: "Product Lead — Strategic Roadmap",
      image: "/src/assets/prod_2.png"
    },
    {
      id: "team-3",
      role: "Operations Lead",
      name: "Profile coming soon",
      desc: "Owns infrastructure and delivery — the dual-LB topology, the on-premise deployments, the uptime.",
      num: "023",
      imgTag: "Operations Lead — System Delivery",
      image: "/src/assets/ops_2.png"
    },
    {
      id: "team-4",
      role: "Customer Success Lead",
      name: "Profile coming soon",
      desc: "Owns the post-go-live relationship — onboarding, migration, and the named-partner promise.",
      num: "024",
      imgTag: "Customer Success Lead — Client Relations",
      image: "/src/assets/cs_1.png"
    }
  ];

  // ── useEffect must also be BEFORE any conditional return (Rules of Hooks) ──
  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const SplitText = (window as any).SplitText;
    const imagesLoaded = (window as any).imagesLoaded;

    if (!gsap || !ScrollTrigger || !SplitText || !imagesLoaded) {
      console.warn("GSAP libraries are still loading...");
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const getCarouselCellTransforms = (count: number, radius: number) => {
      const angleStep = 360 / count;
      return Array.from({ length: count }, (_, i) => {
        const angle = i * angleStep;
        return `rotateY(${angle}deg) translateZ(${radius}px)`;
      });
    };

    const splitMap = new Map();

    // Perform text splits
    document.querySelectorAll('.scene__title span, .preview__title span').forEach((span) => {
      const split = SplitText.create(span, {
        type: 'chars',
        charsClass: 'char',
        autoSplit: true,
      });
      splitMap.set(span, split);
    });

    const scenes = document.querySelectorAll('.scene');
    scenes.forEach((wrapper: any) => {
      const carousel = wrapper.querySelector('.carousel') as HTMLElement;
      const cards = carousel?.querySelectorAll('.card');
      const preview = wrapper.querySelector('.preview') as HTMLElement;
      const titleSpan = wrapper.querySelector('.scene__title span');
      const chars = splitMap.get(titleSpan)?.chars || [];
      const gridItems = preview?.querySelectorAll('.grid__item') || [];

      if (!carousel || !preview) return;

      // Position carousel cells in 3D perspective circle
      const radius = parseFloat(wrapper.dataset.radius || "500");
      const cells = carousel.querySelectorAll('.carousel__cell');
      const transforms = getCarouselCellTransforms(cells.length, radius);
      cells.forEach((cell: any, i: number) => {
        cell.style.transform = transforms[i];
      });

      // Master scroll scrub timeline for this scene
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=180%', // Pinned scroll track
          scrub: 1.2, // Extremely silky scrub transition
          pin: true, // PINS the scene stage in place
          anticipatePin: 1,
        },
      });

      // Phase 1: Rise from down, revolve cells around Y-axis, tilt slightly (0.0 to 4.0s)
      timeline
        .fromTo(carousel,
          { y: 350, rotationY: 45, z: -1000 },
          { y: 0, rotationY: -180, z: -550, ease: 'sine.out', duration: 4.0 },
          0
        )
        .fromTo(cards,
          { rotationZ: 12, filter: 'brightness(200%)' },
          { rotationZ: -8, filter: 'brightness(90%)', ease: 'sine.out', duration: 4.0 },
          0
        )
        .fromTo(chars,
          { autoAlpha: 0, rotationX: -90, z: -100 },
          { autoAlpha: 1, rotationX: 0, z: 0, stagger: 0.05, ease: 'back.out(1.5)', duration: 3.5 },
          0.5
        );

      // Phase 2: Zoom past camera, fade title out, trigger preview container backdrop fade (4.0 to 6.5s)
      timeline
        .to(carousel, {
          rotationX: 90,
          rotationY: -360,
          z: 2200,
          rotationZ: 270,
          autoAlpha: 0,
          ease: 'power2.inOut',
          duration: 2.5
        }, 4.0)
        .to(cards, { rotationZ: 0, duration: 2.5 }, 4.0)
        .to(chars, {
          autoAlpha: 0,
          rotationX: 90,
          z: 100,
          stagger: { each: 0.03, from: 'end' },
          ease: 'power2.in',
          duration: 2.0
        }, 4.0)
        .fromTo(preview,
          { autoAlpha: 0, pointerEvents: 'none' },
          { autoAlpha: 1, pointerEvents: 'auto', ease: 'power2.inOut', duration: 2.0 },
          4.5
        );

      // Phase 3: Spatial Euclidean distance-based card pop-in from center viewport (6.5 to 9.5s)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const itemData = Array.from(gridItems).map((el: any) => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const dx = centerX - elCenterX;
        const dy = centerY - elCenterY;
        const dist = Math.hypot(dx, dy);
        const isLeft = elCenterX < centerX;
        return { el, dx, dy, dist, isLeft };
      });

      const maxDist = Math.max(...itemData.map((d) => d.dist)) || 1;

      itemData.forEach(({ el, dx, dy, dist, isLeft }) => {
        const norm = dist / maxDist;
        const delay = (1 - norm) * 1.5; // Stagger based on distance from center
        const rotationY = isLeft ? 80 : -80;

        timeline.fromTo(el,
          {
            transformOrigin: `50% 50% ${dx > 0 ? -dx * 0.8 : dx * 0.8}px`,
            autoAlpha: 0,
            y: dy * 0.5,
            scale: 0.4,
            rotationY: rotationY,
            z: -3000
          },
          {
            y: 0,
            scale: 1,
            rotationY: 0,
            autoAlpha: 1,
            z: 0,
            duration: 2.0,
            ease: 'expo.out'
          },
          6.5 + delay
        );
      });

      // Extra hold time to let the user review the biographies before unpinning
      timeline.to({}, { duration: 1.0 });
    });

    imagesLoaded(document.querySelectorAll('.grid__item-image, .card__face'), { background: true }, () => {
      document.body.classList.remove('loading');
      ScrollTrigger.refresh();
    });

    // eBay layout cards interactions
    const visionStickyCards = gsap.utils.toArray('.gsap-vision-sticky-card');
    if (visionStickyCards.length > 0) {
      visionStickyCards.forEach((el: any) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 15%',
            end: 'max',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          startAt: {filter: 'blur(0px)'},
          filter: 'blur(3px)',
          scrollTrigger: {
            trigger: el,
            start: 'top 15%',
            end: '+=100%',
            scrub: true
          }
        }, 0)
        .to(el, {
          ease: 'none',
          scale: 0.4,
          yPercent: -50
        }, 0);
      });
    }

    const missionCards = gsap.utils.toArray('.gsap-mission-card');
    if (missionCards.length > 0) {
      gsap.fromTo(missionCards,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: {
            trigger: missionCards[0].parentElement,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      splitMap.forEach((split) => {
        if (split && split.revert) split.revert();
      });
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  // ── Conditional return for eBay design system (placed AFTER all hooks) ──
  if (designSystem === "ebay") {
    return (
      <div className="bg-[#FAFAF9] dark:bg-background text-[#111] dark:text-white min-h-screen w-full flex flex-col pt-32 pb-0" style={{ fontFamily: "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)" }}>
        
        {/* Minimal Hero Section */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-[60vh] gap-6 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d1d1d1] dark:border-[#333] text-[#555] dark:text-[#A6A6A6] text-[11px] font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest bg-white dark:bg-[#111111] shadow-sm">
            <div className="w-1.5 h-1.5 bg-[#111] dark:bg-white rounded-full animate-pulse" />
            ABOUT US
          </span>
          <h1 className="text-[60px] md:text-[96px] lg:text-[120px] font-sans leading-[1.1] tracking-tight text-[#111] dark:text-white uppercase mt-6">
            The people <br/>
            <span className="text-[#999] dark:text-[#A6A6A6]">behind QuGenie.</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[800px] mt-8">
            QuGenie is built by QuGates Technologies. We are engineers, operators, and domain practitioners who believe India's businesses deserve software that is sovereign by construction, thermal-hardened, and genuinely intelligent.
          </p>
        </div>

        {/* Vision Section (Image Layout Replication) */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#222] bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24 md:py-32">
            
            {/* Top Heading */}
            <div className="mb-16 max-w-[900px]">
              <h2 className="text-[48px] md:text-[64px] font-bold leading-[1] tracking-tight text-[#111] dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-[24px] md:text-[32px] font-medium tracking-tight text-[#555] dark:text-[#A6A6A6] leading-[1.3]">
                An India where every enterprise — from a single-shop MSME to a multi-state institution — runs on intelligent software it actually owns, on infrastructure it controls, without surrendering its data or its sovereignty to anyone.
              </p>
            </div>

            {/* Vertical Sticky Cards Stack (Index 8 Interaction) */}
            <div className="w-full flex flex-col gap-[5vh] pb-[20vh]">
              {[
                { label: "Sovereign by construction", desc: "The data stays with the business that earned it." },
                { label: "Convergence over collection", desc: "One platform that talks to itself, not a dozen that don't." },
                { label: "Intelligence as a right", desc: "Not a luxury reserved for large enterprises." }
              ].map((item, idx) => {
                const isHighlighted = visionHoverIdx === idx;
                return (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setVisionHoverIdx(idx)}
                    onMouseLeave={() => setVisionHoverIdx(null)}
                    className={`gsap-vision-sticky-card sticky top-[15vh] w-full max-w-[800px] mx-auto p-12 rounded-[24px] flex flex-col justify-between min-h-[50vh] border transition-colors duration-300 origin-top shadow-xl ${
                    isHighlighted 
                      ? "text-white shadow-2xl" 
                      : "bg-white dark:bg-[#111] border-[#E5E5E5] dark:border-[#333] text-[#111] dark:text-white"
                  }`}
                  style={isHighlighted ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' } : undefined}>
                    {/* Top Icon Area */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-[20px] ${
                      isHighlighted ? "bg-white" : "bg-[#111] dark:bg-white text-white dark:text-[#111]"
                    }`}
                    style={isHighlighted ? { color: 'var(--primary)' } : undefined}>
                      0{idx + 1}
                    </div>

                    {/* Middle Title */}
                    <div className="mt-12 mb-auto">
                      <h4 className="text-[32px] md:text-[40px] font-bold tracking-tight">
                        {item.label}
                      </h4>
                    </div>

                    {/* Bottom Paragraph & Link */}
                    <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <p className={`text-[18px] leading-[1.6] font-medium max-w-[400px] ${
                        isHighlighted ? "text-white/90" : "text-[#555] dark:text-[#A6A6A6]"
                      }`}>
                        {item.desc}
                      </p>
                      
                      <button className={`text-[16px] font-bold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity ${
                        isHighlighted ? "text-white" : "text-[#111] dark:text-white"
                      }`}>
                        {isHighlighted ? "Get started" : "Learn more"}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mission Section (Image Layout Replication) */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#222] bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full items-stretch">
              
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-between py-4 relative">
                <div>
                  <span className="text-[13px] font-medium text-[#555] dark:text-[#A6A6A6] block mb-16 lg:mb-24">
                    Key Value
                  </span>
                  <h2 className="text-[64px] md:text-[80px] font-bold leading-[1] tracking-tight text-[#111] dark:text-white mb-8">
                    Our<br/>Mission
                  </h2>
                  <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#555] dark:text-[#A6A6A6] max-w-[400px]">
                    To build and deliver QuGenie — a modular, sovereign, agentic ERP — so that any Indian organization can run HR, Finance, CRM, Sales, Inventory, Operations, and compliance from one sovereign platform, configured to the way it actually works.
                  </p>
                </div>

              </div>

              {/* Right Column Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Platform", desc: "Single platform that is configurable, pluggable, and reliable.", icon: <Layers className="w-8 h-8" strokeWidth={1.5} /> },
                  { label: "Modularity", desc: "True modularity where the architecture, not the vendor, decides the roadmap.", icon: <Blocks className="w-8 h-8" strokeWidth={1.5} /> },
                  { label: "Guaranteed", desc: "Stand behind every deployment with a named partner and an honest, written guarantee.", icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} /> }
                ].map((item, idx) => {
                  const isFirst = missionHoverIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      onMouseEnter={() => setMissionHoverIdx(idx)}
                      onMouseLeave={() => setMissionHoverIdx(null)}
                      className={`gsap-mission-card p-8 rounded-[16px] flex flex-col justify-between min-h-[340px] transition-all duration-300 border ${
                      isFirst 
                        ? "text-white shadow-xl scale-[1.02] border-transparent" 
                        : "bg-[#FAFAF9] dark:bg-[#111] text-[#111] dark:text-white border-[#E5E5E5] dark:border-[#333]"
                    }`}
                    style={isFirst ? { backgroundColor: 'var(--primary)' } : undefined}>
                      <div className="mb-12 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-[15px] leading-[1.5] font-medium mb-6 ${
                          isFirst ? "text-white/90" : "text-[#555] dark:text-[#A6A6A6]"
                        }`}>
                          {item.desc}
                        </p>
                        <div className={`w-full h-px mb-6 ${
                          isFirst ? "bg-white/30" : "bg-[#E5E5E5] dark:bg-[#333]"
                        }`} />
                        <h4 className="text-[16px] font-semibold tracking-tight">
                          {item.label}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#333] bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24 flex flex-col justify-center">
            <TeamCardExpansion items={founderItems} sectionTitle="Founders" subtitle="QuGenie exists because its founders chose to build the sovereign alternative rather than wait for one." />
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full border-t border-[#E5E5E5] dark:border-[#222] bg-[#FAFAF9] dark:bg-[#000000]">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-24 flex flex-col justify-center">
            <TeamCardExpansion items={teamItems} sectionTitle="The Team" />
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="AboutUsPage">

      {/* Hero Section */}
      <section
        className="w-full relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-background pt-[120px] group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        {/* Faint ambient dot grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />

        {/* Intense Interactive Glow & Illuminated Dots */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, color-mix(in srgb, var(--primary) 25%, transparent) 0%, transparent 60%)`
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`
          }}
        />

        {/* Intense core light */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 blend-screen"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`
          }}
        />

        {/* Ambient static fallback glow (hides when hovering) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/40 via-[var(--primary)]/5 to-transparent blur-[100px] pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

        <div className="w-full max-w-[1120px] mx-auto flex flex-col justify-between flex-grow">
          {/* Top tag and Heading */}
          <div className="relative z-10 px-6 pt-8">
            <p className="text-[14px] font-semibold tracking-[3px] text-primary uppercase flex items-center gap-2">
              ABOUT US
            </p>

            <h1 className="mt-12 text-[48px] md:text-[72px] leading-[1.1] font-semibold tracking-[-0.02em] text-foreground max-w-[800px]">
              The people behind QuGenie.
            </h1>
          </div>

          {/* Bottom text */}
          <div className="relative z-10 px-6 pb-16 flex items-start gap-6 max-w-[800px] mt-16 md:mt-32">
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-foreground/80 font-medium">
              QuGenie is built by QuGates Technologies — a deep technology company founded in December 2023 in Bengaluru. We are engineers, operators, and domain practitioners who believe India's businesses deserve software that is sovereign by construction, thermal-hardened, and genuinely intelligent. This page is about the people who carry that conviction, and the values and mission that reaction to it.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full border-t border-border/50 bg-background text-foreground">
        <div className="w-full max-w-[1120px] mx-auto px-6 py-24 md:py-32">

          {/* Vision Top */}
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
            <div className="w-full md:w-[45%] shrink-0">
              <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-semibold tracking-tight uppercase">
                OUR VISION
              </h2>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-6 text-[16px] leading-[1.7] text-muted-foreground font-medium">
              <p>
                An India where every enterprise — from a single-store MSME to a multi-state institution — runs on intelligent, self-sovereign software, on infrastructure it controls, without surrendering its data or its sovereignty to anyone.
              </p>
            </div>
          </div>

          {/* Vision Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { stat: "01", label: "Sovereignty", desc: "Sovereignty by construction — No dependency on SaaS vendors' decisions." },
              { stat: "02", label: "Intelligent", desc: "Genuinely intelligent — Software that actually does work, not just stores data." },
              { stat: "03", label: "A Right", desc: "Intelligence as a right, not a luxury reserved for large enterprises." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col group cursor-default">
                <div className="relative w-full h-[1px] bg-border mb-6">
                  {/* Animated Glowing Light Effect */}
                  <div 
                    className="absolute top-0 left-0 h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" 
                    style={{ boxShadow: '0 0 12px var(--primary)' }}
                  />
                </div>
                <div className="flex items-baseline gap-3 mb-6">
                  <h3 className="text-[36px] md:text-[44px] font-semibold leading-none tracking-tight">
                    {item.stat}
                  </h3>
                  <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.6] text-muted-foreground pr-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section (Card Grid Layout) */}
      <section className="w-full bg-background text-foreground py-24 md:py-32">
        <div className="w-full max-w-[1120px] mx-auto px-6 flex flex-col items-center">

          <h2 className="text-[36px] md:text-[48px] font-semibold tracking-[-0.02em] uppercase text-center mb-6">
            OUR MISSION
          </h2>
          <p className="text-[16px] leading-[1.7] text-muted-foreground text-center max-w-[800px] mb-16 font-medium">
            To build and deliver QuGenie — a modular, sovereign, agentic ERP — so that any Indian organization can run HR, Finance, CRM, Sales, Inventory, Operations, and compliance from one sovereign platform, configured to the way it actually works.
          </p>

          <div
            className="w-full relative group/grid border-l border-t border-border overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setGridMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
          >
            {/* The Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3">
              {[
                { stat: "04", label: "Platform", desc: "Single platform that is configurable, pluggable, and reliable." },
                { stat: "05", label: "Modularity", desc: "True modularity where the architecture, not the vendor, decides the roadmap." },
                { stat: "06", label: "Guaranteed", desc: "Stand behind every deployment with a named partner and an honest, written guarantee." }
              ].map((item, idx) => (
                <div key={idx} className="bg-card/80 border-r border-b border-border p-8 md:p-10 flex flex-col min-h-[320px] transition-colors relative z-10">
                  {/* Top Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-secondary/50 text-foreground mb-auto">
                    <span className="font-semibold text-[14px]">{item.stat}</span>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-auto pt-16">
                    <h4 className="text-[20px] font-semibold tracking-tight text-foreground mb-3">
                      {item.label}
                    </h4>
                    <p className="text-[14px] leading-[1.6] text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Spotlight Beam Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover/grid:opacity-100 transition-opacity duration-700 z-20 mix-blend-screen"
              style={{
                background: `radial-gradient(600px circle at ${gridMousePos.x}px ${gridMousePos.y}px, color-mix(in srgb, var(--primary) 15%, transparent) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 50%)`
              }}
            />
          </div>

        </div>
      </section>

      <div className="w-full bg-[#000411] py-16 flex flex-col gap-12">
        <TeamCardExpansion
          items={founderItems}
          sectionTitle="Founders"
          subtitle="QuGenie exists because its founders chose to build the sovereign alternative rather than wait for one."
        />
        <TeamCardExpansion
          items={teamItems}
          sectionTitle="The Team"
        />
      </div>

    </div>
  );
}
