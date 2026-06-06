import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  desc: string;
  num?: string;
  imgTag?: string;
  image: string;
}

interface TeamCardExpansionProps {
  items: TeamMember[];
  sectionTitle: string;
  subtitle?: string;
  designSystem?: string;
}

import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

export function TeamCardExpansion({ items, sectionTitle, subtitle, designSystem: propDesignSystem }: TeamCardExpansionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  const activeItem = items.find(item => item.id === activeId);
  const { designSystem: contextDesignSystem } = useThemeCustomizer();
  const designSystem = propDesignSystem || contextDesignSystem;

  return (
    <div className={`w-full max-w-[1120px] mx-auto px-6 py-12 mt-12 border-t border-[#E5E5E5] dark:border-white/5 relative ${activeId ? 'z-[100]' : 'z-20'}`}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
        <h2 className="text-3xl font-bold text-[#111] dark:text-white tracking-tight min-w-[200px]">{sectionTitle}</h2>
        {subtitle && (
          <p className="text-[#555] dark:text-white/60 text-sm max-w-[500px] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {items.map((item) => (
          <motion.div 
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <GridCard 
              item={item} 
              designSystem={designSystem}
              onClick={(rect) => {
                setActiveRect(rect);
                setActiveId(item.id);
              }} 
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeId && activeItem && activeRect && (
          <ExpandedCard 
            key="expanded-card"
            item={activeItem}
            allItems={items}
            designSystem={designSystem}
            onSelect={(id) => setActiveId(id)}
            rect={activeRect} 
            onClose={() => {
              setActiveId(null);
              setActiveRect(null);
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function GridCard({ item, designSystem, onClick }: { item: TeamMember, designSystem?: string, onClick: (rect: DOMRect) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  if (designSystem === "ebay") {
    return (
      <div 
        ref={ref}
        onClick={() => {
          if (ref.current) onClick(ref.current.getBoundingClientRect());
        }}
        className="w-full cursor-pointer rounded-[24px] overflow-hidden flex flex-col bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-[#333] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 group h-[420px] md:h-[460px]"
      >
        <div className="w-full h-[65%] overflow-hidden bg-[#F5F5F5] dark:bg-[#222]">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-[#111] dark:text-white text-[22px] font-bold tracking-tight mb-1">{item.name}</h3>
            <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-wider">{item.role}</p>
          </div>
          <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-8 h-8 rounded-full bg-[#F5F5F5] dark:bg-[#333] flex items-center justify-center">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#111] dark:text-white" strokeWidth="2">
                 <path d="M5 12h14"></path>
                 <path d="m12 5 7 7-7 7"></path>
               </svg>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      onClick={() => {
        if (ref.current) onClick(ref.current.getBoundingClientRect());
      }}
      className="w-full cursor-pointer rounded-[24px] overflow-hidden flex flex-col relative group h-[420px] md:h-[460px] p-[2px] shadow-lg hover:shadow-[0_8px_30px_rgba(0,93,255,0.25)] transition-all duration-500"
    >
      {/* Animated Rotating Border Effect (visible on hover) */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'conic-gradient(from 90deg, transparent 0%, transparent 60%, color-mix(in srgb, var(--primary) 50%, transparent) 80%, var(--primary) 100%)' }} />
      {/* Blurred copy for the neon glow bleed */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] blur-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'conic-gradient(from 90deg, transparent 0%, transparent 60%, color-mix(in srgb, var(--primary) 50%, transparent) 80%, var(--primary) 100%)' }} />
      
      {/* Static subtle border (visible when not hovered) */}
      <div className="absolute inset-0 border border-white/5 rounded-[24px] group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Inner Card Content */}
      <div className="relative w-full h-full bg-[#000411] rounded-[22px] overflow-hidden flex flex-col z-20">
        <div className="relative w-full h-full shrink-0 overflow-hidden">
           <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#000411] via-[#000411]/50 to-transparent pointer-events-none" />
        </div>

        <div className="p-6 md:p-8 bg-transparent flex-grow flex flex-col justify-end absolute bottom-0 w-full pointer-events-none">
           <h3 className="text-white text-xl md:text-2xl lg:text-[26px] font-bold font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] leading-tight mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{item.name}</h3>
           
           <div className="flex items-end justify-between gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
             <p className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase leading-snug">{item.role}</p>
             
             <div className="w-8 h-8 shrink-0 rounded-full border border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 bg-primary/20">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M5 12h14"></path>
                 <path d="m12 5 7 7-7 7"></path>
               </svg>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ExpandedCard({ item: initialItem, allItems, rect, designSystem, onClose }: { item: TeamMember, allItems: TeamMember[], rect: DOMRect, designSystem?: string, onClose: () => void }) {
  const containerControls = useAnimation();
  const contentControls = useAnimation();
  const clipControls = useAnimation();
  
  const [isClosing, setIsClosing] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [currentItem, setCurrentItem] = useState(initialItem);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  useEffect(() => {
    const openSequence = async () => {
      containerControls.set({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: 16
      });
      contentControls.set({ y: window.innerHeight, opacity: 0 });
      clipControls.set({ clipPath: 'circle(150% at 50% 50%)' }); 

      const ease = [1, 0, 0, 1] as const;

      clipControls.start({ clipPath: 'circle(15% at 50% 50%)', transition: { duration: 0.8, ease } });

      await new Promise(r => setTimeout(r, 320));
      containerControls.start({
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        transition: { duration: 1.2, ease }
      });

      await new Promise(r => setTimeout(r, 600));
      clipControls.start({ clipPath: 'circle(150% at 50% 50%)', transition: { duration: 0.8, ease } });

      await new Promise(r => setTimeout(r, 320));
      await contentControls.start({ y: 0, opacity: 1, transition: { duration: 1.0, ease } });
    };
    
    openSequence();
  }, []);

  const handleClose = async () => {
    if (isClosing || isSwitching) return;
    setIsClosing(true);

    const ease = [1, 0, 0, 1] as const;

    contentControls.start({ y: window.innerHeight, opacity: 0, transition: { duration: 0.8, ease } });
    clipControls.start({ clipPath: 'circle(15% at 50% 50%)', transition: { duration: 0.8, ease } });

    await new Promise(r => setTimeout(r, 320));
    containerControls.start({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 16,
      transition: { duration: 1.2, ease }
    });

    await new Promise(r => setTimeout(r, 600));
    clipControls.start({ clipPath: 'circle(150% at 50% 50%)', transition: { duration: 0.8, ease } });

    await new Promise(r => setTimeout(r, 320));
    
    onClose();
  };

  const handleSwitch = async (newItem: TeamMember) => {
    if (isSwitching || isClosing) return;
    setIsSwitching(true);

    const ease = [1, 0, 0, 1] as const;

    // 1. Slide content down & clip image to circle
    contentControls.start({ y: window.innerHeight, opacity: 0, transition: { duration: 0.8, ease } });
    await clipControls.start({ clipPath: 'circle(15% at 50% 50%)', transition: { duration: 0.8, ease } });

    // 2. SWAP content
    setCurrentItem(newItem);

    // 3. Expand circle & slide content up
    clipControls.start({ clipPath: 'circle(150% at 50% 50%)', transition: { duration: 0.8, ease } });
    await new Promise(r => setTimeout(r, 320));
    await contentControls.start({ y: 0, opacity: 1, transition: { duration: 1.0, ease } });

    setIsSwitching(false);
  };

  const otherItems = allItems.filter(i => i.id !== currentItem.id);

  const isEbay = designSystem === "ebay";

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
       <motion.div 
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1 }} 
         exit={{ opacity: 0 }} 
         className={`absolute inset-0 ${isEbay ? 'bg-black/60' : 'bg-black/80'} backdrop-blur-md pointer-events-auto`}
         onClick={handleClose}
       />

       <motion.div 
         animate={containerControls}
         className={`absolute ${isEbay ? 'bg-[#F9F9F9] dark:bg-[#111] border-[#E5E5E5] dark:border-[#333]' : 'bg-[#000411] border-white/10'} border overflow-hidden flex flex-col pointer-events-auto shadow-2xl`}
         style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height, borderRadius: 16 }}
       >
         <button 
           onClick={handleClose}
           className={`absolute top-6 right-6 z-50 p-3 rounded-full transition-colors ${isEbay ? 'text-[#111] dark:text-white bg-white/50 dark:bg-black/40 hover:bg-[#E5E5E5] dark:hover:bg-[#333]' : 'text-white bg-black/40 hover:bg-primary'}`}
         >
           <X size={24} />
         </button>

         <motion.div animate={clipControls} className={`relative w-full h-full ${isEbay ? 'bg-[#F9F9F9] dark:bg-[#111]' : 'bg-[#000411]'}`}>
            <div className={`absolute top-0 left-0 w-full h-[55vh] md:h-[65vh] flex justify-center ${isEbay ? 'bg-[#F5F5F5] dark:bg-[#222]' : 'bg-[#000411]'}`}>
              <img 
                src={currentItem.image} 
                alt={currentItem.name} 
                className="w-full h-full object-cover object-top md:object-contain md:object-top" 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isEbay ? 'from-[#F9F9F9] dark:from-[#111] via-transparent to-transparent' : 'from-[#000411] via-transparent to-transparent'} pointer-events-none`} />
              <div className={`absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t ${isEbay ? 'from-[#F9F9F9] dark:from-[#111]' : 'from-[#000411]'} to-transparent pointer-events-none`} />
            </div>
            
            <motion.div 
              animate={contentControls} 
              className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 flex flex-col justify-end pointer-events-none"
            >
              <div className="max-w-[1200px] w-full mx-auto relative pointer-events-auto">
                <div>
                  <h3 className={`${isEbay ? 'text-[#111] dark:text-white text-4xl md:text-5xl tracking-tight font-sans' : 'text-white text-4xl md:text-6xl font-[\'Mirage_Display_Medium\',\'Mirage_Display_Medium_Placeholder\',sans-serif]'} font-bold mb-2`}>{currentItem.name}</h3>
                  <p className={`${isEbay ? 'text-[var(--primary)] text-sm md:text-base uppercase tracking-wider' : 'text-primary text-xl tracking-wide'} font-semibold mb-8`}>{currentItem.role}</p>
                  
                  <p className={`text-lg md:text-xl leading-relaxed max-w-[800px] ${isEbay ? 'text-[#555] dark:text-[#A6A6A6] font-medium' : 'text-white/90 font-light'}`}>{currentItem.desc}</p>
                </div>

                {/* Other Team Members Nav */}
                <div className="absolute bottom-0 right-0 flex items-center gap-6 pointer-events-auto">
                  {otherItems.map((other) => (
                    <div 
                      key={other.id}
                      onClick={() => handleSwitch(other)}
                      className="group cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-20 h-20 relative flex items-center justify-center select-none rounded-full overflow-hidden">
                        {/* The Image */}
                        <img 
                          src={other.image} 
                          alt={other.name} 
                          className="absolute inset-0 w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500" 
                        />
                        {/* Dark Overlay */}
                        <div className={`absolute inset-0 group-hover:bg-transparent transition-colors z-10 ${isEbay ? 'bg-black/20' : 'bg-black/50 group-hover:bg-black/10'}`} />
                        
                        {/* The AI Loader Spinning Ring */}
                        {!isEbay && <div className="absolute inset-0 rounded-full animate-loaderCircle pointer-events-none z-20"></div>}
                        {isEbay && <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[var(--primary)] transition-colors pointer-events-none z-20"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
         </motion.div>
       </motion.div>

       {/* AI Loader CSS */}
       <style>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 color-mix(in srgb, var(--primary) 40%, transparent) inset,
              0 12px 18px 0 color-mix(in srgb, var(--primary) 60%, transparent) inset,
              0 36px 36px 0 color-mix(in srgb, var(--primary) 80%, transparent) inset,
              0 0 3px 1.2px color-mix(in srgb, var(--primary) 30%, transparent),
              0 0 6px 1.8px color-mix(in srgb, var(--primary) 20%, transparent);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 color-mix(in srgb, var(--primary) 50%, transparent) inset,
              0 12px 6px 0 color-mix(in srgb, var(--primary) 70%, transparent) inset,
              0 24px 36px 0 color-mix(in srgb, var(--primary) 90%, transparent) inset,
              0 0 3px 1.2px color-mix(in srgb, var(--primary) 30%, transparent),
              0 0 6px 1.8px color-mix(in srgb, var(--primary) 20%, transparent);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 color-mix(in srgb, var(--primary) 40%, transparent) inset,
              0 12px 18px 0 color-mix(in srgb, var(--primary) 60%, transparent) inset,
              0 36px 36px 0 color-mix(in srgb, var(--primary) 80%, transparent) inset,
              0 0 3px 1.2px color-mix(in srgb, var(--primary) 30%, transparent),
              0 0 6px 1.8px color-mix(in srgb, var(--primary) 20%, transparent);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }
       `}</style>
    </div>
  );
}
