'use client';
import { useTransform, motion, useScroll, type MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { Sparkles, Shield, Workflow, Cpu } from 'lucide-react';

interface CardProps {
  i: number;
  title: string;
  tag: string;
  headline: string;
  p1: string;
  p2: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  activeGradient: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  tag,
  headline,
  p1,
  p2,
  icon: Icon,
  activeGradient,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  // local scroll progress to track active state in viewport
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'center center'],
  });

  // Scale of the card managed by the parent scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Smoothly blend the active overlay as the card enters the active/sticky center state
  const activeOpacity = useTransform(scrollYProgress, [0.3, 0.85], [0, 1]);
  
  // Smooth border transition to a glowing vibrant blue border matching reference
  const borderStyle = useTransform(
    scrollYProgress, 
    [0.3, 0.85], 
    ['1px solid rgba(255, 255, 255, 0.05)', '1px solid rgba(0, 82, 235, 0.4)']
  );

  // Active icon background transition - we can't interpolate var() directly to var() smoothly with framer motion
  // unless we use useTransform to return the var string, but then it snaps.
  // Instead, we'll keep the background transparent and use a pseudo element or just let the opacity handle it.
  const iconBgOpacity = useTransform(scrollYProgress, [0.3, 0.85], [0.1, 0.25]);

  // Active icon color transition
  const iconColor = useTransform(
    scrollYProgress,
    [0.3, 0.85],
    ['#155eef', '#ffffff']
  );

  return (
    <div
      ref={container}
      className='h-[60vh] flex items-start justify-center sticky top-[45vh] px-4'
      style={{ fontFamily: "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif" }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20}px)`,
          border: borderStyle,
        }}
        className='flex flex-col relative h-[430px] w-full max-w-[800px] rounded-[4px] p-8 origin-top shadow-2xl justify-between overflow-hidden text-white backdrop-blur-md pointer-events-auto'
      >
        {/* Base Inactive Theme Card Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#0a0815] to-[#020106] z-0' />

        {/* Dynamic Vibrant Blue Spotlight Gradient Overlay when Card becomes Active */}
        <motion.div
          style={{
            background: activeGradient,
            opacity: activeOpacity,
          }}
          className='absolute inset-0 z-0'
        />

        {/* Ambient Top Light Reflection on Active */}
        <motion.div
          style={{ opacity: activeOpacity }}
          className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_55%)] z-0 pointer-events-none'
        />

        {/* Card Content - elevated above background layers */}
        <div className='relative z-10'>
          {/* Header Row */}
          <div className='flex items-center gap-4'>
              <motion.div 
              style={{
                backgroundColor: 'var(--primary)',
                opacity: iconBgOpacity,
              }}
              className='absolute inset-0 rounded-xl'
              />
              <div
                className='w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-xl flex items-center justify-center shrink-0 border border-white/10 relative z-10'
                style={{ boxShadow: '0 0 15px var(--glow-secondary)' }}
              >
              <motion.div style={{ color: iconColor }} className='flex items-center justify-center relative z-10'>
                <Icon size={20} />
              </motion.div>
              </div>
            <div className='flex flex-col'>
              <span className='text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] text-[var(--glow-secondary)]' style={{ textShadow: '0 0 10px var(--glow-secondary)' }}>
                {tag}
              </span>
              <h3 className='text-base md:text-lg font-bold text-white tracking-tight mt-0.5 font-["Mirage_Display_Medium",sans-serif]'>
                {title}
              </h3>
            </div>
          </div>

          {/* Headline */}
          <h2 className='text-xl md:text-[26px] md:leading-[1.25] font-semibold tracking-tight text-white mt-5 font-["Mirage_Display_Medium",sans-serif]'>
            {headline}
          </h2>

          {/* Paragraph 1 */}
          <p className='text-xs md:text-[13.5px] md:leading-[1.6] text-zinc-300 font-sans mt-3.5 font-normal tracking-wide opacity-95'>
            {p1}
          </p>
        </div>

        {/* Paragraph 2 */}
        <p className='relative z-10 text-[11px] md:text-[12.5px] md:leading-[1.55] text-white/50 font-sans mt-3 border-t border-white/10 pt-3.5 opacity-90 font-normal tracking-wide'>
          {p2}
        </p>
      </motion.div>
    </div>
  );
};

const StackingCards = forwardRef<HTMLElement>((_, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const projects = [
    {
      title: "Active Insights",
      tag: "PILLAR 01 · STATIC INTELLIGENCE",
      headline: "Read the state. Spot the anomaly.",
      p1: "Cross-module analytical signals surface the moment something diverges from policy or pattern. Receivables ageing past threshold. Leave balances out of band. GST input mismatched. Alerts come pre-explained — not 'something looks weird', but 'PO-2487 mismatched against Invoice-INV-993, vendor MSME flag inconsistent, suggested action: hold payment until reconciled.'",
      p2: "Static Intelligence reads the present state of the business across every module at once. Because every function writes to one canonical store, the analytical layer never has to reconcile conflicting copies — it reasons over a single truth. The result is signal that arrives where work happens, already carrying its own explanation and a recommended next action.",
      icon: Sparkles,
      activeGradient: "radial-gradient(circle at 50% 50%, var(--glow-primary) 0%, var(--brand-950) 60%, #03010a 100%)"
    },
    {
      title: "Audits",
      tag: "PILLAR 02 · CONTEXT-TEMPORAL INTELLIGENCE",
      headline: "Every change, traced through time.",
      p1: "Chained-hash audit ledger across every module. Reconstruct exactly what was true at any point in the past — who changed it, when, and why. Audit packs generated on demand for statutory filings, board reviews, and external assurance. Compliance teams stop fearing audits and start running them as routine sanity checks.",
      p2: "Context-Temporal Intelligence treats context and time as a single fabric — the platform does not just know what is true, it knows what was true, and the path between the two. Every mutation is chained and hashed, so the historical record is tamper-evident by construction. An audit stops being a quarterly fire-drill and becomes a query.",
      icon: Shield,
      activeGradient: "radial-gradient(circle at 50% 50%, var(--glow-secondary) 0%, var(--brand-900) 60%, #03010a 100%)"
    },
    {
      title: "Autonomic",
      tag: "PILLAR 03 · CONNECTED · SWARM INTELLIGENCE",
      headline: "Workflows that run themselves.",
      p1: "Approval routing, escalation, notification, reconciliation — engine-driven, not human-driven. Cross-module workflows coordinate without manual orchestration. Define policy once; the platform applies it everywhere. Leave requests, expense claims, credit approvals, and statutory filings flow through their own paths while humans focus on the exceptions.",
      p2: "Connected · Swarm Intelligence is the coordination layer: many small policy-driven processes acting in concert without a human conductor. Because the workflow engine sits inside the unified core rather than bolted on as middleware, a process started in one module completes in another with no integration seam. Humans are escalated to — they no longer route.",
      icon: Workflow,
      activeGradient: "radial-gradient(circle at 50% 50%, var(--glow-primary) 0%, var(--brand-800) 60%, #03010a 100%)"
    },
    {
      title: "Embodied",
      tag: "PILLAR 04 · PHYSICAL · EMBODIED INTELLIGENCE",
      headline: "From software to substance.",
      p1: "Native integration with biometric attendance, IoT sensors, barcode and QR systems, edge devices, and (soon) humanoid floor agents. Operational reality flows into the data layer without an integration tax. The ERP isn't a passive recorder of what happened — it senses, acts, and learns at the edge.",
      p2: "Physical · Embodied Intelligence closes the loop between the operational record and the operational world. Attendance, inventory movement, sensor telemetry and floor activity enter the data layer as first-class events, not after-the-fact imports. The platform perceives the business as it actually runs — and increasingly, acts back on it.",
      icon: Cpu,
      activeGradient: "radial-gradient(circle at 50% 50%, var(--glow-secondary) 0%, var(--brand-950) 60%, #03010a 100%)"
    }
  ];

  return (
    <div ref={container} className='bg-[#03010a] relative w-full' data-name="StackingCardsSection">
      
      {/* 1. STICKY BACKGROUND & TEXT THAT STAYS ON SCREEN */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none flex flex-col items-center justify-start pt-[12vh]">
        {/* Background Layers */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_65%)] opacity-15' />
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1f293733_1px,transparent_1px),linear-gradient(to_bottom,#1f293733_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]' />
        
        {/* Text Content */}
        <div className='relative z-10 text-center px-6 flex flex-col items-center gap-3 w-full max-w-[800px]'>
          <span className='text-[10px] font-bold uppercase tracking-[4px] text-[#34d399]'>
            ARCHITECTURE
          </span>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white font-["Mirage_Display_Medium",sans-serif]'>
            Four Pillars.<br />One Unified Core.
          </h1>
          <p className='text-[15px] md:text-[17px] leading-[28px] text-zinc-300 mt-4 mb-4'>
            Most ERP vendors bolt a chat assistant onto a legacy data model and call it AI. QuGenie inverts that. Intelligence is part of the architecture — four distinct pillars, each reasoning over the same canonical store, each producing a concrete operational outcome rather than a conversational one.
          </p>
          <div className='text-xl opacity-50 animate-bounce'>
            ↓
          </div>
        </div>
      </div>

      <section className='text-white w-full pb-[20vh] relative z-10'>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.04;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={project.title}
              tag={project.tag}
              headline={project.headline}
              p1={project.p1}
              p2={project.p2}
              icon={project.icon}
              activeGradient={project.activeGradient}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
});

StackingCards.displayName = 'StackingCards';

export default StackingCards;
