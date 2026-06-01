import { motion } from "motion/react";

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
  const handleDefaultClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-[80px]" data-name="Newsletter" style={{ fontFamily: FONT }}>
      <div className="bg-[#111111] dark:bg-[#0a0a0a] border border-[#333] rounded-[24px] p-12 md:p-24 flex flex-col items-center justify-center text-center">
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[56px] font-bold text-white leading-[1.1] max-w-[900px] tracking-tight whitespace-pre-line"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[18px] md:text-[20px] text-[#A6A6A6] max-w-[600px] whitespace-pre-line"
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
              className="bg-[var(--primary)] text-white font-bold text-[18px] px-8 py-4 rounded-lg transition-colors cursor-pointer hover:bg-white hover:text-black shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
            >
              {buttonText}
            </motion.button>
            {secondaryButtonText && (
              <motion.button
                onClick={onSecondaryButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white font-bold text-[18px] px-8 py-4 rounded-lg border border-[#333] hover:border-white transition-colors cursor-pointer"
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
