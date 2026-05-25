import { motion } from "motion/react";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
}

export function Newsletter({
  title = "Ready to Take Control of\nYour Backend?",
  description = "Build and manage databases that power real products and workflows.",
  buttonText = "Get Started Free",
  onButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick
}: NewsletterProps) {
  const handleDefaultClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-[80px]" data-name="Newsletter">
      <div className="relative overflow-hidden bg-[#08090f] border border-[#1f2233] rounded-[32px] p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl">
        
        {/* Background Grid/Dot Pattern matching reference */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Asymmetrical Bottom-Right Glow Effect (Brand Colors) */}
        {/* Wide, deep brand blue spread */}
        <div className="absolute -bottom-[200px] -right-[100px] w-[80%] h-[600px] bg-[#0040C1] opacity-30 blur-[130px] rounded-full pointer-events-none" />
        
        {/* Core vibrant blue glow at bottom right */}
        <div className="absolute -bottom-[100px] -right-[50px] w-[500px] h-[400px] bg-[#5586ff] opacity-[0.45] blur-[100px] rounded-full pointer-events-none" />
        
        {/* Intense white/light-blue highlight exactly at the bottom right edge */}
        <div className="absolute -bottom-[50px] -right-[20px] w-[300px] h-[200px] bg-white opacity-[0.15] blur-[80px] rounded-full pointer-events-none" />
        
        {/* Sharp bottom edge light beam, intensifying towards the right */}
        <div className="absolute bottom-0 right-0 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#5586ff]/60 to-[#ffffff]/90" />


        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[44px] font-semibold text-foreground leading-[1.2] max-w-[800px] tracking-[-0.02em] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif] whitespace-pre-line"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-muted-foreground max-w-[800px] whitespace-pre-line"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={onButtonClick || handleDefaultClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0040C1] text-white font-semibold text-[15px] px-8 py-3 rounded-[8px] hover:shadow-[0_8px_20px_rgba(0,64,193,0.3)] transition-all cursor-pointer"
            >
              {buttonText}
            </motion.button>
            {secondaryButtonText && (
              <motion.button
                onClick={onSecondaryButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white font-semibold text-[15px] px-8 py-3 rounded-[8px] border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
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
