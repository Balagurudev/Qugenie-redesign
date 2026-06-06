import { motion } from "motion/react";
import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
}

const FONT = "var(--font-family, 'Market Sans', 'DM Sans', sans-serif)";

export function Newsletter({
  title = "One platform for every department. See it\nrun on your data.",
  description = "",
  buttonText = "Book a Free Demo",
  onButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick
}: NewsletterProps) {
  const { designSystem } = useThemeCustomizer();

  const handleDefaultClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (designSystem === "cinematic") {
    return (
      <section className="w-full max-w-[1280px] mx-auto px-6 py-[100px] relative z-10" data-name="Newsletter">
        <div className="relative overflow-hidden bg-card/40 border border-border/60 rounded-[24px] p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[120px] bg-[var(--primary)] opacity-30 blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2] whitespace-pre-line">
              {title}
            </h2>
            
            {description && (
              <p className="text-[18px] md:text-[20px] text-[#A6A6A6] max-w-[600px] whitespace-pre-line">
                {description}
              </p>
            )}

            <motion.div className="mt-4 flex flex-wrap gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onButtonClick || handleDefaultClick}
                className="bg-[var(--primary)] text-white font-semibold text-[15px] px-8 py-3 rounded-[8px] hover:shadow-[0_8px_20px_var(--glow-primary)] transition-all cursor-pointer"
              >
                {buttonText}
              </motion.button>

              {secondaryButtonText && (
                <motion.button
                  onClick={onSecondaryButtonClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white font-semibold text-[15px] px-8 py-3 rounded-[8px] border border-border/60 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {secondaryButtonText}
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // eBay Design System Newsletter
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-[80px]" data-name="Newsletter" style={{ fontFamily: FONT }}>
      <div className="bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333] rounded-[24px] p-12 md:p-24 flex flex-col items-center justify-center text-center">
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[48px] font-bold text-[#111] dark:text-white leading-[1.1] max-w-[900px] tracking-tight whitespace-pre-line"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[18px] md:text-[20px] text-[#555] dark:text-[#A6A6A6] max-w-[600px] whitespace-pre-line"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={onButtonClick || handleDefaultClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--primary)] text-white font-semibold text-[16px] px-8 py-4 rounded-full transition-colors cursor-pointer shadow-sm hover:opacity-90"
            >
              {buttonText}
            </motion.button>
            {secondaryButtonText && (
              <motion.button
                onClick={onSecondaryButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-[#222] text-[#111] dark:text-white font-semibold text-[16px] px-8 py-4 rounded-full border border-[#ccc] dark:border-[#444] hover:border-[#111] dark:hover:border-white transition-colors cursor-pointer shadow-sm"
              >
                {secondaryButtonText}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
