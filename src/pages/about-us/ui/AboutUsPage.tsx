import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";
import { ThreeDCarousel } from "@/components/ui/three-d-carousel";
import { TeamCardExpansion } from "@/components/ui/card-expansion";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import FlowArt, { FlowSection } from "@/components/ui/flow-art";

export default function AboutUsPage() {
  const { designSystem } = useThemeCustomizer();
  const handleContactClick = () => {
    window.location.hash = "#/contact";
  };
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridMousePos, setGridMousePos] = useState({ x: 0, y: 0 });

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
      <div className="text-[#111] dark:text-white w-full" style={{ fontFamily: "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)" }}>
        <FlowArt>
          {/* Hero Section */}
          <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] border-b border-[#E5E5E5] dark:border-[#222]">
            <div className="flex flex-col gap-4 mt-24">
              <span className="text-[14px] font-bold tracking-[2px] uppercase text-[var(--primary)]">
                ABOUT US
              </span>
              <h1 className="text-[64px] md:text-[96px] font-bold leading-[0.95] tracking-[-0.04em] max-w-[900px] uppercase text-[#111] dark:text-white">
                The people behind QuGenie.
              </h1>
            </div>
            <p className="text-[20px] font-medium leading-[1.4] max-w-[800px] text-[#555] dark:text-[#A6A6A6]">
              QuGenie is built by QuGates Technologies — a deep technology company founded in December 2023 in Bengaluru. We are engineers, operators, and domain practitioners who believe India's businesses deserve software that is sovereign by construction, thermal-hardened, and genuinely intelligent. This page is about the people who carry that conviction, and the values and mission that reaction to it.
            </p>
          </FlowSection>

          {/* Vision Section */}
          <FlowSection className="bg-white dark:bg-[#0a0a0a] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#333]">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-bold tracking-[2px] uppercase text-[var(--primary)] block">
                OUR VISION
              </span>
              <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-[#111] to-[#666] dark:from-white dark:to-[#8a93a2] max-w-[900px]">
                An India where every enterprise — from a single-store MSME to a multi-state institution — runs on intelligent, self-sovereign software, on infrastructure it controls, without surrendering its data or its sovereignty to anyone.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px]">
              {[
                { stat: "01", label: "Sovereignty", desc: "Sovereignty by construction — No dependency on SaaS vendors' decisions." },
                { stat: "02", label: "Intelligent", desc: "Genuinely intelligent — Software that actually does work, not just stores data." },
                { stat: "03", label: "A Right", desc: "Intelligence as a right, not a luxury reserved for large enterprises." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAFAF9] dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] p-8 flex flex-col min-h-[280px]">
                  <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#222] text-[#111] dark:text-white font-bold mb-auto">
                    {item.stat}
                  </div>
                  <div className="mt-auto pt-12">
                    <h4 className="text-[24px] font-bold tracking-tight mb-2 text-[#111] dark:text-white">{item.label}</h4>
                    <p className="text-[16px] leading-[1.4] text-[#555] dark:text-[#A6A6A6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FlowSection>

          {/* Mission Section */}
          <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#222]">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-bold tracking-[2px] uppercase text-[var(--primary)] block">
                OUR MISSION
              </span>
              <p className="text-[20px] md:text-[28px] font-medium leading-[1.4] max-w-[800px] text-[#555] dark:text-[#A6A6A6]">
                To build and deliver QuGenie — a modular, sovereign, agentic ERP — so that any Indian organization can run HR, Finance, CRM, Sales, Inventory, Operations, and compliance from one sovereign platform, configured to the way it actually works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px]">
              {[
                { stat: "04", label: "Platform", desc: "Single platform that is configurable, pluggable, and reliable." },
                { stat: "05", label: "Modularity", desc: "True modularity where the architecture, not the vendor, decides the roadmap." },
                { stat: "06", label: "Guaranteed", desc: "Stand behind every deployment with a named partner and an honest, written guarantee." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] p-8 flex flex-col min-h-[280px]">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F5F5F5] dark:bg-[#222] text-[#111] dark:text-white font-bold mb-auto">
                    {item.stat}
                  </div>
                  <div className="mt-auto pt-12">
                    <h4 className="text-[24px] font-bold tracking-tight mb-2 text-[#111] dark:text-white">{item.label}</h4>
                    <p className="text-[16px] leading-[1.4] text-[#555] dark:text-[#A6A6A6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FlowSection>

          {/* Founders Section */}
          <FlowSection className="bg-white dark:bg-[#0a0a0a] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#333]">
             <div className="w-full h-full flex flex-col justify-center">
                 <TeamCardExpansion items={founderItems} sectionTitle="Founders" subtitle="QuGenie exists because its founders chose to build the sovereign alternative rather than wait for one." />
             </div>
          </FlowSection>

          {/* Team Section */}
          <FlowSection className="bg-[#FAFAF9] dark:bg-[#000000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-[#E5E5E5] dark:border-[#222]">
             <div className="w-full h-full flex flex-col justify-center">
                 <TeamCardExpansion items={teamItems} sectionTitle="The Team" />
             </div>
          </FlowSection>

        </FlowArt>
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
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 64, 193, 0.25) 0%, transparent 60%)`
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
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0040C1]/40 via-[#0040C1]/5 to-transparent blur-[100px] pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

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
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(0,64,193,1)]" />
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
                background: `radial-gradient(600px circle at ${gridMousePos.x}px ${gridMousePos.y}px, rgba(0, 64, 193, 0.15) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 50%)`
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

      {/* Bottom Conversion Band */}
      <Newsletter 
        title="Want to build the sovereign alternative with us?"
        description="Whether you are evaluating QuGenie for your business or looking to join the team, let's talk."
        buttonText="Get in Touch"
        onButtonClick={handleContactClick}
      />

      <Footer />
    </div>
  );
}
